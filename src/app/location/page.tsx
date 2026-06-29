import type { Metadata } from "next";
import MapSection from "@/components/location/MapSection";
import { ADDRESS, HOURS_SCHEMA, SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find unico.club in Weston, FL: address, map, and opening hours.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: SITE.name,
  url: SITE.url,
  sport: "Padel",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  openingHoursSpecification: HOURS_SCHEMA.map((h) => ({
    "@type": "OpeningHoursSpecification",
    ...h,
  })),
};

export default function LocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MapSection />
    </>
  );
}
