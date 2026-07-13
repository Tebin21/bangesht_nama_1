import type { Transition, Variants } from "framer-motion";
import {
  resolveEasing,
  transitionPresets,
  type MotionEasingName,
  type TransitionPresetName,
} from "@/design-system/tokens/motion";

/**
 * Builds a Framer Motion transition object from a named preset (§23),
 * respecting reduced-motion per §20 (same duration, Soft Fade curve).
 */
export function getFramerTransition(preset: TransitionPresetName, reducedMotion = false): Transition {
  const config = transitionPresets[preset];
  const easing = resolveEasing(config.easing, reducedMotion);
  return {
    duration: config.duration / 1000,
    ease: easing.framer,
  };
}

/** GSAP ease string for a named easing curve, respecting reduced-motion. */
export function getGsapEase(name: MotionEasingName, reducedMotion = false): string {
  return resolveEasing(name, reducedMotion).gsap;
}

/**
 * §23 Element transitions: Medium-tier Soft Fade cross-fade only. Generic
 * mount/unmount variants for use with Framer Motion's AnimatePresence.
 */
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
