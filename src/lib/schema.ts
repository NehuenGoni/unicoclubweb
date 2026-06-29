import {
  SITE,
  ADDRESS,
  GEO,
  HOURS_SCHEMA,
  CONTACT,
  SOCIALS,
  AREA_SERVED,
  PRICE_RANGE,
} from "@/lib/siteData";

/**
 * Builds the JSON-LD object describing the club as a LocalBusiness.
 *
 * `@type` combines SportsActivityLocation (a LocalBusiness subtype that makes
 * the entity eligible for local rich results) with the more specific SportsClub.
 * Absolute URLs are required by schema.org, so image/logo are resolved against SITE.url.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "SportsClub"],
    name: SITE.name,
    url: SITE.url,
    sport: "Padel",
    image: `${SITE.url}/opengraph-image.png`,
    logo: `${SITE.url}/icon.png`,
    telephone: CONTACT.phoneTel,
    ...(CONTACT.email ? { email: CONTACT.email } : {}),
    priceRange: PRICE_RANGE,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    hasMap: ADDRESS.shareUrl,
    areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: HOURS_SCHEMA.map((h) => ({
      "@type": "OpeningHoursSpecification",
      ...h,
    })),
    sameAs: [
      SOCIALS.instagram.url,
      SOCIALS.whatsappCommercial.url,
    ],
  };
}
