import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  className?: string;
  children: ReactNode;
};

/** Section — Template tier (layout/positioning only). Vertical rhythm block. */
export function Section({ className, children }: SectionProps) {
  return <section className={cn("py-8", className)}>{children}</section>;
}
