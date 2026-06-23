import Link from "next/link";
import { business } from "@/lib/business";

export default function Hero() {
  const heroImage = "heroImage" in business ? business.heroImage : null;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#1a1a2e]/90 text-white">
      {heroImage && (
        <>
          <img src={heroImage} alt={`${business.name} — barbershop på ${business.address.street}`} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-[#0f0f1a]/80" aria-hidden />
        </>
      )}
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <span aria-hidden>★</span>{business.rating}/5 · {business.reviewCount} omdömen
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Barbershop<span className="block text-[#c9a227]">på Kungsängsgatan</span></h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">{business.description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={business.bookingUrl} className="inline-flex items-center justify-center rounded-full bg-[#c9a227] px-8 py-4 font-semibold text-[#0f0f1a]">{business.bookingLabel}</a>
            <Link href="/tjanster" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur hover:bg-white/20">Se våra tjänster</Link>
          </div>
        </div>
        {heroImage && <div className="relative hidden lg:block"><div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 shadow-2xl"><img src={heroImage} alt={business.name} className="h-full w-full object-cover" loading="lazy" /></div></div>}
      </div>
    </section>
  );
}
