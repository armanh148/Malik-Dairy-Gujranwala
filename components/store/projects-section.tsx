import { ArrowRight, Leaf } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80",
    title: "Agriculture Products",
    subtitle: "Organic Greenhouse",
  },
  {
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=700&q=80",
    title: "Fresh Fruit & Veg",
    subtitle: "Natural Nursery",
  },
  {
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=700&q=80",
    title: "Crops & Pure Dairy",
    subtitle: "Open Pastures",
  },
  {
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=700&q=80",
    title: "Farming Solutions",
    subtitle: "Eco Soil Testing",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-20 bg-[#f8f8f5] py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5e9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2e7d32]">
              <Leaf className="size-3.5" />
              Latest Projects
            </div>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,3.8vw,2.75rem)] font-bold tracking-tight text-[#0c2415]">
              Recently Completed Project
            </h2>
          </div>
          <p className="max-w-[460px] text-xs leading-relaxed text-[#385342]">
            Explore our recent organic field harvests, automated hygienic dairy pipelines, and sustainable crop cycles in Gujranwala.
          </p>
        </div>

        {/* 4 Tall Gallery Cards */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4.6] overflow-hidden rounded-[2.2rem] bg-[#0c2415]/10 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(12,36,21,0.18)]"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="size-full object-cover transition duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2415] via-[#0c2415]/30 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

              {/* Bottom Dark Green Pill Badge with Title */}
              <div className="absolute inset-x-4 bottom-4">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c2415]/90 p-4 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#43a047] group-hover:border-[#43a047]">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#86efac] group-hover:text-white/90">
                      {item.subtitle}
                    </p>
                    <p className="mt-0.5 font-display text-[15px] font-bold leading-tight text-white">
                      {item.title}
                    </p>
                  </div>
                  <span className="grid size-9 place-items-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#0c2415] group-hover:scale-110">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="mt-8 flex items-center gap-2">
          <span className="h-2.5 w-7 rounded-full bg-[#43a047]" />
          <span className="size-2.5 rounded-full bg-[#0c2415]/20" />
          <span className="size-2.5 rounded-full bg-[#0c2415]/20" />
        </div>

      </div>
    </section>
  );
}