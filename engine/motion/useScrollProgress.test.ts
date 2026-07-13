import { describe, it, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useScrollProgress } from "./useScrollProgress";
import { useScrollStore } from "@/state/scrollStore";

describe("useScrollProgress", () => {
  beforeEach(() => {
    useScrollStore.setState({ scrollProgress: 0 });
  });

  it("reflects the store's scrollProgress value", () => {
    const { result } = renderHook(() => useScrollProgress());
    expect(result.current).toBe(0);
  });

  it("updates when the store changes", () => {
    const { result, rerender } = renderHook(() => useScrollProgress());
    useScrollStore.getState().setScrollProgress(0.75);
    rerender();
    expect(result.current).toBe(0.75);
  });
});
