import { Clock, MessageCircle, Phone, Plus } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

const faqs = [
  {
    question: "How do I know the ghee is actually pure?",
    answer:
      "Every batch is screened for palm oil, starch and moisture, and carries a batch card with a lab reference. If you ever doubt a jar, message us with the batch number and we'll share the report — or replace it, no questions asked.",
  },
  {
    question: "Which areas do you deliver to?",
    answer:
      "We deliver across Gujranwala — Satellite Town, Model Town, DC Colony, Peoples Colony, Cantt, Wapda Town and nearby areas. Orders placed before 3 pm usually arrive the same evening. Orders above Rs 3,000 are delivered free.",
  },
  {
    question: "How is the fresh dairy kept cold?",
    answer:
      "Cream, dahi, khoya and butter travel in insulated bags with ice packs, and are delivered within 24 hours of packing. Pop them straight into the fridge when they arrive.",
  },
  {
    question: "What payment methods can I use?",
    answer:
      "Cash on delivery is always available. You can also pay by Easypaisa, JazzCash or bank transfer after we confirm your order on WhatsApp.",
  },
  {
    question: "Can I order directly on WhatsApp?",
    answer:
      "Yes — add items to your basket and tap 'Order on WhatsApp', or message us directly. We'll confirm stock, total and a delivery window before dispatch.",
  },
  {
    question: "What if I'm not happy with an order?",
    answer:
      "Tell us within 24 hours and we'll replace the item or refund you. Freshness is personal for us; a bad jar reflects on the whole dairy.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-24 overflow-hidden border-y border-line bg-surface/40 py-20 sm:py-24 lg:py-28">
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(70%_70%_at_20%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[620px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Need a hand?</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
            How can we
            <span className="text-gold-gradient"> help you?</span>
          </h2>
          <p className="mt-4 max-w-[480px] text-[13.5px] leading-relaxed text-ink-soft">
            Real answers from the family that makes your dairy — not a call centre. Ask us anything
            about a batch, a delivery or a recipe.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:gap-6">
          <aside className="relative flex flex-col overflow-hidden rounded-[2rem] border border-line bg-surface">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/farmer-smiling.jpg"
                alt="A Malik Dairy farmer in the field"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/10 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-espresso/60 px-3 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.16em] text-cream/90 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-success" />
                Replies in minutes
              </span>
              <div className="absolute inset-x-5 bottom-4">
                <p className="text-[8.5px] font-extrabold uppercase tracking-[0.18em] text-gold">
                  Talk to the farmer
                </p>
                <p className="mt-1.5 font-display text-[1.25rem] font-semibold leading-tight text-cream">
                  Bilal Malik
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="text-[11.5px] leading-relaxed text-ink-soft">
                Third-generation dairy farmer. If you have a question about purity, delivery or
                which jar to start with, message us directly.
              </p>

              <a
                href={whatsappLink(supportWhatsAppMessage())}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-wa text-xs font-extrabold text-white transition hover:brightness-105 active:scale-[0.99]"
              >
                <WhatsAppIcon className="size-4" />
                Chat on WhatsApp
              </a>

              <a
                href="tel:+923001234567"
                className="mt-2.5 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line bg-surface-2 text-xs font-bold text-ink transition hover:border-gold/40"
              >
                <Phone className="size-3.5 text-gold" />
                +92 300 1234567
              </a>

              <div className="mt-auto flex items-center gap-2 border-t border-line pt-4 text-[10px] text-ink-faint">
                <Clock className="size-3.5 text-gold" />
                Daily · 7:00 am – 10:00 pm
              </div>
            </div>
          </aside>

          <div className="rounded-[1.7rem] border border-line bg-surface/70 px-5 sm:px-6">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-line last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left">
                  <span className="flex gap-3 text-[12.5px] font-bold leading-snug text-ink">
                    <span className="mt-0.5 font-mono text-[10px] font-normal text-gold/70">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition group-open:rotate-45 group-open:border-gold/40 group-open:bg-gold group-open:text-espresso">
                    <Plus className="size-3.5" />
                  </span>
                </summary>
                <p className="max-w-[620px] pb-5 pl-7 pr-6 text-[11.5px] leading-relaxed text-ink-soft">
                  {faq.answer}
                </p>
              </details>
            ))}

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line py-4 text-[10.5px] text-ink-faint">
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="size-3.5 text-gold" />
                Still unsure? We reply on WhatsApp within minutes.
              </span>
              <a
                href={whatsappLink(supportWhatsAppMessage())}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-gold-strong hover:underline"
              >
                Ask a question
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
