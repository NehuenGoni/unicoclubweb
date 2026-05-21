"use client";

// ─── PLACEHOLDER ─────────────────────────────────────────────
// Replace stat values and labels with real data from the client.
// ─────────────────────────────────────────────────────────────

import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const STATS = [
  { value: "4",    label: "Padel courts",            suffix: "" },
  { value: "14",   label: "Hours of play per day",   suffix: "h" },
  { value: "100%", label: "Courts with LED lighting", suffix: "" },
  { value: "1",    label: "App to book instantly",   suffix: "" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[var(--bg-base)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerGroup
          stagger={0.08}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]"
        >
          {STATS.map(({ value, label, suffix }) => (
            <StaggerItem
              key={label}
              className="flex flex-col items-center gap-2 py-10 px-6 bg-[var(--bg-base)] text-center"
            >
              <span className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tabular-nums leading-none">
                {value}
                {suffix && (
                  <span className="text-2xl text-[var(--accent)] ml-1">{suffix}</span>
                )}
              </span>
              <span className="text-[var(--text-secondary)] text-sm leading-snug max-w-[140px]">
                {label}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
