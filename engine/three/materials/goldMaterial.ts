import { colors } from "@/design-system/tokens/colors";

export interface GoldMaterialConfig {
  color: string;
  metalness: number;
  roughness: number;
  envMapIntensity: number;
}

/**
 * §25 Gold — "satin-to-polished, high but non-mirror reflectivity...
 * HDRI-sourced reflections." Reuses the existing gold tokens rather than a
 * new hex value. Concrete PBR numbers are an interpretive draft within the
 * qualitative description — no numeric values are given in the source doc.
 */
export function createGoldMaterialConfig(): GoldMaterialConfig {
  return {
    color: colors.antiqueGold,
    metalness: 0.9,
    roughness: 0.25,
    envMapIntensity: 1.2,
  };
}
