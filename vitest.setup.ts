// React 19 requires this flag in non-DOM-root test environments (e.g. custom
// reconcilers like @react-three/test-renderer) to recognize act() calls.
(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
