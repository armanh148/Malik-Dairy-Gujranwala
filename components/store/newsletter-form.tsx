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
      <div className="flex flex-col gap-2">
        <label className="relative flex-1">
          <span className="sr-only">Email address</span>
          <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/50" />
          <input
            type="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setDone(false);
            }}
            placeholder="Your email address"
            className="h-11 w-full rounded-full border border-white/20 bg-white/10 pl-10 pr-4 text-xs font-medium text-white placeholder:text-white/50 focus:border-[#43a047] focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#43a047] px-5 text-xs font-bold text-white transition hover:bg-[#388e3c] active:scale-[0.99]"
        >
          {done ? <Check className="size-3.5" strokeWidth={3} /> : null}
          {done ? "Subscribed!" : "Subscribe Now"}
          {!done ? <ArrowRight className="size-3.5" /> : null}
        </button>
      </div>
      <p className="mt-2 text-[10px] leading-relaxed text-white/50">
        Weekly harvest alerts and pure dairy recipes. No spam.
      </p>
    </form>
  );
}
