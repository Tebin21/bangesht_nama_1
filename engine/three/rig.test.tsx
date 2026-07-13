import { describe, it, expect, afterEach, vi } from "vitest";
import { useEffect, useState, type ComponentType } from "react";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import { CameraRig } from "./CameraRig";
import { LightingRig } from "./LightingRig";

/**
 * Swaps next/dynamic's real (Next.js-specific) implementation for a plain
 * React state/effect lazy-loader — the mocked version resolves reliably
 * under this custom-reconciler test harness. Production code (SceneCanvas/
 * CameraRig/LightingRig/Environment) is untouched — only the test
 * environment's module resolution changes.
 */
vi.mock("next/dynamic", () => ({
  default: (loader: () => Promise<Record<string, unknown>>) => {
    return function DynamicMock(props: Record<string, unknown>) {
      const [Component, setComponent] = useState<ComponentType<Record<string, unknown>> | null>(null);
      useEffect(() => {
        let mounted = true;
        loader().then((mod) => {
          if (mounted) setComponent(() => (mod.default ?? mod) as ComponentType<Record<string, unknown>>);
        });
        return () => {
          mounted = false;
        };
      }, []);
      return Component ? <Component {...props} /> : null;
    };
  },
}));

/** Polls until `check()` is true — @react-three/test-renderer's own `waitFor` proved unreliable for dynamic-import-resolved subtrees in this harness; a plain interval poll works correctly (confirmed via direct timeline inspection). */
async function waitUntil(check: () => boolean, { timeout = 2000, interval = 50 } = {}) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (check()) return;
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  throw new Error("waitUntil: condition not met within timeout");
}

/**
 * Structural component-tree tests for the 3D Rig, per the Sprint 4 plan's
 * Testing Strategy. @react-three/test-renderer builds the R3F scene graph
 * without a real GPU/WebGL context — it verifies structure (camera/light
 * counts), not pixels or "material believability," which the plan
 * explicitly defers to a human, GPU-backed browser check.
 *
 * Confirmed genuinely incompatible with this harness during investigation
 * (not worked around, not a production bug — each is standard, correct R3F/
 * Three.js usage that works in a real browser) and therefore verified
 * manually in-browser only, per the plan's own acknowledged testing limit
 * for GPU/real-async-resource-dependent behavior:
 * - `@react-three/postprocessing`'s EffectComposer requires a real WebGL
 *   context (it reads renderer context attributes internally) and throws
 *   under the test-renderer's mock context — so the "full" capability
 *   tier's bloom pass is not exercised here.
 * - `@react-three/drei`'s `<Environment>` suspends on real HDRI texture
 *   loading, which this mock harness cannot resolve — `Environment.tsx` is
 *   not exercised here at all.
 * - Scene-level `attach="fog"` did not reflect onto `scene.instance.fog` in
 *   this test-renderer's reconciler even in full isolation (no dynamic
 *   import, no Suspense involved) — a limitation of the test-renderer
 *   itself, not of the `attach` mechanism, which is standard R3F behavior.
 * - SceneCanvas itself (the real DOM `<Canvas>` mount) is intentionally not
 *   exercised here either — covered by the dev-only style guide demo and a
 *   manual browser check instead.
 *
 * Note: `findAllByType` matches the underlying THREE.js class name
 * (PascalCase, e.g. "PerspectiveCamera"), not the lowercase R3F JSX
 * intrinsic tag name — confirmed via `renderer.toGraph()`.
 */
describe("3D Rig", () => {
  let renderer: Awaited<ReturnType<typeof ReactThreeTestRenderer.create>> | null = null;

  afterEach(async () => {
    await renderer?.unmount();
    renderer = null;
  });

  it("CameraRig mounts exactly one perspective camera", async () => {
    renderer = await ReactThreeTestRenderer.create(<CameraRig />);
    await waitUntil(() => renderer!.scene.findAllByType("PerspectiveCamera").length === 1);
    expect(renderer.scene.findAllByType("PerspectiveCamera")).toHaveLength(1);
  });

  it("LightingRig produces exactly one ambient light and two directional lights", async () => {
    renderer = await ReactThreeTestRenderer.create(<LightingRig capabilityTier="simplified" />);
    await waitUntil(() => renderer!.scene.findAllByType("AmbientLight").length === 1);
    expect(renderer.scene.findAllByType("AmbientLight")).toHaveLength(1);
    expect(renderer.scene.findAllByType("DirectionalLight")).toHaveLength(2);
  });
});
