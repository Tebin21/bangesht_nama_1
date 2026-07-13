import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const GAP_CLASSNAMES = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
} as const;

type StackProps = {
  direction?: "column" | "row";
  gap?: keyof typeof GAP_CLASSNAMES;
  className?: string;
  children: ReactNode;
};

/** Stack — Template tier (layout/positioning only). Flex-based spacing primitive. */
export function Stack({ direction = "column", gap = 4, className, children }: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "column" ? "flex-col" : "flex-row",
        GAP_CLASSNAMES[gap],
        className,
      )}
    >
      {children}
    </div>
  );
}
