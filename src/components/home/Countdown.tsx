"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ target }: { target: Date }) {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  // Avoid hydration mismatch — render nothing on server
  if (!time) return null;

  // Club already opened
  if (
    time.days === 0 &&
    time.hours === 0 &&
    time.minutes === 0 &&
    time.seconds === 0
  ) {
    return (
      <p className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm">
        We are open!
      </p>
    );
  }

  const units = [
    { label: "days",    value: pad(time.days) },
    { label: "hours",   value: pad(time.hours) },
    { label: "min",     value: pad(time.minutes) },
    { label: "sec",     value: pad(time.seconds) },
  ];

  return (
    <div className="flex flex-col items-center gap-3 mt-2">
      <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest">
        Opening in
      </p>
      <div className="flex items-center gap-3 sm:gap-4">
        {units.map(({ label, value }, i) => (
          <div key={label} className="flex items-center gap-3 sm:gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="min-w-[3rem] sm:min-w-[3.5rem] px-3 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-center">
                <span className="text-xl sm:text-2xl font-bold tabular-nums text-[var(--text-primary)]">
                  {value}
                </span>
              </div>
              <span className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider">
                {label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="text-[var(--text-muted)] text-xl font-light pb-4">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
