import { ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const harvests = [
  {
    number: "01",
    tag: "In the fields",
    title: "The morning round",
    text: "Our herds move to fresh pasture at first light. Open grazing, seasonal feed, no shortcuts.",
    image: "/images/hero-tractor.jpg",
    photo: true,
    tint: "",
  },
  {
    number: "02",
    tag: "Batch 0142",
    title: "Hand-churned butter",
    text: "Last night's cream meets the wooden churn at 4:30 am. Soft, bright and lightly salted.",
    image: "/products/butter.svg",
    photo: false,
    tint: "radial-gradient(120% 120% at 30% 18%, #FDF8EB 0%, #F3E6C9 54%, #E5D2A8 100%)",
  },
  {
    number: "03",
    tag: "Copper & flame",
    title: "Ghee, slowed down",
    text: "Butter simmers low for hours until the milk solids turn golden and the kitchen smells like home.",
    image: "/products/ghee.svg",
    photo: false,
    tint: "radial-gradient(120% 120% at 30% 18%, #FCF3DD 0%, #F4E1B8 52%, #E8CD92 100%)",
  },
  {
    number: "04",
    tag: "Ready to leave",
    title: "Sealed with care",
    text: "Glass jars are filled warm, labelled by hand and chilled for the same-day Gujranwala route.",
    image: "/images/farmer-smiling.jpg",
    photo: true,
    tint: "",
  },
];

export function ProjectsSection() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-canvas-deep py-20 sm:py-24 lg:py-28">
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.2] [mask-image:radial-gradient(75%_65%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[620px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Recent harvest</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
              Inside the dairy,
              <span className="text-gold-gradient"> this week.</span>
            </h2>
            <p className="mt-4 max-w-[500px] text-[13.5px] leading-relaxed text-ink-soft">
              From the first pasture round to the last sealed jar — a look at the batches leaving our
              dairy right now.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-surface/70 px-4 py-2 text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink-faint md:self-auto">
            <Clock className="size-3.5 text-gold" />
            Updated every morning
          </span>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {harvests.map((item) => (
            <article
              key={item.number}
              className="group flex flex-col overflow-hidden rounded-[1.6rem] border border-line bg-surface/70 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={item.photo ? undefined : { background: item.tint }}
              >
                {item.photo ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="pattern-dots absolute inset-0 opacity-[0.15]" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 size-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </>
                )}

                <span
                  className={cn(
                    "absolute left-3 top-3 grid size-8 place-items-center rounded-full text-[10px] font-extrabold backdrop-blur",
                    item.photo ? "bg-espresso/70 text-gold" : "bg-espresso/80 text-gold",
                  )}
                >
                  {item.number}
                </span>
                <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-espresso/60 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-cream/85 backdrop-blur">
                  {item.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-[1rem] font-semibold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[11px] leading-relaxed text-ink-soft">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.14em] text-gold transition group-hover:gap-2">
                  View batch
                  <ArrowUpRight className="size-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
