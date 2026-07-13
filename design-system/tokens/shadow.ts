/**
 * Shadow tokens — Invita-Visual-Identity-System.md §16 (Shadow).
 * Governance rule: "no shadow may use a small blur radius with high
 * opacity" — every shadow below uses a large blur with low opacity instead.
 * Uses the ink-tinted ambient shadow opacity from colors.ts (opacities.ambientShadow).
 */

export const shadow = {
  ambient: "0 4px 16px rgba(33, 29, 24, 0.06)", // §16 Ambient
  glass: "0 8px 32px rgba(33, 29, 24, 0.08)", // §16 Glass
  // §16 Luxury Depth — explicitly two-layer
  luxuryDepth: "0 2px 8px rgba(33, 29, 24, 0.05), 0 16px 48px rgba(33, 29, 24, 0.08)",
  floating: "0 12px 40px rgba(33, 29, 24, 0.1)", // §16 Floating
  goldenGlow: "0 0 24px rgba(201, 138, 62, 0.15)", // §16 Golden Glow, Warm Amber tint
} as const;
