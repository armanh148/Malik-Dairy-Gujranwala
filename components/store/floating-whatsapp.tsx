import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { supportWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(supportWhatsAppMessage())}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Malik Dairy on WhatsApp"
      className="group fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-wa p-3 text-white shadow-[0_12px_30px_-10px_rgba(31,157,99,0.7)] transition hover:scale-[1.03] hover:brightness-105 sm:p-3.5"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-wa/40 [animation-duration:3.5s]" />
      <WhatsAppIcon className="size-5" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold opacity-0 transition-all duration-300 group-hover:max-w-[130px] group-hover:pr-1.5 group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
