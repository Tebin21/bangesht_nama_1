import { describe, it, expect } from "vitest";
import { colorTemperatureToRgb } from "./colorTemperatureToRgb";

describe("colorTemperatureToRgb", () => {
  it("returns a valid 6-digit hex color string", () => {
    expect(colorTemperatureToRgb(3000)).toMatch(/^#[0-9a-f]{6}$/);
  });

  it("produces a warmer (more red/less blue) color at lower Kelvin", () => {
    const warm = colorTemperatureToRgb(2700);
    const cool = colorTemperatureToRgb(6500);
    const blueOf = (hex: string) => parseInt(hex.slice(5, 7), 16);
    expect(blueOf(warm)).toBeLessThan(blueOf(cool));
  });

  it("stays within valid RGB channel bounds at extreme inputs", () => {
    const low = colorTemperatureToRgb(1000);
    const high = colorTemperatureToRgb(12000);
    for (const hex of [low, high]) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      for (const channel of [r, g, b]) {
        expect(channel).toBeGreaterThanOrEqual(0);
        expect(channel).toBeLessThanOrEqual(255);
      }
    }
  });
});
