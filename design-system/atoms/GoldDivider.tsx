import { cn } from "@/lib/cn";

type GoldDividerProps = {
  className?: string;
};

/**
 * GoldDivider atom — named by tier/role, never by occasion (Design System
 * Bible §4). Governance rule: "any gold element must contain at least a
 * two-stop gradient" (Visual Identity System §11) — never a flat gold fill.
 */
export function GoldDivider({ className }: GoldDividerProps) {
  return (
    <div
      role="separator"
      className={cn("h-px w-full", className)}
      style={{
        background: "linear-gradient(90deg, transparent, var(--color-antique-gold), var(--color-foil-gold), var(--color-antique-gold), transparent)",
      }}
    />
  );
}
