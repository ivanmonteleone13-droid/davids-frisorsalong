import { business } from "@/lib/business";

export default function Testimonials() {
  return (
    <section className="bg-[#0f0f1a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Vad våra kunder säger</h2>
          <p className="mt-4 text-white/80">{business.rating}/5 baserat på {business.reviewCount} omdömen — ordagrant från Bokadirekt.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {business.testimonials.map((review, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex gap-1 text-[#c9a227]">{Array.from({ length: review.rating }).map((_, j) => <span key={j}>★</span>)}</div>
              <blockquote className="text-sm text-white/90">&ldquo;{review.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-xs text-white/60">— {review.author} · {review.source}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
