import Link from "next/link";
import { ArrowRight, Calendar, Leaf, Clock, Sparkles } from "lucide-react";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=80",
    category: "Organic Nutrition",
    date: "Oct 24, 2026",
    readTime: "4 min read",
    title: "How Slow-Churned Copper Desi Ghee Nourishes Your Body & Gut",
  },
  {
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=700&q=80",
    category: "Pasture Living",
    date: "Oct 18, 2026",
    readTime: "3 min read",
    title: "Grass-Fed vs Industrial Feed: Why It Drastically Matters for Milk",
  },
  {
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=700&q=80",
    category: "Soil Science",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    title: "Organic Soil Enrichment: Cultivating Clean Punjab Green Pastures",
  },
  {
    image: "https://images.unsplash.com/photo-1594488518001-447a1bf64c58?auto=format&fit=crop&w=700&q=80",
    category: "Farm Diary",
    date: "Oct 05, 2026",
    readTime: "3 min read",
    title: "From Dawn To Doorstep: A Morning Inside Our Gujranwala Dairy",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-5%] top-[10%] size-[500px] rounded-full bg-[#e8f5e9]/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/30 bg-[#e8f5e9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32] shadow-sm">
            <Leaf className="size-3.5 text-[#43a047]" />
            Our Blog
          </div>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold tracking-tight text-[#0c2415]">
            Our Blog &amp; Articles
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] text-sm text-[#385342]">
            Read practical guides on organic dairy nutrition, traditional slow churning recipes, and pasture farming stories from Punjab.
          </p>
        </div>

        {/* Magazine Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          
          {/* Left: 1 Large Featured Post (5 columns) */}
          <div className="lg:col-span-5">
            <article className="group relative flex h-full min-h-[500px] flex-col justify-end overflow-hidden rounded-[2.5rem] bg-[#0c2415] p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_rgba(12,36,21,0.25)]">
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=1000&q=80"
                alt="Farmer in straw hat inspecting harvest"
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081f10] via-[#081f10]/55 to-transparent opacity-95" />

              {/* Top Tag */}
              <div className="absolute left-6 top-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md shadow-sm">
                  <Sparkles className="size-3 text-[#f5b61a]" />
                  Featured Article
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-3 text-xs font-bold text-[#86efac]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#43a047] px-3 py-1 text-white">
                    <Calendar className="size-3" />
                    Oct 28, 2026
                  </span>
                  <span className="flex items-center gap-1 text-white/70">
                    <Clock className="size-3" />
                    5 min read
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[1.5rem] font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#f5b61a]">
                  The Benefits Of Eating Pure Organic Produce &amp; Raw Dairy Every Day
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-white/80">
                  Discover how unpasteurized organic grass-fed milk and slow-simmered desi ghee nourish gut microflora, boost metabolism, and deliver bio-available vitamins.
                </p>

                <div className="mt-6 inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-[#86efac] transition group-hover:text-white">
                  <span>Read Full Article</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </article>
          </div>

          {/* Right: 2x2 Grid of 4 Smaller Cards (7 columns) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {articles.map((item, idx) => (
              <article
                key={idx}
                className="group overflow-hidden rounded-[2rem] border border-[#0c2415]/10 bg-[#faf9f5] shadow-xs transition-all duration-300 hover:border-[#43a047]/50 hover:bg-white hover:-translate-y-1.5 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c2415]/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="size-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-[#0c2415] shadow-xs backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#385342]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3 text-[#43a047]" />
                      {item.date}
                    </span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-[14.5px] font-bold leading-snug text-[#0c2415] transition-colors group-hover:text-[#43a047]">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-extrabold text-[#43a047]">
                    <span>Read Article</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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