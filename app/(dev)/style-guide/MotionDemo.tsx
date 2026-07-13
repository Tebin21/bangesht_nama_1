"use client";

import { useState } from "react";
import { GlassSurface } from "@/design-system/atoms/GlassSurface";
import { Body } from "@/design-system/atoms/Body";
import { Button } from "@/design-system/molecules/Button";
import { FadeTransition } from "@/design-system/utilities/FadeTransition";
import { useReducedMotion } from "@/engine/motion/useReducedMotion";
import { useScrollProgress } from "@/engine/motion/useScrollProgress";

/**
 * Dev-only demonstration of Sprint 3's motion infrastructure: FadeTransition
 * (§23 Element transitions), live reduced-motion detection, and live scroll
 * progress. Not used anywhere in the real guest journey.
 */
export function MotionDemo() {
  const [step, setStep] = useState(0);
  const reducedMotion = useReducedMotion();
  const scrollProgress = useScrollProgress();

  return (
    <GlassSurface className="p-6">
      <Body variant="small" className="text-ink-soft">
        prefers-reduced-motion: <strong>{String(reducedMotion)}</strong>
        {" — "}
        scroll progress: <strong>{scrollProgress.toFixed(2)}</strong>
      </Body>
      <div className="mt-4 h-16 flex items-center">
        <FadeTransition transitionKey={String(step)}>
          <Body variant="regular">FadeTransition content #{step + 1}</Body>
        </FadeTransition>
      </div>
      <Button variant="glass" className="mt-4" onClick={() => setStep((current) => current + 1)}>
        Cross-fade next
      </Button>
    </GlassSurface>
  );
}
