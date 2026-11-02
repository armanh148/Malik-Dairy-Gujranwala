"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Building2,
  Check,
  ChevronDown,
  Leaf,
  Loader2,
  Lock,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Tag,
  Truck,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Badge } from "@/components/ui/badge";
import { Input, Select, Textarea } from "@/components/ui/field";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { deliveryAreas, deliverySlots, paymentLabels } from "@/lib/catalog";
import { useCart } from "@/lib/cart-store";
import { useData } from "@/lib/data-store";
import { formatPKR } from "@/lib/format";
import { useToast } from "@/lib/toast";
import { cartWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import type { PaymentMethod } from "@/lib/types";
import { cn } from "@/lib/utils";

const payments: { id: PaymentMethod; label: string; hint: string; icon: typeof Banknote }[] = [
  { id: "cod", label: "Cash on delivery", hint: "Pay the rider at your door", icon: Banknote },
  { id: "easypaisa", label: "Easypaisa", hint: "Payment request on your phone", icon: Smartphone },
  { id: "jazzcash", label: "JazzCash", hint: "Payment request on your phone", icon: Smartphone },
  { id: "bank", label: "Bank transfer", hint: "Meezan Bank · Malik Dairy", icon: Building2 },
];

type Errors = Partial<Record<"name" | "phone" | "address" | "area" | "slot", string>>;

export function CheckoutFlow() {
  const router = useRouter();
  const { detailed, subtotal, ready, clear } = useCart();
  const { placeOrder } = useData();
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [slot, setSlot] = useState(deliverySlots[0]);
  const [notes, setNotes] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [errors, setErrors] = useState<Errors>({});
  const [promoInput, setPromoInput] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const delivery = subtotal >= 3000 ? 0 : 150;
  const discount = promoApplied ? Math.min(500, Math.round(subtotal * 0.1)) : 0;
  const total = Math.max(0, subtotal + delivery - discount);
  const remaining = Math.max(0, 3000 - subtotal);

  const lineForWhatsApp = useMemo(
    () =>
      detailed.map(({ product, variant, qty, lineTotal }) => ({
        name: product.name,
        variantLabel: variant.label,
        qty,
        price: lineTotal / qty,
      })),
    [detailed],
  );

  function applyPromo() {
    if (promoInput.trim().toUpperCase() === "MALIK10") {
      setPromoApplied(true);
      setPromoError("");
      toast({ title: "Promo applied", description: "10% off your first order, up to Rs 500." });
    } else {
      setPromoError("That code doesn't look right.");
    }
  }

  function validate() {
    const next: Errors = {};
    if (name.trim().length < 3) next.name = "Please enter your full name.";
    const digits = phone.replace(/\D/g, "");
    if (!(digits.length === 11 && digits.startsWith("03")) && !(digits.length === 12 && digits.startsWith("923"))) {
      next.phone = "Enter a valid mobile number, e.g. 0300 1234567.";
    }
    if (!area) next.area = "Choose your delivery area.";
    if (address.trim().length < 10) next.address = "Add a house number and street so the rider can find you.";
    if (!slot) next.slot = "Pick a delivery window.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handlePlaceOrder(event: React.FormEvent) {
    event.preventDefault();
    if (!validate()) {
      toast({ tone: "error", title: "A few details are missing" });
      return;
    }
    setSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 650));

    const result = placeOrder({
      channel: "online",
      customer: {
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
        area,
        city: "Gujranwala",
        notes: notes.trim() || undefined,
      },
      lines: detailed.map(({ product, variant, qty }) => ({
        productId: product.id,
        variantId: variant.id,
        qty,
      })),
      payment,
      delivery,
      discount,
      slot,
    });

    if (!result.ok) {
      setSubmitting(false);
      toast({ tone: "error", title: "Couldn't place the order", description: result.error });
      return;
    }

    clear();
    toast({ title: `Order ${result.order.id} placed`, description: "We'll confirm on WhatsApp shortly." });
    router.push(`/order/${result.order.id}`);
  }

  if (ready && detailed.length === 0) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 text-center">
        <div className="grid size-20 place-items-center rounded-full bg-gold-soft">
          <PackageCheck className="size-8 text-gold-strong" strokeWidth={1.6} />
        </div>
        <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink">
          Your basket is empty
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Add a jar of ghee or some fresh butter, and we&apos;ll get the rest ready.
        </p>
        <Link
          href="/#products"
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-espresso transition hover:bg-gold-strong"
        >
          Back to the pantry
          <ArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-canvas">
      <header className="border-b border-line bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1140px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="flex items-center gap-4">
            <Link
              href="/#products"
              className="hidden items-center gap-1.5 text-xs font-semibold text-ink-soft transition hover:text-ink sm:flex"
            >
              <ArrowLeft className="size-3.5" />
              Keep shopping
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
              <Lock className="size-3 text-success" />
              Secure checkout
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1140px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-ink-faint">
          <Link href="/" className="transition hover:text-ink">
            Home
          </Link>
          <span>/</span>
          <span className="text-ink">Checkout</span>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <h1 className="font-display text-[clamp(1.9rem,3.5vw,2.7rem)] font-semibold tracking-[-0.03em] text-ink">
            Almost at your door.
          </h1>
          <p className="text-[13px] text-ink-soft">
            Delivery across Gujranwala · pay cash when it arrives.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder} className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="space-y-5">
            {/* contact */}
            <section className="rounded-[1.6rem] border border-line bg-surface p-5 sm:p-6">
              <SectionHeading number="01" title="Who's it for?" subtitle="We'll confirm the order on this number." />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <FieldShell label="Full name" required error={errors.name} htmlFor="name">
                  <Input
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Ayesha Khan"
                    autoComplete="name"
                    className={cn(errors.name && "border-danger focus:border-danger focus:ring-danger/10")}
                  />
                </FieldShell>
                <FieldShell label="Mobile number" required error={errors.phone} htmlFor="phone">
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="0300 1234567"
                    autoComplete="tel"
                    className={cn(errors.phone && "border-danger focus:border-danger focus:ring-danger/10")}
                  />
                </FieldShell>
              </div>
            </section>

            {/* delivery */}
            <section className="rounded-[1.6rem] border border-line bg-surface p-5 sm:p-6">
              <SectionHeading number="02" title="Where should we deliver?" subtitle="Chilled, within 24 hours across Gujranwala." />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <FieldShell label="Area" required error={errors.area} htmlFor="area">
                  <div className="relative">
                    <Select
                      id="area"
                      value={area}
                      onChange={(event) => setArea(event.target.value)}
                      className={cn(
                        "appearance-none pr-9",
                        !area && "text-ink-faint",
                        errors.area && "border-danger focus:border-danger focus:ring-danger/10",
                      )}
                    >
                      <option value="">Select your area</option>
                      {deliveryAreas.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </Select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
                  </div>
                </FieldShell>
                <FieldShell label="City" htmlFor="city">
                  <Input id="city" value="Gujranwala" readOnly className="bg-surface-2/60 text-ink-soft" />
                </FieldShell>
                <FieldShell
                  label="House, street, landmark"
                  required
                  error={errors.address}
                  htmlFor="address"
                  className="sm:col-span-2"
                >
                  <Textarea
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    placeholder="House 12, Street 4, near Satellite Town Market…"
                    autoComplete="street-address"
                    className={cn(errors.address && "border-danger focus:border-danger focus:ring-danger/10")}
                  />
                </FieldShell>
                <FieldShell label="Delivery window" required error={errors.slot} htmlFor="slot">
                  <div className="relative">
                    <Select id="slot" value={slot} onChange={(event) => setSlot(event.target.value)}>
                      {deliverySlots.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </Select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
                  </div>
                </FieldShell>
                <FieldShell label="Notes for the rider" htmlFor="notes">
                  <Input
                    id="notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Call before arriving, gate code…"
                  />
                </FieldShell>
              </div>
            </section>

            {/* payment */}
            <section className="rounded-[1.6rem] border border-line bg-surface p-5 sm:p-6">
              <SectionHeading number="03" title="How would you like to pay?" subtitle="No advance needed for cash on delivery." />
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {payments.map((option) => {
                  const Icon = option.icon;
                  const active = payment === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setPayment(option.id)}
                      aria-pressed={active}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border p-3.5 text-left transition",
                        active
                          ? "border-gold bg-gold-soft/50 ring-1 ring-gold/30"
                          : "border-line bg-surface hover:border-line-strong hover:bg-surface-2/50",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-lg",
                          active ? "bg-gold text-espresso" : "bg-surface-2 text-ink-soft",
                        )}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[12px] font-bold text-ink">{option.label}</span>
                        <span className="mt-0.5 block text-[10px] leading-snug text-ink-faint">{option.hint}</span>
                      </span>
                      <span
                        className={cn(
                          "grid size-4 shrink-0 place-items-center rounded-full border",
                          active ? "border-gold bg-gold text-espresso" : "border-line-strong",
                        )}
                      >
                        {active ? <Check className="size-2.5" strokeWidth={3.5} /> : null}
                      </span>
                    </button>
                  );
                })}
              </div>

              {payment === "bank" ? (
                <div className="mt-3 rounded-xl border border-dashed border-gold/40 bg-gold-soft/30 p-3.5 text-[11px] leading-relaxed text-ink-soft">
                  <span className="font-bold text-ink">Meezan Bank · Malik Dairy</span>
                  <br />
                  IBAN PK00 MEZN 0000 1234 5678 9012 · Send the receipt on WhatsApp after transferring.
                </div>
              ) : payment === "easypaisa" || payment === "jazzcash" ? (
                <p className="mt-3 rounded-xl bg-surface-2 p-3.5 text-[11px] leading-relaxed text-ink-soft">
                  We&apos;ll send a payment request to <span className="font-bold text-ink">{phone || "your number"}</span>{" "}
                  after confirming your order. You can also pay cash on delivery.
                </p>
              ) : null}

              <label className="mt-4 flex items-start gap-2.5 text-[10.5px] leading-relaxed text-ink-faint">
                <input type="checkbox" required className="mt-0.5 size-3.5 accent-[var(--gold)]" />
                I agree to be contacted on WhatsApp about this order, and understand fresh dairy is
                non-returnable once opened.
              </label>
            </section>
          </div>

          {/* summary */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-[1.6rem] border border-line bg-surface shadow-card">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <h2 className="font-display text-lg font-semibold text-ink">Your order</h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-faint">
                  {detailed.reduce((sum, line) => sum + line.qty, 0)} items
                </span>
              </div>

              <ul className="max-h-[290px] divide-y divide-line overflow-y-auto px-5">
                {detailed.map(({ product, variant, qty, lineTotal }) => (
                  <li key={`${product.id}-${variant.id}`} className="flex items-center gap-3 py-3.5">
                    <span
                      className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-line"
                      style={{ background: product.tint }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt=""
                        className="absolute inset-0 size-full scale-110 object-contain mix-blend-multiply dark:mix-blend-normal dark:brightness-90"
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[11.5px] font-bold text-ink">{product.name}</p>
                      <p className="text-[10px] text-ink-faint">
                        {variant.label} · Qty {qty}
                      </p>
                    </div>
                    <span className="tnum text-[11.5px] font-bold text-ink">{formatPKR(lineTotal)}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-line px-5 py-4">
                {promoApplied ? (
                  <div className="flex items-center justify-between rounded-lg border border-success/30 bg-success-soft/60 px-3 py-2 text-[11px] font-bold text-success">
                    <span className="flex items-center gap-1.5">
                      <Tag className="size-3.5" />
                      MALIK10 applied
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setPromoApplied(false);
                        setPromoInput("");
                      }}
                      className="text-[10px] font-semibold underline underline-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-ink-faint" />
                        <Input
                          value={promoInput}
                          onChange={(event) => {
                            setPromoInput(event.target.value);
                            setPromoError("");
                          }}
                          placeholder="Promo code"
                          className="h-10 pl-9 text-xs uppercase"
                          aria-label="Promo code"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={applyPromo}
                        className="h-10 rounded-xl border border-line bg-surface px-3.5 text-[11px] font-bold text-ink transition hover:border-gold/40 hover:bg-surface-2"
                      >
                        Apply
                      </button>
                    </div>
                    {promoError ? (
                      <p className="mt-1.5 text-[10px] text-danger">{promoError}</p>
                    ) : (
                      <p className="mt-1.5 text-[10px] text-ink-faint">
                        First order? Try <span className="font-bold text-gold-strong">MALIK10</span>
                      </p>
                    )}
                  </div>
                )}

                <dl className="mt-4 space-y-2 text-[12px]">
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
                  {promoApplied ? (
                    <div className="flex justify-between text-success">
                      <dt>Discount</dt>
                      <dd className="tnum font-semibold">−{formatPKR(discount)}</dd>
                    </div>
                  ) : null}
                  <div className="flex items-baseline justify-between border-t border-line pt-2.5">
                    <dt className="text-[13px] font-bold text-ink">Total</dt>
                    <dd className="tnum font-display text-2xl font-semibold text-ink">{formatPKR(total)}</dd>
                  </div>
                </dl>

                {remaining > 0 ? (
                  <p className="mt-2 rounded-lg bg-surface-2 px-3 py-2 text-[10px] font-medium text-ink-soft">
                    Add <span className="font-bold text-ink">{formatPKR(remaining)}</span> more for free delivery
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold text-sm font-bold text-espresso shadow-[0_12px_28px_-14px_rgba(201,138,46,0.95)] transition hover:bg-gold-strong active:scale-[0.99] disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Placing your order…
                    </>
                  ) : (
                    <>
                      Place order · {formatPKR(total)}
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
                <p className="mt-2.5 text-center text-[9.5px] leading-relaxed text-ink-faint">
                  Paying by {paymentLabels[payment]} · Free replacement if anything isn&apos;t fresh
                </p>

                <a
                  href={whatsappLink(
                    cartWhatsAppMessage({
                      lines: lineForWhatsApp,
                      subtotal,
                      delivery,
                      total: total - discount,
                    }),
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-full border border-line text-[11px] font-bold text-ink-soft transition hover:border-wa/40 hover:bg-wa/5 hover:text-ink"
                >
                  <WhatsAppIcon className="size-3.5 text-wa" />
                  Prefer WhatsApp? Send this basket
                </a>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                { icon: Truck, title: "24-hour delivery", text: "Chilled across Gujranwala" },
                { icon: ShieldCheck, title: "Purity promise", text: "Lab-tested batches" },
                { icon: RefreshCw, title: "Freshness first", text: "Replace or refund" },
                { icon: Leaf, title: "No preservatives", text: "Made the slow way" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-2 rounded-xl border border-line bg-surface/60 p-3">
                    <Icon className="mt-0.5 size-4 shrink-0 text-gold-strong" />
                    <div>
                      <p className="text-[10px] font-bold text-ink">{item.title}</p>
                      <p className="mt-0.5 text-[9px] leading-snug text-ink-faint">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-[13px] font-bold text-ink">
          <span className="mr-2 font-mono text-[10px] font-normal text-gold-strong">{number}</span>
          {title}
        </h2>
        <p className="mt-1 pl-[26px] text-[10.5px] text-ink-faint">{subtitle}</p>
      </div>
    </div>
  );
}

function FieldShell({
  label,
  required,
  error,
  htmlFor,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={htmlFor} className="flex items-center gap-1 text-[11px] font-bold text-ink">
        {label}
        {required ? <span className="text-gold-strong">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-[10px] font-medium text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
