const SIZE_CLASSNAMES = {
  1: "h-1",
  2: "h-2",
  3: "h-3",
  4: "h-4",
  6: "h-6",
  8: "h-8",
  12: "h-12",
  16: "h-16",
} as const;

type SpacerProps = {
  size?: keyof typeof SIZE_CLASSNAMES;
};

/** Spacer — Template tier (layout/positioning only). Explicit vertical gap. */
export function Spacer({ size = 4 }: SpacerProps) {
  return <div className={SIZE_CLASSNAMES[size]} aria-hidden="true" />;
}
