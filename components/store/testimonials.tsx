import { Star, Leaf, Quote, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

const reviews = [
  {
    rating: 5,
    tag: "VERIFIED BUYER",
    product: "Pure Desi Ghee (1kg)",
    quote: "Malik Dairy's desi ghee is genuinely pure. The rich aroma while cooking halwa reminds me of our ancestral village in Punjab. Never going back to commercial brands.",
    name: "Dr. Tariq Mahmood",
    role: "Civil Lines, Gujranwala",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80",
    date: "Verified Order · 2 days ago",
  },
  {
    rating: 5,
    tag: "VERIFIED BUYER",
    product: "Daily Morning Milk Subscription",
    quote: "We subscribed to fresh morning milk delivery 6 months ago. Always chilled, perfectly on time before 7:00 AM, and the layer of malai is remarkably thick and sweet.",
    name: "Fatima Noor",
    role: "Model Town, Gujranwala",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80",
    date: "Daily Subscriber · 1 week ago",
  },
  {
    rating: 5,
    tag: "VERIFIED BUYER",
    product: "White Butter & Sidr Honey",
    quote: "The hand-churned white butter and raw sidr honey are extraordinary. You can taste that no chemicals or preservatives have touched these products. Pure natural taste.",
    name: "Bilal Rasheed",
    role: "Cantt, Gujranwala",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80",
    date: "Verified Order · 3 days ago",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#f8f9f7] via-[#fafbf9] to-white py-24 sm:py-32">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[-5%] size-[500px] rounded-full bg-[#43a047]/5 blur-[120px]" />
        <div className="absolute right-[10%] bottom-[-5%] size-[600px] rounded-full bg-[#f5b61a]/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/30 bg-[#e8f5e9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32] shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              Client Review
            </div>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold tracking-tight text-[#0c2415]">
              Trusted By 1000+ Customers
            </h2>
          </div>

          {/* Rating Summary Box */}
          <div className="flex items-center gap-4 rounded-2xl border border-[#0c2415]/10 bg-white p-3.5 shadow-sm backdrop-blur-md sm:px-5">
            <span className="font-display text-3xl font-black text-[#0c2415]">4.9</span>
            <div>
              <div className="flex text-[#43a047]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-xs font-bold text-[#385342]">
                (500+ Verified Gujranwala Reviews)
              </p>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((rev, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] border border-[#0c2415]/10 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#43a047] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(12,36,21,0.1)]"
            >
              {/* Subtle Decorative Quote Icon in Card Background */}
              <Quote className="pointer-events-none absolute right-6 top-6 size-12 text-[#43a047]/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#43a047]/20" />

              <div>
                {/* Verified Tag, Product & Rating */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5e9] px-3 py-1 text-[10.5px] font-black uppercase tracking-wider text-[#2e7d32]">
                    <ShieldCheck className="size-3.5" />
                    {rev.tag}
                  </span>
                  <div className="flex gap-0.5 text-[#43a047]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Product Tag */}
                <p className="mt-3 text-[11px] font-bold text-[#43a047]">
                  {rev.product}
                </p>

                {/* Quote Text */}
                <p className="mt-4 font-display text-[15px] leading-relaxed text-[#0c2415]/85 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="mt-8 flex items-center justify-between border-t border-[#0c2415]/10 pt-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="size-12 rounded-full border-2 border-[#43a047]/40 object-cover shadow-sm ring-2 ring-[#e8f5e9]"
                    />
                    <CheckCircle2 className="absolute -bottom-1 -right-1 size-4 rounded-full bg-white text-[#43a047]" fill="#43a047" />
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-bold text-[#0c2415]">
                      {rev.name}
                    </h4>
                    <p className="text-xs font-medium text-[#385342]">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-[#0c2415]/10 bg-white/70 px-6 py-4.5 text-center text-xs font-semibold text-[#0c2415] shadow-xs backdrop-blur-md sm:gap-10">
          <span className="flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded-full bg-[#e8f5e9] text-[#2e7d32]">
              ✓
            </span>
            98.4% Customer Retention Rate
          </span>
          <span className="flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded-full bg-[#e8f5e9] text-[#2e7d32]">
              ✓
            </span>
            25,000+ Fresh Morning Deliveries
          </span>
          <span className="flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded-full bg-[#e8f5e9] text-[#2e7d32]">
              ✓
            </span>
            100% Zero-Adulteration Guarantee
          </span>
        </div>

      </div>
    </section>
  );
}