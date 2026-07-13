import Link from "next/link";
import { Container } from "@/design-system/templates/Container";
import { Section } from "@/design-system/templates/Section";
import { Stack } from "@/design-system/templates/Stack";
import { Heading } from "@/design-system/atoms/Heading";
import { Body } from "@/design-system/atoms/Body";
import { GoldDivider } from "@/design-system/atoms/GoldDivider";

/**
 * Placeholder root page. The Housewarming static experience (Sprint 2)
 * lives at /housewarming; animation/3D/interactions are a later sprint.
 * See MASTER_SPECIFICATION.md.
 */
export default function Home() {
  return (
    <Container>
      <Section className="min-h-screen flex flex-col justify-center items-center text-center">
        <Heading variant="hero">Invita</Heading>
        <Body className="mt-2 text-ink-soft">
          Foundation and static Housewarming layout are built. Motion and 3D
          ship in a later sprint.
        </Body>
        <GoldDivider className="my-8 max-w-40" />
        <Stack gap={3} className="items-center">
          <Link href="/housewarming" className="font-doran-bold text-body underline">
            View the Housewarming invitation
          </Link>
          <Link href="/style-guide" className="font-doran-bold text-body underline">
            View the Sprint 1 style guide
          </Link>
        </Stack>
      </Section>
    </Container>
  );
}
