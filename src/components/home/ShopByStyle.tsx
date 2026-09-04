// src/components/home/ShopByStyle.tsx
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";

// src/components/home/ShopByStyle.tsx (replace your products array with this)

type Product = {
  id: string;
  name: string;
  code: string;
  size: string;
  material: string;
  color: string;
  price: string;
  imagePath: string;
};

const products: Product[] = [
  { id: "BRM01", name: "Mirasol", code: "BRM01", size: "Medium, L10 x H8", material: "Sabutan", color: "Black", price: "140€", imagePath: "/img/BRM01.png" },
  { id: "BRA01", name: "Aurora Small", code: "BRA01", size: "L10 x H9", material: "Sabutan", color: "Stripe Black/White", price: "130€", imagePath: "/img/BRA01.png" },
  { id: "BRM02", name: "Monina 1900", code: "BRM02", size: "L5 x H4.5", material: "Sabutan", color: "Black", price: "130€", imagePath: "/img/BRM02.png" },
  { id: "BRK01", name: "Kisses", code: "BRK01", size: "H12 x 3", material: "Buntal Fiber", color: "Off-white & Black", price: "150€", imagePath: "/img/BRK01.png" },
  { id: "BRM03", name: "Med Bior", code: "BRM03", size: "L14 x H10", material: "Sabutan", color: "Black", price: "140€", imagePath: "/img/BRM03.png" },
  { id: "BRJ01", name: "Jenna 2Stone", code: "BRJ01", size: "L11 x H8", material: "Buntal Fiber", color: "Black with White", price: "150€", imagePath: "/img/BRJ01.png" },
  { id: "BRA02", name: "Alona", code: "BRA02", size: "9x12", material: "Sabutan", color: "Pink", price: "140€", imagePath: "/img/BRA02.png" },
  { id: "BASB01", name: "Bayong Arts SB01", code: "BASB01", size: "9.5x14", material: "Sabutan", color: "Red with Dark Brown Handle", price: "130€", imagePath: "/img/BASB01.png" },
  { id: "BAS01", name: "Bayong Arts S01", code: "BAS01", size: "8.5x10", material: "Sabutan", color: "Black with Orange / Black with Blue", price: "120€", imagePath: "/img/BAS01.png" },
  { id: "BAP01", name: "Bayong Arts P01", code: "BAP01", size: "10.5x12", material: "Pandan Leaves with Wood Handle", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/BAP01.png" },
  { id: "BAP02", name: "Bayong Arts P02", code: "BAP02", size: "11x13.5", material: "Pandan Leaves", color: "Navy Blue", price: "120€", imagePath: "/img/BAP02.png" },
  { id: "BAP03", name: "Bayong Arts P03", code: "BAP03", size: "15x10", material: "Pandan Leaves with Wood Handle", color: "Pink", price: "120€", imagePath: "/img/BAP03.png" }, // ⚠️ photo pending
  { id: "BAPS04", name: "Sling", code: "BAPS04", size: "8.5x8.5", material: "Pandan Leaves", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/BAPS04.png" },
  { id: "BAPHP01", name: "Hablon", code: "BAPHP01", size: "11x15", material: "Handwoven Pandan", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/BAPHP01.png" },
  { id: "BAPT01", name: "Tote", code: "BAPT01", size: "12x8", material: "Pandan Leaves", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/BAPT01.png" },
  { id: "BATS05", name: "Bayong Arts TS05", code: "BATS05", size: "8.5x10.5", material: "Sabutan", color: "Black/Off-white Woven Accents", price: "120€", imagePath: "/img/BATS05.png" },
  { id: "BZ001", name: "Longhandle", code: "BZ001", size: "10x11", material: "Sabutan", color: "Cream/Off-white Woven Accents", price: "140€", imagePath: "/img/BZ001.png" },
  { id: "BZ002-A", name: "BZ002-A", code: "BZ002", size: "9x14", material: "Sabutan", color: "Cream/Off-white Woven Accents", price: "140€", imagePath: "/img/BZ002-A.png" },
  { id: "BZ002-B", name: "BZ002-B", code: "BZ002", size: "9x14", material: "Buntal Fiber", color: "Dark Brown / Black Stripes", price: "140€", imagePath: "/img/BZ002-B.png" },
  { id: "FP001", name: "Chicky", code: "FP001", size: "5.5x12", material: "Pandan", color: "Black/White Woven Accents", price: "110€", imagePath: "/img/FP001.png" },
  { id: "MSb001", name: "MSb001", code: "MSb001", size: "9x8", material: "Pandan", color: "Black with White Woven Accents", price: "70€", imagePath: "/img/MSb001.png" },
];

export function ShopByStyle() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -240 : 240,
      behavior: "smooth",
    });
  };

  return (
    <section id="collection" className="scroll-mt-22 bg-light py-20">
      <div className="mx-auto max-w-6xl px-6 text-center mb-12">
        <h2 className="font-display font-bold text-3xl text-title mb-4">
          Shop By Different Styles
        </h2>
        <p className="font-body text-sm text-paragraph max-w-xl mx-auto leading-relaxed">
          Our modern Bayong bags combine Filipino craftsmanship with
          contemporary design. Made from natural materials such as sabutan,
          pandan, and banig — with love from the Philippines.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-title/20 flex items-center justify-center shadow-sm hover:bg-peach transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-title" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-12 py-2 [scrollbar-width:none]"
        >
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-title/20 flex items-center justify-center shadow-sm hover:bg-peach transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-title" />
        </button>
      </div>
    </section>
  );
}