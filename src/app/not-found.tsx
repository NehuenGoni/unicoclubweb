import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 bg-[var(--bg-base)] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-8">
        {/* 404 number */}
        <div className="relative">
          <span
            className="text-[10rem] font-bold leading-none select-none text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--accent-light) 0%, var(--accent) 60%, var(--accent-dark) 100%)",
              opacity: 0.15,
            }}
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-[var(--accent)]/30"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Page not found
          </h1>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--bg-base)] font-semibold text-sm transition-all hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[var(--border)] hover:border-white/20 bg-white/5 hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold text-sm transition-all"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
