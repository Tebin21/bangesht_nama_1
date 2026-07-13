import { Body } from "@/design-system/atoms/Body";
import { Caption } from "@/design-system/atoms/Caption";
import { GoldDivider } from "@/design-system/atoms/GoldDivider";
import { cn } from "@/lib/cn";

type ClosingSectionProps = {
  line: string;
  platformCredit: string;
  className?: string;
};

/**
 * ClosingSection — Organism (content via props only). Static equivalent of
 * the UX Blueprint's "Closing Frame" screen: minimal Doran Medium closing
 * line + platform credit.
 */
export function ClosingSection({ line, platformCredit, className }: ClosingSectionProps) {
  return (
    <div className={cn("text-center", className)}>
      <GoldDivider className="mb-6 max-w-40 mx-auto" />
      <Body variant="regular" className="text-ink-soft">
        {line}
      </Body>
      <Caption className="mt-4 block">{platformCredit}</Caption>
    </div>
  );
}
