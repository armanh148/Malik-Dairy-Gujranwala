import { FlaskConical, Flame, Leaf, Milk, ShieldCheck, Snowflake, Sprout } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Sprout,
    title: "Grass & open fields",
    text: "Our desi herds graze on open pasture around Gujranwala, never on imported feed blends.",
  },
  {
    number: "02",
    icon: Milk,
    title: "Morning milk",
    text: "Milk is collected before sunrise from families we have known for three generations.",
  },
  {
    number: "03",
    icon: Flame,
    title: "Slow copper churn",
    text: "Hand-churned butter is simmered low and slow until it turns clear, golden and nutty.",
  },
  {
    number: "04",
    icon: Snowflake,
    title: "Chilled to your door",
    text: "Sealed in glass, chilled immediately and delivered across Gujranwala within 24 hours.",
  },
];

const guarantees = [
  {
    icon: FlaskConical,
    title: "Tested, not just promised",
    text: "Every batch is screened for palm oil, starch and moisture before it gets a label.",
  },
  {
    icon: Leaf,
    title: "Nothing added. Ever.",
    text: "No preservatives, no colour, no blending — only what the milk and the season give us.",
  },
  {
    icon: ShieldCheck,
    title: "Purity, guaranteed",
    text: "If a jar doesn't meet our standard, we replace it or refund it. No questions asked.",
  },
];

export function PuritySection() {
  return (
    <section id="purity" className="relative scroll-mt-24 overflow-hidden border-y border-line bg-canvas-deep py-20 sm:py-24 lg:py-28">
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(75%_65%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -left-40 top-20 size-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(163,190,145,0.24), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[600px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">The Malik standard</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
              From grass to your glass,
              <span className="text-gold-gradient"> without shortcuts.</span>
            </h2>
            <p className="mt-4 max-w-[500px] text-[13.5px] leading-relaxed text-ink-soft">
              Four steps, one family, and a standard we have refused to lower since 1987. This is what
              sits behind every jar.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/70 px-4 py-3">
            <span className="grid size-9 place-items-center rounded-full bg-success-soft text-success">
              <ShieldCheck className="size-4" />
            </span>
            <div>
              <p className="text-[11.5px] font-bold text-ink">Batch No. 0142 · Passed</p>
              <p className="mt-1 text-[9.5px] text-ink-faint">PCSIR lab ref · PCSIR-24-1180</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-[1.6rem] border border-line bg-surface/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-surface"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-ink-faint/60">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-[1.02rem] font-semibold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[11.5px] leading-relaxed text-ink-soft">{step.text}</p>
                {index < steps.length - 1 ? (
                  <span className="absolute -right-2 top-[38px] hidden h-px w-4 bg-line-strong lg:block" />
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line md:grid-cols-3">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-3.5 bg-surface/80 p-5">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-surface-2 text-gold">
                  <Icon className="size-[17px]" strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-[12px] font-bold text-ink">{item.title}</p>
                  <p className="mt-1.5 text-[10.5px] leading-relaxed text-ink-faint">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gold/20 bg-gold/[0.06] px-5 py-4 sm:flex-row sm:items-center">
          <p className="font-display text-[13px] font-medium tracking-[-0.01em] text-ink">
            &ldquo;If a batch doesn&apos;t pass, it doesn&apos;t leave the dairy. That is the whole system.&rdquo;
          </p>
          <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-gold">
            Bilal Malik · Third generation
          </p>
        </div>
      </div>
    </section>
  );
}
