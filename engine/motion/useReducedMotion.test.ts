import { describe, it, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useReducedMotion } from "./useReducedMotion";
import { useMotionPreferenceStore } from "@/state/motionPreferenceStore";

describe("useReducedMotion", () => {
  beforeEach(() => {
    useMotionPreferenceStore.setState({ reducedMotion: false });
  });

  it("reflects the store's reducedMotion value", () => {
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  it("updates when the store changes", () => {
    const { result, rerender } = renderHook(() => useReducedMotion());
    useMotionPreferenceStore.getState().setReducedMotion(true);
    rerender();
    expect(result.current).toBe(true);
  });
});
