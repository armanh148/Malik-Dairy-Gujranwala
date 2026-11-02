import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "ghost" | "soft" | "danger" | "wa" | "link";
type Size = "sm" | "md" | "lg" | "icon" | "icon-sm";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-45 active:scale-[0.985]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-espresso shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_8px_20px_-10px_rgba(201,138,46,0.8)] hover:bg-gold-strong hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_12px_26px_-12px_rgba(201,138,46,0.9)]",
  dark: "bg-espresso text-cream hover:bg-espresso/90",
  outline: "border border-line-strong bg-surface text-ink hover:border-gold/50 hover:bg-surface-2",
  ghost: "text-ink-soft hover:bg-surface-2 hover:text-ink",
  soft: "bg-gold-soft text-gold-strong hover:bg-gold-soft/75",
  danger: "bg-danger text-white hover:brightness-110",
  wa: "bg-wa text-white hover:brightness-105",
  link: "rounded-none text-gold-strong underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
  icon: "size-10 p-0",
  "icon-sm": "size-8 p-0",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={buttonStyles({ variant, size, className })} {...props} />;
}
