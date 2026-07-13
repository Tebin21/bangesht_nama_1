/**
 * EventLocation — Invita-Content-Copywriting-Localization-Bible.md §14:
 * city-first hierarchy (e.g. "سلێمانی — هۆڵی ئۆسکار"). `mapUrl` is reserved
 * for the real map integration a later sprint adds — Sprint 2's Map CTA
 * stays visually present but inert.
 */
export interface EventLocation {
  city: string;
  venue: string;
  address?: string;
  mapUrl?: string;
}
