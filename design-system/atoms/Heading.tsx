import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

const VARIANT_CLASSNAMES = {
  display: "text-display font-doran-bold",
  hero: "text-hero font-doran-bold",
  sectionTitle: "text-section-title font-doran-bold",
  cardTitle: "text-card-title font-doran-bold",
  invitationNames: "text-invitation-names font-doran-bold",
} as const;

type HeadingVariant = keyof typeof VARIANT_CLASSNAMES;

type HeadingProps = {
  variant?: HeadingVariant;
  as?: ElementType;
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
