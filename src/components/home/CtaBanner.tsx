"use client";

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal
          y={40}
          duration={0.9}
          className="relative overflow-hidden rounded-2xl p-10 sm:p-16 text-center flex flex-col items-center gap-6"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 60%, var(--accent-light) 100%)",
            }}
          />

          {/* Decorative background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--bg-base)] leading-tight max-w-2xl">
              {/* PLACEHOLDER – swap with agency copy */}
              Ready to play?
            </h2>
            <p className="text-[var(--bg-base)]/70 text-lg max-w-md leading-relaxed">
              Book your court online in seconds and enjoy the best padel in Weston, FL.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[var(--bg-base)] text-[var(--accent)] font-bold text-base hover:bg-[var(--bg-card)] transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Book now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-md border border-[var(--bg-base)]/30 hover:border-[var(--bg-base)]/60 text-[var(--bg-base)]/70 hover:text-[var(--bg-base)] font-semibold text-base transition-all hover:-translate-y-0.5"
              >
                Ask a question
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
