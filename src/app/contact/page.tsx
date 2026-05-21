import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Leave your email to get updates from unico.club Weston, or reach us on WhatsApp and Instagram.",
};

export default function ContactPage() {
  return <ContactForm />;
}
