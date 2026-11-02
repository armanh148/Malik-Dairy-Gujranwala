import { getProduct, getVariant, products, stockKey } from "@/lib/catalog";
import { startOfDay } from "@/lib/format";
import type { Customer, DataState, Order, OrderLine, OrderStatus, PaymentMethod } from "@/lib/types";

export const DATA_VERSION = 1;

function line(productId: string, variantId: string, qty: number): OrderLine {
  const product = getProduct(productId);
  const variant = getVariant(productId, variantId);
  if (!product || !variant) throw new Error(`Unknown variant ${productId}/${variantId}`);
  return {
    productId,
    variantId,
    name: product.name,
    image: product.image,
    variantLabel: variant.label,
    price: variant.price,
    qty,
  };
}

function todayAt(hour: number, minute: number) {
  const date = startOfDay();
  date.setHours(hour, minute, 0, 0);
  const cap = new Date(Date.now() - 4 * 60 * 1000);
  return (date > cap ? cap : date).toISOString();
}

function daysAgo(days: number, hour: number, minute: number) {
  const date = startOfDay();
  date.setDate(date.getDate() - days);
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
}

const minutes = (n: number) => n * 60 * 1000;

function timelineFor(createdAt: string, status: OrderStatus): Order["timeline"] {
  const start = new Date(createdAt).getTime();
  const cap = Date.now() - 30 * 1000;
  const at = (offsetMinutes: number) =>
    new Date(Math.min(start + minutes(offsetMinutes), cap)).toISOString();

  if (status === "cancelled") {
    return [
      { status: "placed", at: createdAt },
      { status: "cancelled", at: at(25), note: "Cancelled by the store" },
    ];
  }

  const base: { status: OrderStatus; offset: number; note?: string }[] = [
    { status: "placed", offset: 0 },
    { status: "confirmed", offset: 7, note: "Stock reserved at the dairy" },
    { status: "packed", offset: 42, note: "Sealed and labelled" },
    { status: "out-for-delivery", offset: 95, note: "Rider picked up your order" },
    { status: "delivered", offset: 170, note: "Handed over at the door" },
  ];

  const count = orderStatusCount(status);
  return base.slice(0, count).map((entry) => ({
    status: entry.status,
    at: entry.status === "placed" ? createdAt : at(entry.offset),
    note: entry.note,
  }));
}

function orderStatusCount(status: OrderStatus) {
  switch (status) {
    case "placed":
      return 1;
    case "confirmed":
      return 2;
    case "packed":
      return 3;
    case "out-for-delivery":
      return 4;
    case "delivered":
      return 5;
    default:
      return 1;
  }
}

type SeedOrder = {
  id: string;
  channel: "online" | "walk-in";
  createdAt: string;
  status: OrderStatus;
  customer: Customer;
  lines: [string, string, number][];
  payment: PaymentMethod;
  slot?: string;
  discount?: number;
};

function buildOrder(seed: SeedOrder): Order {
  const lines = seed.lines.map(([productId, variantId, qty]) => line(productId, variantId, qty));
  const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const delivery = seed.channel === "online" && subtotal < 3000 ? 150 : 0;
  const discount = seed.discount ?? 0;
  const onlineCourier =
    seed.channel === "online" && ["packed", "out-for-delivery", "delivered"].includes(seed.status);

  return {
    id: seed.id,
    channel: seed.channel,
    customer: seed.customer,
    lines,
    subtotal,
    delivery,
    discount,
    total: subtotal + delivery - discount,
    payment: seed.payment,
    status: seed.status,
    createdAt: seed.createdAt,
    slot: seed.slot,
    timeline: timelineFor(seed.createdAt, seed.status),
    courier: onlineCourier
      ? {
          name: "Malik Express",
          rider: seed.customer.area === "DC Colony" ? "Imran Butt" : "Usman Tariq",
          phone: "+92 300 7654321",
          tracking: `MDX-${seed.id.replace("MD-", "")}`,
        }
      : undefined,
  };
}

const seededOrders: SeedOrder[] = [
  {
    id: "MD-1038",
    channel: "online",
    createdAt: todayAt(8, 10),
    status: "delivered",
    customer: {
      name: "Ayesha Khan",
      phone: "0300 1234567",
      address: "House 12, Street 4, Satellite Town",
      area: "Satellite Town",
      city: "Gujranwala",
    },
    lines: [
      ["ghee", "1kg", 1],
      ["honey", "500g", 1],
    ],
    payment: "cod",
    slot: "Today · 10:00 am – 12:00 pm",
  },
  {
    id: "MD-1039",
    channel: "walk-in",
    createdAt: todayAt(9, 35),
    status: "delivered",
    customer: { name: "Walk-in · Counter 1", phone: "—" },
    lines: [
      ["butter", "500g", 1],
      ["dahi", "1kg", 1],
    ],
    payment: "cash",
  },
  {
    id: "MD-1040",
    channel: "online",
    createdAt: todayAt(11, 20),
    status: "out-for-delivery",
    customer: {
      name: "Hamza Sheikh",
      phone: "0321 8899221",
      address: "House 88-B, DC Colony",
      area: "DC Colony",
      city: "Gujranwala",
    },
    lines: [
      ["ghee", "500g", 1],
      ["khoya", "500g", 1],
    ],
    payment: "cod",
    slot: "Today · 4:00 – 6:00 pm",
  },
  {
    id: "MD-1041",
    channel: "online",
    createdAt: todayAt(13, 5),
    status: "packed",
    customer: {
      name: "Fatima Noor",
      phone: "0333 4455667",
      address: "Flat 3, Model Town Market Road",
      area: "Model Town",
      city: "Gujranwala",
    },
    lines: [["honey", "1kg", 1]],
    payment: "easypaisa",
    slot: "Tomorrow · 10:00 am – 12:00 pm",
  },
  {
    id: "MD-1042",
    channel: "walk-in",
    createdAt: todayAt(15, 40),
    status: "delivered",
    customer: { name: "Walk-in · Counter 1", phone: "—" },
    lines: [
      ["cream", "250g", 2],
      ["butter", "250g", 1],
    ],
    payment: "card",
  },
  {
    id: "MD-1043",
    channel: "online",
    createdAt: todayAt(17, 15),
    status: "confirmed",
    customer: {
      name: "Bilal Ahmed",
      phone: "0345 7788110",
      address: "House 21, Peoples Colony No. 1",
      area: "Peoples Colony",
      city: "Gujranwala",
    },
    lines: [["ghee", "1kg", 1]],
    payment: "cod",
    slot: "Today · 6:00 – 8:00 pm",
  },
  {
    id: "MD-1044",
    channel: "online",
    createdAt: daysAgo(1, 18, 30),
    status: "delivered",
    customer: {
      name: "Sana Javed",
      phone: "0301 6655443",
      address: "House 7, Cantt Bazaar Road",
      area: "Cantt",
      city: "Gujranwala",
    },
    lines: [
      ["ghee", "1kg", 1],
      ["butter", "500g", 1],
    ],
    payment: "jazzcash",
    discount: 200,
    slot: "Today · 4:00 – 6:00 pm",
  },
  {
    id: "MD-1045",
    channel: "online",
    createdAt: daysAgo(2, 12, 15),
    status: "delivered",
    customer: {
      name: "Usman Ghani",
      phone: "0308 1122334",
      address: "Street 9, Satellite Town",
      area: "Satellite Town",
      city: "Gujranwala",
    },
    lines: [
      ["honey", "500g", 1],
      ["cream", "500g", 1],
    ],
    payment: "cod",
    slot: "Today · 6:00 – 8:00 pm",
  },
  {
    id: "MD-1046",
    channel: "walk-in",
    createdAt: daysAgo(1, 20, 10),
    status: "delivered",
    customer: { name: "Walk-in · Counter 1", phone: "—" },
    lines: [
      ["dahi", "1kg", 1],
      ["khoya", "1kg", 1],
    ],
    payment: "cash",
  },
];

export function seedStock() {
  const stock: Record<string, number> = {};
  for (const product of products) {
    for (const variant of product.variants) {
      stock[stockKey(product.id, variant.id)] = variant.stock;
    }
  }
  return stock;
}

export function seedDataState(): DataState {
  return {
    stock: seedStock(),
    orders: seededOrders.map(buildOrder),
  };
}

export const demoOrderId = "MD-1040";

export { seededOrders };
