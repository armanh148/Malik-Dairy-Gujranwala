import { paymentLabels } from "@/lib/catalog";
import type { Order } from "@/lib/types";

export const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923001234567"
).replace(/\D/g, "");

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type MessageLine = {
  name: string;
  variantLabel: string;
  qty: number;
  price: number;
};

const rs = (value: number) => `Rs ${Math.round(value).toLocaleString("en-PK")}`;

export function cartWhatsAppMessage({
  lines,
  subtotal,
  delivery,
  total,
}: {
  lines: MessageLine[];
  subtotal: number;
  delivery: number;
  total: number;
}) {
  const items = lines
    .map((line) => `• ${line.name} — ${line.variantLabel} × ${line.qty} — ${rs(line.price * line.qty)}`)
    .join("\n");

  return [
    "Assalam-o-Alaikum Malik Dairy! 🧈",
    "",
    "I'd like to place this order:",
    items,
    "",
    `Subtotal: ${rs(subtotal)}`,
    `Delivery: ${delivery === 0 ? "Free" : rs(delivery)}`,
    `Total: ${rs(total)}`,
    "",
    "Name:",
    "Delivery address:",
    "Preferred time:",
    "",
    "Please confirm availability. Shukriya!",
  ].join("\n");
}

export function orderWhatsAppMessage(order: Order) {
  const items = order.lines
    .map((line) => `• ${line.name} — ${line.variantLabel} × ${line.qty} — ${rs(line.price * line.qty)}`)
    .join("\n");

  return [
    `Assalam-o-Alaikum Malik Dairy! Order ${order.id}`,
    "",
    items,
    "",
    `Subtotal: ${rs(order.subtotal)}`,
    `Delivery: ${order.delivery === 0 ? "Free" : rs(order.delivery)}`,
    ...(order.discount > 0 ? [`Discount: −${rs(order.discount)}`] : []),
    `Total: ${rs(order.total)}`,
    `Payment: ${paymentLabels[order.payment] ?? order.payment}`,
    "",
    `Name: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`,
    order.customer.address ? `Address: ${order.customer.address}, ${order.customer.area ?? ""}` : "",
    order.slot ? `Slot: ${order.slot}` : "",
    "",
    `Status: ${order.status.replace(/-/g, " ")}`,
    "Shukriya!",
  ]
    .filter(Boolean)
    .join("\n");
}

export function supportWhatsAppMessage(orderId?: string) {
  return orderId
    ? `Assalam-o-Alaikum Malik Dairy! I need help with order ${orderId}.`
    : "Assalam-o-Alaikum Malik Dairy! I have a question about your dairy products.";
}
