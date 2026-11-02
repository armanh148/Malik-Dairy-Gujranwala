import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  images: { src: string; alt: string }[];
  tags: string[];
  from: string;
  tint: string;
};

const categories: Category[] = [
  {
    number: "01",
    title: "Pure Desi Ghee",
    eyebrow: "The signature",
    description:
      "Cultured desi milk, hand-churned into makhan and simmered slowly in copper until it turns clear and golden.",
    images: [{ src: "/products/ghee.svg", alt: "Pure desi ghee jar" }],
    tags: ["500 g", "1 kg", "No palm oil"],
    from: "Rs 2,450",
    tint: "radial-gradient(120% 120% at 30% 18%, #FCF3DD 0%, #F4E1B8 52%, #E8CD92 100%)",
  },
  {
    number: "02",
    title: "Fresh Butter",
    eyebrow: "Churned daily",
    description:
      "Soft, bright white butter made every morning from the previous night's cream. Salted just enough, never overworked.",
    images: [{ src: "/products/butter.svg", alt: "Fresh hand-churned white butter" }],
    tags: ["250 g", "500 g", "Pure rock salt"],
    from: "Rs 950",
    tint: "radial-gradient(120% 120% at 30% 18%, #FDF8EB 0%, #F3E6C9 54%, #E5D2A8 100%)",
  },
  {
    number: "03",
    title: "Honey & Khoya",
    eyebrow: "The seasonal pair",
    description:
      "Raw single-origin sidr honey beside fresh whole-milk khoya — two slow crafts, made for winter kitchens and Eid mornings.",
    images: [
      { src: "/products/honey.svg", alt: "Raw sidr honey jar" },
      { src: "/products/khoya.svg", alt: "Fresh khoya in a clay bowl" },
    ],
    tags: ["Raw honey", "Fresh mawa", "Small batch"],
    from: "Rs 1,100",
    tint: "radial-gradient(120% 120% at 30% 18%, #FCF0D4 0%, #F6DDA7 52%, #EBC47C 100%)",
  },
];

export function ProductCategories() {
  return (
    <section id="products" className="relative scroll-mt-24 overflow-hidden bg-canvas py-20 sm:py-24 lg:py-28">
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(75%_70%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[620px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Core offerings</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
              Three things we do
              <span className="text-gold-gradient"> properly.</span>
            </h2>
            <p className="mt-4 max-w-[500px] text-[13.5px] leading-relaxed text-ink-soft">
              Small batches, old methods and ingredients we can name. This is the heart of the Malik
              Dairy pantry.
            </p>
          </div>
          <Link
            href="/#pantry"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-strong transition hover:text-gold"
          >
            Shop all jars
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group relative overflow-hidden rounded-[2rem] border border-success/15 bg-surface-2 p-2.5 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-[1.55rem]",
                  category.images.length > 1 ? "aspect-[4/3]" : "aspect-[4/3]",
                )}
                style={{ background: category.tint }}
              >
                <div className="pattern-dots absolute inset-0 opacity-[0.15]" />
                {category.images.length > 1 ? (
                  <div className="grid h-full grid-cols-2 gap-1.5 p-2">
                    {category.images.map((image) => (
                      <div key={image.src} className="relative overflow-hidden rounded-2xl bg-white/20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="absolute inset-0 size-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={category.images[0].src}
                    alt={category.images[0].alt}
                    loading="lazy"
                    className="absolute inset-0 size-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                )}
                <span className="absolute left-3 top-3 grid size-8 place-items-center rounded-full bg-espresso/80 text-[10px] font-extrabold text-gold backdrop-blur">
                  {category.number}
                </span>
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-espresso/80 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-cream/80 backdrop-blur">
                  <Sparkles className="size-2.5 text-gold" />
                  {category.eyebrow}
                </span>
              </div>

              <div className="px-3 pb-3 pt-5">
                <h3 className="font-display text-[1.25rem] font-semibold tracking-[-0.02em] text-ink">
                  {category.title}
                </h3>
                <p className="mt-2 min-h-[52px] text-[11.5px] leading-relaxed text-ink-soft">
                  {category.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-success/20 bg-success-soft/60 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-sage"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-end justify-between gap-3 border-t border-line pt-4">
                  <div>
                    <p className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-ink-faint">From</p>
                    <p className="mt-1 font-display text-[1.15rem] font-semibold leading-none text-ink">
                      {category.from}
                    </p>
                  </div>
                  <Link
                    href="/#pantry"
                    className="inline-flex h-9 items-center gap-1.5 rounded-full bg-gold px-3.5 text-[10.5px] font-extrabold text-espresso transition hover:bg-gold-strong"
                  >
                    Explore
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
