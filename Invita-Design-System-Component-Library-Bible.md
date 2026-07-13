# INVITA
## Design System & Component Library Bible

**Version:** 1.0 — Implementation Foundation
**Status of prior documents:** `Invita-Foundation-Document.md`, `Invita-Visual-Identity-System.md`, `Invita-UX-Experience-Blueprint.md`, `Invita-Content-Copywriting-Localization-Bible.md`, `Invita-Technical-Architecture-Engineering-Blueprint.md`, and `Invita-Motion-3D-Production-Bible.md` are FINAL. This document extends them; it never contradicts them.
**Tech stack (fixed):** Next.js, TypeScript, Tailwind CSS, GSAP, Three.js, React Three Fiber, Framer Motion, Lenis, Zustand, next-intl.
**Worked example throughout:** the flagship Housewarming invitation — رەیان ❤ کاروان, ٢١ / ٧ / ٢٠٢٦, سلێمانی — هۆڵی ئۆسکار, centerpiece photo `invita.jpg`.

---

## How to Use This Document

Documents #1–#6 established *why* Invita exists, *what it looks like*, *what happens second by second*, *what words it uses*, *how the engine is architected*, and *the exact production values for motion and 3D*. This document is the missing layer between all of that and actual code: the **component-level specification** — every reusable building block, its name, its folder location, its props/states/variants (described, never coded), its accessibility contract, and its ownership boundary between design, motion, and 3D. An engineer or an AI assistant should be able to read a component's entry here and know exactly what to build, without inventing any new design decision.

---

## Table of Contents

1. Design System Philosophy · 2. Component Philosophy · 3. Atomic Design Strategy · 4. Component Naming Convention · 5. Component Folder Structure · 6. Layout System · 7. Spacing Tokens · 8. Typography Components · 9. Button Library · 10. Card Library · 11. Hero Components · 12. Media Components · 13. Photo Frame Specification · 14. Countdown Components · 15. Location Components · 16. RSVP Components · 17. Audio Components · 18. Navigation Components · 19. Dialog Components · 20. Form Components · 21. Feedback Components · 22. Three.js Component Boundaries · 23. Animation Ownership · 24. Accessibility Matrix · 25. Responsive Matrix · 26. Theme Compatibility · 27. Performance Rules · 28. Component Anti-Patterns · 29. Review Checklist · 30. Future Component Registry · 31. Final Design System Manifesto

---

## 1. Design System Philosophy

Consistency is not a stylistic preference in Invita — it is the mechanism by which trust is built. A guest who scrolls from رەیان و کاروان's Housewarming invitation to, one day, a Wedding invitation from a different couple should recognize Invita by feel alone, the way a reader recognizes a familiar author's voice before finishing the first sentence. A design system exists so that recognition survives eleven future occasion templates, dozens of engineers, and years of iteration without anyone having to re-derive what "feels like Invita" from scratch each time.

Three consequences follow directly:

- **A component built once and reused correctly is worth more than ten components built quickly and inconsistently.** Every chapter below exists to make reuse the *easier* path, not merely the *correct* path in theory.
- **The system is the product's memory.** `Invita-Visual-Identity-System.md` and `Invita-Motion-3D-Production-Bible.md` encode thousands of small decisions (a shadow's blur radius, a duration's exact milliseconds); this document's job is to make sure those decisions are made exactly once, in exactly one component, and never silently re-decided differently somewhere else.
- **Scalability is measured in restraint, not features.** A design system succeeds not when it has the most components, but when the twelfth future template can be built using components that already exist, with new ones added only where a genuinely new pattern — never a genuinely new occasion — requires it.

---

## 2. Component Philosophy

- **A component knows its tier, and only its tier's concerns.** Per the Atomic Design Strategy (§3), an Atom knows only design tokens; a Scene knows how to orchestrate Motion and Three.js engines. A component that reaches beyond its tier's responsibility (an Atom that fetches data, a Molecule that owns a GSAP timeline) is a defect, not a convenience.
- **Content and configuration in, presentation out.** Every component — especially at the Organism tier and above — is designed to receive occasion content (رەیان ❤ کاروان's names, ٢١/٧/٢٠٢٦, سلێمانی) and theme tokens as inputs, never to hardcode them. A component that only works for Housewarming is not yet a finished component; it is a Housewarming-specific arrangement of one that should be finished.
- **Every visual property traces to a token.** No component in this library ever hardcodes a color, spacing value, radius, shadow, or duration inline — every such value is a reference to `Invita-Visual-Identity-System.md` §28 and `Invita-Technical-Architecture-Engineering-Blueprint.md` §9's token architecture.
- **A component's states are part of its specification, not an afterthought.** Every interactive component in this bible is specified with its full state set (default, hover, active/pressed, focus, disabled, loading, error where relevant) before implementation begins — an engineer should never have to guess what a button looks like mid-press.
- **Composition over configuration explosion.** Where a component might be tempted to grow a long list of boolean/variant props to handle every future need, this system instead favors composing smaller, well-defined components together (per Atomic Design, §3) — a component with an unbounded, ever-growing prop surface is a sign the tier boundary has been violated.
- **Every component is bilingual-ready by default.** Because Invita's UI is Sorani/RTL-first (per `Invita-Content-Copywriting-Localization-Bible.md`), every component is specified assuming RTL layout as the default reading direction, with LTR treated as the adaptation case for future locales — never the reverse.

---

## 3. Atomic Design Strategy

Directly extending `Invita-Technical-Architecture-Engineering-Blueprint.md` §7, this chapter defines the concrete ownership and responsibility boundary of each tier.

- **Atoms** — the smallest, purely presentational units, bound directly to design tokens and nothing else. Own: their own visual token consumption (a font-size, a color, an icon glyph). Never own: content meaning (an Atom doesn't know it's displaying "a name" vs. "a date"), animation timelines, or occasion awareness. Examples: a single Text Atom at a given type tier, a single Icon Atom, a single Divider Atom, a single Glass Surface Atom.
- **Molecules** — small functional groupings of 2-5 Atoms that form one recognizable unit of meaning. Own: the internal arrangement/spacing of their child Atoms, and simple, self-contained interaction feedback (via Framer Motion, per `Invita-Motion-3D-Production-Bible.md` §16). Never own: occasion content resolution, Scene-level timing, or 3D rendering. Examples: a labeled Input, an Icon+Label pairing, a single Countdown digit-group, a Button.
- **Organisms** — composed, meaningful sections built from Molecules and Atoms, that map to a recognizable "part of the experience" (a card, a form, a hero region). Own: layout composition of their child Molecules/Atoms, content-driven variation (accepting occasion content/theme as props), and Molecule-level interaction orchestration. Never own: Scene sequencing or cross-Scene timing — an Organism animates itself when mounted, but does not decide *when* it is shown relative to other Organisms. Examples: the Location Card, the RSVP Form, the Photo Frame, the Countdown Card.
- **Templates** (atomic-design sense, distinct from Invita's occasion "templates" directory) — layout-level compositions arranging Organisms into a screen structure, without final content resolved. Own: responsive layout rules (§6, §25), safe-area handling, and the positional relationship between Organisms. Never own: content itself, motion timelines, or 3D scenes.
- **Scenes** (Invita-specific tier, per `Invita-Technical-Architecture-Engineering-Blueprint.md` §7/§13) — the fully assembled, time-based units corresponding to Screen Timeline entries in `Invita-UX-Experience-Blueprint.md` §3. Own: GSAP timeline orchestration for that Scene, coordination with the Three.js/R3F Engine where applicable, Audio Timeline cue triggers, and Lenis scroll-stage configuration (per `Invita-Motion-3D-Production-Bible.md` §14). This is the *only* tier permitted to own a root motion timeline or mount a Canvas.

**Ownership table:**

| Tier | Owns | Never Owns |
|---|---|---|
| Atom | Token consumption | Content meaning, animation timelines, occasion awareness |
| Molecule | Atom arrangement, simple Framer Motion feedback | Occasion content resolution, Scene timing, 3D |
| Organism | Molecule composition, content/theme props, Molecule orchestration | Scene sequencing, cross-Scene timing |
| Template (atomic) | Responsive layout, safe-area, Organism positioning | Content, motion timelines, 3D |
| Scene | GSAP root timeline, Three.js/R3F Canvas, Audio cues, scroll-stage config | Being reused as a "sub-component" inside another Scene |

---

## 4. Component Naming Convention

- **Prefix by tier, not by occasion.** Every component name begins by clearly signaling its function, never the occasion it happens to first appear in — e.g., a shared "GoldDivider" Atom, never a "HousewarmingDivider." Occasion-specific naming is reserved exclusively for files inside the `templates/<occasion>/` directory (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §5), never inside `design-system/`.
- **Suffix by role, consistently.** A consistent suffix vocabulary is used across the entire library so a name alone tells you what kind of thing it is: `*Card` (an Organism-tier bounded container, e.g., `LocationCard`, `CountdownCard`), `*Button` (an interactive Molecule, e.g., `PrimaryButton`, `IconButton`), `*Field` (a Molecule-tier form input, e.g., `TextField`), `*Dialog` (an overlay Organism, e.g., `ConfirmationDialog`), `*Scene` (a Scene-tier unit, e.g., `EnvelopeScene`, `PhotoCenterpieceScene`).
- **No occasion name in shared-tier components.** A component in `design-system/` or `engine/` never contains a template name (Wedding, Housewarming, Birthday) in its own name — this is a hard naming rule that makes accidental tier-boundary violations visible at a glance during review.
- **Folder names mirror component names, singular and PascalCase-equivalent in concept** (described here conceptually, not as a code convention) — a component's folder is named identically to the component itself, containing that component's specification, its sub-parts, and its tests, keeping a one-to-one mapping between "what is this called" and "where do I find it."
- **File names inside a component folder** follow a small, fixed vocabulary of roles (the component's own definition, its type/schema reference, its test, its stories/reference-examples) — described here as roles rather than literal file names, since no code is being specified.
- **Consistency rule:** once a name is chosen for a concept (e.g., "Card" for a bounded content container, "Scene" for a Screen-Timeline-mapped unit), that exact term is used for that concept everywhere in the codebase and in this document series — this mirrors `Invita-Content-Copywriting-Localization-Bible.md` §6's glossary-consistency rule, applied to code naming instead of UI copy.

---

## 5. Component Folder Structure

Extending `Invita-Technical-Architecture-Engineering-Blueprint.md` §5's folder architecture with component-library-specific detail — described conceptually, not as a scaffold to create yet.

- **`design-system/atoms/`** — one folder per Atom, grouped loosely by concern (typography Atoms together, icon Atoms together, surface/divider Atoms together) but all sharing the same tier-level folder, since Atoms are the most universally reusable and least occasion-adjacent tier.
- **`design-system/molecules/`** — one folder per Molecule, similarly grouped by concern (form-related Molecules, button Molecules, countdown-digit Molecules).
- **`design-system/organisms/`** — one folder per Organism, grouped by feature area (§6 of `Invita-Technical-Architecture-Engineering-Blueprint.md`'s feature-based architecture) — e.g., all RSVP-related Organisms grouped together, all Card-family Organisms grouped together.
- **`design-system/templates/`** (atomic-design Templates, not occasion templates — a naming collision worth flagging explicitly so engineers never confuse this folder with the top-level `templates/<occasion>/` directory) — one folder per layout Template.
- **`engine/scene/scenes/`** — one folder per Scene-tier component, co-located with the Scene Engine that orchestrates them (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §5's `engine/scene` location), since Scenes are tightly bound to Scene Engine lifecycle concerns rather than being general-purpose design-system pieces.
- **`design-system/tokens/`** — the token definitions themselves (§7, and `Invita-Technical-Architecture-Engineering-Blueprint.md` §9), consumed by every tier above.
- **Governing rule:** a component's folder location is determined solely by its Atomic Design tier (§3) — never by which occasion template first needed it. If a component only makes sense for one occasion, it belongs inside that occasion's own `templates/<occasion>/` directory, not in `design-system/` at all, regardless of how polished or reusable-seeming its implementation is.

---

## 6. Layout System

A small, strict set of layout primitives — described as concepts and responsibilities, not code — that every Template and Organism composes from, rather than each screen inventing its own layout approach.

- **Container:** establishes the maximum content width and horizontal centering for guest-facing content (per `Invita-Visual-Identity-System.md` §14's bounded-width rule on large phones/desktop) — every screen's outermost content wrapper is a Container; no Organism defines its own independent max-width.
- **Section:** a full-width, vertically-spaced block corresponding to one Act or major narrative beat (per `Invita-UX-Experience-Blueprint.md` §2) — owns top/bottom Section-tier spacing (§7) so Act-to-Act rhythm is consistent platform-wide without each Scene re-deciding its own vertical spacing.
- **Stack:** a vertical arrangement primitive with a single, token-driven gap value between its children — the default arrangement mechanism for most content (a Stack of text elements, a Stack of form fields), replacing ad hoc margin management.
- **Grid:** reserved for the rare cases requiring multi-column arrangement (e.g., a future Gallery Organism showing several supporting photos, per `Invita-UX-Experience-Blueprint.md` §21) — per `Invita-Visual-Identity-System.md` §14, Grid is deliberately *not* the default layout mechanism for the guest-facing narrative experience, which remains single-column; Grid exists for genuinely multi-item content only.
- **Columns/Rows:** lower-level primitives Grid is composed from — exposed independently only for the rare Organism (e.g., the Location Card's icon+text row, per `Invita-UX-Experience-Blueprint.md` §9) that needs a simple horizontal pairing without full Grid semantics.
- **Spacer:** an explicit, named empty-space primitive used only where the Stack/Section gap tokens don't already produce the correct rhythm — used sparingly; an engineer reaching for Spacer often should be reconsidered as a signal the Stack/Section token scale (§7) needs a new named step, not that Spacer should be used as an escape hatch.
- **Safe Area:** a wrapping primitive applied at the Template tier that resolves device safe-area insets (notch, Dynamic Island, home indicator) per `Invita-Visual-Identity-System.md` §13/§14 — every Scene's outer boundary passes through Safe Area handling exactly once, at the Template tier, so individual Organisms never need to reason about device-specific insets themselves.
- **Viewport:** a sizing primitive that correctly resolves the guest's real, dynamic viewport height (accounting for mobile browser chrome showing/hiding, per `Invita-Visual-Identity-System.md` §14) — used specifically by full-height Scenes (the Opening Experience, per `Invita-UX-Experience-Blueprint.md` §4) rather than assuming a naive fixed viewport unit.

---

## 7. Spacing Tokens

Directly implementing `Invita-Visual-Identity-System.md` §13 and `Invita-Technical-Architecture-Engineering-Blueprint.md` §9's spacing architecture at the component-consumption level.

- **A single base unit** underlies every spacing value consumed by the Layout System (§6) — Stack gaps, Section padding, Card internal padding, and touch-target buffers are all expressed as named multiples of this one base unit, never as independently chosen pixel values.
- **Named tiers, not raw numbers, at the component level:** components request spacing by named role (`element-gap`, `card-padding`, `section-spacing`, `safe-margin`) rather than by numeric value — this indirection is what allows the underlying base unit or scale to be refined once, platform-wide, without touching every component that consumes it.
- **Asymmetric internal-vs-external spacing (per `Invita-Visual-Identity-System.md` §13):** every Card-tier Organism's internal padding token is deliberately larger than the gap token used between sibling Cards — this relationship is encoded as a rule in the token architecture itself (internal padding and sibling gap are named, distinct tokens, never accidentally set to the same value), not left to per-component judgment.
- **Safe-area interaction:** the Safe Area primitive (§6) always resolves to whichever is larger — the standard margin token or the device's actual safe-area inset — and this resolution happens once, centrally, never re-implemented per Organism.
- **Touch-spacing tokens:** a dedicated token category (distinct from visual/layout spacing) governs the minimum clear-space buffer around every interactive element (§24's accessibility requirement), ensuring touch-target sizing is never accidentally conflated with purely visual spacing decisions.

---

## 8. Typography Components

Directly implementing the type scale from `Invita-Visual-Identity-System.md` §12.1, each tier exposed as a distinct, purpose-named Atom rather than a single generic "Text" component with a size prop that invites inconsistent usage.

| Component | Maps to Doc #2 Tier | Purpose | Notes |
|---|---|---|---|
| **Display** | Display | Host/celebrant name(s) — رەیان ❤ کاروان | Never used for anything but names; Doran Bold only |
| **Heading** | Hero / Section Title | Occasion titles, Act section headers | Two size variants (Hero, Section) within one component, never a freely arbitrary size prop |
| **Body** | Body Large / Body / Body Small | Narrative and descriptive copy | Variant prop restricted to exactly these three named sizes |
| **Caption** | Caption | Timestamps, credits, fine print | The smallest, lowest-priority text component; enforces the accessible minimum size floor (§24) even at this tier |
| **Countdown** | Countdown Numbers | Numeral display only | Always paired with tabular numeral rendering and RTL-embedded-numeral handling per `Invita-Content-Copywriting-Localization-Bible.md` §6 |
| **Names** | Invitation Names | A guest's own personalized name | Structurally identical to Display in weight/care, kept as a distinct component only because its content source (a specific guest) differs from Display's (the host) |
| **Location** | Dates / Location | Venue, city, time text | Shares a tier with Dates deliberately, per `Invita-UX-Experience-Blueprint.md` §9's rule that date/time/venue share one visual register |

**Governing rule:** no component outside this table ever renders raw text at an arbitrary size — every piece of copy in the product passes through one of these seven typography components, which is what guarantees `Invita-Content-Copywriting-Localization-Bible.md` §7's typography-to-copy-category mapping is enforced structurally, not just by convention.

---

## 9. Button Library

All buttons share one underlying Molecule contract (label, icon slot, state set, size) with variant-specific token overrides — never independently built components per variant.

- **Primary:** the platform's single most emphasized action per screen (e.g., the RSVP call-to-action, per `Invita-UX-Experience-Blueprint.md` §9-10) — solid fill using the active theme's accent/gold treatment, highest visual weight of any button variant.
- **Secondary:** a supporting action (e.g., the map button alongside a Primary RSVP action) — lower visual weight than Primary, using a Hairline Border treatment (`Invita-Visual-Identity-System.md` §11.8) rather than a solid fill.
- **Glass:** a button rendered using the Glass surface treatment (§17 of doc #2) — reserved for buttons appearing over photographic or 3D-Scene backgrounds where a solid fill would compete with the underlying imagery.
- **Ghost:** no fill, no border, text/icon only — used for the lowest-emphasis actions (e.g., a "skip"-adjacent or dismissive action, used sparingly given `Invita-UX-Experience-Blueprint.md` §25's rule against ever offering a skip action during the Opening Experience specifically).
- **Outline:** a bordered, unfilled variant distinct from Secondary by using the standard Hairline Border at full opacity rather than Secondary's specific token treatment — reserved for contexts needing a clearly bounded but non-solid action.
- **Danger:** reserved for genuinely destructive confirmations (per `Invita-Content-Copywriting-Localization-Bible.md` §20's Delete confirmation) — uses the muted Danger semantic color (`Invita-Visual-Identity-System.md` §11.12), never a bright alarm red.
- **Success:** reserved for confirmed-positive states (e.g., a completed RSVP acceptance acknowledgment) — uses the muted Success semantic color, applied sparingly per doc #2 §11.12's "small functional touches only" rule.
- **Loading:** a state, not a separate component — every button variant above supports a Loading state that replaces its label with a restrained, on-brand loading indicator (§21) while disabling further interaction, never a generic spinner inconsistent with the platform's material language.
- **Disabled:** a state applied to any variant — reduced opacity/muted-color treatment (per doc #2 §11.11's Muted Colors), never a completely different visual treatment per variant.
- **Icon Button:** a Molecule variant containing only an icon (no text label) — used where the icon alone is unambiguous (e.g., a mute toggle, §17) — always paired with an accessible text label for screen readers (§24) even though no visible label is shown.
- **FAB (Floating Action Button):** a circular, elevated variant using the Floating Object radius/shadow treatment (`Invita-Visual-Identity-System.md` §15-16) — reserved for a single, persistent, high-priority action that must remain reachable while scrolling (e.g., a persistent mute control, per `Invita-UX-Experience-Blueprint.md` §16) — used sparingly, never more than one FAB visible at a time, per the platform's single-focal-point discipline.

**Shared state set for every variant:** default, hover (desktop-secondary context only, per doc #2 §13), pressed/active (Framer Motion tap feedback, per `Invita-Motion-3D-Production-Bible.md` §16), focus (visible, on-brand focus ring, §24), loading, disabled.

---

## 10. Card Library

All Cards share one Organism-tier contract (a bounded, elevated container with consistent internal padding, radius, and shadow per `Invita-Visual-Identity-System.md` §15-16) with content-specific composition on top.

- **Glass Card:** the base glass-surface container (§17 of doc #2) that several other Cards below compose on top of — used wherever a Card must float over photographic or 3D-Scene content.
- **Photo Card:** a general-purpose framed-photo container following the Photo Frame Specification (§13) but without the specific "hero centerpiece" treatment reserved for the primary invitation photo — used for supporting/gallery imagery.
- **Invitation Card:** the composed summary unit (used, for example, in a future host-facing preview or a shareable link-preview context) combining Display-tier names, occasion title, and date into one bounded Card — distinct from the full-Scene Invitation Reveal (which is a Scene-tier, not Card-tier, experience).
- **Location Card:** per `Invita-UX-Experience-Blueprint.md` §9 — venue (هۆڵی ئۆسکار), city (سلێمانی), time (کاتژمێر ٧ی شەو), map action, composed as a single animated unit (never revealed field-by-field, per doc #3 §9's explicit rule).
- **Countdown Card:** the glass-paneled countdown container (§14) — persists as a smaller ambient element across the Act III→IV transition per doc #3 §8/§10.
- **Media Card:** a general container for a single media asset (image, video, or Lottie per `Invita-Technical-Architecture-Engineering-Blueprint.md` §16) not otherwise covered by Photo Card — used for future template needs (e.g., a venue photo, a supporting illustration).
- **Audio Card:** houses the Music Player controls (§17) where a visible (rather than purely floating/FAB) audio control surface is needed — e.g., a future host-dashboard preview context.
- **Gallery Card:** a Card wrapping multiple Photo Cards in a Grid layout (§6), reserved for a future multi-photo gallery feature (per `Invita-Foundation-Document.md` §22) — not used in the flagship Housewarming experience, which features exactly one centerpiece photograph, but specified now so the Card family is ready for that future feature without redesign.

**Shared Card contract:** every Card in this library uses the same radius tier, the same shadow tier (Luxury Depth or Ambient, per `Invita-Visual-Identity-System.md` §16, chosen by the Card's elevation significance), and the same internal-padding-larger-than-sibling-gap rule (§7) — a new Card variant is added to this library only when a genuinely new content shape is needed, never merely for a new occasion's content (which should reuse an existing Card with new content/theme props).

---

## 11. Hero Components

Hero components are the largest, most significant Scene-adjacent Organisms — each corresponds to a major moment in `Invita-UX-Experience-Blueprint.md`'s Screen Timeline (§3) but remains an Organism (composable, content-driven) rather than a full Scene (which additionally owns timeline/3D orchestration).

- **Opening Scene:** technically a Scene-tier component (not a pure Organism), listed here because it is the container into which the Envelope Organism, the ambient particle field, and the Opening Experience's lighting/camera setup (per `Invita-Motion-3D-Production-Bible.md` §4) are all composed — the single richest composition boundary in the entire library.
- **Invitation Hero:** the Organism composing the Housewarming Title (Heading), the Names (Display), and the Invitation Line (Body Large) into the Act II sequence (per `Invita-UX-Experience-Blueprint.md` §6) — accepts occasion title, person names, and invitation-line copy as content props, making it directly reusable for Wedding/Birthday/etc. with different content.
- **Photo Hero:** the Organism wrapping the Photo Frame Specification (§13) at its largest, most emphasized scale specifically for the Act III centerpiece moment (per doc #3 §7) — distinct from the general-purpose Photo Card (§10) by virtue of its scale, parallax behavior (per `Invita-Motion-3D-Production-Bible.md` §9), and its status as the single largest visual element in its Scene.
- **Closing Hero:** the Organism composing the Memory and Closing Scene content (per doc #3 §11's final beats) — a softer, lower-intensity composition than the other Heroes above, reflecting its farewell role.

---

## 12. Media Components

- **Image:** the base Atom/Molecule wrapping Next.js's image optimization (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §16) — every other image-displaying component in this library (Photo Frame, Photo Card, Gallery Card) is built on top of this one Image primitive, never re-implementing image loading independently.
- **Gallery:** the Organism arranging multiple Image instances via the Grid layout primitive (§6), feeding into the Gallery Card (§10) — reserved for future multi-photo template needs.
- **Background:** a Molecule/Organism-tier component managing full-bleed background imagery or gradient/texture treatment (per `Invita-Visual-Identity-System.md` §23's Background System) — always rendered behind foreground content with the correct depth-of-field blur relationship (per `Invita-Motion-3D-Production-Bible.md` §5/§10) to foreground focal elements.
- **Video:** reserved for future template needs (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §16) — specified with the same never-autoplay-with-sound and reduced-motion-respecting rules as any other motion-bearing component.
- **Poster:** the static fallback frame shown before Video content loads or when Video is paused/muted-by-default — always visually matching the Scene's resting composition so no jarring flash occurs when Video content becomes ready.
- **Loading:** the shared, on-brand loading-state visual (§21) used across every Media component while an asset is resolving — never a generic browser-default spinner.
- **Placeholder:** a low-fidelity, blurred preview shown during progressive image loading (per `Invita-Visual-Identity-System.md` §15's progressive-loading performance principle) — always a soft, blurred color/luminance approximation of the final image, never a flat gray box, so even the loading state carries the platform's warm visual language.

---

## 13. Photo Frame Specification

The Photo Frame is the single most important Organism in the entire library — it is how `invita.jpg` and every future host photo is presented, per `Invita-Visual-Identity-System.md` §18 and `Invita-Motion-3D-Production-Bible.md` §9. **Every photograph displayed anywhere in the guest-facing experience uses this Organism — there is no alternate, unframed photo presentation anywhere in the product.**

**Composition (outside-in, per doc #2 §18):** Outer Golden Glow → thin gradient-built Antique Gold edge → narrow glass mat → the photograph itself at minimal border radius → Floating Shadow beneath the whole assembly.

**Props (conceptual, not code):** the source image, its composition-type metadata (portrait/landscape/close-up/family/couple, per `Invita-UX-Experience-Blueprint.md` §21, which determines frame-to-photo proportion handling), and a scale-context flag (Hero-scale for the Act III centerpiece vs. standard Photo-Card scale for supporting imagery, per §10-11).

**States:**
- **Loading:** the frame's gold edge and glass mat render immediately (they are lightweight, token-driven elements); the photograph area itself shows the Placeholder treatment (§12) until the full-resolution image resolves — the frame never appears "incomplete" while its content loads.
- **Resting:** the fully composed frame at rest, including its micro-movement ambient sway (per `Invita-Motion-3D-Production-Bible.md` §9).
- **Entering:** the scale/fade entrance choreography (§9 of doc #6) — owned by the Scene tier that mounts this Organism, not by the Organism itself, since entrance timing is a Scene-sequencing concern (§3 of this document).
- **Scrolling/Parallax-active:** the three-tier parallax and glass-reflection micro-shift behavior (per doc #6 §9) — active only while this Organism is within its designated Dwell Stage viewport range (per `Invita-UX-Experience-Blueprint.md` §10).
- **Error (image failed to load):** a graceful, on-brand fallback — the gold frame and glass mat remain, with a soft, warm placeholder fill and (per `Invita-Content-Copywriting-Localization-Bible.md` §19's error-copy rules) a calm, non-alarming inline notice, never a broken-image icon or blank void.

**Absolute rules (restated from docs #2, #3, #6 — never renegotiable at the component level):** no face is ever cropped; no filter, vignette, or color grade is ever applied to the photograph; the photograph itself is never internally animated (no Ken Burns); only the frame and its surrounding depth/light treatment may move.

---

## 14. Countdown Components

- **States:** the Countdown Card (§10) has four content states matching `Invita-Content-Copywriting-Localization-Bible.md` §12 — Before (multiple days remaining, standard numeral display), Today (a distinct, singular visual/copy treatment marking arrival), Tomorrow (a transitional "almost here" state), and After (the countdown retires; if any post-event state is shown at all, it shifts to a Memory/Thank-You composition, per doc #3 §12, never a negative or "expired" countdown display).
- **Animations:** digit changes use a soft cross-fade only (per `Invita-Motion-3D-Production-Bible.md` §21-23), never a mechanical flip; the panel's ambient Golden Glow pulse uses the "Living Pulse" easing curve (doc #6 §22) continuously while the Countdown Card is mounted.
- **Responsive rules:** the Countdown Card's glass panel scales its internal padding (not its numeral type size below the accessible minimum) across the Responsive Matrix (§25) — numeral legibility is never sacrificed for panel compactness on smaller devices.
- **Numeral handling:** Arabic-Indic numerals, tabular spacing, left-to-right numeral-group embedding within the RTL layout, per `Invita-Content-Copywriting-Localization-Bible.md` §6.

---

## 15. Location Components

- **Address:** composed as city-first, then venue (سلێمانی — هۆڵی ئۆسکار), per `Invita-Content-Copywriting-Localization-Bible.md` §14's hierarchy — implemented as a Molecule pairing a Location-tier Typography component (§8) with a gold-treated location icon (§19 of doc #2).
- **Time:** کاتژمێر ٧ی شەو, always paired with its time-of-day qualifier per doc #4 §6/§13 — implemented as a Molecule matching the Address Molecule's visual weight so date/time/place read as one cohesive fact set, per doc #3 §9.
- **Map:** the Secondary Button variant (§9) triggering the device's native map application — labeled per `Invita-Content-Copywriting-Localization-Bible.md` §10/§14's human, action-oriented button-copy rules.
- **Directions:** an optional Body-tier text block for host-provided guidance (e.g., parking notes) — composed within the Location Card (§10) beneath the core Address/Time/Map elements, never given equal visual weight to the primary venue/time information.

---

## 16. RSVP Components

- **Acceptance:** a confirmed-positive state Molecule (using the Success semantic color sparingly, per §11.12 of doc #2) paired with the warm acceptance copy from `Invita-Content-Copywriting-Localization-Bible.md` §15.
- **Decline:** handled with the exact same visual weight and dignity as Acceptance — no Danger-color treatment or diminished styling is applied to a decline response, consistent with doc #4 §15's explicit rule against guilt-inducing framing.
- **Pending:** the RSVP form's default/unanswered state — a neutral, inviting Molecule (per doc #4 §15's "open invitation still waiting" framing) rather than a warning-styled incomplete-task indicator.
- **Confirmation:** a Toast or inline Success-state Molecule (§21) appearing immediately after submission, using the specific "thank you for your response" copy register from doc #4 §15, distinct from the Acceptance/Decline state display itself.
- **Form composition:** the full RSVP Organism composes a small set of Form Components (§20 — typically a name field if not already personalized, an attendance choice, and an optional message field) via React Hook Form + Zod validation per `Invita-Technical-Architecture-Engineering-Blueprint.md` §21, never more fields than this minimal, considered set.

---

## 17. Audio Components

- **Music Player:** a minimal, largely invisible control surface — per `Invita-UX-Experience-Blueprint.md` §15/§25, the platform has no visible "player UI" with scrubbing/track-listing in the guest experience; the Music Player component's primary visible surface is the Mute control below, with Progress/Volume (below) reserved for possible future host-preview or dashboard contexts.
- **Mute:** an Icon Button (§9) or FAB, persistently reachable (per doc #3 §16), toggling between muted/unmuted states with an immediate visual icon-swap and a smooth audio fade (per `Invita-Motion-3D-Production-Bible.md` §18) — never an abrupt audio cutoff.
- **Progress:** not exposed in the flagship guest experience (background music has no guest-facing scrub/seek control, consistent with its ambient, non-interactive role) — specified here as a reserved component for a future host-facing music-selection/preview context only.
- **Volume:** similarly reserved for a future host-facing context — the guest experience exposes only binary mute/unmute, never a granular volume slider, keeping the guest-facing audio control as simple and unobtrusive as `Invita-UX-Experience-Blueprint.md` §16 specifies.

---

## 18. Navigation Components

The flagship Housewarming guest experience has no traditional navigation (per `Invita-UX-Experience-Blueprint.md`, it is a single scroll sequence). This chapter future-proofs the component library for the Host dashboard and future B2B tooling (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §20) without introducing any navigation chrome into the guest-facing Scenes.

- **Nav Item:** a single destination-labeled Molecule (per `Invita-Content-Copywriting-Localization-Bible.md` §11's naming rules — names the destination, not the mechanism), always paired with an accessible text label even where an icon is the primary visual.
- **Nav Bar / Nav Rail:** Organism-tier containers arranging Nav Items — reserved entirely for the future authenticated Host-dashboard route tree (per doc #5 §20), architecturally forbidden from appearing anywhere in the guest-facing Scene tree, enforced by the same folder/import-boundary discipline as the engine/template separation (§5 of doc #5).
- **Breadcrumb:** reserved for a future, more complex B2B planner-dashboard context (multiple clients/events) — not needed at launch, specified now so the eventual dashboard doesn't require a new naming/ownership decision later.

---

## 19. Dialog Components

- **Modal:** the base Organism (a centered or bottom-sheet overlay using the Dialog radius tier per `Invita-Visual-Identity-System.md` §15, with a Scrim Overlay behind it per §11.13 of doc #2) that every Dialog variant below composes on top of.
- **Confirmation:** implements `Invita-Content-Copywriting-Localization-Bible.md` §20's pattern — a plain statement of the action plus two clearly distinct Button choices (e.g., a Danger-variant confirm paired with a Secondary/Ghost cancel for a Delete confirmation).
- **Error:** a calm, blame-free composition (per doc #4 §19) pairing an Error-state icon treatment with brief copy and a clear recovery action — never using an alarming red-dominant visual treatment inconsistent with the muted Danger semantic color (§11.12 of doc #2).
- **Information:** a neutral-register Dialog (or, more often, a lighter-weight Toast, §21) for non-critical notices.
- **Success:** a warm, brief confirming Dialog/Toast — reserved for genuinely significant confirmations (e.g., a completed RSVP) rather than routine actions, per the platform's overall restraint principle.
- **Shared Dialog contract:** every Dialog traps focus correctly (§24), is dismissible via a clear, labeled action (never only via an ambiguous tap-outside gesture on mobile), and enters/exits via the Presence transition rules from `Invita-Motion-3D-Production-Bible.md` §16.

---

## 20. Form Components

- **Input:** the base text-entry Molecule, React Hook Form-bound, using the Input typography tier (§8 of this document / §12.1 of doc #2) and matching Body text size so typed content feels continuous with the rest of the experience (per `Invita-Visual-Identity-System.md` §12.1's Input-tier rationale).
- **Textarea:** the multi-line variant, reserved for an optional guest message within the RSVP Organism (§16) — kept deliberately short-max-length per `Invita-Content-Copywriting-Localization-Bible.md` §5's sentence/brevity rules, enforced via Zod schema constraints (§19/§21 of doc #5) reflected in the component's max-length affordance.
- **Checkbox:** reserved for future multi-select needs (e.g., a future guest-count or preference selector) — styled consistent with the Input radius/border tokens, never a browser-default checkbox appearance.
- **Radio:** reserved for the RSVP attendance choice itself (Accept/Decline as a mutually exclusive choice) — the primary, most-used Form Component in the flagship experience alongside Input.
- **Switch:** reserved for future binary preference toggles (e.g., a future host-dashboard setting) — not used in the guest-facing flagship experience, where Mute (§17) is a Button/Icon Button, not a Switch, since it is a momentary action-feeling control rather than a persistent settings toggle.
- **Validation:** every Form Component surfaces validation feedback inline, using the calm, blame-free Error copy register (§19, doc #4 §19) — validation state is visually indicated through the Input's border/label treatment (a shift toward the muted Danger color at the border only, never a jarring full-field color change) plus an adjacent short error message, never a blocking modal interrupting the guest mid-form for a simple validation issue.

---

## 21. Feedback Components

- **Toast:** a brief, non-blocking notification (per `Invita-Content-Copywriting-Localization-Bible.md` §16's Notification System) appearing and auto-dismissing after a short duration — used for Success/Information-category notices that don't require the guest's explicit dismissal.
- **Snackbar:** functionally similar to Toast but reserved for notices that include an action (e.g., an "undo"-style affordance in a future host-dashboard context) — not used in the guest-facing flagship experience, which has no undo-able actions.
- **Tooltip:** reserved for desktop/secondary-context supplementary labeling (per doc #2's mobile-first mandate, Tooltip is a lower-priority, desktop-oriented affordance) — never used to convey essential information that a touch-only guest would have no way to trigger.
- **Progress:** a determinate or ambient progress indicator (e.g., asset-loading progress during the Scene Engine's coordinated loading, per `Invita-Technical-Architecture-Engineering-Blueprint.md` §13) — styled consistent with the Golden Glow/Living Pulse motion language (`Invita-Motion-3D-Production-Bible.md` §22) rather than a generic progress-bar appearance.
- **Loading:** the shared, on-brand loading treatment referenced across Media (§12) and Button (§9) components — a single, consistent visual (a soft glow-pulse or Placeholder-style treatment, never a spinning-wheel default) reused everywhere loading feedback is needed.
- **Skeleton:** a content-shaped Placeholder (§12) used specifically for text-bearing Organisms awaiting content (rare in the flagship guest experience, since content is resolved before a Scene activates per `Invita-Technical-Architecture-Engineering-Blueprint.md` §11/§13, but reserved for a future host-dashboard context where content genuinely loads incrementally).

---

## 22. Three.js Component Boundaries

- **Strict UI/3D separation:** every Scene that includes 3D content (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §15) mounts exactly one R3F Canvas, and all DOM-based UI (Typography, Buttons, Cards) renders as ordinary DOM content composited above or alongside that Canvas — DOM components never render *inside* the R3F reconciler tree, and 3D object components never render outside it. This boundary is structural, not a style preference.
- **3D Object Components** (Envelope, Wax Seal, Ribbon, House, Gift, Flowers, Leaves, Particles — per `Invita-Visual-Identity-System.md` §21 and `Invita-Motion-3D-Production-Bible.md` §24) are the 3D-tier equivalent of Atoms/Molecules — each owns only its own geometry, material (per doc #6 §25's Material Library), and any self-contained idle motion (e.g., the envelope's ambient float) — never scene-wide lighting or camera setup.
- **3D Rig Components** (the shared Lighting Rig, per doc #6 §10-11, and the Camera component, per doc #6 §5) are 3D-tier Organisms — composed once per 3D Scene, consumed by every 3D Object Component within it, never redefined per-object.
- **Responsibility handoff:** a Scene-tier component decides *which* 3D Object Components appear and *when* (via its GSAP timeline, per §23 below) — 3D Object Components themselves never decide their own visibility/entrance timing independently; they expose a controllable state (e.g., "sealed" vs. "opening" vs. "open" for the Envelope) that the owning Scene drives.
- **Fallback/performance boundary:** the Three.js Engine's capability-detection and simplified-fallback logic (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §15) lives at the Scene tier, not inside individual 3D Object Components — a 3D Object Component is authored once, at full fidelity, with its fallback/simplification handled by the Scene deciding which detail level to request, never by the object duplicating its own logic for multiple fidelity levels internally.

---

## 23. Animation Ownership

A single, unambiguous table resolving exactly which tier and which engine owns every category of motion in the product, reconciling `Invita-Technical-Architecture-Engineering-Blueprint.md` §14 and `Invita-Motion-3D-Production-Bible.md` §15-16 into component-level guidance.

| Motion Category | Owning Tier | Owning Engine | Example |
|---|---|---|---|
| Scene-to-Scene transitions | Scene | GSAP | Envelope → Seal Break → Title |
| Intra-Scene sequential reveals | Scene | GSAP | رەیان → ❤ → کاروان sequencing |
| Scroll-driven narrative pacing | Scene | GSAP + Lenis | Dwell Stage on Photo Hero |
| 3D object idle motion (ambient float, particle drift) | 3D Object Component | Three.js/R3F | Envelope hover, particle field |
| 3D camera moves | Scene (via 3D Rig) | Three.js/R3F | Opening settle, Photo Hero push |
| Component mount/unmount presence | Organism/Molecule | Framer Motion | Dialog appearing, Card entering |
| Touch/press/hover feedback | Atom/Molecule (Button) | Framer Motion | Button tap scale |
| Ambient glow-pulse on a persistent element | Organism | Framer Motion or lightweight CSS-equivalent token animation | Countdown Card glow, RSVP button pulse |

**Governing rule:** if a proposed animation doesn't clearly map to exactly one row of this table, it has not yet been correctly scoped — resolving *which* row it belongs to (and therefore which tier and engine implements it) is a required step before any animation is built, not an implementation detail to be decided ad hoc by whoever happens to write the code.

---

## 24. Accessibility Matrix

| Concern | Requirement | Applies To |
|---|---|---|
| **ARIA** | Every icon-only control (Icon Button, Mute FAB) carries an accessible text label; every Dialog uses appropriate role/labeling so assistive tech announces it as an overlay; every essential fact (names, date, location, RSVP state) is exposed as real, meaningful markup, not only as animated visual content | Buttons, Dialogs, Hero components, Photo Frame captions |
| **Keyboard** | Every interactive component (Button variants, Form Components, Dialog dismiss actions) is fully operable via keyboard, with a visible, on-brand focus treatment (never a default browser outline clashing with `Invita-Visual-Identity-System.md`'s visual language) | All interactive components |
| **Focus** | Dialog components trap focus while open and restore it to the triggering element on close; focus order follows the RTL-correct logical reading order (per `Invita-Visual-Identity-System.md` §12.3) | Dialogs, Forms, Navigation (future) |
| **Screen Reader** | The Names, Date, Location, and RSVP action are announced in a coherent, logical order independent of any 3D/motion/audio layer being perceived at all, per `Invita-UX-Experience-Blueprint.md` §23 | Hero components, Location Components, RSVP Components |
| **Contrast** | Every text/background pairing across every component variant (including Danger/Warning/Success semantic states) is validated against WCAG AA minimums in situ, per `Invita-Visual-Identity-System.md` §26 — the muted palette's low-contrast aesthetic is never used as an excuse for insufficient contrast | All Typography components, Buttons, Cards |
| **Touch Targets** | Every interactive component meets the minimum touch-target size and surrounding buffer (§7's touch-spacing tokens) regardless of how visually minimal it is styled | Buttons, Form Components, Nav Items |
| **Reduced Motion** | Every Scene/Organism with a signature animation exposes an equally complete, calmer alternative (per `Invita-Motion-3D-Production-Bible.md` §20), activated automatically from the guest's OS preference | Scenes, Photo Frame, Countdown, Dialogs |

---

## 25. Responsive Matrix

| Device Class | Layout Behavior | Typography Behavior | Notes |
|---|---|---|---|
| **Phone (small, e.g., iPhone SE-class)** | Tighter Section-spacing tier (§7); single-column Stack layout throughout | Display/Hero step down one tier from default, never below accessible minimum | Baseline reference device for the entire Performance Budget (`Invita-Technical-Architecture-Engineering-Blueprint.md` §25) |
| **Phone (standard–large, e.g., Pro Max-class)** | Additional vertical breathing room (larger Section-spacing tier) rather than added width | Default type scale | Content width remains bounded even at largest phone sizes |
| **Tablet** | Same fluid single-column layout as phone, treated as an intermediate breakpoint, never a multi-column reflow | Default type scale | Preserves narrative pacing across this device class per `Invita-Visual-Identity-System.md` §14 |
| **Desktop** | Content constrained within a centered, mobile-proportioned Container (§6); no edge-to-edge stretching | Default type scale | Desktop is a respectful downscale-up context, never the primary design target |
| **Foldables (folded)** | Treated identically to a narrow phone | As phone (small) | No foldable-specific component logic required |
| **Foldables (unfolded)** | Treated identically to a large phone (additional breathing room, not multi-column) | As phone (standard–large) | Same fluid grid handles both states |

---

## 26. Theme Compatibility

- **Light (default/primary):** the Invita Ivory-based palette (`Invita-Visual-Identity-System.md` §11.5) — every component in this library is designed and reviewed against this theme first, as the platform's signature appearance, not as one of two equally-weighted modes.
- **Dark/Deep (narrative mode):** implements the Deep Background theme (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §10) used specifically for the Opening Scene and any evening/formal-occasion template variant — every component consumes theme values via semantic token roles (never a hardcoded light/dark branch inside the component itself), so a component built once automatically supports both themes correctly.
- **Per-occasion accent themes:** each future template (Wedding, Birthday, etc.) supplies an accent-color override (per doc #2 §11.3/§30) layered on the base token set — every component in this library must render correctly with *any* valid accent override, which is the primary test for whether a component has been built generically enough (§2's content/theme-in, presentation-out principle).
- **Future seasonal/premium themes:** the Theme Engine (`Invita-Technical-Architecture-Engineering-Blueprint.md` §10) anticipates additional named themes beyond Light/Deep — no component in this library may assume only two themes ever exist; every themed value is resolved through the token system's semantic roles, never through a boolean "isDark" check baked into component logic.

---

## 27. Performance Rules

- **Lazy loading:** every Scene-tier component not yet reached in the guest's scroll journey defers its heavier dependencies (3D models, high-resolution imagery, its own Canvas mount) until it is genuinely about to become active, per `Invita-Technical-Architecture-Engineering-Blueprint.md` §25 — this is a property of the Scene tier specifically; Atoms/Molecules/Organisms are lightweight enough that they don't require independent lazy-loading logic.
- **Memoization:** Organisms and Scenes that receive content/theme props are memoized against those props so a parent re-render (e.g., a Zustand state change unrelated to this component's own content) never triggers unnecessary re-computation of an already-settled Scene's composition.
- **Image optimization:** every image-bearing component (Photo Frame, Photo Card, Gallery) is built exclusively on the shared Image primitive (§12), which is the sole integration point with Next.js's image optimization — no component bypasses this primitive to render a raw image tag independently.
- **Animation budget:** every Scene is subject to the "one hero-tier animation at a time" rule (`Invita-Motion-3D-Production-Bible.md` §2/§19) as a hard component-composition constraint — a Scene composing two Organisms that both want to run a prominent entrance animation simultaneously must be re-sequenced (staggered) rather than allowed to run concurrently, and this is checked at the component-composition level during review (§29), not only at the motion-design level.

---

## 28. Component Anti-Patterns

- **Never build an occasion-specific component when an existing generic Organism, given new content/theme props, would serve.** This is the single most direct violation of this system's entire purpose (§1-2) — before adding any new component, the Reusability check from `Invita-Visual-Identity-System.md` §29 (adapted to code) must be applied: does an existing Atom/Molecule/Organism already express this need with different inputs?
- **Never let a lower tier import from or depend on a higher tier** (an Atom depending on an Organism, a Molecule owning Scene-level timing) — per §3's ownership table, this directionality is absolute.
- **Never hardcode a color, spacing, radius, shadow, or duration value inside a component** — every such value must resolve through the token system (§7, and doc #5 §9), with no exceptions for "just this one component."
- **Never build a component with an ever-growing list of boolean/variant props to handle new occasions** — per §2, this is a sign the component should instead accept structured content/theme props, or that a new, properly composed variant belongs in the library (§9-10's variant tables), not a new flag bolted onto an existing one.
- **Never mount a persistent Canvas across Scene boundaries** — every 3D-bearing Scene owns exactly one Canvas, scoped to its own lifecycle (§22).
- **Never let a 3D Object Component decide its own entrance timing** — timing is owned by the Scene (§22-23); an object component that self-triggers its own "appear" animation independent of Scene sequencing breaks the ownership table in §23.
- **Never apply the Danger semantic color's visual weight to an RSVP Decline response** — per §16 and doc #4 §15, decline is handled with the same dignity as acceptance.
- **Never skip the Photo Frame Specification for any photograph anywhere in the product** — per §13, there is no unframed photo presentation path; a new "quick" or "simple" image display component that bypasses framing is a direct violation.
- **Never introduce a component that only works correctly in one theme** (Light or Deep) — per §26, every component must be built against semantic token roles so both current themes (and future ones) render correctly without component-level changes.
- **Never build a Toast/Dialog/Form validation flow that blames the guest or uses alarming visual treatment** — per §19-21 and doc #4 §19, error/validation feedback stays calm, clear, and blame-free at the component level, not just in copy.

---

## 29. Review Checklist

Every new or modified component must pass all items below before approval:

1. **Tier check:** does this component's responsibility match exactly one Atomic Design tier (§3), with no responsibilities borrowed from an adjacent tier?
2. **Reuse check:** was an existing component in this library evaluated and genuinely found insufficient before building a new one?
3. **Naming check:** does the component's name follow the prefix/suffix conventions in §4, with no occasion name present if it lives outside `templates/<occasion>/`?
4. **Token check:** does every visual property (color, spacing, radius, shadow, duration) resolve through the token system, with zero hardcoded values?
5. **Content/theme-agnosticism check:** would this component render correctly if handed Wedding or Corporate content/theme instead of Housewarming's, with no code change required?
6. **State completeness check:** are all required states (default, hover, active, focus, disabled, loading, error as applicable) specified and accounted for (§9, §20)?
7. **Animation ownership check:** does this component's motion map to exactly one row of the Animation Ownership table (§23), using the correct engine?
8. **Accessibility check:** does this component satisfy every applicable row of the Accessibility Matrix (§24)?
9. **Responsive check:** does this component behave correctly across every row of the Responsive Matrix (§25)?
10. **Theme check:** does this component render correctly in both Light and Deep themes, and would it survive a hypothetical third theme without modification (§26)?
11. **Performance check:** does this component comply with the Performance Rules (§27), including lazy-loading and animation-budget constraints where applicable?
12. **Anti-pattern check:** does this component avoid every item listed in §28?

Only a component that passes all twelve items may be added to the library.

---

## 30. Future Component Registry

A roadmap projecting this library toward 100+ reusable components across all eleven future occasion templates, organized by how each new component is justified — never by occasion alone.

**Principle governing this entire registry:** a new component is added to `design-system/` only when a genuinely new *pattern* is needed (a new kind of content shape, a new kind of interaction) — never merely because a new *occasion* has arrived. The registry below is organized around pattern categories precisely to make this distinction concrete and auditable.

- **Typography extensions (~5-8 components):** e.g., a future "Quote" or "Toast-style-message" typography treatment for occasion-specific narrative flourishes (a wedding vow excerpt, a graduation quote) — a small, bounded extension of §8's existing scale, not a per-occasion typography system.
- **Button/Form extensions (~10-15 components):** e.g., a Guest-Count Stepper (for larger-RSVP occasions like Festival or Corporate), a Multi-Guest Selector, a Date-Range display Molecule (for multi-day occasions like a Festival) — each justified by a genuinely new interaction shape, reused across every occasion that shares that shape.
- **Card extensions (~10-15 components):** e.g., a Schedule Card (for a Wedding's multi-event day-of timeline, or a Corporate Event's agenda), a Speaker/Honoree Card (for Corporate/Award Ceremony), a Registry/Gift-List Card (for Wedding/Baby Shower) — each a new content shape, composed from existing Typography/Button Atoms wherever possible.
- **Hero extensions (~5-10 components):** e.g., a Multi-Person Hero (for Family Gathering's multiple hosting families, or a Graduation cohort), an Organization Hero (for Corporate Events, replacing Person-based Display with an organization name/mark) — each justified by a genuinely different content-cardinality pattern in the Data Model (`Invita-Technical-Architecture-Engineering-Blueprint.md` §19), not by occasion alone.
- **3D Object Components (~15-20 components):** the shared object cast from `Invita-Visual-Identity-System.md` §21 (Envelope, Wax Seal, Ribbon, Flowers, Leaves, House, Gift, Particles) plus occasion-specific additions as they're proven necessary (a Graduation Cap silhouette, a Festival-appropriate light/lantern object) — each new 3D Object Component is added only when no existing object in the shared cast can be re-themed/re-textured to serve the need.
- **Notification/Feedback extensions (~5-10 components):** occasion-tone-variant Toast/Dialog copy templates (per `Invita-Content-Copywriting-Localization-Bible.md` §21's Thank You System per occasion) — these are content variations consumed by the existing Toast/Dialog components (§19, §21), not new components in their own right, and are listed here only to make explicit that "new occasion tone" is a content/copy concern, never a new-component justification.
- **Governance for this registry:** before any component proposed above (or any component not yet imagined) is built, it must pass the same Review Checklist (§29) as every existing component — the number "100+" is a projection of healthy, pattern-justified growth, not a target to hit by relaxing the reuse discipline that keeps this system coherent.

---

## 31. Final Design System Manifesto

A design system is not a constraint on creativity — it is what makes رەیان و کاروان's Housewarming invitation and a wedding invitation sent five years and eleven templates from now feel like they were crafted by the same steady hand, even though neither engineer who built them will ever meet.

Every Atom in this library carries a decision someone made carefully in `Invita-Visual-Identity-System.md`. Every Organism carries a beat someone choreographed carefully in `Invita-UX-Experience-Blueprint.md`. Every Scene carries a second-by-second intention someone directed carefully in `Invita-Motion-3D-Production-Bible.md`. This bible's only job is to make sure none of that care is lost, diluted, or silently reinvented between the moment it was designed and the moment a guest actually feels it on their phone.

A component that is reused correctly is an act of respect for the work that came before it. A component built as a one-off, hardcoded shortcut is a small betrayal of everyone — designer, writer, engineer, director — who already decided how this should feel, and got it right the first time.

Build once. Build it to last. Let every future celebration Invita ever hosts stand on the same quiet, considered foundation — elegant, timeless, premium, emotional, and unmistakably, consistently Invita.

---

*End of Design System & Component Library Bible. Together with the six prior foundation documents, this completes the full pre-development specification for Invita. No component should be implemented without passing the Review Checklist in §29 against the standards set across this entire document series.*
