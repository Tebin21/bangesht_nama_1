import { useScrollStore } from "@/state/scrollStore";

/**
 * Convenience hook over the scroll-progress Zustand store. Value is
 * published by <ScrollProvider>, which must be mounted above any caller.
 * No Scene consumes this yet in Sprint 3 — value only.
 */
export function useScrollProgress(): number {
  return useScrollStore((state) => state.scrollProgress);
}
