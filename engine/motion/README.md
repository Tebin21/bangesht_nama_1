# engine/motion

Sprint 3 status: motion infrastructure only — `MotionProvider` (reduced-motion detection + GSAP defaults), `ScrollProvider` (Lenis smooth-scroll bootstrap + scroll-progress publishing), `useReducedMotion`/`useScrollProgress` hooks, and `transitions.ts` (token-driven Framer Motion/GSAP presets). GSAP and Lenis are dynamically imported so they stay out of the initial JS payload. No real Scene animation, GSAP timeline content, or ScrollTrigger-driven narrative pacing exists yet — those are Sprint 4+, per `Invita-Motion-3D-Production-Bible.md`.
