/**
 * InvitationTheme — "the resolved token set (base + occasion accent
 * override) applied to a given Invitation" per Technical-Architecture-
 * Engineering-Blueprint.md domain model. `accentGradient` is always sourced
 * from design-system/tokens/colors.ts (e.g. `gradients.garden`) — never a
 * new color invented at the template layer.
 */
export interface InvitationTheme {
  accentName: string;
  accentGradient: string;
}
