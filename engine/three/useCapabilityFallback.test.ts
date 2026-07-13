import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { detectCapabilityTier, useCapabilityFallback } from "./useCapabilityFallback";

function mockWebglContext(rendererString: string | null) {
  const debugInfo = { UNMASKED_RENDERER_WEBGL: "UNMASKED_RENDERER_WEBGL" };
  return {
    getExtension: (name: string) => (name === "WEBGL_debug_renderer_info" ? debugInfo : null),
    getParameter: () => rendererString,
  } as unknown as WebGLRenderingContext;
}

describe("detectCapabilityTier", () => {
  const originalCreateElement = document.createElement.bind(document);

  afterEach(() => {
    document.createElement = originalCreateElement;
    vi.unstubAllGlobals();
  });

  it("returns 'simplified' when WebGL is unavailable", () => {
    document.createElement = vi.fn().mockReturnValue({
      getContext: () => null,
    }) as unknown as typeof document.createElement;

    expect(detectCapabilityTier()).toBe("simplified");
  });

  it("returns 'full' for a capable discrete-GPU-like device", () => {
    document.createElement = vi.fn().mockReturnValue({
      getContext: () => mockWebglContext("NVIDIA GeForce RTX"),
    }) as unknown as typeof document.createElement;
    vi.stubGlobal("navigator", { hardwareConcurrency: 8 });

    expect(detectCapabilityTier()).toBe("full");
  });

  it("returns 'simplified' for a low-concurrency integrated GPU", () => {
    document.createElement = vi.fn().mockReturnValue({
      getContext: () => mockWebglContext("Intel(R) UHD Graphics"),
    }) as unknown as typeof document.createElement;
    vi.stubGlobal("navigator", { hardwareConcurrency: 2 });

    expect(detectCapabilityTier()).toBe("simplified");
  });
});

describe("useCapabilityFallback", () => {
  beforeEach(() => {
    vi.stubGlobal("navigator", { hardwareConcurrency: 8 });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("resolves to a tier after mount", async () => {
    const { result } = renderHook(() => useCapabilityFallback());
    await waitFor(() => expect(["full", "simplified"]).toContain(result.current));
  });
});
