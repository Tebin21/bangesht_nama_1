import { describe, it, expect, beforeEach } from "vitest";
import { useScrollStore } from "./scrollStore";

describe("useScrollStore", () => {
  beforeEach(() => {
    useScrollStore.setState({ scrollProgress: 0 });
  });

  it("defaults to scrollProgress: 0", () => {
    expect(useScrollStore.getState().scrollProgress).toBe(0);
  });

  it("updates scrollProgress via setScrollProgress", () => {
    useScrollStore.getState().setScrollProgress(0.5);
    expect(useScrollStore.getState().scrollProgress).toBe(0.5);
  });
});
