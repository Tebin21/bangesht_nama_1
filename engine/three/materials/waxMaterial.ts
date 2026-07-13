import { colors } from "@/design-system/tokens/colors";

export interface WaxMaterialConfig {
  color: string;
  metalness: number;
  roughness: number;
  transmission: number;
}

/**
 * §25 Wax — "satin, moderate reflectivity, slight subsurface translucency
 * at thin edges, matte at thick center." Color is Dusk Plum, matching the
 * "Dusk Plum/Ink wax seal" called out in Invita-UX-Experience-Blueprint.md
 * §5 (Envelope Experience). The small `transmission` value approximates
 * thin-edge translucency using MeshPhysicalMaterial's built-in transmission;
 * flagged as an approximation that may need a custom shader in a later
 * sprint if this isn't convincing enough.
 */
export function createWaxMaterialConfig(): WaxMaterialConfig {
  return {
    color: colors.duskPlum,
    metalness: 0.05,
    roughness: 0.35,
    transmission: 0.1,
  };
}
