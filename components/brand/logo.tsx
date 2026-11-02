import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-10", className)}>
      <rect width="64" height="64" rx="18" fill="#43a047" />
      <path
        d="M20 44c0-12 10-22 24-22 0 12-10 22-24 22Z"
        fill="#ffffff"
      />
      <path
        d="M20 44c6-4 14-8 24-22"
        stroke="#2e7d32"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="25" cy="23" r="4" fill="#f5b61a" />
    </svg>
  );
}

export function Logo({
  className,
  invert = false,
  href = "/",
  compact = false,
}: {
  className?: string;
  invert?: boolean;
  href?: string;
  compact?: boolean;
}) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-3", className)}>
      <BrandMark className="size-9 transition-transform duration-500 group-hover:-rotate-3 sm:size-10" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-semibold tracking-[-0.02em]",
            invert ? "text-cream" : "text-ink",
          )}
        >
          Malik Dairy
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-1 text-[9px] font-semibold uppercase tracking-[0.24em]",
              invert ? "text-cream/55" : "text-ink-faint",
            )}
          >
            Gujranwala · Est. 1987
          </span>
        ) : null}
      </span>
    </Link>
  );
}
