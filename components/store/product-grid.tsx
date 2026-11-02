"use client";

import { useState } from "react";
import { ArrowUpRight, ShoppingBag, Leaf } from "lucide-react";
import { ProductCard } from "@/components/store/product-card";
import { Segmented } from "@/components/ui/segmented";
import { categories, products } from "@/lib/catalog";
import type { Category } from "@/lib/types";

type Filter = "all" | Category;

export function ProductGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? products : products.filter((product) => product.category === filter);

  return (
    <section id="products" className="scroll-mt-24 border-y border-[#0c2415]/10 bg-[#faf9f5] py-14 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5e9] px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2e7d32]">
              <Leaf className="size-3.5" />
              Organic Farm Pantry
            </div>
            <h2 className="mt-2.5 sm:mt-3 font-display text-[clamp(1.75rem,3.8vw,2.75rem)] font-bold tracking-tight text-[#0c2415]">
              Farm Fresh Pure Dairy Products
            </h2>
            <p className="mt-2 max-w-[480px] text-xs leading-relaxed text-[#385342]">
              Every jar is hand-packed the same morning it leaves our Gujranwala dairy. Add to cart or order instantly on WhatsApp.
            </p>
          </div>
          <div className="overflow-x-auto max-w-full pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <Segmented
              ariaLabel="Filter products"
              options={categories.map((category) => ({ value: category.id, label: category.label }))}
              value={filter}
              onChange={setFilter}
              size="sm"
              className="border-[#0c2415]/15 bg-white shrink-0"
            />
          </div>
        </div>

        <div
          key={filter}
          className="animate-rise mt-6 sm:mt-10 grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {visible.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-dashed border-line-strong bg-surface/40 px-5 py-4 text-[11.5px] text-ink-soft">
          <p className="inline-flex items-center gap-2">
            <ShoppingBag className="size-4 text-gold" />
            <span>
              <span className="font-bold text-ink">Not sure which size?</span> Start with 500 g — most
              kitchens do.
            </span>
          </p>
          <a
            href="#process"
            className="inline-flex items-center gap-1 font-bold text-gold-strong hover:underline"
          >
            How we make it
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
