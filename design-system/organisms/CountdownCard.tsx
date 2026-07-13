import { LuCalendarHeart } from "react-icons/lu";
import { GlassSurface } from "@/design-system/atoms/GlassSurface";
import { Icon } from "@/design-system/atoms/Icon";
import { Body } from "@/design-system/atoms/Body";
import { numeralTypeScale, fontWeights } from "@/design-system/tokens/typography";
import { cn } from "@/lib/cn";
import type { CountdownState } from "@/domain/countdown";

type CountdownCardProps = {
  state: CountdownState;
  label: string;
  targetDateLabel: string;
  className?: string;
};

/**
 * CountdownCard — Organism, visual-only per Sprint 2 scope: renders
 * whichever of the 4 documented content states (Design-System-Component-
 * Library-Bible.md §14) the data supplies. No date-math, no live ticking —
 * that logic arrives in a later sprint. Target date uses tabular, LTR-
 * forced numerals inside the RTL page per Visual-Identity-System.md §12.
 */
export function CountdownCard({ state, label, targetDateLabel, className }: CountdownCardProps) {
  const numeralStyle = numeralTypeScale.countdownNumbers;

  return (
    <GlassSurface className={cn("p-6 text-center", className)} data-countdown-state={state}>
      <Icon icon={LuCalendarHeart} tone="ceremonial" size={24} className="mx-auto" />
      <Body variant="small" className="mt-2 text-ink-soft">
        {label}
      </Body>
      <p
        dir="ltr"
        className="mt-3 tabular-nums"
        style={{
          fontSize: numeralStyle.fontSize,
          lineHeight: numeralStyle.lineHeight,
          fontFamily: fontWeights[numeralStyle.weight],
        }}
      >
        {targetDateLabel}
      </p>
    </GlassSurface>
  );
}
