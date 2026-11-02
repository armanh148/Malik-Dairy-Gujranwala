import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

export function CtaBand() {
  return (
    <section className="bg-canvas px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[2rem] bg-espresso px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="pattern-grid absolute inset-0 opacity-[0.07]" />
        <div
          className="absolute -left-20 -top-24 size-[420px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(201,138,46,0.4), transparent 65%)" }}
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              Straight from the dairy
            </p>
            <h2 className="mt-3 max-w-[560px] font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-cream">
              A jar of ghee. A whole kitchen of memories.
            </h2>
            <p className="mt-3 max-w-[460px] text-[13px] leading-relaxed text-cream/55">
              Order before 3 pm and we&apos;ll deliver chilled, the same evening. Cash on delivery
              across Gujranwala.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col lg:items-stretch">
            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-espresso transition hover:bg-gold-strong active:scale-[0.99]"
            >
              <WhatsAppIcon className="size-4" />
              Order on WhatsApp
            </a>
            <a
              href="tel:+923001234567"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/15 px-6 text-sm font-bold text-cream transition hover:border-gold/40 hover:bg-cream/5"
            >
              <Phone className="size-4 text-gold" />
              +92 300 1234567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
