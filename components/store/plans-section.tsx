import { ArrowUpRight, Check, Flame, Milk, Package } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "daily",
    name: "The Daily",
    icon: Milk,
    price: "8,500",
    cadence: "per month",
    description: "For chai, cereal and everyday cooking. Fresh milk, delivered before breakfast.",
    features: [
      "1 litre fresh desi milk daily",
      "500 g desi dahi every week",
      "Free delivery across Gujranwala",
      "Skip a day or pause anytime",
    ],
    cta: "Start the daily plan",
    featured: false,
  },
  {
    id: "ghee-club",
    name: "The Ghee Club",
    icon: Flame,
    price: "12,900",
    cadence: "per month",
    description: "Our most-loved plan. One golden jar a month, plus fresh makhan on the side.",
    features: [
      "1 kg pure desi ghee monthly",
      "500 g fresh white butter monthly",
      "Member price, locked for the year",
      "Priority same-day delivery",
      "First access to seasonal batches",
    ],
    cta: "Join the Ghee Club",
    featured: true,
  },
  {
    id: "family",
    name: "The Family Pantry",
    icon: Package,
    price: "18,500",
    cadence: "per month",
    description: "A full pantry reset for the whole family — ghee, milk, butter and honey.",
    features: [
      "1 kg pure desi ghee monthly",
      "1 litre fresh milk daily",
      "500 g white butter monthly",
      "500 g raw sidr honey monthly",
      "Free priority delivery",
    ],
    cta: "Feed the family",
    featured: false,
  },
];

export function PlansSection() {
  return (
    <section id="plans" className="relative scroll-mt-24 overflow-hidden border-y border-line bg-canvas-deep py-20 sm:py-24 lg:py-28">
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.2] [mask-image:radial-gradient(70%_80%_at_50%_50%,black,transparent)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(216,163,63,0.22), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Dairy plans</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
            Never run out of
            <span className="text-gold-gradient"> the good stuff.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[13.5px] leading-relaxed text-ink-soft">
            A standing order for your kitchen, with member pricing and the same farm-fresh delivery.
            Pause or skip whenever you need.
          </p>
        </div>

        <div className="mt-11 grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const href = whatsappLink(
              `Assalam-o-Alaikum Malik Dairy! I'd like to start ${plan.name} (Rs ${plan.price} / month). Please share the details.`,
            );

            return (
              <article
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-[1.8rem] border p-6 transition duration-300 hover:-translate-y-1",
                  plan.featured
                    ? "border-gold/55 bg-gold/[0.075] shadow-lift lg:-mt-3 lg:mb-3"
                    : "border-line bg-surface/70 hover:border-gold/35",
                )}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[8.5px] font-extrabold uppercase tracking-[0.14em] text-espresso shadow-soft">
                    <span className="size-1.5 rounded-full bg-espresso" />
                    Most loved
                  </span>
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-full",
                      plan.featured
                        ? "bg-gold text-espresso"
                        : "border border-gold/25 bg-gold/10 text-gold",
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.9} />
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.12em] text-ink-faint">
                    Monthly
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[1.45rem] font-semibold tracking-[-0.03em] text-ink">
                  {plan.name}
                </h3>
                <p className="mt-2 min-h-[40px] text-[11.5px] leading-relaxed text-ink-soft">
                  {plan.description}
                </p>

                <div className="mt-5 flex items-end gap-1.5 border-b border-line pb-5">
                  <span className="font-display text-[1.05rem] font-medium text-ink-faint">Rs</span>
                  <span className="font-display text-[2.35rem] font-semibold leading-none tracking-[-0.04em] text-ink">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-[10px] font-semibold text-ink-faint">/ {plan.cadence}</span>
                </div>

                <ul className="mt-5 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-[11.5px] leading-relaxed text-ink-soft">
                      <span
                        className={cn(
                          "mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full",
                          plan.featured ? "bg-gold/20 text-gold" : "bg-success-soft text-success",
                        )}
                      >
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-xs font-bold transition active:scale-[0.99]",
                    plan.featured
                      ? "bg-gold text-espresso hover:bg-gold-strong"
                      : "border border-line-strong bg-surface text-ink hover:border-gold/50 hover:bg-surface-2",
                  )}
                >
                  <WhatsAppIcon className="size-4" />
                  {plan.cta}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-semibold text-ink-faint">
          {["Pause or skip anytime", "No card required", "Cash on delivery", "Free delivery included"].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <Check className="size-3 text-success" strokeWidth={3} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
