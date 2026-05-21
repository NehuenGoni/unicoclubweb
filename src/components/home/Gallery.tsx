"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import type { Variants } from "motion/react";

const GALLERY_ITEMS = [
  {
    id: 1,
    label: "Main court",
    span: "col-span-2 row-span-2",
    src: "/images/court-cinematic.jpg",
    alt: "Pro-grade indoor padel court",
  },
  {
    id: 2,
    label: "Facilities",
    span: "",
    src: "/images/courts-row.jpg",
    alt: "Row of professional padel courts",
  },
  {
    id: 3,
    label: "Atmosphere",
    span: "",
    src: "/images/locker-room.jpg",
    alt: "Premium locker room with wooden lockers",
  },
  {
    id: 4,
    label: "Gym",
    span: "",
    src: "/images/gym-action.jpg",
    alt: "Fully equipped gym for members",
  },
  {
    id: 5,
    label: "Entrance / Lobby",
    span: "",
    src: "/images/lobby-mantra.jpg",
    alt: "Lobby with signature wall mantra",
  },
];

const galleryItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Gallery() {
  return (
    <section className="py-24 bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Our facilities
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            {/* PLACEHOLDER */}
            Spaces designed so you can focus on the game.
          </p>
        </Reveal>

        {/* Grid */}
        <StaggerGroup
          stagger={0.09}
          className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] gap-3"
        >
          {GALLERY_ITEMS.map(({ id, label, span, src, alt }) => (
            <StaggerItem
              key={id}
              variants={galleryItemVariants}
              className={[
                "group relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card-alt)]",
                span,
              ].join(" ")}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-wider text-white/90">
                {label}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
