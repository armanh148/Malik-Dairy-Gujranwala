"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProduct, getVariant } from "@/lib/catalog";
import { useData } from "@/lib/data-store";
import type { CartLine, Product, ProductVariant } from "@/lib/types";

const STORAGE_KEY = "malik-dairy:cart:v1";
const MAX_PER_LINE = 20;

export type DetailedCartLine = {
  product: Product;
  variant: ProductVariant;
  qty: number;
  lineTotal: number;
  stock: number;
};

type CartContextValue = {
  lines: CartLine[];
  detailed: DetailedCartLine[];
  ready: boolean;
  open: boolean;
  count: number;
  subtotal: number;
  openCart: () => void;
  closeCart: () => void;
  add: (productId: string, variantId: string, qty?: number) => { ok: boolean; message?: string };
  setQty: (productId: string, variantId: string, qty: number) => void;
  remove: (productId: string, variantId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { stockOf } = useData();
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) {
          setLines(
            parsed.filter(
              (line) =>
                line &&
                typeof line.productId === "string" &&
                typeof line.variantId === "string" &&
                typeof line.qty === "number" &&
                line.qty > 0 &&
                Boolean(getVariant(line.productId, line.variantId)),
            ),
          );
        }
      }
    } catch {
      /* ignore malformed cart */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore quota errors */
    }
  }, [lines, ready]);

  const add = useCallback(
    (productId: string, variantId: string, qty = 1) => {
      const variant = getVariant(productId, variantId);
      const product = getProduct(productId);
      if (!variant || !product) return { ok: false, message: "That item is unavailable." };

      const available = stockOf(productId, variantId);
      const existing = lines.find(
        (line) => line.productId === productId && line.variantId === variantId,
      );
      const nextQty = (existing?.qty ?? 0) + qty;

      if (available <= 0) {
        return { ok: false, message: `${product.name} (${variant.label}) is sold out.` };
      }
      if (nextQty > available) {
        return {
          ok: false,
          message: `Only ${available} × ${product.name} (${variant.label}) left in the dairy.`,
        };
      }
      if (nextQty > MAX_PER_LINE) {
        return { ok: false, message: `Maximum ${MAX_PER_LINE} per item for home delivery.` };
      }

      setLines((prev) => {
        const found = prev.find(
          (line) => line.productId === productId && line.variantId === variantId,
        );
        if (found) {
          return prev.map((line) =>
            line.productId === productId && line.variantId === variantId
              ? { ...line, qty: line.qty + qty }
              : line,
          );
        }
        return [...prev, { productId, variantId, qty }];
      });
      return { ok: true };
    },
    [lines, stockOf],
  );

  const setQty = useCallback(
    (productId: string, variantId: string, qty: number) => {
      const available = stockOf(productId, variantId);
      const clamped = Math.max(0, Math.min(qty, available, MAX_PER_LINE));
      setLines((prev) =>
        clamped === 0
          ? prev.filter((line) => !(line.productId === productId && line.variantId === variantId))
          : prev.map((line) =>
              line.productId === productId && line.variantId === variantId
                ? { ...line, qty: clamped }
                : line,
            ),
      );
    },
    [stockOf],
  );

  const remove = useCallback((productId: string, variantId: string) => {
    setLines((prev) =>
      prev.filter((line) => !(line.productId === productId && line.variantId === variantId)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);
  const openCart = useCallback(() => setOpen(true), []);
  const closeCart = useCallback(() => setOpen(false), []);

  const detailed = useMemo<DetailedCartLine[]>(() => {
    return lines.flatMap((line) => {
      const product = getProduct(line.productId);
      const variant = getVariant(line.productId, line.variantId);
      if (!product || !variant) return [];
      return [
        {
          product,
          variant,
          qty: line.qty,
          lineTotal: variant.price * line.qty,
          stock: stockOf(line.productId, line.variantId),
        },
      ];
    });
  }, [lines, stockOf]);

  const count = detailed.reduce((sum, line) => sum + line.qty, 0);
  const subtotal = detailed.reduce((sum, line) => sum + line.lineTotal, 0);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      detailed,
      ready,
      open,
      count,
      subtotal,
      openCart,
      closeCart,
      add,
      setQty,
      remove,
      clear,
    }),
    [lines, detailed, ready, open, count, subtotal, openCart, closeCart, add, setQty, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
