"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, Phone, ShoppingBag, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sheet } from "@/components/ui/sheet";
import { Button, buttonStyles } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#hero", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#team", label: "Team" },
  { href: "/#faq", label: "FAQs" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const { count, ready, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Strip */}
      <div className="hidden border-b border-white/10 bg-[#081b0f] py-2 text-xs text-white/70 sm:block">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 text-[11px] font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3 text-[#43a047]" />
              GT Road, Gujranwala, Punjab
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="size-3 text-[#43a047]" />
              +92 300 1234567
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#86efac]">
              <span className="size-1.5 rounded-full bg-[#43a047] animate-pulse" />
              100% Certified Organic &amp; Farm Purity
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c2415]/95 text-white backdrop-blur-xl">
        <div className="relative mx-auto flex h-[66px] sm:h-[76px] max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo invert />

          <nav
            className="hidden items-center gap-6 xl:gap-8 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[13px] font-medium text-white/80 transition hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[#43a047] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href="/#contact"
              className="shimmer-btn hidden items-center gap-2 rounded-full bg-[#43a047] px-5 py-2.5 text-xs font-bold text-white shadow-md transition duration-200 hover:bg-[#388e3c] hover:shadow-lg hover:-translate-y-0.5 active:scale-95 sm:inline-flex"
            >
              Get In Touch
              <ArrowRight className="size-3.5" />
            </Link>

            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              aria-label="Order on WhatsApp"
              className="grid size-10 place-items-center rounded-full bg-wa text-white transition hover:brightness-105 sm:hidden"
            >
              <WhatsAppIcon className="size-4" />
            </a>

            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#43a047] hover:bg-white/10"
              aria-label={`Open basket${ready && count > 0 ? `, ${count} items` : ""}`}
            >
              <ShoppingBag className="size-4" strokeWidth={2} />
              {ready && count > 0 ? (
                <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#f5b61a] text-[10px] font-extrabold text-[#0c2415]">
                  {count}
                </span>
              ) : null}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
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
