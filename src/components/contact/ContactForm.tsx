"use client";

import { useState } from "react";
import { SOCIALS } from "@/lib/siteData";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please try again or reach out via WhatsApp.");
    }
  }

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
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            Stay in the loop
          </h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl">
            Leave your email and we&apos;ll keep you posted on news, openings and offers.
          </p>
        </div>
      </section>

      {/* ── Email capture + social icons ─────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-md mx-auto flex flex-col items-center gap-10">

          {/* Email form */}
          <div className="w-full p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
            {state === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[var(--text-primary)] font-bold text-lg mb-1">You&apos;re in!</h2>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    Thanks for subscribing. We&apos;ll be in touch.
                  </p>
                </div>
                <button
                  onClick={() => setState("idle")}
                  className="mt-1 text-[var(--accent)] text-sm font-medium hover:underline"
                >
                  Use another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="text-center">
                  <h2 className="text-[var(--text-primary)] font-bold text-lg mb-1">Get updates</h2>
                  <p className="text-[var(--text-muted)] text-sm">Drop your email — no spam, just news.</p>
                </div>

                <div className="flex flex-col gap-3 pt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-light)] disabled:opacity-60 disabled:cursor-not-allowed text-[var(--bg-base)] font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--accent)]/20"
                  >
                    {state === "loading" ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>

                {state === "error" && (
                  <p className="text-red-400 text-xs text-center">{errorMsg}</p>
                )}
              </form>
            )}
          </div>

          {/* Social icons */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest">Or reach us on</p>
            <div className="flex items-center gap-5">
              <a
                href={SOCIALS.whatsappCommercial.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${SOCIALS.whatsappCommercial.display}`}
                title={`WhatsApp ${SOCIALS.whatsappCommercial.display}`}
                className="w-14 h-14 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/20 hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <a
                href={SOCIALS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${SOCIALS.instagram.handle}`}
                title={`Instagram ${SOCIALS.instagram.handle}`}
                className="w-14 h-14 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/20 hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
