"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes } from "react";

type RevealProps = Pick<
  HTMLAttributes<HTMLElement>,
  "children" | "className" | "id" | "aria-label" | "aria-labelledby"
> & {
  as?: "div" | "section" | "header" | "figure" | "li";
  delay?: number;
};

const revealTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
} as const;

/** A one-time entrance that preserves the section's semantic HTML. */
export default function Reveal({
  as = "div",
  delay = 0,
  children,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      {...props}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      className={`motion-reveal ${props.className ?? ""}`}
      transition={reduceMotion ? { duration: 0, delay: 0 } : { ...revealTransition, delay }}
    >
      {children}
    </Component>
  );
}
