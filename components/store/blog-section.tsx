import Link from "next/link";
import { ArrowRight, Calendar, Leaf } from "lucide-react";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
    date: "Oct 24, 2026",
    title: "How Slow-Churned Copper Desi Ghee Nourishes Your Body",
  },
  {
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=600&q=80",
    date: "Oct 18, 2026",
    title: "Grass-Fed vs Industrial Feed: Why It Matters for Milk",
  },
  {
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=600&q=80",
    date: "Oct 12, 2026",
    title: "Organic Soil Enrichment: Cultivating Clean Punjab Pastures",
  },
  {
    image: "https://images.unsplash.com/photo-1594488518001-447a1bf64c58?auto=format&fit=crop&w=600&q=80",
    date: "Oct 05, 2026",
    title: "From Dawn To Doorstep: A Morning Inside Malik Dairy",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="relative scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5e9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2e7d32]">
            <Leaf className="size-3.5" />
            Our Blog
          </div>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,3.8vw,2.75rem)] font-bold tracking-tight text-[#0c2415]">
            Our Blog &amp; Articles
          </h2>
        </div>

        {/* Magazine Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          
          {/* Left: 1 Large Featured Post (5 columns) */}
          <div className="lg:col-span-5">
            <article className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-[#0c2415] p-7 text-white shadow-md transition duration-300 hover:shadow-2xl">
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=800&q=80"
                alt="Farmer in straw hat inspecting harvest"
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2415]/95 via-[#0c2415]/40 to-transparent" />

              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#43a047] px-3 py-1 text-[11px] font-bold text-white">
                  <Calendar className="size-3" />
                  Oct 28, 2026
                </span>
                <h3 className="mt-3 font-display text-xl font-bold leading-tight text-white group-hover:text-[#f5b61a]">
                  The Benefits Of Eating Pure Organic Produce &amp; Raw Dairy Every Day
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  Discover how unpasteurized organic milk and slow-simmered desi ghee protect gut microflora and deliver bio-available vitamins.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#81c784] group-hover:text-white">
                  Read Full Article
                  <ArrowRight className="size-3.5" />
                </div>
              </div>
            </article>
          </div>

          {/* Right: 2x2 Grid of 4 Smaller Cards (7 columns) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {articles.map((item, idx) => (
              <article
                key={idx}
                className="group overflow-hidden rounded-3xl border border-[#0c2415]/10 bg-[#fbfbfa] shadow-sm transition duration-300 hover:border-[#43a047] hover:bg-white hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c2415]/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#385342]">
                    <Calendar className="size-3 text-[#43a047]" />
                    {item.date}
                  </span>
                  <h3 className="mt-2 font-display text-sm font-bold leading-snug text-[#0c2415] transition group-hover:text-[#43a047]">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#43a047]">
                    <span>Read More</span>
                    <ArrowRight className="size-3 transition duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}