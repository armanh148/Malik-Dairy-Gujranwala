import { Banknote, FlaskConical, Leaf, Truck } from "lucide-react";

const items = [
  {
    icon: FlaskConical,
    title: "Lab-tested purity",
    text: "Every batch checked for adulteration and moisture.",
  },
  {
    icon: Leaf,
    title: "No palm oil, ever",
    text: "Only cultured desi milk, slow-simmered to gold.",
  },
  {
    icon: Truck,
    title: "Same-day in Gujranwala",
    text: "Chilled delivery across the city within 24 hours.",
  },
  {
    icon: Banknote,
    title: "Cash on delivery",
    text: "Pay when it reaches your door. Easypaisa too.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-surface/60">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-px px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-start gap-3.5 border-line py-6 sm:border-l sm:pl-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/20 bg-gold-soft/70 text-gold-strong">
                <Icon className="size-[18px]" strokeWidth={1.9} />
              </span>
              <div>
                <p className="text-[12.5px] font-bold text-ink">{item.title}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-ink-faint">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
