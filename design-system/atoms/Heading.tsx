import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const VARIANT_CLASSNAMES = {
  display: "text-display font-doran-bold",
  hero: "text-hero font-doran-bold",
  sectionTitle: "text-section-title font-doran-bold",
  cardTitle: "text-card-title font-doran-bold",
  invitationNames: "text-invitation-names font-doran-bold",
} as const;

type HeadingVariant = keyof typeof VARIANT_CLASSNAMES;

// Narrowed from a generic `ElementType` (Sprint 4 fix): installing
// @react-three/fiber globally augments JSX.IntrinsicElements with Three.js
// elements, which collapses a fully-generic `ElementType`'s children type
// to `never` when used polymorphically (a known TS+R3F interaction). This
// atom only ever renders semantic heading tags, so a literal union avoids
// the issue entirely without any behavior change.
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  variant?: HeadingVariant;
  as?: HeadingTag;
  className?: string;
  children: ReactNode;
};

/**
 * Heading atom — Invita-Visual-Identity-System.md §12 type scale, Doran Bold
 * only. Token consumption only: no occasion content, no animation.
 */
export function Heading({
  variant = "sectionTitle",
  as: Tag = "h2",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag className={cn(VARIANT_CLASSNAMES[variant], className)}>
      {children}
    </Tag>
  );
}
