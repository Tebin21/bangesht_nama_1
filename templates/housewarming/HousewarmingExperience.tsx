import { getTranslations } from "next-intl/server";
import { Container } from "@/design-system/templates/Container";
import { SafeArea } from "@/design-system/templates/SafeArea";
import { Section } from "@/design-system/templates/Section";
import { Stack } from "@/design-system/templates/Stack";
import { HeroSection } from "@/design-system/organisms/HeroSection";
import { NamesReveal } from "@/design-system/organisms/NamesReveal";
import { InvitationLine } from "@/design-system/organisms/InvitationLine";
import { PhotoFrame } from "@/design-system/organisms/PhotoFrame";
import { CountdownCard } from "@/design-system/organisms/CountdownCard";
import { LocationCard } from "@/design-system/organisms/LocationCard";
import { ClosingSection } from "@/design-system/organisms/ClosingSection";
import { housewarmingInvitation } from "./content";

const COUNTDOWN_LABEL_KEY = {
  before: "countdownBefore",
  today: "countdownToday",
  tomorrow: "countdownTomorrow",
  after: "countdownBefore",
} as const;

/**
 * HousewarmingExperience — the composed static Housewarming template.
 * Reads all occasion content from `./content.ts` (structured data) and the
 * `Housewarming` i18n namespace (voice copy) — never hardcodes either.
 * Mobile-first, fluid at every breakpoint via Sprint 1's Container/Section/
 * Stack. No animation, 3D, or interaction logic — Sprint 2 scope only.
 */
export async function HousewarmingExperience() {
  const t = await getTranslations("Housewarming");
  const invitation = housewarmingInvitation;

  return (
    <Container>
      <SafeArea>
        <Section>
          <HeroSection title={t("heroTitle")} />
        </Section>

        <Section>
          <Stack gap={8}>
            <NamesReveal
              names={invitation.people.map((person) => person.displayName)}
              connector={invitation.namesConnector}
            />
            <InvitationLine text={t("invitationLine")} />
          </Stack>
        </Section>

        <Section>
          <PhotoFrame
            src={invitation.gallery.photos[0].src}
            alt={invitation.gallery.photos[0].alt}
            composition={invitation.gallery.photos[0].composition}
            className="max-w-sm mx-auto"
          />
        </Section>

        <Section>
          <Stack gap={6}>
            <CountdownCard
              state={invitation.countdownState}
              label={t(COUNTDOWN_LABEL_KEY[invitation.countdownState])}
              targetDateLabel={invitation.event.date}
            />
            <LocationCard
              city={invitation.location.city}
              venue={invitation.location.venue}
              timeLabel={invitation.event.time}
              mapCtaLabel={t("mapCta")}
            />
          </Stack>
        </Section>

        <Section>
          <ClosingSection
            line={t("thankYouLine")}
            platformCredit={t("platformCredit")}
          />
        </Section>
      </SafeArea>
    </Container>
  );
}
