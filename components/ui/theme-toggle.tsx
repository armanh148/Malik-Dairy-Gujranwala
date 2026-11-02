"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={cn(
        "relative grid place-items-center rounded-full border border-line bg-surface text-ink-soft transition hover:border-gold/40 hover:text-ink",
        compact ? "size-9" : "size-10",
        className,
      )}
    >
      <Sun className="size-4 dark:hidden" strokeWidth={2} />
      <Moon className="hidden size-4 dark:block" strokeWidth={2} />
    </button>
  );
}
