/**
 * Motion tokens — Invita-Motion-3D-Production-Bible.md §21 (Animation
 * Timing Library) and §22 (Easing Library). The source doc gives durations
 * as ranges and easings as named qualitative curves with no cubic-bezier
 * numbers; concrete values below are this sprint's formalization — each
 * cited to its source and flagged as an interpretive approximation pending
 * motion-designer review (same pattern as Sprint 2's authored copy).
 */

export const motionDuration = {
  fast: 200, // ms — §21 Fast (micro-interaction): 150-250ms
  medium: 500, // §21 Medium (element reveal): 400-600ms
  slow: 1000, // §21 Slow (composed reveal): 800ms-1.2s
  hero: 2000, // §21 Hero (signature moment): 1.5-2.5s
  scene: 3200, // §21 Scene (full sequence): 2.5-4s
  pageAct: 6000, // §21 Page/Act: 4-8s
} as const;

export type MotionEasingName =
  | "candleBloom"
  | "arrivalSettle"
  | "weightedResistance"
  | "livingPulse"
  | "softFade";

export interface EasingDefinition {
  /** GSAP native ease string. */
  gsap: string;
  /** Framer Motion cubic-bezier tuple. */
  framer: [number, number, number, number];
  description: string;
}

export const motionEasing: Record<MotionEasingName, EasingDefinition> = {
  candleBloom: {
    gsap: "power2.in",
    framer: [0.55, 0.09, 0.68, 0.53],
    description:
      "§22 Candle Bloom — slow soft ease-in, gathering intensity (light/glow ramps). Interpretive approximation, pending motion-designer review.",
  },
  arrivalSettle: {
    gsap: "back.out(1.4)",
    framer: [0.34, 1.56, 0.64, 1],
    description:
      "§22 Arrival Settle — ease-out with 1-2% overshoot then quick correction; default arrival curve (photo/card entrances). Interpretive approximation, pending motion-designer review.",
  },
  weightedResistance: {
    gsap: "power4.inOut",
    framer: [0.83, 0, 0.17, 1],
    description:
      "§22 Weighted Resistance — pronounced slow start, then accelerate/decelerate (wax seal crack, envelope flap). Interpretive approximation, pending motion-designer review.",
  },
  livingPulse: {
    gsap: "sine.inOut",
    framer: [0.45, 0, 0.55, 1],
    description:
      "§22 Living Pulse — symmetrical sine-like oscillation (ambient glow-pulses); intended for an infinite mirrored repeat, not a one-shot easing. Interpretive approximation, pending motion-designer review.",
  },
  softFade: {
    gsap: "sine.inOut",
    framer: [0.45, 0, 0.55, 1],
    description:
      "§22 Soft Fade — symmetrical ease-in-out, no overshoot (reduced-motion cross-fades, Scrim Overlay). Interpretive approximation, pending motion-designer review.",
  },
};

/**
 * §20 Accessibility Motion: the reduced-motion alternative keeps the same
 * duration/sequence and only simplifies the curve to Soft Fade — never a
 * "stripped-down, lesser version." This helper encodes that rule.
 */
export function resolveEasing(name: MotionEasingName, reducedMotion: boolean): EasingDefinition {
  return reducedMotion ? motionEasing.softFade : motionEasing[name];
}

export type TransitionPresetName = "scene" | "element" | "page";

export interface TransitionPreset {
  duration: number;
  easing: MotionEasingName;
  description: string;
}

/**
 * §23 Transition Library. Scene transitions are a single coordinated GSAP
 * timeline per §15 (never two independently-timed animations); Page
 * transitions are reserved for non-narrative routes (e.g. a future Host
 * dashboard), not the guest journey.
 */
export const transitionPresets: Record<TransitionPresetName, TransitionPreset> = {
  scene: {
    duration: motionDuration.scene,
    easing: "arrivalSettle",
    description:
      "§23 Scene transitions — cross-dissolve; outgoing scales back with Soft Fade, incoming scales in with Arrival Settle; single coordinated GSAP timeline (§15).",
  },
  element: {
    duration: motionDuration.medium,
    easing: "softFade",
    description: "§23 Element transitions — Medium-tier Soft Fade cross-fade only.",
  },
  page: {
    duration: motionDuration.slow,
    easing: "softFade",
    description:
      "§23 Page transitions — full-screen cross-dissolve through a Scrim Overlay, Soft Fade, Slow-tier duration; reserved for non-narrative routes, not the guest journey.",
  },
};
