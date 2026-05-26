"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavChild = { label: string; href: string };
type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "group"; label: string; children: NavChild[] };

// TODO: confirm real URLs (likely Playtomic) for booking / classes / shop / memberships.
const PLACEHOLDER = "#";

const NAV_ITEMS: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "group",
    label: "Padel",
    children: [
      { label: "Book a court",  href: PLACEHOLDER },
      { label: "Book classes",  href: PLACEHOLDER },
      { label: "Shop",          href: PLACEHOLDER },
    ],
  },
  {
    kind: "group",
    label: "Pickleball",
    children: [
      { label: "Book a court",  href: PLACEHOLDER },
      { label: "Book classes",  href: PLACEHOLDER },
      { label: "Shop",          href: PLACEHOLDER },
    ],
  },
  { kind: "link", label: "Memberships", href: PLACEHOLDER },
  { kind: "link", label: "Location",    href: "/location" },
  { kind: "link", label: "Contact",     href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === PLACEHOLDER) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function Caret({ className = "" }: { className?: string }) {
  return (
    <svg
      className={["w-3 h-3 transition-transform", className].join(" ")}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

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
          {NAV_ITEMS.map((item) => {
            if (item.kind === "link") {
              const active = isActive(pathname, item.href);
              const isTodo = item.href === PLACEHOLDER;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-disabled={isTodo || undefined}
                    title={isTodo ? "Coming soon" : undefined}
                    className={[
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      active
                        ? "text-[var(--accent)] bg-[var(--accent)]/10"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            // group
            return (
              <li key={item.label} className="relative group">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 group-hover:text-[var(--text-primary)] group-focus-within:text-[var(--text-primary)]"
                >
                  {item.label}
                  <Caret className="group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
                <div
                  className={[
                    "absolute left-0 top-full pt-2",
                    "opacity-0 pointer-events-none translate-y-1",
                    "group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0",
                    "group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0",
                    "transition-all duration-150",
                  ].join(" ")}
                >
                  <ul className="min-w-[12rem] rounded-md border border-[var(--border)] bg-[var(--bg-card)] shadow-lg py-1">
                    {item.children.map((child) => {
                      const isTodo = child.href === PLACEHOLDER;
                      return (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            aria-disabled={isTodo || undefined}
                            title={isTodo ? "Coming soon" : undefined}
                            className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
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
          {NAV_ITEMS.map((item) => {
            if (item.kind === "link") {
              const active = isActive(pathname, item.href);
              const isTodo = item.href === PLACEHOLDER;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-disabled={isTodo || undefined}
                  title={isTodo ? "Coming soon" : undefined}
                  className={[
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    active
                      ? "text-[var(--accent)] bg-[var(--accent)]/10"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            }

            // group
            const open = openGroup === item.label;
            return (
              <div key={item.label} className="flex flex-col">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup(open ? null : item.label)}
                  className="px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
                >
                  <span>{item.label}</span>
                  <Caret className={open ? "rotate-180" : ""} />
                </button>
                {open && (
                  <div className="pl-3 mt-1 flex flex-col gap-1 border-l border-[var(--border)] ml-4">
                    {item.children.map((child) => {
                      const isTodo = child.href === PLACEHOLDER;
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          aria-disabled={isTodo || undefined}
                          title={isTodo ? "Coming soon" : undefined}
                          className="px-4 py-2 rounded-md text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}
