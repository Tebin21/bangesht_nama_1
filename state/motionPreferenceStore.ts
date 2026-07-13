import { create } from "zustand";

/**
 * Global reduced-motion preference — Invita-Technical-Architecture-
 * Engineering-Blueprint.md §18: "Global state: ... reduced-motion
 * preference." Written once by MotionProvider on mount (and on OS
 * preference change); read anywhere via useReducedMotion().
 */
interface MotionPreferenceState {
  reducedMotion: boolean;
  setReducedMotion: (reducedMotion: boolean) => void;
}

export const useMotionPreferenceStore = create<MotionPreferenceState>((set) => ({
  reducedMotion: false,
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
}));
