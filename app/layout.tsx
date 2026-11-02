import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Malik Dairy — Pure Desi Ghee & Organic Dairy, Gujranwala",
    template: "%s · Malik Dairy",
  },
  description:
    "Pure desi ghee, hand-churned butter, fresh khoya, raw sidr honey and same-day dairy from Malik Dairy, Gujranwala. Lab-tested purity, delivered chilled to your door.",
  keywords: [
    "desi ghee Gujranwala",
    "pure ghee Pakistan",
    "organic dairy",
    "Malik Dairy",
    "khoya",
    "sidr honey",
    "fresh butter",
  ],
  openGraph: {
    title: "Malik Dairy — Pure Desi Ghee & Organic Dairy",
    description:
      "Slow-churned desi ghee, fresh butter, khoya, raw honey and cream. Delivered across Gujranwala.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b1a12" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1a12" },
  ],
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("malik-theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&family=Noto+Nastaliq+Urdu:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-canvas font-sans text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
