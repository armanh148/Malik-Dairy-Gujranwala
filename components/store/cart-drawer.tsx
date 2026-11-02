"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2, Truck, X } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { Stepper } from "@/components/ui/stepper";
import { Badge } from "@/components/ui/badge";
import { DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "@/lib/catalog";
import { useCart } from "@/lib/cart-store";
import { formatPKR } from "@/lib/format";
import {
  cartWhatsAppMessage,
  whatsappLink,
} from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function CartDrawer() {
  const { open, closeCart, detailed, count, subtotal, setQty, remove, ready } = useCart();
  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;
  const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);
  const freeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;

  return (
    <Sheet open={open} onClose={closeCart} label="Your basket" className="bg-canvas">
      <div className="flex items-start justify-between border-b border-line px-5 py-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-strong">Your basket</p>
          <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
            {ready && count > 0 ? `${count} item${count === 1 ? "" : "s"} of goodness` : "A little basket of good"}
          </h2>
        </div>
        <button
          type="button"
          onClick={closeCart}
          aria-label="Close basket"
          className="grid size-9 place-items-center rounded-full border border-line bg-surface text-ink-soft transition hover:text-ink"
        >
          <X className="size-4" />
        </button>
      </div>

      {ready && detailed.length > 0 ? (
        <>
          <div className="border-b border-line bg-surface-2/60 px-5 py-3.5">
            <div className="flex items-center justify-between gap-3 text-[11px] font-semibold">
              <span className="flex items-center gap-1.5 text-ink-soft">
                <Truck className="size-3.5 text-gold-strong" />
                {freeDelivery ? "Free delivery unlocked" : `${formatPKR(remaining)} away from free delivery`}
              </span>
              <span className="tnum text-ink-faint">{Math.round(progress)}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  freeDelivery ? "bg-success" : "bg-gold",
                )}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5">
            <ul className="divide-y divide-line">
              {detailed.map(({ product, variant, qty, lineTotal, stock }) => (
                <li key={`${product.id}-${variant.id}`} className="flex gap-3.5 py-4">
                  <Link
                    href={`/#products`}
                    onClick={closeCart}
                    className="relative size-[74px] shrink-0 overflow-hidden rounded-xl border border-line"
                    style={{ background: product.tint }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 size-full scale-110 object-contain mix-blend-multiply dark:mix-blend-normal dark:brightness-90"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[13px] font-bold leading-tight text-ink">{product.name}</p>
                        <p className="mt-0.5 text-[11px] text-ink-faint">
                          {variant.label} · {formatPKR(variant.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.id, variant.id)}
                        aria-label={`Remove ${product.name}`}
                        className="rounded-full p-1 text-ink-faint transition hover:bg-danger-soft hover:text-danger"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between gap-2">
                      <Stepper
                        value={qty}
                        onChange={(next) => setQty(product.id, variant.id, next)}
                        min={1}
                        max={stock}
                        size="sm"
                        label={product.name}
                      />
                      <span className="tnum text-[13px] font-bold text-ink">{formatPKR(lineTotal)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-line bg-surface/70 px-5 pb-5 pt-4">
            <dl className="space-y-2 text-[13px]">
              <div className="flex justify-between text-ink-soft">
                <dt>Subtotal</dt>
                <dd className="tnum font-semibold text-ink">{formatPKR(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-ink-soft">
                <dt>Delivery</dt>
                <dd className={cn("tnum font-semibold", delivery === 0 ? "text-success" : "text-ink")}>
                  {delivery === 0 ? "Free" : formatPKR(delivery)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-line pt-2.5 text-ink">
                <dt className="text-sm font-bold">Total</dt>
                <dd className="tnum font-display text-2xl font-semibold">{formatPKR(total)}</dd>
              </div>
            </dl>

            <div className="mt-4 space-y-2">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#43a047] text-sm font-bold text-white shadow-md transition hover:bg-[#388e3c] active:scale-[0.99]"
              >
                Checkout
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={whatsappLink(
                  cartWhatsAppMessage({
                    lines: detailed.map(({ product, variant, qty, lineTotal }) => ({
                      name: product.name,
                      variantLabel: variant.label,
                      qty,
                      price: lineTotal / qty,
                    })),
                    subtotal,
                    delivery,
                    total,
                  }),
                )}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-line bg-surface text-xs font-bold text-ink transition hover:border-wa/40 hover:bg-wa/5"
              >
                <WhatsAppIcon className="size-4 text-wa" />
                Order on WhatsApp instead
              </a>
            </div>
            <p className="mt-3 text-center text-[10.5px] leading-relaxed text-ink-faint">
              Cash on delivery · Delivered chilled within 24 hours in Gujranwala
            </p>
          </div>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
          <div className="relative grid size-24 place-items-center rounded-full bg-surface-2">
            <ShoppingBag className="size-8 text-gold-strong" strokeWidth={1.5} />
            <span className="absolute -right-1 top-1 size-3 rounded-full bg-gold/40" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold text-ink">Nothing here yet</h3>
          <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-ink-soft">
            Golden ghee, fresh makhan and raw honey are waiting. Your kitchen will thank you.
          </p>
          <Link
            href="/#products"
            onClick={closeCart}
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-espresso transition hover:bg-gold-strong"
          >
            Shop the pantry
            <ArrowRight className="size-4" />
          </Link>
          <div className="mt-4">
            <Badge tone="sage" dot>
              Free delivery over Rs 3,000
            </Badge>
          </div>
        </div>
      )}
    </Sheet>
  );
}
