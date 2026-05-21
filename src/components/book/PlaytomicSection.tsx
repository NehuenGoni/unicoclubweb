// ─── PLAYTOMIC INTEGRATION ────────────────────────────────────
// Currently configured as "external link" (default / base option).
// To switch to the embedded widget, replace the <ExternalLink> block
// with the Playtomic <iframe> embed snippet and set USE_WIDGET = true.
// Requires a Playtomic plan that includes widget functionality.
//
// TODO: replace PLAYTOMIC_URL with the club's real Playtomic page URL.
// ─────────────────────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "@/lib/siteData";

const PLAYTOMIC_URL = "#"; // TODO: replace with real Playtomic club URL
const USE_WIDGET    = false; // flip to true once widget is contracted

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose a date & time",
    description: "Browse real-time availability and pick the slot that works for you.",
  },
  {
    step: "02",
    title: "Select your court",
    description: "All courts are available for hourly booking — no memberships required.",
  },
  {
    step: "03",
    title: "Confirm & play",
    description: "Instant confirmation. Show up, grab your racket, and enjoy the game.",
  },
];

const PERKS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Available 24/7",
    desc: "Book any time of the day, from any device.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Instant confirmation",
    desc: "Your booking is confirmed the moment you complete it.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
    title: "Easy management",
    desc: "Cancel or reschedule your booking directly from the app.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Find players",
    desc: "Connect with other players and fill your court through Playtomic.",
  },
];

export default function PlaytomicSection() {
  return (
    <div className="min-h-screen pt-16 bg-[var(--bg-base)]">

      {/* ── Hero con imagen de fondo ──────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        {/* Imagen aérea como fondo */}
        <Image
          src="/images/courts-aerial.jpg"
          alt="Aerial view of the padel courts you can book"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Capa oscura general para legibilidad */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Degradado inferior: imagen → bg-base */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-[var(--bg-base)]/70 to-[var(--bg-base)]" />

        {/* Contenido superpuesto */}
        <div className="relative z-10 px-4 sm:px-6 pb-16 pt-12">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/50 bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              Online bookings
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md">
              Book your court
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-xl drop-shadow-sm">
              Choose your day and time. Fast, simple, and available from your phone.
            </p>

            {USE_WIDGET ? (
              /* ── Embedded Playtomic widget ─────────────────────
                 Replace the src with the actual embed URL from Playtomic.
                 The height may need adjusting depending on Playtomic's widget.
              ─────────────────────────────────────────────────── */
              <div className="w-full mt-4 rounded-2xl overflow-hidden border border-[var(--border)]">
                <iframe
                  src={PLAYTOMIC_URL}
                  width="100%"
                  height="700"
                  style={{ border: 0 }}
                  title="Book a court at unico.club"
                  loading="lazy"
                />
              </div>
            ) : (
              /* ── External link to Playtomic ──────────────────── */
              <div className="flex flex-col items-center gap-3 mt-2">
                <a
                  href={PLAYTOMIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--bg-base)] font-semibold text-base transition-all shadow-lg shadow-[var(--accent)]/30 hover:shadow-[var(--accent)]/50 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Book on Playtomic
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <p className="text-white/60 text-sm">
                  You&apos;ll be redirected to the Playtomic booking system.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Prefer WhatsApp? (reservations via Santi) ────────── */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href={SOCIALS.whatsappReservations.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[var(--text-primary)] font-semibold text-base">Prefer WhatsApp?</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1 leading-relaxed">
                Reach out to {SOCIALS.whatsappReservations.contactName} to book by WhatsApp — {SOCIALS.whatsappReservations.display}.
              </p>
            </div>
            <svg className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[#25D366] transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--bg-card)] border-y border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] text-center mb-14">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ step, title, description }) => (
              <div key={step} className="flex flex-col gap-4">
                <span className="text-5xl font-bold text-[var(--accent)]/20 tabular-nums leading-none select-none">
                  {step}
                </span>
                <div>
                  <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perks ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] text-center mb-12">
            Why book with Playtomic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-3 p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                  {icon}
                </div>
                <h3 className="text-[var(--text-primary)] font-semibold text-sm">{title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <p className="text-[var(--text-secondary)]">
            Have questions about bookings or availability?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[var(--border)] hover:border-white/20 bg-white/5 hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium transition-all"
          >
            Contact us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
