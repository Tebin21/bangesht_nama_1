import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SafeAreaProps = {
  className?: string;
  children: ReactNode;
};

/**
 * SafeArea — Template tier (layout/positioning only). Invita-Foundation-
 * Document.md §13 Mobile-First Philosophy: respect device notches/home
 * indicators so essential content and controls are never obscured.
 */
export function SafeArea({ className, children }: SafeAreaProps) {
  return (
    <div
      className={cn(
        "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] px-[env(safe-area-inset-left)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
