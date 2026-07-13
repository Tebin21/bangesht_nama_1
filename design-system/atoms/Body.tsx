import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const VARIANT_CLASSNAMES = {
  large: "text-body-large font-doran-medium",
  regular: "text-body font-doran-medium",
  small: "text-body-small font-doran-medium",
} as const;

type BodyVariant = keyof typeof VARIANT_CLASSNAMES;

// Narrowed from a generic `ElementType` (Sprint 4 fix): installing
// @react-three/fiber globally augments JSX.IntrinsicElements with Three.js
// elements, which collapses a fully-generic `ElementType`'s children type
// to `never` when used polymorphically (a known TS+R3F interaction). This
// atom only ever renders plain text-container tags, so a literal union
// avoids the issue entirely without any behavior change.
type BodyTag = "p" | "span" | "div";

type BodyProps = {
  variant?: BodyVariant;
  as?: BodyTag;
  className?: string;
  children: ReactNode;
};

/**
 * Body atom — Invita-Visual-Identity-System.md §12 type scale, Doran Medium
 * only. Token consumption only: no occasion content, no animation.
 */
export function Body({
  variant = "regular",
  as: Tag = "p",
  className,
  children,
}: BodyProps) {
  return (
    <Tag className={cn(VARIANT_CLASSNAMES[variant], className)}>
      {children}
    </Tag>
  );
}
