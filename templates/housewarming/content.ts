import invitaPhoto from "@/assets/images/invita.jpg";
import { gradients } from "@/design-system/tokens/colors";
import type { Invitation } from "@/domain";

/**
 * The Housewarming template's first (and currently only) data set. All
 * structured event facts live here — components never hardcode occasion
 * content. Names/date/time/location are the canonical worked example that
 * recurs across Invita-Foundation-Document.md, Invita-UX-Experience-
 * Blueprint.md, and Invita-Content-Copywriting-Localization-Bible.md.
 *
 * Theme accent: Invita-Visual-Identity-System.md §11 — "Garden Gradient...
 * used for Housewarming and nature-themed occasions."
 */
export const housewarmingInvitation: Invitation = {
  id: "housewarming-rayan-karwan",
  people: [
    { id: "person-1", displayName: "رەیان", role: "coupleMember" },
    { id: "person-2", displayName: "کاروان", role: "coupleMember" },
  ],
  namesConnector: "❤",
  event: {
    occasionType: "housewarming",
    date: "٢١ / ٧ / ٢٠٢٦",
    time: "کاتژمێر ٧ی شەو",
    isoDate: "2026-07-21T19:00:00+03:00",
  },
  location: {
    city: "سلێمانی",
    venue: "هۆڵی ئۆسکار",
  },
  gallery: {
    photos: [
      {
        src: invitaPhoto,
        alt: "وێنەی ماڵی نوێی رەیان و کاروان",
        composition: "couple",
      },
    ],
  },
  theme: {
    accentName: "sage",
    accentGradient: gradients.garden,
  },
  countdownState: "before",
};
