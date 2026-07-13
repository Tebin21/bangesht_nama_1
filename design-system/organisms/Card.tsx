import type { ReactNode } from "react";
import { GlassSurface } from "@/design-system/atoms/GlassSurface";
import { Heading } from "@/design-system/atoms/Heading";
import { Body } from "@/design-system/atoms/Body";
import { cn } from "@/lib/cn";

type CardProps = {
  title?: string;
  description?: string;
  footer?: ReactNode;
  className?: string;
  children?: ReactNode;
};

/**
 * Card — Organism tier (Molecule/Atom composition + content/theme props),
 * per Design System Bible §10. Accepts occasion content as props; never
 * hardcodes copy or occasion-specific accent colors itself.
 */
export function Card({ title, description, footer, className, children }: CardProps) {
  return (
    <GlassSurface className={cn("p-6", className)}>
      {title ? (
        <Heading as="h3" variant="cardTitle">
          {title}
        </Heading>
      ) : null}
      {description ? (
        <Body variant="regular" className="mt-2 text-ink-soft">
          {description}
        </Body>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
      {footer ? <div className="mt-6">{footer}</div> : null}
    </GlassSurface>
  );
}
