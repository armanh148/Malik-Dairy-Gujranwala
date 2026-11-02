import { Calendar, FlaskConical, Cpu, ShoppingBag, Leaf } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Schedule An Appointment",
    description: "Book a doorstep dairy trial or consult with us for fresh daily organic supply across Gujranwala.",
  },
  {
    icon: FlaskConical,
    title: "Free Farm Land Testing",
    description: "Daily microbiological and fat testing ensuring zero adulteration, pure density, and natural quality.",
  },
  {
    icon: Cpu,
    title: "High-Tech Agro Equipment",
    description: "Hygienic stainless steel vacuum milking pipelines and automated temperature-controlled cooling.",
  },
  {
    icon: ShoppingBag,
    title: "Harvesting The Products",
    description: "Fresh morning harvests and chilled dairy dispatched directly to your kitchen before 7:00 AM daily.",
  },
];

export function WorkflowSection() {
  return (
    <section id="process" className="relative scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5e9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2e7d32]">
              <Leaf className="size-3.5" />
              Work Process
            </div>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,3.8vw,2.75rem)] font-bold tracking-tight text-[#0c2415]">
              How We Do Agricultural Work
            </h2>
          </div>
          <p className="max-w-[460px] text-xs leading-relaxed text-[#385342]">
            We follow strict nature-first principles and hygienic modern processing to bring the uncompromised goodness of farm living directly to your family.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left: Woman holding fresh vegetables harvest */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-3xl border border-[#0c2415]/10 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1594488518001-447a1bf64c58?auto=format&fit=crop&w=800&q=80"
                alt="Smiling female farmer holding fresh harvest cabbage basket"
                loading="lazy"
                className="size-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right: 4 Process Rows */}
          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-5 rounded-2xl border border-[#0c2415]/10 bg-[#fbfbfa] p-5 transition duration-300 hover:border-[#43a047] hover:bg-white hover:shadow-md"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#43a047]/30 bg-[#e8f5e9] text-[#2e7d32]">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#0c2415]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#385342]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}