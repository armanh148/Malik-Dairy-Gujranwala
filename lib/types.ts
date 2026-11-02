export type Category = "ghee-butter" | "fresh-dairy" | "honey";

export type ProductVariant = {
  id: string;
  label: string;
  grams: number;
  price: number;
  compareAt?: number;
  stock: number;
  sku: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  urdu: string;
  category: Category;
  blurb: string;
  description: string;
  image: string;
  tint: string;
  badge?: "Bestseller" | "New" | "Festive favourite" | "Lab tested" | "Everyday";
  rating: number;
  reviews: number;
  benefits: string[];
  variants: ProductVariant[];
};

export type CartLine = {
  productId: string;
  variantId: string;
  qty: number;
};

export type OrderLine = {
  productId: string;
  variantId: string;
  name: string;
  image: string;
  variantLabel: string;
  price: number;
  qty: number;
};

export type OrderStatus =
  | "placed"
  | "confirmed"
  | "packed"
  | "out-for-delivery"
  | "delivered"
  | "cancelled";

export type PaymentMethod = "cod" | "easypaisa" | "jazzcash" | "bank" | "cash" | "card";

export type Customer = {
  name: string;
  phone: string;
  address?: string;
  area?: string;
  city?: string;
  notes?: string;
};

export type Courier = {
  name: string;
  rider: string;
  phone: string;
  tracking: string;
};

export type Order = {
  id: string;
  channel: "online" | "walk-in";
  customer: Customer;
  lines: OrderLine[];
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
  payment: PaymentMethod;
  status: OrderStatus;
  createdAt: string;
  slot?: string;
  courier?: Courier;
  timeline: { status: OrderStatus; at: string; note?: string }[];
};

export type DataState = {
  stock: Record<string, number>;
  orders: Order[];
};

export type PlaceOrderInput = {
  channel: "online" | "walk-in";
  customer: Customer;
  lines: CartLine[];
  payment: PaymentMethod;
  delivery: number;
  discount?: number;
  slot?: string;
};
