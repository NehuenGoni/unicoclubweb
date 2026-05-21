"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import Countdown from "./Countdown";
import HeroBlobs from "@/components/motion/HeroBlobs";
import { useParallax } from "@/components/motion/useParallax";

// OPENING_DATE: June 1 2026 — update if client changes the date
const OPENING_DATE = new Date("2026-06-01T00:00:00");

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  const { ref, y } = useParallax(60);
  const [isBeforeOpening, setIsBeforeOpening] = useState<boolean | null>(null);

  useEffect(() => {
    setIsBeforeOpening(OPENING_DATE.getTime() > Date.now());
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--bg-base)]" />

      <Image
        src="/images/courts-aerial.jpg"
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-60"
      />

      <HeroBlobs />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)]/80 via-[var(--bg-base)]/40 to-[var(--bg-base)]" />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="white"
        strokeWidth="1"
      >
        <rect x="100" y="80" width="600" height="440" rx="4" />
        <line x1="400" y1="80" x2="400" y2="520" />
        <rect x="250" y="80" width="300" height="200" />
        <rect x="250" y="320" width="300" height="200" />
        <circle cx="400" cy="300" r="60" />
        <line x1="100" y1="300" x2="700" y2="300" />
      </svg>

      <motion.div
        style={{ y }}
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center gap-8 pt-24 pb-32"
      >
        <h1 className="sr-only">UnicoClub — Padel Club Weston, FL</h1>

        <motion.div variants={itemVariants} className="w-full flex justify-center">
          <Image
            src="/brand/Unico-logo-Blanco-1.png"
            alt=""
            width={1080}
            height={1080}
            priority
            quality={90}
            className="w-full max-w-xs sm:max-w-sm lg:max-w-lg h-auto"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed"
        >
          World-class padel courts, instant online booking, and a community that lives the sport.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#8a6d3b] hover:bg-[#9d7c44] text-white font-semibold text-base transition-all shadow-lg shadow-[#8a6d3b]/30 hover:shadow-[#8a6d3b]/50 hover:-translate-y-0.5"
          >
            Book a court
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="white"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <Link
            href="/location"
            className="px-8 py-4 rounded-md border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold text-base transition-all hover:-translate-y-0.5"
          >
            Get directions
          </Link>
        </motion.div>

        {isBeforeOpening && (
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <Countdown target={OPENING_DATE} />
          </motion.div>
        )}
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] z-10">
        <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </div>
    </section>
  );
}
