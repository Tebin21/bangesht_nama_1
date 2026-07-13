/**
 * Person — Invita-Technical-Architecture-Engineering-Blueprint.md domain
 * model: "a generalized participant entity (a host, a celebrant, a couple
 * member) — used flexibly per occasion." Cardinality/relationship is
 * decided by the occasion template's data (see Invitation.namesConnector),
 * never hardcoded into a component.
 */
export type PersonRole = "host" | "celebrant" | "coupleMember" | "organization";

export interface Person {
  id: string;
  displayName: string;
  role: PersonRole;
}
