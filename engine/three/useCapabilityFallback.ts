"use client";

import { useEffect, useState } from "react";

export type CapabilityTier = "full" | "simplified";

/**
 * Lightweight, synchronous device-capability heuristic — exported
 * separately so it's unit-testable without mounting a component. Not a
 * benchmark: a best-effort signal combining GPU renderer string,
 * hardwareConcurrency, and pixel ratio.
 */
export function detectCapabilityTier(): CapabilityTier {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return "full";
  }

  const hardwareConcurrency = navigator.hardwareConcurrency ?? 4;
  const pixelRatio = window.devicePixelRatio ?? 1;

  let rendererInfo = "";
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") ?? canvas.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return "simplified";

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      rendererInfo = String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)).toLowerCase();
    }
  } catch {
    return "simplified";
  }

  const isLikelyIntegratedGpu = /(intel|swiftshader|software|mali|adreno 3|adreno 4)/.test(rendererInfo);
  const isLowConcurrency = hardwareConcurrency <= 4;
  const isHighDensityMobile = pixelRatio > 2;

  if (isLikelyIntegratedGpu && isLowConcurrency) return "simplified";
  if (isLowConcurrency && isHighDensityMobile) return "simplified";
  return "full";
}

/**
 * useCapabilityFallback — one-time-at-initialization device-capability
 * check producing a fidelity tier, per Invita-Technical-Architecture-
 * Engineering-Blueprint.md §15 ("capability-detection... fallback to a
 * simplified object/lighting configuration, never a functionally different
 * scene") and Invita-Design-System-Component-Library-Bible.md §22 ("the
 * fallback/performance boundary lives at the Scene tier, not inside
 * individual 3D Object Components"). Read once, matching the "Scene Engine
 * reads... once at initialization" precedent already established for
 * reduced-motion (Sprint 3's useSceneTimeline).
 */
export function useCapabilityFallback(): CapabilityTier {
  const [tier, setTier] = useState<CapabilityTier>("full");

  useEffect(() => {
    // Deliberately not a lazy useState initializer: this reads a real
    // browser/WebGL capability that doesn't exist during SSR. Starting at
    // "full" and updating once after mount keeps the server-rendered and
    // first-client-render output identical (no hydration mismatch), then
    // corrects to the real value immediately after — the standard pattern
    // for reading browser-only APIs safely in a client component.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTier(detectCapabilityTier());
  }, []);

  return tier;
}
