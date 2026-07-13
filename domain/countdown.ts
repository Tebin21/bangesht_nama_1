/**
 * CountdownState — Invita-Design-System-Component-Library-Bible.md §14:
 * four content states (Before/Today/Tomorrow/After). Sprint 2 renders
 * whichever state the data supplies statically — no date-math, no live
 * computation from `EventDetails.isoDate` yet.
 */
export type CountdownState = "before" | "today" | "tomorrow" | "after";
