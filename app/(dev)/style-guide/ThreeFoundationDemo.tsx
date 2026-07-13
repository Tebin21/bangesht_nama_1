"use client";

import { SceneCanvas } from "@/engine/three/SceneCanvas";
import { CameraRig } from "@/engine/three/CameraRig";
import { LightingRig } from "@/engine/three/LightingRig";
import { SceneEnvironment } from "@/engine/three/Environment";
import { useCapabilityFallback } from "@/engine/three/useCapabilityFallback";
import { Caption } from "@/design-system/atoms/Caption";

/**
 * Dev-only demonstration of Sprint 4's 3D Foundation: the empty Rig
 * (Canvas + Camera + Lighting + Environment), zero foreground objects, per
 * the Sprint 4 plan's Testing Strategy. Not used anywhere in the real guest
 * journey — no Scene, no 3D Object Components exist yet.
 */
export function ThreeFoundationDemo() {
  const capabilityTier = useCapabilityFallback();

  return (
    <div>
      <div className="h-64 w-full rounded-card overflow-hidden">
        <SceneCanvas className="h-full w-full">
          <CameraRig position={[0, 0, 5]} />
          <LightingRig capabilityTier={capabilityTier} />
          <SceneEnvironment background />
        </SceneCanvas>
      </div>
      <Caption className="mt-2 block">capability tier: {capabilityTier}</Caption>
    </div>
  );
}
