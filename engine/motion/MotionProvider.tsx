"use client";

import { useEffect } from "react";
import { useMotionPreferenceStore } from "@/state/motionPreferenceStore";
import { motionEasing } from "@/design-system/tokens/motion";

async function configureGsapDefaults(reducedMotion: boolean) {
  const { default: gsap } = await import("gsap");
  gsap.defaults({
    ease: reducedMotion ? motionEasing.softFade.gsap : motionEasing.arrivalSettle.gsap,
  });
}

type MotionProviderProps = {
  children: React.ReactNode;
};

/**
 * MotionProvider — bootstrap component, not a React Context provider (see
 * the Sprint 3 plan's Zustand-vs-Provider reconciliation). Detects
 * `prefers-reduced-motion` on mount and on every OS-level change, writing
 * into the reduced-motion Zustand store (Invita-Technical-Architecture-
 * Engineering-Blueprint.md §18), and configures GSAP's default ease to
 * match. GSAP is dynamically imported so it never lands in the initial JS
 * payload before any Scene needs it (no Scene exists yet in Sprint 3).
 */
export function MotionProvider({ children }: MotionProviderProps) {
  const setReducedMotion = useMotionPreferenceStore((state) => state.setReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReducedMotion(mediaQuery.matches);
    void configureGsapDefaults(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
      void configureGsapDefaults(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setReducedMotion]);

  return children;
}
