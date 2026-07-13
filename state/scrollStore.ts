import { create } from "zustand";

/**
 * Scene/UI scroll progress — Invita-Technical-Architecture-Engineering-
 * Blueprint.md §18: "Scene/UI interaction state: ... current scroll-driven
 * progress (coordinated with Lenis, §14)." Written by ScrollProvider on
 * every Lenis scroll tick; read anywhere via useScrollProgress(). Value
 * only in Sprint 3 — no Scene consumes it yet.
 */
interface ScrollState {
  scrollProgress: number;
  setScrollProgress: (scrollProgress: number) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollProgress: 0,
  setScrollProgress: (scrollProgress) => set({ scrollProgress }),
}));
