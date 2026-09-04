// src/app/layout.tsx
import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { Playfair_Display_SC, EB_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "DL Moderne | Bayong Bag Collection",
  description:
    "Modern Bayong bags combining Filipino craftsmanship with contemporary design. Made from sabutan, pandan, and banig.",
  icons: {
    icon: [{ url: "/img/logo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/img/logo.jpg", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${garamond.variable} ${montserrat.variable} h-full`}
    >
      <body className="h-full antialiased font-body text-paragraph bg-cream" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}