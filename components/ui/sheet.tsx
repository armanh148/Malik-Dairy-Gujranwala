"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sheet({
  open,
  onClose,
  children,
  side = "right",
  className,
  label = "Panel",
  showClose = false,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "right" | "left";
  className?: string;
  label?: string;
  showClose?: boolean;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previous = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previous.current = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => {
      const focusable = panelRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      focusable?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
      previous.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex" role="dialog" aria-modal="true" aria-label={label}>
      <button
        type="button"
        aria-label="Close panel"
        onClick={onClose}
        className="animate-fade-in absolute inset-0 cursor-default bg-espresso/45 backdrop-blur-[3px]"
        tabIndex={-1}
      />
      <div
        ref={panelRef}
        className={cn(
          "relative z-10 flex h-full w-full flex-col bg-canvas shadow-lift",
          side === "right"
            ? "animate-slide-in-right ml-auto sm:max-w-[440px]"
            : "animate-slide-in-left mr-auto sm:max-w-[400px]",
          className,
        )}
      >
        {showClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-full border border-line bg-surface/80 text-ink-soft backdrop-blur transition hover:text-ink"
          >
            <X className="size-4" />
          </button>
        ) : null}
        {children}
      </div>
    </div>
  );
}
