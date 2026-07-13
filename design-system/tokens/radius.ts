/**
 * Radius tokens — Invita-Visual-Identity-System.md §15 (Border Radius).
 * Source doc gives categories only ("moderate", "slightly rounder",
 * "minimal", "largest"), no pixel values — concrete values below are this
 * sprint's formalization, ordered to preserve the documented relationships
 * (Card = Glass < Button = Input < Dialog; Photo Frame is deliberately
 * smallest; Floating Objects are circular).
 */

export const radius = {
  card: "16px", // moderate — §15
  glass: "16px", // "= card radius" — §15
  button: "20px", // "slightly rounder" than card — §15
  input: "20px", // "= button radius" — §15
  photoFrame: "4px", // minimal — §15, reinforced by §18 "no corner ornaments"
  dialogTop: "28px", // largest, top-corners only — §15
  floating: "9999px", // circular — §15
} as const;
