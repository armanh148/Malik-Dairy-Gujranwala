import type { Category, Product } from "@/lib/types";

export const categories: { id: "all" | Category; label: string; urdu?: string }[] = [
  { id: "all", label: "All pantry" },
  { id: "ghee-butter", label: "Ghee & butter", urdu: "گھی و مکھن" },
  { id: "fresh-dairy", label: "Fresh dairy", urdu: "تازہ ڈیری" },
  { id: "honey", label: "Honey", urdu: "شہد" },
];

export const products: Product[] = [
  {
    id: "ghee",
    slug: "pure-desi-ghee",
    name: "Pure Desi Ghee",
    urdu: "خالص دیسی گھی",
    category: "ghee-butter",
    blurb: "Slow-churned from cultured desi cow milk. Golden, nutty, never blended.",
    description:
      "Our signature ghee is made the long way: fresh desi cow milk is cultured overnight, hand-churned into makhan, then simmered slowly over a low flame until it turns clear and golden. No palm oil, no colour, no shortcuts. One jar makes a whole kitchen smell like home.",
    image: "/products/ghee.svg",
    tint: "radial-gradient(120% 120% at 28% 18%, #fcf3dd 0%, #f4e1b8 52%, #e8cd92 100%)",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 486,
    benefits: ["Cultured desi cow milk", "No palm oil or vanaspati", "Lab-tested every batch"],
    variants: [
      { id: "500g", label: "500 g", grams: 500, price: 2450, compareAt: 2700, stock: 18, sku: "MD-GHEE-500" },
      { id: "1kg", label: "1 kg", grams: 1000, price: 4700, compareAt: 5400, stock: 9, sku: "MD-GHEE-1000" },
    ],
  },
  {
    id: "butter",
    slug: "fresh-white-butter",
    name: "Fresh White Butter",
    urdu: "تازہ سفید مکھن",
    category: "ghee-butter",
    blurb: "Hand-churned makhan, salted just enough. Soft, bright and spreadable.",
    description:
      "Made every morning from the previous night's cream, our white butter is churned by hand in small batches. It is lightly salted with pure rock salt, so it stays fresh in the fridge for up to three weeks — though it rarely lasts that long on hot parathas.",
    image: "/products/butter.svg",
    tint: "radial-gradient(120% 120% at 30% 18%, #fdf8eb 0%, #f3e6c9 54%, #e5d2a8 100%)",
    badge: "New",
    rating: 4.8,
    reviews: 213,
    benefits: ["Churned fresh each morning", "Pure rock salt only", "No preservatives"],
    variants: [
      { id: "250g", label: "250 g", grams: 250, price: 950, compareAt: 1100, stock: 24, sku: "MD-BUTTER-250" },
      { id: "500g", label: "500 g", grams: 500, price: 1800, compareAt: 2100, stock: 12, sku: "MD-BUTTER-500" },
    ],
  },
  {
    id: "khoya",
    slug: "fresh-khoya",
    name: "Fresh Khoya",
    urdu: "تازہ کھویا",
    category: "fresh-dairy",
    blurb: "Slow-reduced whole milk mawa for halwa, barfi and Eid mornings.",
    description:
      "Whole milk is reduced slowly in a heavy kadhai until it becomes soft, fragrant mawa. We make it fresh to order, so it arrives moist and sweet rather than dry. Perfect for gajar ka halwa, barfi, or a spoon straight from the box.",
    image: "/products/khoya.svg",
    tint: "radial-gradient(120% 120% at 30% 18%, #f9efdf 0%, #efddc4 55%, #ddc3a3 100%)",
    badge: "Festive favourite",
    rating: 4.7,
    reviews: 168,
    benefits: ["100% whole milk", "Made fresh to order", "No starch or filler"],
    variants: [
      { id: "500g", label: "500 g", grams: 500, price: 1100, compareAt: 1250, stock: 6, sku: "MD-KHOYA-500" },
      { id: "1kg", label: "1 kg", grams: 1000, price: 2100, compareAt: 2400, stock: 4, sku: "MD-KHOYA-1000" },
    ],
  },
  {
    id: "honey",
    slug: "raw-sidr-honey",
    name: "Raw Sidr Honey",
    urdu: "خالص سدر شہد",
    category: "honey",
    blurb: "Single-origin beri honey. Raw, unfiltered, with a warm caramel finish.",
    description:
      "Harvested once a year from sidr (beri) groves in Punjab, our honey is cold-extracted and never heated. It is thick, aromatic and crystallises naturally in winter — a sign that nothing has been added or taken away. Every lot is tested for purity and moisture.",
    image: "/products/honey.svg",
    tint: "radial-gradient(120% 120% at 30% 18%, #fcf0d4 0%, #f6dda7 52%, #ebc47c 100%)",
    badge: "Lab tested",
    rating: 4.9,
    reviews: 302,
    benefits: ["Single-origin sidr harvest", "Raw and unpasteurised", "Purity report on request"],
    variants: [
      { id: "500g", label: "500 g", grams: 500, price: 3200, compareAt: 3600, stock: 14, sku: "MD-HONEY-500" },
      { id: "1kg", label: "1 kg", grams: 1000, price: 6000, compareAt: 6800, stock: 7, sku: "MD-HONEY-1000" },
    ],
  },
  {
    id: "cream",
    slug: "fresh-cream-balai",
    name: "Fresh Cream",
    urdu: "تازہ بالائی",
    category: "fresh-dairy",
    blurb: "Thick malai skimmed from morning milk. For kulfi, curries and coffee.",
    description:
      "The first and thickest layer skimmed from our morning milk, chilled immediately and packed the same day. It whips beautifully, enriches a korma, and turns a simple cup of chai into something worth sitting down for.",
    image: "/products/cream.svg",
    tint: "radial-gradient(120% 120% at 30% 18%, #fbf6ea 0%, #f0e9da 54%, #ddd2bd 100%)",
    rating: 4.6,
    reviews: 141,
    benefits: ["Skimmed same morning", "No thickeners", "Chilled delivery"],
    variants: [
      { id: "250g", label: "250 g", grams: 250, price: 650, compareAt: 750, stock: 20, sku: "MD-CREAM-250" },
      { id: "500g", label: "500 g", grams: 500, price: 1200, compareAt: 1400, stock: 5, sku: "MD-CREAM-500" },
    ],
  },
  {
    id: "dahi",
    slug: "desi-dahi",
    name: "Desi Dahi",
    urdu: "دیسی دہی",
    category: "fresh-dairy",
    blurb: "Set in clay, gently sour, and thick enough for a spoon to stand up.",
    description:
      "Whole milk, a spoon of yesterday's culture, and time. Our dahi is set in earthen matkas so the whey drains naturally and the flavour stays clean and slightly sweet. Delivered chilled, in a sealed pot.",
    image: "/products/dahi.svg",
    tint: "radial-gradient(120% 120% at 30% 18%, #f8f2e6 0%, #eee5d3 55%, #ddd1b9 100%)",
    badge: "Everyday",
    rating: 4.7,
    reviews: 259,
    benefits: ["Set in earthen pots", "Live cultures", "Delivered chilled"],
    variants: [
      { id: "500g", label: "500 g", grams: 500, price: 350, compareAt: 400, stock: 30, sku: "MD-DAHI-500" },
      { id: "1kg", label: "1 kg", grams: 1000, price: 650, compareAt: 750, stock: 16, sku: "MD-DAHI-1000" },
    ],
  },
];

export const FREE_DELIVERY_THRESHOLD = 3000;
export const DELIVERY_FEE = 150;

export const paymentLabels: Record<string, string> = {
  cod: "Cash on delivery",
  easypaisa: "Easypaisa",
  jazzcash: "JazzCash",
  bank: "Bank transfer",
  cash: "Cash",
  card: "Card",
};

export const deliverySlots = [
  "Today · 4:00 – 6:00 pm",
  "Today · 6:00 – 8:00 pm",
  "Tomorrow · 10:00 am – 12:00 pm",
  "Tomorrow · 4:00 – 6:00 pm",
];

export const deliveryAreas = [
  "Satellite Town",
  "Model Town",
  "DC Colony",
  "Peoples Colony",
  "Cantt",
  "Wapda Town",
  "Gulshan Colony",
  "Other area",
];

export function getProduct(productId: string) {
  return products.find((p) => p.id === productId);
}

export function getVariant(productId: string, variantId: string) {
  return getProduct(productId)?.variants.find((v) => v.id === variantId);
}

export function stockKey(productId: string, variantId: string) {
  return `${productId}:${variantId}`;
}

export const allVariants = products.flatMap((product) =>
  product.variants.map((variant) => ({ product, variant })),
);

export function findVariantBySku(sku: string) {
  const needle = sku.trim().toLowerCase();
  return allVariants.find(({ variant }) => variant.sku.toLowerCase() === needle);
}

export function totalStock(stock: Record<string, number>, productId: string) {
  const product = getProduct(productId);
  if (!product) return 0;
  return product.variants.reduce((sum, v) => sum + (stock[stockKey(productId, v.id)] ?? 0), 0);
}
