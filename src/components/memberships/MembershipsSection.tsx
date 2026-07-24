import Link from "next/link";
import { PLAYTOMIC, SOCIALS } from "@/lib/siteData";

const MEMBERSHIP_URL = PLAYTOMIC.memberships;

const PLANS = [
  {
    name: "Club Membership",
    price: "$179",
    description: "Your access to the UNICO community, on and off the court.",
    highlight: false,
    badge: null as string | null,
    perks: [
      "Gym access",
      "Coworking access",
      "25% off padel bookings",
      "30% off pickleball bookings",
      "Cancel up to 12 hrs before your slot",
      "10% off class packages (min. 5)",
      "10% off Pro Shop",
      "Members-only events",
    ],
  },
  {
    name: "All You Can Play · Padel + Pickleball",
    price: "$299",
    description: "Play every day. Both sports, one membership.",
    highlight: true,
    badge: "Limited spots · Max. 100 members",
    perks: [
      "1 daily booking included, off-peak 10 AM to 4 PM — padel or pickleball",
      "50% off additional bookings",
      "Cancel up to 12 hrs before your slot",
      "Gym access",
      "Coworking access",
      "20% off class packages (min. 5)",
      "10% off Pro Shop",
      "Members-only events",
    ],
  },
];

const TERMS = [
  "\"Included booking\" covers the member's own spot; other players pay their spot at current rates.",
  "Maximum one free active booking per player.",
  "Booking cancellation: up to 12 hrs before for members; 24 hrs for non-members.",
  "Class discounts apply to packages of 5 classes or more.",
  "All You Can Play: benefit valid for bookings between 10 AM and 4 PM.",
  "All You Can Play limited to 100 members.",
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0 text-[var(--accent)]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function MembershipsSection() {
  return (
    <div className="min-h-screen pt-16 bg-[var(--bg-base)]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest">
            Two ways to join
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            Membership plans
          </h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl">
            Pick the plan that fits how you play. Both options unlock gym access, coworking, and booking discounts.
          </p>
        </div>
      </section>

      {/* ── Plan cards ───────────────────────────────────────── */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={[
                "flex flex-col gap-6 p-8 rounded-2xl border",
                plan.highlight
                  ? "border-[var(--accent)]/50 bg-[var(--accent)]/5"
                  : "border-[var(--border)] bg-[var(--bg-card)]",
              ].join(" ")}
            >
              <div>
                <h2 className="text-[var(--text-primary)] font-bold text-xl mb-2">{plan.name}</h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[var(--text-primary)]">{plan.price}</span>
                <span className="text-[var(--text-muted)] text-sm">/month</span>
              </div>

              {plan.badge && (
                <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-semibold uppercase tracking-wide">
                  ⭐ {plan.badge}
                </span>
              )}

              <ul className="flex flex-col gap-3 pt-2 border-t border-[var(--border)]">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                    <CheckIcon />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href={MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "mt-auto inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all hover:-translate-y-0.5",
                  plan.highlight
                    ? "bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white shadow-lg shadow-[var(--accent)]/30"
                    : "border border-[var(--border)] hover:border-white/20 bg-white/5 hover:bg-white/10 text-[var(--text-primary)]",
                ].join(" ")}
              >
                Become a member
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Founding Member banner ──────────────────────────── */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto p-8 rounded-2xl border border-[var(--accent)]/50 bg-[var(--bg-card)] flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex-1 flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-semibold uppercase tracking-wide">
              Limited spots · Pre-opening
            </span>
            <h2 className="text-[var(--text-primary)] font-bold text-2xl">Become a Founding Member</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-md">
              Choose either membership and prepay for the year. Be part of UNICO from day one.
            </p>
            <a
              href={SOCIALS.whatsappCommercial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 px-6 py-3 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--accent)]/30"
            >
              Inquire on WhatsApp
            </a>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 min-w-[140px] p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border)]">
              <p className="text-2xl font-bold text-[var(--accent)]">2 years</p>
              <p className="text-[var(--text-muted)] text-xs mt-1">with your rate locked</p>
            </div>
            <div className="flex-1 min-w-[140px] p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border)]">
              <p className="text-2xl font-bold text-[var(--accent)]">1 month</p>
              <p className="text-[var(--text-muted)] text-xs mt-1">free — pay 11, play 12</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Family membership ───────────────────────────────── */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-[var(--text-primary)] font-semibold mb-1">Add your family</p>
            <p className="text-[var(--text-secondary)] text-sm">
              Family membership (inquire) — partner and children options, coming soon.
            </p>
          </div>
          <a
            href={SOCIALS.whatsappCommercial.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[var(--border)] hover:border-white/20 bg-white/5 hover:bg-white/10 text-[var(--text-primary)] font-semibold text-sm transition-all whitespace-nowrap"
          >
            Inquire
          </a>
        </div>
      </section>

      {/* ── Terms ────────────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-widest mb-4">Terms</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {TERMS.map((term) => (
              <p key={term} className="text-[var(--text-muted)] text-sm leading-relaxed flex gap-2">
                <span className="text-[var(--accent)]">—</span>
                <span>{term}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <p className="text-[var(--text-secondary)]">Have questions about which plan fits you best?</p>
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
