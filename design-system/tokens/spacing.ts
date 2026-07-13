/**
 * Spacing tokens — Invita-Visual-Identity-System.md §13 (Spacing).
 * "Base unit: a single foundational spacing unit (referred to in tokens as
 * space-1)." No numeric value is given in the source doc; 4px is chosen
 * here as the base unit (industry-standard mobile-first increment), with
 * the rest of the scale expressed as documented multiples of it.
 */

const base = 4; // px — space-1

export const spacing = {
  1: `${base * 1}px`, // 4
  2: `${base * 2}px`, // 8
  3: `${base * 3}px`, // 12
  4: `${base * 4}px`, // 16
  5: `${base * 5}px`, // 20
  6: `${base * 6}px`, // 24
  8: `${base * 8}px`, // 32
  10: `${base * 10}px`, // 40
  12: `${base * 12}px`, // 48
  16: `${base * 16}px`, // 64
  20: `${base * 20}px`, // 80
  24: `${base * 24}px`, // 96
} as const;
