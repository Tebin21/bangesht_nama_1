import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CaptionProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Caption atom — Invita-Visual-Identity-System.md §12 type scale, Doran
 * Medium only. Token consumption only: no occasion content, no animation.
 */
export function Caption({ className, children }: CaptionProps) {
  return (
    <span className={cn("text-caption font-doran-medium text-muted-neutral", className)}>
      {children}
    </span>
  );
}
