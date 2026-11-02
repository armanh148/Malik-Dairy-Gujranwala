import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { NewsletterForm } from "@/components/store/newsletter-form";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

const usefulLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Our Team", href: "/#team" },
  { label: "FAQs", href: "/#faq" },
  { label: "Blog & News", href: "/#blog" },
];

const productLinks = [
  { label: "Pure Desi Ghee (1kg / 500g)", href: "/#products" },
  { label: "Fresh Hand-Churned Butter", href: "/#products" },
  { label: "Farm Fresh Raw Buffalo Milk", href: "/#products" },
  { label: "Pure Sidr Honey", href: "/#products" },
  { label: "Traditional Fresh Khoya", href: "/#products" },
  { label: "Organic Seasonal Vegetables", href: "/#services" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#07190e] text-white">
      
      {/* Yellow Contact Bar */}
      <div className="border-b border-[#e2a412] bg-[#f5b61a] py-6 text-[#0d2a19]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          
          {/* Phone */}
          <a
            href="tel:+923001234567"
            className="flex items-center gap-4 transition hover:opacity-85"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#0c2415] text-[#43a047] shadow-sm">
              <Phone className="size-5" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#0d2a19]/75">
                Call Us Anytime
              </p>
              <p className="font-display text-base font-extrabold text-[#0c2415]">
                +92 300 1234567
              </p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com/?q=Malik+Dairy+GT+Road+Gujranwala"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 transition hover:opacity-85 sm:border-l sm:border-[#0c2415]/15 sm:pl-6"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#0c2415] text-[#43a047] shadow-sm">
              <MapPin className="size-5" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#0d2a19]/75">
                Visit Our Farm
              </p>
              <p className="font-display text-base font-extrabold text-[#0c2415]">
                GT Road, Gujranwala, PK
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@malikdairy.pk"
            className="flex items-center gap-4 transition hover:opacity-85 sm:border-l sm:border-[#0c2415]/15 sm:pl-6"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#0c2415] text-[#43a047] shadow-sm">
              <Mail className="size-5" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#0d2a19]/75">
                Send Email
              </p>
              <p className="font-display text-base font-extrabold text-[#0c2415]">
                info@malikdairy.pk
              </p>
            </div>
          </a>

        </div>
      </div>

      {/* Main Footer Container */}
      <div className="relative mx-auto max-w-[1240px] px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <Logo invert />
            <p className="mt-5 max-w-[320px] text-xs leading-relaxed text-white/70">
              Malik Dairy is a heritage farm in Gujranwala dedicated to slow-churned pure desi ghee, fresh whole milk, and sustainable agriculture with zero synthetic chemicals or palm oil.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappLink(supportWhatsAppMessage())}
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#43a047]"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#43a047]"
                aria-label="Facebook"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#43a047]"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Useful Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Useful Links
            </h4>
            <ul className="mt-5 space-y-2.5 text-xs text-white/70">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-[#f5b61a]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Our Products
            </h4>
            <ul className="mt-5 space-y-2.5 text-xs text-white/70">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-[#f5b61a]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-white/70">
              Subscribe to get seasonal farm updates, fresh harvest alerts, and special offers directly in your inbox.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-white/60">
          <p>© 2026 Malik Dairy Gujranwala. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/#hero" className="hover:text-white">Privacy Policy</Link>
            <Link href="/#hero" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}