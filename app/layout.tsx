import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://sarukaglobal.com"),

  title: {
    default: "Saruka Global | Premium Indian Agricultural Exporter",
    template: "%s | Saruka Global",
  },

  description:
    "Saruka Global is a trusted Indian exporter of premium rice, wheat, maize, fresh fruits, vegetables, spices, pulses and dry fruits supplying global importers with export-quality agricultural products.",

  keywords: [
    "Rice Exporter India",
    "Fresh Fruits Exporter",
    "Vegetables Export",
    "Indian Spices Exporter",
    "Pulses Export",
    "Dry Fruits Export",
    "Agricultural Export",
    "Basmati Rice",
    "Saruka Global",
  ],

  authors: [
    {
      name: "Saruka Global",
    },
  ],

  creator: "Saruka Global",

  publisher: "Saruka Global",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Saruka Global",
    description:
      "Premium Indian Agricultural Export Company supplying high-quality grains, fruits, vegetables, spices, pulses and dry fruits worldwide.",

    url: "https://sarukaglobal.com",

    siteName: "Saruka Global",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Saruka Global",

    description:
      "Premium Indian Agricultural Export Company",

    images: ["/images/og-banner.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-[#022c22]">
        {children}

        <FloatingWhatsApp />
      </body>
    </html>
  );
}