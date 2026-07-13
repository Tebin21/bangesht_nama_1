import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const COLUMN_CLASSNAMES = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
} as const;

type GridProps = {
  columns?: keyof typeof COLUMN_CLASSNAMES;
  className?: string;
  children: ReactNode;
};

/**
 * Grid — Template tier (layout/positioning only). Invita-Foundation-
 * Document.md §4: mobile-first, single-column primary grid.
 */
export function Grid({ columns = 1, className, children }: GridProps) {
  return (
    <div className={cn("grid gap-4", COLUMN_CLASSNAMES[columns], className)}>
      {children}
    </div>
  );
}
