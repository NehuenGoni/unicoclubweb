"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Book",     href: "/book" },
  { label: "Location", href: "/location" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bg-base)]/95 backdrop-blur-sm border-b border-[var(--border)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="UnicoClub home">
          <Image
            src="/brand/Unico-logo-Blanco-1.png"
            alt="UnicoClub"
            width={160}
            height={160}
            priority
            className="h-9 sm:h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    active
                      ? "text-[var(--accent)] bg-[var(--accent)]/10"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5",
                  ].join(" ")}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--bg-card)] border-b border-[var(--border)] px-4 pb-4 pt-2 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  active
                    ? "text-[var(--accent)] bg-[var(--accent)]/10"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/book"
            className="mt-2 px-4 py-3 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--bg-base)] text-sm font-semibold text-center transition-colors"
          >
            Book a court
          </Link>
        </div>
      )}
    </header>
  );
}
