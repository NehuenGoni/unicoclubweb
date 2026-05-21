export const SITE = {
  name: "UnicoClub",
  domain: "unico.club",
  url: "https://unico.club",
} as const;

export const ADDRESS = {
  street: "2955 West Corporate Lakes Boulevard",
  city: "Weston",
  region: "FL",
  postalCode: "33331",
  country: "US",
  line1: "2955 West Corporate Lakes Boulevard",
  line2: "Weston, FL 33331",
  embedUrl:
    "https://www.google.com/maps?q=2955+West+Corporate+Lakes+Boulevard,+Weston,+FL+33331&output=embed",
  shareUrl:
    "https://www.google.com/maps/search/?api=1&query=2955+West+Corporate+Lakes+Boulevard%2C+Weston%2C+FL+33331",
} as const;

export const HOURS_DISPLAY: { day: string; hours: string | null }[] = [
  { day: "Monday",    hours: "7:00 AM – 11:30 PM" },
  { day: "Tuesday",   hours: "7:00 AM – 11:30 PM" },
  { day: "Wednesday", hours: "7:00 AM – 11:30 PM" },
  { day: "Thursday",  hours: "7:00 AM – 11:30 PM" },
  { day: "Friday",    hours: "7:00 AM – 11:30 PM" },
  { day: "Saturday",  hours: "8:00 AM – 8:00 PM" },
  { day: "Sunday",    hours: "8:00 AM – 8:00 PM" },
];

export const HOURS_SCHEMA = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "23:30",
  },
  {
    dayOfWeek: ["Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
];

export const HOURS_SUMMARY = "Mon–Fri 7am–11:30pm · Sat–Sun 8am–8pm";

export const CONTACT = {
  phoneDisplay: "+1 (786) 767-1070",   // commercial — main public number
  phoneTel:     "+17867671070",
  email:        null as string | null, // TODO: client to confirm
} as const;

export const SOCIALS = {
  instagram: {
    handle: "@unicoclubweston",
    url:    "https://instagram.com/unicoclubweston",
  },
  whatsappCommercial: {
    display: "+1 (786) 767-1070",
    url:     "https://wa.me/17867671070",
  },
  whatsappReservations: {
    display: "+1 (786) 874-3486",
    url:     "https://wa.me/17868743486",
    contactName: "Santi",
  },
} as const;
