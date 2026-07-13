import { useMotionPreferenceStore } from "@/state/motionPreferenceStore";

/**
 * Convenience hook over the reduced-motion Zustand store — consumers never
 * need to know the underlying state is Zustand-backed. Value is bootstrapped
 * and kept live by <MotionProvider>, which must be mounted above any caller.
 */
export function useReducedMotion(): boolean {
  return useMotionPreferenceStore((state) => state.reducedMotion);
}
