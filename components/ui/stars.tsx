import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  rating,
  className,
  size = "sm",
}: {
  rating: number;
  className?: string;
  size?: "xs" | "sm" | "md";
}) {
  const dims = size === "xs" ? "size-3" : size === "md" ? "size-4" : "size-3.5";
  const rounded = Math.round(rating);
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-gold", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(dims, index < rounded ? "fill-current" : "fill-transparent text-line-strong")}
          strokeWidth={1.8}
        />
      ))}
    </span>
  );
}
