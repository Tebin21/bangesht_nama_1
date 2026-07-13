"use client";

import { useEffect } from "react";
import { useScrollStore } from "@/state/scrollStore";

type ScrollProviderProps = {
  children: React.ReactNode;
};

/**
 * ScrollProvider — bootstrap component instantiating Lenis smooth-scroll
 * once (Invita-Motion-3D-Production-Bible.md §14 names Lenis as the smooth-
 * scroll layer) and publishing its scroll progress into the Zustand scroll
 * store (Invita-Technical-Architecture-Engineering-Blueprint.md §18). No
 * Scene reads this yet in Sprint 3 — value only. Lenis is dynamically
 * imported so it never lands in the initial JS payload.
 */
export function ScrollProvider({ children }: ScrollProviderProps) {
  const setScrollProgress = useScrollStore((state) => state.setScrollProgress);

  useEffect(() => {
    let lenis: import("lenis").default | undefined;
    let rafId: number | undefined;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis();
      lenis.on("scroll", ({ progress }: { progress: number }) => {
        setScrollProgress(progress);
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, [setScrollProgress]);

  return children;
}
