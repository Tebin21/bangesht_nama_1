import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { MotionProvider } from "./MotionProvider";
import { ScrollProvider } from "./ScrollProvider";

vi.mock("gsap", () => ({
  default: {
    defaults: vi.fn(),
    timeline: vi.fn(() => ({ kill: vi.fn() })),
  },
}));

vi.mock("lenis", () => ({
  default: vi.fn().mockImplementation(function MockLenis() {
    return {
      on: vi.fn(),
      raf: vi.fn(),
      destroy: vi.fn(),
    };
  }),
}));

describe("MotionProvider + ScrollProvider", () => {
  beforeEach(() => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })) as unknown as typeof window.matchMedia;
  });

  it("mount together without throwing (SSR/hydration guard)", () => {
    expect(() =>
      render(
        <MotionProvider>
          <ScrollProvider>
            <div>content</div>
          </ScrollProvider>
        </MotionProvider>,
      ),
    ).not.toThrow();
  });
});
