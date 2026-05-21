import type { Metadata } from "next";
import PlaytomicSection from "@/components/book/PlaytomicSection";

export const metadata: Metadata = {
  title: "Book a Court",
  description: "Book your padel court online at unico.club Weston, FL.",
};

export default function BookPage() {
  return <PlaytomicSection />;
}
