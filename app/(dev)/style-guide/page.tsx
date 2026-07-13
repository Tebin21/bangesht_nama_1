import { getTranslations } from "next-intl/server";
import { LuHeart, LuMapPin, LuCalendar } from "react-icons/lu";
import { Container } from "@/design-system/templates/Container";
import { Section } from "@/design-system/templates/Section";
import { Stack } from "@/design-system/templates/Stack";
import { Grid } from "@/design-system/templates/Grid";
import { Heading } from "@/design-system/atoms/Heading";
import { Body } from "@/design-system/atoms/Body";
import { Caption } from "@/design-system/atoms/Caption";
import { Icon } from "@/design-system/atoms/Icon";
import { GoldDivider } from "@/design-system/atoms/GoldDivider";
import { GlassSurface } from "@/design-system/atoms/GlassSurface";
import { Button } from "@/design-system/molecules/Button";
import { Card } from "@/design-system/organisms/Card";

const SWATCHES = [
  { name: "Ivory", className: "bg-ivory" },
  { name: "Ink", className: "bg-ink" },
  { name: "Sage", className: "bg-sage" },
  { name: "Dusk Plum", className: "bg-dusk-plum" },
  { name: "Amber", className: "bg-amber" },
  { name: "Antique Gold", className: "bg-antique-gold" },
  { name: "Foil Gold", className: "bg-foil-gold" },
  { name: "Deep Background", className: "bg-deep-background" },
] as const;

export default async function StyleGuidePage() {
  const t = await getTranslations("StyleGuide");

  return (
    <Container className="max-w-2xl">
      <Section>
        <Heading variant="display">{t("title")}</Heading>
        <Body className="mt-2 text-ink-soft">
          Invita Sprint 1 — design tokens, Atoms, Button, and Card, rendered
          together for visual verification.
        </Body>
      </Section>

      <GoldDivider />

      <Section>
        <Heading variant="sectionTitle" className="mb-4">
          {t("colors")}
        </Heading>
        <Grid columns={3}>
          {SWATCHES.map((swatch) => (
            <Stack key={swatch.name} gap={2}>
              <div className={`h-16 w-full rounded-card ${swatch.className}`} />
              <Caption>{swatch.name}</Caption>
            </Stack>
          ))}
        </Grid>
      </Section>

      <GoldDivider />

      <Section>
        <Heading variant="sectionTitle" className="mb-4">
          {t("typography")}
        </Heading>
        <Stack gap={3}>
          <Heading variant="display">Display</Heading>
          <Heading variant="hero">Hero</Heading>
          <Heading variant="sectionTitle">Section Title</Heading>
          <Heading variant="cardTitle">Card Title</Heading>
          <Heading variant="invitationNames">ڕەیان ❤ کاروان</Heading>
          <Body variant="large">Body Large — the emotional opening line.</Body>
          <Body variant="regular">Body — logistical detail set with care.</Body>
          <Body variant="small">Body Small — supporting detail.</Body>
          <Caption>Caption — footer text</Caption>
        </Stack>
      </Section>

      <GoldDivider />

      <Section>
        <Heading variant="sectionTitle" className="mb-4">
          Icon
        </Heading>
        <Stack direction="row" gap={6}>
          <Icon icon={LuHeart} tone="ceremonial" />
          <Icon icon={LuMapPin} />
          <Icon icon={LuCalendar} />
        </Stack>
      </Section>

      <GoldDivider />

      <Section>
        <Heading variant="sectionTitle" className="mb-4">
          {t("buttons")}
        </Heading>
        <Stack direction="row" gap={4} className="flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="gold">Gold</Button>
          <Button variant="glass">Glass</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </Stack>
      </Section>

      <GoldDivider />

      <Section>
        <Heading variant="sectionTitle" className="mb-4">
          {t("cards")}
        </Heading>
        <Stack gap={4}>
          <Card title="Card Title" description="Card description text sits here, set in Body regular." />
          <GlassSurface className="p-6">
            <Body>Raw GlassSurface atom, for comparison against the Card organism above.</Body>
          </GlassSurface>
        </Stack>
      </Section>
    </Container>
  );
}
