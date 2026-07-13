# engine/three

Sprint 4 status: the reusable 3D Rig — `SceneCanvas` (renderer config), `CameraRig` (single camera, no guest-driven controls), `LightingRig` (3-light rig + Soft Bloom, Kelvin-calibrated per `Invita-Motion-3D-Production-Bible.md` §11), `Environment` (HDRI + fog), `materials/` (Gold/Glass/Paper/Wax presets), and `useCapabilityFallback` (one-time device-tier detection). `three`, `@react-three/fiber`, `@react-three/drei`, and `@react-three/postprocessing` are all dynamically imported so none of them land in the initial JS payload of any route.

No 3D Object Components (Envelope, Wax Seal, Invitation Paper, Ribbon, House, Gift, Flowers, Leaves) exist yet — those, plus camera animation, GSAP timeline consumption, ScrollTrigger-driven pacing, particles, and audio, are Sprint 5+ per the Sprint 4 execution plan.

**Testing note:** `@react-three/postprocessing`'s `EffectComposer` and `@react-three/drei`'s `<Environment>` (HDRI/Suspense loading) both require real WebGL/GPU resources and cannot be exercised via `@react-three/test-renderer`'s mock context — confirmed during Sprint 4, not a production defect. Both are verified manually via the dev-only `/style-guide` "3D Foundation" demo in a real browser instead.
