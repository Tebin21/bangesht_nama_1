import { colors } from "@/design-system/tokens/colors";

export interface PaperMaterialConfig {
  color: string;
  metalness: number;
  roughness: number;
}

/**
 * §25 Paper — "matte, low specular, moderate roughness, fine micro-texture,
 * no subsurface except thin folded edges." The micro-texture normal map is
 * a content-asset dependency (TBD, same gap as the HDRI in Environment.tsx)
 * — not built here. Roughness value is an interpretive draft within the
 * qualitative description.
 */
export function createPaperMaterialConfig(): PaperMaterialConfig {
  return {
    color: colors.ivory,
    metalness: 0,
    roughness: 0.85,
  };
}
