"use client";

import dynamic from "next/dynamic";
import { colors } from "@/design-system/tokens/colors";

const Environment = dynamic(() => import("@react-three/drei").then((mod) => mod.Environment), {
  ssr: false,
});

type SceneEnvironmentProps = {
  fogDensity?: number;
  /** Renders the HDRI as the visible backdrop, not just a reflection source — used by the dev-only rig demo. */
  background?: boolean;
};

/**
 * SceneEnvironment — HDRI + fog system per Invita-Motion-3D-Production-
 * Bible.md §10/§13. Uses drei's built-in "sunset" preset HDRI as a warm-
 * toned placeholder — Invita's actual custom-authored HDRI is a content/
 * art-department asset this sprint cannot produce; swap the `preset` prop
 * for `files`/`path` once that asset exists. Exponential fog is tinted with
 * the existing `deepBackground` token rather than a new color; the default
 * density is an interpretive approximation of "perceptible only roughly 2-4
 * virtual meters from camera" (§10) — exponential fog density doesn't map
 * 1:1 to a literal meter range.
 */
export function SceneEnvironment({ fogDensity = 0.15, background = false }: SceneEnvironmentProps) {
  return (
    <>
      <Environment preset="sunset" environmentIntensity={1} background={background} />
      <fogExp2 attach="fog" args={[colors.deepBackground, fogDensity]} />
    </>
  );
}
