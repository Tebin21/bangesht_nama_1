# INVITA
## بانگێشت نامە
### Content, Copywriting & Localization Bible

**Version:** 1.0 — Editorial Foundation
**Companion documents:** `Invita-Foundation-Document.md` (strategy), `Invita-Visual-Identity-System.md` (visual system), `Invita-UX-Experience-Blueprint.md` (experience choreography). This document governs the words that fill that experience.
**Language of the product:** Kurdish Sorani only, written in Arabic script, right-to-left. No English appears anywhere inside Invita.
**Language of this document:** English, for documentation purposes only.

### A Note on the Sorani Examples in This Document

This bible includes real, illustrative Kurdish Sorani copy throughout — greetings, buttons, RSVP lines, notifications, thank-you messages — so that every rule below is anchored to an actual worked example, not just an abstract description. These examples are written to demonstrate the intended **tone, length, rhythm, and structure** required by this bible. Per the Editorial Governance process (§29), every example string in this document must still pass native-speaker copy review before it ships in the product — this document defines *the standard a native review checks against*, not a substitute for that review.

---

## Table of Contents

1. Brand Voice · 2. Brand Personality · 3. Tone of Voice per Occasion · 4. Writing Principles · 5. Sentence Rules · 6. Kurdish Sorani Writing Rules · 7. Typography Copy Rules · 8. Greeting System · 9. Invitation Messaging · 10. Button Language · 11. Navigation Labels · 12. Countdown Messages · 13. Date Formatting Rules · 14. Location Writing Rules · 15. RSVP Copy · 16. Notification System · 17. Empty States · 18. Loading Messages · 19. Error Messages · 20. Confirmation Messages · 21. Thank You System · 22. Accessibility Copy · 23. Photo Captions · 24. Emoji Policy · 25. Future Localization · 26. Copy Anti-Patterns · 27. Template Copy Matrix · 28. Microcopy System · 29. Editorial Governance · 30. Final Editorial Manifesto

---

## 1. Brand Voice

Invita speaks the way a beautifully composed formal letter speaks — never the way an app speaks. Every sentence should read as though it was chosen carefully by someone who loves the people receiving it, not generated to fill a UI slot.

Three qualities define the voice in every context, from a wedding invitation to a "link copied" toast:

- **Warmth carried by restraint.** Invita is never cold, but it is also never gushing. Warmth is expressed through precise, well-chosen words, not through volume or exclamation.
- **Dignity at every scale.** A button label and a wedding invitation line are written with the same care. Invita never becomes casual or throwaway just because a piece of text is small or "just UI."
- **Presence, not performance.** Invita's words never call attention to their own cleverness. A sentence that makes the reader notice the *writing* rather than *feel the moment* has failed, no matter how polished it sounds.

The test for every sentence in the product: **if رەیان or کاروان had written this line themselves, by hand, would it embarrass them to send it?** If a line sounds like software talking, it must be rewritten until it sounds like a person who cares.

---

## 2. Brand Personality

If Invita were a person, they are the family elder who writes the invitations everyone secretly hopes to receive — not because they are loud or effusive, but because every word they choose feels considered, warm, and exactly enough.

**How Invita welcomes:** briefly, warmly, and by naming the moment rather than the platform — e.g., a soft opening line acknowledging that the guest has been invited into something personal, never a generic "Welcome!" exclamation.

**How Invita invites:** as though extending an actual invitation, in the register of formal Kurdish hospitality — warm, respectful, using the guest's own presence as the reason for the message ("ئێمە دڵخۆشین بەخێرهاتنتان لەلایەن..." — "we would be delighted to have you..." — rather than transactional phrasing like "You are invited to an event.").

**How Invita thanks:** specifically and warmly, never generically — thanking a guest for *coming*, or for *responding*, never a blanket "Thank you for using our app."

**How Invita celebrates:** quietly and warmly, matching the emotional register of the occasion rather than injecting its own excitement — Invita celebrates *with* the host and guest, never *at* them.

**How Invita says goodbye:** gently and completely, the way a warm host walks a guest to the door — never an abrupt cutoff, never a generic "Goodbye," always a closing line that leaves a feeling behind (see §8's Closing Greetings).

---

## 3. Tone of Voice per Occasion

The Invita **voice** (Sections 1–2) never changes across occasions. What changes is the **tone** — the specific emotional register the voice adopts, matching each occasion's "emotional key" as first defined in `Invita-UX-Experience-Blueprint.md` §2/§22.

| Occasion | Tone | What shifts | What never shifts |
|---|---|---|---|
| **Wedding** | Romantic, reverent, quietly joyful | Language leans toward union and devotion; greetings may reference the couple's shared future | Never becomes flowery/poetic to the point of cliché; still brief |
| **Housewarming** | Warm, grounded, welcoming | Language emphasizes home, comfort, new beginnings, belonging | Never becomes overly cozy/casual; retains formal warmth |
| **Graduation** | Proud, respectful, forward-looking | Language emphasizes achievement and effort, addressed with respect (fitting for family/elders reading it too) | Never becomes boastful or loud |
| **Birthday** | Light, warm, personally celebratory | Slightly more personal/affectionate language permitted, especially for close family occasions | Never becomes childish or exclamation-heavy, even for a child's birthday — the parent/host voice remains dignified |
| **Baby Shower** | Tender, gentle, hopeful | Language softens further than any other occasion — the gentlest tone in the system | Never becomes saccharine or overly sentimental to the point of losing restraint |
| **Corporate Events** | Composed, warm-but-professional, respectful | Slightly more formal register (titles, organizational courtesy) while still warm | Never becomes cold, transactional, or "corporate-speak" |
| **Private Events** | Intimate, discreet, warm | Language may be sparer and more understated, reflecting the smaller, more personal scale | Never becomes secretive-sounding or cold in the name of discretion |
| **Family Gathering** | Warm, inclusive, rooted in belonging | Language may reference generations, shared history, gathering together | Never becomes generic "family fun" phrasing |
| **Festival** | Warm, communal, quietly festive | Slightly more energetic pacing permitted in sentence rhythm (§5), reflecting a communal, larger-scale occasion | Never becomes loud, promotional, or event-flyer-like |
| **Engagement** | Intimate, quiet, tender anticipation | The most understated tone alongside Baby Shower — this is a first, quiet announcement, not yet the wedding's full celebration | Never borrows Wedding's fuller ceremonial register too early |

**Governing rule:** every tone above is a *dial*, not a *different voice* — the same warmth, restraint, and dignity from Sections 1–2 must be recognizable in all ten rows. A reader who saw one line from each occasion, side by side, should be able to tell they all came from the same platform.

---

## 4. Writing Principles

- **Simplicity.** Every sentence should be understandable on a single read, at a glance, on a phone screen. Complexity is never a sign of sophistication in this system — clarity is.
- **Clarity.** Ambiguity is treated as a defect. A guest should never have to re-read a line to understand what is being asked of them (especially in RSVP and confirmation copy, §15/§20).
- **Emotion.** Every piece of copy — even a button label — is evaluated first for whether it carries the intended feeling (per doc #3 §18's Emotional Journey), and only second for functional clarity. A functionally clear but emotionally flat line should still be rewritten.
- **Brevity.** If a word can be removed without losing meaning or warmth, it is removed. Brevity is treated as a form of respect for the reader's time and attention, not as a constraint fought against.
- **Rhythm.** Sorani sentences in this system are read aloud internally by the reader, even silently — copy should be checked by reading it aloud; if it stumbles, it is rewritten (see §5).
- **Warmth.** The default emotional temperature of every sentence, regardless of category (even an error message, §19) — warmth is not reserved for "emotional" copy alone.
- **Luxury.** Achieved through precision and restraint in word choice, never through elaborate or "fancy" vocabulary — a luxury sentence is not a long or ornate one; it is one where every word was clearly chosen on purpose.
- **Respect.** Invita never assumes the reader is careless, in a hurry, or needs to be persuaded — copy always addresses the reader as someone whose time and attention are already valued, never as a conversion target.

---

## 5. Sentence Rules

- **Preferred sentence length:** short to medium — a single clear thought per sentence. Most product copy (buttons, labels, confirmations) should be a single short phrase; narrative/invitation copy (greetings, invitation lines) may extend to one, occasionally two, gently connected clauses.
- **Maximum length:** no sentence in the entire product — including invitation and thank-you copy — should require more than one natural breath to read aloud comfortably. If a sentence needs a breath in the middle, it is split into two.
- **Reading rhythm:** short sentences are placed with intentional space around them (per doc #3 §17's Reading Experience) — copy is never delivered as a dense block, even where several short lines appear together (e.g., a greeting followed by an invitation line); each is its own beat.
- **Breathing space:** every paragraph-equivalent unit (a greeting, an invitation message, a thank-you note) is composed of 1–3 short sentences at most, with implied pause between them — mirroring the "one focal point at a time" principle from `Invita-Visual-Identity-System.md` §6, applied to language instead of layout.
- **Paragraph rules:** Invita effectively has no paragraphs in the traditional sense — narrative copy is always composed as a small sequence of short, separately-revealed lines (consistent with the Screen Timeline's sequential reveals in doc #3 §3/§6), never as a continuous block of prose.

---

## 6. Kurdish Sorani Writing Rules

- **RTL (Right-to-Left):** all text reads and is laid out right-to-left, per `Invita-Visual-Identity-System.md` §12.3. Every writing decision below (punctuation placement, numeral handling) is made in service of correct, natural RTL reading — never adapted from an LTR convention without adjustment.
- **Punctuation:** standard Sorani punctuation is used consistently — full stop (.), comma (،  — the Arabic-script comma, mirrored from the Latin comma, is used rather than a Latin comma), and question mark (؟ — the Arabic-script question mark) rather than their Latin-script mirror-image equivalents. Exclamation marks (!) are used exceedingly rarely, reserved only for the rare moment that genuinely calls for one (see §24's parallel restraint on emojis) — most copy in this system, including celebratory copy, should read as warm without needing an exclamation mark to signal it.
- **Quotation marks:** used only when directly quoting a host's own custom-entered text (e.g., a personal message a host adds to their invitation) — standard Sorani/Arabic-script guillemets or quotation conventions «  » are used consistently; system-authored UI copy should rarely need quotation marks at all.
- **Numbers:** Invita uses Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) consistently throughout the product — dates, times, countdowns, guest counts — never Latin numerals (0123456789), maintaining full visual and typographic consistency with the surrounding Sorani script. Per `Invita-Visual-Identity-System.md` §12.3, numerals are set left-to-right as a numeral group even within the otherwise right-to-left flow, which is the standard, expected convention for numerals in Arabic-script text.
- **Dates:** written in day/month/year order using Arabic-Indic numerals separated by a forward slash, e.g. **٢١ / ٧ / ٢٠٢٦** (see §13 for full formatting rules) — day and month may alternatively be spelled out in words for the most ceremonial/narrative copy moments (e.g., within an Invitation Line), while numeral form is used for all countdown, card, and functional date displays.
- **Times:** written using the natural Sorani time convention — e.g., **کاتژمێر ٧ی شەو** ("the hour of 7, at night") — always paired with the appropriate time-of-day qualifier (بەیانی/morning, نیوەڕۆ/midday, ئێوارە/evening, شەو/night) rather than a bare 24-hour numeral, since the qualifier itself carries warmth and clarity that a bare "19:00" would not.
- **Addresses:** structured city-first, then venue name, following natural Sorani spoken convention (e.g., **سلێمانی — هۆڵی ئۆسکار**) — see §14 for the full address hierarchy.
- **Capitalization-equivalent emphasis:** Sorani/Arabic script has no letter-case distinction, so emphasis that Latin-script systems achieve through capitalization must be achieved instead through **typographic weight** (Doran Bold vs. Medium, per §7) and **spacing/size**, never through artificial devices like added punctuation or repeated letters for emphasis.
- **Spacing:** natural word-spacing is preserved exactly as correct Sorani orthography requires; letter-spacing (tracking) is never artificially adjusted on body-sized Sorani text, per `Invita-Visual-Identity-System.md` §12.2's explicit warning that widened tracking breaks Arabic-script letter-joining.
- **Joining (letter connectivity):** because Sorani letters connect contextually within a word, no UI treatment may ever break a word across a line in a way that severs letter-joining, insert forced spacing mid-word for stylistic/animation purposes, or apply per-letter animation effects to body text — where a word-by-word or phrase-by-phrase reveal is used (per doc #3's reveal choreography), the unit of reveal is always a whole word or phrase, never an individual letter.
- **Consistency:** a single glossary of approved terms (see §29's Editorial Governance) governs every recurring concept — "RSVP," "countdown," "location," "guest," etc. — so the same Sorani term is always used for the same concept across every template and every screen; no two templates may use different words for the same UI concept.

---

## 7. Typography Copy Rules

Copy category is mapped directly to the type scale established in `Invita-Visual-Identity-System.md` §12.1 — this section governs *which category of writing belongs at which tier*, not the tier specifications themselves.

- **Display:** reserved exclusively for a host's/celebrant's name(s) — the single most important words in any invitation (e.g., رەیان ❤ کاروان). Copy at this tier is never a sentence — only names.
- **Hero:** the occasion title (e.g., a Housewarming or Wedding title phrase) — always a short noun phrase, never a full sentence, and never containing a verb.
- **Section Title:** short phrase headers introducing a new narrative beat (e.g., a heading equivalent to "Details" or "Join Us") — three to five words maximum.
- **Card Title:** headings within a single card (e.g., the venue name within the Location Card) — treated as a label, not a sentence.
- **Body Large:** the primary narrative/invitation sentences (the Invitation Line, greetings) — this is where the system's one or two permitted full sentences live; never more than the Sentence Rules (§5) allow.
- **Body:** standard descriptive UI copy and short informational sentences.
- **Body Small:** secondary descriptive text, list items, supporting detail.
- **Caption:** timestamps, photo credits, fine print — always the shortest, most restrained copy in the system.
- **Button:** a single short verb or verb phrase (§10) — never a full sentence, never punctuation at the end.
- **Label:** short nouns identifying a field or category (e.g., a form field's label) — never phrased as an instruction or full sentence.
- **Input:** placeholder/example text shown inside a field before the guest types — always phrased as a natural example, never as a command ("ناوت بنووسە" / "type your name" is avoided in favor of a softer placeholder approach, or omitted where the Label already makes the field's purpose clear).
- **Countdown Numbers:** numerals only, formatted per §6/§13 — no accompanying sentence at this tier; any framing text (e.g., "days remaining") sits at the Caption or Label tier immediately adjacent.
- **Invitation Names:** the guest's own name, when a personalized link is used — always written at the same tier and with the same care as the Display tier (per doc #3 §6), never demoted to a smaller, purely-functional size.
- **Dates / Location:** short, clearly legible phrases at Card-Title tier, per doc #3 §9 — never compressed to Caption tier, since these are essential, frequently-referenced facts.
- **Footer Text:** the smallest, lowest-priority copy in the system — platform credit and minimal legal text only.

---

## 8. Greeting System

Every greeting in Invita follows the same underlying philosophy: **a greeting should name the moment, not announce the platform.** Invita itself is never the subject of a greeting — the host, the guest, or the occasion always is.

**Arrival Greetings** (spoken to the guest as the experience opens, where any greeting text appears at all, typically minimal or absent during the Opening Experience itself per doc #3 §4, and more present once Act II begins):
- A soft, brief line acknowledging the guest has been personally invited — e.g., a phrase in the register of *"ئێمە دڵخۆشین کە ئێوە بەشداربن..."* ("we are delighted to have you share in this...") — never a generic *"بەخێربێیت بۆ ئینڤیتا"* ("Welcome to Invita") framing, which would center the platform instead of the moment.

**Invitation Greetings** (the core Invitation Line, per doc #3 §6):
- Warm, direct, personal — naming the host(s) and the occasion together as a single, complete thought, e.g., in the spirit of: *"[occasion greeting] لەلایەن [ناوی میوانداران]"* ("[occasion greeting], from [host names]") — the exact phrasing varies by occasion tone (§3) but always keeps host and occasion together in one breath.

**Closing Greetings** (as the guest reaches Act VI, per doc #3 §11):
- Gentle and complete — never abrupt. A closing line should leave the guest with a feeling, not just end the content, e.g., in the spirit of: *"چاوەڕێی بینینتانین"* ("we look forward to seeing you") paired softly with the platform's minimal credit line at Footer tier, kept entirely separate in visual and tonal weight from the warm closing sentence itself.

**Thank-You Greetings** (triggered after an RSVP response, per §15):
- Specific to the action just taken — thanking the guest for responding, not for "using the app," e.g., in the spirit of: *"سوپاس بۆ وەڵامدانەوەتان"* ("thank you for your response") — always brief, always warm, never effusive.

---

## 9. Invitation Messaging

- **Never sound like a printed card.** Traditional printed invitations often use rigid, formulaic phrasing inherited from decades of convention (formal third-person references, boilerplate structure). Invita's invitation copy should read as though the host is speaking directly and personally to this specific guest, even though the same underlying template serves every guest.
- **Always feel personal.** Wherever the platform supports it, invitation copy references the host(s) by name and the occasion specifically — never a generic "You're invited to an event" framing. The worked example throughout this document (رەیان ❤ کاروان's Housewarming) should always read as though written specifically for a home these two people are genuinely excited about, not as a placeholder.
- **Always feel warm.** Every invitation message opens with warmth (a greeting, per §8) before delivering any factual content (date, time, location) — factual content always follows the emotional opening, never precedes it, consistent with doc #3's Act II → Act IV structure.
- **Brevity within warmth.** An invitation message is typically composed of: one greeting/opening line, one occasion-naming line, and (optionally) one brief personal touch line from the host — three short beats at most, never a longer composed paragraph, per §5.
- **Never oversell the occasion.** Invita's invitation copy never uses persuasive or promotional language ("Don't miss this!", "The event of the year!") — the invitation's own warmth and the relationship between host and guest are what create the desire to attend, not marketing language.

---

## 10. Button Language

- **Short.** Every button label is a single word or short two-to-three word phrase — never a full sentence, never more than what fits comfortably and legibly at the Button type tier (§7).
- **Clear.** A button's label states exactly what will happen when tapped — no button in Invita uses vague labels like "OK" or "Submit" where a more specific, human verb is available (e.g., a location button reads as an action tied to seeing the venue, not a generic "Confirm").
- **Human.** Button copy uses natural, everyday Sorani phrasing a person would actually say — never a stiff, literal translation of an English UI convention.
- **Elegant.** Even a short button label is chosen with the same care as a greeting — no button label is ever an afterthought; each is evaluated against the Writing Principles (§4) exactly like narrative copy.
- **No technical wording.** Buttons never expose implementation or system-level language ("Sync," "Refresh," "Submit Form") — every label is phrased from the guest's or host's human perspective (e.g., what *they* are doing — responding, viewing, sharing — never what the system is doing).
- **No terminal punctuation.** Button labels never end in a period or exclamation mark, consistent with their Label-adjacent, non-sentence status (§7).

---

## 11. Navigation Labels

The flagship Housewarming guest experience has no traditional navigation (per doc #3, it is a single scroll-paced sequence). Future templates, the Host creation/management surfaces, and any B2B tooling (per `Invita-Foundation-Document.md` §4/§17) will require navigation labels. Rules for that future naming:

- **Name the destination, not the mechanism.** A navigation label names *what the host will find there* (e.g., a label equivalent to "Guests" or "Details"), never a mechanism-oriented label like "Menu" or "Panel."
- **One or two words maximum.** Navigation labels are the most compressed copy category in the system after buttons — clarity at a glance is the only goal.
- **Consistent terminology across templates.** Per §6's consistency rule, the same navigation concept (e.g., the guest-list section) uses the identical label across every future occasion template — a host managing a Wedding and a Corporate Event should never need to relearn navigation terms.
- **No icons-only navigation without a label equivalent available.** Per Accessibility Copy (§22), every navigation destination must have a text label reachable by assistive technology, even if the primary visual presentation is icon-led.

---

## 12. Countdown Messages

The countdown's writing philosophy is **warm anticipation, never urgency** — directly extending `Invita-UX-Experience-Blueprint.md` §8's rule against sales-style countdown framing.

- **Before the event (multiple days remaining):** framing emphasizes anticipation and looking forward — e.g., in the spirit of *"ماوەیەکی کەم ماوە"* ("just a little while left") paired with the numeral countdown, never a bare mechanical "X days left" with no warmth.
- **Today:** the single most emotionally charged countdown state — copy shifts from counting down to *arriving*, e.g., in the spirit of *"ئەمڕۆیە!"* used sparingly and only here, where genuine excitement is warranted (this is one of the few moments in the entire system where a rare exclamation mark, per §6, is appropriate).
- **Tomorrow:** a warm, gentle "almost here" framing — bridges the anticipation of "before" and the arrival of "today," e.g., in the spirit of *"سبەینێ ڕۆژی خۆشحاڵیمانە"* ("tomorrow is our happy day").
- **After the event:** the countdown UI itself is retired after the event date passes; if any post-event message is shown at all (e.g., a returning guest reopening the link), it shifts entirely away from countdown framing toward a warm memory/thank-you register (see §21), never showing a negative or "expired" countdown state, which would feel cold and technical.

---

## 13. Date Formatting Rules

- **Numeral date format (functional contexts — cards, countdown, RSVP confirmations):** day / month / year, separated by a forward slash, using Arabic-Indic numerals — e.g., **٢١ / ٧ / ٢٠٢٦**. This single format is used consistently everywhere a date appears in numeral form, across every template.
- **Narrative date format (ceremonial contexts — the Invitation Line, greetings):** day and month may be written in words rather than numerals when it improves the warmth and reading rhythm of a sentence (e.g., referencing the month by its Sorani name), while the numeral form remains the canonical, always-available reference on the dedicated Location/Date card (per doc #3 §9).
- **Calendar consistency:** Invita's primary calendar system for all dates is the Gregorian calendar (consistent with the numeral date already established in the flagship example, ٢١/٧/٢٠٢٦), formatted per the numeral rule above; if a future template or region requires displaying a second calendar system alongside (e.g., for cultural or religious occasions), it is presented as a clearly secondary, smaller-tier annotation beside the primary date, never replacing it.
- **Time format:** always paired with a time-of-day qualifier word (بەیانی / نیوەڕۆ / ئێوارە / شەو) rather than a bare numeral or 24-hour format, per §6 — e.g., **کاتژمێر ٧ی شەو**, never "١٩:٠٠" alone.
- **Consistency across the platform:** the same date and time formatting rules apply identically across every current and future template — a Wedding's date card and a Corporate Event's date card must be visually and grammatically formatted identically, differing only in the surrounding tone (§3).

---

## 14. Location Writing Rules

- **Address hierarchy:** city name first, then venue name, mirroring natural Sorani spoken convention when telling someone where to go — e.g., **سلێمانی — هۆڵی ئۆسکار** (city — venue). A street-level address, when required, follows the venue name as a third, smaller-tier line.
- **Hall/venue names:** always written exactly as the venue is formally known (proper noun, no translation or informal shortening) — e.g., هۆڵی ئۆسکار is written in full, never abbreviated.
- **City names:** written in their standard Sorani form — e.g., سلێمانی — consistently across every template and every mention (countdown-adjacent references, RSVP confirmations, any future host-facing dashboard).
- **Maps (button copy):** the map action button uses a short, human, action-oriented label consistent with §10's Button Language rules — naming the action of seeing/viewing the place, never a technical label like "Open Maps" or a bare app-name reference.
- **Directions:** where additional directions text is provided by a host (e.g., parking guidance), it follows the same Sentence Rules (§5) — short, warm, clear lines — and is visually/tonally treated as a helpful addition from the host, not as generic logistics copy.

---

## 15. RSVP Copy

RSVP copy is the most functionally important copy category in the product — clarity here is never sacrificed for poetic phrasing, though warmth is never dropped either.

- **Confirmation (after a guest submits any RSVP response):** a brief, warm acknowledgment specific to what was submitted — e.g., in the spirit of *"سوپاس، وەڵامەکەتان تۆمارکرا"* ("thank you, your response has been recorded") — always confirms the action succeeded in plain terms before any additional warmth is layered on.
- **Acceptance:** the guest's "attending" response is framed warmly and specifically, e.g., a confirming line in the spirit of *"خۆشحاڵین کە دێن"* ("we're glad you're coming") — phrased as shared joy, never as a bare transactional "Attending: Yes" readback.
- **Decline:** handled with the same warmth and respect as acceptance — never guilt-inducing, never overly apologetic-sounding on the guest's behalf, e.g., in the spirit of *"سوپاس بۆ ئاگادارکردنەوەمان"* ("thank you for letting us know") — the host's disappointment, if any, is never something the platform's copy manufactures or implies on the guest's behalf.
- **Pending / Not Yet Responded:** framed gently, as an open invitation still waiting rather than a nagging incomplete task — e.g., in the spirit of *"چاوەڕێی وەڵامتانین"* ("we're waiting for your response") — never phrased with urgency or guilt ("You haven't responded yet!").
- **Reminder (a follow-up prompt, e.g., as the event approaches):** warm and brief, framed as an extension of anticipation (tying naturally into the Countdown's "before" tone, §12) rather than as a nag — e.g., in the spirit of *"ڕۆژی خۆش نزیک دەبێتەوە، چاوەڕێی وەڵامتانین"* ("the happy day is getting closer, we're waiting for your response").

---

## 16. Notification System

All system notifications maintain Invita's warm, dignified voice — a notification is never the moment the brand's personality is allowed to lapse into generic "system message" tone.

- **Success:** brief, warm, specific confirmation of what succeeded (e.g., "your RSVP was sent," "the photo was saved") — never a bare generic "Success!" with no context.
- **Error:** calm, clear, and blame-free (see §19 for full rules) — states what happened and what to do next, never what the guest did wrong.
- **Information:** neutral-register, brief factual notices (e.g., "link copied") — the one category permitted a slightly more neutral tone (consistent with the Info semantic color's role in `Invita-Visual-Identity-System.md` §11.12), though still warm rather than cold.
- **Warning:** used sparingly, phrased gently — e.g., alerting a host that a change is about to affect something — framed as helpful foresight, never as an alarm.
- **Reminder:** see RSVP Reminder (§15) for the primary example; the same warm, anticipatory framing applies to any other reminder category the platform introduces.
- **Network:** when connectivity is poor or lost, copy remains calm and reassuring — e.g., in the spirit of *"پەیوەندیمان لاوازە، هەوڵدەدەین دووبارە"* ("our connection is weak, we're trying again") — never alarming or technical-sounding ("Network Error 500").
- **Offline:** framed as a temporary, patient pause rather than a failure — e.g., in the spirit of *"ئێستا ئۆفلاینین، کاتێک پەیوەندی هەبێت دەگەڕێینەوە"* ("we're currently offline, we'll return once connected") — consistent with the brand's unhurried, patient personality (doc #1 §5) even in a technical-failure moment.

---

## 17. Empty States

An empty state in Invita is never a cold, technical dead-end — it is treated as a quiet, warm pause, consistent with the brand's "held breath" emotional target (`Invita-Visual-Identity-System.md` §3).

- **Never cold.** An empty guest list, an empty gallery, or an unconfirmed RSVP list is never described with sterile system language ("No data," "0 results") — copy instead frames the emptiness warmly and temporarily, e.g., in the spirit of *"هێشتا کەس وەڵامی نەداوەتەوە"* ("no one has responded yet") rather than "0 responses."
- **Never robotic.** Empty states avoid placeholder-sounding phrasing entirely — every empty state is written as a specific, warm sentence appropriate to exactly what is missing, never a single reused generic "Nothing here" string across different contexts.
- **Always forward-looking where appropriate.** Where an empty state precedes an expected future event (e.g., "no photos yet" before the celebration has happened), copy may gently gesture toward that anticipation rather than simply stating absence.

---

## 18. Loading Messages

- **Elegant.** Loading moments are treated as brief anticipation beats (consistent with doc #3 §4's treatment of the Opening Experience's wait as part of the story), never as a bare technical spinner label.
- **Calm.** Loading copy, where any text accompanies a loading state at all, is brief and unhurried — e.g., in the spirit of *"چاوەڕێبن..."* ("please wait...") used sparingly, often omitted entirely in favor of the visual loading treatment carrying the moment alone (per doc #2 §15's Performance Philosophy — the loading *design*, not loading *text*, does most of the work).
- **Short.** No loading message ever exceeds a few words — this is never a category for explanation or detail.
- **Premium.** Loading copy never apologizes ("Sorry for the wait") or references technical process ("Fetching data") — it remains within the same warm, unhurried register as every other category.

---

## 19. Error Messages

- **Never blame the user.** No error message in Invita ever implies the guest or host did something wrong — even a genuine input mistake (e.g., an incomplete RSVP form) is framed neutrally around the *situation*, not the *person* (e.g., in the spirit of *"تکایە ناوێک بنووسە بۆ بەردەوامبوون"* — "please enter a name to continue" — never "You forgot to enter your name").
- **Stay calm.** Error copy never uses alarming language, urgent framing, or technical jargon (error codes, stack-trace-adjacent language) — it remains in the same warm, composed register as the rest of the product, even when something has genuinely gone wrong.
- **Offer clear recovery.** Every error message states, in the same brief sentence or an immediately adjacent one, what the guest or host can do next — an error is never left as a dead end with no path forward.
- **Brevity still applies.** Error messages follow the same Sentence Rules (§5) as any other copy — a longer, more apologetic error message is not warmer, only more cluttered; brevity combined with a calm, clear recovery path is what reads as trustworthy and premium.

---

## 20. Confirmation Messages

Confirmation dialogs (for meaningfully consequential actions) follow a consistent pattern: state the action plainly, then offer two clear, human-labeled choices.

- **Delete:** phrased to make the permanence of the action clear without alarm — e.g., a calm confirming question in the spirit of *"دڵنیایت لە سڕینەوەی ئەمە؟"* ("are you sure you want to delete this?") — paired with clearly distinct Button-tier labels for the destructive and safe choices (§10), never two ambiguous options like "Yes/No" alone.
- **Cancel:** framed as a graceful, judgment-free option to step back — never implying the guest/host is abandoning something important; a cancel action is always as dignified a choice as continuing.
- **Accept:** phrased plainly and warmly around what is being accepted (an RSVP, an invitation, a term) — see §15 for the RSVP-specific case.
- **Continue:** used when an action requires acknowledgment before proceeding — phrased around what happens next, never a bare "Continue" with no context if more specificity is available and useful.
- **Save:** confirms that a host's changes (to their invitation, guest list, etc.) have been or will be preserved — phrased with quiet confidence, never uncertainty ("Save?" alone is avoided in favor of confirming what will be saved).
- **Share:** frames sharing as extending the same warmth the guest/host has experienced to someone else — e.g., a share action is labeled around the idea of sending/sharing the invitation itself, never a generic platform-branded "Share via Invita."

---

## 21. Thank You System

Thank-you copy is tailored per occasion tone (§3) while keeping the same underlying warmth and brevity.

- **Wedding:** warm, reverent thanks centered on the couple's shared joy — e.g., in the spirit of *"سوپاس بۆ بەشداریکردنتان لە خۆشترین ڕۆژمان"* ("thank you for sharing in our happiest day").
- **Birthday:** lighter, more personally warm — e.g., in the spirit of *"سوپاس بۆ هاتنتان و دڵخۆشیمان پێکەوە"* ("thank you for coming and celebrating with us").
- **Corporate:** composed, respectful thanks acknowledging attendance/participation specifically — e.g., in the spirit of *"سوپاسی بەشداریتان دەکەین"* ("we thank you for your participation") — slightly more formal register per §3, but never cold.
- **Housewarming:** warm thanks centered on home and togetherness — e.g., in the spirit of *"سوپاس بۆ بەشداریتان لە یەکەم ڕۆژەکانی ماڵی نوێمان"* ("thank you for sharing in the first days of our new home").
- **Cross-cutting rule:** every thank-you message names *what* the guest is being thanked for specifically (attending, responding, sharing in a moment) — a generic, occasion-agnostic "Thank you!" is never used anywhere in the system.

---

## 22. Accessibility Copy

- **Readable.** All copy meets the minimum type-size and RTL line-height rules from `Invita-Visual-Identity-System.md` §12/§26 — accessibility copy is never an exception written smaller or denser than the rest of the system.
- **Simple.** Accessibility-relevant copy (e.g., alt-text-equivalent descriptions for meaningful imagery, per doc #2 §26) uses the same plain, clear register as the rest of the writing system — never a more technical or clinical register just because it serves an assistive-technology audience.
- **Screen-reader friendly.** Every essential fact (names, occasion, date, time, location, RSVP action) has a text equivalent reachable and announced in a logical order by assistive technology, per `Invita-UX-Experience-Blueprint.md` §23 — no essential information is ever conveyed only through a visual/animated reveal with no text equivalent.
- **No confusing wording.** Idioms, wordplay, or overly literary phrasing that could confuse either an assistive-technology user or a reader translating mentally are avoided in all functional copy (buttons, labels, RSVP, errors) — such phrasing may be permitted, sparingly, only in narrative/ceremonial copy (invitation lines, thank-yous) where the emotional payoff clearly outweighs the small added interpretive load, and even then must remain immediately understandable.

---

## 23. Photo Captions

Where captions accompany photographs (per the Photo Frame System and Photo Composition Rules in `Invita-Visual-Identity-System.md` §18 and `Invita-UX-Experience-Blueprint.md` §21), caption copy follows these rules:

- **Couples** (e.g., the `invita.jpg` centerpiece): captions, where used at all, are brief and personal — e.g., naming the couple simply, without narrating the photo's content ("رەیان و کاروان" rather than a descriptive sentence about what they're doing in the image) — the photograph itself, per doc #3 §7, is left to speak without over-captioning.
- **Families:** captions may name the family or occasion collectively rather than every individual, unless the host specifically provides individual names — kept brief and warm.
- **Children:** captions referencing children use gentle, warm phrasing appropriate to a family audience, never cutesy or overly cartoonish language, consistent with the brand's dignified-even-when-warm personality (§1).
- **Groups:** captions for group photos (e.g., a family gathering or festival scene) may reference the collective occasion or moment rather than attempting to enumerate everyone present.
- **Cross-cutting rule:** captions are always optional accompaniment, never a requirement — the Photo Experience is designed (per doc #3 §7) to succeed on imagery and framing alone; a caption, when present, adds warmth, but a photograph is never left feeling incomplete without one.

---

## 24. Emoji Policy

- **When emojis may appear:** exactly one symbolic character is established as a canonical brand element — the ❤ used between رەیان and کاروان's names (per doc #3 §6) — and equivalent single, restrained symbolic marks may be used analogously in future templates strictly as a *connective mark between names or as a considered occasion symbol* (e.g., a single, tasteful mark appropriate to an occasion), never as general-purpose decoration scattered through sentences.
- **When emojis never appear:** in any UI chrome (buttons, labels, navigation, notifications, errors, loading states), in any narrative/invitation sentence copy, in thank-you messages, or anywhere multiple emoji might appear together. Invita never uses emoji as a substitute for a well-chosen word, and never uses emoji to add "fun" or informality to functional copy.
- **Luxury first.** The governing test for any proposed symbolic mark: does this feel like a fine engraving chosen with restraint (like a monogram or seal, per `Invita-Visual-Identity-System.md` §21's Wax Seal direction), or does it feel like a casual messaging-app habit? Only the former is ever permitted, and only in the single connective-mark role described above.

---

## 25. Future Localization

Invita's Sorani-first identity (§1–§2) is the platform's *foundation*, not merely its first language — future localization into Arabic, English, and Turkish must extend this identity, never dilute or replace it.

- **Arabic:** the closest linguistic and script neighbor to Sorani (also RTL, also Arabic-script) — the RTL layout rules, numeral conventions (§6), and the overall warm-letter voice translate with the least structural change; the primary localization work is idiomatic (finding equivalently warm, brief Arabic phrasing for each rule in this document), not structural.
- **English:** requires the most structural adaptation — LTR layout, Latin-script typography (necessarily a font decision separate from Doran, since Doran's role in this system is specifically tied to its Sorani identity per `Invita-Visual-Identity-System.md`'s typography rationale) — but the *voice* (Sections 1–4), the brevity/rhythm rules (§5), the occasion tone matrix (§3), and every category's underlying philosophy (Greetings, RSVP, Errors, etc.) transfer directly; only the specific wording and script/layout mechanics change.
- **Turkish:** LTR, Latin-script — similar adaptation profile to English structurally, with its own idiomatic warm-register equivalents needed per category.
- **Governing rule for all future languages:** localization is never a literal translation pass over the Sorani strings — each language's copy is independently authored by a native speaker against *this document's principles* (voice, tone matrix, sentence rules, category-by-category rules), the same way the Sorani copy itself was authored against those principles rather than translated from an English draft. A future localized version that reads as "translated" rather than "natively warm" has failed this document's standard, regardless of grammatical correctness.
- **What must never change across any future language:** the six-Act experience structure and its copy beats (doc #3), the occasion tone matrix's emotional registers (§3), the brevity and one-sentence-per-thought discipline (§5), the emoji policy (§24), and the fundamental principle that Invita speaks as a warm, dignified person — never as translated software.

---

## 26. Copy Anti-Patterns

**Overwriting**
- Never add a second sentence where one already completes the thought — every additional sentence must earn its place against the Brevity principle (§4).
- Never describe a photograph in words when the image itself (per doc #3 §7) already carries the moment.

**Cheap wording**
- Never use casual internet-register phrasing, slang, or borrowed English words where a proper warm Sorani phrase exists.
- Never use filler transition phrases ("So," "Well," "Just a reminder that...") — every sentence starts directly with its actual content.

**Marketing clichés**
- Never use promotional/sales language anywhere ("Don't miss out," "Limited spots," "The best invitation platform") — Invita never sells itself or the event; it simply extends the invitation with warmth.
- Never use countdown-adjacent urgency language borrowed from e-commerce ("Hurry, only X days left!") — see §12's explicit rule.

**Emoji abuse**
- Never use more than the single, canonical connective mark described in §24 — no emoji strings, no reaction-style emoji, no emoji used as bullet points or decoration.

**Long paragraphs**
- Never write a continuous block of prose anywhere in the product — see §5's paragraph rules; if a piece of copy feels like it's becoming a paragraph, it must be broken into sequential short beats instead.

**Aggressive tone**
- Never use urgency, guilt, or pressure language in RSVP reminders, errors, or notifications (§15, §16, §19) — Invita is always patient, per its core personality (doc #1 §5, §9).
- Never use exclamation marks as a substitute for genuinely warm phrasing — per §6, they are reserved for rare, genuine moments (e.g., "today," §12), not sprinkled throughout for energy.

**Translation mistakes**
- Never write Sorani copy as a literal, word-for-word translation of an English UI convention (e.g., a stiff literal rendering of "Submit" or "Please try again later") — every line must be authored natively in Sorani against this document's principles, per §25's governing rule.
- Never mix inconsistent terminology for the same concept across screens or templates (§6's consistency rule) — this is the most common and most damaging translation-adjacent mistake, since it silently signals to a careful reader that the product wasn't written with full attention.

---

## 27. Template Copy Matrix

A comparative view of how the same underlying voice adapts its emotional key across nine occasion templates (Engagement is covered within the Tone table, §3, given its close relationship to Wedding).

| Occasion | Emotional Key (from doc #3 §22) | Greeting Register | Signature Copy Moment | Thank-You Focus |
|---|---|---|---|---|
| **Wedding** | Union, romance | Reverent, tender | The Names Reveal — the couple's names given the most ceremonial weight in the entire template | Thanking guests for sharing the couple's happiest day |
| **Housewarming** | Warmth, new beginnings, belonging | Welcoming, grounded | The invitation line naming the new home directly (per the رەیان ❤ کاروان worked example) | Thanking guests for sharing the first days in the new home |
| **Birthday** | Personal joy, celebration | Light, warm, personally affectionate | A celebratory line naming the celebrant directly, warmly but never childishly | Thanking guests for celebrating together |
| **Graduation** | Pride, achievement, forward momentum | Respectful, proud | A line acknowledging effort/achievement, addressed with enough formality to suit family/elder readers | Thanking guests for honoring the achievement |
| **Baby Shower** | Tenderness, hope, gentle anticipation | The gentlest register in the system | A softly-phrased announcement of new life/anticipation | Thanking guests for their gentle presence/support |
| **Corporate Events** | Composed warmth, professional dignity | Warm-but-formal | An organizational-context invitation line that still avoids corporate-speak | Thanking attendees for their participation |
| **Festival** | Communal joy | Warm, communal, slightly more energetic rhythm | An inclusive, gathering-oriented invitation line | Thanking the community for gathering together |
| **Private Events** | Intimacy, discretion | Understated, quiet | A sparer, more understated invitation line reflecting a smaller scale | A quiet, personal thank-you |
| **Family Gathering** | Belonging, continuity across generations | Warm, inclusive | An invitation line that may reference family/generations directly | Thanking family for gathering together |

**How each stays "unmistakably Invita":** every row uses the same underlying structure (a greeting beat, then a naming/occasion beat, then—where relevant—a personal-touch beat), obeys the same Sentence Rules (§5), the same emoji restraint (§24), and the same brevity discipline (§4) — only the emotional key, the specific vocabulary chosen for that key, and the greeting register (§3) shift row to row.

---

## 28. Microcopy System

An organized inventory of every small text category the product requires, each governed by the rule set above:

- **Inputs:** field labels (§7 Label tier) and placeholder text (§7 Input tier) for RSVP forms, guest name entry, and any host-side content fields — always short, natural, never instructional-sounding where the label alone suffices.
- **Buttons:** all interactive call-to-action text (§10) — RSVP actions, map/location actions, share actions, save/continue actions.
- **Dialogs:** confirmation and informational dialog copy (§20) — a title-equivalent line stating the situation plainly, plus the two (or more) button choices.
- **Countdown:** the numeral display plus its adjacent framing phrase across all four temporal states (§12).
- **Maps:** the map action button label (§14) and any brief accompanying directions text a host provides.
- **Music:** the mute/unmute control's minimal label or icon-paired text equivalent (for accessibility, per §22) — kept to a single word or icon-equivalent concept, never a sentence.
- **Gallery:** any framing text around a photo collection (e.g., a section title introducing multiple photos beyond the single centerpiece) — Section Title tier, brief.
- **Sharing:** the share action's button label (§10, §20) and any confirmation microcopy after a link is copied/shared (Notification System, §16 Information category).
- **RSVP:** the full set of RSVP-flow copy — the initial prompt, the accept/decline choice labels, and the resulting confirmation message (§15).
- **Notifications:** the full set defined in §16 — success, error, information, warning, reminder, network, offline.
- **Governing rule for this entire system:** every string above must be traceable to a rule in Sections 1–26 — no microcopy string is ever authored ad hoc, in isolation, without reference to this bible's voice, tone matrix, and category-specific rules.

---

## 29. Editorial Governance

- **A single glossary of approved terms** (per §6's consistency rule) is maintained as the canonical reference for every recurring concept (RSVP, countdown, guest, location, host, etc.) — any new template or feature must reuse the glossary's existing term for a concept rather than introducing a synonym.
- **Review standard:** every piece of copy proposed for the product — whether a single button label or a full invitation template's narrative copy — is reviewed against four checks, in order: (1) Does it match the Brand Voice (§1) and the correct occasion Tone (§3)? (2) Does it obey the Sentence Rules (§5) and relevant category rules (Sections 8–24)? (3) Is it grammatically correct, natural Sorani, free of translation-mistake patterns (§26)? (4) Does it use only glossary-approved terminology (§6, above)?
- **Native-speaker requirement:** per this document's opening note, every example and every production string must be authored or reviewed by a native Sorani speaker with editorial authority over the platform's voice — no string ships based on non-native draft copy alone.
- **Consistency audits:** as new templates are added (per `Invita-Foundation-Document.md` §17's template expansion strategy), a periodic audit compares new copy against the Template Copy Matrix (§27) and the glossary, to catch terminology drift or tonal inconsistency before it ships.
- **Approval workflow:** proposed copy changes are documented against the specific section of this bible they relate to (e.g., "this RSVP confirmation change relates to §15") — this traceability is what keeps the bible a living, authoritative reference rather than a document copy quietly drifts away from over time.
- **Amendment rule:** this document itself may only be amended by adding new worked examples or refining category rules for new occasions/features — its core voice (§1), writing principles (§4), and anti-patterns (§26) are treated as stable, foundational commitments, not to be casually revised template by template.

---

## 30. Final Editorial Manifesto

Every word inside بانگێشت نامە is written the way رەیان and کاروان would want their own invitation written — chosen carefully, spoken warmly, and never wasted.

A button is not "just a button." A loading message is not "just a technical necessity." An error is not "just a system message." Every one of these is a moment where a real person is reading real words on their phone, and Invita's only standard is that those words should feel like they came from someone who cares, not from software that needed to say something.

This bible exists so that the twelfth future template — a Corporate Event, a Festival, a Family Gathering not yet imagined — still sounds unmistakably like the same voice that wrote رەیان ❤ کاروان's Housewarming invitation: **elegant, warm, emotional, respectful, minimal, and unmistakably premium.** Not because every occasion feels the same, but because every occasion is written by the same steady, caring hand.

A word, once chosen well, outlasts any trend in how software is supposed to sound. That is the only ambition of this document: that every sentence Invita ever speaks, in Sorani today and in whatever language it speaks tomorrow, remains true to that one hand, that one voice, for as long as the platform exists.

---

*End of Content, Copywriting & Localization Bible. Together with `Invita-Foundation-Document.md`, `Invita-Visual-Identity-System.md`, and `Invita-UX-Experience-Blueprint.md`, this document completes the full pre-development editorial and design foundation for Invita. No string should ship without tracing back to a rule set here.*
