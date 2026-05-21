"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const defaultItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

type GroupTag = "div" | "section" | "ul" | "article";
type ItemTag = "div" | "li" | "article";

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  amount = 0.2,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  as?: GroupTag;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount });

  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
  variants = defaultItemVariants,
}: {
  children: ReactNode;
  className?: string;
  as?: ItemTag;
  variants?: Variants;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
