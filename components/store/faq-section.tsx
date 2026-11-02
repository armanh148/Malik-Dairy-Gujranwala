"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus, Award, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What farm and dairy services do you provide?",
    a: "We provide 100% pure raw buffalo and cow milk delivery, artisanal slow-churned desi ghee in copper cauldrons, fresh white makhan, khoya, raw sidr honey, and seasonal organic farm produce.",
  },
  {
    q: "Where does your milk and desi ghee come from?",
    a: "All milk is collected exclusively from our own and trusted partner herds in Gujranwala. Herds graze freely on green pasture and organic fodder with zero hormones or industrial feed.",
  },
  {
    q: "How does the daily morning subscription work?",
    a: "You select your daily liter requirement and morning delivery slot. Our refrigerated vans deliver fresh milk chilled to your doorstep every morning before 7:00 AM.",
  },
  {
    q: "Do you deliver organic vegetables and sidr honey?",
    a: "Yes! In addition to dairy, we harvest seasonal pesticide-free vegetables and collect single-origin wild sidr honey from our natural farm apiaries.",
  },
  {
    q: "Can we visit your organic farm in Gujranwala?",
    a: "Yes, we welcome families and farm enthusiasts! Contact us on WhatsApp to schedule an educational tour of our pastures, milking stations, and traditional ghee kitchens.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left: Green Box with Framed Farmer Photo + Yellow Badge */}
          <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
            <div className="relative rounded-[2.5rem] bg-[#0c2415] p-7 sm:p-9 shadow-2xl">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=900&q=80"
                  alt="Farmer standing proudly in cornfield"
                  loading="lazy"
                  className="size-full object-cover object-center transition duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Yellow Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex w-[88%] max-w-[320px] items-center gap-3.5 rounded-3xl bg-[#f5b61a] p-4.5 text-[#0c2415] shadow-[0_20px_45px_rgba(245,182,26,0.35)] transition-transform duration-300 hover:scale-105">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#0c2415] text-[#f5b61a] shadow-md">
                  <Award className="size-5.5" />
                </span>
                <p className="text-xs font-extrabold leading-snug">
                  25+ Years of Organic Agriculture &amp; Pure Dairy
                </p>
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordions */}
          <div className="rounded-[2.5rem] bg-[#faf8f4] p-8 sm:p-12 border border-[#0c2415]/10 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5e9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2e7d32]">
              <Leaf className="size-3.5" />
              FAQ Questions
            </div>

            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.8vw,2.8rem)] font-bold tracking-tight text-[#0c2415]">
              How Can We Help You?
            </h2>

            <div className="mt-8 divide-y divide-[#0c2415]/10">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="py-4">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 rounded-xl py-1 text-left font-display text-[15px] font-bold text-[#0c2415] transition-colors hover:text-[#43a047]"
                    >
                      <span>{faq.q}</span>
                      <span className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-full transition-colors",
                        isOpen ? "bg-[#43a047] text-white" : "bg-[#e8f5e9] text-[#2e7d32]"
                      )}>
                        {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                      </span>
                    </button>
                    {isOpen ? (
                      <p className="mt-3 text-xs leading-relaxed text-[#385342] pl-1">
                        {faq.a}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}