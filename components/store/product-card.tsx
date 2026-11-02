"use client";

import { useState } from "react";
import { Check, Plus, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { useCart } from "@/lib/cart-store";
import { useData } from "@/lib/data-store";
import { formatPKR } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";
import { useToast } from "@/lib/toast";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

const badgeTone: Record<string, "gold" | "sage" | "terracotta" | "neutral"> = {
  Bestseller: "gold",
  New: "sage",
  "Festive favourite": "terracotta",
  "Lab tested": "sage",
  Everyday: "neutral",
};

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [justAdded, setJustAdded] = useState(false);
  const { stockOf } = useData();
  const { add, openCart } = useCart();
  const { toast } = useToast();

  const variant = product.variants.find((item) => item.id === variantId) ?? product.variants[0];
  const stock = stockOf(product.id, variant.id);
  const soldOut = stock <= 0;
  const low = stock > 0 && stock <= 5;

  function handleAdd() {
    const result = add(product.id, variant.id, 1);
    if (!result.ok) {
      toast({ tone: "error", title: "Couldn't add to basket", description: result.message });
      return;
    }
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
    toast({
      title: `${product.name} added`,
      description: `${variant.label} · ${formatPKR(variant.price)}`,
      action: { label: "View basket", onClick: openCart },
    });
  }

  const waHref = whatsappLink(
    `Assalam-o-Alaikum Malik Dairy! I'd like to order ${product.name} (${variant.label}) — ${formatPKR(variant.price)}. Please confirm availability.`,
  );

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] border border-[#0c2415]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#43a047] hover:shadow-[0_24px_48px_rgba(12,36,21,0.12)] cursor-pointer"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div
        className="relative m-1.5 sm:m-2.5 aspect-[5/4.2] overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem]"
        style={{ background: product.tint }}
      >
        <div className="pattern-dots absolute inset-0 opacity-[0.16]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 size-full object-contain p-2 sm:p-3.5 transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
          {product.badge ? (
            <Badge tone={badgeTone[product.badge] ?? "neutral"} className="px-2 py-0.5 text-[8.5px] sm:text-[10px]">
              {product.badge}
            </Badge>
          ) : null}
        </div>
        {low ? (
          <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 inline-flex items-center gap-1 rounded-full bg-[#0c2415]/85 px-2 py-0.5 text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md">
            <span className="size-1.5 animate-pulse rounded-full bg-[#f5b61a]" />
            Only {stock} left
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-2.5 sm:p-4 pt-1 sm:pt-1">
        <div className="flex items-start justify-between gap-1.5 sm:gap-2">
          <div className="min-w-0">
            <h3 className="font-display text-[13px] sm:text-[1.05rem] font-bold leading-tight tracking-[-0.02em] text-[#0c2415] transition-colors group-hover:text-[#43a047] truncate">
              {product.name}
            </h3>
            <p lang="ur" className="font-urdu mt-0.5 text-[9.5px] sm:text-[10.5px] leading-[1.6] sm:leading-[1.8] text-[#385342]/70 truncate">
              {product.urdu}
            </p>
          </div>
          <span className="mt-0.5 inline-flex shrink-0 items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px] font-bold text-[#0c2415]">
            <Star className="size-3 sm:size-3.5 fill-[#f5b61a] text-[#f5b61a]" strokeWidth={1.5} />
            {product.rating}
          </span>
        </div>

        <p className="mt-1 sm:mt-2 line-clamp-1 sm:line-clamp-2 text-[10.5px] sm:text-[11.5px] leading-relaxed text-[#385342]">
          {product.blurb}
        </p>

        <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-1">
          {product.variants.map((item) => {
            const active = item.id === variantId;
            const itemStock = stockOf(product.id, item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setVariantId(item.id)}
                aria-pressed={active}
                aria-label={`Select ${item.label}`}
                className={cn(
                  "relative rounded-full border px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10.5px] font-bold transition",
                  active
                    ? "border-[#43a047] bg-[#e8f5e9] text-[#2e7d32]"
                    : "border-[#0c2415]/15 text-[#385342] hover:border-[#43a047] hover:text-[#0c2415]",
                  itemStock <= 0 && "opacity-45",
                )}
              >
                {item.label}
                {itemStock <= 0 ? <span className="ml-1 text-[8px]">sold</span> : null}
              </button>
            );
          })}
        </div>

        <div className="mt-auto pt-2.5 sm:pt-3">
          <div className="flex items-baseline justify-between gap-1 border-t border-[#0c2415]/5 pt-2 sm:pt-3">
            <div className="flex items-baseline gap-1">
              <span className="tnum font-display text-[1rem] sm:text-[1.18rem] font-bold leading-none text-[#0c2415]">
                {formatPKR(variant.price)}
              </span>
              {variant.compareAt ? (
                <span className="tnum text-[9px] sm:text-[10px] font-medium text-[#385342]/60 line-through">
                  {formatPKR(variant.compareAt)}
                </span>
              ) : null}
            </div>
            <p
              className={cn(
                "text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.06em] truncate",
                soldOut ? "text-danger" : low ? "text-terracotta" : "text-[#2e7d32]",
              )}
            >
              {soldOut ? "Sold out" : low ? "Low" : "Fresh"}
            </p>
          </div>

          <div className="mt-2 sm:mt-2.5 flex items-center gap-1.5">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`Order ${product.name} on WhatsApp`}
              className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-lg sm:rounded-xl border border-[#0c2415]/10 bg-[#f4f7f4] text-wa shadow-xs transition hover:border-wa/40 hover:bg-wa hover:text-white"
            >
              <WhatsAppIcon className="size-3.5 sm:size-4" />
            </a>
            <button
              type="button"
              onClick={handleAdd}
              disabled={soldOut}
              className={cn(
                "flex flex-1 h-8 sm:h-9 items-center justify-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl px-2 sm:px-3 text-[10px] sm:text-[11px] font-bold transition-all shadow-xs active:scale-95",
                justAdded
                  ? "bg-[#2e7d32] text-white"
                  : "bg-[#43a047] text-white hover:bg-[#388e3c] disabled:cursor-not-allowed disabled:bg-surface-3 disabled:text-ink-faint",
              )}
            >
              {justAdded ? (
                <Check className="size-3 sm:size-3.5" strokeWidth={3} />
              ) : (
                <Plus className="size-3 sm:size-3.5" strokeWidth={3} />
              )}
              <span>
                {soldOut ? "Sold" : justAdded ? "Added" : (
                  <>
                    <span className="sm:hidden">Add</span>
                    <span className="hidden sm:inline">Add to Cart</span>
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
