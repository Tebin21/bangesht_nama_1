/**
 * Converts a color temperature in Kelvin to a hex color string, using the
 * Tanner Helland black-body approximation. Used by LightingRig.tsx to
 * express Invita-Motion-3D-Production-Bible.md §11's lighting rig, which
 * calibrates every light "within the 2700-4000K range" (e.g. "Golden Hour
 * default" key light at 2700-3200K) as literal Kelvin values rather than
 * pre-picked hex colors.
 */
export function colorTemperatureToRgb(kelvin: number): string {
  const temp = kelvin / 100;

  let red: number;
  let green: number;
  let blue: number;

  if (temp <= 66) {
    red = 255;
  } else {
    red = 329.698727446 * Math.pow(temp - 60, -0.1332047592);
  }

  if (temp <= 66) {
    green = 99.4708025861 * Math.log(temp) - 161.1195681661;
  } else {
    green = 288.1221695283 * Math.pow(temp - 60, -0.0755148492);
  }

  if (temp >= 66) {
    blue = 255;
  } else if (temp <= 19) {
    blue = 0;
  } else {
    blue = 138.5177312231 * Math.log(temp - 10) - 305.0447927307;
  }

  const clamp = (value: number) => Math.max(0, Math.min(255, Math.round(value)));
  const toHex = (value: number) => clamp(value).toString(16).padStart(2, "0");

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}
