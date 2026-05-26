"use client";

// ─── PLACEHOLDER ─────────────────────────────────────────────
// Replace icons, titles, and descriptions with real content
// once the client delivers copy from the agency.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { SOCIALS } from "@/lib/siteData";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
};

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Book 24/7",
    description: "Reserve your court online at any time, from any device.",
    href: "/book",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "World-class courts",
    description: "Modern, well-maintained facilities so you can focus on the game.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Prime location",
    description: "Easy access, available parking, in the Corporate Lakes business park of Weston, FL.",
    href: "/location",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Active community",
    description: "Join our player community and find your perfect match partners.",
    href: SOCIALS.instagram.url,
    external: true,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[var(--bg-card)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header ─── PLACEHOLDER copy */}
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Why{" "}
            <span className="text-[var(--accent)]">unico.club</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Everything you need to enjoy the best padel, all in one place.
          </p>
        </Reveal>

        {/* Grid */}
        <StaggerGroup
          stagger={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map(({ icon, title, description, href, external }) => {
            const baseClass =
              "flex flex-col gap-4 p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card-alt)] transition-colors group h-full";
            const inner = (
              <>
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors">
                  {icon}
                </div>
                <div>
                  <h3 className="text-[var(--text-primary)] font-semibold mb-1">{title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{description}</p>
                </div>
              </>
            );

            if (href) {
              return (
                <StaggerItem key={title} className="h-full">
                  <Link
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`${baseClass} cursor-pointer hover:border-[var(--accent)]/60 hover:bg-[var(--bg-card)]`}
                  >
                    {inner}
                  </Link>
                </StaggerItem>
              );
            }

            return (
              <StaggerItem
                key={title}
                className={`${baseClass} hover:border-[var(--accent)]/40`}
              >
                {inner}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
