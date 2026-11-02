"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, Phone, ShoppingBag } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sheet } from "@/components/ui/sheet";
import { Button, buttonStyles } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "Farm Story" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const { count, ready, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-xl">
        <div className="relative mx-auto flex h-[76px] max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[13px] font-semibold text-ink-soft transition hover:text-ink"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              aria-label="Order on WhatsApp"
              className="grid size-10 place-items-center rounded-full bg-wa text-white transition hover:brightness-105 sm:hidden"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonStyles({ variant: "primary", size: "sm" }), "hidden h-10 gap-2 px-4 sm:inline-flex")}
            >
              <WhatsAppIcon className="size-3.5" />
              Order on WhatsApp
            </a>
            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-gold/50 hover:bg-surface-2"
              aria-label={`Open basket${ready && count > 0 ? `, ${count} items` : ""}`}
            >
              <ShoppingBag className="size-4" strokeWidth={2} />
              {ready && count > 0 ? (
                <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-gold text-[10px] font-extrabold text-espresso">
                  {count}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>

      <Sheet open={menuOpen} onClose={() => setMenuOpen(false)} side="left" label="Menu">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line p-5">
            <Logo />
            <Button variant="ghost" size="icon-sm" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              ✕
            </Button>
          </div>
          <nav className="flex flex-col p-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-ink transition hover:bg-surface-2"
              >
                {item.label}
                <ArrowRight className="size-4 text-ink-faint" />
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-3 border-t border-line p-5">
            <a
              href={`tel:+923001234567`}
              className="flex items-center gap-2 text-xs font-semibold text-ink-soft"
            >
              <Phone className="size-4 text-gold-strong" />
              +92 300 1234567
            </a>
            <p className="text-[11px] leading-relaxed text-ink-faint">
              Free delivery on orders above Rs 3,000. Cash on delivery available across Gujranwala.
            </p>
            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonStyles({ variant: "wa", size: "md" }), "w-full")}
            >
              <WhatsAppIcon className="size-4" />
              Chat with the dairy
            </a>
          </div>
        </div>
      </Sheet>
    </>
  );
}
