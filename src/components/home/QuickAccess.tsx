"use client";

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const CARDS = [
  {
    href: "/book",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    title: "Book a court",
    description: "Pick your day, time, and available court in seconds.",
    cta: "Go to bookings",
    highlight: true,
  },
  {
    href: "/location",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Get directions",
    description: "Map, address, and club opening hours.",
    cta: "See location",
    highlight: false,
  },
  {
    href: "/contact",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Contact us",
    description: "Send us a message or reach out on WhatsApp.",
    cta: "Get in touch",
    highlight: false,
  },
];

export default function QuickAccess() {
  return (
    <section className="py-24 bg-[var(--bg-card)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            What would you like to do?
          </h2>
        </Reveal>

        <StaggerGroup
          stagger={0.1}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {CARDS.map(({ href, icon, title, description, cta, highlight }) => (
            <StaggerItem key={href}>
              <Link
                href={href}
                className={[
                  "group flex flex-col gap-6 p-8 rounded-xl border transition-all h-full",
                  highlight
                    ? "border-[var(--accent)]/50 bg-[var(--accent)]/5 hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]"
                    : "border-[var(--border)] bg-[var(--bg-card-alt)] hover:border-white/20 hover:bg-white/5",
                ].join(" ")}
              >
                <div className={[
                  "w-14 h-14 rounded-xl flex items-center justify-center transition-colors",
                  highlight
                    ? "bg-[var(--accent)]/20 text-[var(--accent)] group-hover:bg-[var(--accent)]/30"
                    : "bg-white/5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]",
                ].join(" ")}>
                  {icon}
                </div>
                <div className="flex-1">
                  <h3 className={[
                    "font-semibold text-lg mb-2",
                    highlight ? "text-[var(--accent)]" : "text-[var(--text-primary)]",
                  ].join(" ")}>
                    {title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{description}</p>
                </div>
                <span className={[
                  "inline-flex items-center gap-1 text-sm font-medium transition-colors",
                  highlight ? "text-[var(--accent)]" : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]",
                ].join(" ")}>
                  {cta}
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
