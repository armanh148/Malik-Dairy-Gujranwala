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
      className="group relative flex flex-col overflow-hidden rounded-[1.7rem] border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div
        className="relative m-2.5 aspect-[5/4] overflow-hidden rounded-[1.25rem]"
        style={{ background: product.tint }}
      >
        <div className="pattern-dots absolute inset-0 opacity-[0.16]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 size-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3">
          {product.badge ? <Badge tone={badgeTone[product.badge] ?? "neutral"}>{product.badge}</Badge> : null}
        </div>
        {low ? (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-espresso/85 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.1em] text-cream backdrop-blur">
            <span className="size-1.5 animate-soft-pulse rounded-full bg-gold" />
            Only {stock} left
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-0.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[1.08rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
              {product.name}
            </h3>
            <p lang="ur" className="font-urdu mt-1 text-[11px] leading-[1.9] text-ink-faint">
              {product.urdu}
            </p>
          </div>
          <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 text-[11px] font-bold text-ink">
            <Star className="size-3.5 fill-gold text-gold" strokeWidth={1.5} />
            {product.rating}
            <span className="font-medium text-ink-faint">({product.reviews})</span>
          </span>
        </div>

        <p className="mt-2.5 line-clamp-2 min-h-[32px] text-[11.5px] leading-relaxed text-ink-soft">
          {product.blurb}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
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
                  "relative rounded-full border px-2.5 py-1.5 text-[10.5px] font-bold transition",
                  active
                    ? "border-gold/50 bg-gold/15 text-gold-strong"
                    : "border-line text-ink-faint hover:border-line-strong hover:text-ink-soft",
                  itemStock <= 0 && "opacity-45",
                )}
              >
                {item.label}
                {itemStock <= 0 ? <span className="ml-1 text-[9px]">sold out</span> : null}
              </button>
            );
          })}
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-4">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="tnum font-display text-[1.25rem] font-semibold leading-none text-ink">
                {formatPKR(variant.price)}
              </span>
              {variant.compareAt ? (
                <span className="tnum text-[10.5px] font-medium text-ink-faint line-through">
                  {formatPKR(variant.compareAt)}
                </span>
              ) : null}
            </div>
            <p
              className={cn(
                "mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.08em]",
                soldOut ? "text-danger" : low ? "text-terracotta" : "text-success",
              )}
            >
              {soldOut ? "Sold out" : low ? "Almost gone" : "In stock · fresh batch"}
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`Order ${product.name} on WhatsApp`}
              className="grid size-9 place-items-center rounded-full border border-line bg-surface-2 text-wa transition hover:border-wa/40 hover:bg-wa/10"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            <button
              type="button"
              onClick={handleAdd}
              disabled={soldOut}
              className={cn(
                "inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[11px] font-extrabold transition-all active:scale-[0.97]",
                justAdded
                  ? "bg-success text-espresso"
                  : "bg-gold text-espresso hover:bg-gold-strong disabled:cursor-not-allowed disabled:bg-surface-3 disabled:text-ink-faint",
              )}
            >
              {justAdded ? (
                <Check className="size-3.5" strokeWidth={3} />
              ) : (
                <Plus className="size-3.5" strokeWidth={3} />
              )}
              {soldOut ? "Sold out" : justAdded ? "Added" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
