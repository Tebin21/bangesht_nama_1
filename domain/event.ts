/**
 * EventDetails — "the occasion's core facts: type, date, time..." per
 * Technical-Architecture-Engineering-Blueprint.md domain model. `date`/`time`
 * are pre-formatted display strings (Invita-Content-Copywriting-Localization-
 * Bible.md §13: Arabic-Indic numerals, day-part qualifier); `isoDate` is kept
 * for the live countdown logic a later sprint will add — Sprint 2 does not
 * compute anything from it.
 */
export interface EventDetails {
  occasionType: string;
  date: string;
  time: string;
  isoDate: string;
}
