import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf } from "lucide-react";

const services = [
  {
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    tag: "Services Details",
    title: "Agriculture Products",
    description: "Fresh organic seasonal vegetables, pure cold-pressed oils, and natural farm harvest grown without harmful synthetic pesticides.",
    href: "/#products",
  },
  {
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=800&q=80",
    tag: "Services Details",
    title: "Crops Cultivation",
    description: "Sustainably cultivated green pastures, chemical-free organic soil enrichment, and nutrient-dense fodder for cattle wellness.",
    href: "/#about",
  },
  {
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80",
    tag: "Services Details",
    title: "Dairy Production",
    description: "Pure whole milk, slow-churned artisanal desi ghee in copper vessels, fresh handmade white butter, and traditional khoya.",
    href: "/#products",
  },
];

export function ProductCategories() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5e9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2e7d32]">
              <Leaf className="size-3.5" />
              What We Offer
            </div>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,3.8vw,2.75rem)] font-bold tracking-tight text-[#0c2415]">
              We Offers Eco &amp; Agriculture Services
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-[#0c2415]/15 bg-white text-[#0c2415] transition hover:bg-[#e8f5e9] hover:text-[#2e7d32]"
              aria-label="Previous service"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full bg-[#43a047] text-white shadow-md transition hover:bg-[#388e3c]"
              aria-label="Next service"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* 3 Green Service Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#0c2415]/10 bg-[#0e3b1f] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(14,59,31,0.35)]"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/11] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e3b1f] via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Body - Deep Forest Green */}
              <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-[#0e3b1f] to-[#092815] p-7 text-white sm:p-8">
                <div>
                  <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#86efac] backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <h3 className="mt-3.5 font-display text-[1.35rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#f5b61a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <Link
                    href={item.href}
                    className="text-xs font-extrabold uppercase tracking-widest text-white/90 transition hover:text-[#f5b61a]"
                  >
                    Read More
                  </Link>
                  <span className="grid size-10 place-items-center rounded-full bg-[#43a047] text-white shadow-md transition-all duration-300 group-hover:bg-[#f5b61a] group-hover:text-[#0c2415] group-hover:scale-110">
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