"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

type RevealTag = "div" | "section" | "li" | "article" | "header" | "h2" | "h3" | "p";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  as?: RevealTag;
  className?: string;
  amount?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  as = "div",
  className,
  amount = 0.2,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount });

  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
