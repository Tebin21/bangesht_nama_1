"use client";

import { useEffect, useRef } from "react";
import type gsap from "gsap";
import { useReducedMotion } from "@/engine/motion/useReducedMotion";

/**
 * useSceneTimeline — Invita-Motion-3D-Production-Bible.md §15: "each Scene
 * owns exactly one root GSAP timeline." Creates and tears down that one
 * root timeline for the calling component. Reduced-motion is captured once
 * at initialization, matching Invita-Technical-Architecture-Engineering-
 * Blueprint.md §13 ("the Scene Engine reads the guest's reduced-motion
 * preference... once at initialization"), not re-read on later toggles.
 * No Scene exists yet in Sprint 3 — verified via unit test only. Future
 * Scene components are the only intended consumers (Invita-Design-System-
 * Component-Library-Bible.md §3: "the only tier permitted to own a root
 * motion timeline").
 */
export function useSceneTimeline() {
  const reducedMotion = useReducedMotion();
  const initialReducedMotionRef = useRef(reducedMotion);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    let cancelled = false;

    import("gsap").then(({ default: gsapInstance }) => {
      if (cancelled) return;
      timelineRef.current = gsapInstance.timeline({ paused: initialReducedMotionRef.current });
    });

    return () => {
      cancelled = true;
      timelineRef.current?.kill();
      timelineRef.current = null;
    };
  }, []);

  return timelineRef;
}
