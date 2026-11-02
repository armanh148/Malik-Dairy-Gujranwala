import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const articles = [
  {
    category: "Craft",
    title: "The quiet art of slow ghee",
    excerpt:
      "Why we still simmer cultured butter in copper for hours — and what that patience does to the flavour.",
    read: "5 min read",
    date: "12 Oct 2026",
    image: "/products/ghee.svg",
    photo: false,
    tint: "radial-gradient(120% 120% at 30% 18%, #FCF3DD 0%, #F4E1B8 52%, #E8CD92 100%)",
  },
  {
    category: "From the hive",
    title: "Why winter honey crystallises",
    excerpt:
      "Those soft grains are not a flaw. Here is what real, raw sidr honey does when the temperature drops.",
    read: "4 min read",
    date: "28 Sep 2026",
    image: "/products/honey.svg",
    photo: false,
    tint: "radial-gradient(120% 120% at 30% 18%, #FCF0D4 0%, #F6DDA7 52%, #EBC47C 100%)",
  },
  {
    category: "Farm notes",
    title: "A morning on the Malik farm",
    excerpt:
      "Before sunrise, the sheds are awake. A short walk through the fields, the herds and the first churn of the day.",
    read: "6 min read",
    date: "05 Sep 2026",
    image: "/images/farm-field.jpg",
    photo: true,
    tint: "",
  },
];

export function BlogSection() {
  return (
    <section id="journal" className="scroll-mt-24 border-t border-line bg-canvas-deep py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[600px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">The dairy journal</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
              Notes, recipes
              <span className="text-gold-gradient"> & harvest stories.</span>
            </h2>
            <p className="mt-4 max-w-[480px] text-[13.5px] leading-relaxed text-ink-soft">
              Slow craft, seasonal cooking and the small things we notice on the farm.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-surface/70 px-4 py-2 text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink-faint md:self-auto">
            <CalendarDays className="size-3.5 text-gold" />
            Fresh from the dairy
          </span>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-[1.7rem] border border-line bg-surface/70 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={article.photo ? undefined : { background: article.tint }}
              >
                {article.photo ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-transparent to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="pattern-dots absolute inset-0 opacity-[0.15]" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="absolute inset-0 size-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </>
                )}
                <span
                  className={cn(
                    "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-[0.12em] backdrop-blur",
                    article.photo
                      ? "bg-espresso/65 text-cream/85"
                      : "bg-espresso/80 text-gold",
                  )}
                >
                  {article.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.12em] text-ink-faint">
                  <span>{article.date}</span>
                  <span className="h-2.5 w-px bg-line-strong" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-2.5" />
                    {article.read}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[1.1rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-[11.5px] leading-relaxed text-ink-soft">{article.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-gold transition group-hover:gap-2">
                  Read the story
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
