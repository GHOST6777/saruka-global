import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// 1. Correct Font Configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 2. Metadata Export
export const metadata: Metadata = {
  title: "Saruka Global | Premium Agri-Export",
  description: "International trading house for premium agricultural produce.",
};

// 3. Viewport Export (This is what stops the mobile jumping/glitching)
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
      </body>
    </html>
  );
}