import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Sparkles } from "lucide-react";

const services = [
  {
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    tag: "Services Details",
    badge: "01 · Fresh Harvest",
    title: "Agriculture Products",
    description: "Fresh organic seasonal vegetables, cold-pressed mustard oil, and pesticide-free grains grown in fertile Gujranwala soil.",
    href: "/#products",
  },
  {
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=900&q=80",
    tag: "Services Details",
    badge: "02 · Natural Pasture",
    title: "Crops Cultivation",
    description: "Sustainably cultivated green pastures, natural clover & alfalfa fodder, ensuring peak cattle wellness and rich milk fat.",
    href: "/#about",
  },
  {
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=900&q=80",
    tag: "Services Details",
    badge: "03 · Pure Churn",
    title: "Dairy Production",
    description: "Raw buffalo & cow milk, slow-churned desi ghee in copper vessels, hand-churned white butter, and traditional soft khoya.",
    href: "/#products",
  },
];

export function ProductCategories() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32">
      {/* Subtle Background Accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-5%] top-[10%] size-[500px] rounded-full bg-[#e8f5e9]/40 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/30 bg-[#e8f5e9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32] shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              What We Offer
            </div>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold tracking-tight text-[#0c2415]">
              We Offers Eco &amp; Agriculture Services
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden items-center gap-2.5 sm:flex">
            <button
              type="button"
              className="grid size-12 place-items-center rounded-full border-2 border-[#0c2415]/15 bg-white text-[#0c2415] shadow-xs transition-all duration-300 hover:border-[#43a047] hover:bg-[#e8f5e9] hover:text-[#2e7d32] hover:scale-105 active:scale-95"
              aria-label="Previous service"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              className="grid size-12 place-items-center rounded-full bg-[#43a047] text-white shadow-md transition-all duration-300 hover:bg-[#388e3c] hover:shadow-lg hover:scale-105 active:scale-95"
              aria-label="Next service"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* 3 Green Service Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-[2.4rem] border border-[#0c2415]/10 bg-[#0e3b1f] shadow-md transition-all duration-500 hover:-translate-y-2.5 hover:border-[#43a047]/60 hover:shadow-[0_30px_60px_-12px_rgba(14,59,31,0.5)] cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0c2415]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e3b1f] via-transparent to-transparent opacity-65" />

                {/* Top Corner Pill Badge */}
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0c2415]/80 px-3.5 py-1 text-[11px] font-bold text-[#86efac] backdrop-blur-md shadow-sm">
                    <Sparkles className="size-3 text-[#f5b61a]" />
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body - Deep Forest Green */}
              <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-[#0e3b1f] to-[#082413] p-6 text-white sm:p-9">
                <div>
                  <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#86efac] backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 font-display text-[1.45rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#f5b61a]">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>

                <div className="mt-9 flex items-center justify-between border-t border-white/10 pt-5">
                  <Link
                    href={item.href}
                    className="text-xs font-black uppercase tracking-widest text-white/90 transition-colors duration-300 group-hover:text-[#f5b61a]"
                  >
                    Read More
                  </Link>
                  <span className="grid size-11 place-items-center rounded-full bg-[#43a047] text-white shadow-md transition-all duration-300 group-hover:bg-[#f5b61a] group-hover:text-[#0c2415] group-hover:scale-110">
                    <ArrowRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}