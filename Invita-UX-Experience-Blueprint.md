# INVITA
## بانگێشت نامە
### UX Blueprint & Experience Specification
#### Flagship Worked Example: Housewarming — رەیان ❤ کاروان

**Version:** 1.0 — Experience Bible
**Companion documents:** `Invita-Foundation-Document.md` (strategy/architecture), `Invita-Visual-Identity-System.md` (visual design system — color, typography, materials, 3D art direction, motion/audio rules). This document choreographs those systems into an exact, second-by-second guest experience.
**Worked example used throughout:** a Housewarming invitation hosted by رەیان and کاروان, celebrating their new home.
- Names: **رەیان ❤ کاروان**
- Date: **٢١ / ٧ / ٢٠٢٦**
- Location: **سلێمانی — هۆڵی ئۆسکار**
- Time: **کاتژمێر ٧ی شەو**
- Centerpiece photo: the existing `invita.jpg` (a candid, sunlit portrait) — displayed uncropped, full-face, museum-quality, per the Photo Frame System.

**Language:** the entire experience is Kurdish Sorani, right-to-left. This document is written in English for documentation purposes only.

---

## How to Use This Document

Document #1 tells you *why* Invita exists. Document #2 tells you *what it looks like*. This document tells you *what happens, second by second*. Nowhere in this document should a new color, font, or material be introduced — every visual reference here points back to a rule already established in `Invita-Visual-Identity-System.md`. What this document adds is **time**: sequencing, pacing, cause-and-effect, and emotional choreography.

---

## Table of Contents

1. Overall User Journey · 2. Storytelling Structure · 3. Screen Timeline · 4. Opening Experience (First 15 Seconds) · 5. Envelope Experience · 6. Invitation Reveal · 7. Photo Experience · 8. Countdown Experience · 9. Location Experience · 10. Scroll Storytelling · 11. Scene Progression · 12. Motion Language · 13. Three.js Scene Direction · 14. Lighting Direction · 15. Audio Timeline · 16. Touch Experience · 17. Reading Experience · 18. Emotional Journey · 19. Visual Hierarchy · 20. Attention Management · 21. Photo Composition Rules · 22. Future Template Adaptation · 23. Accessibility Experience · 24. Mobile Experience Rules · 25. Things UX Designers Must Never Do · 26. Final Experience Manifesto

---

## 1. Overall User Journey

The guest's journey is not a "site visit" — it is the experience of *receiving and opening a letter that happens to be alive*. From the instant the link is tapped to the moment the guest sets the phone down, the journey has a single emotional throughline: **anticipation → intimacy → celebration → orientation → keepsake → farewell.**

**The full arc, moment by moment:**

- **Before anything loads**, the guest has already received the link — likely through a personal message from رەیان or کاروان themselves. This means the guest arrives *pre-warmed* with anticipation; the experience's job in its first seconds is not to build interest from zero, but to *honor* the anticipation already present.
- **The tap** opens not a webpage but a dim, quiet space — darkness first, because darkness holds anticipation better than any visual.
- **Arrival (Act I)** delivers the emotional promise: something beautiful is about to be given to *you specifically*. A sealed envelope, warmly lit, floating gently, invites a single instinctive gesture — touch it, and it begins to open.
- **Invitation (Act II)** is the intimate core: the guest learns *who* is celebrating and *what* is being celebrated, paced like reading a letter line by line, not scanning a page.
- **Celebration (Act III)** brings the emotional payload to life — the invita.jpg photograph, framed and lit as a museum piece, becomes the experience's emotional centerpiece, followed by the countdown that turns "someday" into a felt, ticking anticipation.
- **Location (Act IV)** answers "where and when do I need to be," but keeps the same warmth — سلێمانی، هۆڵی ئۆسکار، کاتژمێر ٧ی شەو are presented as part of the story, not a form.
- **Memory (Act V)** gives the guest a reason to linger — a moment designed to be screenshotted, saved, or revisited, so the invitation continues to live in the guest's own gallery.
- **Closing (Act VI)** lets the guest leave gracefully — a soft farewell frame rather than an abrupt end, with a clear, dignified path to respond (RSVP) if they have not already.
- **After leaving**, the link remains a living object: reopening it later (as the date approaches) should feel like returning to a kept letter, not a stale, one-time page.

**Emotional transition logic:** each Act ends by *resolving* one emotional beat while *opening* the next question in the guest's mind. Arrival resolves "something is coming" into "I've been invited," which opens "by whom, to what?" — answered by Invitation. Invitation resolves into "I want to see them," which opens into the Photo/Celebration beat. Celebration resolves into "when is this," which opens Location. Location resolves into "I'll be there," which closes into Memory and Closing. No Act should ever open a question the *next* Act fails to answer — this failure would register subconsciously as the story losing its thread.

---

## 2. Storytelling Structure

Invita's flagship Housewarming experience is told in **six acts**, an expansion of the three-act "letter" structure from `Invita-Visual-Identity-System.md` §10, giving the practical information (location, memory, closing) their own dedicated emotional space rather than compressing everything into a single "details" act.

### Act I — Arrival
**Purpose:** establish anticipation and place the guest inside the world of the letter before any information is given. This act contains no names, no date, no location — only atmosphere, light, and a single sealed object. Its job is purely emotional priming.

### Act II — Invitation
**Purpose:** deliver the letter's core truth — who is inviting the guest, and to what. رەیان ❤ کاروان and the words "ماڵئاوایی" (housewarming) or equivalent Sorani framing are revealed here, slowly, as the emotional heart of the entire experience. This act answers "who and why."

### Act III — Celebration
**Purpose:** bring the couple and their new home to life visually and emotionally. The invita.jpg photograph is the centerpiece of this act — presented as a museum-quality framed piece — followed by the countdown, which converts the announced date into a living, ticking anticipation. This act answers "what does this mean to them, and how soon."

### Act IV — Location
**Purpose:** deliver the practical logistics (سلێمانی، هۆڵی ئۆسکار، کاتژمێر ٧ی شەو) with full visual dignity — this act must never feel like "now the boring part starts." It answers "where, and when, exactly."

### Act V — Memory
**Purpose:** give the guest a reason to pause, breathe, and keep something — a final, quiet, beautiful frame (potentially a second, softer treatment of the photograph, or a closing illustrative/3D moment — flowers, soft light) designed to be the "screenshot moment." It answers "what do I take away from this."

### Act VI — Closing
**Purpose:** a graceful farewell and a clear, low-pressure call to respond (RSVP), plus the platform's minimal credit line. It answers "what do I do now, and how do I leave."

---

## 3. Screen Timeline

Each "screen" below is a narrative unit reached primarily by scroll (see §10), not by discrete page navigation. Reading times are guidance for pacing content density, not hard limits enforced on the guest.

| # | Screen | Act | Purpose | Emotion | Visual Focus | Animation | Transition In | Audio | Reading Time | Scroll Behavior |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Black Hold | I | Prime anticipation before any content | Held breath | A single point of soft warm light in darkness | Slow light bloom breathing in and out | Fade from true black | Silence, then a distant soft tone | ~2s | Locked (no scroll yet) |
| 2 | Sealed Envelope | I | Present the letter as a physical, precious object | Anticipation | Floating envelope with wax seal, softly lit | Gentle floating/hover motion; soft glow pulse inviting touch | Envelope fades/scales in from the light point | Ambient warm tone sustains; soft rising swell begins | ~3–4s (touch-driven, not timed) | Locked until guest taps/swipes the seal |
| 3 | Seal Break & Open | I → II | The moment of "opening" — the emotional hinge of the whole experience | Delight, intimacy | Wax seal cracking; envelope flap lifting | Seal crack (weighted motion) → flap opens → soft inner glow escapes | Direct continuation from Screen 2 via gesture | Paper/wax opening sound (§15); music swells gently | ~2s | Gesture-triggered, then auto-continues |
| 4 | Housewarming Title | II | Name the occasion | Warmth, welcome | Doran Bold occasion title, centered, generously spaced | Soft upward fade, letters settling gently into place | Cross-dissolve from envelope interior glow | Music settles to a warm, steady bed | ~3s | First scrollable beat |
| 5 | Names Reveal | II | Introduce the hosts as the emotional center | Personal warmth, intimacy | رەیان ❤ کاروان in Display-tier Doran Bold, ceremonial gold divider beneath | Names fade in sequentially (رەیان → ❤ glow pulse → کاروان), not simultaneously | Gentle upward reveal tied to scroll | Soft chime precisely as ❤ glows | ~4s | Scroll-paced reveal |
| 6 | Invitation Line | II | A short, warm sentence of invitation in Sorani (e.g., a formal housewarming invitation line) | Being personally chosen | Body Large Doran Medium, generous line-height | Line-by-line fade, one phrase at a time | Continues scroll momentum from Screen 5 | Music remains steady, low | ~5–6s (kept brief per §17) | Scroll-paced, one phrase per scroll increment |
| 7 | Photo Centerpiece | III | Present the couple as real, radiant people — the emotional peak of the experience | Awe, warmth, recognition | Framed invita.jpg, full-bleed within its gold/glass frame, gentle parallax | Frame and glow fade/scale in; subtle parallax on scroll; soft ambient particles drift past | Photo frame rises and settles with a soft depth-cued motion | Music reaches its warmest, fullest moment here | ~6–8s (the longest deliberate pause in the experience) | Scroll slows narrative pace here deliberately (see §10) |
| 8 | Countdown | III | Convert the date into felt anticipation | Excitement tempered by elegance | Glass countdown panel, tabular Doran Bold numerals counting to ٢١/٧/٢٠٢٦ | Digits update with a soft cross-fade (never a mechanical flip); panel has a slow ambient glow pulse | Rises gently from beneath the photo, as if surfacing from it | Soft, sparse tick-adjacent tone only on whole-day changes, otherwise silent | ~3–4s initial read, persists as ambient element | Scroll-anchored; may persist as a subtle floating element into Act IV |
| 9 | Location Card | IV | Deliver where and when with full dignity | Grounded anticipation, practical warmth | Glass detail card: سلێمانی، هۆڵی ئۆسکار، کاتژمێر ٧ی شەو, with a gold location icon | Card fades/scales in as a single composed unit, not field-by-field | Continues scroll from Countdown | Music softens slightly to foreground the informational moment without losing warmth | ~4–5s | Scroll-paced; card may offer a tap-to-expand map (see §9, §16) |
| 10 | RSVP Invitation | IV → VI | Invite the guest to respond | Warm responsibility, ease | A single, clear, dignified RSVP call-to-action | Gentle glow pulse on the action element to invite (not demand) interaction | Rises after Location Card settles | Music holds steady, warm bed | ~3s | Scroll-paced |
| 11 | Memory Frame | V | Give the guest a quiet, beautiful moment to keep | Tenderness, nostalgia | A softer, closing treatment — a secondary crop or lit moment of the photograph, or ambient flowers/light with the couple's names once more | Slow bloom/fade; ambient particles increase very slightly | Cross-dissolve from RSVP screen | Music begins its gentle decrescendo | ~5s | Scroll-paced, deliberately slow |
| 12 | Closing Frame | VI | Graceful farewell | Warm closure | Minimal Doran Medium closing line + platform credit, softly lit | Slow fade to a settled, quiet final frame (not to black — to soft light, mirroring Screen 1's opening warmth) | Cross-dissolve from Memory Frame | Music resolves fully to silence | ~3s | End of scrollable content |

---

## 4. Opening Experience — The First 15 Seconds

Every second of the opening is choreographed deliberately. This is the single most important sequence in the entire product — it sets the emotional contract for everything that follows.

- **0.0s – 0.5s — True Black.** The screen is fully dark the instant the link opens, before any asset is perceptible. This half-second of held darkness is intentional silence, not a loading state — it signals "something is about to be given to you," echoing the moment before a letter is opened by candlelight.
- **0.5s – 2.0s — First Light.** A single, small, warm point of light begins to bloom softly at the center of the frame (per the Golden Light/Soft Bloom rules in doc #2 §22), breathing gently in intensity — the visual equivalent of a slow inhale. No sound yet beyond a near-imperceptible low ambient tone beginning to rise from silence.
- **2.0s – 3.5s — Particles Awaken.** Fine, soft-focus floating particles (per doc #2 §21's Particles/Floating Dust direction) begin drifting gently into the frame around the light source, establishing depth and atmosphere — as though the guest's eyes are adjusting to a warmly lit room.
- **3.5s – 6.0s — The Envelope Emerges.** The sealed envelope (§5) fades and gently scales into view from within the light, as if the light itself resolved into the object. It settles into a slow, continuous floating motion. Music (a solo, warm instrumental voice — see §15) enters here for the first time, quiet and sparse.
- **6.0s – 9.0s — Camera Settles, Light Confirms Direction.** The implied camera (see §13) completes a very slow, minimal drift/settle toward its resting framing of the envelope — this is the only camera movement in the entire opening, and it is nearly imperceptible in speed, existing only to give the scene a sense of a real, breathing space rather than a static image. The Golden Light source fully establishes its direction, casting a soft, consistent highlight along the envelope's edge and a matching soft shadow beneath it.
- **9.0s – 12.0s — Invitation to Touch.** The envelope's wax seal begins a very slow, soft glow-pulse (per doc #2 §16's "Golden Glow" and icon-animation rules) — the experience's first and only explicit invitation to act. No text or instruction is ever shown ("tap here"); the glow pulse alone, combined with the seal's raised, dimensional presence, communicates affordance.
- **12.0s – 15.0s — Held Anticipation.** If the guest has not yet touched the seal, the scene simply continues to breathe (particles drifting, light pulsing, envelope floating) indefinitely — there is no impatience mechanic, no forced auto-advance, no skip prompt. The experience is content to wait, exactly as a real letter waits to be opened. The moment the guest touches the seal, Screen 3 (§3) begins immediately.

**Why this pacing:** 15 seconds is long by typical "app" standards, and that is the point — this opening actively teaches the guest, within the first breath of the experience, that Invita does not rush. Every subsequent pacing decision in the experience is calibrated against the patience established in these first 15 seconds.

---

## 5. Envelope Experience

- **Size:** proportioned as a real, formal invitation envelope would be — notably larger relative to the frame than a utilitarian icon would be, since it is presented as *the* object of the opening scene, not a decorative accent.
- **Material:** matte, fine cardstock in Invita Ivory (doc #2 §11.1) with a subtle paper-fiber texture visible only up close — never glossy, never plastic-looking (doc #2 §21's "never cartoonish" rule applies fully).
- **Paper Texture:** fine, irregular fiber grain, visible primarily through how it subtly breaks up the Golden Light's reflection across the surface — texture is felt through lighting interaction, not through an overlaid graphic pattern.
- **Wax Seal:** matte-to-satin Dusk Plum or Ink-toned wax (doc #2 §21), bearing a simple monogram-style mark — positioned at the visual and physical center of the envelope's flap, exactly where a real wax seal would sit.
- **Floating Movement:** a continuous, extremely slow vertical drift (rise and fall) plus an almost imperceptible slow rotation — enough to read as "alive" and weightless, never fast enough to look animated in a playful/bouncy sense.
- **Opening Animation:** on touch, the seal cracks along a natural fracture line with a weighted, slightly hesitant motion (mimicking real wax resistance) before fully separating; the flap then lifts on a believable hinge arc, slower at the start and accelerating slightly as it opens (natural physical motion, not a linear or mechanical unfold).
- **Paper Unfolding:** if the invitation content is depicted as unfolding paper within the envelope (rather than the envelope simply revealing a scene behind it), the unfold follows the same soft, weighted easing — each fold releasing in sequence, never all at once.
- **Light Interaction:** as the flap lifts, warm interior light escapes from within the envelope, growing in intensity and softly illuminating the surrounding particle field — this escaping light is the visual bridge into Act II.
- **Shadows:** a soft Floating Shadow (doc #2 §16) beneath the envelope throughout, growing very slightly softer/wider as the envelope "lifts" emotionally into the opening moment.
- **Depth:** achieved through the layering established in doc #2 §23 — a softly blurred particle/light background behind the envelope, the envelope itself in sharp focus, and (once opened) an even brighter, softer-focused glow receding behind the flap, suggesting depth the guest is about to move into.
- **Emotional Impact:** this is the single moment in the entire experience most analogous to physically receiving and opening a real letter — every material and motion decision here exists to make that metaphor as convincing as possible, because the credibility of the entire "letter, not app" premise depends on this moment landing correctly.

---

## 6. Invitation Reveal

The reveal of the invitation's core content (Screens 4–6) is built entirely from the Doran type scale in doc #2 §12.1, sequenced so that each element earns its own moment rather than appearing as a single information block.

- **Housewarming Title Reveal:** the occasion title (e.g., the Sorani phrase for "housewarming"/new-home celebration) appears first, in Hero-tier Doran Bold, centered, with generous letter-spacing (per doc #2 §12.2's opened-tracking rule for large display text). It fades upward gently, as if settling onto the page rather than snapping into place. This element alone occupies its own screen moment — it is never revealed simultaneously with the names.
- **Names Reveal:** رەیان and کاروان are revealed at Display tier (the largest, most spacious tier in the entire type system, per doc #2 §12.1), confirming that in this system, as specified, a name is given the same weight and care as any other Display-tier content. The reveal sequence is: رەیان fades in first → a brief held beat → the ❤ glyph appears with a soft Golden Glow pulse (doc #2 §16) and a paired soft chime (§15) → کاروان fades in. This sequencing turns a static "Name & Name" line into a small, felt love story beat, not a data field.
- **Date Reveal (initial mention):** the date ٢١/٧/٢٠٢٦ is not front-loaded here — a brief, warm invitation line (Screen 6) may reference "this summer" or an equivalent Sorani phrase without stating the full numeric date, reserving the specific date's full visual presentation for the Countdown (Act III, §8), where it can be given its own dedicated emotional moment rather than being buried in the Act II reveal.
- **Governing rule:** no two of {Title, Names, Invitation Line} ever animate into view at the same time — each is a distinct, sequential beat, consistent with doc #2 §6's "one focal point at a time" principle.

---

## 7. Photo Experience

The `invita.jpg` photograph is the emotional peak of Act III and, arguably, of the entire experience — every choice here should be made with the awareness that this is the single image guests are most likely to linger on, screenshot, or associate with the invitation afterward.

- **Frame:** the exact Photo Frame System specified in doc #2 §18 — outer Golden Glow, thin gradient-built Antique Gold edge, narrow glass mat, then the photograph itself with minimal border radius. No filter, vignette, or color grade is applied on top of the source photograph; its natural, candid, sunlit quality (per the Foundation Document's imagery direction) is preserved exactly as captured.
- **Glass:** the narrow glass mat band between gold edge and photo (doc #2 §11.7/§17) — subtle enough to never obscure the image, present enough to give the frame genuine dimensionality.
- **Gold:** the frame's gold edge is the only gold element on this entire screen — reserved deliberately, so it reads as a considered, singular framing gesture rather than a decorative border repeated elsewhere on the same screen.
- **Shadow:** a Floating Shadow (doc #2 §16), wide and soft, seats the framed photograph as an object gently elevated above the page — reinforcing that this is presented as art, not as an inline content image.
- **Movement:** the frame enters with a slow scale/fade-in, settling with a very slight overshoot-and-settle (a soft, natural "landing" motion, not a bounce) to communicate weight and presence. Once settled, a subtle parallax shift ties the photo's position very slightly to scroll input, giving a sense of the photograph existing in real depth rather than being flatly pasted to the screen.
- **Lighting:** the frame and its surrounding particle atmosphere pick up the same Golden Light direction established from the Opening Experience (§4) onward — this photo, more than any other element, should feel like it is being held up to warm, late-afternoon light.
- **Reflection:** a very soft, subtle highlight along the frame's top edge only (per doc #2 §17's reflection rule) — never a reflection effect applied across the photograph itself, which would compromise the photograph's own integrity and legibility.
- **Animation:** beyond the entrance and parallax described above, the photograph itself is never animated, filtered, or manipulated (no Ken Burns zoom, no cropping reveal) — the photograph is treated with the same restraint as museum-displayed photography: lit and framed beautifully, then left alone.
- **Scroll Interaction:** this screen is deliberately the slowest-paced scroll segment in the entire experience (see §10) — scroll velocity is gently damped here, extending the guest's dwell time on this single frame before the story continues into the Countdown.
- **Face and Composition Integrity:** per the explicit requirement, faces are never cropped, obscured by UI chrome, or partially hidden behind gold/glass framing elements — the frame is sized and positioned specifically around the photograph's existing composition, never the reverse.

---

## 8. Countdown Experience

- **Position:** appears directly beneath the Photo Centerpiece, visually "surfacing" from it (a continuation of the same scroll movement, not a hard cut to a new, disconnected screen) — reinforcing that the countdown is counting down to a moment *with* رەیان and کاروان, not an abstract clock.
- **Animation:** presented within a glass panel (doc #2 §11.7); numeral changes use a soft cross-fade between values rather than a mechanical digit-flip or slot-machine roll, consistent with the system's "never mechanical" motion rule (§12). The panel itself carries a slow, continuous, low-intensity Golden Glow pulse (doc #2 §16), as though the countdown itself were gently alive.
- **Glass Effect:** Light Glass fill (per doc #2 §11.7/§17) with the standard hairline gold-tinted border and top-edge highlight — visually related to, but slightly smaller/quieter than, the Location Card's glass treatment (§9), since the countdown is a persistent ambient companion rather than a one-time information reveal.
- **Behavior:** counts down toward ٢١ / ٧ / ٢٠٢٦ using tabular Doran Bold numerals (doc #2 §12.1) so digit changes never shift surrounding layout; per the RTL/numeral convention (doc #2 §12.3), numerals are set left-to-right within the otherwise right-to-left Sorani interface. The countdown may persist as a small, quiet floating element as the guest continues scrolling into Act IV, giving continuity between "when" (Countdown) and "where" (Location).
- **Emotion:** the countdown's purpose is to convert an abstract future date into a felt, ticking anticipation — its tone is warm excitement, not urgency or pressure; it must never adopt e-commerce "flash sale" countdown conventions (no red accents, no aggressive pulsing, no bold "hurry" framing).

---

## 9. Location Experience

- **Location Presentation:** سلێمانی and هۆڵی ئۆسکار are presented together as a single composed detail card (doc #2 §11.6 Elevated Surface / §17 glass treatment), city and venue given clearly distinct type weight tiers (Card Title for the venue, Body for the city) so the hierarchy of "which specific place" is immediately legible.
- **Map Button:** a single, restrained call-to-action (Button-tier Doran Bold per doc #2 §12.1) allowing the guest to open the venue location in their device's map application — presented as a secondary, supporting action beneath the location text, never as the visually dominant element of the card.
- **Time:** کاتژمێر ٧ی شەو is presented adjacent to the date (persisting from the Countdown, §8) within the same card, using the Dates/Location type tier — time and place are shown together as one complete answer to "when and where," never split across separate cards.
- **Icons:** a single restrained gold-treated icon (doc #2 §19's "ceremonial icon" exception) marks the location line — e.g., a fine-line location-pin glyph — and a matching fine-line clock glyph marks the time line; both icons share the same stroke weight, size, and warm gold tone, reinforcing that they belong to the same considered detail card rather than being pulled from an inconsistent icon set.
- **Card Composition Rule:** the entire Location Card animates in and is read as one composed object (per §6's title/name sequencing logic) — venue, city, time, and the map action do not each animate in separately; only the card as a whole enters with a single fade/scale gesture, since splitting this into multiple separate reveal beats would slow down what is meant to be efficiently practical information, delivered with dignity but without unnecessary ceremony.

---

## 10. Scroll Storytelling

Scroll in Invita is never a generic "move down the page" gesture — it is the mechanism by which the guest turns the pages of the letter. Every scroll increment must correspond to genuine narrative advancement; there is no purely decorative parallax or filler content anywhere in the experience.

**Stage-by-stage scroll behavior:**

- **Locked Stage (Screens 1–3):** scroll is disabled entirely during the Opening Experience and envelope-opening sequence — this sequence is gesture-triggered (tap the seal), not scroll-triggered, because the emotional weight of opening a sealed letter should not be diluted into an ordinary scroll gesture.
- **Standard Narrative Stage (Screens 4–6, 9–10):** scroll advances the story at a natural, lightly-damped pace (a soft friction curve applied to raw scroll input, per doc #2 §24) — each scroll increment reveals the next sequential beat (Title, then Names, then Invitation Line, etc.), never multiple beats simultaneously.
- **Dwell Stage (Screen 7, the Photo Centerpiece):** scroll velocity is deliberately and noticeably slowed here — the single point in the entire experience where scroll "resistance" is highest, extending dwell time on the photograph intentionally, consistent with §7's instruction that this is the emotional peak.
- **Ambient Persistence Stage (Screen 8, the Countdown):** the countdown may remain gently present/anchored across the transition into Act IV, rather than disappearing sharply, so that "when" and "where" feel like one continuous thought rather than two disconnected screens.
- **Resolving Stage (Screens 11–12):** scroll pace gently decelerates further into the Memory and Closing screens, mirroring the emotional decrescendo of the Audio Timeline (§15) — the experience should feel like it is settling down, not stopping abruptly.
- **Rule against decoration:** if a proposed scroll-linked effect (e.g., a background element drifting at a different speed than foreground content) does not serve to reinforce depth (doc #2 §23) or pace the narrative, it is cut — scroll-linked motion is always in service of storytelling or material depth, never added purely because a scroll-linked effect is technically possible.

---

## 11. Scene Progression

A scene-by-scene account of what is present, what disappears, what appears, and why — the connective tissue between the Screen Timeline (§3) and the Motion Language (§12).

1. **Black Hold → First Light:** nothing exists yet → a single warm point of light appears. *Why:* establishes that everything to follow will emerge from warmth, not from a default "loaded" state.
2. **First Light → Envelope:** the point of light resolves into the envelope; particles that were drifting freely now visibly orbit/settle around the envelope. *Why:* teaches the guest, wordlessly, that the light *was* the envelope, i.e., this letter is the source of the experience's warmth.
3. **Envelope → Seal Break:** the envelope itself remains, but its wax seal fractures and its flap lifts; escaping interior light begins to dominate the frame. *Why:* the physical object is preserved (nothing jarring is removed) while its content becomes newly accessible — this continuity is what makes the "opening" feel real rather than like a scene-cut.
4. **Seal Break → Housewarming Title:** the envelope's physical form fades entirely into soft light/particles; the Doran Bold occasion title emerges from that light. *Why:* the envelope has served its purpose (delivering anticipation) and steps aside entirely so the letter's actual content can take full visual focus — nothing should compete with the Title for attention at this moment.
5. **Title → Names:** the Title fades/recedes upward and slightly back (depth cue) as رەیان ❤ کاروان rises to take the now-vacated primary focal position. *Why:* preserves the "one focal point" rule — the Title must visibly cede the stage before the Names claim it.
6. **Names → Invitation Line:** Names settle into a smaller, secondary position (still visible, no longer primary-scale) as the Invitation Line phrases enter sequentially. *Why:* keeps the emotional anchor (the couple's names) gently present while allowing new information to take the primary role, avoiding an abrupt "the names are gone now" discontinuity.
7. **Invitation Line → Photo Centerpiece:** text elements recede/fade as the framed photograph rises into the dominant position, larger and more visually weighted than anything preceding it. *Why:* signals unambiguously that this is the experience's emotional peak — nothing before it was allowed this much visual weight.
8. **Photo → Countdown:** the photograph settles into a slightly reduced, ambient presence (or fully recedes, depending on final pacing choice made by the design team, with the glass Countdown panel surfacing prominently in its place. *Why:* completes the transition from "who/what" (the photo) to "when" (the countdown), continuing the emotional momentum the photo built rather than resetting it.
9. **Countdown → Location Card:** the countdown compresses into a smaller ambient element (or fully resolves) as the Location Card rises to primary focus. *Why:* "when" and "where" are shown as connected ideas, not disconnected screens.
10. **Location → RSVP:** the Location Card recedes slightly as the RSVP call-to-action rises to primary focus. *Why:* now that the guest has full information, the experience creates a clear, singular next action, uncluttered by the just-reviewed logistics.
11. **RSVP → Memory:** UI-forward elements (cards, buttons) fade away entirely, replaced by a softer, more atmospheric closing treatment (ambient light, flowers, or a secondary photo/mood moment). *Why:* signals a shift from "interaction mode" back to "feeling mode," appropriate for a farewell.
12. **Memory → Closing:** even the atmospheric elements recede gently as a minimal closing line and platform credit settle into a quiet, softly-lit final frame — mirroring, not contradicting, the darkness-to-light arc of the Opening Experience. *Why:* the experience should end the way a beautiful evening ends — softly, not abruptly.

---

## 12. Motion Language

The following are the binding motion rules for the Housewarming experience, expressed as choreography guidance building directly on doc #2 §24's philosophy/timing bands.

- **Fade:** the default transition for nearly every element entrance/exit — always paired with a slight vertical or scale shift (never a pure opacity fade in isolation), since a combined fade+shift reads as an object settling into place, while a pure fade reads as a flat UI toggle.
- **Scale:** used specifically for objects intended to feel like they are approaching the guest or settling into physical presence (the envelope, the photo frame, the countdown panel) — scale changes are always subtle (a small percentage shift), never a dramatic zoom, and always paired with the natural overshoot-and-settle easing described in §7.
- **Blur:** used exclusively for depth cueing (background elements slightly blurred relative to foreground focus, per doc #2 §23) and for cross-fade transitions between major scenes (a brief shared blur moment as one scene dissolves into the next) — never used as a decorative stylistic filter on a fully-focused foreground element.
- **Parallax:** reserved for the Photo Centerpiece (§7) and the ambient particle/background layers throughout — parallax must always be subtle enough to read as "this has real depth," never strong enough to feel like a gimmick or to induce discomfort.
- **Depth:** achieved primarily through the shadow, blur, and lighting falloff systems from doc #2 (§16, §22, §23) rather than through literal 3D camera movement — depth should be *felt* ambiently more than it is *demonstrated* actively.
- **Reveal:** all text reveals (§6) follow a consistent pattern — soft upward fade, sequential (never simultaneous) for related groups of elements, timed to the "element reveal" duration band from doc #2 §24.
- **Camera:** the implied camera (relevant chiefly to the Three.js scenes, §13) moves minimally and slowly — its role is to make the scene feel like a real, breathing space, not to perform cinematographic flourishes; the only two deliberate camera movements in the entire flagship experience are the slow settle in the Opening (§4) and a very subtle, slow push during the Photo Centerpiece dwell stage (§10) to gently deepen the guest's sense of closeness to the photograph.
- **Timing:** follows doc #2 §24's three duration bands exactly — fast/soft for micro-interactions, moderate for element reveals, longest and most deliberate for section/Act transitions (the envelope opening and the Photo Centerpiece entrance both qualify for this longest band).
- **Acceleration/Deceleration:** every motion in this experience decelerates into its resting state (ease-out) — nothing in the Housewarming experience ends abruptly at full speed; where an object needs to convey weight (the wax seal cracking, the envelope flap lifting), a brief initial deceleration-then-acceleration is used to simulate real physical resistance being overcome, per §5.
- **Never Over-Animate:** at every screen in the Screen Timeline (§3), only one element is ever the "active" animating subject at a time; ambient elements (background particles, glow pulses) are permitted to run continuously but always at low visual intensity, never competing with the current foreground focal point. If a screen's reveal ever produces the impression of "several things happening at once," that screen has failed this rule and must be re-sequenced.

---

## 13. Three.js Scene Direction

All 3D direction below is art direction only (form, material, lighting, camera behavior) — no scene graph, geometry, or code is specified here; see doc #2 §21 for the full material/style rules governing every object.

- **Camera:** a single, mostly-static virtual camera per scene, framing each object (envelope, photo frame, countdown panel) centrally with generous surrounding negative space — consistent with doc #2 §6's single-focal-point principle. Camera movement is restricted to the two moments described in §12 (Opening settle, Photo Centerpiece push) — outside of those, the camera holds still, letting object and light motion (not camera motion) carry the scene's life.
- **Lighting:** every 3D scene uses the same warm Golden Light key source, Ambient Light fill, and Soft Bloom treatment specified in doc #2 §22 — lighting direction and color temperature must remain fully consistent from the Opening Experience's first point of light through to the Closing Frame, so the entire experience reads as one continuous "room" rather than a series of disconnected scenes.
- **Environment:** minimal and atmospheric — a softly blurred, warm, indistinct environment (evoking a softly lit interior or golden-hour garden per the brand mood) rather than a fully modeled, detailed 3D environment; the environment exists to support the featured object (envelope, flowers, house silhouette) and must never contain enough detail to distract from it.
- **Particles:** fine, warm, low-opacity floating motes (doc #2 §21) present continuously at low density from the Opening Experience onward, providing atmospheric continuity across every scene transition; particle density may increase very slightly during the Photo Centerpiece and Memory screens to reinforce those as the experience's warmest emotional peaks.
- **Flowers:** used as soft accent set-dressing around the edges of the Envelope and Memory scenes specifically — naturalistic, slightly desaturated botanical forms (doc #2 §21), never occupying the primary visual focus, always secondary to the envelope/photo/names.
- **House:** rendered as a soft, minimal architectural silhouette (doc #2 §21), reserved specifically for the Housewarming template's identity — appropriate placements include a subtle presence within the Memory scene (§11's step 11) or as a soft background silhouette behind the Location Card (§9), reinforcing "a home, glowing, waiting to be filled" without ever becoming a literal, detailed dollhouse model.
- **Ribbon:** a fine gold-cord accent, used sparingly — e.g., a subtle detail on the envelope's seal area — always rendered with soft, physically believable drape (doc #2 §21).
- **Envelope:** per the full specification in §5 above — the single most important 3D object in the entire experience.
- **Gift:** not a primary object in the Housewarming flagship template (no explicit gift-box moment is required by this worked example), but the Gift Box direction from doc #2 §21 remains available for future template use (e.g., Baby Shower) without modification.
- **Consistency Rule:** every object listed above must appear to exist within one shared lighting and material world (doc #2 §21's cross-cutting rule) — if the envelope's gold is warmer than the ribbon's gold, or the flowers are lit from a different direction than the house silhouette, this is a defect to correct, not a stylistic variation to preserve.

---

## 14. Lighting Direction

- **Golden Hour:** the entire experience is lit as if set in the final hour of daylight — warm, low-angle, amber-toned light throughout, consistent with doc #2 §22's Golden Light and Sunset Light definitions. This lighting mood never shifts to a cool or neutral register at any point in the Housewarming experience.
- **Warm Light:** every light source in every scene — the Opening's first point of light, the envelope's interior glow, the photo frame's Golden Glow, the countdown panel's ambient pulse — shares the same warm color temperature, reinforcing the single-light-source consistency rule from doc #2 §22.
- **Natural Reflections:** reflections (on the envelope's wax seal, the photo frame's glass mat, the countdown panel's glass surface) are soft and diffused, simulating ambient room light rather than a hard mirror reflection — per doc #2 §22's explicit rule against sharp reflections.
- **Soft Bloom:** applied around every bright highlight in the experience — the wax seal's glow-pulse, the ❤ glyph's chime-paired glow, the countdown panel's pulse — always subtle, per doc #2 §22, never a heavy "HDR" effect.
- **Ambient Atmosphere:** the low-density particle field (§13) combined with the Ambient Light fill ensures no part of any scene ever falls into true unlit black — even the Opening's initial darkness (§4) is a deliberate, brief exception establishing anticipation, not the experience's resting state.

---

## 15. Audio Timeline

Audio is optional and instantly mutable throughout (per doc #2 §25) — the timeline below describes the default, unmuted experience.

- **0.0s – 0.5s (Black Hold):** true silence.
- **0.5s – 3.5s (First Light / Particles):** a distant, almost imperceptible warm ambient tone begins to rise from silence — no melody yet, just tonal atmosphere.
- **3.5s (Envelope Emerges):** a solo, warm instrumental voice (per doc #2 §25's music style — solo piano or similarly minimal acoustic texture) enters quietly, sparse and unhurried.
- **Seal Break (Screen 3):** the paper/wax opening sound cue (doc #2 §25) plays once, precisely timed to the visual seal-crack moment; music swells very slightly in response, then settles.
- **Names Reveal (Screen 5):** a single soft chime plays exactly as the ❤ glyph reaches its glow-pulse peak (§6) — the only discrete "interaction sound" tied to a passive reveal (rather than a guest gesture) in the entire experience, justified because this is the emotional center of Act II.
- **Photo Centerpiece (Screen 7):** music reaches its fullest, warmest arrangement here — still minimal and restrained per the brand's dignified personality (doc #2 §5), but this is the emotional and musical peak of the piece.
- **Countdown (Screen 8):** mostly silent underneath the sustained music bed; a very soft, sparse tone may mark whole-day countdown changes only (not every second/minute), keeping the countdown calm rather than urgent.
- **Location Card (Screen 9):** music softens slightly in prominence (without cutting out) to foreground this informational moment, consistent with §3's emotional note for this screen.
- **RSVP (Screen 10):** a very soft, single confirmatory tone plays only once the guest actually submits an RSVP response — not on merely viewing the call-to-action.
- **Memory (Screen 11):** music begins a slow, graceful decrescendo.
- **Closing (Screen 12):** music resolves fully to silence exactly as the Closing Frame settles — silence here mirrors the Black Hold's opening silence, closing the experience's audio arc symmetrically.
- **Mute Behavior:** a single, always-reachable, unobtrusive mute control is available from the moment audio would first play; muting stops music and all interaction sounds immediately but never alters pacing, motion timing, or any visual element — the experience remains fully complete and emotionally coherent in total silence, per doc #2 §25's governing rule.
- **Volume Transitions:** every entrance, swell, and the final resolution to silence uses a smooth fade (matching doc #2 §25) — no audio cue in this timeline starts or stops abruptly.

---

## 16. Touch Experience

- **Button Reaction:** every tappable element (the wax seal, the RSVP action, the map button) responds instantly on touch-down with a soft scale-down/glow response (per doc #2 §19's icon-interaction rule), then eases back to rest slightly more slowly on release — the "fast in, slow out" pattern specified in doc #2 §24.
- **Ripple:** where a ripple-style feedback is used, it is rendered as a soft, warm, quickly-fading glow emanating from the touch point — never a sharp, high-contrast Material-Design-style ripple, which would read as generic consumer-app UI rather than fine, considered feedback.
- **Scale:** the primary feedback mechanism for most interactive elements — a small, subtle scale change communicates "this responded to you" without needing color inversion or harsh visual state changes.
- **Haptic:** a single, soft haptic pulse (where the device supports it) is used only at genuinely significant moments — the wax seal breaking open, and RSVP submission — never on routine scroll or minor UI taps, preserving haptic feedback's significance rather than diluting it.
- **Gyroscope:** an optional, extremely subtle parallax response to device tilt may be applied to the Photo Centerpiece and Envelope scenes specifically (reinforcing their 3D depth per §12), kept subtle enough that it reads as ambient realism rather than a gimmicky "moving wallpaper" effect; must respect reduced-motion settings (§23) and never be relied upon as the only way to perceive any content.
- **Mobile Gestures:** the primary and near-exclusive gesture throughout is vertical scroll/swipe, consistent with the single-column, narrative-paced Mobile-First grid (doc #2 §14); the one exception is the initial tap-to-open gesture on the wax seal (§4–5), which is deliberately a tap (not a swipe), marking it as a distinct, special gesture separate from the passive scroll-reading that follows.

---

## 17. Reading Experience

- **Reading Speed:** paced deliberately slower than a typical app or website — content is revealed at a speed that assumes a guest reading calmly, not scanning quickly; see the reading-time guidance in the Screen Timeline (§3).
- **Text Spacing:** follows doc #2 §12.2 exactly — generous line-height on Body-tier Sorani text, natural (unmodified) letter-spacing at small sizes to preserve Arabic-script letter-joining.
- **Maximum Text Length:** no narrative screen in the flagship Housewarming experience exceeds a short paragraph's worth of Sorani text (the Invitation Line, Screen 6, is deliberately the longest text moment and is still kept brief, per its entry in §3) — Invita never asks a guest to read a long block of prose in a single reveal; longer content, if ever needed, is paced across multiple sequential reveals rather than lengthening any single one.
- **Pause Moments:** the Photo Centerpiece (Screen 7) and the Memory screen (Screen 11) are the two deliberate "pause" moments in the experience — narrative content ceases advancing and the guest is simply given something beautiful to sit with, with no new information competing for attention.
- **Breathing Space:** every text reveal is preceded and followed by empty visual/temporal space — no text element ever appears immediately adjacent (in time) to another without at least a brief held beat between them, reinforcing the unhurried reading pace throughout.

---

## 18. Emotional Journey

A section-by-section emotional map, restating and consolidating §1's arc against the Screen Timeline (§3):

| Section | Target Emotion |
|---|---|
| Black Hold | Held breath, quiet anticipation |
| Envelope | Anticipation, curiosity |
| Seal Break | Delight, intimacy |
| Housewarming Title | Warmth, welcome |
| Names Reveal | Personal warmth, being chosen |
| Invitation Line | Being personally invited, gentle formality |
| Photo Centerpiece | Awe, recognition, warmth |
| Countdown | Excited anticipation, elegant urgency |
| Location Card | Grounded practicality, continued warmth |
| RSVP | Warm responsibility, ease of response |
| Memory | Tenderness, nostalgia |
| Closing | Graceful closure, contentment |

**Rule:** at no point does the emotional target dip into neutrality (a screen that produces "no particular feeling") — even the most practical screen (Location) is written and directed to sustain warmth, per doc #2 §9's Emotional Design Philosophy.

---

## 19. Visual Hierarchy

For each major scene, the order in which the eye should land:

- **Envelope Scene:** 1st — the wax seal's soft glow (the brightest, most central point); 2nd — the envelope's gold-lit edges; 3rd — the drifting particle field.
- **Names Reveal:** 1st — رەیان (appearing first); 2nd — the ❤ glyph's glow-pulse; 3rd — کاروان; 4th — the ceremonial gold divider beneath.
- **Photo Centerpiece:** 1st — the photograph itself (faces, per the explicit no-crop rule); 2nd — the gold frame edge; 3rd — the ambient glow/particles surrounding the frame.
- **Countdown:** 1st — the numerals; 2nd — the glass panel's glow; 3rd — any surrounding ambient particles.
- **Location Card:** 1st — the venue name (هۆڵی ئۆسکار); 2nd — city/time details; 3rd — the gold icons; 4th — the map button.
- **Governing Principle:** in every scene above, exactly one element occupies the "1st" position — this document's hierarchy tables should be treated as a direct check against doc #2 §6's single-focal-point rule during design review.

---

## 20. Attention Management

- Attention is directed exclusively through **light, scale, and motion timing** — never through competing color accents (doc #2 §11 permits only one accent color family in active use per scene) and never through multiple simultaneous animations (§12).
- Every screen has exactly one "active" element at a time; all other elements are either fully static, in a resolved resting state, or animating at ambient/background intensity only (slow particle drift, slow glow pulse) — a level of motion low enough that it registers as atmosphere, not as competing content.
- Where a guest might reasonably be tempted to interact with more than one element on screen (e.g., both a map button and an RSVP button visible together), the two are given clearly different visual weights (primary vs. secondary button treatment) so attention is guided toward the single most contextually important action, without disabling or hiding the secondary option.
- The experience never uses attention-grabbing techniques associated with lower-end consumer apps — no badge counters, no red dots, no auto-playing sound at unexpected volume, no aggressive modal interruptions. Attention is earned through beauty and pacing, never demanded through urgency tactics.

---

## 21. Photo Composition Rules

While `invita.jpg` is a couple portrait for this flagship worked example, future invitations (and future templates) will submit varied photo types. All must be displayed within the same Photo Frame System (doc #2 §18); the following composition rules govern how different photo types are fitted to that frame without ever cropping meaningfully important content:

- **Portrait orientation (e.g., a single or couple portrait, like `invita.jpg`):** displayed at close to its native aspect ratio within the frame, sized so the frame's proportions echo a fine, formal portrait photograph rather than a wide "hero banner" — faces are always kept fully within the visible frame area with natural surrounding margin, never tight-cropped to the edge.
- **Landscape orientation (e.g., a wide venue or group shot):** the frame adapts its proportions to landscape while retaining the same gold-edge/glass-mat construction (doc #2 §18) — never force-cropped into a portrait frame, which would risk cutting off people at the edges of a group shot.
- **Close-up:** treated with extra care around the gold frame's proportions — a close-up face photo receives a slightly more generous glass-mat margin so the frame doesn't visually crowd the subject's features.
- **Family photos (multiple subjects):** always displayed at a scale generous enough that every included person's face remains clearly legible — if a photo contains many subjects, the frame's overall on-screen size increases rather than the photo being shrunk to fit a fixed frame size, since shrinking would risk faces becoming too small to read as the emotional centerpiece.
- **Couple photos (e.g., `invita.jpg`):** the default and most-common case for this template — displayed at the largest scale permitted within the mobile-first grid's content-width bounds (doc #2 §14), reflecting their role as the flagship experience's true emotional centerpiece.
- **Absolute rule across all types:** no face is ever cropped, obscured by frame ornamentation, or placed behind any glass/gold element at reduced legibility — where a photo's native composition would require cropping to fit the frame ratio, the frame ratio is what adapts, not the photo's essential content.

---

## 22. Future Template Adaptation

The exact structure specified in this document — six Acts, the Screen Timeline's beat-by-beat pacing, the Motion Language, the 3D/lighting/audio systems — is designed to be reused, beat-for-beat, across every future Invita template. Only content, the occasion's emotional key, and the 3D object cast (doc #2 §21/§17) change.

- **Wedding:** Act I's sealed envelope remains identical in construction; Act II's Names Reveal becomes the emotional peak of the entire experience rather than sharing weight with the Photo Centerpiece (Act III may show the couple's photo alongside a brief love-story beat); the 3D cast adds the Ribbon and a more prominent Wax Seal moment; emotional key shifts from "warmth of a new home" to "union and romance," per doc #2 §10/§30.
- **Birthday:** Act I remains identical; Act II introduces the celebrant's name with the same Names Reveal choreography (adapted to a single name rather than a couple); Act III's Photo Centerpiece may show the celebrant across different life moments rather than a single portrait; emotional key shifts to "joy and personal celebration," with Particles (§13) taking a slightly more prominent, celebratory (but still restrained, never confetti-style) role.
- **Graduation:** Act II's reveal emphasizes achievement and the graduate's name; the 3D cast may introduce a restrained graduation-cap silhouette rendered with the exact same material discipline as the House silhouette (doc #2 §21); emotional key shifts to "pride and forward momentum."
- **Engagement:** structurally very close to Wedding but with a more intimate, quieter emotional key ("the first announcement," per doc #2 §10) — the Countdown (Act III) plays a lighter role since engagements typically don't count down to a fixed single-day event in the same way.
- **Corporate Events:** Act I's warmth is preserved but slightly more understated (per doc #2 §10's guidance that corporate events should still feel warm, never corporate-cold); Names Reveal is replaced with an Organization/Event Title reveal using the same sequencing discipline; the House 3D silhouette is replaced by an appropriate venue/brand-neutral architectural form using identical material and lighting rules.
- **Governing Rule for All Adaptations:** a new template may change *what* fills each Act and *which* 3D objects from the shared cast appear — it must never change the six-Act structure, the Screen Timeline's pacing philosophy, the Motion Language's timing bands, or the Lighting/Audio systems' core rules. This is the same governance principle established in doc #2 §30, applied specifically to experience choreography rather than visual materials.

---

## 23. Accessibility Experience

- **Reduced Motion:** every signature moment in this document (the envelope's floating/opening motion, the Photo Centerpiece's parallax, the countdown's cross-fade, the gyroscope-linked parallax in §16) has a defined calmer alternative — typically a simple, soft cross-fade replacing any larger transform — activated automatically when the guest's device reduced-motion preference is enabled, per doc #2 §26. The experience remains fully narratively complete in this mode; no content is hidden or skipped, only the motion carrying it is simplified.
- **Readable Typography:** every text reveal in this document (§6, §17) respects the minimum type sizes and RTL/Sorani line-height rules from doc #2 §12 without exception, even during the most cinematic moments (e.g., the Names Reveal's Display-tier type remains fully legible, not reduced in size for dramatic effect).
- **Touch Targets:** the wax seal (the experience's very first interactive element), the RSVP action, and the map button all meet the minimum touch-target size and surrounding buffer specified in doc #2 §13/§26, regardless of how visually minimal they are styled.
- **Safe Scrolling:** scroll-linked pacing (§10) never traps the guest in an unskippable forced sequence beyond the initial gesture-gated Opening (§4) — once past the envelope-opening gesture, the guest may scroll at their own pace, including scrolling back up to revisit any prior screen, without the experience resetting or replaying introductory animations unnecessarily.
- **Screen Reader Path:** every essential fact delivered visually in this document — رەیان ❤ کاروان, the occasion, ٢١/٧/٢٠٢٦, سلێمانی، هۆڵی ئۆسکار، کاتژمێر ٧ی شەو, and the RSVP action — must be reachable and clearly announced in a logical, meaningful order to a screen-reader user, independent of the 3D/motion/audio layers being perceived at all.

---

## 24. Mobile Experience Rules

- **One-Hand Use:** the entire flagship experience is validated for comfortable single-hand operation — the wax seal's touch target and the RSVP/map buttons are positioned within easy thumb reach (biased toward the lower-to-center portion of the viewport), consistent with doc #2 §13's touch-spacing guidance.
- **Thumb Zones:** primary actions (opening the seal, RSVP) are never placed at the very top of the viewport, where one-handed reach is weakest; secondary/passive content (the Photo Centerpiece, Names Reveal) may occupy the full vertical space since it requires only scrolling, not precise reach.
- **Safe Areas:** every screen respects device safe-area insets exactly as specified in doc #2 §13/§14 — no glow, glass panel, or text ever bleeds into or is obscured by a notch, Dynamic Island, or home indicator.
- **Dynamic Island:** the Opening Experience's centered point-of-light composition (§4) is explicitly checked against Dynamic-Island-class devices to ensure the light/envelope's centering never appears visually offset or crowded by the Island's physical cutout.
- **Foldables:** the entire Screen Timeline (§3) functions identically whether a foldable device is folded (narrow/tall) or unfolded (wide/square) — per doc #2 §14, the unfolded state is treated as a large phone, receiving more breathing room rather than a restructured multi-column layout.

---

## 25. Things UX Designers Must Never Do

**Storytelling mistakes**
- Never reveal the couple's names, the occasion title, and the invitation line simultaneously as a single block — this collapses the carefully sequenced Act II reveal (§6) into a static information card, undermining the entire "letter, not form" premise.
- Never let a later Act contradict or fail to answer the question the previous Act raised (§1) — e.g., never show the Countdown without having first shown a date-bearing context, and never close the experience (Act VI) without having offered an RSVP path (Act IV/§9–10).
- Never treat the Location/RSVP information as an afterthought tacked onto the end — Act IV must receive the same visual care (glass, gold icon, considered composition) as Act I's envelope.

**Motion mistakes**
- Never animate the envelope, the countdown digits, or any reveal with linear or mechanically abrupt easing (§12) — every motion in this document must decelerate into rest.
- Never allow more than one foreground element to animate simultaneously on any single screen (§12, §20) — if two things move for attention at once, cut one.
- Never use a countdown digit "flip" or slot-machine animation — this specific mechanical pattern directly contradicts the soft-cross-fade rule in §8 and reads as generic countdown-widget UI rather than a bespoke, considered detail.

**Luxury mistakes**
- Never introduce urgency-driven countdown styling (red accents, aggressive pulsing, "hurry" framing) — per §8, the emotional register of the countdown is warm anticipation, never sales pressure.
- Never apply a filter, vignette, or color grade on top of the `invita.jpg` photograph (§7) — the museum-quality presentation standard depends on presenting the photograph exactly as captured, framed and lit, never digitally altered.
- Never crop a face, in `invita.jpg` or any future host-uploaded photo, to fit a frame ratio (§7, §21) — the frame must always adapt to the photo's essential composition, never the reverse.

**UX/general mistakes**
- Never add a skip button, a loading spinner, or an explicit "tap here to continue" instruction anywhere in the Opening Experience (§4) — the seal's own glow-pulse affordance is the only invitation to act; explicit instructional UI would immediately break the "this is a letter, not an app" illusion this entire document is built to sustain.
- Never force scroll pacing so rigidly that a guest cannot scroll back up to revisit the Names Reveal or the Photo Centerpiece (§10, §23) — free re-reading must always remain possible after the initial gesture-gated opening.
- Never let audio be a required channel for essential information (§15, §23) — every fact conveyed through a sound cue (e.g., the chime at the ❤ reveal) must already be fully communicated visually and would lose no meaning if muted from the very first second.

---

## 26. Final Experience Manifesto

Somewhere, tonight, رەیان and کاروان are choosing the words for a letter they will send to the people they love most — to tell them about a new home, and to ask them to come celebrate it. Invita's only job, in every second specified in this document, is to make sure that letter arrives feeling exactly as considered, as warm, and as worthy of a held breath as the moment they decided to send it.

This experience is not a website with animations added to make it feel special. It is built the other way around: a feeling — anticipation resolving into warmth — chosen first, and every scene, every second of timing, every soft gold line and slow fade built specifically to serve that one feeling, and nothing else.

It should feel **timeless** — recognizable as beautiful in ten years, not dated by whatever motion trend was fashionable the year it launched. It should feel **luxury** — through restraint and material believability, never through excess or spectacle. It should feel **emotional** — because a *بانگێشت نامە* that produces no feeling has failed its only purpose, however technically polished it may be. It should feel **minimal** — because every element earns its place, and nothing is present merely because it was possible to add. It should feel **human** — because behind every countdown, every gold-framed photograph, every gently glowing seal, there are two real people, رەیان and کاروان, who are genuinely, warmly, inviting someone they care about into a new chapter of their life. It should feel **elegant**, **warm**, and — above every other quality — **memorable**: the kind of invitation a guest still remembers receiving long after the celebration itself has ended.

Every future template built on this system inherits this exact standard. A wedding, a graduation, a corporate opening — different words, different photographs, the same unmistakable feeling of having been given, not merely sent, an invitation.

---

*End of UX Blueprint & Experience Specification. Together with `Invita-Foundation-Document.md` and `Invita-Visual-Identity-System.md`, this document completes the full pre-development foundation for Invita. No screen, animation, or interaction should be built without direct traceability to a beat specified here.*
