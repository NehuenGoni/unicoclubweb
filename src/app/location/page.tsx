import type { Metadata } from "next";
import MapSection from "@/components/location/MapSection";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find unico.club in Weston, FL: address, map, and opening hours.",
};

// The LocalBusiness JSON-LD (address, geo, hours, etc.) is emitted site-wide
// from the root layout via <JsonLd data={localBusinessSchema()} />, so it
// already covers this page — no page-specific structured data needed here.
export default function LocationPage() {
  return <MapSection />;
}
