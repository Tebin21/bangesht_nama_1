import { Heading } from "@/design-system/atoms/Heading";
import { GoldDivider } from "@/design-system/atoms/GoldDivider";
import { cn } from "@/lib/cn";

type NamesRevealProps = {
  names: string[];
  connector?: string;
  className?: string;
};

/**
 * NamesReveal — Organism (content via props only, occasion-agnostic: any
 * occasion has honoree names, not just couples). Static equivalent of the
 * UX Blueprint's "Names Reveal" screen: names in Display-tier Doran Bold,
 * ceremonial gold divider beneath.
 */
export function NamesReveal({ names, connector, className }: NamesRevealProps) {
  return (
    <div className={cn("text-center", className)}>
      <Heading variant="invitationNames" as="h2">
        {names.join(connector ? ` ${connector} ` : " ")}
      </Heading>
      <GoldDivider className="mt-6 max-w-40 mx-auto" />
    </div>
  );
}
