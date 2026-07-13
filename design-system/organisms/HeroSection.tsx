import { Heading } from "@/design-system/atoms/Heading";
import { Body } from "@/design-system/atoms/Body";
import { cn } from "@/lib/cn";

type HeroSectionProps = {
  title: string;
  tagline?: string;
  className?: string;
};

/**
 * HeroSection — Organism (content via props only, occasion-agnostic).
 * Static equivalent of the UX Blueprint's "Housewarming Title" screen:
 * Doran Bold occasion title, centered, generously spaced.
 */
export function HeroSection({ title, tagline, className }: HeroSectionProps) {
  return (
    <div className={cn("text-center", className)}>
      <Heading variant="hero" as="h1">
        {title}
      </Heading>
      {tagline ? (
        <Body variant="regular" className="mt-3 text-ink-soft">
          {tagline}
        </Body>
      ) : null}
    </div>
  );
}
