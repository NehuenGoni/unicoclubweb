import type { Metadata } from "next";
import MembershipsSection from "@/components/memberships/MembershipsSection";

export const metadata: Metadata = {
  title: "Memberships",
  description:
    "Explore UnicoClub membership plans in Weston, FL: Club Membership, All You Can Play, and Founding Member offers.",
};

export default function MembershipsPage() {
  return <MembershipsSection />;
}
