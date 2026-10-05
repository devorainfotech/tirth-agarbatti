import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milliard Agarbatti | Tirth Premium Agarbatti",
  description: "Experience the fragrance of devotion with Tirth Premium Agarbatti by Milliard Agarbatti. Handcrafted incense sticks, natural sandalwood, mogra, and sacred dhoop cups.",
  keywords: ["Milliard Agarbatti", "Tirth Premium Agarbatti", "Tirth Incense", "Chandan Agarbatti", "Mogra Agarbatti", "Sambrani Dhoop", "Indian Incense Manufacturer"],
  openGraph: {
    title: "Milliard Agarbatti | Tirth Premium Agarbatti",
    description: "The Fragrance of Devotion. Premium handcrafted incense sticks and sacred dhoop by Milliard Agarbatti.",
    url: "https://www.milliardagarbatti.com",
    siteName: "Milliard Agarbatti",
    images: [
      {
        url: "/images/hero/tirth-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tirth Premium Agarbatti Packaging",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

import DesignSwitcher from "@/components/ui/DesignSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#17130F] font-sans antialiased selection:bg-[#D9A52B]/30 selection:text-[#17130F]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <DesignSwitcher />
      </body>
    </html>
  );
}
