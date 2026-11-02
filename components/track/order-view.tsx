"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCheck,
  Circle,
  Clock3,
  Copy,
  House,
  MapPin,
  Package,
  PackageCheck,
  Phone,
  ShoppingBag,
  Truck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { useData } from "@/lib/data-store";
import { formatDate, formatDateTime, formatPKR, formatTime } from "@/lib/format";
import { orderSteps, statusMeta, statusStepIndex } from "@/lib/order-meta";
import { orderWhatsAppMessage, supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { paymentLabels } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import type { Order, OrderStatus } from "@/lib/types";

const toneByStatus: Record<OrderStatus, "neutral" | "gold" | "terracotta" | "sage" | "success" | "danger"> = {
  placed: "neutral",
  confirmed: "gold",
  packed: "terracotta",
  "out-for-delivery": "sage",
  delivered: "success",
  cancelled: "danger",
};

const stepIcons: Record<string, typeof Check> = {
  placed: Check,
  confirmed: BadgeCheck,
  packed: Package,
  "out-for-delivery": Truck,
  delivered: House,
};

export function OrderView({ orderId, success = false }: { orderId: string; success?: boolean }) {
  const { orders, ready } = useData();
  const [copied, setCopied] = useState(false);

  if (!ready) return <OrderSkeleton />;

  const order = orders.find((entry) => entry.id.toUpperCase() === orderId.trim().toUpperCase());

  if (!order) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 text-center">
        <div className="grid size-20 place-items-center rounded-full bg-surface-2">
          <Package className="size-8 text-ink-faint" strokeWidth={1.5} />
        </div>
        <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink">
          We can&apos;t find that order
        </h1>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          Double-check the order ID from your confirmation, or message us on WhatsApp and we&apos;ll
          track it down for you.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <Link
            href="/track"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-espresso transition hover:bg-gold-strong"
          >
            Try another ID
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={whatsappLink(supportWhatsAppMessage(orderId))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-bold text-ink transition hover:border-wa/40"
          >
            <WhatsAppIcon className="size-4 text-wa" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  const meta = statusMeta[order.status];
  const stepIndex = statusStepIndex(order.status);
  const firstName = order.customer.name.split(" ")[0];
  const isOnline = order.channel === "online";
  const expected = order.slot ?? "Today · 4:00 – 6:00 pm";
  const deliveredEntry = order.timeline.find((entry) => entry.status === "delivered");

  function copyId() {
    navigator.clipboard?.writeText(order!.id).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <div className="bg-canvas pb-20">
      {success ? (
        <div className="border-b border-success/20 bg-success-soft/60">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-success text-white shadow-soft">
                <CheckCheck className="size-6" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-success">
                  Order {order.id} placed
                </p>
                <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
                  Shukriya, {firstName}!
                </h1>
                <p className="mt-0.5 text-[12px] text-ink-soft">
                  We&apos;ve got it. A confirmation is on its way to {order.customer.phone}.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={whatsappLink(orderWhatsAppMessage(order))}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-wa px-4 text-xs font-bold text-white transition hover:brightness-105"
              >
                <WhatsAppIcon className="size-3.5" />
                Confirm on WhatsApp
              </a>
              <Link
                href="/#products"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-xs font-bold text-ink transition hover:border-gold/40"
              >
                <ShoppingBag className="size-3.5" />
                Keep shopping
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-[1100px] px-4 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-ink-faint">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <span>/</span>
          <Link href="/track" className="hover:text-ink">
            Track order
          </Link>
          <span>/</span>
          <span className="text-ink">{order.id}</span>
        </div>

        <div className="mt-5 flex flex-col gap-6 border-b border-line pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={toneByStatus[order.status]} dot>
                {meta.label}
              </Badge>
              <Badge tone="neutral">{order.channel === "online" ? "Home delivery" : "Walk-in sale"}</Badge>
              <Badge tone="neutral">{paymentLabels[order.payment] ?? order.payment}</Badge>
            </div>
            <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
              {order.status === "delivered"
                ? "Delivered with care."
                : order.status === "cancelled"
                  ? "This order was cancelled."
                  : order.status === "out-for-delivery"
                    ? "Your order is on the way."
                    : "Your order is in good hands."}
            </h1>
            <p className="mt-2 max-w-[560px] text-[13px] leading-relaxed text-ink-soft">{meta.description}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-ink-faint">
              <button
                type="button"
                onClick={copyId}
                className="inline-flex items-center gap-1.5 font-semibold text-ink-soft transition hover:text-ink"
              >
                {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
                {copied ? "Copied" : order.id}
              </button>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5" />
                Placed {formatDateTime(order.createdAt)}
              </span>
              {order.status !== "cancelled" ? (
                <span className="inline-flex items-center gap-1.5">
                  <Truck className="size-3.5" />
                  {order.status === "delivered"
                    ? `Delivered ${deliveredEntry ? formatDate(deliveredEntry.at) : ""}`
                    : `Expected ${expected}`}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={whatsappLink(orderWhatsAppMessage(order))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-xs font-bold text-ink transition hover:border-wa/40 hover:bg-wa/5"
            >
              <WhatsAppIcon className="size-3.5 text-wa" />
              WhatsApp the dairy
            </a>
            <a
              href="tel:+923001234567"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-xs font-bold text-ink transition hover:border-gold/40"
            >
              <Phone className="size-3.5 text-gold-strong" />
              Call
            </a>
          </div>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            {order.status === "cancelled" ? (
              <div className="flex items-start gap-3 rounded-2xl border border-danger/25 bg-danger-soft/60 p-4">
                <XCircle className="mt-0.5 size-5 shrink-0 text-danger" />
                <div>
                  <p className="text-[12.5px] font-bold text-danger">Order cancelled</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-ink-soft">
                    Stock has been returned to the dairy. If this was a mistake, message us and we&apos;ll
                    rebook your items.
                  </p>
                </div>
              </div>
            ) : null}

            <section className="rounded-[1.6rem] border border-line bg-surface p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-strong">
                    Live progress
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">
                    From our kadhai to your kitchen
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-success/25 bg-success-soft px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-success">
                  <span className="size-1.5 animate-soft-pulse rounded-full bg-success" />
                  Live
                </span>
              </div>

              <ol className="mt-6">
                {orderSteps.map((step, index) => {
                  const stepInfo = statusMeta[step];
                  const entry = order.timeline.find((item) => item.status === step);
                  const done = stepIndex >= index && order.status !== "cancelled";
                  const current = stepIndex === index && order.status !== "cancelled";
                  const Icon = stepIcons[step] ?? Circle;
                  return (
                    <li key={step} className="relative flex gap-4 pb-7 last:pb-0">
                      {index < orderSteps.length - 1 ? (
                        <span
                          className={cn(
                            "absolute left-[17px] top-9 h-[calc(100%-1.5rem)] w-px",
                            done && stepIndex > index ? "bg-success/50" : "bg-line",
                          )}
                        />
                      ) : null}
                      <span
                        className={cn(
                          "relative z-10 grid size-[35px] shrink-0 place-items-center rounded-full border transition",
                          done
                            ? "border-success/30 bg-success-soft text-success"
                            : "border-line bg-surface-2 text-ink-faint",
                          current && "border-gold/50 bg-gold text-espresso shadow-[0_0_0_5px_color-mix(in_srgb,var(--gold)_18%,transparent)]",
                        )}
                      >
                        {done && !current ? (
                          <Check className="size-4" strokeWidth={2.8} />
                        ) : (
                          <Icon className="size-4" strokeWidth={2.1} />
                        )}
                      </span>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p
                            className={cn(
                              "text-[12.5px] font-bold",
                              done ? "text-ink" : "text-ink-faint",
                            )}
                          >
                            {stepInfo.label}
                          </p>
                          {entry ? (
                            <span className="text-[10px] font-medium text-ink-faint">
                              {formatDate(entry.at)} · {formatTime(entry.at)}
                            </span>
                          ) : (
                            <span className="text-[10px] font-medium text-ink-faint/70">Pending</span>
                          )}
                        </div>
                        <p className={cn("mt-1 text-[11px] leading-relaxed", done ? "text-ink-soft" : "text-ink-faint/70")}>
                          {entry?.note ?? stepInfo.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {order.status === "out-for-delivery" && order.courier ? (
                <div className="mt-2 flex flex-col gap-3 rounded-xl border border-gold/25 bg-gold-soft/40 p-3.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-surface text-gold-strong">
                      <Truck className="size-4" />
                    </span>
                    <div>
                      <p className="text-[11.5px] font-bold text-ink">
                        {order.courier.rider} is on the way
                      </p>
                      <p className="text-[10px] text-ink-soft">
                        {order.courier.name} · {order.courier.tracking}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`tel:${order.courier.phone.replace(/\s/g, "")}`}
                    className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-gold/40 bg-surface px-3.5 text-[11px] font-bold text-ink"
                  >
                    <Phone className="size-3.5 text-gold-strong" />
                    Call rider
                  </a>
                </div>
              ) : null}
            </section>

            <section className="rounded-[1.6rem] border border-line bg-surface p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[12.5px] font-bold text-ink">Delivery details</h2>
                <Badge tone={isOnline ? "gold" : "neutral"}>{isOnline ? "Home delivery" : "Walk-in"}</Badge>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink-faint">Deliver to</p>
                  <p className="mt-1.5 text-[12px] font-bold text-ink">{order.customer.name}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
                    {order.customer.address ?? "In-store purchase"}
                    {order.customer.area ? (
                      <>
                        <br />
                        {order.customer.area}, {order.customer.city ?? "Gujranwala"}
                      </>
                    ) : null}
                  </p>
                  <p className="mt-1 text-[11px] text-ink-soft">{order.customer.phone}</p>
                </div>
                <div>
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink-faint">Slot</p>
                  <p className="mt-1.5 flex items-start gap-1.5 text-[12px] font-bold text-ink">
                    <Clock3 className="mt-0.5 size-3.5 text-gold-strong" />
                    {order.slot ?? "Walk-in"}
                  </p>
                  {order.customer.notes ? (
                    <>
                      <p className="mt-3 text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink-faint">
                        Notes
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-ink-soft">{order.customer.notes}</p>
                    </>
                  ) : null}
                  <p className="mt-3 flex items-center gap-1.5 text-[10.5px] text-ink-faint">
                    <MapPin className="size-3.5 text-gold-strong" />
                    Gujranwala, Punjab
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <section className="overflow-hidden rounded-[1.6rem] border border-line bg-surface shadow-card">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <h2 className="text-[12.5px] font-bold text-ink">Order summary</h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-faint">
                  {order.lines.reduce((sum, line) => sum + line.qty, 0)} items
                </span>
              </div>
              <ul className="divide-y divide-line px-5">
                {order.lines.map((line) => (
                  <li key={`${line.productId}-${line.variantId}`} className="flex items-center gap-3 py-3">
                    <span
                      className="relative size-11 shrink-0 overflow-hidden rounded-lg border border-line bg-surface-2"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={line.image}
                        alt=""
                        className="absolute inset-0 size-full object-contain p-0.5"
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[11.5px] font-bold text-ink">{line.name}</p>
                      <p className="text-[10px] text-ink-faint">
                        {line.variantLabel} · Qty {line.qty}
                      </p>
                    </div>
                    <span className="tnum text-[11px] font-bold text-ink">
                      {formatPKR(line.price * line.qty)}
                    </span>
                  </li>
                ))}
              </ul>
              <dl className="space-y-2 border-t border-line px-5 py-4 text-[11.5px]">
                <div className="flex justify-between text-ink-soft">
                  <dt>Subtotal</dt>
                  <dd className="tnum font-semibold text-ink">{formatPKR(order.subtotal)}</dd>
                </div>
                <div className="flex justify-between text-ink-soft">
                  <dt>Delivery</dt>
                  <dd className={cn("tnum font-semibold", order.delivery === 0 ? "text-success" : "text-ink")}>
                    {order.delivery === 0 ? "Free" : formatPKR(order.delivery)}
                  </dd>
                </div>
                {order.discount > 0 ? (
                  <div className="flex justify-between text-success">
                    <dt>Discount</dt>
                    <dd className="tnum font-semibold">−{formatPKR(order.discount)}</dd>
                  </div>
                ) : null}
                <div className="flex items-baseline justify-between border-t border-line pt-2">
                  <dt className="text-[12.5px] font-bold text-ink">Total</dt>
                  <dd className="tnum font-display text-xl font-semibold text-ink">{formatPKR(order.total)}</dd>
                </div>
                <div className="flex justify-between pt-1 text-[10px] text-ink-faint">
                  <dt>Payment</dt>
                  <dd className="font-semibold text-ink-soft">{paymentLabels[order.payment] ?? order.payment}</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-[1.6rem] border border-line bg-surface-2/50 p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-surface text-gold-strong shadow-card">
                  <WhatsAppIcon className="size-4" />
                </span>
                <div>
                  <p className="text-[12px] font-bold text-ink">Need to change something?</p>
                  <p className="mt-0.5 text-[10.5px] leading-snug text-ink-soft">
                    Message us before dispatch — we can adjust the slot or address.
                  </p>
                </div>
              </div>
              <a
                href={whatsappLink(supportWhatsAppMessage(order.id))}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex h-10 items-center justify-center gap-2 rounded-full bg-surface text-[11px] font-bold text-ink transition hover:bg-surface-2"
              >
                Chat with the dairy
                <ArrowRight className="size-3.5" />
              </a>
            </section>

            <div className="rounded-[1.6rem] border border-dashed border-line-strong p-4 text-[10px] leading-relaxed text-ink-faint">
              <p className="font-bold text-ink-soft">Freshness note</p>
              <p className="mt-1">
                Refrigerate ghee after opening and keep fresh dairy chilled. If anything smells off,
                message us within 24 hours for a replacement.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function OrderSkeleton() {
  return (
    <div className="mx-auto max-w-[1100px] animate-pulse px-4 py-10 sm:px-6 lg:px-8">
      <div className="h-4 w-40 rounded-full bg-surface-2" />
      <div className="mt-5 h-10 w-80 max-w-full rounded-xl bg-surface-2" />
      <div className="mt-3 h-4 w-96 max-w-full rounded-full bg-surface-2" />
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="h-[430px] rounded-[1.6rem] bg-surface-2" />
        <div className="h-[340px] rounded-[1.6rem] bg-surface-2" />
      </div>
    </div>
  );
}
