# INVITA
## Master Specification & Governance Index
### The Official Entry Point for Every Contributor and AI Assistant

**Version:** 1.0.0
**Status:** Pre-Development
**Prepared for:** Invita — Luxury Digital Invitation Platform
**Document Type:** Index & Governance Document (not a specification in itself)

---

## Table of Contents

1. Project Overview
2. Documentation Index
3. Reading Order
4. Authority Order
5. Development Workflow
6. Repository Rules
7. AI Instructions
8. Change Management
9. Version Information
10. Future Roadmap
11. Master Manifesto

---

## 1. Project Overview

Invita is a luxury digital invitation platform — a place where announcing a housewarming, a wedding, a graduation, or any life milestone is treated as a designed, cinematic experience rather than a disposable link. Invita replaces the flat, forgettable digital invitation (a Canva template, a screenshot forwarded on WhatsApp) with a paced, emotionally considered moment, built on one coherent design and technical system that scales across an ever-growing library of occasions.

This repository is the documentation foundation for Invita. It contains seven final, authoritative documents that together define the platform's strategy, visual identity, experience design, content voice, technical architecture, motion production standards, and component-level implementation spec. This document — `MASTER_SPECIFICATION.md` — is not an eighth specification. It is the index and governance layer that sits above the other seven: it tells every developer, designer, motion artist, copywriter, engineer, and AI assistant what exists, in what order to read it, which document wins in a conflict, and how the project is meant to evolve from here.

No implementation work should begin without first understanding this index and the documents it governs.

---

## 2. Documentation Index

| # | Document | Purpose | Primary Audience | Dependencies |
|---|----------|---------|-------------------|---------------|
| 01 | [Invita-Foundation-Document.md](Invita-Foundation-Document.md) | Strategic, experiential, and technical root. Defines vision, mission, target audience, user journey, guiding philosophies, and the long-term roadmap that every other document traces back to. | Founders, product strategists — and by extension every downstream team | None (root document) |
| 02 | [Invita-Visual-Identity-System.md](Invita-Visual-Identity-System.md) | The single source of visual truth: color, typography, spacing, grid, iconography, 3D/motion art direction, and design tokens. Every template is a variation within this system. | Brand and visual designers, UI designers | 01 |
| 03 | [Invita-UX-Experience-Blueprint.md](Invita-UX-Experience-Blueprint.md) | Choreographs the visual system into an exact, second-by-second guest and host experience (screen timeline, scene progression, motion language), worked through the flagship Housewarming example. | UX/experience designers, motion directors | 01, 02 |
| 04 | [Invita-Content-Copywriting-Localization-Bible.md](Invita-Content-Copywriting-Localization-Bible.md) | Governs the words that fill the experience: brand voice, tone per occasion, Sorani writing rules, microcopy, and localization/editorial governance. | Copywriters, localization and content editors | 01, 02, 03 |
| 05 | [Invita-Technical-Architecture-Engineering-Blueprint.md](Invita-Technical-Architecture-Engineering-Blueprint.md) | Defines how the platform is built: folder architecture, component governance, design-token architecture, state management, data model, performance and security engineering, fixed technology stack. | Engineers, technical architects | 01, 02, 03, 04 |
| 06 | [Invita-Motion-3D-Production-Bible.md](Invita-Motion-3D-Production-Bible.md) | Gives the exact production numbers — durations, easing, camera direction, materials, particle systems — that the motion and 3D engines defined in doc 05 must hit. The handoff from director to animator/lighting TD. | Motion designers, 3D/technical artists, animators | 01, 02, 03, 05 |
| 07 | [Invita-Design-System-Component-Library-Bible.md](Invita-Design-System-Component-Library-Bible.md) | The missing layer between specification and code: full component-level spec — naming, folder structure, props/states, accessibility, ownership boundaries between design, motion, and engineering. | Engineers, design-system implementers, AI coding assistants | 01, 02, 03, 04, 05, 06 |

---

## 3. Reading Order

A new developer, designer, or AI assistant must read the documents in the following order. Each step depends on internalizing the one before it — skipping ahead produces decisions that contradict earlier, higher-authority material.

1. **Foundation Document** — establishes why Invita exists and what it must never compromise on. Nothing downstream makes sense without this.
2. **Visual Identity System** — establishes the sensory language (color, type, material, motion direction) that every subsequent document assumes as given.
3. **UX Experience Blueprint** — shows how the visual language is sequenced into a lived, timed experience. Introduces no new visual elements — only choreographs existing ones.
4. **Content, Copywriting & Localization Bible** — fills the choreographed experience with words, matched to the emotional key and typography already defined.
5. **Technical Architecture & Engineering Blueprint** — defines the engineering system that must render everything specified in documents 1–4 without contradicting any of them.
6. **Motion & 3D Production Bible** — supplies the exact production values the engines from document 5 must implement.
7. **Design System & Component Library Bible** — the final translation layer into concrete, buildable components, binding all six prior documents into implementation-ready specs.

Only after all seven are read and understood should implementation begin.

---

## 4. Authority Order

If any two documents ever appear to conflict, the lower-numbered document always wins. Priority hierarchy, highest to lowest:

**01 Foundation Document > 02 Visual Identity System > 03 UX Experience Blueprint > 04 Content, Copywriting & Localization Bible > 05 Technical Architecture & Engineering Blueprint > 06 Motion & 3D Production Bible > 07 Design System & Component Library Bible**

Rules that follow from this hierarchy:

- A document may only extend or elaborate on the documents above it — it may never override or contradict them.
- If a conflict is found, the fix is to correct or clarify the lower-authority document, not to quietly deviate from it in code, design, or copy.
- If implementation reveals that a higher-authority document is genuinely wrong or incomplete, that must be raised as a proposed change to the source document (see Section 8 — Change Management), never patched around downstream.
- This document, `MASTER_SPECIFICATION.md`, holds no content authority of its own — it only reports the hierarchy the seven documents already declare about themselves. If this index and a foundation document ever disagree about the hierarchy, the foundation documents are correct and this index must be updated.

---

## 5. Development Workflow

The official workflow for taking Invita from specification to shipped product:

```
Planning        → guided by Document 01 (Foundation)
      ↓
Design          → guided by Document 02 (Visual Identity)
      ↓
Experience      → guided by Document 03 (UX Blueprint)
      ↓
Copy            → guided by Document 04 (Content Bible)
      ↓
Engineering     → guided by Document 05 (Technical Architecture)
      ↓
Motion          → guided by Document 06 (Motion & 3D Bible)
      ↓
Components      → guided by Document 07 (Design System & Component Library)
      ↓
Implementation  → all seven documents, in force simultaneously
      ↓
Testing
      ↓
Deployment
```

Each stage produces artifacts that the next stage consumes as fixed input. No stage should redefine decisions that belong to an earlier stage — e.g., engineering must not invent new colors, and components must not invent new motion timing not already specified in the Motion Bible.

---

## 6. Repository Rules

These rules apply to every contributor — human or AI — working in this repository:

- **Never bypass documentation.** No design, copy, engineering, or motion decision may be made without first checking whether it is already specified in one of the seven documents.
- **Never invent design decisions.** If a decision is not covered by an existing document, it must be raised as a gap to resolve through the source document, not improvised in code or in a pull request.
- **Never duplicate components.** Before creating a new component, check the Design System & Component Library Bible for an existing one that already covers the need.
- **Never change brand identity.** Colors, typography, spacing, and other tokens defined in the Visual Identity System are final and may not be altered without an explicit, versioned change to that document.
- **Never violate the Motion Bible.** Durations, easing, camera direction, and production values in the Motion & 3D Production Bible are binding, not suggestions.

---

## 7. AI Instructions

This chapter applies specifically to AI assistants (including but not limited to coding assistants, design assistants, and content assistants) working in this repository.

- **Read before writing.** Before generating any code, copy, design asset, or component, read the relevant documents in the Reading Order defined in Section 3 — starting with the Foundation Document.
- **Never ignore previous specifications.** Every one of the seven documents is final. Do not propose alternative architectures, visual systems, or content voices that were not asked for, even if a different approach seems technically preferable — flag the concern instead of silently deviating.
- **Always follow the established hierarchy.** When two pieces of guidance seem to conflict, resolve using the Authority Order in Section 4, never by guessing which one "feels right."
- **Never create conflicting implementations.** Do not generate a component, animation, or copy string that contradicts an existing specification. If a required detail is missing from all seven documents, say so explicitly and ask, rather than inventing a plausible-sounding answer.
- **Do not modify the seven foundation documents.** They are FINAL. Only this master index, and future Sprint documents (see Section 10), may be created or updated during ongoing work.

---

## 8. Change Management

The seven foundation documents are versioned as final, stable references. Changes to them are expected to be rare and deliberate:

- **Versioning.** Each foundation document carries its own version number (currently `v1.0` across all seven). A change to a document's substance requires incrementing its version and recording what changed and why.
- **Approval.** No foundation document may be edited unilaterally. Proposed changes require review and sign-off from the project owner before being merged.
- **Review.** Any proposed change must be checked against the Authority Order (Section 4) to confirm it does not silently invalidate a lower-authority document that depends on it — if it does, the dependent document must be updated in the same change.
- **Documentation updates.** Any change to a foundation document's purpose, audience, or dependencies must be reflected in the Documentation Index (Section 2) of this master specification in the same change set, so the index never drifts out of sync with the documents it describes.

---

## 9. Version Information

**Current Version:** v1.0.0
**Status:** Pre-Development

This master specification and all seven governed documents are currently in the Pre-Development phase — the foundation is considered complete and final; no implementation has yet begun.

---

## 10. Future Roadmap

Future implementation work will be delivered through separate **Sprint documents** (Sprint 1, Sprint 2, Sprint 3, and so on), not through edits to the seven foundation documents.

Each Sprint document should:

- Reference the specific sections of the foundation documents it implements.
- Never redefine or contradict anything already specified in documents 01–07.
- Be scoped to concrete, shippable work — a Sprint document describes execution, not new specification.

This keeps the foundation stable and permanent while allowing implementation to proceed in incremental, reviewable phases.

---

## 11. Master Manifesto

Invita is built to last. The seven documents this specification governs were written to be final — not because change is forbidden, but because taste, once earned, should not be re-litigated every sprint. A platform built on luxury and restraint cannot be assembled from ad-hoc decisions; it must be assembled from a single, coherent intention, held consistently across every screen, every animation, every word, and every line of code.

This repository exists so that Invita remains elegant, scalable, timeless, and internally consistent for years — regardless of who is building it, or how many hands touch it along the way. Every contributor, human or AI, inherits the same responsibility: understand the foundation before adding to it, extend without contradicting, and never trade the long-term integrity of the system for a short-term convenience.

Invita is not a codebase to be finished. It is a system to be maintained with the same care as the moments it was built to celebrate.
