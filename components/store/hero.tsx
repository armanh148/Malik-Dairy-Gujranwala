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
      <div className="relative mx-auto max-w-[1240px] px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="max-w-[720px]">
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/40 bg-[#0c2617]/70 px-4 py-1.5 text-xs font-semibold text-[#81c784] backdrop-blur-md">
            <Leaf className="size-3.5 text-[#43a047]" />
            <span>Green &amp; Organic Farm</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6.2vw,5.2rem)] font-bold leading-[1.02] tracking-tight text-white">
            Organic Farming <br />
            <span className="text-white">and Agriculture</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-white/80 sm:text-[16px]">
            Malik Dairy delivers 100% natural organic dairy products &amp; pure farm fresh harvest straight from our pesticide-free pasture lands in Gujranwala.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#43a047] px-8 py-4 text-sm font-bold text-white shadow-lg transition duration-200 hover:bg-[#388e3c] hover:shadow-xl"
            >
              Discover More
              <ArrowRight className="size-4" />
            </Link>

            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <span className="grid size-6 place-items-center rounded-full bg-white text-[#0a2315]">
                <Play className="ml-0.5 size-3 fill-[#0a2315]" />
              </span>
              Watch Our Story
            </a>
          </div>

          {/* Feature Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-medium text-white/70">
            <span className="flex items-center gap-2">
              <span className="grid size-4 place-items-center rounded-full bg-[#43a047] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              100% Pure Desi Ghee
            </span>
            <span className="flex items-center gap-2">
              <span className="grid size-4 place-items-center rounded-full bg-[#43a047] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              Zero Adulteration
            </span>
            <span className="flex items-center gap-2">
              <span className="grid size-4 place-items-center rounded-full bg-[#43a047] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              Fresh Morning Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Yellow Trust & Certification Bar */}
      <div className="relative border-t border-[#e2a412] bg-[#f5b61a] py-5 text-[#0d2a19] shadow-inner sm:py-6">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          
          {/* Item 1: Clients */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
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
                  className="size-11 rounded-full border-2 border-[#f5b61a] object-cover shadow-sm"
                />
              ))}
              <span className="grid size-11 place-items-center rounded-full border-2 border-[#f5b61a] bg-[#0c2415] text-[10px] font-extrabold text-[#f5b61a]">
                +25k
              </span>
            </div>
            <div>
              <p className="text-[14px] font-bold leading-tight">Trusted Over 25,000+</p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#0d2a19]/75">
                Regular Clients
              </p>
            </div>
          </div>

          {/* Item 2: Certified Seal Emblem */}
          <div className="flex items-center justify-start sm:justify-center">
            <div className="flex items-center gap-3 rounded-full border-2 border-dashed border-[#0c2415]/30 bg-white/30 px-4 py-2 backdrop-blur-sm">
              <span className="grid size-10 place-items-center rounded-full bg-[#0c2415] text-[#43a047] shadow-sm">
                <Leaf className="size-5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-[#0c2415]">
                  100% Organic Quality
                </p>
                <p className="text-[10px] font-bold text-[#0c2415]/75">Certified Farm Products</p>
              </div>
            </div>
          </div>

          {/* Item 3: Fresh Produce Thumbnail */}
          <div className="flex items-center justify-start gap-3 sm:justify-end">
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border-2 border-[#0c2415]/20 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80"
                alt="Organic farm produce"
                className="size-full object-cover"
              />
            </div>
            <div>
              <p className="text-[14px] font-bold leading-tight">Fresh &amp; 100% Pure</p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#0d2a19]/75">
                Organic Farm Products
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}