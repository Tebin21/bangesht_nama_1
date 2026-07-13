/**
 * Typography tokens — Invita-Visual-Identity-System.md §12 (Typography).
 * "Doran is Invita's only typeface... exactly two weights: Doran Bold and
 * Doran Medium — no third weight, no substitute, no fallback face."
 * §12 names the required scale steps qualitatively without pixel values;
 * concrete sizes below are this sprint's formalization of that scale,
 * chosen as a mobile-first modular scale anchored on a 16px body size.
 */

export const fontWeights = {
  medium: "var(--font-doran-medium)",
  bold: "var(--font-doran-bold)",
} as const;

export type TypeScaleStep = {
  fontSize: string;
  lineHeight: string;
  weight: keyof typeof fontWeights;
};

/**
 * Line-height bands per §12: Display/Hero use 1.05–1.15x; Body family uses
 * 1.5–1.65x. Values below sit inside those documented bands.
 */
export const typeScale: Record<string, TypeScaleStep> = {
  display: { fontSize: "2.5rem", lineHeight: "1.1", weight: "bold" }, // 40px
  hero: { fontSize: "2rem", lineHeight: "1.1", weight: "bold" }, // 32px
  sectionTitle: { fontSize: "1.5rem", lineHeight: "1.2", weight: "bold" }, // 24px
  cardTitle: { fontSize: "1.25rem", lineHeight: "1.3", weight: "bold" }, // 20px
  bodyLarge: { fontSize: "1.125rem", lineHeight: "1.55", weight: "medium" }, // 18px
  body: { fontSize: "1rem", lineHeight: "1.55", weight: "medium" }, // 16px
  bodySmall: { fontSize: "0.875rem", lineHeight: "1.5", weight: "medium" }, // 14px
  caption: { fontSize: "0.75rem", lineHeight: "1.4", weight: "medium" }, // 12px
  button: { fontSize: "1rem", lineHeight: "1.2", weight: "bold" }, // 16px
  label: { fontSize: "0.8125rem", lineHeight: "1.3", weight: "medium" }, // 13px
  input: { fontSize: "1rem", lineHeight: "1.4", weight: "medium" }, // 16px
  invitationNames: { fontSize: "1.375rem", lineHeight: "1.2", weight: "bold" }, // 22px
  footerText: { fontSize: "0.8125rem", lineHeight: "1.4", weight: "medium" }, // 13px
} as const;

/**
 * §12: "RTL default, tabular LTR numerals for dates/countdown." These two
 * steps are numeral-bearing and must render with tabular, LTR-forced digits
 * even inside an RTL document.
 */
export const numeralTypeScale: Record<string, TypeScaleStep> = {
  countdownNumbers: { fontSize: "1.75rem", lineHeight: "1.1", weight: "bold" }, // 28px
  dates: { fontSize: "1rem", lineHeight: "1.4", weight: "medium" }, // 16px
} as const;
