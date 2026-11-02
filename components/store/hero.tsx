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
      <div className="relative mx-auto max-w-[1600px] px-4 pb-20 pt-16 sm:pb-36 sm:pt-32 sm:px-6 lg:px-8">
        <div className="max-w-[760px]">
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/50 bg-[#0c2617]/80 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#86efac] shadow-sm backdrop-blur-md">
            <span className="size-2 rounded-full bg-[#43a047] animate-pulse" />
            <Leaf className="size-3.5 text-[#43a047]" />
            <span>Green &amp; Organic Farm</span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 font-display text-[clamp(2.2rem,6.2vw,5.5rem)] font-extrabold leading-[1.04] tracking-tight text-white">
            Organic Farming <br />
            <span className="text-[#86efac]">and Agriculture</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-4 sm:mt-6 max-w-[580px] text-[14px] leading-relaxed text-white/85 sm:text-[16.5px]">
            Malik Dairy delivers 100% natural organic dairy products &amp; pure farm fresh harvest straight from our pesticide-free pasture lands in Gujranwala.
          </p>

          {/* CTA Buttons in 1 Row */}
          <div className="mt-7 sm:mt-9 flex items-center gap-2.5 sm:gap-4">
            <Link
              href="/#services"
              className="shimmer-btn group inline-flex flex-1 sm:flex-initial justify-center items-center gap-1.5 sm:gap-2.5 rounded-full bg-[#43a047] px-4 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(67,160,71,0.5)] transition-all duration-300 hover:bg-[#388e3c] hover:shadow-[0_18px_35px_-5px_rgba(67,160,71,0.7)] hover:-translate-y-1 active:scale-95 whitespace-nowrap"
            >
              <span>Discover More</span>
              <ArrowRight className="size-3.5 sm:size-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
            </Link>

            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex flex-1 sm:flex-initial justify-center items-center gap-2 sm:gap-3 rounded-full border border-white/30 bg-black/30 px-3.5 py-3 sm:px-7 sm:py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-black/55 hover:border-white/60 hover:-translate-y-1 active:scale-95 whitespace-nowrap"
            >
              <span className="grid size-6 sm:size-7 place-items-center rounded-full bg-white text-[#0a2315] shadow-sm transition-transform duration-300 group-hover:scale-110 shrink-0">
                <Play className="ml-0.5 size-2.5 sm:size-3 fill-[#0a2315]" />
              </span>
              <span>Watch Story</span>
            </a>
          </div>

          {/* Feature Badges */}
          <div className="mt-8 sm:mt-11 flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-semibold text-white/80">
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 hover:border-[#43a047]/50 hover:bg-white/10 hover:-translate-y-0.5">
              <span className="grid size-4 place-items-center rounded-full bg-[#43a047] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              100% Pure Desi Ghee
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 hover:border-[#43a047]/50 hover:bg-white/10 hover:-translate-y-0.5">
              <span className="grid size-4 place-items-center rounded-full bg-[#43a047] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              Zero Adulteration
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 hover:border-[#43a047]/50 hover:bg-white/10 hover:-translate-y-0.5">
              <span className="grid size-4 place-items-center rounded-full bg-[#43a047] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              Fresh Morning Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Yellow Trust & Certification Bar */}
      <div className="relative border-y border-[#dfa00f] bg-[#f5b61a] py-3.5 sm:py-5 text-[#0d2a19] shadow-[0_10px_30px_rgba(245,182,26,0.2)]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:items-center sm:gap-6">
            
            {/* Item 1: Clients */}
            <div className="flex items-center gap-3 rounded-2xl border border-[#0c2415]/10 bg-white/40 p-3 sm:border-none sm:bg-transparent sm:p-0 sm:justify-start">
              <div className="flex -space-x-2.5 sm:-space-x-3 shrink-0">
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
                    className="size-10 sm:size-11 rounded-full border-2 border-white object-cover shadow-xs ring-1 ring-black/10"
                  />
                ))}
                <span className="grid size-10 sm:size-11 place-items-center rounded-full border-2 border-white bg-[#0c2415] text-[10px] sm:text-[11px] font-black text-[#f5b61a] shadow-xs">
                  +25k
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-display text-[14.5px] sm:text-[15.5px] font-extrabold leading-tight text-[#0c2415]">
                  Trusted Over 25,000+
                </p>
                <p className="mt-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0c2415]/80">
                  Regular Happy Clients
                </p>
              </div>
            </div>

            {/* Item 2: Certified Seal Emblem */}
            <div className="flex items-center justify-start sm:justify-center">
              <div className="flex w-full sm:w-auto items-center gap-3 rounded-2xl border border-[#0c2415]/10 bg-white/40 p-3 sm:rounded-full sm:border-2 sm:border-dashed sm:border-[#0c2415]/35 sm:bg-white/45 sm:px-6 sm:py-2.5 sm:backdrop-blur-sm sm:shadow-sm">
                <span className="grid size-10 sm:size-11 shrink-0 place-items-center rounded-full bg-[#0c2415] text-[#86efac] shadow-sm ring-2 ring-[#0c2415]/20">
                  <Leaf className="size-5 sm:size-5.5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[14.5px] sm:text-[15.5px] font-extrabold leading-tight text-[#0c2415]">
                    100% Organic Quality
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0c2415]/80">
                    Certified Farm Purity
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3: Fresh Produce Thumbnail */}
            <div className="flex items-center gap-3 rounded-2xl border border-[#0c2415]/10 bg-white/40 p-3 sm:border-none sm:bg-transparent sm:p-0 sm:justify-end">
              <div className="relative size-10 sm:size-12 shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-white shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80"
                  alt="Organic farm produce"
                  className="size-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display text-[14.5px] sm:text-[15.5px] font-extrabold leading-tight text-[#0c2415]">
                  Fresh &amp; 100% Pure
                </p>
                <p className="mt-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0c2415]/80">
                  Organic Farm Products
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}