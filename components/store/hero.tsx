import Link from "next/link";
import { ArrowRight, Play, Check, Leaf } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#07190e]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80"
          alt="Organic farming and agriculture tractor in misty field"
          fetchPriority="high"
          className="size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06150b]/95 via-[#0a2315]/80 to-[#06150b]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07190e] via-transparent to-[#06150b]/70" />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-[1600px] px-4 pb-28 pt-24 sm:px-6 sm:pb-36 sm:pt-32 lg:px-8">
        <div className="max-w-[760px]">
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/50 bg-[#0c2617]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#86efac] shadow-sm backdrop-blur-md">
            <span className="size-2 rounded-full bg-[#43a047] animate-pulse" />
            <Leaf className="size-3.5 text-[#43a047]" />
            <span>Green &amp; Organic Farm</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-[clamp(3rem,6.5vw,5.5rem)] font-extrabold leading-[0.98] tracking-tight text-white">
            Organic Farming <br />
            <span className="text-[#86efac]">and Agriculture</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 max-w-[580px] text-[15.5px] leading-relaxed text-white/85 sm:text-[16.5px]">
            Malik Dairy delivers 100% natural organic dairy products &amp; pure farm fresh harvest straight from our pesticide-free pasture lands in Gujranwala.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/#services"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#43a047] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(67,160,71,0.5)] transition-all duration-300 hover:bg-[#388e3c] hover:shadow-[0_15px_30px_-5px_rgba(67,160,71,0.7)] hover:-translate-y-0.5"
            >
              Discover More
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-black/50 hover:border-white/50"
            >
              <span className="grid size-7 place-items-center rounded-full bg-white text-[#0a2315] shadow-sm">
                <Play className="ml-0.5 size-3 fill-[#0a2315]" />
              </span>
              Watch Our Story
            </a>
          </div>

          {/* Feature Badges */}
          <div className="mt-11 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/80">
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="grid size-4 place-items-center rounded-full bg-[#43a047] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              100% Pure Desi Ghee
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="grid size-4 place-items-center rounded-full bg-[#43a047] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              Zero Adulteration
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="grid size-4 place-items-center rounded-full bg-[#43a047] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              Fresh Morning Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Yellow Trust & Certification Bar */}
      <div className="relative border-y border-[#dfa00f] bg-[#f5b61a] py-6 text-[#0d2a19] shadow-[0_10px_30px_rgba(245,182,26,0.2)]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          
          {/* Item 1: Clients */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
              ].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt="Client avatar"
                  className="size-12 rounded-full border-2 border-[#f5b61a] object-cover shadow-sm ring-1 ring-black/10"
                />
              ))}
              <span className="grid size-12 place-items-center rounded-full border-2 border-[#f5b61a] bg-[#0c2415] text-[11px] font-black text-[#f5b61a] shadow-sm">
                +25k
              </span>
            </div>
            <div>
              <p className="font-display text-[15px] font-extrabold leading-tight text-[#0c2415]">
                Trusted Over 25,000+
              </p>
              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0d2a19]/80">
                Regular Happy Clients
              </p>
            </div>
          </div>

          {/* Item 2: Certified Seal Emblem */}
          <div className="flex items-center justify-start sm:justify-center">
            <div className="flex items-center gap-3.5 rounded-full border-2 border-dashed border-[#0c2415]/40 bg-white/40 px-5 py-2.5 backdrop-blur-md shadow-sm transition hover:bg-white/60">
              <span className="grid size-11 place-items-center rounded-full bg-[#0c2415] text-[#43a047] shadow-md ring-2 ring-[#43a047]/30">
                <Leaf className="size-5.5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-[#0c2415]">
                  100% Organic Quality
                </p>
                <p className="text-[10.5px] font-extrabold text-[#0c2415]/80">
                  Certified Farm Purity
                </p>
              </div>
            </div>
          </div>

          {/* Item 3: Fresh Produce Thumbnail */}
          <div className="flex items-center justify-start gap-3.5 sm:justify-end">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl border-2 border-[#0c2415]/25 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80"
                alt="Organic farm produce"
                className="size-full object-cover"
              />
            </div>
            <div>
              <p className="font-display text-[15px] font-extrabold leading-tight text-[#0c2415]">
                Fresh &amp; 100% Pure
              </p>
              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0d2a19]/80">
                Organic Farm Products
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}