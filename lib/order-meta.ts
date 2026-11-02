import type { OrderStatus } from "@/lib/types";

export const orderSteps: OrderStatus[] = [
  "placed",
  "confirmed",
  "packed",
  "out-for-delivery",
  "delivered",
];

export const statusMeta: Record<
  OrderStatus,
  { label: string; short: string; description: string; tone: "gold" | "sage" | "terracotta" | "neutral" | "danger" }
> = {
  placed: {
    label: "Order placed",
    short: "Placed",
    description: "We have your order and are checking stock.",
    tone: "neutral",
  },
  confirmed: {
    label: "Confirmed",
    short: "Confirmed",
    description: "Confirmed by the dairy. Your items are being prepared.",
    tone: "gold",
  },
  packed: {
    label: "Packed",
    short: "Packed",
    description: "Sealed, labelled and waiting for the rider.",
    tone: "terracotta",
  },
  "out-for-delivery": {
    label: "Out for delivery",
    short: "On the way",
    description: "Our rider is on the way to your doorstep.",
    tone: "sage",
  },
  delivered: {
    label: "Delivered",
    short: "Delivered",
    description: "Delivered. Please refrigerate fresh items right away.",
    tone: "sage",
  },
  cancelled: {
    label: "Cancelled",
    short: "Cancelled",
    description: "This order was cancelled and stock was returned.",
    tone: "danger",
  },
};

export function statusStepIndex(status: OrderStatus) {
  return orderSteps.indexOf(status);
}

const areaRiderMap: Record<string, string> = {
  "Satellite Town": "Usman Tariq",
  "Model Town": "Usman Tariq",
  "DC Colony": "Imran Butt",
  "Peoples Colony": "Imran Butt",
  Cantt: "Nadeem Ali",
  "Wapda Town": "Nadeem Ali",
};

export function estimateDelivery(slot?: string) {
  return slot || "Today · 4:00 – 6:00 pm";
}

export function riderForArea(area?: string) {
  return (area && areaRiderMap[area]) || "Usman Tariq";
}
