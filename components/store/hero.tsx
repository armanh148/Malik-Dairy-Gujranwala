import Link from "next/link";
import { ArrowRight, Check, Leaf, ShieldCheck, Star, Truck } from "lucide-react";
import { Stars } from "@/components/ui/stars";
import { buttonStyles } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const trustStrip = [
  {
    icon: ShieldCheck,
    title: "100% Pure",
    text: "Lab-tested, never blended",
  },
  {
    icon: Leaf,
    title: "Farm Fresh",
    text: "Churned before sunrise",
  },
  {
    icon: Star,
    title: "4.6 / 5",
    text: "1,240+ happy families",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/farm-field.jpg"
          alt="Lush green fields on the Malik family farm"
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/92 to-espresso/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-espresso/20 to-espresso/55" />
        <div className="pattern-grid absolute inset-0 opacity-[0.12]" />
      </div>

      <div className="relative mx-auto grid max-w-[1240px] gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-espresso/45 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-gold" />
            Organic farming · Gujranwala · Est. 1987
          </span>

          <h1 className="mt-7 max-w-[660px] font-display text-[clamp(2.9rem,6.3vw,5.1rem)] font-semibold leading-[0.93] tracking-[-0.05em] text-cream">
            Organic farming
            <span className="text-gold-gradient mt-1 block">& pure desi ghee.</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-[14.5px] leading-relaxed text-cream/70 sm:text-[15.5px]">
            Slow-churned ghee, hand-made butter, fresh khoya and raw sidr honey — from our family
            farms in Gujranwala. No palm oil. No shortcuts. Just the good stuff.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonStyles({ variant: "primary", size: "lg" }), "group w-full sm:w-auto")}
            >
              <WhatsAppIcon className="size-4" />
              Order via WhatsApp
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/#products"
              className={cn(
                buttonStyles({ variant: "outline", size: "lg" }),
                "w-full border-white/20 bg-espresso/30 text-cream backdrop-blur-md hover:border-gold/50 hover:bg-espresso/55 sm:w-auto",
              )}
            >
              Explore products
            </Link>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-cream/60">
            {["100% pure desi ghee", "No palm oil", "Delivered chilled"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="size-3.5 text-gold" strokeWidth={2.6} />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
            <div className="flex -space-x-2.5">
              {[
                { initials: "AK", from: "#D9A441", to: "#A96C15" },
                { initials: "HS", from: "#A9502F", to: "#7C341C" },
                { initials: "FN", from: "#5F6E4C", to: "#3F4B31" },
              ].map((avatar) => (
                <span
                  key={avatar.initials}
                  className="grid size-9 place-items-center rounded-full text-[10px] font-extrabold text-white ring-2 ring-espresso"
                  style={{ background: `linear-gradient(145deg, ${avatar.from}, ${avatar.to})` }}
                >
                  {avatar.initials}
                </span>
              ))}
              <span className="grid size-9 place-items-center rounded-full bg-cream/10 text-[9px] font-extrabold text-cream/70 ring-2 ring-espresso">
                +1k
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Stars rating={4.6} />
                <span className="text-sm font-extrabold text-cream">4.6</span>
                <span className="text-[11px] font-medium text-cream/45">/ 5</span>
              </div>
              <p className="mt-1 text-[11.5px] text-cream/55">
                Loved by <span className="font-bold text-cream/85">1,240+ kitchens</span> across Punjab
              </p>
            </div>
          </div>
        </div>

        <div className="animate-rise relative mx-auto hidden w-full max-w-[380px] [animation-delay:120ms] lg:block">
          <div className="absolute -inset-6 rounded-[3rem] bg-gold/15 blur-3xl" />
          <div className="relative rounded-[2.3rem] border border-white/15 bg-espresso/35 p-2.5 shadow-lift backdrop-blur-md">
            <div className="grain relative overflow-hidden rounded-[1.8rem] bg-surface-2">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-gold">
                  The signature jar
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[8.5px] font-bold uppercase tracking-[0.1em] text-cream/70">
                  1 kg
                </span>
              </div>
              <div className="relative aspect-[1/1.05]">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(75% 65% at 50% 42%, #FCF2D8 0%, #F3DFB4 52%, #DCBB7C 100%)",
                  }}
                />
                <div className="pattern-dots absolute inset-0 opacity-[0.16]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/products/ghee.svg"
                  alt="A jar of Malik Dairy pure desi ghee"
                  className="animate-float-slow absolute left-1/2 top-1/2 w-[90%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_35px_45px_rgba(90,60,15,0.28)]"
                />
                <div className="absolute right-4 top-4 rounded-2xl border border-white/60 bg-cream/90 px-3 py-2 text-center shadow-soft backdrop-blur-sm">
                  <p className="font-display text-lg font-bold leading-none text-espresso">4.6</p>
                  <div className="mt-1 flex justify-center">
                    <Stars rating={5} size="xs" className="text-gold-strong" />
                  </div>
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-cream/95 p-3.5 shadow-soft backdrop-blur-md">
                  <p className="text-[8.5px] font-extrabold uppercase tracking-[0.16em] text-[#A96C15]">
                    Bestseller
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-espresso">Pure Desi Ghee</p>
                      <p className="mt-0.5 flex items-baseline gap-1.5 text-[11px] font-bold text-espresso">
                        Rs 4,700
                        <span className="text-[9.5px] font-medium text-[#8A7356] line-through">
                          Rs 5,400
                        </span>
                      </p>
                    </div>
                    <span className="grid size-8 place-items-center rounded-full bg-espresso text-gold">
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-espresso/85 px-4 py-3 text-cream shadow-lift backdrop-blur">
            <Truck className="size-4 text-gold" />
            <div>
              <p className="text-[10px] font-bold leading-none">Same-day delivery</p>
              <p className="mt-1 text-[8.5px] text-cream/50">Across Gujranwala</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gold text-espresso">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {trustStrip.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={cn(
                  "flex items-center gap-3.5 py-5 sm:py-6",
                  index > 0 && "border-t border-espresso/20 sm:border-l sm:border-t-0 sm:pl-7",
                )}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-espresso/10 text-espresso">
                  <Icon className="size-[18px]" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-display text-[1.05rem] font-bold leading-none">{item.title}</p>
                  <p className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-espresso/65">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
