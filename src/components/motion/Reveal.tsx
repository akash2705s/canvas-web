"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
};

export function Reveal({ children, className, y = 18, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

