"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/engine/motion/useReducedMotion";
import { fadeVariants, getFramerTransition } from "@/engine/motion/transitions";

type FadeTransitionProps = {
  /** Unique key identifying the current content — changing it triggers the cross-fade. */
  transitionKey: string;
  children: ReactNode;
  className?: string;
};

/**
 * FadeTransition — generic mount/unmount fade wrapper (Invita-Motion-3D-
 * Production-Bible.md §23 Element transitions: Medium-tier Soft Fade
 * cross-fade only), proving the token→preset pipeline works end-to-end.
 * Not wired into any real route or Scene in Sprint 3 — demonstrated only
 * in the dev-only style guide.
 */
export function FadeTransition({ transitionKey, children, className }: FadeTransitionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transitionKey}
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={getFramerTransition("element", reducedMotion)}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
