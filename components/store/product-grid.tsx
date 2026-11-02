"use client";

import { useState } from "react";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { ProductCard } from "@/components/store/product-card";
import { Segmented } from "@/components/ui/segmented";
import { categories, products } from "@/lib/catalog";
import type { Category } from "@/lib/types";

type Filter = "all" | Category;

export function ProductGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? products : products.filter((product) => product.category === filter);

  return (
    <section id="pantry" className="scroll-mt-24 border-y border-line bg-canvas-deep py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[600px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Shop the pantry</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.8vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
              Take home
              <span className="text-gold-gradient"> the good stuff.</span>
            </h2>
            <p className="mt-4 max-w-[480px] text-[13px] leading-relaxed text-ink-soft">
              Choose your jar and weight — every order is packed the same morning it leaves the
              dairy. Add to basket or order directly on WhatsApp.
            </p>
          </div>
          <Segmented
            ariaLabel="Filter products"
            options={categories.map((category) => ({ value: category.id, label: category.label }))}
            value={filter}
            onChange={setFilter}
            size="sm"
            className="self-start border-line bg-surface md:self-auto"
          />
        </div>

        <div
          key={filter}
          className="animate-rise mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
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
