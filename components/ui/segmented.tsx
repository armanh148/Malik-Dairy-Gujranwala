"use client";

import { cn } from "@/lib/utils";

export type SegmentedOption<T extends string> = {
  value: T;
  label: React.ReactNode;
  disabled?: boolean;
};

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  className,
  size = "md",
  ariaLabel,
}: {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  size?: "sm" | "md";
  ariaLabel?: string;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface-2 p-1",
        className,
      )}
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            disabled={option.disabled}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full font-semibold transition-all duration-200 disabled:opacity-40",
              size === "sm" ? "h-7 px-2.5 text-[11px]" : "h-8 px-3.5 text-xs",
              active
                ? "bg-surface text-ink shadow-[0_1px_3px_rgba(43,29,19,0.12)]"
                : "text-ink-soft hover:text-ink",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
