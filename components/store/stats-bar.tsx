import { Award, ShieldCheck, Star, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "38+", label: "Years of experience", detail: "Family-run since 1987" },
  { icon: Users, value: "1,240+", label: "Happy families", detail: "Across Gujranwala & Punjab" },
  { icon: ShieldCheck, value: "100%", label: "Pure batches", detail: "Palm-oil free, always" },
  { icon: Star, value: "4.6/5", label: "Customer rating", detail: "From verified orders" },
];

export function StatsBar() {
  return (
    <section className="border-y border-line bg-canvas-deep py-10 sm:py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.7rem] border border-line bg-line lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group flex flex-col bg-surface/80 p-5 transition duration-300 hover:bg-surface sm:p-6"
              >
                <span className="grid size-9 place-items-center rounded-full border border-gold/20 bg-gold/10 text-gold">
                  <Icon className="size-4" strokeWidth={1.9} />
                </span>
                <p className="mt-5 font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold leading-none tracking-[-0.04em] text-ink">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-[9.5px] text-ink-faint">{stat.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
