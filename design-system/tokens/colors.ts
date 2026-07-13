/**
 * Color tokens — Invita-Visual-Identity-System.md §11 (Color System).
 * The source doc gives each color as a hex *range*; the concrete value below
 * is chosen from within that documented range and is the single source of
 * truth. Actual CSS custom properties live in app/globals.css — these
 * exports mirror the same values for use in TypeScript (Framer Motion, etc).
 */

export const colors = {
  // Primary canvas — §11 range #FBF7F0–#F7F1E8
  ivory: "#FBF7F0",
  ivoryDeep: "#F7F1E8",

  // Primary text — §11 range #211D18–#2A2420
  ink: "#211D18",
  inkSoft: "#2A2420",

  // Secondary accent, assigned to Housewarming — §11 range #7C8B6F–#8FA07E
  sage: "#7C8B6F",
  sageLight: "#8FA07E",

  // §11 range #6B4E4A–#8A6560
  duskPlum: "#6B4E4A",
  duskPlumLight: "#8A6560",

  // Accent / glow — §11 range #C98A3E–#D9A05C
  amber: "#C98A3E",
  amberLight: "#D9A05C",

  // Gold family — §11. Governance rule: any gold element must use at least
  // a two-stop gradient (see gradients.gold below), never a flat fill.
  foilGold: "#E7C77D",
  antiqueGold: "#B8905A",
  antiqueGoldDeep: "#A87F4C",
  shadowGold: "#7A5A34",

  // Act I dark opening background — §11
  deepBackground: "#17140F",

  // Muted neutral / default icon color — §11, §19
  mutedNeutral: "#8A8378",

  // Semantic — §11
  success: "#6B8F5E",
  warning: "#B8823D",
  danger: "#A85C4A",
  info: "#6E7F8C",
} as const;

/**
 * Opacities — §11. Given as ranges; representative midpoint chosen.
 */
export const opacities = {
  lightGlass: 0.16, // Ivory glass, §11 range 12–20%
  darkGlass: 0.25, // Ink glass, §11 range 20–30%
  hairlineBorder: 0.1, // Ink hairline border, §11 range 8–12%
  goldBorder: 0.5, // Antique Gold border, §11 range 40–60%
  ambientShadow: 0.06, // Ink ambient shadow, §11 range 4–8%
  goldGlowShadow: 0.15, // Amber glow shadow, §11 range 10–20%
} as const;

/**
 * Gradients — §11. "Any gold element must contain at least a two-stop
 * gradient"; "Garden Gradient... used for Housewarming and nature-themed
 * occasions."
 */
export const gradients = {
  garden: `linear-gradient(135deg, ${colors.sage}, ${colors.ivory})`,
  gold: `linear-gradient(135deg, ${colors.antiqueGold}, ${colors.foilGold})`,
} as const;
