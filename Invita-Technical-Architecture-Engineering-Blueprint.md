# INVITA
## Technical Architecture & Engineering Blueprint

**Version:** 1.0 — Engineering Foundation
**Companion documents (binding prior art — never contradict):** `Invita-Foundation-Document.md` (strategy), `Invita-Visual-Identity-System.md` (visual system, design tokens), `Invita-UX-Experience-Blueprint.md` (experience choreography, Screen Timeline, Motion Language, 3D art direction), `Invita-Content-Copywriting-Localization-Bible.md` (Sorani/RTL copy and localization rules).
**Tech stack (fixed, non-negotiable for this architecture):** Next.js (latest, App Router), TypeScript, Tailwind CSS, GSAP, Three.js, React Three Fiber (R3F), Framer Motion, Lenis, Lottie, React Icons, Zustand, Zod, React Hook Form, next-intl, Vercel.

---

## How to Use This Document

Documents #1–#4 define *why Invita exists*, *what it looks like*, *what happens second by second*, and *what words it uses*. This document defines *how it is built* — the concrete engineering system that renders all of that, correctly and consistently, across a growing library of occasion templates. Every chapter below names the specific library from the fixed stack responsible for that concern. No chapter proposes an alternative technology; where a decision must be made within a library's own configuration space (e.g., how GSAP timelines are organized), this document makes that decision explicitly so no engineer has to guess.

---

## Table of Contents

1. Engineering Philosophy · 2. Software Architecture Principles · 3. System Goals · 4. Scalability Strategy · 5. Folder Architecture · 6. Feature-Based Architecture · 7. Atomic Design Structure · 8. Component Governance · 9. Design Token Architecture · 10. Theme Engine · 11. Invitation Engine · 12. Template Engine · 13. Scene Engine · 14. Motion Engine · 15. Three.js/R3F Engine · 16. Media Engine · 17. Asset Pipeline · 18. State Management · 19. Data Model · 20. Routing Strategy · 21. API Architecture · 22. Internationalization · 23. Accessibility Engineering · 24. Responsive Architecture · 25. Performance Budget · 26. SEO Strategy · 27. PWA Architecture · 28. Security Strategy · 29. Testing Strategy · 30. Deployment Strategy · 31. Monitoring · 32. Coding Standards · 33. Engineering Anti-Patterns · 34. Future Platform Roadmap · 35. Final Engineering Manifesto

---

## 1. Engineering Philosophy

Invita's engineering exists to serve one constraint above all others: **the experience specified in `Invita-UX-Experience-Blueprint.md` must render, on a mid-range Android phone, exactly as emotionally and materially convincing as it does on a flagship iPhone.** Every architectural decision in this document is judged first against that constraint, and only second against conventional engineering virtues like developer convenience.

Three philosophical commitments follow from this:

- **The design system is upstream of the code, never the reverse.** Colors, type scale, spacing, radius, shadow, motion timing, and 3D material rules are *already decided* in `Invita-Visual-Identity-System.md`. Engineering's job is to encode those decisions faithfully as design tokens (§9), not to reinterpret or "improve" them during implementation.
- **One engine, many templates.** Per `Invita-Foundation-Document.md` §16-17, the housewarming invitation for رەیان و کاروان must be built as a configuration of a shared engine, not as a bespoke page. Every chapter from §11 onward is written to protect this principle — if a chapter's design would require touching shared engine code to add the eleventh future template, that chapter is under-specified and must be revised.
- **Cinematic, not heavy.** GSAP, Three.js/R3F, and Framer Motion are powerful enough to build something slow and bloated if used carelessly. This architecture treats every animation and every 3D scene as a performance budget line item (§25) from the moment it is designed, not as an afterthought optimized later.

---

## 2. Software Architecture Principles

- **Separation of concerns by *layer*, not by *file type*.** Invita organizes code by what it *does* (rendering a scene, managing invitation state, defining a template's content shape) rather than by grouping all "components" together regardless of purpose — this is why §5–§7 define a feature/domain-oriented structure rather than a flat `components/`, `styles/`, `utils/` split.
- **Composition over inheritance, configuration over duplication.** The Template Engine (§12) exists specifically so that adding "Wedding" never means copying "Housewarming" and editing it — new occasions are expressed as configuration and content passed into shared rendering logic.
- **Type safety as a first-class architectural concern, not a lint rule.** TypeScript, combined with Zod (§19, §21), is used to make invalid invitation data structurally unrepresentable wherever possible — a malformed event configuration should fail at build/validation time, never silently render a broken guest experience.
- **Explicit boundaries between engine and template.** The engine (Invitation Engine, Template Engine, Scene Engine, Motion Engine, Three.js Engine) never imports from a specific template's directory; templates only ever import from the engine and shared design-token/component layers. This directionality is enforced by folder structure (§5) and code review discipline (§8, §32), not merely convention.
- **Progressive enhancement of richness, not of function.** Every guest, regardless of device capability, must reach the same essential information (names, date, location, RSVP) per `Invita-UX-Experience-Blueprint.md` §23. Only the *richness* of the delivery (full 3D scenes vs. a simplified motion fallback) may degrade with device/network capability — the underlying content and functional path never do.
- **Server-first rendering, client-side enhancement.** Next.js App Router's server components are the default; interactivity (motion, 3D, state) is opted into at the client boundary deliberately, keeping the shipped JavaScript footprint as small as the experience allows (directly serving the Performance Budget in §25).

---

## 3. System Goals

1. Render the flagship Housewarming experience (and every subsequent template) as a faithful, pixel-and-timing-accurate implementation of `Invita-UX-Experience-Blueprint.md`'s Screen Timeline, with no engineering shortcut visibly compromising the choreography.
2. Support adding a new occasion template as a **content and configuration exercise**, measured concretely as: no changes required to the Invitation Engine, Scene Engine, Motion Engine, or Three.js Engine's shared code.
3. Sustain a smooth, consistent frame rate for all GSAP/Framer Motion/R3F-driven motion on mid-range Android hardware, not only on high-end iOS devices.
4. Keep the guest-facing initial payload within the Performance Budget (§25) regardless of how visually rich any individual template's 3D/motion content becomes.
5. Guarantee the entire guest experience functions correctly and completely in Kurdish Sorani (RTL) as the default and primary locale, with next-intl architected from day one to add further locales (§22) without an RTL-to-LTR retrofit.
6. Make every invitation instance's content and configuration independently validatable (via Zod schemas, §19/§21) before it is ever rendered to a guest, eliminating an entire class of "broken invitation link" failures.
7. Prepare — without yet requiring — a clean seam for a future backend/API and authentication layer (§21), so the current frontend-forward build does not need to be re-architected when host accounts, multi-tenant B2B tooling, and persistent RSVP storage are introduced (per `Invita-Foundation-Document.md` §23-24).
8. Treat accessibility (§23), performance (§25), and security (§28) as launch-blocking engineering requirements for the flagship template, not later hardening work.

---

## 4. Scalability Strategy

Directly extending `Invita-Foundation-Document.md` §16-17, the engineering-level scalability strategy rests on four mechanisms:

- **Template-as-configuration.** Each occasion (Housewarming, Wedding, Birthday, Graduation, Baby Shower, Corporate, Festival, Private Event, Family Gathering) is represented as a data-driven definition (content schema + theme tokens + Scene/Act sequence reference) consumed by the shared Template Engine (§12) — never as an independently coded page tree.
- **Token-driven visual variation.** Per-occasion visual differences (accent color, imagery, specific 3D object cast) are expressed entirely through the Theme Engine (§10) and Design Token Architecture (§9) — the underlying component and engine code never branches on "which occasion is this."
- **Shared engine layer, isolated template layer.** The folder architecture (§5) physically separates engine code (reusable across all templates) from template definitions (occasion-specific configuration and content), making the "add template #12" test from `Invita-Foundation-Document.md` §19 a structural property of the codebase, not just a discipline the team tries to maintain.
- **Schema-first extensibility.** The Data Model (§19) is deliberately generalized from day one (Invitation, Person, Event, Location, Gallery, RSVP, Countdown, Music, Animation, Theme) so that Wedding's two-person "couple" concept and Corporate's organization-oriented concept are both expressible as configurations of the same underlying `Person`/`Event` entities, rather than requiring new entities per occasion.

**Concrete scalability test, restated for engineering:** adding the Wedding template should require: (a) a new template definition file describing its content schema and Act/Scene sequence variations, (b) a new theme token set (accent color, imagery slots), and (c) any genuinely new 3D objects (per `Invita-Visual-Identity-System.md` §21's shared object cast) — and nothing else. If implementing Wedding requires modifying the Scene Engine, Motion Engine, or Three.js Engine's shared logic, that shared logic was insufficiently generalized and must be revisited before Wedding ships.

---

## 5. Folder Architecture

Described conceptually — a directory structure and its rationale, not a scaffold to create yet.

- **`app/`** — Next.js App Router entry point. Contains only routing concerns: route segments for the guest-facing invitation experience (dynamic invitation routes, §20), layout files establishing the RTL/Sorani document shell, and (later) host-dashboard route segments. Contains no business logic or template-specific code — every route segment's job is to resolve which invitation/template is being requested and hand off to the engine layer.
- **`engine/`** — the protected, occasion-agnostic core: `engine/invitation` (Invitation Engine, §11), `engine/template` (Template Engine, §12), `engine/scene` (Scene Engine, §13), `engine/motion` (Motion Engine, §14), `engine/three` (Three.js/R3F Engine, §15), `engine/media` (Media Engine, §16). Nothing in `engine/` ever imports from `templates/`.
- **`templates/`** — one self-contained directory per occasion (`templates/housewarming`, and later `templates/wedding`, `templates/birthday`, etc.), each containing only that occasion's content schema, theme token overrides, and Act/Scene sequence definition. Templates depend on `engine/` and `design-system/`; they never depend on each other.
- **`design-system/`** — the single source of truth for design tokens (§9), the Theme Engine's token sets (§10), and the Atomic Design component library (§7) — colors, typography, spacing, radius, shadow, and glass rules from `Invita-Visual-Identity-System.md`, expressed as consumable token definitions and shared components.
- **`domain/`** — the Data Model's TypeScript types and Zod schemas (§19): `Invitation`, `Person`, `Event`, `Location`, `Gallery`, `RSVP`, `Countdown`, `Music`, `Animation`, `Theme`. Framework-agnostic — no React, no Next.js-specific imports — so this layer remains stable even if presentation-layer decisions change.
- **`state/`** — Zustand store definitions (§18), organized by concern (invitation state, theme state, audio state, UI/interaction state) rather than one monolithic store.
- **`i18n/`** — next-intl configuration and message catalogs (§22), organized per locale, with Sorani (`ckb` or the project's chosen locale code) as the default and only fully-populated locale at launch.
- **`content/`** or **`messages/`** — the actual Sorani (and later, additional-locale) copy catalogs governed by `Invita-Content-Copywriting-Localization-Bible.md`, referenced by key from templates and shared components rather than hardcoded inline strings anywhere in the codebase.
- **`assets/`** — organized per the Asset Pipeline rules (§17): images, audio, Lottie files, GLTF/3D models, fonts (the Doran font files) — never scattered inline alongside component code.
- **`lib/` / `utils/`** — genuinely cross-cutting, framework-level utilities (e.g., a shared analytics wrapper, a shared validation helper) — kept deliberately small; anything specific to one engine concern belongs inside that engine's own directory instead.
- **`tests/`** — organized to mirror the structure above (§29), rather than being scattered per-component, so engine-level and template-level test coverage can be reasoned about independently.

**Guiding rule (restated from `Invita-Foundation-Document.md` §19):** it should always be possible to answer "which single new folder do we add for template #12, and which existing folders do we touch — ideally none outside `templates/`?"

---

## 6. Feature-Based Architecture

Within `templates/` and any future host-dashboard code, organization is feature-based (grouped by what a piece of code is *for* — "RSVP flow," "guest gallery," "countdown display") rather than type-based (grouping all hooks together, all types together, etc., across unrelated features).

- Each feature directory (e.g., an RSVP feature) co-locates its own components, its own Zustand slice (if it needs local-ish state beyond global concerns), its own Zod schema references, and its own next-intl message keys — reducing the need to jump across distant, type-grouped folders to understand one feature end-to-end.
- Shared, cross-feature primitives (a button, a glass panel, a gold-framed photo component) live in `design-system/` (§7), not duplicated per feature.
- This feature-based organization applies *within* the engine layer too — e.g., `engine/scene` internally organizes by scene-lifecycle concern (loading, transition, timeline orchestration) rather than by arbitrary file-type grouping.

---

## 7. Atomic Design Structure

Invita's component library follows Atomic Design, extended with one Invita-specific tier — **Scenes** — to accommodate the platform's cinematic, 3D/motion-heavy composition needs beyond what "Templates" (in the atomic-design sense) typically describe.

- **Atoms** — the smallest, purely presentational units directly bound to design tokens (§9): a single typographic text element at a given type-scale tier, a single icon (React Icons-based per `Invita-Visual-Identity-System.md` §19), a single gold-gradient divider line, a single glass surface primitive. Atoms have no knowledge of invitation content or occasion — they only know tokens.
- **Molecules** — small, functional groupings of atoms: a labeled input field (React Hook Form-bound), a button with its icon and label, a single countdown digit-group, a location-icon-plus-text pairing. Molecules still know nothing about *which* occasion they're used in.
- **Organisms** — composed, meaningful sections built from molecules: the full Location Card (venue, city, time, map button, per `Invita-UX-Experience-Blueprint.md` §9), the full RSVP form, the full Photo Frame organism (gold edge + glass mat + photograph, per `Invita-Visual-Identity-System.md` §18). Organisms may be occasion-agnostic (reused across all templates) or occasion-parameterized (accepting theme/content props without hardcoding occasion-specific logic).
- **Templates** (atomic-design sense — distinct from Invita's "occasion templates" in `templates/`) — layout-level compositions arranging organisms into a screen structure, without final content — e.g., the layout shape of an "Act" screen (title position, safe-area-aware margins) independent of which occasion's title is shown.
- **Scenes** (Invita-specific tier) — the fully assembled, time-based, motion-and-3D-orchestrated experience units corresponding directly to the Screen Timeline entries in `Invita-UX-Experience-Blueprint.md` §3 (e.g., the "Sealed Envelope" scene, the "Photo Centerpiece" scene). A Scene composes one or more Templates/Organisms with a specific Motion Engine (§14) and Three.js Engine (§15) orchestration, plus Audio Timeline cues (per doc #3 §15) — this is the tier at which "what happens, second by second" (doc #3) actually gets implemented.

**Governance rule:** an occasion's content (names, dates, photos, copy) is only ever wired in at the Scene or occasion-Template level (`templates/housewarming`, etc.) — Atoms, Molecules, and Organisms remain fully reusable across every current and future occasion.

---

## 8. Component Governance

- **Naming:** components are named for *what they are*, not *where they're used* — e.g., a shared "GoldFramedPhoto" organism, never a "HousewarmingPhoto" component that happens to be reusable but is named as if it weren't. Occasion-specific naming is reserved exclusively for files inside `templates/<occasion>/`.
- **Rules:** a component's tier (Atom/Molecule/Organism/Template/Scene, §7) determines what it is allowed to import — Atoms may only consume design tokens; Molecules may compose Atoms; Organisms may compose Molecules/Atoms and accept content/theme props; Scenes may additionally orchestrate Motion/Three.js engine hooks and Zustand state. A lower tier never imports from a higher tier.
- **Ownership:** the `design-system/` and `engine/` layers are treated as the most tightly reviewed code in the repository (mirroring `Invita-Visual-Identity-System.md` §29's design-token ownership guidance) — changes here require explicit review against all four prior documents, since a regression here silently affects every template simultaneously.
- **Reusability:** before adding any new component, the first question is whether an existing Atom/Molecule/Organism already expresses the need with different token/content inputs — new components are added only when a genuinely new visual or interaction pattern is required, consistent with `Invita-Visual-Identity-System.md` §29's rule against undisciplined one-off additions.
- **Documentation-by-example:** every Organism and Scene-tier component is expected to have a clear mapping back to the specific section of `Invita-UX-Experience-Blueprint.md` or `Invita-Visual-Identity-System.md` it implements, so traceability between design intent and implementation is always recoverable.

---

## 9. Design Token Architecture

This chapter is the code-facing continuation of `Invita-Visual-Identity-System.md` §28's token specification — the same categories, now mapped to concrete mechanisms within the fixed stack.

- **Typography tokens** → expressed as Tailwind CSS theme extensions (font-family bound to the local Doran font files, font-size/line-height/letter-spacing scale matching `Invita-Visual-Identity-System.md` §12.1's tiers) plus CSS custom properties where a value needs to be read by non-Tailwind consumers (e.g., a GSAP timeline referencing a spacing value for an animation calculation).
- **Color tokens** → Tailwind theme color extensions matching every named color in doc #2 §11 (Primary, Secondary, Accent, Gold Material stops, Background, Surface, Glass, Border, Divider, Text, Muted, semantic colors, Overlay, Shadow) — gold's multi-stop gradient nature (doc #2 §11.4) is expressed as a set of named gradient tokens, never collapsed into a single flat color value.
- **Spacing tokens** → a Tailwind spacing scale derived from doc #2 §13's base unit and its multiples, applied consistently to margin/padding/gap utilities.
- **Shadow tokens** → Tailwind box-shadow theme extensions for each named shadow in doc #2 §16 (Ambient, Glass, Luxury Depth, Floating, Ambient-Occlusion, Golden Glow), pre-composed as ready-to-use utility values so no engineer hand-authors a shadow value inline.
- **Radius tokens** → a Tailwind border-radius scale matching doc #2 §15's hierarchy (card < button/input < dialog < floating object), applied by component tier (§7), never chosen ad hoc per component.
- **Animation tokens** → duration and easing-curve values (matching doc #2 §24 and doc #3 §12's timing bands: micro-interaction, element-reveal, section-transition) defined once as shared constants consumed by GSAP timeline configuration, Framer Motion variants, and CSS transition utilities alike — ensuring a "section transition" feels identically paced whether it's implemented via GSAP or Framer Motion.
- **Glass tokens** → a defined set of opacity/blur/border-opacity value pairs (Light Glass, Dark Glass, per doc #2 §11.7/§17) expressed as Tailwind utility combinations (background-opacity + backdrop-blur + border utilities) bundled into a small number of named glass "recipes" rather than assembled ad hoc per usage.
- **Token-to-code pipeline (conceptual):** the canonical token values live in one structured source (a token definition layer within `design-system/`), from which the Tailwind theme configuration is generated/extended, and from which any non-Tailwind consumer (GSAP timing constants, R3F material color references) imports the same underlying values — the goal is **one authored value per design decision**, consumed everywhere it's needed, never re-typed by hand in a second location.
- **Governance:** exactly mirrors `Invita-Visual-Identity-System.md` §29's rule — no component or template may hardcode a color, spacing, shadow, radius, or duration value outside this token system, even for "just one" template-specific need; a genuinely new value is added to the token system first, then consumed.

---

## 10. Theme Engine

- **Light mode (default and primary):** the Invita Ivory-based palette from `Invita-Visual-Identity-System.md` §11.5 is the platform's signature, default appearance — not a "light mode" in the conventional sense of one of two equally-weighted options, but the platform's primary identity.
- **Dark/Deep mode:** implements doc #2 §11.5's "Deep Background" — used deliberately for the Opening Experience's sealed-envelope moment (doc #3 §4) and for evening/formal-occasion templates, architected as an explicit theme variant the Scene Engine (§13) can request per-scene, rather than a device-preference-driven global dark mode toggle (this is a **narrative** theme switch, not a user-preference accessibility feature — device-level dark-mode preference is not assumed to control this).
- **Future themes:** the Theme Engine is built to support additional named themes beyond Light/Deep as the platform matures (e.g., a possible future seasonal or premium-tier visual variant), without changing how templates consume theme values — templates always request semantic token roles ("primary background," "accent gold"), never a hardcoded light/dark branch.
- **Per-template accent themes:** each occasion template (§12) supplies its own accent-color token override (per doc #2 §11.3/§30 — Botanical Sage for Housewarming, Dusk Plum-leaning tones for Wedding, etc.) layered on top of the shared base token set — implemented as a theme override object merged with the base Design Token Architecture (§9), never as a fully independent token set per template.
- **Mechanism:** theme application is implemented via a combination of Tailwind's theming capability (CSS custom properties swapped per active theme/template context) and a Zustand-held "active theme" state (§18) that Scene/Template components read to resolve which token values are currently active — ensuring theme switches (e.g., entering the Deep-mode Opening scene) are consistent across both Tailwind-styled DOM elements and R3F material colors simultaneously.

---

## 11. Invitation Engine

The Invitation Engine is responsible for one job: given an invitation identifier (resolved via routing, §20), produce a fully validated, render-ready invitation data object and hand it to the correct occasion Template Engine (§12) for rendering.

**Conceptual pipeline:**
1. **Resolve** — the route handler identifies which invitation is being requested (e.g., رەیان و کاروان's Housewarming invitation) from the URL (§20).
2. **Load** — the invitation's content and configuration (Data Model entities, §19) are loaded from their current source — at launch, this may be static/structured content co-located with the template; per the API Architecture (§21), this load step is designed to be swapped for a real backend call without changing anything downstream.
3. **Validate** — the loaded data is parsed against its Zod schema (§19/§21) before anything renders; a validation failure produces a graceful, on-brand error state (per `Invita-Content-Copywriting-Localization-Bible.md` §19's error-copy rules) rather than a broken or partially-rendered guest experience.
4. **Resolve Template & Theme** — the invitation's occasion type determines which Template Engine definition (§12) and Theme Engine token set (§10) apply.
5. **Compose** — the resolved data, template definition, and theme are passed into the Scene Engine (§13) to produce the actual sequenced guest experience.
6. **Personalize** — where a guest-specific personalized link is used (per `Invita-Foundation-Document.md` §5/§22), the Invitation Engine additionally resolves the specific guest's name/RSVP state and merges it into the render-ready data before handoff, without altering the base invitation content.

**Rule:** the Invitation Engine never contains occasion-specific branching logic (no `if (occasion === 'wedding')` anywhere in this layer) — occasion-specific behavior belongs entirely to the Template Engine and the individual `templates/<occasion>` definitions it resolves.

---

## 12. Template Engine

The Template Engine is the direct implementation of `Invita-Foundation-Document.md` §17's "template as plugin" model. It defines the **contract** every occasion template must fulfill, and provides the shared machinery that interprets that contract into an actual Scene sequence — without any per-occasion code duplication.

**The template contract, conceptually, requires each occasion (`templates/housewarming`, `templates/wedding`, etc.) to supply:**
- A **content schema reference** — which Data Model entities and fields this occasion needs (e.g., Housewarming and Wedding both use `Person`/`Event`/`Location`, but a couple-oriented occasion supplies two `Person` entries while a Birthday supplies one).
- An **Act/Scene sequence definition** — which Scenes (§7's Scene tier) appear, in what order, referencing the shared six-Act structure from `Invita-UX-Experience-Blueprint.md` §2, with occasion-specific content slotted into each (e.g., Wedding's Act II Names Reveal Scene is the *same* Scene component as Housewarming's, parameterized with different content/theme).
- A **theme override** — the occasion's accent color and imagery direction (§10).
- A **3D object cast reference** — which subset of the shared Three.js object library (§15, per `Invita-Visual-Identity-System.md` §21) this occasion uses (e.g., Wedding adds Ribbon/Wax-Seal emphasis; Housewarming emphasizes the House silhouette).
- **Localized content keys** — references into the `content/`/`i18n/` message catalogs (§22) rather than inline strings, ensuring every occasion's copy is governed by `Invita-Content-Copywriting-Localization-Bible.md`.

**How Wedding, Birthday, Housewarming, Graduation, and Corporate share code without duplication:** all five (and every future occasion) are rendered by exactly the same Template Engine interpreter and the same underlying Scene components — what differs between them is entirely data (the contract fields above), never logic. Adding Corporate Events, for example, means authoring a new contract-fulfilling definition (organization name instead of a couple's names, a more composed tone per `Invita-Content-Copywriting-Localization-Bible.md` §3, a corporate-appropriate 3D cast subset) — the Scene Engine, Motion Engine, and Three.js Engine code that actually renders "a title fades in, then names reveal, then a photo becomes centerpiece" is never copied or forked.

**Governance rule (restated from `Invita-Visual-Identity-System.md` §30 in engineering terms):** if implementing a new occasion ever requires adding a new prop, branch, or special case to a *shared* Scene/Organism/Engine component (rather than supplying new data through the existing contract), this is treated as a design defect in the Template Engine's contract, to be generalized — not an acceptable one-off exception.

---

## 13. Scene Engine

The Scene Engine orchestrates the actual second-by-second experience specified in `Invita-UX-Experience-Blueprint.md` §3 (the Screen Timeline) — it is the runtime that sequences Scenes (§7), manages their loading, and hands off timing control to the Motion Engine (§14) and Three.js Engine (§15).

- **Loading:** each Scene declares its own asset dependencies (a specific photo, a specific GLTF model, a specific Lottie file) via the Media Engine (§16); the Scene Engine coordinates progressive loading so a Scene never becomes "active" (per the Screen Timeline) before its required assets are ready, while still respecting the Opening Experience's deliberate pacing (doc #3 §4) rather than racing to show content the instant it's technically available.
- **Transitions:** the handoff between Scenes (e.g., Envelope → Seal Break → Housewarming Title, per doc #3 §11's Scene Progression) is modeled as an explicit state machine — each Scene has a defined enter/active/exit lifecycle, and the Scene Engine guarantees an outgoing Scene's exit animation and an incoming Scene's enter animation are choreographed together (via Motion Engine timeline coordination, §14) rather than left to coincidentally overlap.
- **Animation timeline orchestration:** the Scene Engine does not itself define animation curves or durations (that is the Motion Engine's job, §14) — it is responsible for *sequencing*, i.e., knowing which Scene is active, when a Scene's internal timeline has completed, and when to trigger the next Scene's entry, matching the exact scene-by-scene account in doc #3 §11.
- **Scroll-driven vs. gesture-driven activation:** per `Invita-UX-Experience-Blueprint.md` §4/§10, the Scene Engine distinguishes gesture-gated Scenes (the Opening/Envelope sequence, activated by a tap, scroll disabled per doc #3 §10's "Locked Stage") from scroll-paced Scenes (Acts II onward) — this distinction is a first-class configuration property of each Scene, not an incidental implementation detail.
- **Reduced-motion mode:** the Scene Engine reads the guest's reduced-motion preference (via the Accessibility Engineering layer, §23) once at initialization and configures every Scene's Motion Engine timeline to use the calmer fallback choreography defined in doc #3 §23/§26 — this is a Scene Engine-level concern (not left to each Scene to individually check), guaranteeing no Scene is accidentally shipped without its reduced-motion path.

---

## 14. Motion Engine

- **GSAP architecture:** GSAP owns complex, precisely-timed, sequenced animations — particularly the Scene-to-Scene transitions (§13) and any animation requiring fine-grained timeline control (e.g., the multi-stage envelope-opening sequence in doc #3 §5, or the sequential Names Reveal in doc #3 §6). GSAP timelines are defined per Scene, using the shared animation duration/easing tokens (§9) exclusively — no Scene hand-rolls a bespoke easing curve outside the token system.
- **Scroll architecture (Lenis):** Lenis provides the smooth-scroll foundation underlying every scroll-paced Scene, implementing the scroll-friction/damping behavior specified in `Invita-UX-Experience-Blueprint.md` §10 (standard pacing, the Photo Centerpiece's deliberately slowed "Dwell Stage," the decelerating pace into the Memory/Closing Scenes) — Lenis's scroll position is the shared timing source that GSAP's ScrollTrigger-style integration and R3F scroll-linked effects both read from, ensuring scroll-driven motion across DOM and Canvas layers stays perfectly synchronized.
- **Timeline architecture:** each Scene owns exactly one root GSAP timeline; nested/child timelines are used for sub-sequences within a Scene (e.g., within the Names Reveal Scene: رەیان fades in → ❤ pulses → کاروان fades in, per doc #3 §6, as three timeline children) — this one-root-timeline-per-Scene rule keeps the Scene Engine's "has this Scene's animation completed" check (§13) simple and reliable.
- **Parallax engine:** parallax (reserved specifically for the Photo Centerpiece and ambient particle layers, per doc #3 §12) is implemented as a scroll-position-driven transform, sourced from the same Lenis scroll value used for narrative pacing — implemented subtly enough (per doc #3 §12's explicit caution) that it never becomes the dominant visual effect of a Scene.
- **Framer Motion's role:** reserved for component-level, React-state-driven micro-interactions (touch feedback per doc #3 §16, simple enter/exit transitions for UI-tier elements like dialogs and the RSVP form, per §7's Organism tier) — Framer Motion and GSAP are not used interchangeably for the same concern; GSAP owns Scene-level cinematic timelines, Framer Motion owns React-component-lifecycle-bound interaction feedback.
- **Never Over-Animate, enforced architecturally:** per `Invita-Visual-Identity-System.md` §24's governing rule, the Motion Engine's Scene timeline structure makes it structurally visible in code review when more than one foreground animation is active simultaneously (since each Scene has one root timeline, a reviewer can inspect whether that timeline drives more than one attention-demanding change at once) — this turns a design principle into something enforceable at the architecture level, not just a guideline trusted to memory.

---

## 15. Three.js/R3F Engine

Implements the 3D Art Direction from `Invita-UX-Experience-Blueprint.md` §13 and the object/material rules from `Invita-Visual-Identity-System.md` §21 using React Three Fiber as the React-idiomatic binding to Three.js.

- **Canvas architecture:** a single R3F Canvas is mounted per active 3D-bearing Scene (the Envelope Scene, the Photo Centerpiece's ambient particle layer, the Memory Scene) rather than one persistent full-page Canvas — Canvases are mounted/unmounted in coordination with the Scene Engine's lifecycle (§13) so 3D rendering cost is only paid while a 3D-bearing Scene is actually active, directly serving the Performance Budget (§25).
- **Scene hierarchy:** each 3D Scene's object graph mirrors the object list in doc #3 §13 (Envelope, Wax Seal, Ribbon, Particles, House silhouette, Flowers/Leaves as applicable) — objects are organized as independent, composable R3F components (one component per object type, per `Invita-Visual-Identity-System.md` §21's object list) so a future template can recombine the same object components in a new arrangement without new 3D code.
- **Camera system:** implements doc #3 §13's near-static camera philosophy — a single camera per 3D Scene, with only the two deliberate movements specified (the Opening settle, the Photo Centerpiece push) implemented as explicit, named camera animations rather than freely adjustable camera controls; guest-driven camera manipulation (e.g., orbit controls) is explicitly not used anywhere in the guest experience, consistent with the "camera as scene-setter, not as toy" principle.
- **Lighting:** a shared lighting rig (Ambient + Golden Light key light + Soft Bloom post-processing, per `Invita-Visual-Identity-System.md` §22) is implemented once as a reusable R3F lighting setup and applied consistently across every 3D Scene — individual object components never define their own independent light sources, guaranteeing the cross-object lighting consistency doc #3 §13 requires.
- **Environment:** minimal, blurred environment maps/backgrounds (per doc #3 §13) rather than fully modeled environments — environment assets are treated as lightweight, heavily compressed textures (§16-17), never as complex geometry.
- **Model loading:** GLTF is the standard 3D model format for all object assets (Envelope, Gift Box, House silhouette, etc.); models are loaded through R3F's async loading mechanisms with the Scene Engine's loading coordination (§13) ensuring a Scene doesn't activate before its models are ready, and with aggressive model-level optimization (§16-17) applied before any model enters the asset pipeline.
- **Particles:** implemented as an efficient instanced/points-based rendering approach (not individual mesh objects per particle) to keep the ambient Particle/Floating Dust layer (doc #3 §13/§14) cheap enough to run continuously across every Scene without a meaningful frame-rate cost.
- **Performance strategy:** every 3D Scene is budgeted independently (polygon count, texture size, particle count) against the Performance Budget (§25); a device/capability detection step (or a graceful runtime frame-rate monitor) allows the Three.js Engine to fall back to a simplified object/lighting configuration on lower-capability devices — this fallback still renders the same object and lighting *direction*, just at reduced fidelity, never a functionally different scene.

---

## 16. Media Engine

- **Images:** delivered through Next.js's built-in image optimization, with source images (including `invita.jpg`) pre-processed per the Asset Pipeline (§17) — responsive sizing is generated automatically per breakpoint (§24) rather than a single fixed-resolution asset serving every device.
- **Video:** if/when used (e.g., a future template's ambient background motion), delivered as adaptive, progressively-loading video with a poster-frame fallback matching the Scene's resting composition — never autoplaying with sound, and always respecting the reduced-motion/mute defaults from `Invita-UX-Experience-Blueprint.md` §15/§23.
- **Audio:** the Audio Timeline (doc #3 §15) is implemented via a dedicated audio-state Zustand slice (§18) controlling a single shared audio element/context per active experience — cues (envelope-opening sound, the Names-Reveal chime, RSVP confirmation tone) are triggered by the Scene Engine's lifecycle events (§13), never by ad hoc calls scattered through component code.
- **Lottie:** used for any vector-based micro-animations that suit Lottie's strengths better than GSAP/R3F (e.g., a lightweight icon animation) — Lottie files are treated as a specialized Atom/Molecule-tier asset (§7), never used for Scene-level cinematic sequencing (which remains GSAP/R3F's responsibility, §14-15).
- **Textures:** all 3D material textures (per `Invita-Visual-Identity-System.md` §21's material rules — matte cardstock, satin wax, brushed gold) are pre-baked, compressed texture assets, sized and formatted specifically for real-time 3D use (§17), never full-resolution photographic source files loaded directly into a 3D material.
- **GLTF:** the canonical format for all 3D models (§15), always passed through a compression/optimization step (e.g., geometry and texture compression suited to real-time delivery) before entering `assets/`.
- **Optimization, cross-cutting rule:** every media type above is optimized *before* it enters the codebase's asset directory, not at request time — the Asset Pipeline (§17) is the enforcement point for this rule.

---

## 17. Asset Pipeline

- **Asset naming:** a consistent, descriptive naming convention per asset type and occasion (e.g., assets scoped to `templates/housewarming` are named/namespaced clearly as belonging to that template, while shared engine assets — the envelope model, the particle texture — are named/namespaced as shared, occasion-agnostic resources) — naming alone should make it obvious whether an asset is shared or template-specific, reinforcing the folder architecture's engine/template separation (§5).
- **Folder rules:** assets live alongside the code layer that owns them — shared 3D/media assets in `assets/shared/` (or equivalent, under `engine/`'s media concerns), occasion-specific assets (a host's uploaded photo, an occasion's specific accent imagery) under that template's own directory — mirroring the code-level engine/template split.
- **Compression:** every asset type has a defined maximum-size target enforced before it is considered ready for use — images compressed to modern formats with quality settings tuned to preserve the "museum-quality" fidelity `Invita-UX-Experience-Blueprint.md` §7 requires for centerpiece photography, while 3D textures and models use aggressive, real-time-appropriate compression given their more decorative/atmospheric role (per `Invita-Visual-Identity-System.md` §21).
- **Optimization:** responsive image variants generated per breakpoint (§24), 3D assets optimized specifically for the polygon/texture budgets set in §15/§25, audio compressed to a quality level appropriate for ambient background music (§16) rather than archival fidelity.
- **Loading strategy:** critical-path assets for the currently active Scene are prioritized; assets for upcoming Scenes are prefetched during "dwell" moments (per doc #3 §7/§10's slower-paced screens) so a guest scrolling forward rarely encounters a visible loading gap — this loading strategy is coordinated by the Scene Engine (§13), not left to each component to manage independently.

---

## 18. State Management

Zustand is used for all cross-component client state, organized as multiple small, purpose-specific stores rather than one monolithic global store — directly supporting the feature-based architecture (§6).

- **Global state:** minimal, app-shell-level concerns — active locale (coordinating with next-intl, §22), reduced-motion preference, and overall app-ready/loading status.
- **Invitation state:** the currently resolved, validated invitation data (from the Invitation Engine, §11) and the guest's session-specific context (e.g., which personalized link/guest identity is active) — read by the Template/Scene Engine but never mutated by them, since invitation content is authoritative data flowing in one direction from the Invitation Engine.
- **Theme state:** the currently active Theme Engine token set (§10) — including which named theme (Light default, Deep/narrative mode) and which occasion accent override is active — read by both Tailwind-driven DOM styling and R3F material configuration.
- **Audio state:** mute/unmuted status, currently playing music-bed reference, and a simple cue-trigger mechanism the Scene Engine calls into (§13, §16) — deliberately isolated from Invitation/Theme state since audio state changes (e.g., a guest muting) must never trigger unrelated re-renders of invitation content or theme.
- **Scene/UI interaction state:** which Scene is currently active, current scroll-driven progress (coordinated with Lenis, §14), and transient UI state (an open dialog, an in-progress RSVP form) — kept separate from the more durable Invitation/Theme/Audio stores since this state is the most frequently changing and most narrowly scoped.
- **Governing rule:** a store's boundary is drawn around *rate and reason of change*, not around arbitrary feature grouping — state that changes together and is read together belongs in the same store; state with different change frequency or different consumers is split, keeping re-renders (and therefore performance, §25) predictable.

---

## 19. Data Model

Modeled to satisfy `Invita-Foundation-Document.md` §16's requirement that the schema support all eleven future occasions without redesign, and validated end-to-end via Zod (feeding directly into the Invitation Engine's validation step, §11, and the future API layer, §21).

**Core entities:**
- **Invitation** — the root entity tying together one occasion's Event, Person(s), Location, Gallery, Theme, and RSVP configuration; references which occasion Template (§12) applies.
- **Person** — a generalized participant entity (a host, a celebrant, a couple member) — used flexibly per occasion: two `Person` entries with a "couple" relationship for Housewarming/Wedding/Engagement, one for Birthday/Graduation, an organization-oriented variant of the same entity shape for Corporate Events.
- **Event** — the occasion's core facts: type (Housewarming, Wedding, etc.), date, time, and a reference to its emotional-key/tone configuration (per `Invita-Content-Copywriting-Localization-Bible.md` §3).
- **Location** — city, venue name, optional street address, and map-link data (per doc #3 §9/doc #4 §14's hierarchy: city first, then venue).
- **Gallery** — one or more Photo entities (the centerpiece `invita.jpg`-equivalent plus any supporting images), each carrying its composition-type metadata (portrait/landscape/close-up/family/couple, per `Invita-UX-Experience-Blueprint.md` §21) so the Photo Frame organism (§7) can apply the correct composition rule automatically.
- **RSVP** — per-guest response state (attending/declined/pending), submission timestamp, and any optional guest message, linked to a specific personalized guest link where applicable.
- **Countdown** — derived from `Event`'s date/time rather than stored independently, but modeled as its own typed value object so the Countdown organism (§7) has a single, clear, always-correctly-computed source (per `Invita-Content-Copywriting-Localization-Bible.md` §12's before/today/tomorrow/after states).
- **Music** — a reference to the active audio-bed asset and its Audio Timeline cue configuration (§16), scoped per Template/Theme rather than per individual Invitation, since the musical style is an occasion-level (Template Engine, §12) decision, not something each host customizes independently at launch.
- **Animation** — not guest-authored data, but a typed reference set (which Scene sequence, which Motion Engine timeline configuration) resolved from the occasion Template (§12) — modeled so that a future host-facing customization layer *could* eventually override specific animation choices without redesigning the schema.
- **Theme** — the resolved token set (base + occasion accent override, §9-10) applied to a given Invitation.

**Relationships:** `Invitation` has exactly one `Event`, one or more `Person` entries (cardinality determined by occasion type), one `Location`, one `Gallery` (with one or more Photos), zero-or-more `RSVP` entries (one per invited guest), one resolved `Theme`, and references (not owns) a `Music`/`Animation` configuration inherited from its Template.

**Future extensibility:** because `Person`, `Event`, and `Location` are modeled generally rather than occasion-specifically, adding Wedding's "couple" framing, Corporate's "organization" framing, or Family Gathering's "multiple hosting families" framing are all expressible as different *arrangements* of the same entities (e.g., multiple `Person` entries with different relationship-role metadata) rather than requiring new entity types — directly fulfilling the Scalability Strategy's schema-first extensibility principle (§4).

---

## 20. Routing Strategy

- **App Router as the sole routing mechanism** — every guest-facing invitation, and (later) every host-dashboard screen, is a route segment within Next.js's App Router, using server components by default (§2) and opting into client-side interactivity only where a Scene/Organism genuinely requires it.
- **Dynamic invitation URLs:** each invitation instance is addressed by a unique, opaque identifier (or a personalized-guest-link variant carrying additional guest-identity context) resolved via a dynamic route segment — the Invitation Engine (§11) performs the actual resolution; the route segment itself contains no business logic beyond extracting the identifier and invoking the engine.
- **Template URLs:** occasion type is not itself exposed as a meaningful part of the guest-facing URL structure (a guest never needs to know or see "wedding" vs. "housewarming" in the link they receive) — occasion type is resolved server-side from the invitation's own data (§19), keeping guest URLs uniform and clean regardless of occasion.
- **Future dashboard routes:** a separate, authenticated route tree (e.g., under a distinct top-level segment) is reserved for the Host creation/management experience and future B2B planner tooling (per `Invita-Foundation-Document.md` §4/§18) — architected from the start as structurally distinct from the guest-facing route tree, consistent with doc #1's rule that host-utility UI and guest-narrative UI must never share visual or navigational patterns.
- **Locale-aware routing:** next-intl's routing integration (§22) ensures every route — guest and host alike — is resolved within a locale context, with Sorani as the default locale requiring no locale prefix, and future locales addressable via an explicit locale segment, per `Invita-Content-Copywriting-Localization-Bible.md` §25's localization plan.

---

## 21. API Architecture

At launch, invitation content may be resolved from static/structured data co-located with each template (§11); this chapter defines the architecture so that swapping in a real backend later requires no downstream redesign.

- **Future backend compatibility:** the Invitation Engine's "Load" step (§11) is defined as an abstracted data-access boundary — today it may read from local structured content, tomorrow it reads from a real API/database — every consumer downstream of that boundary (Template Engine, Scene Engine, etc.) is unaffected by which implementation is behind it.
- **API naming:** future API routes/endpoints follow a resource-oriented naming convention matching the Data Model's entities (§19) — e.g., resource paths organized around `invitations`, `rsvps`, `guests` — avoiding verb-oriented or ad hoc endpoint naming, so the API surface remains predictable as it grows across future templates and B2B features.
- **Validation:** every future API boundary (incoming RSVP submissions, host-authored invitation content) is validated with the same Zod schemas defined in the Data Model (§19) — the schema is authored once and shared between client-side form validation (React Hook Form, below) and server-side API validation, eliminating drift between what the client assumes is valid and what the server accepts.
- **React Hook Form + Zod integration:** all guest- and host-facing forms (the RSVP form being the primary guest-facing example) use React Hook Form for form state/interaction handling, with Zod resolvers providing schema validation — ensuring the same validation rules govern the form's inline guidance (per `Invita-Content-Copywriting-Localization-Bible.md` §19's error-copy rules) and any eventual server-side acceptance check.
- **Authentication preparation:** no authentication exists in the guest-facing flagship experience (guests need no account to view an invitation or RSVP), but the route and API architecture reserves a clear seam — the future Host dashboard route tree (§20) and its corresponding API resource namespace — where an authentication layer can be introduced later (per `Invita-Foundation-Document.md` §20's Supabase-or-equivalent recommendation) without restructuring the guest-facing architecture at all.

---

## 22. Internationalization

- **next-intl architecture:** next-intl is configured with Kurdish Sorani as the default and only fully-populated locale at launch, with its message catalog structured to mirror `Invita-Content-Copywriting-Localization-Bible.md`'s content categories (greetings, buttons, RSVP copy, notifications, per-occasion tone variants) — every string surfaced anywhere in the product is sourced from this catalog by key; no hardcoded inline copy exists anywhere in component code, directly enforcing doc #4's Editorial Governance (§29) at the code level.
- **RTL:** the document-level text direction is set to RTL for the Sorani locale at the root layout level (not per-component), ensuring every layout primitive in the Atomic Design system (§7) inherits correct RTL flow by default — components are built RTL-first (per doc #2 §12.3/doc #3's explicit RTL-first instruction), with LTR treated as the adaptation case for future locales, never the reverse.
- **LTR (future):** when English or Turkish (§25 of doc #4) are added, next-intl's locale routing (§20) combined with a direction-aware layout root allows those locales to render LTR without touching any Sorani-specific component logic — direction is a resolved property of the active locale, read once at the layout root, not re-derived ad hoc per component.
- **Future languages:** Arabic (RTL, closest structural neighbor to Sorani), English, and Turkish (both LTR) are added as additional message catalogs and, for the LTR languages, a font/typography fallback strategy distinct from the Sorani-bound Doran typeface (since `Invita-Visual-Identity-System.md`'s Doran-only rule is specifically scoped to the Sorani identity) — per doc #4 §25's governing rule, each new locale's catalog is authored natively against the Content Bible's principles, never machine-translated from the Sorani source strings.
- **Numeral and date formatting:** implemented as locale-aware formatting utilities respecting `Invita-Content-Copywriting-Localization-Bible.md` §6/§13's Arabic-Indic numeral and date-format rules for Sorani, with equivalent locale-correct formatting rules defined per future locale as they are added — never a single hardcoded numeral format assumed globally.

---

## 23. Accessibility Engineering

- **Keyboard:** every interactive element reachable by touch (the wax seal's tap target, RSVP controls, the map button, per `Invita-UX-Experience-Blueprint.md` §16) is also fully operable via keyboard navigation for desktop/assistive-technology contexts, with a visible, on-brand focus treatment (not a browser-default outline that clashes with `Invita-Visual-Identity-System.md`'s visual language, but a deliberately designed focus state consistent with it).
- **Screen readers:** every Scene's essential content (per doc #3 §23's screen-reader path requirement) is expressed in semantically meaningful markup with appropriate ARIA roles/labels where the visual presentation alone wouldn't convey structure (e.g., the Names Reveal's sequential visual animation still exposes رەیان ❤ کاروان as immediately readable text content, not as an animation-only reveal with no DOM-level text equivalent).
- **Reduced motion:** the guest's OS-level reduced-motion preference is read once at app initialization (§13/§18) and propagated through the Scene Engine's configuration — every GSAP timeline and R3F animation respects a defined reduced-motion variant (simpler fades replacing transform-heavy choreography, per doc #3 §26), implemented as a first-class Motion Engine configuration path (§14), not a set of scattered per-component conditionals.
- **Semantic HTML strategy:** despite the platform's heavy use of Canvas (Three.js/R3F) and animation libraries, every essential fact (names, occasion, date, time, location, RSVP state) is additionally represented in ordinary, semantic HTML markup — the 3D/Canvas layer is treated as a decorative/atmospheric enhancement layer sitting alongside accessible content, never as the sole carrier of essential information.
- **Touch targets and contrast:** enforced as part of the Design Token Architecture (§9) and Atomic Design component rules (§7-8) — minimum touch-target sizing and validated color-contrast ratios (per `Invita-Visual-Identity-System.md` §26) are properties of the shared Atom/Molecule components, so every consuming Template inherits compliance automatically rather than needing to re-verify it per occasion.

---

## 24. Responsive Architecture

- **Mobile-first:** every Tailwind utility and component style is authored for the smallest supported viewport first (per `Invita-Visual-Identity-System.md` §14/§27), with larger-breakpoint styles layered on as explicit overrides — never the reverse (a desktop-first style narrowed down), consistent with doc #1's mobile-first mandate.
- **Tablet:** treated as an intermediate breakpoint within the same fluid, single-column narrative layout (§14 of doc #2) — tablets do not receive a fundamentally different multi-column layout, preserving the narrative-pacing principle across this device class.
- **Desktop:** the guest experience renders within a constrained, centered, mobile-proportioned frame on desktop viewports (per doc #2 §14), implemented via a maximum-width container at the layout root rather than a separate desktop-specific component tree.
- **Foldables:** the fluid, percentage-based grid approach (no fixed-breakpoint jumps) ensures foldable devices in both folded (narrow) and unfolded (wide) states are handled by the same responsive rules applied to any other viewport width, rather than requiring foldable-specific component logic.
- **Safe areas:** implemented via CSS environment-variable-based safe-area insets (respecting notches, Dynamic Island, home indicators) applied at the layout-root level and consumed consistently by every Scene's outer container — individual Scenes never need to independently reason about device-specific safe-area quirks.

---

## 25. Performance Budget

- **Bundle size:** the initial guest-facing route's JavaScript payload is budgeted explicitly and monitored per build (via Next.js's built-in bundle analysis) — heavy libraries (Three.js/R3F, GSAP) are loaded via code-splitting (below) so a guest never downloads 3D/motion engine code before it's actually needed for the currently active Scene.
- **FPS:** every 3D Scene (§15) and every GSAP/Framer Motion-driven Scene transition (§14) is budgeted against a sustained smooth frame-rate target on representative mid-range Android hardware — this is treated as a launch-blocking acceptance criterion per Scene, not an aggregate, average-case metric.
- **Lazy loading:** Scenes not yet reached in the guest's scroll journey (§13) have their heavier assets (3D models, high-resolution imagery) deferred until they are genuinely about to become active, using Next.js dynamic imports and React's lazy-loading primitives for the corresponding Scene components.
- **Streaming:** Next.js App Router's server-rendering/streaming capability is used to deliver the initial shell and above-the-fold Opening Experience content as early as possible, with subsequent Scene content streamed in as the guest progresses, rather than waiting for the entire experience's data to resolve before rendering anything.
- **Prefetching:** the Scene Engine's asset-loading coordination (§17) prefetches the *next* Scene's critical assets during a "dwell" moment (per `Invita-UX-Experience-Blueprint.md` §7/§10) rather than only when the guest's scroll reaches that Scene, minimizing visible loading gaps without over-fetching content the guest may never reach.
- **Code splitting:** the Three.js/R3F Engine (§15) and GSAP-heavy Motion Engine code (§14) are split at the Scene boundary — a Scene with no 3D content never causes 3D engine code to be downloaded, and vice versa, keeping any individual template's payload proportional to what that template's Scenes actually use.
- **Governing rule:** every new Scene or 3D object added to the shared cast (§15) must be evaluated against this performance budget *before* it is considered complete — a beautiful Scene that fails the mid-range-Android frame-rate target is not a finished Scene, per the Engineering Philosophy's opening commitment (§1).

---

## 26. SEO Strategy

- **Metadata:** every invitation route generates accurate, per-invitation metadata (title reflecting the occasion and host names, description reflecting the warm invitation-line copy per `Invita-Content-Copywriting-Localization-Bible.md` §9) via Next.js's metadata API, rendered server-side so link previews are correct without requiring JavaScript execution.
- **Open Graph:** each invitation generates a dedicated Open Graph image — treated as a designed asset in its own right (per `Invita-Foundation-Document.md` §5's note that the link-preview moment is part of the experience design), typically derived from the invitation's centerpiece photograph (§7 of doc #3) framed appropriately for social/messaging link-preview contexts.
- **Twitter Cards:** configured consistently alongside Open Graph metadata, using the same generated preview image and copy, so the guest's experience of receiving a shared link is consistent regardless of which messaging platform delivered it.
- **Structured Data:** event-oriented structured data (schema.org Event-equivalent markup) is included per invitation where appropriate, enabling correct calendar/event recognition by platforms and devices that parse it, without exposing any information beyond what the invitation itself already displays to a guest.
- **Invitation sharing:** because guest-facing invitations are personal and often intended for a specific, bounded guest list rather than public discovery, standard search-engine indexing is deliberately restricted (via `robots` metadata) for individual invitation routes — SEO effort here is entirely about **link-preview quality when shared**, not about public search visibility, which is an intentional distinction from typical SEO strategy.

---

## 27. PWA Architecture

- **Offline:** the guest-facing experience is architected so that once an invitation has been opened once, its core content (names, date, location, RSVP status) remains viewable offline via a service worker cache — the richer 3D/motion layer may gracefully degrade to a simplified, cached-friendly presentation when offline, consistent with the Performance/Progressive-Enhancement principle (§2), never showing a broken or blank screen.
- **Installable:** a web app manifest is provided so a guest can optionally install the invitation experience (or the platform itself, for a returning host) to their home screen, with an icon and theme color consistent with `Invita-Visual-Identity-System.md`'s brand identity (§8 of doc #2) — installability is offered as a convenience, never pushed aggressively (no install-prompt interruption during the guest's first, most emotionally important viewing).
- **Cache:** a defined caching strategy distinguishes between the shared engine/design-system code (aggressively cached, since it changes infrequently and is shared across all invitations) and per-invitation content/media (cached per-invitation, with appropriate invalidation when a host updates their invitation's content).
- **Manifest:** reflects the platform's identity (name, icons, theme color) at the app level; where a future white-label/B2B capability (per `Invita-Foundation-Document.md` §22) is introduced, the manifest architecture anticipates per-tenant customization without redesign.
- **Service Worker strategy:** implemented to prioritize the guest experience's core narrative content and essential facts for offline availability first, with the richer 3D/audio/motion layer treated as an enhancement cached opportunistically — directly mirroring the Progressive Enhancement principle from §2.

---

## 28. Security Strategy

- **Validation:** every piece of data entering the system — RSVP submissions, host-authored invitation content, future guest-list imports — is validated against its Zod schema (§19/§21) at every boundary it crosses (client-side form, and, once a real backend exists, server-side again) — validation is never trusted from the client alone.
- **Asset protection:** host-uploaded imagery (particularly a couple's or family's personal photographs, treated as the platform's emotional centerpiece per doc #3 §7) is served through access patterns appropriate to its sensitivity — personalized/guest-specific invitation links are treated as possession-based access (anyone with the link can view), which is an explicit, accepted product decision consistent with how physical invitations work, not an oversight; any future feature exposing guest lists or RSVP data to other guests is explicitly out of scope unless deliberately designed and reviewed.
- **Input sanitization:** any host-authored free-text content (a personal message, per §9's Invitation Messaging rules) is sanitized before storage and before rendering, preventing injection into the rendered experience regardless of what a host enters.
- **Future authentication:** the reserved Host-dashboard route/API seam (§20-21) is where authentication (per `Invita-Foundation-Document.md` §20's Supabase-or-equivalent recommendation, including row-level security for future multi-tenant B2B use) will be introduced — the guest-facing experience itself remains intentionally authentication-free, since requiring a guest to create an account before viewing a personal invitation would directly contradict the "effortless for the guest" principle in doc #1 §2.
- **Privacy:** guest RSVP data (names, attendance status, optional messages) is treated as personal data belonging to the host's event, not platform-wide marketing data — analytics (§31) are architected to measure engagement patterns (view counts, RSVP funnel completion) without exposing or repurposing individual guest identities beyond the host's own dashboard.

---

## 29. Testing Strategy

- **Unit tests:** applied to framework-agnostic logic — Data Model Zod schemas (§19), Countdown date-math utilities, Template Engine contract-resolution logic (§12) — anything with clear inputs/outputs independent of rendering.
- **Component tests:** applied per Atomic Design tier (§7) — Atoms and Molecules are tested for correct token consumption and prop-driven variation; Organisms are tested for correct composition and content-driven behavior (e.g., the Photo Frame organism correctly applying composition rules per photo type, per doc #3 §21).
- **Visual regression:** snapshot-based visual comparison is applied at the Organism and Scene tier specifically, since these are where `Invita-Visual-Identity-System.md`'s exact color/shadow/glass/radius rules become visible — visual regression testing is the primary safeguard against silent design-token drift over time.
- **Accessibility testing:** automated accessibility audits (contrast, semantic structure, ARIA correctness) run against every Scene and Organism, supplemented by manual testing with real assistive technology (screen readers, reduced-motion OS settings) per `Invita-Visual-Identity-System.md` §26's explicit requirement that automated linting alone is insufficient.
- **Performance testing:** FPS and bundle-size budgets (§25) are checked per Scene and per Template as part of the testing pipeline, using representative mid-range-device profiles and throttled network conditions rather than only developer-machine conditions, per `Invita-Visual-Identity-System.md` §15's field-representative testing rule.
- **End-to-end testing:** full guest-journey flows (opening an invitation link, progressing through all six Acts, submitting an RSVP) are tested end-to-end for the flagship Housewarming template and, as they're added, for each subsequent occasion template — serving as the concrete, automated version of the Scalability Strategy's "add a template without touching the engine" test (§4): if adding a new template requires new *engine-level* test changes rather than just a new template-specific test suite, that is itself a signal the Template Engine's contract (§12) leaked occasion-specific assumptions into shared code.

---

## 30. Deployment Strategy

- **Development:** local development against the full stack, with 3D/motion-heavy Scenes runnable in isolation (e.g., via a component-development/sandbox environment) so engineers can iterate on a single Scene's choreography without needing to traverse the full guest journey from the Opening Experience every time.
- **Preview:** every proposed change is deployed to a Vercel preview environment, enabling design/content/engineering review (per `Invita-Visual-Identity-System.md` §29 and doc #4 §29's governance processes) against a real, shareable URL before merging — preview deployments are the primary review artifact for anything touching a Scene's visual or motion behavior.
- **Production:** deployed on Vercel, leveraging its edge/CDN delivery (per `Invita-Foundation-Document.md` §20's rationale) for the guest-facing experience's global, latency-sensitive audience.
- **Environment variables:** configuration distinguishing environment-specific concerns (asset CDN paths, future API endpoints, analytics keys) is managed through Vercel's environment variable system, scoped per environment (development/preview/production) — no environment-specific value is ever hardcoded into shared engine code.
- **Release workflow:** changes to `engine/` and `design-system/` (the highest-blast-radius layers, per §5/§8) require the most rigorous review given their platform-wide impact; changes scoped entirely within a single `templates/<occasion>` directory carry a narrower, more contained review scope, reflecting the architecture's engine/template separation directly in how release risk is assessed.

---

## 31. Monitoring

- **Performance monitoring:** real-user monitoring (Core Web Vitals-equivalent metrics, plus custom FPS/Scene-load timing instrumentation specific to the Motion/Three.js Engines, §14-15) is collected in production to verify the Performance Budget (§25) holds under real guest conditions, not just in testing.
- **Error tracking:** client-side error tracking captures failures in Scene rendering, asset loading, and RSVP submission — every captured error is enriched with which Scene/Template was active, so failures can be attributed to a specific occasion or engine layer quickly.
- **Analytics:** engagement analytics (per `Invita-Foundation-Document.md` §22's privacy-respecting analytics principle) track view counts, Scene-completion/drop-off points (which Act a guest stopped at), and RSVP funnel completion per invitation — implemented without third-party ad-tracking scripts, consistent with the brand's quiet-confidence personality (doc #2 §9) and privacy strategy (§28).
- **Crash reporting:** particularly important for the Three.js/R3F Engine (§15), where lower-capability devices are most likely to encounter rendering failures — crash reports specifically capture device/capability context so the performance-fallback strategy (§15/§25) can be tuned based on real-world failure patterns rather than assumptions.

---

## 32. Coding Standards

- **Naming:** consistent, descriptive naming across TypeScript types, Zustand stores, and components, matching the vocabulary already established across documents #1–#4 (e.g., "Scene," "Act," "Template," "Countdown" are used identically in code as in the design/UX documents — no internal renaming that would desynchronize code from the documents this codebase implements).
- **File organization:** mirrors the Folder Architecture (§5) exactly — no code is placed based on convenience or habit outside the engine/template/design-system/domain separation established there.
- **Comments:** used only to explain *why*, never *what* (matching this project's general documentation philosophy) — e.g., a comment explaining why a specific GSAP timeline duration was chosen to match a specific token value is appropriate; a comment restating what a self-evidently named function does is not.
- **Imports:** strictly directional per the component-tier rules (§8) and the engine/template boundary (§2, §5) — import linting rules enforce that `templates/` never imports from another occasion's directory, and that `engine/` never imports from `templates/`.
- **Formatting:** enforced automatically via a shared formatter configuration, applied uniformly with no per-engineer style variation, keeping code review focused on substance rather than style debates.
- **Linting:** TypeScript's strict mode is enabled throughout; linting rules specifically enforce the architectural boundaries above (import direction, no hardcoded design-token values outside `design-system/`, no inline copy strings outside the `i18n`/`content` catalogs) so these rules are machine-checked, not just documented.

---

## 33. Engineering Anti-Patterns

- **Never build a new occasion template by copying an existing template's Scene/component code and editing it.** This is the single fastest way to violate the Scalability Strategy (§4) and the Template Engine's entire purpose (§12) — new occasions are always expressed as new configuration/content against the existing engine, never as a forked copy.
- **Never hardcode a color, spacing, shadow, radius, duration, or copy string directly in a component**, bypassing the Design Token Architecture (§9) or the i18n message catalog (§22) — even for "just one" template-specific need.
- **Never let `engine/` import from `templates/`.** This inversion is the most direct possible violation of the engine/template separation this entire architecture is built to protect.
- **Never mount a persistent, full-page Three.js Canvas that stays active regardless of which Scene is showing** — this directly violates the Performance Budget (§25) and the Scene-scoped Canvas architecture (§15).
- **Never use GSAP and Framer Motion interchangeably for the same concern within one Scene** — mixing both for Scene-level cinematic sequencing (GSAP's job, §14) creates two competing sources of timing truth and makes the Scene Engine's "has this Scene finished" check (§13) unreliable.
- **Never ship a Scene's motion without its reduced-motion fallback path** (§23, §13) — this is a launch-blocking omission, not later polish, exactly as `Invita-Visual-Identity-System.md` §29 already states at the design level.
- **Never trust client-side validation alone** for any data that will eventually cross a real API boundary (§21, §28) — the same Zod schema must govern both sides once a backend exists.
- **Never let a Scene's asset loading block the Opening Experience's deliberate pacing** (§4 of doc #3) by racing to show content the instant it's technically ready — loading and narrative pacing are coordinated, not left to whichever finishes first.
- **Never introduce a device-preference-driven "dark mode" toggle that conflates the platform's narrative Deep-mode theme (§10) with a generic accessibility dark-mode expectation** — these are different concerns (one narrative, one user-preference) and must not be implemented as the same mechanism.
- **Never optimize primarily for high-end iPhones during development** (echoing doc #1 §26) — every Scene's performance budget (§25) and every 3D fallback strategy (§15) must be validated against mid-range Android hardware as a first-class target, not an afterthought before launch.

---

## 34. Future Platform Roadmap

Directly extending `Invita-Foundation-Document.md` §23-24's roadmap and phases, from an engineering lens:

- **Near-term:** complete the Engine layer (Invitation, Template, Scene, Motion, Three.js, Media Engines) and the Housewarming template together — per doc #1's Phase 1 guidance, the engine is proven by building it *with* a real template, not designed in the abstract first.
- **Mid-term:** add the second and third occasion templates (likely Wedding and Birthday) specifically as a stress test of the Template Engine's contract (§12) and the Scalability Strategy's "add without touching shared code" test (§4) — any friction discovered here drives engine refactors before further templates are added.
- **Mid-term, parallel track:** introduce the Host creation/management route tree (§20) and its corresponding API/authentication layer (§21, §28) — building out the dashboard experience referenced but deliberately deferred throughout this document.
- **Longer-term:** introduce real backend persistence (replacing the static/structured content Invitation Engine data source, §11, with a real API-backed one, §21) and multi-tenant B2B capability (per `Invita-Foundation-Document.md` §22's planner/studio/white-label features), leveraging the row-level-security-capable backend approach already anticipated in doc #1 §20.
- **Platform maturity:** as the full occasion library (all eleven templates) is completed, the engineering focus shifts toward the Template Engine contract's long-term stability — at this stage, the contract defined in §12 should be mature enough that a marketplace or partner-embed capability (per `Invita-Foundation-Document.md` §22/§23) could be built atop it without further foundational engineering changes, since template addition has, by then, been proven repeatedly as a pure configuration exercise.
- **Guiding principle for the entire roadmap:** every future phase is evaluated against whether it required touching the Engine layer's shared code — a roadmap phase that repeatedly needs Engine changes signals the architecture has not yet reached the stability this document is designed to establish, and that instability should be resolved before continuing to add breadth (more templates, more features) on top of it.

---

## 35. Final Engineering Manifesto

Every line of code written for Invita exists to make one moment true: that رەیان و کاروان's guest, opening a link on an ordinary Tuesday on a mid-range phone, feels exactly what `Invita-UX-Experience-Blueprint.md` promised they would feel — and that the twelfth future host, sending a Corporate Event invitation years from now, inherits that exact same quality without a single engineer having to rebuild it from scratch.

This is what separates this architecture from an ordinary web project: **the engine is the product.** The Housewarming template is proof the engine works; every subsequent template is proof the engine scales. An engineer who finds themselves duplicating a Scene, forking a Template, or hardcoding a token value has, in that moment, stopped building Invita's actual product and started building a one-off page that happens to look like it — and that distinction is the standard by which every pull request to this codebase should be judged.

Performance, accessibility, and RTL-correctness are not compliance checkboxes here — they are the mechanism by which the emotional promise in documents #1 through #4 actually reaches a real guest on a real device. A beautiful Scene that stutters on a mid-range Android phone, or that is unreadable to a screen reader, has not merely failed a technical metric — it has broken the letter's promise to the person waiting to receive it.

Build the engine once, build it honestly, and let every future celebration — a wedding, a graduation, a festival not yet imagined — inherit it without asking anyone to build it twice.

---

*End of Technical Architecture & Engineering Blueprint. Together with `Invita-Foundation-Document.md`, `Invita-Visual-Identity-System.md`, `Invita-UX-Experience-Blueprint.md`, and `Invita-Content-Copywriting-Localization-Bible.md`, this document completes the full pre-development foundation for Invita. No engine, template, or feature should be implemented without direct traceability to a chapter specified here.*
