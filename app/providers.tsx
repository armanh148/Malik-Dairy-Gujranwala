"use client";

import { CartProvider } from "@/lib/cart-store";
import { DataProvider } from "@/lib/data-store";
import { ThemeProvider } from "@/lib/theme";
import { ToastProvider } from "@/lib/toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <DataProvider>
        <CartProvider>
          <ToastProvider>{children}</ToastProvider>
        </CartProvider>
      </DataProvider>
    </ThemeProvider>
  );
}
