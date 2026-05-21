import type { Metadata } from "next";
import { Lexend_Giga } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import SmoothScroll from "@/components/motion/SmoothScroll";

const lexendGiga = Lexend_Giga({
  variable: "--font-lexend-giga",
  subsets: ["latin"],
  display: "swap",
});

// Icons and OG image use Next 16's file-based metadata convention:
// src/app/{favicon.ico, icon.png, apple-icon.png, opengraph-image.png}
// Next auto-injects <link rel="icon">, <link rel="apple-touch-icon"> and og:image
// tags with correct sizes/type — so no `icons` or `openGraph.images` keys here.
export const metadata: Metadata = {
  metadataBase: new URL("https://unico.club"),

  title: {
    default: "UnicoClub — Padel Club Weston, FL",
    template: "%s | UnicoClub",
  },
  description:
    "Premier padel club in Weston, FL. Book your court online, find us at 2955 West Corporate Lakes Blvd, and join our community.",

  keywords: [
    "padel",
    "padel weston",
    "padel club weston",
    "padel south florida",
    "padel broward",
    "book padel court",
    "unico club",
    "unicoclub",
    "unico.club",
  ],

  openGraph: {
    title: "UnicoClub — Padel Club Weston, FL",
    description: "Premier padel club in Weston, FL. Book your court online.",
    url: "https://unico.club",
    siteName: "UnicoClub",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UnicoClub — Padel Club Weston, FL",
    description: "Premier padel club in Weston, FL. Book your court online.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lexendGiga.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScroll />
        <Analytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
