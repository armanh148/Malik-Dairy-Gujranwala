import { ArrowRight, Flame, Milk, PackageCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

const steps = [
  {
    number: "01",
    icon: Milk,
    title: "Milk collection",
    time: "4:30 am",
    text: "We collect milk from our own herd and a small circle of trusted desi-herd families before sunrise. Every churn is logged and traceable.",
  },
  {
    number: "02",
    icon: Flame,
    title: "Hand-churn & simmer",
    time: "5:00 am",
    text: "The milk is cultured, hand-churned into white butter, then simmered slowly in copper until it turns clear, golden and nutty.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Glass-pack & chill",
    time: "8:00 am",
    text: "Jars are filled warm, sealed by hand and chilled for the same-day route. Fresh dairy never sits in a warehouse overnight.",
  },
];

export function WorkflowSection() {
  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden bg-canvas py-20 sm:py-24 lg:py-28">
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(70%_70%_at_80%_40%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2.2rem] border border-line-strong/70 shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/farm-1.jpg"
              alt="Desi cattle grazing on the Malik family farm"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/15 to-transparent" />

            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-espresso/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-cream/90 backdrop-blur-md">
              <Milk className="size-3 text-gold" />
              From grass to glass
            </span>

            <div className="absolute inset-x-5 bottom-5">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-gold">
                The morning shift
              </p>
              <p className="mt-2 max-w-[340px] font-display text-[1.4rem] font-semibold leading-tight text-cream">
                Every jar begins before the city wakes up.
              </p>
            </div>
          </div>

          <div className="absolute -right-3 top-1/2 w-[150px] rounded-2xl border border-line-strong bg-surface/95 p-4 shadow-lift backdrop-blur sm:-right-6">
            <p className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-ink-faint">Churn log</p>
            <p className="mt-2 font-display text-2xl font-bold leading-none text-gold">0142</p>
            <p className="mt-2 text-[9.5px] leading-relaxed text-ink-soft">
              Passed purity check
              <br />
              PCSIR-24-1180
            </p>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">How we process</p>
          <h2 className="mt-4 max-w-[540px] font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
            Three steps.
            <span className="text-gold-gradient"> Zero shortcuts.</span>
          </h2>
          <p className="mt-4 max-w-[500px] text-[13.5px] leading-relaxed text-ink-soft">
            The same routine every morning, in the same order, for thirty-eight years. Good dairy is
            not complicated — it is just done properly.
          </p>

          <ol className="mt-8 space-y-1">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.number} className="relative flex gap-5 pb-7 last:pb-0">
                  {index < steps.length - 1 ? (
                    <span className="absolute left-[21px] top-11 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold/40 to-line" />
                  ) : null}
                  <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-gold/25 bg-surface-2 text-gold">
                    <Icon className="size-[18px]" strokeWidth={1.8} />
                  </span>
                  <div className="pt-0.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-[9.5px] font-bold tracking-[0.16em] text-gold/70">
                        {step.number}
                      </span>
                      <h3 className="font-display text-[1rem] font-semibold text-ink">{step.title}</h3>
                      <span className="rounded-full border border-line bg-surface-2 px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-[0.1em] text-ink-faint">
                        {step.time}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[440px] text-[11.5px] leading-relaxed text-ink-soft">
                      {step.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <a
            href={whatsappLink(supportWhatsAppMessage())}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold text-gold-strong transition hover:text-gold"
          >
            <WhatsAppIcon className="size-4" />
            Ask us about today&apos;s batch
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
