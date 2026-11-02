import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const inputStyles =
  "w-full rounded-xl border border-line bg-surface px-3.5 text-sm text-ink placeholder:text-ink-faint/80 transition-colors hover:border-line-strong focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/10 disabled:opacity-50";

export function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={htmlFor} className="flex items-center gap-1 text-xs font-bold text-ink">
        {label}
        {required ? <span className="text-gold-strong">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-[11px] font-medium text-danger" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-[11px] text-ink-faint">{hint}</p>
      ) : null}
    </div>
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(inputStyles, "h-11", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(inputStyles, "min-h-20 py-2.5", className)} {...props} />;
}

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(inputStyles, "h-11 cursor-pointer appearance-none pr-9", className)} {...props}>
      {children}
    </select>
  );
}

export function SelectWrap({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("relative", className)}>{children}</div>;
}
