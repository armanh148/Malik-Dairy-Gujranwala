import Link from "next/link";
import { ArrowRight, Check, Leaf, Quote, Sprout } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const practices = [
  "Grass-fed desi herds from families we have known for decades.",
  "Hand-churned in copper kadhais, never in industrial vats.",
  "No hormones, no palm oil, no fillers — nothing to hide.",
];

export function StorySection() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-canvas py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-y-0 right-0 hidden w-[62%] lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/farm-field.jpg"
          alt=""
          loading="lazy"
          className="size-full object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/85 to-canvas/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/40" />
      </div>
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(60%_70%_at_20%_50%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-8">
        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="relative aspect-[4/4.7] overflow-hidden rounded-[2.2rem] border border-line-strong/70 shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/farmer-portrait.jpg"
              alt="Bilal Malik, third-generation farmer at Malik Dairy"
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/10 to-transparent" />
            <div className="absolute inset-0 bg-espresso/10" />

            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-espresso/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-cream/90 backdrop-blur-md">
              <Sprout className="size-3 text-gold" />
              Third generation
            </span>

            <div className="absolute inset-x-5 bottom-5">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-gold">
                Bilal Malik · Gujranwala
              </p>
              <p className="mt-2 max-w-[320px] font-display text-[1.35rem] font-semibold leading-tight text-cream">
                &ldquo;We don&apos;t scale by cutting corners.&rdquo;
              </p>
            </div>
          </div>

          <div className="absolute -right-3 -top-4 grid size-[92px] place-items-center rounded-full border border-gold/30 bg-canvas text-center shadow-soft sm:-right-5">
            <div>
              <p className="font-display text-xl font-bold leading-none text-gold">1987</p>
              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-ink-faint">
                Since
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-line-strong bg-surface/95 p-2.5 pr-5 shadow-lift backdrop-blur sm:-left-5">
            <span className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/farm-1.jpg"
                alt="Desi cattle on the Malik family farm"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
            </span>
            <div>
              <p className="text-[10.5px] font-bold leading-none text-ink">Our own herds</p>
              <p className="mt-1.5 text-[9px] text-ink-faint">Grass-fed · traceable</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Our farm heritage</p>
          <h2 className="mt-4 max-w-[560px] font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
            Traditional methods.
            <span className="text-gold-gradient block">Modern standards.</span>
          </h2>
          <p className="mt-5 max-w-[540px] text-[14px] leading-relaxed text-ink-soft">
            Malik Dairy began in 1987 with one buffalo, two copper kadhais and a promise: never sell
            a jar we wouldn&apos;t feed our own family. Three generations later, we still collect
            milk from the same families and churn before sunrise.
          </p>
          <p className="mt-3 max-w-[540px] text-[14px] leading-relaxed text-ink-soft">
            Our farm runs on the old rhythm — open grazing, seasonal feed, and time. We add nothing
            to the milk except patience, and nothing to the jar except what the morning gave us.
          </p>

          <ul className="mt-7 space-y-3">
            {practices.map((practice) => (
              <li key={practice} className="flex gap-3 text-[12.5px] leading-relaxed text-ink-soft">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success-soft text-success">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {practice}
              </li>
            ))}
          </ul>

          <figure className="mt-7 rounded-2xl border border-line bg-surface/70 p-4">
            <Quote className="size-5 text-gold/40" />
            <blockquote className="mt-2 text-[12px] leading-relaxed text-ink-soft">
              &ldquo;Good ghee cannot be hurried. The cows know it, the copper knows it, and our
              customers taste it.&rdquo;
            </blockquote>
            <figcaption className="mt-3 flex items-center gap-2 text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink-faint">
              <span className="h-px w-6 bg-gold/60" />
              Bilal Malik, Third generation
            </figcaption>
          </figure>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href="/#products"
              className={cn(buttonStyles({ variant: "primary", size: "md" }), "group")}
            >
              Explore the pantry
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold text-ink-faint">
              <Leaf className="size-4 text-success" />
              PFA licensed · Lab tested
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
