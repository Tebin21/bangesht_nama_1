import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

const VARIANT_CLASSNAMES = {
  large: "text-body-large font-doran-medium",
  regular: "text-body font-doran-medium",
  small: "text-body-small font-doran-medium",
} as const;

type BodyVariant = keyof typeof VARIANT_CLASSNAMES;

type BodyProps = {
  variant?: BodyVariant;
  as?: ElementType;
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
