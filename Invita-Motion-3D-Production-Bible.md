# INVITA
## Motion & 3D Production Bible

**Version:** 1.0 — Production Foundation
**Status of prior documents:** `Invita-Foundation-Document.md`, `Invita-Visual-Identity-System.md`, `Invita-UX-Experience-Blueprint.md`, `Invita-Content-Copywriting-Localization-Bible.md`, and `Invita-Technical-Architecture-Engineering-Blueprint.md` are FINAL. This document extends them with production-level precision; it never contradicts them.
**Worked example:** the flagship Housewarming invitation — رەیان ❤ کاروان, ٢١ / ٧ / ٢٠٢٦, سلێمانی — هۆڵی ئۆسکار, centerpiece photo `invita.jpg`.
**Engines of record (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §13-15):** GSAP + Lenis for Scene-level cinematic timelines and scroll, Framer Motion for component-level micro-interactions, Three.js/React Three Fiber for all 3D rendering. This document specifies the exact production values (durations, easing, camera parameters, material properties, particle counts) those engines must be configured to hit — it does not write the configuration itself.

---

## How to Use This Document

`Invita-UX-Experience-Blueprint.md` told a studio *what happens and why, second by second*. `Invita-Technical-Architecture-Engineering-Blueprint.md` told engineering *which library owns which concern*. This document is what a director hands to an animator and a lighting TD on day one of production: the actual numbers — milliseconds, degrees, color temperatures, particle counts, roughness values — needed to execute that choreography, in that engine, without inventing anything on set. Where this document gives a number, that number is canonical. Where it gives a qualitative description (a material's "feel"), that description is the brief a technical artist matches by eye, calibrated against the reference mood already established in `Invita-Visual-Identity-System.md`.

---

## Table of Contents

1. Motion Philosophy · 2. Motion Principles · 3. Emotion Through Motion · 4. Opening Cinematic Sequence · 5. Camera Direction · 6. Envelope Production · 7. Paper Animation · 8. Wax Seal Direction · 9. Photo Presentation · 10. Three.js Scene Bible · 11. Lighting Choreography · 12. Particle System · 13. Environmental Effects · 14. Scroll Choreography · 15. GSAP Timeline Strategy · 16. Framer Motion Rules · 17. Gesture Experience · 18. Audio Production · 19. Performance Motion Rules · 20. Accessibility Motion · 21. Animation Timing Library · 22. Easing Library · 23. Transition Library · 24. 3D Asset Direction · 25. Material Library · 26. Lighting Presets · 27. Quality Standards · 28. Motion Anti-Patterns · 29. Production Checklist · 30. Final Motion Manifesto

---

## 1. Motion Philosophy

Motion in Invita is not decoration applied to a finished screen — it is how the letter is *read aloud*. Every movement exists to carry the guest's eye and feeling from one truth to the next: from anticipation to the couple's names, from the couple's names to their home, from their home to the date they've chosen to open it to everyone they love.

Five words govern every motion decision in this bible, in order of priority when they conflict:

1. **Elegant** — motion never calls attention to its own cleverness. If a guest notices "that was a cool animation" rather than feeling the moment, the animation has failed regardless of technical polish.
2. **Natural** — every movement obeys a believable physical logic (weight, momentum, the way real light behaves) — nothing floats, snaps, or teleports without a reason rooted in the object's implied material.
3. **Luxury** — achieved through unhurried pacing and precision, never through spectacle. A luxury brand's signature move is used rarely and lands harder because of that restraint.
4. **Timeless** — no motion trend that will look dated in three years (parallax gimmicks, bouncy "juice," aggressive overshoot) is permitted; the test is whether the motion would still look considered in ten years, the way a well-made film's editing does.
5. **Human** — motion has the imperfection of a real hand, a real breath — never the mechanically perfect, linear precision of a UI toggle.

**Never flashy, never distracting** is not a soft guideline — it is the single disqualifying test applied to every animation before it is approved (see §29): if a motion could be described as "flashy" by a neutral observer, it is rejected and re-cut, no matter how technically impressive.

---

## 2. Motion Principles

Every object in this bible is animated as though it has physical properties, even when it is virtual. These principles are qualitative directives a technical artist tunes toward — see §21-22 for the numeric duration/easing values that implement them.

- **Weight:** heavier objects (the wax seal, the gift box) begin movement more slowly and require more visual "effort" to set in motion than light objects (a floating petal, a dust mote). Weight is communicated primarily through initial acceleration rate — a heavy object's motion ramps up gradually; a light object can begin moving almost immediately.
- **Mass:** larger, denser-implied objects (the envelope as a whole) resist quick direction changes — their paths curve rather than corner sharply. Small objects (particles) may change direction more freely since their implied mass is negligible.
- **Momentum:** once a heavy object is moving, it carries through past the point a lighter object would have stopped, requiring a longer, gentler deceleration tail (see the wax seal crack in §8, which doesn't stop the instant it separates but continues to settle).
- **Gravity:** everything in this system, including 3D objects and particles, behaves as though a gentle, real gravity is present — flowers droop, ribbon drapes, a lifted envelope flap eventually rests under its own weight rather than holding a rigid pose. Zero-gravity, weightless "floating UI" behavior is reserved deliberately and only for the ambient particle layer (§12), which is meant to read as suspended dust/light, not as objects.
- **Elasticity:** used sparingly and only where a material genuinely has it — a very slight, soft settle-and-release on the envelope's paper flap, a gentle compress-and-release on a touch-responsive button (§16). Elasticity is never used on rigid materials (gold, glass, stone) or on narrative Scene transitions, where it would read as a bouncy UI cliché rather than a considered material behavior.
- **Ease:** nothing in this system moves at constant velocity — every motion accelerates in and decelerates out (see §22's easing library) to simulate the natural way real objects start and stop.
- **Timing:** the specific duration assigned to a motion is itself an emotional signal (see §21) — a name reveal that took 80ms would read as an error message flashing, not an intimate unveiling; timing is chosen for feeling first, technical minimalism second.
- **Rhythm:** related motions (the sequential Names Reveal, the Location Card's field-by-field consideration) are spaced with a consistent, intentional gap between beats — never simultaneous, never randomly staggered; rhythm is a deliberate musical pattern the director sets once and reuses (§15).
- **Hierarchy:** exactly one element is the "lead" motion at any moment; every other moving element on screen (ambient particles, a background glow pulse) is demoted to a lower amplitude/speed so the eye is never asked to track two competing movements (extending `Invita-Visual-Identity-System.md` §24's "never over-animate" rule into a directorial rule: hierarchy is set by amplitude and contrast, not merely by which element moves "first").

---

## 3. Emotion Through Motion

Motion is the platform's primary emotional instrument, more immediate than color or copy because a guest feels a movement's pacing before they consciously register what moved.

- **Slow, soft, decelerating motion → calm, held anticipation.** Used throughout the Opening Experience (§4) and the Photo Centerpiece (§9) — the guest's nervous system reads unhurried motion as safety and importance ("this is worth waiting for").
- **A brief acceleration followed by a soft settle → delight, a small gift.** Used at genuinely significant reveal moments (the wax seal cracking, §8; the ❤ glyph's pulse in the Names Reveal) — a small, contained burst of energy that resolves gently, never left unresolved or continuing to bounce.
- **Continuous, low-amplitude drift → living warmth, ambient life.** Used for the particle field (§12) and the envelope's idle float (§6) — communicates that the scene is alive and breathing even when nothing narratively significant is happening, without ever competing for attention.
- **Deceleration into stillness → resolution, arrival, rest.** Used at the end of every Scene transition and at the Closing Frame (per doc #3 §11) — a movement that fully stops (rather than continuing to idle) signals "you have arrived; you may rest here."
- **Absence of motion → gravity and importance.** The single most emotionally powerful "motion" choice available in this system is choosing not to move something — the Display-tier names (رەیان ❤ کاروان) are held completely still once revealed, precisely because everything around them is alive; stillness at the center of motion is what makes a name feel monumental.
- **Governing emotional rule:** a director tuning any new motion in this system should ask "what feeling does this specific speed and deceleration curve produce, independent of what object is moving?" before asking "does this look cool?" — feeling is authored first, motion is the vehicle chosen to deliver it.

---

## 4. Opening Cinematic Sequence — Second-by-Second (0–20 Seconds)

This extends `Invita-UX-Experience-Blueprint.md` §4's 0-15s breakdown with the missing directorial layer — camera lens/distance, depth staging, and the additional 15-20s beat — without altering any of doc #3's established emotional beats or timing anchors.

**0.0s – 0.5s — True Black, Camera at Rest.**
Camera: a virtual 35mm-equivalent lens (see §5 for the lens-simulation rationale), held at a fixed, centered position, functionally "looking at nothing" — no depth cue exists yet. Particles: none yet. Audio: true silence. Light: none. This half-second is a directorial breath before the film begins, identical in intent to a black leader frame before a title card.

**0.5s – 2.0s — First Light Blooms.**
A single soft point-light ignites at the exact center of frame, at a simulated distance of roughly 2–3 virtual meters from the camera (close enough to feel intimate, far enough that its bloom fills the frame without clipping). The camera does not move. Light intensity ramps from 0 to roughly 40% of its resting value across this beat, using a slow ease-in (see §22's "Candle Bloom" curve) — mimicking a flame catching rather than a light switch turning on. Audio: the ambient tone begins its rise from silence, timed to begin exactly as the light crosses 15% intensity, so sound and light are perceived as the same event.

**2.0s – 3.5s — Particles Awaken.**
The ambient particle field (§12) fades in around the light source, beginning at zero density and reaching roughly 30% of its resting density by 3.5s. Particles closest to the light source (within roughly 1 virtual meter) are given a very slight outward drift, as though stirred by the light's warmth — this is the only moment in the entire experience where particle motion is directly, causally tied to another element's state, and it is subtle enough that most guests will feel rather than consciously notice it.

**3.5s – 6.0s — The Envelope Emerges, Camera Confirms Distance.**
The envelope object (§6) fades and scales in from within the light (starting at 85% of resting scale, easing to 100% — a very slight "arriving from a distance" cue, never a dramatic zoom). Camera performs its only movement in this beat: an extremely slow dolly-in of roughly 8–10% of the starting distance, executed over the full 2.5s duration with a linear-feeling but technically eased motion (near-zero acceleration/deceleration variance, since at this imperceptible speed, easing curve choice matters less than raw slowness). Music: the solo instrumental voice enters at low volume, timed to the envelope reaching 50% of its scale-in.

**6.0s – 9.0s — Camera Settles, Light Confirms Direction.**
The dolly-in from the previous beat completes and the camera comes to a full, final rest — this rest position is held for the remainder of the Opening Experience. The key light (golden, per §11) locks its final direction (upper-frame-left, roughly 35–45° above the envelope's horizon line, consistent with `Invita-Visual-Identity-System.md` §22's Golden Light source) casting a soft highlight along the envelope's upper-right edge and a corresponding soft shadow beneath and to the left. Depth of field (a soft, shallow simulated depth-of-field) is introduced here — the envelope is in crisp focus, the particle field beyond roughly 1.5 virtual meters begins to soften, establishing the depth layering used throughout the platform (`Invita-Visual-Identity-System.md` §23).

**9.0s – 12.0s — Invitation to Touch: The Seal Glows.**
The wax seal (§8) begins a slow glow-pulse — intensity oscillating gently between roughly 60% and 100% of its resting Golden Glow value on a soft sine-like curve (see §22's "Living Pulse" curve), with a full pulse cycle taking approximately 2.5–3 seconds. No camera or particle change accompanies this beat — the seal's glow is the sole active "invitation" signal, given room to be noticed without competition.

**12.0s – 15.0s — Held Anticipation.**
If untouched, the scene holds indefinitely in this exact state (envelope idle-floating per §6, particles drifting at ambient density, seal glow-pulsing) — there is no scripted change at 15s; this beat exists to confirm, for production purposes, that the "hold" state itself is a fully designed, complete-feeling composition, not a placeholder waiting for something else to happen.

**15.0s – 17.5s — Extended Hold: Micro-Variation (new beat, extending doc #3's 15s cutoff to 20s for productions where the guest has not yet touched the seal).**
To keep an extended, untouched hold from feeling static on rewatch, a very subtle secondary particle drift wave passes through the scene once — a small cluster of particles (no more than 8-10% of the total field) receives a slightly larger drift amplitude for roughly 2 seconds, then returns to baseline. This is a texture variation only, never a narrative event, and must never be mistaken by a guest for "something happening" — its sole purpose is to keep the held frame visually alive across a longer-than-expected wait.

**17.5s – 20.0s — Continued Hold, No Escalation.**
The scene simply continues (envelope float, seal pulse, ambient particles) with no further scripted variation — per doc #3 §4's explicit rule, there is no impatience mechanic, no skip prompt, and no auto-advance at any point past 20s. Production note: this bible's 20-second window exists to give directors and QA a concrete reference for "does the held state remain beautiful this long," not to imply the experience ever forces an advance.

**The moment of touch (at any point ≥ ~9.0s once the seal's invitation is live):** the Seal Break sequence (§8) begins immediately, interrupting the hold state at whatever point it was in — the transition from "held" to "activated" must feel instantaneous in response (per Framer Motion's touch-feedback rules, §16) even though the resulting Seal Break animation itself is unhurried.

---

## 5. Camera Direction

- **Camera language:** Invita's camera behaves like a patient documentary/portrait cinematographer, not a music-video camera — it observes, occasionally drifts closer to something worth approaching, and otherwise holds still and lets the subject perform. It never whips, never cuts rapidly between angles, and never performs a movement whose primary purpose is to show off the 3D environment.
- **Camera paths:** limited to two path types across the entire platform: (1) a **static hold** (the default state for the overwhelming majority of screen time), and (2) a **slow, single-axis dolly** (forward/back along one line, as in the Opening Experience's settle and the Photo Centerpiece's dwell-stage push, per doc #3 §12). Orbital, arcing, or multi-axis camera paths are not used anywhere in the guest-facing experience — they read as a "3D demo reel" flourish rather than a considered cinematographic choice.
- **Lens simulation:** a virtual focal length in the 35mm–50mm-equivalent range is used for most Scenes (a natural, slightly-narrower-than-human-eye field of view that flatters framed subjects, particularly the couple's photograph, §9, without the exaggerated depth distortion of a wide lens). A slightly longer, ~70mm-equivalent lens is used specifically for the Photo Centerpiece Scene to produce a gentle compression that makes the photograph feel closer and more intimate.
- **FOV:** derived from the lens choice above — approximately 40–50° vertical FOV for the standard 35–50mm scenes, narrowing to roughly 28–34° for the 70mm-equivalent Photo Centerpiece framing. FOV is never animated/changed during a Scene (no "zoom via FOV change") — any sense of "getting closer" is always produced by an actual dolly move, never a lens-breathing FOV animation, which reads as an unnatural, video-game-like camera trick.
- **Distance:** the camera's resting distance from its subject is set so the subject (envelope, photo frame, countdown panel) occupies roughly 55–70% of the frame's height, preserving the generous negative space `Invita-Visual-Identity-System.md` §6/§10 requires — the camera is never so close that a subject fills the frame edge-to-edge, which would feel aggressive rather than considered.
- **Movement speed:** every camera move in this system, without exception, completes over no less than 2 full seconds, and typically 2.5–4 seconds, regardless of the distance traveled — "never create sudden movement" (per the brief) is treated as an absolute floor on camera-move duration, not merely a stylistic preference; a camera move that covers a small distance moves proportionally slower (not faster) than a longer move, since perceived smoothness matters more than covering ground efficiently.
- **Prohibited camera behaviors:** no camera shake, no handheld simulation, no snap-cuts between camera positions, no rapid re-framing in response to scroll velocity (scroll drives content position, per §14, but never whips the camera itself around).

---

## 6. Envelope Production

- **Material:** a matte, fine cotton-rag-style cardstock — visually read as substantial (not flimsy) but not stiff like a box — with a subtle, non-uniform paper-fiber micro-texture visible only under close, raking light (i.e., visible specifically where the Golden Light's angle grazes the surface, per §11).
- **Paper weight/thickness:** simulated as a substantial invitation-grade stock — thick enough to hold a crisp fold line and a raised wax seal without appearing to sag, thin enough that its flap can lift and curve naturally rather than behaving like rigid cardboard.
- **Edges:** slightly deckled/soft rather than laser-precise — edges catch the Foil Gold highlight (`Invita-Visual-Identity-System.md` §11.4) as a thin, slightly irregular line rather than a perfectly uniform CAD-drafted edge, reinforcing the "handmade fine stationery" read over a "3D-modeled prop" read.
- **Fold behavior:** the envelope's flap has one primary fold line (its hinge) that behaves with a very slight give at the fold itself (a soft curvature at the crease, never a perfectly sharp 90° mechanical hinge) — see §7 for the full curvature specification.
- **Wax seal:** see §8 for full direction; positioned dead-center on the flap, sized to read clearly as a focal point from the Opening Experience's established camera distance (§5).
- **Opening physics:** the flap's opening arc is modeled as a damped hinge rotation — it begins with a brief resistance beat (the wax bond releasing, §8) before rotating open, decelerating as it approaches its fully-open rest angle (roughly 100–110°, past perfectly flat, so it visibly settles past vertical and eases back rather than stopping dead at a precise right angle) — see §21 for the exact duration.
- **Shadow:** a soft, warm-tinted Floating Shadow (per `Invita-Visual-Identity-System.md` §16) beneath the envelope at all times; as the flap lifts, a secondary, softer contact shadow appears briefly where the flap's underside catches light escaping from within — both shadows use wide blur radii and low opacity, never a hard-edged silhouette.

---

## 7. Paper Animation

- **Folding/unfolding:** where content is depicted as unfolding from within the envelope (rather than the envelope simply revealing a scene behind it), each fold releases in sequence from the outermost to the innermost, never simultaneously — each individual fold's release takes roughly 0.4–0.6 seconds with a soft decelerating ease, and consecutive folds are staggered by roughly 0.15–0.2 seconds so the eye can track the paper opening as a real, continuous action rather than a single instant unfurl.
- **Curvature:** paper is never depicted as perfectly flat during motion — a subtle curve (a gentle arc across the sheet's width) is present throughout any fold/unfold motion, at its most pronounced mid-motion and relaxing to a very slight residual curve (never perfectly flat) at rest, mimicking how real cardstock retains a slight memory of its folded state.
- **Timing:** the complete paper reveal sequence (from the first fold's release to full settle) fits within the "Scene" duration band (§21) — approximately 2–2.5 seconds total — matching the pacing already established for the Seal Break → envelope-open beat in doc #3 §5 without extending it into a separate, additional wait.

---

## 8. Wax Seal Direction

- **Material:** a satin-finish wax (not high-gloss, not matte-dead) in a deep Dusk Plum or Ink-toned hue (per `Invita-Visual-Identity-System.md` §21) — its surface should read as slightly translucent at thin edges (as real wax does when backlit) and fully opaque at its thickest point (the raised emblem).
- **Reflection:** a single soft, elongated highlight consistent with the scene's one Golden Light source (§11) — never a sharp point-highlight (which would read as plastic/glossy) and never multiple competing highlights (which would read as an unnatural multi-light studio setup).
- **Breaking:** the crack begins as a hairline fracture originating from one edge of the seal (not the center), widening over roughly 0.3–0.4 seconds before the two halves begin to visibly separate — this initial "resistance" beat is essential: the seal must appear to genuinely resist for a brief moment before yielding, communicating real material weight (per §2's Weight/Momentum principles) rather than instantly popping open.
- **Post-break settle:** once separated, the two wax fragments do not vanish or fly away — they remain attached to the envelope's flap (as real broken wax would, still adhered where it originally bonded) and simply recede from camera focus as the flap continues its opening arc (§6).
- **Particle behavior:** at the instant of the crack (not before), a small burst of fine, warm-toned light particles (8–15 individual motes, per §12's particle rules) is released from the fracture line, drifting outward and upward for roughly 1–1.5 seconds before dissipating (fading, not falling out of frame) — this burst is the single most energetic particle moment in the entire Opening Experience and must not be repeated or echoed elsewhere, preserving its significance.
- **Sound timing:** the paper/wax opening sound cue (per `Invita-UX-Experience-Blueprint.md` §15) is triggered at the exact frame the hairline fracture becomes visible (not at the moment of full separation) — sound leads the visual break by a few frames, mimicking how a real crack's sound is perceived fractionally before the visual separation completes, which reads as more convincingly physical than a perfectly synced simultaneous cue.

---

## 9. Photo Presentation

The `invita.jpg` photograph receives more individually specified motion detail than any other single asset in this bible, consistent with its role as the platform's emotional peak (`Invita-UX-Experience-Blueprint.md` §7).

- **Frame movement (entrance):** the fully framed photograph (gold edge + glass mat + image, per `Invita-Visual-Identity-System.md` §18) scales in from 96% to 100% of resting scale over roughly 1.2–1.5 seconds, on a soft overshoot-and-settle curve (§22's "Arrival Settle" curve) — a barely perceptible 1-2% overshoot past 100% before settling exactly at rest, which reads as the frame gently "landing" rather than arriving inertly.
- **Depth:** the frame renders at a simulated elevation above the background plane (per the Floating Shadow treatment, `Invita-Visual-Identity-System.md` §16) — its shadow's blur radius and offset are calibrated so the frame reads as suspended roughly 15-25 simulated centimeters above the surface behind it, reinforced by the background layer receiving a very slightly softer depth-of-field blur than the frame itself (§5's depth-of-field rule).
- **Glass reflections:** a single, soft top-edge highlight band (per `Invita-Visual-Identity-System.md` §17) moves almost imperceptibly (a shift of no more than a few percent of the frame's height) in response to the guest's scroll or device-tilt input (§17), simulating the way real glass subtly redirects a light reflection as a viewer's position changes — this must remain extremely subtle; if a guest can consciously see the reflection "sliding," it has been overdone.
- **Parallax:** the frame shifts vertically at approximately 80–90% of the surrounding content's scroll speed (i.e., it lags very slightly behind the rest of the page), while the background particle layer behind it shifts at approximately 60-70% of scroll speed — this three-tier speed differential (foreground content 100%, frame 80-90%, background particles 60-70%) is what produces the sense of physical depth described in doc #3 §7/§12, and must be tuned conservatively enough that it never induces the "swimming" discomfort of an overly aggressive parallax effect.
- **Micro movement:** while at rest (not actively scrolling), the frame receives an extremely subtle, slow ambient drift — a barely-perceptible sub-pixel-scale sway with a full cycle period of roughly 8-10 seconds — communicating that the frame is a suspended physical object subject to the faintest ambient air movement, not a static, pasted-on image layer. This micro-movement must be slow and small enough that it registers subliminally as "alive" rather than consciously as "moving."
- **Absolute rule (restated from `Invita-UX-Experience-Blueprint.md` §7):** none of the above movement is ever applied *to the photograph's content itself* (no Ken Burns zoom/pan across the image, no cropping reveal) — every motion described in this section applies to the frame and its surrounding depth/light treatment; the photograph inside is presented exactly as captured, moving only as a whole, rigid object within its frame.

---

## 10. Three.js Scene Bible

- **Scene hierarchy:** each 3D-bearing Scene (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §15) is organized as a single root group containing, at most: one hero object (envelope, or the ambient particle field alone), its immediate supporting objects (wax seal as a child of the envelope, ribbon as a child where present), a lighting rig group, and an environment/background group. No 3D Scene in this bible contains more than 4-6 distinct object groups total — visual richness comes from material and lighting quality, never from object-count density.
- **Camera:** one camera per Scene, configured per §5's lens/FOV/distance rules; camera state (position, target) is treated as Scene-level data, not shared or interpolated across Scene boundaries (a Scene transition is a cross-dissolve between two independently-composed Scenes, never a single camera flying between two 3D spaces).
- **Lighting:** the shared three-light rig specified in §11 (key Golden Light, ambient fill, and a soft rim/bounce light) is applied identically across every Scene's lighting group — no Scene defines a bespoke, one-off lighting setup.
- **Environment:** a minimal, softly blurred environment — implemented as a simple gradient or heavily blurred environment map (an HDRI, see below) rather than modeled geometry — provides ambient reflection data for glass/gold materials (§25) without rendering as recognizable, detailed surroundings that would compete with the foreground subject.
- **Fog:** a very subtle, warm-tinted exponential fog is present in every 3D Scene, calibrated so it is only perceptible at the depth where the background particle layer sits (roughly 2-4 virtual meters from camera) — its purpose is purely to soften the transition into background blur (§5's depth-of-field) and to prevent the environment from reading as an infinite, contextless void; it must never visibly desaturate or obscure the hero object itself.
- **HDRI:** a single, custom-authored warm-toned HDRI (evoking a softly lit interior or golden-hour exterior, consistent with `Invita-Visual-Identity-System.md`'s "warm, organic luxury" register) is used platform-wide as the base environment-reflection source for every gold and glass material — using one consistent HDRI across all Scenes and all future templates is what guarantees the cross-object lighting consistency required by doc #3 §13's governing rule.
- **Shadow quality:** shadows are configured for softness over sharpness — a wide penumbra (soft-edged shadow falloff) is prioritized even at some cost to shadow-map resolution/crispness, since a soft, slightly lower-resolution shadow reads as "candlelit luxury" while a sharp, high-resolution shadow reads as "video game realism," which is the wrong register entirely for this brand.

---

## 11. Lighting Choreography

- **Golden Hour (the platform's default lighting mood):** a warm, low-angle key light (color temperature in the range of roughly 2700K–3200K, i.e., candle-to-early-sunset warmth) positioned upper-frame-left at 35-45° elevation (per §4's Opening Experience specification) — used as the resting lighting state for the large majority of Scenes.
- **Ambient:** a very low-intensity, slightly cooler-neutral fill light (roughly 4000K, kept subtle enough never to fight the key light's warmth) ensures no part of any Scene falls into true unlit black, per `Invita-Visual-Identity-System.md` §22.
- **Bounce:** a soft, low-intensity secondary "bounce" light positioned opposite the key light (lower-frame-right, low intensity, cooler and dimmer than the key) simulates light reflecting off an implied nearby surface — this is what keeps the shadow side of the envelope/photo frame from reading as a flat, un-lit silhouette, without introducing a second competing key light.
- **Reflection:** handled per-material via the shared HDRI (§10) rather than direct light-to-surface calculation wherever possible, since reflections sourced from one consistent environment map are what keeps gold and glass reading as part of the same coherent "room" across every Scene.
- **Bloom:** a soft, moderate-radius bloom post-process is applied platform-wide, tuned so that only genuinely bright highlights (the wax seal's glow-pulse, the countdown panel's glow, the light source itself in the Opening Experience) produce visible bloom — applied too broadly, bloom washes out the material fidelity of paper/gold/glass; applied correctly, it is what makes those highlights feel like they are genuinely emitting warmth rather than merely being bright pixels.
- **Color temperature governing rule:** every light source across the entire platform is calibrated within the 2700K–4000K range described above — no Scene, current or future template, ever introduces a light source cooler than 4000K (which would read as clinical/blue) or warmer than 2700K (which would tip into an unnatural orange rather than a natural candle/sunset warmth).

---

## 12. Particle System

- **Dust (Floating Dust, per `Invita-Visual-Identity-System.md` §21):** the finest, most ambient layer — 40-60 individual points per Scene, each barely visible individually, moving on slow, gently varied drift paths (no two particles sharing an identical path/speed) with a lifetime of 15-25 seconds per particle before fading and being replaced, maintaining a constant ambient density rather than a "burst then empty" pattern.
- **Light Particles (used specifically at the wax-seal-break moment, §8):** 8-15 slightly larger, brighter, warm-toned points, released in a single burst, each with an individual lifetime of 1-1.5 seconds — these are visually and behaviorally distinct from the ambient Dust layer (larger, brighter, finite-lifetime, event-triggered rather than continuous).
- **Floating Flowers / Leaves (used as occasional accent set-dressing per doc #3 §13, particularly relevant to Housewarming and future nature-adjacent templates):** a very small number (3-6) of larger, slower-moving botanical elements drifting gently at the edges of frame — never centered, never more than a handful visible at once, always secondary to the Scene's primary focal object.
- **Golden Particles (a warmer, slightly more luminous variant of the Dust layer, reserved for the Photo Centerpiece and Memory Scenes per doc #3 §13/§14):** density increases modestly here relative to the baseline Dust layer — roughly 1.3-1.5x the standard particle count — to reinforce these as the experience's warmest emotional peaks, without ever approaching a density that would read as "snow" or "confetti."
- **Motion rules (all particle types):** motion is generated from smooth, continuous noise-driven drift (never linear paths, never abrupt direction changes) — speed is uniformly slow (an ambient particle should take several seconds to cross a meaningful portion of the frame) — and particles never collide with, orbit, or otherwise mechanically interact with the hero object (envelope, photo frame) in a way that would read as a physics simulation rather than ambient atmosphere.
- **Lifetime:** every particle type has a defined fade-in and fade-out at the start and end of its individual lifetime (never a hard pop-in or pop-out) — the specific durations vary by type as noted above, but the fade-in/fade-out principle is universal.
- **Density governing rule:** across every particle type and every Scene, particle count is treated as a Performance Budget line item first (§19/§25 of the Engineering Blueprint) and an emotional-intensity dial second — a director wanting "more atmosphere" in a given Scene increases density only within the range validated against the mid-range-Android frame-rate target, never past it.

---

## 13. Environmental Effects

- **Fog:** per §10 — subtle, warm-tinted, depth-cueing only, never atmosphere-obscuring.
- **Atmosphere:** the combination of fog, particles (§12), and bloom (§11) together is what constitutes "atmosphere" in this system — no additional distinct atmospheric effect (haze layers, volumetric smoke) is introduced beyond this combination, keeping the atmospheric language consistent and performance-conscious.
- **Depth:** reinforced through the layered depth-of-field (§5), the particle-speed differential (§9's three-tier parallax), and fog's depth-cued falloff (§10) working together — depth in this system is always the product of several subtle, coordinated cues, never a single dramatic device.
- **Lens flare:** used exactly once in the entire flagship experience — a single, soft, restrained flare accompanying the Opening Experience's First Light beat (§4, 0.5-2.0s) — never a multi-streak, anamorphic-style flare (which would read as an action-movie cliché entirely wrong for this brand); no other Scene in the platform uses a lens flare effect, preserving its rarity and significance.
- **Light shafts:** soft, low-contrast volumetric light shafts (per `Invita-Visual-Identity-System.md` §21's "Light Rays" direction) may accompany the Opening Experience and the Memory Scene specifically, angled to match the established Golden Light direction (§11) — always soft-edged, low-opacity, and secondary to the hero object, never a dominant visual feature of the frame.

---

## 14. Scroll Choreography

Building directly on `Invita-UX-Experience-Blueprint.md` §10's stage-by-stage scroll behavior, this section specifies the actual speed/distance/depth/camera values per stage.

| Stage | Scroll Feel | Relative Speed | Camera Response | Depth Behavior |
|---|---|---|---|---|
| **Locked Stage** (Opening/Envelope, pre-touch) | Scroll disabled entirely | N/A | Static, per §4/§5 | N/A |
| **Standard Narrative Stage** (Title, Names, Invitation Line, Location, RSVP) | Lightly damped (Lenis friction coefficient tuned toward the gentler end of typical smooth-scroll settings) | 1x baseline | No camera movement — these Scenes are DOM/2D-composited, not 3D-camera-driven | Standard single-layer parallax (foreground only) |
| **Dwell Stage** (Photo Centerpiece) | Noticeably increased scroll resistance — roughly 1.4-1.6x the friction of the Standard stage | Effectively ~65-70% of baseline scroll-to-content-movement ratio | N/A (2D frame, per §9) | Full three-tier parallax per §9 |
| **Ambient Persistence Stage** (Countdown → Location transition) | Returns to Standard Narrative Stage feel | 1x baseline | N/A | Countdown panel itself remains near-static while surrounding content scrolls past it, per doc #3 §10 |
| **Resolving Stage** (Memory, Closing) | Gently increased damping beyond Standard (roughly 1.15-1.25x) | Slightly below 1x | N/A | Reduced particle-layer parallax speed differential (background particles slow further, reinforcing a settling feel) |

**Governing rule:** every scroll-speed and friction value above is chosen to reinforce doc #3 §10's narrative pacing intent (the Photo Centerpiece as the slowest, most resistant point in the entire experience) — no scroll behavior in this system is tuned for "what feels efficient," only for "what feels like the correct pace to read this specific part of the letter."

---

## 15. GSAP Timeline Strategy

- **Timeline philosophy:** GSAP owns every Scene-level cinematic sequence — anything that must happen in a precise, choreographed order regardless of user input (the envelope opening, the sequential Names Reveal, Scene-to-Scene transitions) is a GSAP timeline, per `Invita-Technical-Architecture-Engineering-Blueprint.md` §14.
- **Scene sequencing:** each Scene (per the Scene Engine, doc #5 §13) owns exactly one root GSAP timeline; that root timeline's children represent the Scene's internal beats (e.g., within the Names Reveal Scene: رەیان fades in → beat → ❤ pulses with paired chime → کاروان fades in, as three sequential timeline children with explicitly authored gap durations between them, per §21's rhythm-spacing values).
- **Animation ownership:** GSAP is responsible for: all Scene-transition choreography, all sequential text/element reveals, the envelope/seal/paper animation sequence (§6-8), and any scroll-triggered narrative pacing (via its ScrollTrigger-equivalent integration with Lenis, per doc #5 §14). GSAP is explicitly *not* responsible for: React-component-lifecycle-bound micro-interactions (button press feedback, form field focus states) — that boundary belongs to Framer Motion (§16).
- **Transition ownership:** the handoff between two Scenes (e.g., Envelope → Seal Break → Title) is authored as a single coordinated GSAP timeline spanning both the outgoing Scene's exit and the incoming Scene's entry — never as two independently-timed animations that happen to overlap by coincidence; this is what guarantees the precise, directed quality of every Scene Progression beat specified in doc #3 §11.
- **Never mix engines for one concern (restated from doc #5 §33):** a single Scene transition is never partially driven by GSAP and partially by Framer Motion — this bible's timing/easing libraries (§21-22) are deliberately engine-agnostic in their *values* precisely so that whichever engine owns a given concern can reference the same canonical duration/curve, keeping the platform's motion feeling unified regardless of which technical tool executes it.

---

## 16. Framer Motion Rules

- **Micro-interactions:** Framer Motion owns all React-component-lifecycle-bound feedback — anything that responds directly and immediately to a discrete user action on a UI element (a button, a card, a form field) rather than advancing the cinematic narrative.
- **Hover** (desktop/secondary context only, per doc #2's mobile-first mandate): a gentle brightness/glow shift on the hovered element, engaging over roughly 150-200ms — quick enough to feel responsive, subtle enough to never look like a dramatic state change.
- **Tap:** an immediate (near-zero-delay) subtle scale-down (roughly 96-98% of resting scale) on touch-down, easing back to 100% (with a very slight, brief overshoot to ~101% before settling, per the Elasticity principle in §2) over roughly 200-250ms on release — this "fast in, slightly bouncier out" pattern is the platform's signature touch-feedback signature, used consistently on every tappable element.
- **Presence** (element mount/unmount, e.g., a dialog or the RSVP form appearing): a combined opacity + slight scale/position transition (never a pure fade) over roughly 300-400ms on entry, slightly faster (~200-250ms) on exit, consistent with the general rule that entrances are given more time to be noticed than exits.
- **Cards** (e.g., the Location Card, per doc #3 §9): enter as one composed unit (matching doc #3's explicit rule against splitting a card's internal fields into separate reveal beats) via a single fade + slight upward-position transition, roughly 400-500ms, eased per §22's "Arrival Settle" curve.
- **Buttons:** in addition to the Tap behavior above, a button's resting state may include an extremely subtle, slow ambient glow-pulse (matching §11's bloom language) specifically for the RSVP call-to-action, inviting interaction without demanding it — this ambient pulse uses the same "Living Pulse" curve as the wax seal's invitation glow (§4/§22), reinforcing a consistent "this wants to be touched" visual vocabulary across the platform.

---

## 17. Gesture Experience

- **Touch:** the primary and default interaction model throughout — every gesture rule here assumes a touchscreen-first context, per `Invita-Visual-Identity-System.md` §13.
- **Long press:** not used as a distinct gesture anywhere in the flagship experience — Invita deliberately avoids gesture patterns that require guest discovery/learning; every interaction is a simple tap or scroll, consistent with the platform's "letter, not app" premise, which should require no onboarding or gesture tutorial.
- **Swipe:** functionally equivalent to scroll throughout the vertical narrative (§14) — no distinct horizontal swipe-to-navigate pattern is used in the flagship template, preserving the single-column, linear "turning pages" metaphor.
- **Gyroscope:** an optional, extremely subtle device-tilt-driven parallax response, reserved specifically for the Photo Centerpiece (§9) and Envelope (§6) Scenes — tilt input maps to a maximum of roughly 2-3° of equivalent camera/frame-highlight shift, ensuring the effect reads as ambient realism (a photograph catching light as you naturally hold your phone) rather than a gimmicky "tilt to explore" mechanic; this response is disabled entirely when the guest's reduced-motion preference is active (§20).
- **Haptic:** a single, soft haptic pulse (on supporting devices) fires at exactly two moments in the entire flagship experience — the wax seal breaking open (§8, synced to the sound cue) and RSVP submission — deliberately rare, so that when haptic feedback does occur, it reads as a marked, significant moment rather than routine UI confirmation.

---

## 18. Audio Production

- **Music style:** a solo or near-solo warm acoustic instrumental voice (piano, or a similarly restrained instrument) — no percussion, no build toward a "drop," no lyrics — composed with the same unhurried, decelerating-into-rest pacing philosophy as the visual motion language (§1-3).
- **Ambient sound:** a near-imperceptible low tonal bed underlying the Opening Experience (§4) before music formally enters, establishing atmosphere rather than melody.
- **Envelope sound:** a genuinely recorded or convincingly foley-style paper/card movement sound, timed to the flap's opening arc (§6) — must sound tactile and physical, never like a synthesized "whoosh."
- **Paper sound:** the same sonic family as the envelope sound, reused consistently for any subsequent unfolding moment (§7), reinforcing the letter metaphor sonically.
- **Particle sound:** no discrete sound is assigned to the ambient particle layer itself (§12) — particles are a visual-only atmospheric device; introducing a sound for them would clutter the audio mix around the wax-seal and paper cues, which must remain the clearest, most significant sound events in the sequence.
- **Mute transitions:** muting/unmuting is never an instant hard cut — both music and any active sound cue fade over approximately 300-500ms when the guest toggles mute, per `Invita-UX-Experience-Blueprint.md` §15's volume-transition rule.
- **Fade in:** music enters at the Envelope-emergence beat (§4, ~3.5s) at low volume, swelling gradually across the subsequent 5-8 seconds to its resting "Standard Narrative" volume level — never entering at full volume immediately.
- **Fade out:** music begins a slow decrescendo at the Memory Scene (per doc #3 §15) and resolves fully to silence by the Closing Frame — this final fade spans several seconds, mirroring the unhurried entrance and closing the audio arc symmetrically with the Opening Experience's silence-to-sound arc.

---

## 19. Performance Motion Rules

- **60 FPS target:** every animation and 3D Scene in this bible is authored against a sustained 60fps target on mid-range Android hardware (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §25) — a motion that cannot hit this target at its authored richness must be simplified (reduced particle count, simplified material, reduced shadow resolution) rather than shipped at a lower frame rate.
- **GPU-friendly:** all animated properties are restricted, wherever possible, to compositor/GPU-friendly properties (transform and opacity for DOM/Framer-Motion-driven elements; standard transform/material-property animation for 3D objects) — properties known to trigger expensive layout recalculation (animating raw width/height/top/left values, for example) are never animated directly.
- **Avoid layout shift:** every Scene's entrance/exit choreography is authored so that surrounding, non-animating content never visibly reflows or jumps as a result — an incoming element's space is reserved/anticipated before its animation begins, never causing neighboring content to shift position as a side effect.
- **Animation budget:** per Scene, a hard ceiling applies — no more than one GSAP-driven "hero" animation and the platform's standard ambient particle layer may run simultaneously (per §2's Hierarchy principle, enforced here as a technical budget); Framer Motion micro-interactions (§16) are permitted to layer on top of an active GSAP Scene animation only if they are strictly localized to a single small UI element (e.g., a button's tap feedback) and never compete with the Scene's primary motion.

---

## 20. Accessibility Motion

- **Reduced motion:** every signature sequence in this bible (the envelope's opening arc, the wax seal crack, the Photo Centerpiece's parallax and gyroscope response, all Scene transitions) has a defined, simplified reduced-motion alternative — typically replacing transform-heavy choreography with a simple, soft cross-fade of equivalent duration — activated automatically per the guest's OS-level preference, per `Invita-Technical-Architecture-Engineering-Blueprint.md` §23.
- **Alternative transitions:** in reduced-motion mode, Scene-to-Scene handoffs (§15) still occur in the same sequence and at the same overall pacing (a reduced-motion guest is never rushed through content faster than a standard guest) — only the *manner* of transition simplifies; narrative timing and content order remain fully intact.
- **Governing rule:** reduced-motion mode is never treated as a stripped-down, lesser version of the experience — it is a fully realized, calmer alternative choreography, authored with the same care as the standard motion, per `Invita-Visual-Identity-System.md` §26's explicit standard.

---

## 21. Animation Timing Library

The official duration standards referenced throughout this bible, organized by category. All values are canonical — no Scene or component authors a duration outside this library without a documented, reviewed exception.

| Category | Duration Range | Typical Use |
|---|---|---|
| **Fast** (micro-interaction) | 150–250ms | Button tap feedback, icon state changes, hover response |
| **Medium** (element reveal) | 400–600ms | Single text-element fade-in, card entrance, glass panel appearance |
| **Slow** (composed reveal) | 800ms–1.2s | Multi-element sequential reveals (e.g., one beat within the Names Reveal), photo frame entrance |
| **Hero** (signature moment) | 1.5–2.5s | The wax seal crack-to-separation, a single fold's release in the paper animation |
| **Scene** (full sequence) | 2.5–4s | A complete Scene-to-Scene transition, the full envelope-opening sequence, the full paper-reveal sequence |
| **Page/Act** (largest structural beat) | 4–8s (camera moves specifically: minimum 2s per §5) | The Opening Experience's camera settle-and-hold arc, the full Photo Centerpiece dwell-stage engagement |

**Rhythm-spacing values (gaps between sequential beats within a Slow/Hero-tier sequence):** 150–250ms between closely related sub-beats (e.g., رەیان → ❤ → کاروان), 400–600ms between more structurally distinct beats (e.g., Title fully settling before Names begins).

---

## 22. Easing Library

Named, canonical easing curves — described qualitatively here (as this is a production bible, not a code specification) so any animator or engineer implementing them in GSAP/Framer Motion produces the same felt result.

- **"Candle Bloom"** — a slow, soft ease-in with almost no initial acceleration, gradually gathering intensity — used for light/glow intensity ramps (the Opening Experience's First Light, §4).
- **"Arrival Settle"** — a standard ease-out with a very slight (1–2%) overshoot past the resting value before a quick, soft correction back to rest — the platform's default "something has gently arrived" curve, used for photo frame entrances, card entrances, and most Medium/Slow-tier reveals.
- **"Weighted Resistance"** — a curve with a pronounced slow start (simulating overcoming initial resistance/inertia) before smoothly accelerating and then decelerating into rest — used specifically for the wax seal crack and the envelope flap's opening arc, where real physical weight and resistance must be felt.
- **"Living Pulse"** — a smooth, symmetrical sine-like oscillation between two intensity values, with no sharp peak or trough — used for all ambient glow-pulse effects (the wax seal's invitation glow, the RSVP button's ambient pulse, the countdown panel's glow).
- **"Soft Fade"** — a simple, symmetrical ease-in-out with no overshoot — used for the simplest reduced-motion-mode cross-fades (§20) and for any transition where drawing attention to the motion itself (via a personality-laden curve like Arrival Settle) would be inappropriate, such as a Scrim Overlay's appearance.
- **Governing rule:** linear easing (constant velocity) is never used anywhere in this system outside of the extremely slow, near-imperceptible camera dolly moves (§5), where at such low speed the perceptual difference between eased and linear motion is negligible and simplicity is preferable.

---

## 23. Transition Library

- **Scene transitions** (the handoff between two Screen Timeline entries, per doc #3 §3): a coordinated cross-dissolve — the outgoing Scene fades and very slightly scales down/back (simulating recession into depth) while the incoming Scene fades and scales in from slightly enlarged/forward — executed as a single GSAP timeline (§15) at Scene-tier duration (§21), using the "Arrival Settle" curve for the incoming element and "Soft Fade" for the outgoing element (an asymmetric pairing: what's arriving gets personality, what's leaving recedes simply).
- **Element transitions** (a single Atom/Molecule/Organism entering or updating within an active Scene, e.g., a countdown digit changing): a simple, Medium-tier (§21) cross-fade using "Soft Fade" — element-level transitions are deliberately kept simpler and quieter than Scene-level transitions to preserve the hierarchy principle (§2) that only one tier of motion "performs" at a time.
- **Page transitions** (in the rare cases outside the primary scroll-narrative — e.g., navigating into a future Host dashboard route, per doc #5 §20): a full-screen cross-dissolve through a brief Scrim Overlay beat (per `Invita-Visual-Identity-System.md` §11.13), using "Soft Fade," at Slow-tier duration (§21) — reserved for genuine navigational context changes, never used within the guest-facing narrative experience itself, which has no traditional "pages."

---

## 24. 3D Asset Direction

Restating and production-specifying the object cast from `Invita-Visual-Identity-System.md` §21 and `Invita-UX-Experience-Blueprint.md` §13, with added modeling/finishing direction:

- **Envelope:** modeled with a slight natural asymmetry (real cardstock is never perfectly geometric) — corner and edge geometry uses soft, small-radius bevels rather than knife-sharp edges, consistent with §6's material direction.
- **Ribbon:** modeled with enough simulated cloth/cord stiffness to hold a believable draped curve at rest, but enough flexibility to show gentle movement during any handling animation — never rendered rigid (which would look like painted-on geometry) or overly soft/floppy (which would undercut the fine-gold-cord material read).
- **House:** a soft, minimal architectural silhouette rather than a fully detailed structure — massing and proportion (roofline, a suggestion of window openings glowing warmly from within, per doc #3 §13) matter far more than surface detail; the house should read correctly in silhouette alone.
- **Gift:** proportioned as a real, modestly sized gift box (never an exaggerated cube), with the ribbon (above) as its primary decorative element rather than additional surface ornamentation.
- **Flowers:** modeled with naturalistic, slightly irregular petal geometry (asymmetric, imperfect) rather than perfectly symmetrical procedural petals, reinforcing the "real botanical reference" direction over a stylized/generic "3D flower asset" read.
- **Leaves:** fine-leafed silhouettes (olive/eucalyptus-adjacent, per `Invita-Visual-Identity-System.md` §21), modeled with a slight natural curl/wave rather than perfectly flat geometry.
- **Particles:** per §12 — implemented as efficient point/instanced geometry, never individually modeled mesh objects.
- **Gold:** never modeled as a distinct "gold object" — gold is always a material applied to an edge, trim, or accent geometry (the envelope's edge trim, the ribbon, the frame edge) per the Material Library (§25); there is no standalone "gold prop" in this system.
- **Glass:** similarly always a material application (the countdown panel, the photo frame's mat, any glass-morphism surface) rather than a modeled glass object in its own right, except where a genuinely glass physical object is called for by a future template.

---

## 25. Material Library

Qualitative property specifications for every material referenced across this bible and its companion documents — the reference a technical artist tunes shader/material properties against.

- **Paper (envelope, invitation cardstock):** matte finish, low specular response, visible only as a soft sheen at grazing light angles (per §6); moderate surface roughness with fine, non-uniform micro-texture; no simulated subsurface translucency except at the very thinnest folded edges.
- **Gold (frame edges, ribbon, accents):** satin-to-polished metallic finish — high reflectivity but never mirror-perfect; always implemented as the multi-stop gradient described in `Invita-Visual-Identity-System.md` §11.4 (a brighter foil highlight, an antique-gold body tone, a darker shadow-gold recess) rather than a single flat metallic value; reflections sourced from the shared warm HDRI (§10).
- **Glass (countdown panel, frame mat, glass-morphism surfaces):** high transparency with moderate frosted/blurred internal scattering (never perfectly clear, per `Invita-Visual-Identity-System.md` §17's blur requirement); soft, low-intensity specular highlight along edges only; refraction, where simulated, is subtle rather than exaggerated/cartoonish.
- **Wax (seal):** satin finish, moderate reflectivity, slight simulated subsurface translucency at thin edges (light passing faintly through the seal's thinnest points when backlit), matte at its thickest, most opaque center.
- **Wood (reserved for future template use — e.g., a rustic Family Gathering or Festival template accent):** matte-to-satin finish with visible directional grain texture, moderate roughness, warm mid-to-dark tonal range consistent with the platform's overall warm palette — never a cool-toned or heavily lacquered/glossy wood finish.
- **Stone (reserved for future template use — e.g., a Corporate/Award Ceremony template's architectural accents):** matte, high-roughness finish with subtle fine-grain texture, cool-neutral-to-warm-neutral tonal range depending on specific stone reference — used sparingly and only where a template's specific context calls for it (e.g., an architectural, formal setting).
- **Marble (reserved for future template use — e.g., a Wedding or Grand Opening template's formal setting accents):** semi-polished finish with moderate reflectivity and subtle veining texture, warm-neutral tonal range to stay consistent with the platform's overall warmth even in a more formal material register.
- **Fabric (ribbon alternative material, ambient drape elements):** matte, high-roughness, soft-shadowed finish with visible weave-scale texture at close range, moderate flexibility in any simulated drape/movement.
- **Governing rule across all materials:** every material's reflectivity and roughness values are tuned against the same shared warm HDRI (§10) and the same three-light rig (§11) — a material authored in isolation without checking it against this shared lighting context is not considered finished, since consistency across materials depends entirely on shared lighting, not on any single material's properties alone.

---

## 26. Lighting Presets

Named presets a director selects per Scene, all derived from the same Golden Light/Ambient/Bounce rig described in §11 — these are calibrated variations, not independent lighting setups.

- **Morning:** key light color temperature toward the cooler end of the platform's allowed range (~3800-4000K), slightly higher intensity, crisper (smaller penumbra) shadows — used sparingly, only where a template's narrative specifically calls for a morning setting.
- **Golden Hour (the platform default, per §11):** key light at 2700-3200K, warm, low-angle, soft wide-penumbra shadows — the resting preset for the flagship Housewarming experience and the default for any future template unless its narrative specifically calls for a different time of day.
- **Evening:** key light intensity reduced moderately, temperature held warm (2700-2900K), ambient fill slightly increased to compensate for the lower key intensity, keeping the scene legible without brightening it back toward a daytime feel.
- **Night:** the Deep/Dark theme mode (per `Invita-Technical-Architecture-Engineering-Blueprint.md` §10) — key light intensity lowest in this preset set, with the scene's warmth carried primarily by localized glow sources (the seal, the countdown panel, any lit "window" details on the House silhouette) rather than a broad ambient wash — used for the Opening Experience's initial dark state and for any evening/formal-occasion template variant.
- **Indoor Hall** (relevant to the Location Scene referencing هۆڵی ئۆسکار, and to future Corporate/Award Ceremony templates): a slightly more even, moderate-intensity ambient fill relative to Golden Hour's more dramatic key/fill contrast, simulating a warmly-lit interior venue rather than a single strong directional source — key light warmth is retained, but its directionality is softened.
- **Outdoor Garden** (relevant to Housewarming's overall warm/natural mood per `Invita-Visual-Identity-System.md` §8, and to future Festival/Family Gathering templates): the strongest key/ambient contrast of any preset, with the Golden Light preset's low-angle directionality most pronounced, and the botanical Particle/Flower/Leaf elements (§12/§24) most prominent.

---

## 27. Quality Standards

Cinematic quality, for Invita, is measured against five concrete targets rather than a subjective impression alone:

1. **Frame-rate consistency:** sustained 60fps (§19) on the platform's defined mid-range-Android reference hardware, for every Scene, with no exceptions granted for "just this one richer Scene."
2. **Motion continuity:** no animation in the platform ever exhibits a visible pop, jump, or discontinuity between its start state and its animated state — every property animated must interpolate smoothly across its full range.
3. **Lighting consistency:** any two objects appearing in the same Scene, or in adjacent Scenes within the same experience, must share visibly consistent light direction, color temperature, and shadow softness (per §10-11's shared-rig requirement) — a lighting mismatch between objects is treated as a defect equivalent in severity to a color mismatch in the Visual Identity System.
4. **Restraint ratio:** across a full guest-journey playthrough, no more than roughly 15-20% of total experience duration should feature more than one simultaneously active foreground animation (per §2's Hierarchy principle) — this is a measurable proxy for "never over-animate" that a producer can actually audit against a recorded playthrough.
5. **Material believability:** every rendered material (§25), viewed in isolation, should be identifiable by a neutral observer as "paper," "gold," "glass," or "wax" without being told which material it's meant to represent — if a material is ambiguous or reads as generic "3D render," it fails this standard regardless of how polished it otherwise looks.

---

## 28. Motion Anti-Patterns

- **Never let the camera whip, cut instantly, or orbit around a subject** — per §5, only static holds and slow single-axis dollies are permitted; any faster or more elaborate camera behavior is an immediate rejection under §1's "never flashy" test.
- **Never allow more than one hero-tier animation to run simultaneously in a single Scene** — per §2/§19, this is both a design principle and a hard performance/attention budget.
- **Never animate raw layout properties (width, height, top, left) instead of transform/opacity** — this is a Performance Motion Rule violation (§19) with no exception.
- **Never use bounce/overshoot easing on rigid materials** (gold, glass, stone) or on Scene-level narrative transitions — elasticity (§2, §22's "Arrival Settle" small overshoot excepted) is reserved for genuinely flexible materials and touch-feedback micro-interactions only.
- **Never apply a Ken Burns zoom, pan, or crop-reveal to the `invita.jpg` photograph or any future host photo** — per §9's absolute rule, only the frame moves; the photograph itself never animates internally.
- **Never introduce a second lens flare, or reuse the Opening Experience's flare elsewhere** — per §13, this effect's rarity is what preserves its significance.
- **Never let particle density scale up "for excitement" without a corresponding Performance Budget review** — per §12/§19, density is a performance line item first.
- **Never ship a Scene's signature animation without an authored reduced-motion alternative** — per §20, this is launch-blocking, not later polish.
- **Never use a countdown digit "flip" or slot-machine-style mechanical transition** — countdown numerals cross-fade only, per `Invita-UX-Experience-Blueprint.md` §8, never a gambling-adjacent mechanical animation pattern.
- **Never mix GSAP and Framer Motion within a single Scene-level transition** — per §15, engine ownership boundaries are structural, not a matter of convenience.
- **Never let a haptic pulse fire on routine, non-significant interactions** — per §17, haptic feedback's rarity (two moments in the entire flagship experience) is what gives it meaning; diluting it into a generic "tap feedback" mechanism is a direct violation.
- **Never author a motion whose primary goal is to showcase technical capability** (an elaborate 3D flourish, a complex simultaneous multi-object choreography) rather than to serve the specific emotional beat it's placed in, per §1's foundational test.

---

## 29. Production Checklist

Before any individual animation, transition, or 3D Scene is approved for production, it must pass every item below:

1. **Traceability:** does this motion correspond to a specific beat named in `Invita-UX-Experience-Blueprint.md`'s Screen Timeline or Scene Progression? (If not, question why it exists at all.)
2. **Hierarchy check:** at every moment during this motion, is there exactly one active hero-tier element, with all other on-screen motion at ambient/ambient-plus levels only? (§2, §19)
3. **Timing check:** does the motion's duration match the appropriate tier in the Animation Timing Library (§21), and does its easing curve match a named entry in the Easing Library (§22)?
4. **Physical believability check:** does the motion respect the object's implied weight, mass, and material (§2, §25)? Would a neutral viewer describe it as "natural" rather than "animated"?
5. **Lighting consistency check:** does this motion's lighting/shadow behavior match the shared rig (§10-11) exactly, with no independently-lit or independently-shadowed object?
6. **Camera compliance check:** if a camera move is involved, does it use only a static hold or single-axis dolly, taking no less than 2 seconds (§5)?
7. **Performance check:** has this motion/Scene been verified to sustain 60fps on the mid-range-Android reference profile (§19, §27)?
8. **Reduced-motion check:** does an authored, equally complete reduced-motion alternative exist (§20)?
9. **Restraint check ("never flashy" test):** would a neutral observer describe this motion using any of the words in §28's anti-pattern list? If yes, it fails, regardless of how well it otherwise scores above.
10. **Emotional check:** does this motion produce the specific target emotion named for its corresponding beat in `Invita-UX-Experience-Blueprint.md` §18's Emotional Journey map — and would رەیان or کاروان feel that this moment honored the invitation they're sending?

Only a motion that passes all ten items may be marked approved.

---

## 30. Final Motion Manifesto

Somewhere between the wax seal and the last soft fade to silence, a guest should stop perceiving that anything was "animated" at all — they should simply feel that they were let gently, deliberately, into a moment that belonged to رەیان and کاروان, and that every second of that letting-in was considered on their behalf.

That is the only standard this bible exists to protect. Not technical sophistication — a camera that never learns to whip, particles that never learn to dazzle, a wax seal that takes its time to crack because real wax does. Every principle, every millisecond, every named easing curve in this document is here so that restraint can be executed with total precision, rather than mistaken for a lack of ambition.

A luxury brand is recognized by what it refuses to do as much as by what it does. Invita's motion refuses to rush, refuses to show off, refuses to compete with itself for attention — and in that refusal, finds the exact cinematic warmth that makes a housewarming invitation, a wedding invitation, a graduation invitation not yet imagined, all feel unmistakably like they were sent by someone who cared enough to get every second right.

Build it slow. Build it soft. Build it so it still feels timeless the day the twelfth template ships, and the day after that.

---

*End of Motion & 3D Production Bible. Together with `Invita-Foundation-Document.md`, `Invita-Visual-Identity-System.md`, `Invita-UX-Experience-Blueprint.md`, `Invita-Content-Copywriting-Localization-Bible.md`, and `Invita-Technical-Architecture-Engineering-Blueprint.md`, this document completes the full pre-development foundation for Invita. No animation, camera move, or 3D asset should be produced without passing the checklist in §29 against the standards set here.*
