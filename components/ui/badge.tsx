import { cn } from "@/lib/utils";

type Tone = "gold" | "sage" | "terracotta" | "neutral" | "danger" | "success";

const tones: Record<Tone, string> = {
  gold: "bg-gold-soft text-gold-strong border-gold/20",
  sage: "bg-sage-soft text-sage border-sage/20",
  terracotta: "bg-terracotta-soft text-terracotta border-terracotta/20",
  neutral: "bg-surface-2 text-ink-soft border-line",
  danger: "bg-danger-soft text-danger border-danger/20",
  success: "bg-success-soft text-success border-success/20",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  dot = false,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]",
        tones[tone],
        className,
      )}
    >
      {dot ? <span className="size-1.5 rounded-full bg-current" /> : null}
      {children}
    </span>
  );
}
