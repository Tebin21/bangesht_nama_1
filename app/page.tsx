import Link from "next/link";
import { Container } from "@/design-system/templates/Container";
import { Section } from "@/design-system/templates/Section";
import { Heading } from "@/design-system/atoms/Heading";
import { Body } from "@/design-system/atoms/Body";
import { GoldDivider } from "@/design-system/atoms/GoldDivider";

/**
 * Placeholder root page. Sprint 1 scope is scaffolding + the design system
 * foundation only — the Housewarming guest journey (templates/housewarming)
 * is deliberately not built yet. See MASTER_SPECIFICATION.md.
 */
export default function Home() {
  return (
    <Container>
      <Section className="min-h-screen flex flex-col justify-center items-center text-center">
        <Heading variant="hero">Invita</Heading>
        <Body className="mt-2 text-ink-soft">
          Foundation is scaffolded. The Housewarming experience ships in a
          later sprint.
        </Body>
        <GoldDivider className="my-8 max-w-40" />
        <Link href="/style-guide" className="font-doran-bold text-body underline">
          View the Sprint 1 style guide
        </Link>
      </Section>
    </Container>
  );
}
