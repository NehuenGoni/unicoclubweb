"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { INTEREST_OPTIONS } from "@/lib/siteData";

type FormState = "idle" | "loading" | "success" | "error";

const SHOW_DELAY_MS = 2000;
const SUBSCRIBED_KEY = "founding-members-subscribed";
const DISMISSED_KEY = "founding-members-dismissed";

export default function FoundingMembersPopup() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  useEffect(() => {
    const alreadySubscribed = localStorage.getItem(SUBSCRIBED_KEY);
    const dismissedThisSession = sessionStorage.getItem(DISMISSED_KEY);
    if (alreadySubscribed || dismissedThisSession) return;

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function handleClose() {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    if (interests.length === 0) {
      setState("error");
      setErrorMsg("Please select at least one interest.");
      return;
    }

    setState("loading");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interests }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setState("success");
      setInterests([]);
      localStorage.setItem(SUBSCRIBED_KEY, "1");
      router.push("/memberships");
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please try again or reach out via WhatsApp.");
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="founding-members-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            className="relative w-full max-w-md p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent) 0%, transparent 70%)",
              }}
            />

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {state === "success" ? (
              <div className="relative flex flex-col items-center gap-4 py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[var(--text-primary)] font-bold text-lg mb-1">You&apos;re in!</h2>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    Welcome to the Founding Members list. We&apos;ll be in touch with priority access.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-1 text-[var(--accent)] text-sm font-medium hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex flex-col gap-4 text-center">
                <span className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest">
                  Founding Members
                </span>

                <h2 id="founding-members-title" className="text-[var(--text-primary)] font-bold text-2xl leading-tight">
                  The First to Belong.
                </h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Join the Founding Members list and get priority access before we open.
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  <input
                    id="founding-members-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                  />

                  <div className="flex flex-col items-center gap-2 text-center">
                    <p className="text-[var(--text-muted)] text-xs">I&apos;m interested in</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {INTEREST_OPTIONS.map((option) => {
                        const checked = interests.includes(option);
                        return (
                          <label
                            key={option}
                            className={[
                              "inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm cursor-pointer transition-colors",
                              checked
                                ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)]"
                                : "border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:border-white/20",
                            ].join(" ")}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleInterest(option)}
                              className="sr-only"
                            />
                            {option}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-light)] disabled:opacity-60 disabled:cursor-not-allowed text-[var(--bg-base)] font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--accent)]/20"
                  >
                    {state === "loading" ? "Joining..." : "Join Now"}
                  </button>
                </div>

                {state === "error" && (
                  <p className="text-red-400 text-xs text-center">{errorMsg}</p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
