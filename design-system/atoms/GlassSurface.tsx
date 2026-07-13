import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlassSurfaceProps = {
  className?: string;
  children: ReactNode;
};

/**
 * GlassSurface atom — Invita-Visual-Identity-System.md §17: opacity
 * roughly 10-25%, moderate-to-strong blur, top-edge highlight, hairline
 * border. Token consumption only — occasion content is supplied by the
 * Organism composing this atom, never hardcoded here.
 */
export function GlassSurface({ className, children }: GlassSurfaceProps) {
  return (
    <div
      className={cn(
        "bg-ivory/[18%] backdrop-blur-[16px] border border-ink/[10%] rounded-glass shadow-glass",
        "relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-ivory/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
