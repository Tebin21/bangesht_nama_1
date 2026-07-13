import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useSceneTimeline } from "./useSceneTimeline";
import { useMotionPreferenceStore } from "@/state/motionPreferenceStore";

const killMock = vi.fn();
const timelineMock = vi.fn(() => ({ kill: killMock }));

vi.mock("gsap", () => ({
  default: {
    timeline: () => timelineMock(),
  },
}));

describe("useSceneTimeline", () => {
  beforeEach(() => {
    useMotionPreferenceStore.setState({ reducedMotion: false });
    timelineMock.mockClear();
    killMock.mockClear();
  });

  it("creates exactly one root GSAP timeline on mount", async () => {
    const { result } = renderHook(() => useSceneTimeline());
    await waitFor(() => expect(timelineMock).toHaveBeenCalledTimes(1));
    expect(result.current.current).toBeTruthy();
  });

  it("kills the timeline on unmount", async () => {
    const { unmount } = renderHook(() => useSceneTimeline());
    await waitFor(() => expect(timelineMock).toHaveBeenCalledTimes(1));
    unmount();
    expect(killMock).toHaveBeenCalledTimes(1);
  });
});
