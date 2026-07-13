"use client";

import dynamic from "next/dynamic";
import type { PerspectiveCamera as PerspectiveCameraImpl } from "three";

const PerspectiveCamera = dynamic(
  () => import("@react-three/drei").then((mod) => mod.PerspectiveCamera),
  { ssr: false },
);

export type CameraRigVariant = "standard" | "tight";

type CameraRigProps = {
  variant?: CameraRigVariant;
  position?: [number, number, number];
  target?: [number, number, number];
};

/** §5 vertical FOV — standard 40-50°; tight (~70mm-equivalent framing, e.g. Photo Centerpiece) 28-34°. */
export const CAMERA_FOV_BY_VARIANT: Record<CameraRigVariant, number> = {
  standard: 45,
  tight: 31,
};

/**
 * CameraRig — 3D Rig Organism (Invita-Design-System-Component-Library-
 * Bible.md §22: Camera is "composed once per 3D Scene, consumed by every 3D
 * Object Component within it"). One camera per Scene, per Invita-Motion-3D-
 * Production-Bible.md §5 and Invita-Technical-Architecture-Engineering-
 * Blueprint.md §15 — no guest-driven controls are ever used (no
 * OrbitControls, matching "guest-driven camera manipulation is explicitly
 * not used anywhere"). Position/target are Scene-supplied data, never
 * hardcoded here; camera *moves* are content/choreography and explicitly
 * out of Sprint 4's scope — this renders a static camera only.
 */
export function CameraRig({ variant = "standard", position = [0, 0, 5], target = [0, 0, 0] }: CameraRigProps) {
  return (
    <PerspectiveCamera
      makeDefault
      fov={CAMERA_FOV_BY_VARIANT[variant]}
      near={0.1}
      far={100}
      position={position}
      onUpdate={(camera: PerspectiveCameraImpl) => camera.lookAt(...target)}
    />
  );
}
