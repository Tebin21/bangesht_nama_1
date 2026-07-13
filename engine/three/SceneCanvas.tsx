"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { useCapabilityFallback } from "./useCapabilityFallback";

const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
});

type SceneCanvasProps = {
  children: ReactNode;
  className?: string;
};

/**
 * SceneCanvas — the reusable R3F Canvas wrapper. Per Invita-Technical-
 * Architecture-Engineering-Blueprint.md §15/§33: one Canvas is mounted per
 * *active* 3D-bearing Scene, never a persistent full-page Canvas — this
 * component is meant to be mounted/unmounted by a future Scene component's
 * lifecycle, not rendered once globally.
 *
 * Renderer configuration (Invita-Motion-3D-Production-Bible.md §10: "soft-
 * over-sharp" shadow priority):
 * - `shadows="soft"` → PCFSoftShadowMap, wide penumbra over sharp shadow-map
 *   resolution, exactly as documented.
 * - `dpr={[1, 2]}` → R3F clamps device pixel ratio to at most 2, protecting
 *   performance on high-DPI phones.
 * - Tone mapping (ACESFilmicToneMapping) and modern color management
 *   (sRGB output) are R3F's own defaults — no manual override needed;
 *   `flat`/`legacy` exist specifically to opt OUT of them, so they're left
 *   unset here on purpose.
 * - `powerPreference` relaxes under the capability-fallback tier
 *   (Technical-Architecture-Engineering-Blueprint.md §15 / Design-System-
 *   Component-Library-Bible.md §22: fallback logic lives at the Scene tier).
 *
 * `three`/`@react-three/fiber` are loaded via `next/dynamic` so neither
 * lands in the initial JS payload of any route until a Scene actually
 * mounts this component (none does yet in Sprint 4).
 */
export function SceneCanvas({ children, className }: SceneCanvasProps) {
  const capabilityTier = useCapabilityFallback();

  return (
    <Canvas
      className={className}
      shadows="soft"
      dpr={[1, 2]}
      gl={{
        antialias: capabilityTier === "full",
        powerPreference: capabilityTier === "full" ? "high-performance" : "default",
      }}
    >
      {children}
    </Canvas>
  );
}
