import { Sprout, Apple, Cpu, Truck, Leaf, Sparkles, Check } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Sprout,
    title: "Farming Planning",
    description: "Careful pasture rotation, seasonal organic feed scheduling, and soil nutrient audits ensure healthy dairy herds.",
  },
  {
    step: "02",
    icon: Apple,
    title: "Natural Animal Feed",
    description: "100% natural green alfalfa, clover, and mineral supplements with zero synthetic hormones or industrial additives.",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Hygienic Milking & Churning",
    description: "Automated closed-circuit vacuum milking and slow copper-kettle simmering for pure, aromatic desi ghee.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Harvesting & Delivery",
    description: "Chilled preservation below 4°C and insulated morning van delivery directly to your kitchen across Gujranwala.",
  },
];

export function WorkflowSection() {
  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-5%] size-[550px] rounded-full bg-[#e8f5e9]/40 blur-[130px]" />
        <div className="absolute left-[-5%] bottom-[-10%] size-[500px] rounded-full bg-[#fef7e6]/50 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header (Matching Reference Layout) */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/30 bg-[#e8f5e9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32] shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              How We Work
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold tracking-tight text-[#0c2415]">
              How We Do Agricultural Work
            </h2>
          </div>
          <p className="max-w-[480px] text-sm leading-relaxed text-[#385342]">
            We combine ancestral farming wisdom with modern cold-chain hygiene to ensure every single drop of milk and every jar of ghee is uncompromised and pure.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Portrait of Cheerful Female Farmer with Harvest Basket (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
              
              {/* Offset Decorative Dashed Frame */}
              <div className="absolute -inset-3.5 rounded-[3rem] border-2 border-dashed border-[#43a047]/25 sm:-inset-4" />
              <div className="absolute -bottom-4 -left-4 size-44 rounded-full bg-[#f5b61a]/15 blur-2xl" />

              {/* Main Photo Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[#0c2415]/10 bg-[#f7f8f6] shadow-[0_20px_50px_rgba(12,36,21,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=80"
                  alt="Smiling farmer holding fresh organic harvest vegetables"
                  loading="lazy"
                  className="size-full object-cover object-center transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2415]/75 via-transparent to-transparent opacity-50" />

                {/* Floating Top Pill Badge */}
                <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold text-[#0c2415] shadow-md backdrop-blur-md">
                  <Sparkles className="size-3 text-[#43a047]" />
                  <span>100% Organic Morning Harvest</span>
                </div>

                {/* Minimalist Floating Bottom Pill */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-7 place-items-center rounded-full bg-[#43a047] text-white">
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-[#0c2415]">
                        Delivered Under 4°C
                      </p>
                      <p className="text-[10.5px] text-[#385342]">
                        Bottled fresh every morning
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#e8f5e9] px-2.5 py-1 text-[10px] font-bold text-[#2e7d32]">
                    Daily 7 AM
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Clean Process Step Rows (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="space-y-2">
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative flex items-start gap-5 rounded-3xl p-5 transition-all duration-300 hover:bg-[#faf9f5] hover:shadow-[0_10px_30px_rgba(12,36,21,0.05)] sm:p-6"
                  >
                    {/* Icon Container with Hover Animation */}
                    <div className="relative shrink-0">
                      <span className="grid size-14 place-items-center rounded-2xl border border-[#43a047]/30 bg-[#e8f5e9] text-[#2e7d32] shadow-xs transition-all duration-300 group-hover:bg-[#43a047] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
                        <Icon className="size-7" strokeWidth={1.85} />
                      </span>
                    </div>

                    {/* Step Information */}
                    <div className="flex-1 min-w-0 border-b border-[#0c2415]/10 pb-6 group-last:border-none group-last:pb-0">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-display text-[18px] font-bold text-[#0c2415] transition-colors duration-300 group-hover:text-[#2e7d32]">
                          {item.title}
                        </h3>
                        <span className="shrink-0 rounded-full bg-[#e8f5e9] px-2.5 py-0.5 text-[10.5px] font-extrabold uppercase tracking-wider text-[#2e7d32] transition-colors group-hover:bg-[#43a047] group-hover:text-white">
                          Step {item.step}
                        </span>
                      </div>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-[#385342]">
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
