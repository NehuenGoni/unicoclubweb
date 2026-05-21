import Image from "next/image";
import Link from "next/link";
import { ADDRESS, CONTACT, HOURS_DISPLAY } from "@/lib/siteData";

// ─── Getting here cards ───────────────────────────────────────
// TODO: update descriptions once address is confirmed
const GETTING_HERE = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "By car",
    description:
      "Located in the Corporate Lakes business park, with easy access from I-75. Free parking on site.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H19.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5H9.75v1.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75v-1.5H5.25a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75h3zm0 0v16.5m0 0h3m-3 0H5.25m5.25 0v-3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75V20.25m0 0h3m-3 0h-3" />
      </svg>
    ),
    title: "Parking",
    description: "Free parking available on site.", // TODO: confirm with client
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Public transit",
    description: "Best reached by car — limited public transit in the area.",
  },
];

export default function MapSection() {
  return (
    <div className="min-h-screen pt-16 bg-[var(--bg-base)]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-10 sm:py-12 px-4 sm:px-6 overflow-hidden">
        <Image
          src="/images/gym-action.jpg"
          alt="Gym in action"
          fill
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)]/70 via-[var(--bg-base)]/50 to-[var(--bg-base)]" />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-3 sm:gap-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest">
            Find us
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight">
            Get directions
          </h1>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-xl">
            Located in Weston, FL. Easy access and free parking.
          </p>
          {/* Open in Maps CTA */}
          <a
            href={ADDRESS.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)]/50 bg-white/5 hover:bg-[var(--accent)]/5 text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm font-medium transition-all mt-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Open in Google Maps
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Map + contact cards ──────────────────────────────── */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto relative">

          {/* Map — full width */}
          <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] min-h-[500px] lg:min-h-[580px]">
            {ADDRESS.embedUrl ? (
              <iframe
                src={ADDRESS.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "580px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="unico.club location"
              />
            ) : (
              <div className="w-full h-full min-h-[580px] flex flex-col items-center justify-center gap-4 text-[var(--text-muted)]">
                <div
                  className="absolute inset-0 rounded-2xl opacity-[0.03]"
                  style={{
                    backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[var(--text-secondary)]">Map coming soon</p>
                  <p className="text-xs opacity-60">Address will be added before opening</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact info — overlay bottom-right on desktop, stacked below on mobile */}
          <div className="mt-4 lg:mt-0 lg:absolute lg:bottom-4 lg:right-4 flex flex-col gap-3 lg:w-64">
            {/* Address */}
            <div className="p-5 rounded-xl border border-white/10 bg-[var(--bg-card)]/90 backdrop-blur-md flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-semibold text-xs uppercase tracking-widest">Address</span>
              </div>
              <div className="text-[var(--text-secondary)] text-sm leading-relaxed">
                <p>{ADDRESS.line1}</p>
                <p>{ADDRESS.line2}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="p-5 rounded-xl border border-white/10 bg-[var(--bg-card)]/90 backdrop-blur-md flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="font-semibold text-xs uppercase tracking-widest">Phone</span>
              </div>
              <a href={`tel:${CONTACT.phoneTel}`} className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors">
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Hours ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--bg-card)] border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: label */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Opening hours
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-sm">
              {/* PLACEHOLDER */}
              Courts are available every day. Book ahead to secure your preferred slot.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--bg-base)] text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--accent)]/20 mt-2"
            >
              Book a court
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Right: hours table */}
          <div className="flex flex-col divide-y divide-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
            {HOURS_DISPLAY.map(({ day, hours }) => (
              <div
                key={day}
                className="flex items-center justify-between px-6 py-4 bg-[var(--bg-card-alt)] hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-[var(--text-secondary)] text-sm font-medium">{day}</span>
                {hours === null ? (
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] bg-white/5 px-3 py-1 rounded-full">
                    Closed
                  </span>
                ) : (
                  <span className="text-[var(--text-primary)] text-sm font-semibold">{hours}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting here (sobre fondo lobby) ─────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
        <Image
          src="/images/lobby-mantra.jpg"
          alt="Lobby with signature wall mantra"
          fill
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)]/70 via-[var(--bg-base)]/50 to-[var(--bg-base)]" />
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-10 text-center">
            Getting here
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {GETTING_HERE.map(({ icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md hover:border-[var(--accent)]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors">
                  {icon}
                </div>
                <div>
                  <h3 className="text-[var(--text-primary)] font-semibold mb-1">{title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <p className="text-[var(--text-secondary)]">
            Questions about the club or how to get here?
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
