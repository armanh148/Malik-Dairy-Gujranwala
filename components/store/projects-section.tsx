"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    number: "01",
    title: "Agriculture Products",
    subtitle: "Organic Greenhouse",
  },
  {
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    number: "02",
    title: "Fresh Fruit & Veg",
    subtitle: "Natural Nursery",
  },
  {
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80",
    number: "03",
    title: "Crops & Pure Dairy",
    subtitle: "Open Pastures",
  },
  {
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
    number: "04",
    title: "Farming Solutions",
    subtitle: "Eco Soil Testing",
  },
  {
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80",
    number: "05",
    title: "Automated Milking",
    subtitle: "Cold-Chain Hygiene",
  },
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    number: "06",
    title: "Ancestral Ghee Churn",
    subtitle: "Copper Kettle Kitchen",
  },
];

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector<HTMLElement>("[data-project-card]");
    const gap = typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 28;
    const cardWidth = card ? card.offsetWidth + gap : 180;
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  }

  function scrollToIndex(index: number) {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-project-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
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
      const card = container.querySelector<HTMLElement>("[data-project-card]");
      const gap = window.innerWidth < 640 ? 10 : 28;
      const cardWidth = card ? card.offsetWidth + gap : 180;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(projects.length - 1, Math.max(0, newIndex)));
    }

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden bg-[#faf9f6] py-16 sm:py-28">
      {/* Warm Peach/Cream Accent Block on Bottom-Right */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/3 rounded-tl-[5rem] bg-[#fef1e1]/70 blur-xl" />
      <div className="pointer-events-none absolute left-0 top-0 size-96 rounded-full bg-[#e8f5e9]/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header with Slider Controls */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a047]/30 bg-[#e8f5e9] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32] shadow-sm">
              <Leaf className="size-3.5 text-[#43a047]" />
              Latest Projects
            </div>
            <h2 className="mt-3 sm:mt-4 font-display text-[clamp(1.85rem,4vw,3.2rem)] font-extrabold tracking-tight text-[#0c2415]">
              Recently Completed Project
            </h2>
            <p className="mt-2 max-w-[520px] text-xs sm:text-sm leading-relaxed text-[#385342]">
              Explore our recent organic field harvests, automated hygienic dairy pipelines, and sustainable crop cycles across our Gujranwala farms.
            </p>
          </div>

          {/* Navigation Arrows for Carousel */}
          <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="grid size-11 sm:size-12 place-items-center rounded-full border-2 border-[#0c2415]/15 bg-white text-[#0c2415] shadow-xs transition-all duration-300 hover:border-[#43a047] hover:bg-[#e8f5e9] hover:text-[#2e7d32] hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous project slide"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="grid size-11 sm:size-12 place-items-center rounded-full bg-[#43a047] text-white shadow-md transition-all duration-300 hover:bg-[#388e3c] hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next project slide"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Carousel Gallery Cards Container - 2 Cards Visible on Mobile */}
        <div
          ref={scrollRef}
          className="mt-6 sm:mt-14 flex items-stretch gap-2.5 sm:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((item, idx) => (
            <div
              key={idx}
              data-project-card
              className="group relative aspect-[3/4.2] sm:aspect-[3/4.8] overflow-hidden rounded-[1.35rem] sm:rounded-[2.5rem] border border-[#0c2415]/10 bg-[#0c2415] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(12,36,21,0.2)] cursor-pointer w-[calc((100vw-42px)/2)] sm:w-[320px] lg:w-[calc(25%-1.35rem)] shrink-0 snap-start"
            >
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="size-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081f10] via-[#081f10]/35 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top Tag */}
              <div className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 sm:px-3 sm:py-1 text-[9.5px] sm:text-[10.5px] font-bold text-white backdrop-blur-md shadow-sm">
                  <Sparkles className="size-2.5 sm:size-3 text-[#f5b61a]" />
                  {item.number}
                </span>
              </div>

              {/* Bottom Dark Green Pill Badge with Title */}
              <div className="absolute inset-x-2 bottom-2 sm:inset-x-4 sm:bottom-4">
                <div className="flex items-center justify-between rounded-xl sm:rounded-3xl border border-white/15 bg-[#092012]/92 p-2 sm:p-4.5 text-white backdrop-blur-md shadow-lg transition-all duration-300 group-hover:bg-[#43a047] group-hover:border-[#43a047]">
                  <div className="min-w-0 pr-1.5 sm:pr-2">
                    <p className="text-[8px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#86efac] group-hover:text-white/90 truncate">
                      {item.subtitle}
                    </p>
                    <p className="mt-0.5 font-display text-[12px] sm:text-[15.5px] font-bold leading-tight text-white truncate">
                      {item.title}
                    </p>
                  </div>
                  <span className="grid size-6 sm:size-10 shrink-0 place-items-center rounded-full bg-white/20 text-white shadow-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#0c2415] group-hover:scale-110 group-hover:rotate-[-45deg]">
                    <ArrowRight className="size-3 sm:size-4.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Slider Pagination Dots */}
        <div className="mt-6 sm:mt-10 flex items-center justify-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to project slide ${idx + 1}`}
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
