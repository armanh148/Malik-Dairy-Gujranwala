"use client";

import { useState } from "react";
import { Plus, Minus, Award, Leaf, MessageCircle, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What farm and dairy services do you provide?",
    a: "We provide 100% pure raw buffalo and cow milk delivery, artisanal slow-churned desi ghee in copper cauldrons, fresh white makhan, khoya, raw sidr honey, and seasonal pesticide-free organic farm produce.",
  },
  {
    q: "Where does your milk and desi ghee come from?",
    a: "All milk is collected exclusively from our own and trusted partner herds in Gujranwala. Herds graze freely on open green pastures and organic fodder with zero hormones, palm oil, or industrial fillers.",
  },
  {
    q: "How does the daily morning subscription work?",
    a: "You choose your daily liter requirement and morning delivery slot. Our insulated refrigerated vans deliver fresh milk chilled to your doorstep every morning before 7:00 AM across Gujranwala.",
  },
  {
    q: "Do you deliver organic vegetables and sidr honey?",
    a: "Yes! In addition to dairy, we harvest seasonal pesticide-free vegetables and collect single-origin wild sidr honey from our natural farm apiaries in Punjab.",
  },
  {
    q: "Can we visit your organic farm in Gujranwala?",
    a: "Yes, we warmly welcome families and farm enthusiasts! Contact us on WhatsApp to schedule an educational tour of our green pastures, milking stations, and traditional ghee kitchens.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Soft Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[20%] size-[500px] rounded-full bg-[#43a047]/5 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[10%] size-[500px] rounded-full bg-[#fef7e6]/70 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Framed Farmer in Cornfield + Floating Golden Badge (5 Cols) */}
          <div className="lg:col-span-5 pb-6 lg:pb-0">
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3.5 rounded-[3rem] border-2 border-dashed border-[#43a047]/30 sm:-inset-4" />
              <div className="absolute -bottom-4 -right-4 size-48 rounded-full bg-[#f5b61a]/15 blur-2xl" />

              {/* Main Photo Box */}
              <div className="relative rounded-[2.5rem] bg-[#0c2415] p-6 sm:p-8 shadow-2xl">
                <div className="relative aspect-[4/4.6] overflow-hidden rounded-[2rem] border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=900&q=80"
                    alt="Farmer standing proudly in cornfield"
                    loading="lazy"
                    className="size-full object-cover object-center transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c2415]/80 via-transparent to-transparent" />

                  {/* Floating Top Badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0c2415]/85 px-3.5 py-1.5 text-[11px] font-bold text-[#86efac] backdrop-blur-md shadow-md">
                    <MessageCircle className="size-3.5 text-[#43a047]" />
                    <span>24/7 Farm Support Helpline</span>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 flex w-[90%] max-w-[340px] items-center gap-3.5 rounded-3xl border-2 border-[#ffdb70] bg-gradient-to-br from-[#f5b61a] to-[#e5a40a] p-4 text-[#0c2415] shadow-[0_20px_45px_rgba(245,182,26,0.38)] transition-transform duration-300 hover:scale-105">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#0c2415] text-[#f5b61a] shadow-md ring-2 ring-white/20">
                    <Award className="size-6.5" />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-2xl font-black leading-none">25+</span>
                      <span className="text-xs font-black uppercase tracking-wider">Years</span>
                    </div>
                    <p className="mt-0.5 text-xs font-extrabold leading-snug text-[#0c2415]/90">
                      Organic Agriculture &amp; Pure Dairy Purity
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion Cards (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] border border-[#0c2415]/10 bg-[#faf8f5] p-7 shadow-[0_15px_40px_rgba(0,0,0,0.03)] sm:p-10">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/30 bg-[#e8f5e9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32]">
                <Leaf className="size-3.5 text-[#43a047]" />
                FAQ Questions
              </div>

              <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold tracking-tight text-[#0c2415]">
                How Can We Help You?
              </h2>

              <p className="mt-2 text-xs leading-relaxed text-[#385342]">
                Find quick answers about our milking methods, doorstep delivery routes, and certified purity standards.
              </p>

              {/* Accordion Cards */}
              <div className="mt-8 space-y-3.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div
                      key={idx}
                      className={cn(
                        "rounded-2xl border transition-all duration-300",
                        isOpen
                          ? "border-[#43a047] bg-white shadow-md ring-2 ring-[#43a047]/15"
                          : "border-[#0c2415]/10 bg-white/80 hover:border-[#43a047]/50 hover:bg-white"
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-[14.5px] font-bold text-[#0c2415] transition-colors"
                      >
                        <span className={cn(isOpen && "text-[#2e7d32]")}>{faq.q}</span>
                        <span
                          className={cn(
                            "grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300",
                            isOpen
                              ? "bg-[#43a047] text-white rotate-180"
                              : "bg-[#e8f5e9] text-[#2e7d32]"
                          )}
                        >
                          {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                        </span>
                      </button>

                      {isOpen ? (
                        <div className="border-t border-[#0c2415]/10 px-5 pb-5 pt-3">
                          <p className="text-xs leading-relaxed text-[#385342]">
                            {faq.a}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Help CTA Box */}
              <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#43a047]/30 bg-[#e8f5e9]/70 p-4.5 sm:flex-row">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-wa text-white shadow-sm">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#0c2415]">
                      Still have questions about our dairy?
                    </p>
                    <p className="text-[11px] text-[#385342]">
                      Chat directly with our farm manager in Gujranwala.
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappLink(supportWhatsAppMessage())}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#43a047] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#388e3c]"
                >
                  Ask on WhatsApp
                  <ArrowRight className="size-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}