# INVITA
## Foundation & Architecture Document
### The Official Strategic, Experiential, and Technical Blueprint

**Version:** 1.0 — Pre-Development Foundation
**Prepared for:** Invita — Luxury Digital Invitation Platform
**Status:** Foundational reference. All development, design, and engineering decisions should trace back to this document.

---

## Table of Contents

1. Project Vision
2. Mission
3. Core Goals
4. Target Audience
5. User Journey
6. Experience Philosophy
7. Emotional Storytelling Philosophy
8. Brand Identity
9. Brand Personality
10. Luxury Design Principles
11. Interaction Philosophy
12. Animation Philosophy
13. Mobile-First Philosophy
14. Accessibility Philosophy
15. Performance Philosophy
16. Scalability Strategy
17. Future Expansion Strategy
18. Project Architecture Overview
19. Suggested Folder Architecture
20. Technology Recommendations
21. Why Each Technology Was Selected
22. Potential Future Features
23. Long-Term Roadmap
24. Project Development Phases
25. Best Practices
26. Things Developers Must Never Do
27. Final Recommendations Before Development Begins

---

## 1. Project Vision

Invita exists to replace the disposable, forgettable digital invitation with something that feels like a keepsake. Today, "digital invitation" means a flat image forwarded on WhatsApp, a generic Canva template, or a static Google Form link — functional, but emotionally empty. There is no player in the market treating the invitation itself as a designed experience worthy of the moment it announces.

Invita's vision is to become the definitive platform for **luxury digital moments** — a place where announcing a housewarming, a wedding, or a graduation feels as considered as the event itself. Every invitation created on Invita should feel personally directed, cinematically paced, and crafted with the same restraint and intention found in luxury product design (Apple), luxury goods (Cartier), and luxury mobility (Porsche, Tesla).

The long-term vision extends beyond a single template. Invita is the **infrastructure for premium life-event storytelling** — a growing library of experiences (housewarming, wedding, engagement, birthday, graduation, baby shower, grand opening, corporate event, family gathering, private party, festival, award ceremony) all built on one coherent, scalable design and technical system, so that adding a new occasion never means starting over.

---

## 2. Mission

To give every host — whether an individual celebrating a personal milestone or a professional planner managing hundreds of guests — the ability to send an invitation that makes the recipient stop scrolling, feel something, and remember it.

Invita's mission is executed through three commitments:

- **Emotional first, informational second.** The invitation must move the recipient before it informs them. Date, time, and address matter, but they are the second act, not the opening line.
- **Effortless for the host, extraordinary for the guest.** Creating an invitation should take minutes; receiving one should feel like a moment.
- **One system, infinite occasions.** Every future template is a new *story*, not a new *codebase*.

---

## 3. Core Goals

1. **Deliver a housewarming invitation experience so refined it can serve as the flagship proof of concept for the entire platform's design language.**
2. **Build the templating architecture first, the template second** — the housewarming invitation must be built as an instance of a reusable system, not a one-off page.
3. **Achieve sub-3-second perceived load on mid-range mobile devices** on typical mobile networks, without sacrificing visual richness.
4. **Make the experience feel native to a smartphone** — not a website viewed on a phone, but an experience designed for the hand holding it.
5. **Establish a visual and motion language so distinct that a screenshot of any Invita invitation is instantly recognizable as "an Invita."**
6. **Support non-technical hosts and professional event businesses on the same core platform**, differentiated by tooling and permissions rather than separate products.
7. **Design for shareability** — every invitation should be as beautiful when captured as a screen recording or forwarded as a link as it is in its original context.
8. **Never compromise accessibility or performance for aesthetic ambition** — luxury and inclusivity are not in conflict; a platform that excludes users is not premium, it is exclusionary.

---

## 4. Target Audience

Invita serves two audience tiers that must both feel considered by the same product:

### Primary: End Hosts (Consumers)
- **Young couples** — moving into a first home, getting engaged, or planning a wedding. Digitally fluent, aesthetically discerning, active on Instagram/Pinterest, willing to pay for something that reflects well on them.
- **Families** — hosting housewarmings, baby showers, birthdays, graduations, or family gatherings. May be less technical; need the emotional payoff without needing to understand *how* it was built.

### Secondary: Professional & Commercial Users (B2B)
- **Luxury event organizers** — need a tool that can be white-labeled or customized per client, with reliable guest management underneath the beautiful surface.
- **Wedding planners** — manage multiple concurrent events; need dashboards, guest list exports, RSVP tracking, and the ability to present Invita as part of their own premium service offering.
- **Photography studios** — often the first vendor booked for a couple; a natural upsell partner and potential reseller channel if Invita offers studio branding or affiliate tooling.
- **Invitation businesses** — small studios currently designing static invitations who could adopt Invita as their delivery platform, turning static designs into interactive ones.

### Cross-cutting persona traits
- Comfortable with smartphones as their primary or only computing device.
- Emotionally invested in the event being announced — this is not utility software, it is milestone software.
- Willing to pay a premium for something that signals taste, provided the value is visibly, immediately apparent.

**Design implication:** The consumer-facing invitation experience must never look or feel like it was designed for the B2B dashboard user, and vice versa. These are two different surfaces sharing one backend and one design system — never one UI trying to serve both.

---

## 5. User Journey

The journey has two distinct tracks — the **Host Journey** (creation) and the **Guest Journey** (the experience). The Guest Journey is the emotional core of the product and must be protected from any compromise in service of the Host Journey's convenience.

### Guest Journey (the primary experience — optimize relentlessly for this)
1. **Receipt** — Guest receives a link via message, social media, or QR code. The link preview itself (Open Graph image/title) is treated as part of the experience design, not an afterthought.
2. **Arrival / Cinematic Reveal** — The invitation opens with a deliberate, branded entry moment — not an instant content dump. This is the "curtain rising" moment: a beat of anticipation, then reveal.
3. **Story Scroll** — The guest moves through a paced narrative sequence: who is hosting, what is being celebrated, tone-setting imagery or motion, then logistical details (date, time, location) presented with the same visual care as the emotional content.
4. **Interaction Moments** — Micro-interactions invite the guest to participate: revealing a hidden detail, tapping to view the location, unwrapping a detail. These must feel optional and delightful, never required or gimmicky.
5. **Response / RSVP** — A frictionless, single-flow RSVP: attendance, guest count, optional message — designed to feel like replying to a personal invitation, not filling out a form.
6. **Departure / Save** — The guest can save the date, add to calendar, view the map, or revisit the invitation later. The experience should leave a "digital afterglow" — e.g., a closing frame worth screenshotting.
7. **Recall** — The link remains a living object the guest can reopen as the date approaches, not a one-time-use page that feels stale on a second visit.

### Host Journey (the creation experience — optimize for confidence and speed)
1. **Occasion Selection** — Host chooses an occasion type (initially: Housewarming).
2. **Guided Customization** — Host inputs event details, uploads or selects imagery, and customizes text through a guided, opinionated flow — not a blank-canvas editor. Invita makes taste decisions *for* the host by default, with tasteful override options.
3. **Live Preview** — Host previews the exact guest experience, on a simulated mobile frame, before sending.
4. **Distribution** — Host generates a shareable link and/or QR code; optionally imports a guest list for tracked, personalized links.
5. **Monitoring** — Host views RSVP responses and guest engagement in a simplified dashboard (professional users get an expanded version of the same dashboard).
6. **(B2B only) Client & Template Management** — Planners/studios manage multiple concurrent events/clients, potentially with white-label branding.

---

## 6. Experience Philosophy

Invita is not a website that happens to be pretty. It is an **experience delivered through a URL**. Every screen is treated as a moment in a sequence, not an isolated page. The guiding principle: **the medium should disappear.** The guest should not think "I am looking at a website" — they should think "I am being invited to something beautiful."

Core tenets:

- **Sequence over navigation.** Guests are guided through a narrative, not given a menu of options. Traditional website navigation patterns (nav bars, hamburger menus, tabs) are avoided in the guest-facing experience wherever possible.
- **One primary focus per moment.** Each screen/section has a single clear focal point. Competing elements are never presented simultaneously.
- **Restraint communicates confidence.** A brand that needs to shout is not luxury. Whitespace, pacing, and silence (visual and motion) are treated as design material, not empty space to be filled.
- **Consistency of feeling across occasions.** A wedding invitation and a corporate event invitation should feel unmistakably "Invita" even though their content, imagery, and tone differ — the feeling is the brand; the template is the costume.

---

## 7. Emotional Storytelling Philosophy

Every invitation is treated as a **three-act structure**, borrowed from cinematic and brand storytelling conventions rather than form-based UX conventions:

- **Act I — Anticipation.** The opening moment. Minimal information, maximum atmosphere. This is where emotion is established before a single fact is delivered. Purpose: make the guest *feel* before they *know*.
- **Act II — Revelation.** The heart of the invitation. Who, what, why this matters, told through a paced sequence of visuals, motion, and short, deliberate copy. Information is revealed progressively, never dumped.
- **Act III — Invitation.** The logistical payload (date, time, location, RSVP) — but still wrapped in the same visual language as Acts I and II, so the "practical" part never feels like a jarring drop into generic UI.

Supporting principles:

- **Show, then tell.** Lead with imagery, motion, and atmosphere; follow with text. Never lead with a form.
- **Brevity as elegance.** Copy is minimal and intentional. If a sentence can be cut without losing meaning, it must be cut.
- **Personal, not generic.** Templates must feel tailored to the specific hosts and occasion, even though they are systematized underneath — the host's names, tone, and imagery should feel like the star of the experience, not the template chrome around them.
- **Every occasion has its own emotional key.** A housewarming's emotional core is *warmth, new beginnings, belonging*. A wedding's is *union, celebration, romance*. A graduation's is *pride, achievement, forward momentum*. The storytelling philosophy applies universally; the emotional key changes per template and must be explicitly defined before that template is designed.

---

## 8. Brand Identity

**Name:** Invita — derived from "invite," with a softened, warm, almost Mediterranean/Italian phonetic quality. The name should be styled with generous letter-spacing in wordmark contexts to reinforce elegance and slow pacing.

**Visual language foundation:** The available brand typefaces — *Doran Bold* and *Doran Medium* — indicate a serif or high-contrast display approach suited to formal, editorial, luxury contexts (evocative of fashion and fine-invitation typography). This pairing should anchor all headline and moment-defining typography, with a clean, neutral sans-serif companion (to be selected during visual identity design) used for UI labels, body copy, and functional text, preserving legibility on small mobile screens where a display serif alone would strain readability.

**Reference mood:** The brand's emotional reference point — evidenced by the project's own mood imagery of a candid, sunlit, garden wedding portrait — is warm, natural light, soft greenery, romantic candour rather than stark studio luxury. This suggests Invita's luxury register leans toward **warm, organic, human luxury** (think: fine linen, golden hour, botanical) rather than **cold, futuristic luxury** (think: chrome, neon, hard geometry). This distinction must guide every future template's color and lighting direction, even occasions that are not romantic in nature (e.g., corporate events should still feel warm and human, not corporate-cold).

**Color philosophy (directional, not final palette):** Deep, muted, sophisticated tones (ivory, champagne, deep charcoal, muted gold, soft sage/botanical greens) rather than saturated or high-chroma colors. Each future template may introduce an accent within this restrained system (e.g., a graduation template may introduce a deeper navy or bronze) but must never abandon the core neutral luxury base.

**Logo & mark:** To be developed as a minimal wordmark first; an iconographic mark (if any) should be abstract and geometric enough to work as a small app-icon-scale favicon and a large full-bleed opening-moment mark.

**Imagery direction:** Photography and imagery across the platform (marketing site, template previews, host-uploaded content guidance) should favor natural light, authentic candid moments, and negative space for text overlay — never stock-photo stiffness or overly staged studio compositions.

---

## 9. Brand Personality

If Invita were a person, they would be:

- **Warm but composed** — emotionally present without being effusive.
- **Quietly confident** — never needs to prove its luxury credentials with excess ornamentation.
- **Attentive to detail** — the friend who remembers exactly how you like your coffee.
- **Timelessly modern** — references classic elegance (fine stationery, calligraphy, formal invitations) but expresses it through contemporary, digital-native motion and interaction.
- **Generous, not showy** — the experience is crafted *for the guest's benefit*, not to impress with technical spectacle for its own sake.

**Brand voice in copy:** Short, warm, confident sentences. Never exclamation-heavy, never corporate-formal, never cutesy or gimmicky. Invita speaks the way a beautifully engraved invitation "speaks" — through tone and typography as much as words.

---

## 10. Luxury Design Principles

1. **Purposeful minimalism.** Every element on screen must justify its presence. If removing it doesn't harm the experience, remove it.
2. **Negative space is a feature.** Breathing room around content signals confidence and quality; cramped layouts signal cheapness regardless of visual polish.
3. **Material honesty through digital texture.** Soft gradients, gentle blur (glassmorphism), and light diffusion should evoke physical materials — frosted glass, fine paper, soft fabric — rather than flat, generic "app" surfaces.
4. **Typography as the primary luxury signal.** Before any color or imagery, typography choice and spacing communicate quality fastest. Display type is used sparingly and given room to command attention.
5. **Consistency over novelty.** Luxury brands repeat their signatures (a color, a font, a motion curve) until it becomes recognizable. Invita must resist the urge to reinvent its visual signature for every new template.
6. **Slowness is a luxury cue.** Fast, jarring, or bouncy motion reads as "consumer app." Slightly slower, eased, deliberate motion reads as premium — within the bounds of not frustrating the user with actual latency.
7. **Every occasion gets its own restrained accent, not its own design system.** New templates flex color, imagery, and micro-content — never the underlying grid, spacing, or motion language.
8. **Details are where luxury is won or lost.** Corner radii, shadow softness, transition easing, and font-weight pairing are not decoration — they are the product.

---

## 11. Interaction Philosophy

- **Touch-first, gesture-native.** Interactions should map to natural mobile gestures — swipe, tap-and-hold, tilt-reveal — rather than desktop-derived patterns like hover states or click-only buttons.
- **Every interaction has a reason to exist.** Interactive flourishes are added only where they deepen emotional engagement or clarify information — never purely to demonstrate technical capability.
- **Feedback is immediate but gentle.** Taps and gestures receive instant visual acknowledgment (subtle scale, glow, or light response) so the experience feels alive and responsive, without harsh or mechanical feedback (no jarring haptic-style snaps unless it is a deliberate, rare emphasis moment).
- **Progressive disclosure.** Complexity (extra details, additional photos, extended messages) is revealed on demand through interaction, keeping the default view clean.
- **Forgiving, not fragile.** Guests should never be able to "break" the sequence — back gestures, accidental taps, and interrupted sessions must resolve gracefully.
- **No interaction should ever block access to core information.** A guest must always be able to reach date, time, and location details even if they choose to skip every interactive flourish.

---

## 12. Animation Philosophy

- **Motion tells the story; it does not decorate it.** Every animation should either reveal information, guide attention, or reinforce emotional pacing. Motion without narrative purpose is noise.
- **Cinematic pacing over snappy UI pacing.** Where typical consumer apps favor near-instant (100–150ms) transitions, Invita favors slightly slower, intentional pacing that mimics film transitions and editorial reveals — while remaining fast enough to never feel laggy or unresponsive.
- **Easing over linear motion, always.** All motion uses natural deceleration/acceleration curves; nothing moves at constant speed.
- **Choreography, not simultaneity.** Elements enter in sequence with slight, deliberate offsets rather than all animating at once — reinforcing the sense of a directed sequence rather than a page "loading."
- **Scroll as a narrative timeline.** Where scroll-driven storytelling is used, the scroll position should feel like scrubbing through a story, not merely revealing a static page.
- **Motion must degrade gracefully.** Users with reduced-motion preferences or lower-powered devices receive a simplified but still elegant experience — fades and gentle opacity/position changes rather than full animation choreography — never a broken or empty fallback.
- **Loading states are part of the story, not a technical necessity to hide.** Where content must load, the waiting moment itself should be designed as an anticipation beat (Act I), not a generic spinner.

---

## 13. Mobile-First Philosophy

Invita is designed **for the hand, not the desktop**. Desktop is a secondary, "preview/management" surface (primarily relevant to the Host Journey and B2B dashboards) — the guest-facing invitation experience is conceived, prototyped, and validated on mobile first, always.

Requirements:

- **Full device range coverage**: iPhone SE (smallest modern viewport) through iPhone Pro Max, the full range of Android device sizes, and foldables (both folded and unfolded states) must all render intentionally, not just "not break."
- **Safe-area awareness**: All layouts respect safe-area insets so content and interactive elements are never obscured by notches, the Dynamic Island, home indicators, or rounded corners.
- **Thumb-zone design**: Primary interactive elements (RSVP action, "continue" gestures) are positioned within comfortable one-handed thumb reach, biased toward the lower half of the viewport.
- **Gesture-first, not click-first**: Swipe and tap gestures are first-class; any interaction that would rely on hover (a desktop-only input) must have a fully-equivalent touch alternative by default.
- **Viewport unit discipline**: Layouts must account for mobile browser chrome (address bars that appear/disappear) rather than assuming a fixed static viewport height.
- **Adaptive, not just responsive**: Beyond fluid resizing, layouts should adapt their pacing and density — a small-screen device may compress certain narrative beats rather than simply shrinking a desktop-oriented layout.
- **Desktop is a respectful downscale-up, not the primary target**: When viewed on desktop, the experience should still feel intentional (e.g., centered mobile-proportioned frame, or a tastefully adapted wide layout) — never a stretched, awkward mobile page.

---

## 14. Accessibility Philosophy

Luxury and accessibility are not in tension — a product that excludes users on the basis of ability is not premium, it has simply failed a segment of its audience. Invita treats accessibility as a design constraint from day one, not a remediation pass at the end.

- **Respect reduced-motion preferences** as a first-class experience path, not a stripped-down fallback — see Animation Philosophy.
- **Color contrast**: All text, especially over imagery or gradients, must meet WCAG AA contrast minimums; luxury muted palettes must be validated against real contrast ratios, not assumed by eye.
- **Semantic structure**: Even in a highly visual, animation-forward product, underlying markup must remain meaningful and navigable for screen readers — the narrative sequence should be describable and traversable non-visually.
- **Touch target sizing**: All interactive elements meet minimum touch-target size guidelines (approx. 44×44pt) regardless of how minimal they appear visually.
- **Captions/alt content for meaningful imagery**: Where imagery carries narrative information (not purely decorative), accessible alternative text must be authored per invitation.
- **No essential information locked behind animation-only or hover-only reveals.** Anything a guest *needs* (date, time, location, RSVP) must be reachable through an accessible, non-gestural path.
- **Testing discipline**: Accessibility is validated with real assistive technology (screen readers, reduced-motion OS settings), not just automated linting.

---

## 15. Performance Philosophy

For Invita, performance *is* a luxury attribute — nothing feels less premium than a spinner, a layout jump, or a stutter during an emotional moment.

- **Perceived speed is prioritized over raw technical speed.** A well-designed anticipation/loading beat that takes 1.5 seconds can feel better than an abrupt 0.8-second load with a flash of unstyled content — but true underlying speed must still be aggressively optimized; design covers the unavoidable minimum, not laziness.
- **Asset budgets per template.** Every template (starting with Housewarming) defines a maximum payload budget for imagery, video, and fonts, enforced before launch, to guarantee consistent performance across the growing template library.
- **Progressive and adaptive media loading.** Hero imagery and any video/motion assets load progressively (low-quality placeholder → full quality) and adapt to network conditions/device capability.
- **Font loading discipline.** Custom display typefaces (e.g., the Doran family) are subset, preloaded, and paired with matched fallback metrics to prevent layout shift and flash-of-invisible-text on first paint — critical on a typography-led brand.
- **Animation performance budget.** All motion is built to run on compositor-friendly properties (transform/opacity-driven) to sustain smooth frame rates on mid-range Android devices, not just flagship iPhones.
- **Zero layout shift tolerance.** Given the cinematic, sequential nature of the experience, unexpected content jumps are especially damaging to the intended pacing and must be treated as launch-blocking defects.
- **Measure real-world mobile performance, not just desktop dev-machine performance**, using field-representative conditions (throttled network, mid-tier device profiles).

---

## 16. Scalability Strategy

Invita's core architectural challenge is *not* building one beautiful housewarming invitation — it is building the housewarming invitation as proof that the underlying system can support eleven more occasions (and beyond) **without re-architecting**.

Strategy:

- **Template-as-configuration, not template-as-rewrite.** Each occasion (wedding, birthday, etc.) should be expressible as a structured configuration — content schema, emotional key, imagery slots, section sequence, accent theme — layered on top of one shared experience engine, rather than a bespoke standalone codebase per occasion.
- **Shared experience primitives.** The narrative "Act I / Act II / Act III" structure, the interaction/animation system, the RSVP flow, and the host dashboard are all built once, as shared, occasion-agnostic building blocks, then composed differently per template.
- **Design tokens over hardcoded styles.** Color, type scale, spacing, and motion timing are defined as a token system so a new template's visual identity is a matter of token substitution, not new styling logic.
- **Data model designed for many occasion types from the start.** Even though only Housewarming ships first, the underlying data schema (events, hosts, guests, RSVPs, templates, media) must be modeled generically enough that adding "Wedding" as a second occasion type requires new configuration/content, not new tables or new core logic.
- **Multi-tenancy readiness for B2B users.** The data and permission model anticipates planners/studios managing many events on behalf of many clients from the earliest schema design, even if that tooling ships later.

---

## 17. Future Expansion Strategy

Each future template (Wedding, Engagement, Birthday, Graduation, Baby Shower, Grand Opening, Corporate Events, Family Gathering, Private Party, Festival, Award Ceremony) is treated as a **plugin on the shared experience engine**, defined by:

1. **Emotional key** — the one-sentence emotional core the template must express (defined per Emotional Storytelling Philosophy).
2. **Content schema** — which fields/media a host must/can provide for this occasion.
3. **Section sequence** — how Act I/II/III are composed for this occasion (a corporate event's Act I may be shorter and more understated than a wedding's).
4. **Accent theme** — the restrained color/imagery variation layered on the base design tokens.
5. **Occasion-specific interactions** (if any) — e.g., a wedding template might include a couple's-story reveal; a grand-opening template might include a countdown-to-doors-open moment. New interaction patterns are added to the shared interaction library so future templates can reuse them, rather than each template inventing bespoke interactions.

**Governance rule:** No new template may introduce a new layout primitive, motion curve, or interaction pattern unless it is first evaluated for promotion into the shared system. This prevents the codebase from fragmenting into eleven unrelated experiences that happen to share a login page.

**Commercial expansion path:** The same plugin model supports future B2B features — white-labeling, studio branding, planner multi-client dashboards — as extensions of the host/permission model rather than a separate product.

---

## 18. Project Architecture Overview

At a high level, Invita is composed of five cooperating layers:

1. **Guest Experience Layer** — The public, mobile-first, cinematic invitation experience. Statically/edge-rendered wherever possible for speed, since this layer is read by the largest, least-controlled audience (guests, often on average mobile networks) and must be fast and resilient by default.

2. **Template Engine Layer** — The shared, occasion-agnostic system that interprets a given event's configuration (occasion type, content, theme tokens) and composes it into the Act I/II/III guest experience. This is the layer that makes "add a new occasion" a configuration exercise rather than a new build.

3. **Host Creation & Management Layer** — The authenticated experience where hosts (consumer or B2B) configure events, preview the guest experience, manage guest lists, and monitor RSVPs. Distinct visual and interaction language from the Guest Experience Layer (utility-oriented, still premium, but not narrative-paced).

4. **Data & Domain Services Layer** — Core domain entities (Hosts/Accounts, Events, Templates, Guests, RSVPs, Media Assets) and business logic (permissions, multi-tenancy for B2B, notification triggers). Exposed to both the Host layer and, in read form, to the Guest Experience layer at render/request time.

5. **Media & Asset Pipeline** — Ingests host-uploaded photos/video, applies optimization/transformation (resizing, format conversion, adaptive delivery), and serves them through a CDN with aggressive caching, since imagery is central to the emotional experience and to performance.

**Cross-cutting concerns** that touch every layer: authentication/authorization, analytics/engagement tracking (RSVP funnel, view counts), accessibility compliance, and the design token system that keeps visual language consistent from the Guest layer through the Host dashboard.

**Data flow (conceptual):** Host configures an Event through the Host layer → Event + content is persisted in the Data layer, referencing Template Engine configuration for the chosen occasion → Guest opens a link → Guest Experience layer requests the composed Event (via Template Engine + Data layer) → renders the cinematic sequence, pulling optimized media from the Asset Pipeline → Guest RSVPs → response is written back through the Data layer → reflected in the Host's monitoring dashboard.

---

## 19. Suggested Folder Architecture

*(Described conceptually as an organizing philosophy — not to be created or scaffolded yet.)*

A template-driven structure that mirrors the architecture above, organized so that "occasion" is a first-class, isolated concept rather than something scattered across the codebase:

- **`app` / guest-facing routes** — thin routing layer that resolves an event/link to its occasion template and hands off to the Template Engine for rendering. Contains no occasion-specific logic itself.
- **`engine`** — the shared experience engine: the Act I/II/III composition logic, shared section components (hero/reveal, story, details, RSVP), shared interaction and animation primitives, and the design token system. This is the most valuable, most protected part of the codebase.
- **`templates`** — one self-contained directory per occasion (e.g., `housewarming`, and later `wedding`, `birthday`, etc.), each containing only that occasion's configuration: content schema, accent theme tokens, section-sequence definition, and any occasion-specific interaction modules. Templates depend on the engine; the engine must never depend on a specific template.
- **`host` / dashboard** — the authenticated creation and management experience, consuming the same design tokens as the guest layer but with its own utility-oriented layout system.
- **`domain` / services** — data models and business logic for Events, Hosts, Guests, RSVPs, Templates, and Media, independent of any specific UI layer.
- **`media-pipeline`** — ingestion, transformation, and delivery configuration for host-uploaded assets.
- **`design-tokens`** — the single source of truth for color, type, spacing, radius, shadow, and motion-timing values, consumed by both the engine and the host dashboard.
- **`shared` / cross-cutting utilities** — accessibility helpers, analytics instrumentation, and any logic genuinely used across every layer above.

**Guiding rule for this structure:** it should always be possible to answer "if we add Occasion #12 tomorrow, which single new folder do we add, and which existing folders do we touch — ideally none?" If the honest answer requires touching the engine, that is a signal the engine is under-generalized.

---

## 20. Technology Recommendations

The following stack is recommended as a strong, pragmatic default for a mobile-first, visually rich, template-scalable platform. These are proposals to validate and refine with the development team before implementation begins, not irreversible commitments.

**Frontend framework:** Next.js (React, TypeScript) using its hybrid rendering model (static/edge rendering for guest-facing invitation pages, client-rendered interactivity layered on top).

**Styling system:** Tailwind CSS, paired with a custom design-token layer (see Section 19) rather than ad hoc utility usage — tokens define the vocabulary, Tailwind provides the implementation speed.

**Animation/motion:** Framer Motion for component-level choreography and gesture-driven interactions; a scroll-timeline/scrubbing library (e.g., GSAP's ScrollTrigger or an equivalent) for longer narrative scroll sequences where finer control over scroll-linked pacing is required.

**Data & backend:** A managed Postgres provider with an integrated auth and storage story (e.g., Supabase, or an equivalent managed Postgres + auth combination) for Events, Hosts, Guests, RSVPs, and permissions — chosen for relational integrity (guest lists and RSVPs are inherently relational) plus built-in row-level security suited to future multi-tenant B2B needs.

**Media pipeline:** A dedicated image/video optimization and delivery service (e.g., Cloudinary or an equivalent transformation-and-CDN service) rather than self-managed transformation, given how central adaptive, high-quality imagery is to the experience.

**Hosting/edge delivery:** A platform with strong edge-rendering and global CDN characteristics (e.g., Vercel or Cloudflare) to minimize latency for geographically distributed guests opening links from mobile networks.

**Analytics/engagement tracking:** A lightweight, privacy-respecting analytics layer for RSVP funnel and view tracking, decoupled from third-party ad-tracking scripts that would conflict with a premium, trustworthy brand feel.

**Content/configuration modeling:** A structured, version-controllable schema (rather than a general-purpose CMS) for template configuration, since templates are a core architectural concept (Section 17) and benefit from being modeled as first-class, type-checked data rather than freeform CMS content.

---

## 21. Why Each Technology Was Selected

- **Next.js/React/TypeScript** — Gives Next.js's rendering flexibility (fast, edge-rendered guest pages; rich client interactivity where needed) plus React's enormous ecosystem for animation and UI libraries, with TypeScript providing the type safety essential to a system built around structured, per-template configuration (Section 17's schema-driven templates rely on strong typing to stay maintainable as the template count grows).
- **Tailwind CSS + design tokens** — Tailwind alone risks visual inconsistency across a growing template library if used ad hoc; layering it on a token system enforces the "shared engine, varied accent" discipline from Section 16 while keeping implementation velocity high.
- **Framer Motion + scroll-timeline library** — Framer Motion covers the majority of interaction/reveal choreography with a declarative, React-native API well-suited to the Interaction and Animation Philosophies; a dedicated scroll-timeline tool is added specifically for the longer narrative "story scroll" sequences (Section 5), which benefit from finer scroll-scrubbing control than general animation libraries provide.
- **Managed Postgres (relational) over NoSQL** — Guests, RSVPs, Events, and Hosts are inherently relational (an RSVP belongs to a Guest belongs to an Event belongs to a Host); relational integrity constraints prevent data-consistency bugs that would otherwise surface as broken guest experiences. Built-in row-level security also directly supports the future multi-tenant B2B requirement (Section 16) without a separate authorization system.
- **Dedicated media/image pipeline** — Given that imagery is the primary emotional carrier of the experience (Section 7, Section 8) and that performance is treated as a luxury attribute (Section 15), self-managing image transformation/optimization would be reinventing a well-solved, performance-critical problem; a dedicated service lets the team focus engineering effort on the experience layer instead.
- **Edge/CDN-first hosting** — Guests may open an invitation link from anywhere, often on mobile data; edge rendering and CDN delivery directly serve the "perceived speed as luxury" principle (Section 15) and the global, unpredictable nature of the guest audience (Section 4).
- **Privacy-respecting, purpose-built analytics** — A premium brand's trust is undermined by intrusive tracking; a minimal, purpose-fit analytics approach supports the Host Journey's need for RSVP/engagement visibility (Section 5) without contradicting the Brand Personality's "quiet confidence" (Section 9).
- **Schema-driven template configuration over general CMS** — The Scalability and Future Expansion strategies (Sections 16–17) depend on templates being structured, type-checked, and engine-composable; a general-purpose CMS optimizes for editorial flexibility at the cost of the structural discipline this architecture requires.

---

## 22. Potential Future Features

Organized by which layer of the architecture they primarily extend:

**Guest experience enhancements**
- Ambient/optional background music per invitation.
- Live countdown-to-event moment embedded in the narrative.
- Digital guestbook / well-wishes wall visible after RSVP.
- Multi-language invitations (host selects guest-facing language, or per-guest localization).
- AR or spatial preview for select occasions (e.g., "view the venue" for a grand opening or wedding).

**Host tooling**
- Guest list import (CSV/contacts) with personalized, trackable per-guest links.
- Advanced RSVP analytics (open rate, time-to-RSVP, device breakdown).
- Template remix/save-as, allowing a host to reuse a prior event's customization as a starting point.

**Business / B2B tooling**
- Planner dashboard supporting multiple concurrent client events.
- White-label branding for studios and planners (their brand alongside or instead of Invita's on delivered invitations).
- Affiliate/referral tooling for photography studios and invitation businesses to resell or bundle Invita.
- Team roles/permissions for agencies (admin, editor, viewer).

**Platform-level**
- A public template gallery/marketplace as the template library grows beyond the initial twelve occasions.
- API/embed access for partners (e.g., wedding-planning platforms embedding Invita invitations).

*(This list is illustrative and intentionally not exhaustive or prioritized — prioritization belongs in the roadmap, Section 23, once the Housewarming MVP validates the core experience.)*

---

## 23. Long-Term Roadmap

**Horizon 1 (0–3 months) — Prove the Experience**
Establish the shared experience engine and design token system; ship the Housewarming template as the flagship, fully realized proof of concept for consumer hosts. Validate the core Guest Journey end-to-end, including performance and accessibility baselines.

**Horizon 2 (3–6 months) — Generalize the Engine**
Ship a second and third occasion template (informed by demand signals — likely Wedding and Birthday, given target audience priorities) explicitly as a stress test of the templating architecture. Any friction in adding these templates should drive refactors of the shared engine, not one-off template hacks.

**Horizon 3 (6–9 months) — Serve the Business User**
Introduce the B2B layer: planner/studio dashboards, multi-client management, and initial white-label capability. Expand the template library toward the full initial set (Engagement, Graduation, Baby Shower).

**Horizon 4 (9–14 months) — Depth & Retention**
Add engagement-deepening features from Section 22's guest-experience list (music, guestbook, countdown), advanced host analytics, and guest-list import/personalized links. Expand remaining templates (Grand Opening, Corporate Events, Family Gathering, Private Party, Festival, Award Ceremony) using the now-mature engine.

**Horizon 5 (14–18 months and beyond) — Platform Maturity**
Explore marketplace/API/partner-embed opportunities, affiliate tooling for photography studios and invitation businesses, and continued refinement of the design system based on real usage and engagement data across the full template library.

---

## 24. Project Development Phases

**Phase 0 — Foundation (Pre-Development)**
This document, the visual identity system (color, full type pairing, logo/wordmark), and the design token specification. No code is written until this phase is signed off.

**Phase 1 — Engine & Flagship Template (Housewarming MVP)**
Build the shared experience engine (Act I/II/III composition, interaction/animation primitives) and the Housewarming template together, deliberately, so the engine is shaped by a real template rather than designed in the abstract. Includes the core Guest Journey, a minimal Host creation flow, and basic RSVP functionality.

**Phase 2 — Host Tooling Maturity**
Build out the full Host creation/management experience: live preview, guest list handling, RSVP dashboard, and the account/auth system.

**Phase 3 — Template Engine Generalization**
Add the second and third templates specifically to validate and refactor the engine's generality (Section 23, Horizon 2). Formalize the template configuration schema based on real learnings from having more than one template in production.

**Phase 4 — Business & Planner Tools**
Introduce multi-tenancy, planner dashboards, and white-label groundwork.

**Phase 5 — Scale**
Expand remaining templates, deepen engagement features, and evaluate platform/marketplace opportunities.

**Governance note:** No phase should begin its primary work before the prior phase's core deliverable is validated against real users/devices — particularly Phase 1, since the entire scalability premise of this architecture depends on the engine being proven against at least one fully realized template before generalization begins.

---

## 25. Best Practices

- **Design and build mobile-first, literally** — prototype and review on real phones (including a low-end Android device and an iPhone SE) before ever reviewing on a desktop monitor.
- **Treat the design token system as the single source of truth** — no engineer or designer introduces a one-off color, spacing, or timing value outside the token system.
- **Prototype motion before building it in code** — validate pacing and choreography decisions (even roughly) before committing engineering time, since motion feel is highly subjective and expensive to redo after the fact.
- **Build the second template earlier than feels necessary.** The temptation will be to over-invest in Housewarming; deliberately building a second occasion early (even as an internal exercise) is the fastest way to expose false assumptions in the "shared engine" design.
- **Performance-budget every template before it ships**, not after users complain.
- **Test with real assistive technology**, not just automated accessibility linting.
- **Keep the Guest Experience layer's dependency surface minimal.** Every additional library added to the guest-facing bundle is a tax on every future guest's load time, forever.
- **Review new templates against the Brand Personality and Luxury Design Principles explicitly**, as a checklist, before they ship — not just against functional QA.
- **Version and document the design token system** the same way an API is versioned — templates depend on it, and breaking changes ripple across the entire template library.

---

## 26. Things Developers Must Never Do

- **Never build a template as a standalone page/codebase that bypasses the shared engine**, even under deadline pressure — this is the single fastest way to destroy the scalability premise of this entire architecture.
- **Never add a hover-dependent interaction as the only way to reveal essential information** — this breaks both the Mobile-First and Accessibility philosophies simultaneously.
- **Never ship motion that cannot degrade gracefully for reduced-motion users** — a reduced-motion fallback is not optional polish, it is a launch requirement.
- **Never hardcode colors, spacing, or timing values directly in a template**, bypassing the design token system, even for "just one quick template."
- **Never let the Host dashboard's utilitarian UI patterns leak into the Guest Experience layer**, or vice versa — they serve different psychological modes (task-completion vs. emotional narrative) and must remain visually distinct.
- **Never treat loading states as an afterthought** — an unstyled spinner or blank flash during the Guest Journey directly contradicts the Performance and Emotional Storytelling philosophies.
- **Never gate essential logistical information (date, time, location, RSVP) behind an animation, gesture, or interaction with no accessible alternative path.**
- **Never introduce a new interaction pattern or motion curve inside a single template** without evaluating it for promotion into the shared engine first — undisciplined one-off additions are how design systems fragment.
- **Never optimize solely for high-end iPhones during development.** Mid-range Android devices and older iPhones are explicitly in scope (Section 13) and must be part of routine testing, not an afterthought before launch.
- **Never add third-party tracking/ad scripts that compromise load performance or user trust** in the name of analytics convenience — this directly undermines the brand's premium, quietly-confident personality.
- **Never generate or scaffold code before the Phase 0 foundation (visual identity, design tokens) is finalized** — building on an undefined visual system guarantees costly rework.

---

## 27. Final Recommendations Before Development Begins

1. **Finalize the visual identity system before writing a single line of interface code.** The Doran typeface pairing and the warm, natural mood established by the project's reference imagery are strong starting signals, but a full color palette, type scale, and motion-timing scale must be locked as the Phase 0 deliverable.
2. **Build the shared experience engine and the Housewarming template in tandem, not the engine "in theory" first.** Abstract architecture designed without a real template to validate against tends to be wrong in ways that only surface once a second template is attempted — by then, expensive to fix.
3. **Deliberately build (even informally) a rough second template early**, specifically to pressure-test the "one engine, many occasions" premise before the architecture calcifies around Housewarming's specific needs.
4. **Establish the performance and accessibility baselines as launch-blocking criteria for the Housewarming MVP**, not as later hardening work — both are foundational to the brand's credibility as genuinely premium and genuinely for everyone.
5. **Treat this document as living but stable.** It should be revisited at the start of each development phase (Section 24) to confirm decisions still hold, but should not be casually overridden by in-the-moment implementation convenience — deviations should be deliberate and documented, not silent.
6. **Assign clear ownership of the design token system and the shared experience engine** to a small, consistent group (even if just one person initially) — these are the two assets most responsible for whether the "scalable luxury platform" vision succeeds or fragments into eleven disconnected templates.
7. **Validate every major design and motion decision on real, mid-range mobile hardware before it is considered done.** This is the platform's stated design center — treat it as non-negotiable, not aspirational.

---

*End of Foundation Document. All subsequent design and engineering work should reference this document as the baseline definition of what Invita is, who it is for, and how it must feel and scale.*
