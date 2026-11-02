"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  DELIVERY_FEE,
  FREE_DELIVERY_THRESHOLD,
  getProduct,
  getVariant,
  stockKey,
} from "@/lib/catalog";
import { riderForArea } from "@/lib/order-meta";
import { seedDataState } from "@/lib/seed";
import type {
  CartLine,
  DataState,
  Order,
  OrderLine,
  OrderStatus,
  PlaceOrderInput,
} from "@/lib/types";

const STORAGE_KEY = "malik-dairy:data:v1";
const CHANNEL_NAME = "malik-dairy:sync";

type PlaceOrderResult = { ok: true; order: Order } | { ok: false; error: string };

type DataContextValue = {
  ready: boolean;
  orders: Order[];
  stock: Record<string, number>;
  lastSyncAt: number | null;
  stockOf: (productId: string, variantId: string) => number;
  placeOrder: (input: PlaceOrderInput) => PlaceOrderResult;
  setOrderStatus: (orderId: string, status: OrderStatus) => void;
  adjustStock: (key: string, delta: number) => void;
  resetDemo: () => void;
};

const DataContext = createContext<DataContextValue | null>(null);

function normalize(state: DataState): DataState {
  const seeded = seedDataState();
  return {
    stock: { ...seeded.stock, ...(state.stock ?? {}) },
    orders: Array.isArray(state.orders) ? state.orders : seeded.orders,
  };
}

function nextOrderId(orders: Order[]) {
  const highest = orders.reduce((max, order) => {
    const numeric = Number(order.id.replace(/\D/g, ""));
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 1046);
  return `MD-${highest + 1}`;
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const initial = useMemo(() => seedDataState(), []);
  const [state, setState] = useState<DataState>(initial);
  const [ready, setReady] = useState(false);
  const [lastSyncAt, setLastSyncAt] = useState<number | null>(null);
  const stateRef = useRef(state);
  const channelRef = useRef<BroadcastChannel | null>(null);

  /* Hydrate once from localStorage, then keep tabs in sync. */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as DataState;
        if (parsed && parsed.stock) {
          const normalized = normalize(parsed);
          stateRef.current = normalized;
          setState(normalized);
        }
      }
    } catch {
      /* corrupted storage — keep the seeded demo state */
    }
    setReady(true);
    setLastSyncAt(Date.now());

    let channel: BroadcastChannel | null = null;
    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
      channel.onmessage = (event) => {
        const payload = event.data as { type?: string; state?: DataState };
        if (payload?.type === "state" && payload.state) {
          const normalized = normalize(payload.state);
          stateRef.current = normalized;
          setState(normalized);
          setLastSyncAt(Date.now());
        }
      };
      channelRef.current = channel;
    } catch {
      /* BroadcastChannel unsupported — storage events still cover cross-tab */
    }

    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY || !event.newValue) return;
      try {
        const parsed = JSON.parse(event.newValue) as DataState;
        const normalized = normalize(parsed);
        stateRef.current = normalized;
        setState(normalized);
        setLastSyncAt(Date.now());
      } catch {
        /* ignore malformed payloads */
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      channel?.close();
      channelRef.current = null;
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const commit = useCallback((next: DataState) => {
    stateRef.current = next;
    setState(next);
    setLastSyncAt(Date.now());
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore quota errors */
    }
    channelRef.current?.postMessage({ type: "state", state: next });
  }, []);

  const stockOf = useCallback(
    (productId: string, variantId: string) => {
      const key = stockKey(productId, variantId);
      const value = stateRef.current.stock[key];
      if (typeof value === "number") return value;
      return getVariant(productId, variantId)?.stock ?? 0;
    },
    [],
  );

  const placeOrder = useCallback((input: PlaceOrderInput): PlaceOrderResult => {
    const current = stateRef.current;
    const snapshot: OrderLine[] = [];
    const stock = { ...current.stock };

    for (const cartLine of input.lines) {
      if (cartLine.qty <= 0) continue;
      const product = getProduct(cartLine.productId);
      const variant = getVariant(cartLine.productId, cartLine.variantId);
      if (!product || !variant) {
        return { ok: false, error: "One of the items is no longer available." };
      }
      const key = stockKey(product.id, variant.id);
      const available = stock[key] ?? variant.stock;
      if (available < cartLine.qty) {
        return {
          ok: false,
          error:
            available <= 0
              ? `${product.name} (${variant.label}) just sold out.`
              : `Only ${available} × ${product.name} (${variant.label}) left.`,
        };
      }
      stock[key] = available - cartLine.qty;
      snapshot.push({
        productId: product.id,
        variantId: variant.id,
        name: product.name,
        image: product.image,
        variantLabel: variant.label,
        price: variant.price,
        qty: cartLine.qty,
      });
    }

    if (snapshot.length === 0) {
      return { ok: false, error: "Your basket is empty." };
    }

    const subtotal = snapshot.reduce((sum, line) => sum + line.price * line.qty, 0);
    const delivery =
      input.channel === "online" ? (subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE) : 0;
    const discount = Math.min(input.discount ?? 0, subtotal);
    const total = Math.max(0, subtotal + delivery - discount);
    const now = new Date().toISOString();
    const id = nextOrderId(current.orders);
    const status: OrderStatus = input.channel === "walk-in" ? "delivered" : "placed";

    const order: Order = {
      id,
      channel: input.channel,
      customer:
        input.channel === "walk-in"
          ? {
              name: input.customer.name?.trim() || "Walk-in customer",
              phone: input.customer.phone?.trim() || "—",
            }
          : input.customer,
      lines: snapshot,
      subtotal,
      delivery,
      discount,
      total,
      payment: input.payment,
      status,
      createdAt: now,
      slot: input.slot,
      timeline:
        input.channel === "walk-in"
          ? [{ status: "delivered", at: now, note: "Paid at the counter" }]
          : [{ status: "placed", at: now, note: "Order received online" }],
    };

    commit({ stock, orders: [order, ...current.orders] });
    return { ok: true, order };
  }, [commit]);

  const setOrderStatus = useCallback(
    (orderId: string, status: OrderStatus) => {
      const current = stateRef.current;
      const order = current.orders.find((entry) => entry.id === orderId);
      if (!order || order.status === status) return;

      const now = new Date().toISOString();
      const stock = { ...current.stock };

      if (status === "cancelled" && order.status !== "cancelled") {
        for (const line of order.lines) {
          const key = stockKey(line.productId, line.variantId);
          stock[key] = Math.min(999, (stock[key] ?? 0) + line.qty);
        }
      }

      if (order.status === "cancelled" && status !== "cancelled") {
        for (const line of order.lines) {
          const key = stockKey(line.productId, line.variantId);
          stock[key] = Math.max(0, (stock[key] ?? 0) - line.qty);
        }
      }

      const nextOrder: Order = {
        ...order,
        status,
        timeline: [
          ...order.timeline,
          {
            status,
            at: now,
            note:
              status === "cancelled"
                ? "Cancelled from the POS — stock returned"
                : status === "out-for-delivery"
                  ? "Rider picked up the parcel"
                  : undefined,
          },
        ],
        courier:
          order.courier ??
          (status === "packed" || status === "out-for-delivery" || status === "delivered"
            ? {
                name: "Malik Express",
                rider: riderForArea(order.customer.area),
                phone: "+92 300 7654321",
                tracking: `MDX-${order.id.replace("MD-", "")}`,
              }
            : undefined),
      };

      commit({
        stock,
        orders: current.orders.map((entry) => (entry.id === orderId ? nextOrder : entry)),
      });
    },
    [commit],
  );

  const adjustStock = useCallback(
    (key: string, delta: number) => {
      const current = stateRef.current;
      const base = current.stock[key] ?? 0;
      const nextValue = Math.max(0, Math.min(999, base + delta));
      if (nextValue === base) return;
      commit({ ...current, stock: { ...current.stock, [key]: nextValue } });
    },
    [commit],
  );

  const resetDemo = useCallback(() => {
    const seeded = seedDataState();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    commit(seeded);
  }, [commit]);

  const value = useMemo<DataContextValue>(
    () => ({
      ready,
      orders: state.orders,
      stock: state.stock,
      lastSyncAt,
      stockOf,
      placeOrder,
      setOrderStatus,
      adjustStock,
      resetDemo,
    }),
    [ready, state, lastSyncAt, stockOf, placeOrder, setOrderStatus, adjustStock, resetDemo],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used inside DataProvider");
  return ctx;
}
