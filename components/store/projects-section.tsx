import { ArrowRight, Leaf, Sparkles } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    number: "01",
    title: "Agriculture Products",
    subtitle: "Organic Greenhouse",
  },
  {
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    number: "02",
    title: "Fresh Fruit & Veg",
    subtitle: "Natural Nursery",
  },
  {
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80",
    number: "03",
    title: "Crops & Pure Dairy",
    subtitle: "Open Pastures",
  },
  {
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
    number: "04",
    title: "Farming Solutions",
    subtitle: "Eco Soil Testing",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden bg-[#faf9f6] py-24 sm:py-32">
      {/* Warm Peach/Cream Accent Block on Bottom-Right (as in reference image) */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/3 rounded-tl-[5rem] bg-[#fef1e1]/70 blur-xl" />
      <div className="pointer-events-none absolute left-0 top-0 size-96 rounded-full bg-[#e8f5e9]/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/30 bg-[#e8f5e9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32] shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              Latest Projects
            </div>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold tracking-tight text-[#0c2415]">
              Recently Completed Project
            </h2>
          </div>
          <p className="max-w-[480px] text-sm leading-relaxed text-[#385342]">
            Explore our recent organic field harvests, automated hygienic dairy pipelines, and sustainable crop cycles across our Gujranwala farms.
          </p>
        </div>

        {/* 4 Tall Gallery Cards */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4.8] overflow-hidden rounded-[2.5rem] border border-[#0c2415]/10 bg-[#0c2415] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(12,36,21,0.2)]"
            >
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="size-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081f10] via-[#081f10]/35 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top Tag */}
              <div className="absolute left-4 top-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10.5px] font-bold text-white backdrop-blur-md shadow-sm">
                  <Sparkles className="size-3 text-[#f5b61a]" />
                  {item.number}
                </span>
              </div>

              {/* Bottom Dark Green Pill Badge with Title */}
              <div className="absolute inset-x-4 bottom-4">
                <div className="flex items-center justify-between rounded-3xl border border-white/15 bg-[#092012]/92 p-4.5 text-white backdrop-blur-md shadow-lg transition-all duration-300 group-hover:bg-[#43a047] group-hover:border-[#43a047]">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#86efac] group-hover:text-white/90">
                      {item.subtitle}
                    </p>
                    <p className="mt-0.5 font-display text-[15.5px] font-bold leading-tight text-white">
                      {item.title}
                    </p>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full bg-white/20 text-white shadow-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#0c2415] group-hover:scale-110 group-hover:rotate-[-45deg]">
                    <ArrowRight className="size-4.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Slider Dots */}
        <div className="mt-10 flex items-center gap-2">
          <span className="h-2.5 w-8 rounded-full bg-[#43a047] shadow-xs" />
          <span className="size-2.5 rounded-full bg-[#0c2415]/20 transition hover:bg-[#0c2415]/40" />
          <span className="size-2.5 rounded-full bg-[#0c2415]/20 transition hover:bg-[#0c2415]/40" />
        </div>

      </div>
    </section>
  );
}