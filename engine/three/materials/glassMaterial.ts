export interface GlassMaterialConfig {
  transmission: number;
  roughness: number;
  ior: number;
  thickness: number;
}

/**
 * §25 Glass — "high transparency, moderate frosted internal scattering,
 * soft edge-only specular, subtle refraction." `ior` uses the standard
 * physical value for glass; the rest are an interpretive draft within the
 * qualitative description — no numeric values are given in the source doc.
 */
export function createGlassMaterialConfig(thickness = 0.5): GlassMaterialConfig {
  return {
    transmission: 0.95,
    roughness: 0.1,
    ior: 1.5,
    thickness,
  };
}
