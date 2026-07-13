"use client";

import dynamic from "next/dynamic";
import { colorTemperatureToRgb } from "./colorTemperatureToRgb";
import type { CapabilityTier } from "./useCapabilityFallback";

const EffectComposer = dynamic(
  () => import("@react-three/postprocessing").then((mod) => mod.EffectComposer),
  { ssr: false },
);
const Bloom = dynamic(
  () => import("@react-three/postprocessing").then((mod) => mod.Bloom),
  { ssr: false },
);

// §11 Lighting Choreography — key/ambient/bounce, all within 2700-4000K.
const KEY_LIGHT_KELVIN = 3000; // "Golden Hour default", within documented 2700-3200K
const AMBIENT_KELVIN = 4000;
const BOUNCE_KELVIN = 5500; // cooler than key; §11 gives no exact K value — this sprint's interpretive choice
const KEY_LIGHT_ELEVATION_DEG = 40; // within documented 35-45°

type LightingRigProps = {
  capabilityTier?: CapabilityTier;
};

/**
 * LightingRig — 3D Rig Organism (Invita-Design-System-Component-Library-
 * Bible.md §22), implementing the shared 3-light rig from Invita-Motion-3D-
 * Production-Bible.md §11 (full section) plus Soft Bloom, per Invita-
 * Technical-Architecture-Engineering-Blueprint.md §15: "implemented once as
 * a reusable R3F lighting setup... individual object components never
 * define their own independent light sources." Colors are computed from
 * real Kelvin values via colorTemperatureToRgb, not pre-picked hex. Bloom is
 * skipped entirely under the "simplified" capability tier (Technical-
 * Architecture-Engineering-Blueprint.md §15 fallback strategy).
 */
export function LightingRig({ capabilityTier = "full" }: LightingRigProps) {
  const elevationRad = (KEY_LIGHT_ELEVATION_DEG * Math.PI) / 180;
  const keyPosition: [number, number, number] = [-Math.cos(elevationRad) * 5, Math.sin(elevationRad) * 5, 3];
  const bouncePosition: [number, number, number] = [Math.cos(elevationRad) * 5, -Math.sin(elevationRad) * 2, -3];

  return (
    <>
      <ambientLight color={colorTemperatureToRgb(AMBIENT_KELVIN)} intensity={0.15} />
      <directionalLight
        color={colorTemperatureToRgb(KEY_LIGHT_KELVIN)}
        intensity={1.2}
        position={keyPosition}
        castShadow={capabilityTier === "full"}
      />
      <directionalLight color={colorTemperatureToRgb(BOUNCE_KELVIN)} intensity={0.3} position={bouncePosition} />
      {capabilityTier === "full" ? (
        <EffectComposer>
          <Bloom luminanceThreshold={0.8} intensity={0.4} radius={0.6} />
        </EffectComposer>
      ) : null}
    </>
  );
}
