import { Body } from "@/design-system/atoms/Body";
import { cn } from "@/lib/cn";

type InvitationLineProps = {
  text: string;
  className?: string;
};

/**
 * InvitationLine — Organism (content via props only). Static equivalent of
 * the UX Blueprint's "Invitation Line" screen: a short, warm invitation
 * sentence in Sorani, Body Large.
 */
export function InvitationLine({ text, className }: InvitationLineProps) {
  return (
    <Body variant="large" className={cn("text-center text-ink-soft", className)}>
      {text}
    </Body>
  );
}
