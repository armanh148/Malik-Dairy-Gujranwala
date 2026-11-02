"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    tag: "Services Details",
    badge: "01 · Fresh Harvest",
    title: "Agriculture Products",
    description: "Fresh organic seasonal vegetables, cold-pressed mustard oil, and pesticide-free grains grown in fertile Gujranwala soil.",
    href: "/#products",
  },
  {
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=900&q=80",
    tag: "Services Details",
    badge: "02 · Natural Pasture",
    title: "Crops Cultivation",
    description: "Sustainably cultivated green pastures, natural clover & alfalfa fodder, ensuring peak cattle wellness and rich milk fat.",
    href: "/#about",
  },
  {
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=900&q=80",
    tag: "Services Details",
    badge: "03 · Pure Churn",
    title: "Dairy Production",
    description: "Raw buffalo & cow milk, slow-churned desi ghee in copper vessels, hand-churned white butter, and traditional soft khoya.",
    href: "/#products",
  },
  {
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
    tag: "Services Details",
    badge: "04 · Raw Nectar",
    title: "Organic Sidr Honey",
    description: "Single-origin wild sidr honey extracted directly from natural apiaries in Punjab with zero heating, sugar syrup, or fillers.",
    href: "/#products",
  },
  {
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=900&q=80",
    tag: "Services Details",
    badge: "05 · Dawn Express",
    title: "Chilled Dairy Delivery",
    description: "Temperature-controlled cold-chain logistics preserving raw milk freshness under 4°C delivered directly to your kitchen before 7 AM.",
    href: "/#contact",
  },
];

export function ProductCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector<HTMLElement>("[data-slider-card]");
    const cardWidth = card ? card.offsetWidth + 20 : 340;
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  }

  function scrollToIndex(index: number) {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-slider-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(index);
    }
  }

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    function handleScroll() {
      if (!container) return;
      const scrollLeft = container.scrollLeft;
      const card = container.querySelector<HTMLElement>("[data-slider-card]");
      const cardWidth = card ? card.offsetWidth + 20 : 340;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(services.length - 1, Math.max(0, newIndex)));
    }

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-white py-16 sm:py-28">
      {/* Subtle Background Accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-5%] top-[10%] size-[500px] rounded-full bg-[#e8f5e9]/40 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Responsive Slider Arrows */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/30 bg-[#e8f5e9] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32] shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              What We Offer
            </div>
            <h2 className="mt-3 sm:mt-4 font-display text-[clamp(1.85rem,4vw,3.2rem)] font-extrabold tracking-tight text-[#0c2415]">
              We Offers Eco &amp; Agriculture Services
            </h2>
          </div>

          {/* Navigation Arrows: Visible on both Mobile and Desktop */}
          <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="grid size-11 sm:size-12 place-items-center rounded-full border-2 border-[#0c2415]/15 bg-white text-[#0c2415] shadow-xs transition-all duration-300 hover:border-[#43a047] hover:bg-[#e8f5e9] hover:text-[#2e7d32] hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="grid size-11 sm:size-12 place-items-center rounded-full bg-[#43a047] text-white shadow-md transition-all duration-300 hover:bg-[#388e3c] hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Swipeable / Scroll-Snap Slider Cards Container */}
        <div
          ref={scrollRef}
          className="mt-8 sm:mt-14 flex items-stretch gap-4 sm:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((item) => (
            <article
              key={item.title}
              data-slider-card
              className="group flex flex-col overflow-hidden rounded-[2.2rem] sm:rounded-[2.4rem] border border-[#0c2415]/10 bg-[#0e3b1f] shadow-md transition-all duration-500 hover:-translate-y-2.5 hover:border-[#43a047]/60 hover:shadow-[0_30px_60px_-12px_rgba(14,59,31,0.5)] cursor-pointer w-[86vw] sm:w-[380px] lg:w-[calc(33.333%-1.2rem)] shrink-0 snap-center sm:snap-start"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10.5] overflow-hidden bg-[#0c2415]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e3b1f] via-transparent to-transparent opacity-65" />

                {/* Top Corner Pill Badge */}
                <div className="absolute left-3.5 top-3.5 sm:left-4 sm:top-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0c2415]/80 px-3 py-1 sm:px-3.5 text-[10.5px] sm:text-[11px] font-bold text-[#86efac] backdrop-blur-md shadow-sm">
                    <Sparkles className="size-3 text-[#f5b61a]" />
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body - Deep Forest Green */}
              <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-[#0e3b1f] to-[#082413] p-5 sm:p-8 text-white">
                <div>
                  <span className="inline-block rounded-full bg-white/10 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#86efac] backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 sm:mt-4 font-display text-[1.25rem] sm:text-[1.45rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#f5b61a]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-[13.5px] leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 sm:mt-9 flex items-center justify-between border-t border-white/10 pt-4 sm:pt-5">
                  <Link
                    href={item.href}
                    className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-white/90 transition-colors duration-300 group-hover:text-[#f5b61a]"
                  >
                    Read More
                  </Link>
                  <span className="grid size-10 sm:size-11 place-items-center rounded-full bg-[#43a047] text-white shadow-md transition-all duration-300 group-hover:bg-[#f5b61a] group-hover:text-[#0c2415] group-hover:scale-110">
                    <ArrowRight className="size-4 sm:size-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Slider Pagination Dots */}
        <div className="mt-6 sm:mt-10 flex items-center justify-center gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to service slide ${idx + 1}`}
              className={cn(
                "transition-all duration-300 rounded-full cursor-pointer",
                activeIndex === idx
                  ? "h-2.5 w-8 bg-[#43a047] shadow-xs"
                  : "size-2.5 bg-[#0c2415]/20 hover:bg-[#0c2415]/40"
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
