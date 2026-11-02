"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className={cn("w-full", className)}
      onSubmit={(event) => {
        event.preventDefault();
        if (!email.trim()) return;
        setDone(true);
        setEmail("");
      }}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Email address</span>
          <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
          <input
            type="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setDone(false);
            }}
            placeholder="Your email address"
            className="h-11 w-full rounded-full border border-line bg-surface/80 pl-10 pr-4 text-xs font-medium text-ink placeholder:text-ink-faint focus:border-gold/50 focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 text-xs font-extrabold text-espresso transition hover:bg-gold-strong active:scale-[0.99]"
        >
          {done ? <Check className="size-3.5" strokeWidth={3} /> : null}
          {done ? "You're on the list" : "Join the pantry"}
          {!done ? <ArrowRight className="size-3.5" /> : null}
        </button>
      </div>
      <p className="mt-2.5 text-[10px] leading-relaxed text-ink-faint">
        Seasonal batches, recipes and early access. No spam — just the good stuff.
      </p>
    </form>
  );
}
