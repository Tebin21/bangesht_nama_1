import { LuMapPin, LuClock } from "react-icons/lu";
import { GlassSurface } from "@/design-system/atoms/GlassSurface";
import { Icon } from "@/design-system/atoms/Icon";
import { Heading } from "@/design-system/atoms/Heading";
import { Caption } from "@/design-system/atoms/Caption";
import { Button } from "@/design-system/molecules/Button";
import { cn } from "@/lib/cn";

type LocationCardProps = {
  city: string;
  venue: string;
  timeLabel: string;
  mapCtaLabel: string;
  directionsText?: string;
  className?: string;
};

/**
 * LocationCard — Organism composed from the Address/Time/Map-CTA/optional-
 * Directions molecules described in Invita-Design-System-Component-Library-
 * Bible.md §15, city-first per Invita-Content-Copywriting-Localization-
 * Bible.md §14. The Map CTA is visually present but intentionally inert —
 * real map integration is deferred to a later sprint.
 */
export function LocationCard({
  city,
  venue,
  timeLabel,
  mapCtaLabel,
  directionsText,
  className,
}: LocationCardProps) {
  return (
    <GlassSurface className={cn("p-6", className)}>
      <div className="flex items-start gap-3">
        <Icon icon={LuMapPin} tone="ceremonial" size={22} />
        <Heading variant="cardTitle" as="h3">
          {city}
          {" — "}
          {venue}
        </Heading>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <Icon icon={LuClock} size={18} />
        <Caption>{timeLabel}</Caption>
      </div>
      <Button variant="glass" className="mt-4 w-full">
        {mapCtaLabel}
      </Button>
      {directionsText ? <Caption className="mt-3 block">{directionsText}</Caption> : null}
    </GlassSurface>
  );
}
