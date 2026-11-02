"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stepper({
  value,
  onChange,
  min = 0,
  max = 99,
  size = "md",
  className,
  label = "Quantity",
  compact = false,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
  className?: string;
  label?: string;
  compact?: boolean;
}) {
  const btn =
    size === "sm"
      ? "size-7"
      : "size-8";
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface",
        compact ? "gap-0.5 p-0.5" : "gap-1 p-1",
        className,
      )}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        aria-label={`Decrease ${label.toLowerCase()}`}
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className={cn(
          "grid place-items-center rounded-full text-ink-soft transition hover:bg-surface-2 hover:text-ink disabled:opacity-30 disabled:hover:bg-transparent",
          btn,
        )}
      >
        <Minus className="size-3.5" strokeWidth={2.4} />
      </button>
      <span className="tnum min-w-6 text-center text-xs font-bold text-ink">{value}</span>
      <button
        type="button"
        aria-label={`Increase ${label.toLowerCase()}`}
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className={cn(
          "grid place-items-center rounded-full text-ink-soft transition hover:bg-surface-2 hover:text-ink disabled:opacity-30 disabled:hover:bg-transparent",
          btn,
        )}
      >
        <Plus className="size-3.5" strokeWidth={2.4} />
      </button>
    </div>
  );
}
