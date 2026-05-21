"use client";

import { useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef, type RefObject } from "react";

export function useParallax(distance = 100): {
  ref: RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, distance]);
  return { ref, y };
}
