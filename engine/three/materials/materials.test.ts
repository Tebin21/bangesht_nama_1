import { describe, it, expect } from "vitest";
import { createGoldMaterialConfig } from "./goldMaterial";
import { createGlassMaterialConfig } from "./glassMaterial";
import { createPaperMaterialConfig } from "./paperMaterial";
import { createWaxMaterialConfig } from "./waxMaterial";

describe("material presets", () => {
  it("gold: high metalness, moderate roughness (satin-to-polished, non-mirror)", () => {
    const gold = createGoldMaterialConfig();
    expect(gold.metalness).toBeGreaterThan(0.5);
    expect(gold.roughness).toBeGreaterThan(0);
    expect(gold.roughness).toBeLessThan(0.5);
  });

  it("glass: high transmission, standard IOR", () => {
    const glass = createGlassMaterialConfig();
    expect(glass.transmission).toBeGreaterThan(0.8);
    expect(glass.ior).toBeCloseTo(1.5);
  });

  it("glass: accepts a custom thickness", () => {
    const glass = createGlassMaterialConfig(1.2);
    expect(glass.thickness).toBe(1.2);
  });

  it("paper: zero metalness, high roughness (matte)", () => {
    const paper = createPaperMaterialConfig();
    expect(paper.metalness).toBe(0);
    expect(paper.roughness).toBeGreaterThan(0.7);
  });

  it("wax: low metalness, slight transmission (edge translucency)", () => {
    const wax = createWaxMaterialConfig();
    expect(wax.metalness).toBeLessThan(0.2);
    expect(wax.transmission).toBeGreaterThan(0);
    expect(wax.transmission).toBeLessThan(0.5);
  });
});
