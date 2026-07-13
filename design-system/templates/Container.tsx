import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Container — Template tier (layout/positioning only, no content/animation
 * awareness), per Design System Bible §3 ownership table. Invita-Foundation-
 * Document.md §4/§13: mobile-first, desktop shown within a constrained,
 * centered, mobile-proportioned frame.
 */
export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-md px-4", className)}>
      {children}
    </div>
  );
}
