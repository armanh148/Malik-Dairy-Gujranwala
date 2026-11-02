import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Leaf, ShieldCheck, Sparkles } from "lucide-react";

export function StorySection() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-[#07190e] py-24 text-white sm:py-32">
      {/* Atmospheric Background Glow & Texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] size-[550px] rounded-full bg-[#43a047]/12 blur-[140px]" />
        <div className="absolute right-[-5%] bottom-[-10%] size-[600px] rounded-full bg-[#f5b61a]/10 blur-[150px]" />
        <div className="pattern-grid absolute inset-0 opacity-[0.05]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Stacked Farmer + Tractor Imagery with Golden Experience Badge (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[500px] space-y-6 lg:max-w-none">
              
              {/* Main Farmer Image Container */}
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-3 rounded-[3rem] border-2 border-dashed border-[#43a047]/30 sm:-inset-3.5" />
                
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#0c2415] shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=900&q=80"
                    alt="Farmer holding crate of fresh harvest"
                    loading="lazy"
                    className="size-full object-cover object-center transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07190e]/80 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#07190e]/80 px-3.5 py-1.5 text-[11px] font-bold text-[#86efac] backdrop-blur-md shadow-md">
                    <Sparkles className="size-3 text-[#f5b61a]" />
                    <span>Pure Organic Pasture</span>
                  </div>
                </div>

                {/* Floating Golden Experience Badge (Overlapping lower right) */}
                <div className="absolute -bottom-6 right-2 sm:-bottom-8 sm:right-4 z-10 flex max-w-[270px] items-center gap-3.5 rounded-3xl border-2 border-[#ffdb70] bg-gradient-to-br from-[#f5b61a] to-[#e5a40a] p-4.5 text-[#07190e] shadow-[0_20px_45px_rgba(245,182,26,0.4)] transition-transform duration-300 hover:scale-105">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#07190e] text-[#f5b61a] shadow-md ring-2 ring-white/20">
                    <Award className="size-6.5" />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-2xl font-black leading-none">20+</span>
                      <span className="text-xs font-black uppercase tracking-wider">Years</span>
                    </div>
                    <p className="mt-0.5 text-xs font-extrabold leading-tight text-[#07190e]">
                      There are 20+ years of agriculture experience in our farm
                    </p>
                  </div>
                </div>
              </div>

              {/* Lower Landscape Tractor / Farm Field Photo */}
              <div className="relative pt-4 sm:pt-6">
                <div className="aspect-[16/8.5] overflow-hidden rounded-[2rem] border border-white/20 shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
                    alt="Tractor cultivating agricultural fields"
                    loading="lazy"
                    className="size-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07190e]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs font-bold text-white/90">
                    <span className="size-2 rounded-full bg-[#43a047] animate-pulse" />
                    <span>Fertile Punjab Pastures · Malik Dairy Farm</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Narrative, 2 Highlight Features & Action (7 Cols) */}
          <div className="lg:col-span-7 lg:pl-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/40 bg-[#0f341b]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#86efac] backdrop-blur-md shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              About Our Farm
            </div>

            {/* Heading */}
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.4vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              We&apos;re Best Agricultural <br />
              <span className="text-[#86efac]">&amp; Organic Farm</span>
            </h2>

            <p className="mt-5 text-[15.5px] leading-relaxed text-white/85 sm:text-[16.5px]">
              For over two decades, Malik Dairy has led sustainable agriculture, cruelty-free open cattle grazing, and unadulterated dairy craftsmanship in Gujranwala. We hold every harvest to the highest standard of health, ancestral purity, and uncompromising taste.
            </p>

            {/* 2 Feature Points */}
            <div className="mt-9 space-y-5">
              
              {/* Feature 1 */}
              <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#43a047] hover:bg-white/[0.08]">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#43a047] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle2 className="size-6" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-[#86efac]">
                    100% Guaranteed Organic Product
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">
                    Our herds feed on natural green alfalfa and clover fodder with zero industrial additives, chemicals, or synthetic hormones.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#43a047] hover:bg-white/[0.08]">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#43a047] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="size-6" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-[#86efac]">
                    Top-Quality Healthy Food Production
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">
                    Traditional copper simmered desi ghee, raw chilled whole milk, and daily laboratory microbiological density checks.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/#services"
                className="group inline-flex items-center gap-3 rounded-full bg-[#43a047] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-[0_12px_28px_-5px_rgba(67,160,71,0.55)] transition-all duration-300 hover:bg-[#388e3c] hover:shadow-[0_18px_35px_-5px_rgba(67,160,71,0.7)] hover:-translate-y-0.5"
              >
                <span>Discover More</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/#products"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 transition hover:text-[#f5b61a]"
              >
                Explore Farm Pantry
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
