export const business = {
  name: "Davids Frisörsalong",
  tagline: "Barbershop på Kungsängsgatan",
  description:
    "Herrfrisör och barbershop på Kungsängsgatan 13 — klassisk rakning med kniv, skäggtrimning och hårklippning.",
  category: "Barbershop",
  address: {
    street: "Kungsängsgatan 13",
    postalCode: "753 22",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: null as string | null,
  phoneLink: null as string | null,
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/davids-frisorsalong-130552",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: null as string | null,
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "David",
  rating: 4.9,
  reviewCount: 70,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8571, lng: 17.6414 },
  hours: {
    note: "Boka tid via Bokadirekt.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    { title: "4,9 på Bokadirekt", description: "70 verifierade omdömen." },
    { title: "Klassisk rakning", description: "Rakning med rakkniv — enligt Bokadirekt." },
    { title: "Kungsängsgatan 13", description: "Centralt i Uppsala." },
    { title: "Noggrann service", description: "«Mycket noggrann och man om resultatet» — Bokadirekt." },
  ],
  services: [
    { id: "klassisk-rakning", name: "Klassisk rakning (rakkniv)", description: "Klassisk rakning med kniv!", duration: "—", priceFrom: 199, note: "Källa: Bokadirekt." },
    { id: "skaggtrimning", name: "Skäggtrimning", description: "Forma skägget med sax och maskin, markera linjer med kniv.", duration: "—", priceFrom: 149, note: "Källa: Bokadirekt." },
    { id: "harklippning", name: "Hårklippning", description: "Maskinklippning och saxklippning inklusive styling.", duration: "—", priceFrom: 350, note: "Källa: Bokadirekt." },
    { id: "snagg", name: "Snagg", description: "Snagga hela håret endast med maskin.", duration: "—", priceFrom: 249, note: "Källa: Bokadirekt." },
    { id: "barnklippning", name: "Barnklippning 0–10 år", description: "Klippning för barn.", duration: "—", priceFrom: 250, note: "Källa: Bokadirekt." },
  ],
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-1.jpg",
  gallery: [
    { id: 1, label: "Salongen", image: "/images/hero.jpg" },
    { id: 2, label: "Barber", image: "/images/gallery-1.jpg" },
    { id: 3, label: "Kungsängsgatan", image: "/images/gallery-2.jpg" },
  ],
  about: {
    headline: "Barbershop i Uppsala",
    paragraphs: [
      "Davids Frisörsalong på Kungsängsgatan 13 erbjuder hårklippning, skäggtrimning och klassisk rakning med kniv.",
      "Boka tid via Bokadirekt — stylist Ciya och teamet tar hand om dig med noggrannhet och omsorg.",
    ],
  },
  testimonials: [
    {
      text: "Bra service och mycket noggrann!",
      author: "Noel E.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/davids-frisorsalong-130552",
      rating: 5,
      date: "2026-06-11",
    },
    {
      text: "Mycket noggrann och man om resultatet! Mycket prisvärd!",
      author: "Patrick E.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/davids-frisorsalong-130552",
      rating: 5,
      date: "2026-06-05",
    },
    {
      text: "Väldigt duktig frisör, bra bemötande. Rekommenderar varmt😃",
      author: "Lotta E.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/davids-frisorsalong-130552",
      rating: 5,
      date: "2026-06-05",
    },
    {
      text: "Mitt första besök hos Ciya och kan inte ge annat än massa beröm till en frisör som är mycket noggrann och är mån om att kunden skall lämna salongen med perfekt resultat. Så blev det i mitt fall, jag är supernöjd med både håret och skägget. Tack Ciya!",
      author: "Peshang S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/davids-frisorsalong-130552",
      rating: 5,
      date: "2026-06-03",
    },
  ],
  seoKeywords: ["barber Kungsängsgatan", "herrfrisör Uppsala", "rakning med kniv Uppsala", "Davids Frisörsalong"],
  brandColors: { primary: "#1a1a2e", secondary: "#c9a227", accent: "#f5f0e8", dark: "#0f0f1a" },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(getFullAddress())}&output=embed`;
}

export function getMapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`;
}
