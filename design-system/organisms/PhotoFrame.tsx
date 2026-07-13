"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { LuImageOff } from "react-icons/lu";
import { Icon } from "@/design-system/atoms/Icon";
import { cn } from "@/lib/cn";
import type { PhotoComposition } from "@/domain/gallery";

type PhotoFrameProps = {
  src: string | StaticImageData;
  alt: string;
  composition?: PhotoComposition;
  className?: string;
};

const COMPOSITION_ASPECT: Record<PhotoComposition, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  closeUp: "aspect-square",
  family: "aspect-[4/3]",
  couple: "aspect-[4/5]",
};

/**
 * PhotoFrame — Organism, the 5-layer construction from Invita-Visual-
 * Identity-System.md §18 / Invita-Design-System-Component-Library-Bible.md
 * §13, outside-in:
 *   1. Outer Golden Glow (soft, wide, low-opacity, behind the frame)
 *   2. Thin gradient-built Antique Gold edge
 *   3. Narrow glass mat
 *   4. The photograph (minimal radius, full color, no filter)
 *   5. Floating Shadow (elevates the whole composition)
 * Hard rule: no corner ornaments, no decorative flourishes. No parallax/
 * animation in Sprint 2 — presentation only.
 */
export function PhotoFrame({ src, alt, composition = "couple", className }: PhotoFrameProps) {
  const [failed, setFailed] = useState(false);
  const aspectClassName = COMPOSITION_ASPECT[composition];

  return (
    <div className={cn("relative", className)}>
      {/* Layer 1: outer glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-photo-frame bg-amber/20 blur-2xl"
      />

      {/* Layer 2: gold edge */}
      <div
        className="relative rounded-photo-frame p-[2px] shadow-floating"
        style={{ background: "linear-gradient(135deg, var(--color-antique-gold), var(--color-foil-gold))" }}
      >
        {/* Layer 3: glass mat */}
        <div className={cn("relative rounded-photo-frame bg-ivory/[18%] backdrop-blur-[16px] p-2", aspectClassName)}>
          {/* Layer 4: the photograph */}
          {failed ? (
            <div className="flex items-center justify-center rounded-photo-frame bg-ivory/[18%] absolute inset-2">
              <Icon icon={LuImageOff} size={32} />
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              placeholder={typeof src === "string" ? "empty" : "blur"}
              onError={() => setFailed(true)}
              className="rounded-photo-frame object-cover"
              sizes="(min-width: 768px) 28rem, 100vw"
            />
          )}
        </div>
      </div>
    </div>
  );
}
