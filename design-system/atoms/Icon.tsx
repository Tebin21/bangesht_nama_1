import type { IconType } from "react-icons";
import { cn } from "@/lib/cn";

type IconProps = {
  /**
   * A thin-stroke line icon component (e.g. from react-icons/lu — Lucide).
   * Invita-Visual-Identity-System.md §19: "thin-stroke line icons only,
   * never filled." This atom does not enforce that structurally — pass
   * only line-style icon sets, never solid/filled ones.
   */
  icon: IconType;
  size?: number;
  /** §19: default color is Secondary Text; ceremonial subset may use Antique Gold. */
  tone?: "default" | "ceremonial";
  className?: string;
};

export function Icon({ icon: IconComponent, size = 20, tone = "default", className }: IconProps) {
  return (
    <IconComponent
      size={size}
      className={cn(tone === "ceremonial" ? "text-antique-gold" : "text-muted-neutral", className)}
    />
  );
}
