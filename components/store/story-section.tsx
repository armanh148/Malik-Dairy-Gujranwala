import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Leaf } from "lucide-react";

export function StorySection() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-[#0c2415] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left: Farmer holding tomato crate + Floating Yellow Badge */}
          <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-[2.5rem] border-2 border-white/15 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=900&q=80"
                alt="Farmer holding fresh crate of harvest produce"
                loading="lazy"
                className="size-full object-cover object-center transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2415]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Warm Yellow Experience Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 flex max-w-[270px] items-center gap-3.5 rounded-3xl bg-[#f5b61a] p-5 text-[#0c2415] shadow-[0_20px_50px_rgba(245,182,26,0.35)] transition-transform duration-300 hover:scale-105">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#0c2415] text-[#f5b61a] shadow-md">
                <Award className="size-6.5" />
              </span>
              <div>
                <p className="text-sm font-extrabold leading-snug">
                  There will be more than 20+ years experience of farm field
                </p>
              </div>
            </div>
          </div>

          {/* Right: Farm Story Info & Bullets */}
          <div className="lg:pl-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#86efac] backdrop-blur-sm">
              <Leaf className="size-3.5" />
              About Our Farm
            </div>

            <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-white">
              Welcome To Malik Dairy Nature &amp; Organic Farm
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-white/85">
              For over two decades, Malik Dairy has pioneered natural, cruelty-free cattle farming and chemical-free agriculture in Gujranwala. We hold every harvest to the highest standard of health and authentic taste.
            </p>

            {/* Feature Bullets */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-[#43a047] text-white shadow-md">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-white">100% Natural &amp; Organic Product</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">
                    Sourced directly from open pastures fed with green alfalfa, clover, and organic grains with zero growth hormones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-[#43a047] text-white shadow-md">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-white">Best Quality 100% Certified Solution</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">
                    Cold-chain hygienic preservation, traditional copper kadhai ghee churning, and comprehensive laboratory purity tests.
                  </p>
                </div>
              </div>
            </div>

            {/* Farm Landscape Image */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/20 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80"
                alt="Agricultural tractor working in sunlit fields"
                loading="lazy"
                className="h-40 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Discover More Button */}
            <div className="mt-8">
              <Link
                href="/#services"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#43a047] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_25px_-5px_rgba(67,160,71,0.5)] transition-all duration-300 hover:bg-[#388e3c] hover:shadow-[0_15px_30px_-5px_rgba(67,160,71,0.7)]"
              >
                Discover More
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}