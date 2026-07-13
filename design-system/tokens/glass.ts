/**
 * Glassmorphism tokens — Invita-Visual-Identity-System.md §17.
 * "Opacity roughly 10–25%, moderate-to-strong blur, top-edge highlight,
 * bottom-more-opaque gradient." The GlassSurface atom composes these into
 * the full recipe; these are the constituent values.
 */

export const glass = {
  lightBackground: "rgba(251, 247, 240, 0.18)", // Ivory glass, §17 range 10–25%
  darkBackground: "rgba(33, 29, 24, 0.25)", // Ink glass, matching colors.opacities.darkGlass
  blur: "16px", // moderate-to-strong, §17
  borderHairline: "rgba(33, 29, 24, 0.1)", // §11 hairline border opacity
  topHighlight: "rgba(251, 247, 240, 0.4)", // top-edge highlight, §17
} as const;
