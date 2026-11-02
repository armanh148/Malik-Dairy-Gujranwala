import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { NewsletterForm } from "@/components/store/newsletter-form";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

const exploreLinks = [
  { label: "All products", href: "/#products" },
  { label: "Farm story", href: "/#about" },
  { label: "Our process", href: "/#process" },
  { label: "The journal", href: "/#journal" },
];

const helpLinks = [
  { label: "Track your order", href: "/track" },
  { label: "Delivery & areas", href: "/track" },
  { label: "Good questions", href: "/#faq" },
  { label: "Wholesale enquiries", href: "/#contact" },
  { label: "Reviews", href: "/#reviews" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden bg-canvas-deep">
      <div className="bg-gold text-espresso">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <a
            href="tel:+923001234567"
            className="flex items-center gap-3.5 py-5 transition hover:bg-espresso/5 sm:py-6"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-espresso/10">
              <Phone className="size-[18px]" strokeWidth={2} />
            </span>
            <div>
              <p className="text-[8.5px] font-extrabold uppercase tracking-[0.16em] text-espresso/60">
                Call the dairy
              </p>
              <p className="mt-1 font-display text-[13px] font-bold leading-none">+92 300 1234567</p>
            </div>
          </a>

          <a
            href={whatsappLink(supportWhatsAppMessage())}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3.5 border-t border-espresso/20 py-5 transition hover:bg-espresso/5 sm:border-l sm:border-t-0 sm:pl-7 sm:py-6"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-espresso/10">
              <WhatsAppIcon className="size-[18px]" />
            </span>
            <div>
              <p className="text-[8.5px] font-extrabold uppercase tracking-[0.16em] text-espresso/60">
                Order on WhatsApp
              </p>
              <p className="mt-1 font-display text-[13px] font-bold leading-none">Chat with the family</p>
            </div>
            <ArrowUpRight className="ml-auto size-4 text-espresso/50" />
          </a>

          <a
            href="https://maps.google.com/?q=Malik+Dairy+GT+Road+Gujranwala"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3.5 border-t border-espresso/20 py-5 transition hover:bg-espresso/5 sm:border-l sm:border-t-0 sm:pl-7 sm:py-6"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-espresso/10">
              <MapPin className="size-[18px]" strokeWidth={2} />
            </span>
            <div>
              <p className="text-[8.5px] font-extrabold uppercase tracking-[0.16em] text-espresso/60">
                Visit the dairy
              </p>
              <p className="mt-1 font-display text-[13px] font-bold leading-none">GT Road, Gujranwala</p>
            </div>
          </a>
        </div>
      </div>

      <div className="pattern-dots pointer-events-none absolute inset-x-0 bottom-0 top-[73px] opacity-[0.16] [mask-image:radial-gradient(75%_75%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-[1240px] px-4 pb-6 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-11 lg:grid-cols-[1.25fr_0.65fr_0.65fr_1.05fr] lg:gap-10">
          <div>
            <Logo />
            <p className="mt-5 max-w-[300px] text-[12px] leading-relaxed text-ink-soft">
              A family dairy from Gujranwala, churning pure desi ghee and fresh dairy in small batches
              since 1987. No palm oil. No shortcuts. Just the good stuff.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href={whatsappLink(supportWhatsAppMessage())}
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-full border border-line bg-surface text-wa transition hover:border-wa/40 hover:bg-wa/5"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-full border border-line bg-surface text-ink-soft transition hover:text-ink"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-full border border-line bg-surface text-ink-soft transition hover:text-ink"
                aria-label="Facebook"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success-soft/50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-success">
              <span className="size-1.5 rounded-full bg-success" />
              PFA licensed · Lab tested
            </p>
          </div>

          <div>
            <h3 className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-ink-faint">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[11.5px] font-medium text-ink-soft transition hover:text-gold-strong"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-ink-faint">Help</h3>
            <ul className="mt-4 space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[11.5px] font-medium text-ink-soft transition hover:text-gold-strong"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-ink-faint">
              The pantry letter
            </h3>
            <p className="mt-4 text-[11.5px] leading-relaxed text-ink-soft">
              Seasonal batches, kitchen recipes and first access to limited jars.
            </p>
            <NewsletterForm className="mt-4" />
            <a
              href={whatsappLink(supportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[10.5px] font-bold text-gold-strong hover:underline"
            >
              Message us on WhatsApp
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10.5px] text-ink-faint">
            <span>© {new Date().getFullYear()} Malik Dairy, Gujranwala</span>
            <span className="hidden h-3 w-px bg-line-strong sm:block" />
            <span>Family-owned since 1987 · Made in Pakistan</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["Cash on delivery", "Easypaisa", "JazzCash", "Bank transfer"].map((method) => (
              <span
                key={method}
                className="rounded-md border border-line bg-surface px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-ink-faint"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 select-none overflow-hidden" aria-hidden="true">
          <p className="whitespace-nowrap text-center font-display text-[clamp(3.6rem,17vw,15.5rem)] font-extrabold leading-[0.74] tracking-[-0.075em] text-cream/[0.055]">
            MALIK DAIRY
          </p>
        </div>

        <p className="mt-5 text-center text-[9px] font-medium uppercase tracking-[0.24em] text-ink-faint/70">
          Made with desi dil in Gujranwala, Pakistan
        </p>
      </div>
    </footer>
  );
}
