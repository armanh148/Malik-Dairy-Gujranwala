import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Leaf, ShieldCheck, Sparkles } from "lucide-react";

export function StorySection() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-[#092012] py-24 text-white sm:py-32">
      {/* Atmospheric Background Glow & Texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] size-[500px] rounded-full bg-[#43a047]/10 blur-[120px]" />
        <div className="absolute right-[-5%] bottom-[-10%] size-[600px] rounded-full bg-[#f5b61a]/10 blur-[140px]" />
        <div className="pattern-grid absolute inset-0 opacity-[0.07]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Farmer Portrait with Layered Frames & Experience Badge (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              
              {/* Decorative Offset Backdrop Frame */}
              <div className="absolute -inset-3.5 rounded-[3rem] border-2 border-dashed border-[#43a047]/30 sm:-inset-4" />
              <div className="absolute -inset-1 rounded-[2.8rem] bg-gradient-to-tr from-[#43a047]/20 to-transparent blur-sm" />

              {/* Main Farmer Image Container */}
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-[2.5rem] border-2 border-white/20 bg-[#0c2415] shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=900&q=80"
                  alt="Farmer holding fresh crate of harvest produce"
                  loading="lazy"
                  className="size-full object-cover object-center transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092012]/90 via-transparent to-transparent opacity-60" />

                {/* Floating Top Badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#092012]/80 px-3.5 py-1.5 text-[11px] font-bold text-[#86efac] backdrop-blur-md shadow-lg">
                  <Sparkles className="size-3 text-[#f5b61a]" />
                  <span>100% Pure Pasture Fed</span>
                </div>
              </div>

              {/* Floating Golden Experience Badge */}
              <div className="absolute -bottom-7 -right-3 sm:-bottom-8 sm:right-4 z-10 flex max-w-[280px] items-center gap-3.5 rounded-3xl border-2 border-[#ffdb70] bg-gradient-to-br from-[#f5b61a] to-[#e5a40a] p-5 text-[#092012] shadow-[0_20px_50px_rgba(245,182,26,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_60px_rgba(245,182,26,0.5)]">
                <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-[#092012] text-[#f5b61a] shadow-md ring-2 ring-white/20">
                  <Award className="size-7" />
                </span>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl font-black leading-none">20+</span>
                    <span className="text-xs font-black uppercase tracking-wider">Years</span>
                  </div>
                  <p className="mt-1 text-[11.5px] font-extrabold leading-tight text-[#092012]/90">
                    Experience of Farm Field &amp; Organic Dairy
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Interactive Feature Cards & CTA (7 Cols) */}
          <div className="lg:col-span-7 lg:pl-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/40 bg-[#12381f]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#86efac] backdrop-blur-md shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              About Our Farm
            </div>

            {/* Heading */}
            <h2 className="mt-5 font-display text-[clamp(2.1rem,4.2vw,3.3rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Welcome To Malik Dairy <br />
              <span className="text-[#86efac]">Nature &amp; Organic Farm</span>
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
              For over two decades, Malik Dairy has championed natural, cruelty-free cattle farming and chemical-free agriculture in Gujranwala. We hold every harvest to the highest standard of health, uncompromised purity, and ancestral taste.
            </p>

            {/* 2 Feature Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#43a047] hover:bg-white/[0.1] hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#43a047] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <CheckCircle2 className="size-5" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-[#86efac]">
                    100% Natural &amp; Organic
                  </h4>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white/75">
                  Herds graze freely on lush green alfalfa and natural fodder with zero synthetic hormones or steroids.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#43a047] hover:bg-white/[0.1] hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#43a047] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <ShieldCheck className="size-5" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-[#86efac]">
                    100% Certified Purity
                  </h4>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white/75">
                  Cold-chain preservation, slow-churned copper ghee simmer, and daily laboratory microbiological tests.
                </p>
              </div>

            </div>

            {/* Farm Landscape Banner Card */}
            <div className="group relative mt-7 overflow-hidden rounded-2xl border border-white/20 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                alt="Agricultural tractor working in sunlit fields"
                loading="lazy"
                className="h-44 w-full object-cover transition duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092012]/95 via-[#092012]/30 to-transparent" />
              
              <div className="absolute inset-x-4 bottom-3 flex items-center justify-between text-xs text-white">
                <span className="flex items-center gap-1.5 font-bold text-[#86efac]">
                  <Leaf className="size-3.5 text-[#43a047]" />
                  Gujranwala Family Pastures · Harvested Fresh Daily
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 font-semibold backdrop-blur-md">
                  Est. 1987
                </span>
              </div>
            </div>

            {/* Discover More Button */}
            <div className="mt-8 flex items-center gap-4">
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
                Explore Pantry
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}