import { Star, Leaf } from "lucide-react";

const reviews = [
  {
    rating: 5,
    tag: "VERIFIED",
    quote: "Malik Dairy's desi ghee is genuinely pure. The rich aroma while cooking halwa reminds me of our ancestral village in Punjab. Never going back to commercial brands.",
    name: "Dr. Tariq Mahmood",
    role: "Civil Lines, Gujranwala",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
  {
    rating: 5,
    tag: "VERIFIED",
    quote: "We subscribed to fresh morning milk delivery 6 months ago. Always chilled, perfectly on time before 7:00 AM, and the layer of malai is thick and sweet.",
    name: "Fatima Noor",
    role: "Model Town, Gujranwala",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  },
  {
    rating: 5,
    tag: "VERIFIED",
    quote: "The hand-churned white butter and raw sidr honey are extraordinary. You can taste that no chemicals or preservatives have touched these products.",
    name: "Bilal Rasheed",
    role: "Cantt, Gujranwala",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-20 bg-[#f7f8f6] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5e9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2e7d32]">
              <Leaf className="size-3.5" />
              Client Review
            </div>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,3.8vw,2.75rem)] font-bold tracking-tight text-[#0c2415]">
              Trusted By 1000+ Customers
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-2xl font-black text-[#0c2415]">4.9</span>
            <div>
              <div className="flex text-[#43a047]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-[11px] font-semibold text-[#385342]">
                (500+ verified reviews)
              </p>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((rev, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-[#0c2415]/10 bg-white p-7 shadow-sm transition duration-300 hover:border-[#43a047] hover:shadow-lg"
            >
              <div>
                {/* Verified Tag & Stars */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#e8f5e9] px-2.5 py-0.5 text-[10px] font-bold text-[#2e7d32]">
                    {rev.tag}
                  </span>
                  <div className="flex text-[#43a047]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-5 text-sm leading-relaxed text-[#0c2415]/80">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="mt-6 flex items-center gap-3.5 border-t border-[#0c2415]/10 pt-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="size-11 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#0c2415]">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-[#385342]">
                    {rev.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}