import Link from "next/link";
import { ArrowRight, Check, Award, Leaf, Sparkles } from "lucide-react";

export function StorySection() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-[#07190e] py-24 text-white sm:py-32">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] -top-[10%] size-[600px] rounded-full bg-[#43a047]/10 blur-[140px]" />
        <div className="absolute -right-[10%] bottom-0 size-[600px] rounded-full bg-[#f5b61a]/10 blur-[150px]" />
        <div className="pattern-grid absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Authentic Multi-Layered Farm Collage (5 Cols) */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative mx-auto max-w-[520px] lg:max-w-none">
              
              {/* Outer decorative dashed frame border */}
              <div className="absolute -inset-3.5 rounded-[3rem] border-2 border-dashed border-[#43a047]/30 sm:-inset-4" />

              {/* Main Primary Photo: Organic Farmer with Fresh Produce Crate */}
              <div className="relative z-10 aspect-[4/4.3] w-[86%] overflow-hidden rounded-[2.5rem] border-2 border-white/15 bg-[#0c2415] shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80"
                  alt="Organic farmer holding fresh harvest crate"
                  loading="lazy"
                  className="size-full object-cover object-center transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07190e]/85 via-transparent to-transparent opacity-60" />

                {/* Floating Top Leaf Tag */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#07190e]/80 px-3.5 py-1.5 text-[11px] font-bold text-[#86efac] backdrop-blur-md shadow-md">
                  <Sparkles className="size-3 text-[#f5b61a]" />
                  <span>100% Gujranwala Harvest</span>
                </div>
              </div>

              {/* Overlapping Golden Experience Badge */}
              <div className="absolute right-0 top-[34%] z-20 w-[62%] max-w-[270px] rounded-3xl border-2 border-[#ffe082] bg-gradient-to-br from-[#f5b61a] to-[#e5a40a] p-4 text-[#07190e] shadow-[0_22px_50px_rgba(245,182,26,0.45)] transition-transform duration-300 hover:scale-105 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#07190e] text-[#f5b61a] shadow-md ring-2 ring-white/20 sm:size-12">
                    <Award className="size-6" />
                  </span>
                  <div>
                    <span className="font-display text-2xl font-black leading-none sm:text-3xl">
                      20+
                    </span>
                    <span className="ml-1 text-xs font-black uppercase tracking-wider">
                      Years
                    </span>
                    <p className="mt-1 text-[11px] font-extrabold leading-tight text-[#07190e]/95 sm:text-xs">
                      There are 20+ years of agriculture experience in our farm
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Photo: Tractor Plowing in Golden Mist Fields */}
              <div className="relative -mt-16 ml-auto z-10 aspect-[16/10] w-[72%] overflow-hidden rounded-[2.2rem] border-2 border-white/20 bg-[#0c2415] shadow-[0_25px_60px_rgba(0,0,0,0.65)] sm:-mt-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                  alt="Tractor working in lush green farm pastures"
                  loading="lazy"
                  className="size-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07190e]/80 via-[#07190e]/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-bold text-white">
                  <span className="flex items-center gap-1.5 text-[#86efac]">
                    <span className="size-2 rounded-full bg-[#43a047] animate-pulse" />
                    Natural Organic Pasture
                  </span>
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[9.5px] backdrop-blur-md">
                    Est. 1987
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Narrative, Two Bullet Features & CTA Button (7 Cols) */}
          <div className="lg:col-span-6 xl:col-span-7 lg:pl-4 xl:pl-8">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/40 bg-[#0f341b]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#86efac] backdrop-blur-md shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              About Our Farm
            </div>

            {/* Main Heading */}
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold leading-[1.06] tracking-tight text-white">
              We&apos;re Best Agricultural <br />
              <span className="text-[#86efac]">&amp; Organic Farm</span>
            </h2>

            {/* Intro paragraph */}
            <p className="mt-6 text-[15.5px] leading-relaxed text-white/85 sm:text-[16.5px]">
              For over two decades, Malik Dairy has led natural cattle farming, sustainable agriculture, and pure artisanal dairy production in Gujranwala. We hold every harvest to the highest benchmark of purity, honest nutrition, and rich traditional taste.
            </p>

            {/* 2 Bullet Feature Items (Matching Reference Image Style) */}
            <div className="mt-9 space-y-6">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#43a047] text-white shadow-md ring-4 ring-[#43a047]/20">
                  <Check className="size-5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display text-[17px] font-bold text-white">
                    100% Guaranteed Organic Product
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-white/75">
                    Our herds feed on natural green alfalfa and clover pastures with zero synthetic hormones, chemical feeds, or industrial fillers.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#43a047] text-white shadow-md ring-4 ring-[#43a047]/20">
                  <Check className="size-5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display text-[17px] font-bold text-white">
                    Top-Quality Healthy Food Production
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-white/75">
                    Slow copper-kettle simmered pure desi ghee, chilled fresh milk, and laboratory-verified microbiological density standards.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/#services"
                className="group inline-flex items-center gap-3 rounded-full bg-[#43a047] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-[0_12px_28px_-5px_rgba(67,160,71,0.55)] transition-all duration-300 hover:bg-[#388e3c] hover:shadow-[0_18px_35px_-5px_rgba(67,160,71,0.7)] hover:-translate-y-0.5"
              >
                <span>Discover More</span>
                <span className="grid size-6 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>

              <Link
                href="/#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:border-[#f5b61a] hover:text-[#f5b61a]"
              >
                <span>Explore Pantry</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
