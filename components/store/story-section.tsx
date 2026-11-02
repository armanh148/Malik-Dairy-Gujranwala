import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Leaf } from "lucide-react";

export function StorySection() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-[#0c2415] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left: Farmer holding tomato crate + Floating Yellow Badge */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-3xl border-2 border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=900&q=80"
                alt="Farmer holding fresh crate of harvest produce"
                loading="lazy"
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2415]/70 via-transparent to-transparent" />
            </div>

            {/* Floating Warm Yellow Experience Badge */}
            <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:right-6 flex max-w-[240px] items-center gap-3 rounded-2xl bg-[#f5b61a] p-4 text-[#0c2415] shadow-2xl">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#0c2415] text-[#f5b61a]">
                <Award className="size-6" />
              </span>
              <p className="text-xs font-bold leading-tight">
                There will be more than 20+ years experience of farm field
              </p>
            </div>
          </div>

          {/* Right: Farm Story Info & Bullets */}
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#81c784] backdrop-blur-sm">
              <Leaf className="size-3.5" />
              About Our Farm
            </div>

            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.8vw,2.9rem)] font-bold leading-[1.08] tracking-tight text-white">
              Welcome To Malik Dairy Nature &amp; Organic Farm
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              For over two decades, Malik Dairy has pioneered natural, cruelty-free cattle farming and chemical-free agriculture in Gujranwala. We hold every harvest to the highest standard of health and authentic taste.
            </p>

            {/* Feature Bullets */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-[#43a047] text-white">
                  <CheckCircle2 className="size-4" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-white">100% Natural &amp; Organic Product</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    Sourced directly from open pastures fed with green alfalfa, clover, and organic grains with zero growth hormones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-[#43a047] text-white">
                  <CheckCircle2 className="size-4" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-white">Best Quality 100% Certified Solution</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    Cold-chain hygienic preservation, traditional copper kadhai ghee churning, and comprehensive laboratory purity tests.
                  </p>
                </div>
              </div>
            </div>

            {/* Farm Landscape Image */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/15 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                alt="Agricultural tractor working in sunlit fields"
                loading="lazy"
                className="h-36 w-full object-cover"
              />
            </div>

            {/* Discover More Button */}
            <div className="mt-8">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#43a047] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition duration-200 hover:bg-[#388e3c]"
              >
                Discover More
                <ArrowRight className="size-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}