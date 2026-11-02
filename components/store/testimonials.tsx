import { BadgeCheck, Quote, Star } from "lucide-react";
import { Stars } from "@/components/ui/stars";

const testimonials = [
  {
    quote:
      "The ghee smells exactly like my nani's kitchen. We finished a 1 kg jar in three weeks — reordering before Eid.",
    name: "Ayesha Khan",
    area: "Satellite Town",
    initials: "AK",
    tint: "linear-gradient(145deg,#D9A441,#A96C15)",
    tag: "Pure desi ghee",
    product: "/products/ghee.svg",
  },
  {
    quote:
      "Ordered at 11 am, the rider was at my gate before Maghrib. The butter on hot parathas is unreal.",
    name: "Hamza Sheikh",
    area: "DC Colony",
    initials: "HS",
    tint: "linear-gradient(145deg,#A9502F,#7C341C)",
    tag: "Fresh butter",
    product: "/products/butter.svg",
  },
  {
    quote:
      "I stopped buying honey from the bazaar. This sidr honey crystallises in winter — that's how you know it's real.",
    name: "Fatima Noor",
    area: "Model Town",
    initials: "FN",
    tint: "linear-gradient(145deg,#5F6E4C,#3F4B31)",
    tag: "Sidr honey",
    product: "/products/honey.svg",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-canvas py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[560px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Word of mouth</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
              From kitchens
              <span className="text-gold-gradient"> like yours.</span>
            </h2>
            <p className="mt-4 max-w-[460px] text-[13.5px] leading-relaxed text-ink-soft">
              Real reviews from real families across Gujranwala — the kind of feedback you can&apos;t
              print on a label.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 shadow-card">
            <span className="font-display text-4xl font-semibold leading-none text-ink">4.6</span>
            <div>
              <Stars rating={4.6} size="md" />
              <p className="mt-1.5 text-[10px] font-medium text-ink-faint">
                1,240+ verified reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="group relative flex flex-col overflow-hidden rounded-[1.7rem] border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-lift"
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 size-28 rounded-full opacity-20 blur-2xl transition group-hover:opacity-35"
                style={{ background: "var(--gold)" }}
              />
              <Quote className="absolute right-5 top-5 size-7 text-gold/15" strokeWidth={1.5} />

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <Stars rating={5} />
                  <span className="text-[10px] font-bold text-ink-faint">5.0</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 text-[8.5px] font-extrabold uppercase tracking-[0.1em] text-gold">
                  <span className="size-1.5 rounded-full bg-gold" />
                  {item.tag}
                </span>
              </div>

              <blockquote className="mt-5 flex-1 text-[13px] leading-relaxed text-ink-soft">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                <span
                  className="grid size-9 place-items-center rounded-full text-[10px] font-extrabold text-white"
                  style={{ background: item.tint }}
                >
                  {item.initials}
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-1 text-[11.5px] font-bold text-ink">
                    {item.name}
                    <BadgeCheck className="size-3.5 text-success" />
                  </p>
                  <p className="text-[10px] text-ink-faint">Gujranwala · {item.area}</p>
                </div>
                <span className="ml-auto flex items-center gap-0.5 rounded-full bg-success-soft px-2 py-1 text-[8.5px] font-bold uppercase tracking-[0.08em] text-success">
                  <Star className="size-2.5 fill-current" />
                  Verified
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface/40 px-5 py-4">
          <p className="text-[11.5px] text-ink-soft">
            <span className="font-bold text-ink">One jar at a time.</span> Every review comes from a
            verified Malik Dairy order.
          </p>
          <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-gold">
            <BadgeCheck className="size-3.5" />
            Authentic feedback only
          </span>
        </div>
      </div>
    </section>
  );
}
