import { Calendar, Apple, Cpu, Truck, Leaf, Sparkles, Check, Star } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Calendar,
    title: "Farming Planning",
    description: "Careful pasture rotation, seasonal feed scheduling, and soil fertilization ensure healthy herds and superior quality milk.",
  },
  {
    step: "02",
    icon: Apple,
    title: "Natural Animal Feed",
    description: "100% organic green alfalfa, corn silage, and pure mineral supplements without synthetic hormones or industrial additives.",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Modern Milking & Churning",
    description: "Automated vacuum closed-circuit milking and ancestral copper kettle slow-churning for golden, aromatic desi ghee.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Harvesting & Delivery",
    description: "Immediate chill preservation down to 4°C and dawn delivery in insulated vans directly to your doorstep across Gujranwala.",
  },
];

export function WorkflowSection() {
  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Subtle Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-5%] size-[500px] rounded-full bg-[#e8f5e9]/50 blur-[120px]" />
        <div className="absolute left-[-5%] bottom-[-10%] size-[500px] rounded-full bg-[#fef7e6]/60 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/30 bg-[#e8f5e9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32] shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              How We Work
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.2vw,3.3rem)] font-extrabold tracking-tight text-[#0c2415]">
              How We Do Agricultural Work
            </h2>
          </div>
          <p className="max-w-[480px] text-sm leading-relaxed text-[#385342]">
            We combine ancestral farming wisdom with modern cold-chain hygiene to ensure every single drop of milk and every jar of ghee is uncompromised and pure.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Woman with Fresh Harvest Basket (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
              
              {/* Offset Decorative Background Frame */}
              <div className="absolute -inset-3.5 rounded-[3rem] border-2 border-dashed border-[#43a047]/25 sm:-inset-4" />
              <div className="absolute -bottom-4 -left-4 size-44 rounded-full bg-[#f5b61a]/15 blur-2xl" />

              {/* Main Photo Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[#0c2415]/10 bg-[#f7f8f6] shadow-[0_20px_50px_rgba(12,36,21,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1594488518001-447a1bf64c58?auto=format&fit=crop&w=900&q=80"
                  alt="Smiling female farmer holding fresh harvest cabbage basket"
                  loading="lazy"
                  className="size-full object-cover object-center transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2415]/75 via-transparent to-transparent opacity-60" />

                {/* Floating Top Pill Badge */}
                <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3.5 py-1.5 text-[11px] font-bold text-[#0c2415] shadow-md backdrop-blur-md">
                  <Sparkles className="size-3 text-[#43a047]" />
                  <span>100% Organic Morning Harvest</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="grid size-7 place-items-center rounded-full bg-[#43a047] text-white">
                        <Check className="size-4" strokeWidth={3} />
                      </span>
                      <p className="text-xs font-extrabold text-[#0c2415]">
                        Delivered Under 4°C
                      </p>
                    </div>
                    <div className="flex text-[#43a047]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-medium text-[#385342]">
                    Hygienically bottled and insulated for peak freshness.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Connected Process Step Rows (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#0c2415]/10 rounded-[2.5rem] border border-[#0c2415]/10 bg-[#faf9f5] p-6 shadow-sm sm:p-8">
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group flex flex-col gap-5 py-6 first:pt-2 last:pb-2 transition-all duration-300 sm:flex-row sm:items-start"
                  >
                    {/* Step Icon */}
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="grid size-14 place-items-center rounded-2xl border border-[#43a047]/30 bg-white text-[#2e7d32] shadow-sm transition-all duration-300 group-hover:bg-[#43a047] group-hover:text-white group-hover:scale-105">
                        <Icon className="size-7" strokeWidth={1.75} />
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-[#0c2415] transition-colors duration-300 group-hover:text-[#2e7d32]">
                          {item.title}
                        </h3>
                        <span className="text-xs font-black uppercase tracking-wider text-[#43a047]">
                          Step {item.step}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-[#385342]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
