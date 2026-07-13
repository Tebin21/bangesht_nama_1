"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const VARIANT_CLASSNAMES = {
  primary: "bg-ink text-ivory",
  gold: "text-ink",
  glass: "bg-ivory/[18%] backdrop-blur-[16px] border border-ink/[10%] text-ink",
  ghost: "bg-transparent text-ink",
} as const;

type ButtonVariant = keyof typeof VARIANT_CLASSNAMES;

type ButtonProps = {
  variant?: ButtonVariant;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Button — Molecule tier (Atom composition + simple Framer Motion feedback
 * only), per Design System Bible §9. Naming/role-suffixed, no occasion
 * awareness — occasion-specific accent colors are passed in by the
 * Organism/Scene that uses this Button, never hardcoded here.
 */
export function Button({
  variant = "primary",
  onClick,
  type = "button",
  disabled,
  className,
  children,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.15 }}
      style={
        variant === "gold"
          ? { background: "linear-gradient(135deg, var(--color-antique-gold), var(--color-foil-gold))" }
          : undefined
      }
      className={cn(
        "font-doran-bold text-button rounded-button px-6 py-3 disabled:opacity-40 disabled:pointer-events-none",
        VARIANT_CLASSNAMES[variant],
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
