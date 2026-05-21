"use client";

import { motion } from "motion/react";

export default function HeroBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, var(--accent-dark) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
