import type { Person } from "./person";
import type { EventDetails } from "./event";
import type { EventLocation } from "./location";
import type { Gallery } from "./gallery";
import type { InvitationTheme } from "./theme";
import type { CountdownState } from "./countdown";

/**
 * Invitation — the root domain entity per Technical-Architecture-
 * Engineering-Blueprint.md: "has exactly one Event, one or more Person
 * entries (cardinality determined by occasion type), one Location, one
 * Gallery..., one resolved Theme." This is the single structured-data
 * shape every occasion template (starting with Housewarming) supplies —
 * components never hardcode occasion content, only consume this type.
 */
export interface Invitation {
  id: string;
  people: Person[];
  /** Joins multiple `people` for display (e.g. "❤" for a couple). Omit for single-person occasions. */
  namesConnector?: string;
  event: EventDetails;
  location: EventLocation;
  gallery: Gallery;
  theme: InvitationTheme;
  countdownState: CountdownState;
}
