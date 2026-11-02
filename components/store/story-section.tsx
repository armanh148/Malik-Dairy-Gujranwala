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
          
          {/* Left Column: Authentic Clean Stacked Farm Collage (5 Cols) */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              
              {/* Outer decorative dashed frame border */}
              <div className="absolute -inset-3.5 rounded-[3rem] border-2 border-dashed border-[#43a047]/30 sm:-inset-4" />

              {/* Main Primary Photo: Organic Farmer with Fresh Tomatoes Harvest */}
              <div className="relative z-10 aspect-[4/4.3] w-full overflow-hidden rounded-[2.5rem] border-2 border-white/15 bg-[#0c2415] shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://plus.unsplash.com/premium_photo-1678344151150-4a42c45453d5?auto=format&fit=crop&w=1000&q=80"
                  alt="Organic farmer holding fresh tomato harvest basket in field"
                  loading="lazy"
                  className="size-full object-cover object-center transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07190e]/75 via-transparent to-transparent opacity-60" />

                {/* Floating Top Leaf Tag */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#07190e]/85 px-3.5 py-1.5 text-[11px] font-bold text-[#86efac] backdrop-blur-md shadow-md">
                  <Sparkles className="size-3 text-[#f5b61a]" />
                  <span>100% Organic Produce</span>
                </div>
              </div>

              {/* Bottom Row Overlapping Main Image: Small Landscape Photo + 20+ Years Yellow Badge Side-by-Side */}
              <div className="relative -mt-12 sm:-mt-20 z-20 px-1 sm:px-3 flex items-center gap-2 sm:gap-4">
                
                {/* Small Landscape Photo (Overlapping Main Image Beside 20+ Year Badge) */}
                <div className="group relative aspect-[16/11] w-[38%] sm:w-[45%] shrink-0 overflow-hidden rounded-xl sm:rounded-3xl border-2 border-white/25 bg-[#0c2415] shadow-[0_22px_45px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
                    alt="Tractor cultivating fertile Punjab fields"
                    loading="lazy"
                    className="size-full object-cover transition duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07190e]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-1.5 left-2 sm:bottom-2 sm:left-2.5 inline-flex items-center gap-1 rounded-full bg-black/55 px-1.5 py-0.5 text-[8.5px] font-bold text-white backdrop-blur-md sm:text-[10px]">
                    <span className="size-1.5 rounded-full bg-[#43a047] animate-pulse" />
                    Pasture Farm
                  </span>
                </div>

                {/* Overlapping Golden Experience Badge Level with it */}
                <div className="flex-1 flex flex-col justify-center rounded-xl sm:rounded-3xl border-2 border-[#ffe082] bg-gradient-to-br from-[#f5b61a] to-[#e5a40a] p-2.5 sm:p-4 text-[#07190e] shadow-[0_22px_45px_rgba(245,182,26,0.45)] transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="grid size-8 sm:size-11 shrink-0 place-items-center rounded-lg sm:rounded-2xl bg-[#07190e] text-[#f5b61a] shadow-md ring-2 ring-white/20">
                      <Award className="size-4.5 sm:size-6" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-lg sm:text-2xl font-black leading-none">
                          20+
                        </span>
                        <span className="text-[9px] sm:text-xs font-black uppercase tracking-wider">
                          Years
                        </span>
                      </div>
                      <p className="mt-0.5 text-[9px] sm:text-[11px] font-extrabold leading-tight text-[#07190e]/95 line-clamp-2">
                        20+ years of agriculture experience in our farm
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Clean Narrative, Two Bullet Features & CTA Button (7 Cols) */}
          <div className="lg:col-span-6 xl:col-span-7 lg:pl-4 xl:pl-8">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/40 bg-[#0f341b]/90 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#86efac] backdrop-blur-md shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              About Our Farm
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 sm:mt-5 font-display text-[clamp(1.9rem,4.5vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              We&apos;re Best Agricultural <br />
              <span className="text-[#86efac]">&amp; Organic Farm</span>
            </h2>

            {/* Intro paragraph */}
            <p className="mt-4 sm:mt-6 text-[14px] leading-relaxed text-white/85 sm:text-[16.5px]">
              For over two decades, Malik Dairy has led natural cattle farming, sustainable agriculture, and pure artisanal dairy production in Gujranwala. We hold every harvest to the highest benchmark of purity, honest nutrition, and rich traditional taste.
            </p>

            {/* 2 Bullet Feature Items in 1 Row (Grid of 2) */}
            <div className="mt-6 sm:mt-9 grid grid-cols-2 gap-2.5 sm:gap-5">
              
              {/* Feature 1 */}
              <div className="group flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 transition-all duration-300 hover:border-[#43a047]/50 hover:bg-white/10 hover:-translate-y-0.5">
                <span className="grid size-8 sm:size-10 shrink-0 place-items-center rounded-full bg-[#43a047] text-white shadow-md ring-2 ring-[#43a047]/30 transition-transform duration-300 group-hover:scale-110">
                  <Check className="size-4 sm:size-5" strokeWidth={3} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[13px] sm:text-[16px] font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#86efac]">
                    100% Guaranteed Organic Product
                  </h3>
                  <p className="mt-1 text-[10.5px] sm:text-[13px] leading-relaxed text-white/75">
                    Our herds feed on natural green alfalfa and clover pastures with zero synthetic hormones or fillers.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 transition-all duration-300 hover:border-[#43a047]/50 hover:bg-white/10 hover:-translate-y-0.5">
                <span className="grid size-8 sm:size-10 shrink-0 place-items-center rounded-full bg-[#43a047] text-white shadow-md ring-2 ring-[#43a047]/30 transition-transform duration-300 group-hover:scale-110">
                  <Check className="size-4 sm:size-5" strokeWidth={3} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[13px] sm:text-[16px] font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#86efac]">
                    Top-Quality Healthy Food Production
                  </h3>
                  <p className="mt-1 text-[10.5px] sm:text-[13px] leading-relaxed text-white/75">
                    Slow copper-kettle simmered pure desi ghee, chilled fresh milk, and verified purity standards.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Buttons in 1 Row */}
            <div className="mt-7 sm:mt-10 flex items-center gap-2.5 sm:gap-4">
              <Link
                href="/#services"
                className="shimmer-btn group inline-flex flex-1 sm:flex-initial justify-center items-center gap-2 sm:gap-3 rounded-full bg-[#43a047] px-3.5 py-3 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-white shadow-[0_12px_28px_-5px_rgba(67,160,71,0.55)] transition-all duration-300 hover:bg-[#388e3c] hover:shadow-[0_18px_35px_-5px_rgba(67,160,71,0.7)] hover:-translate-y-1 active:scale-95 whitespace-nowrap"
              >
                <span>Discover More</span>
                <span className="grid size-5 sm:size-6 shrink-0 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="size-3 sm:size-3.5" />
                </span>
              </Link>

              <Link
                href="/#products"
                className="inline-flex flex-1 sm:flex-initial justify-center items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-3 sm:px-7 sm:py-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#f5b61a] hover:text-[#f5b61a] hover:-translate-y-1 active:scale-95 whitespace-nowrap"
              >
                <span>Explore Pantry</span>
                <ArrowRight className="size-3 sm:size-3.5 shrink-0" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
