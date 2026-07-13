import { describe, it, expect, beforeEach } from "vitest";
import { useMotionPreferenceStore } from "./motionPreferenceStore";

describe("useMotionPreferenceStore", () => {
  beforeEach(() => {
    useMotionPreferenceStore.setState({ reducedMotion: false });
  });

  it("defaults to reducedMotion: false", () => {
    expect(useMotionPreferenceStore.getState().reducedMotion).toBe(false);
  });

  it("updates reducedMotion via setReducedMotion", () => {
    useMotionPreferenceStore.getState().setReducedMotion(true);
    expect(useMotionPreferenceStore.getState().reducedMotion).toBe(true);
  });
});
