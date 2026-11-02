import { allVariants, stockKey } from "@/lib/catalog";
import { isToday, startOfDay } from "@/lib/format";
import type { Order } from "@/lib/types";

export const LOW_STOCK_THRESHOLD = 6;

export type LowStockItem = {
  productId: string;
  variantId: string;
  name: string;
  variantLabel: string;
  image: string;
  sku: string;
  stock: number;
  price: number;
};

export type DaySales = {
  label: string;
  dateLabel: string;
  revenue: number;
  orders: number;
  isToday: boolean;
};

export function getDashboardStats(orders: Order[], stock: Record<string, number>) {
  const active = orders.filter((order) => order.status !== "cancelled");
  const today = active.filter((order) => isToday(order.createdAt));

  const revenue = today.reduce((sum, order) => sum + order.total, 0);
  const onlineRevenue = today
    .filter((order) => order.channel === "online")
    .reduce((sum, order) => sum + order.total, 0);
  const walkInRevenue = revenue - onlineRevenue;
  const itemsSold = today.reduce(
    (sum, order) => sum + order.lines.reduce((lineSum, line) => lineSum + line.qty, 0),
    0,
  );

  const lowStock: LowStockItem[] = allVariants
    .map(({ product, variant }) => ({
      productId: product.id,
      variantId: variant.id,
      name: product.name,
      variantLabel: variant.label,
      image: product.image,
      sku: variant.sku,
      stock: stock[stockKey(product.id, variant.id)] ?? 0,
      price: variant.price,
    }))
    .filter((item) => item.stock <= LOW_STOCK_THRESHOLD)
    .sort((a, b) => a.stock - b.stock);

  const stockValue = allVariants.reduce((sum, { product, variant }) => {
    const stockCount = stock[stockKey(product.id, variant.id)] ?? 0;
    return sum + stockCount * variant.price;
  }, 0);

  const totalUnits = allVariants.reduce(
    (sum, { product, variant }) => sum + (stock[stockKey(product.id, variant.id)] ?? 0),
    0,
  );

  const days: DaySales[] = Array.from({ length: 7 }).map((_, index) => {
    const date = startOfDay();
    date.setDate(date.getDate() - (6 - index));
    const key = date.toDateString();
    const dayOrders = active.filter(
      (order) => new Date(order.createdAt).toDateString() === key,
    );
    return {
      label: date.toLocaleDateString("en-PK", { weekday: "short" }),
      dateLabel: date.toLocaleDateString("en-PK", { day: "numeric", month: "short" }),
      revenue: dayOrders.reduce((sum, order) => sum + order.total, 0),
      orders: dayOrders.length,
      isToday: index === 6,
    };
  });

  const productMap = new Map<
    string,
    { productId: string; name: string; image: string; qty: number; revenue: number }
  >();
  for (const order of today) {
    for (const line of order.lines) {
      const existing = productMap.get(line.productId) ?? {
        productId: line.productId,
        name: line.name,
        image: line.image,
        qty: 0,
        revenue: 0,
      };
      existing.qty += line.qty;
      existing.revenue += line.price * line.qty;
      productMap.set(line.productId, existing);
    }
  }
  const topProducts = [...productMap.values()].sort((a, b) => b.qty - a.qty).slice(0, 4);

  const avgOrder = today.length > 0 ? revenue / today.length : 0;

  return {
    revenue,
    onlineRevenue,
    walkInRevenue,
    orderCount: today.length,
    itemsSold,
    avgOrder,
    lowStock,
    stockValue,
    totalUnits,
    days,
    topProducts,
    onlineOrders: today.filter((order) => order.channel === "online").length,
  };
}

export function statusCounts(orders: Order[]) {
  return {
    all: orders.length,
    placed: orders.filter((order) => order.status === "placed").length,
    confirmed: orders.filter((order) => order.status === "confirmed").length,
    packed: orders.filter((order) => order.status === "packed").length,
    out: orders.filter((order) => order.status === "out-for-delivery").length,
    delivered: orders.filter((order) => order.status === "delivered").length,
    cancelled: orders.filter((order) => order.status === "cancelled").length,
  };
}
