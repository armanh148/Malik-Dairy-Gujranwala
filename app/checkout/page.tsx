import type { Metadata } from "next";
import { CheckoutFlow } from "./checkout-flow";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your Malik Dairy order — cash on delivery across Gujranwala.",
};

export default function CheckoutPage() {
  return <CheckoutFlow />;
}
