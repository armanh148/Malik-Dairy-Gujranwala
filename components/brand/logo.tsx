import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-10", className)}>
      <rect width="64" height="64" rx="18" fill="var(--surface-3)" stroke="var(--gold)" strokeOpacity="0.32" />
      <path
        d="M16 47V31.5C16 22.9 23.2 16 32 16s16 6.9 16 15.5V47"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 25.5c4.3 4.6 6.6 7.9 6.6 11.1a6.6 6.6 0 1 1-13.2 0c0-3.2 2.3-6.5 6.6-11.1Z"
        fill="var(--gold)"
      />
      <path
        d="M32 31.2c2.1 2.3 3.2 4 3.2 5.4a3.2 3.2 0 1 1-6.4 0c0-1.4 1.1-3.1 3.2-5.4Z"
        fill="var(--espresso)"
      />
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
