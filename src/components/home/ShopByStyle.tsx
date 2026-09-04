"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { useLanguage } from "@/context/LanguageContext";

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
  { id: "BRM01", name: "Mirasol", code: "BRM01", size: "Medium, L10 x H8", material: "Sabutan", color: "Black", price: "140€", imagePath: "/img/collection/BRM01.png" },
  { id: "BRA01", name: "Aurora", code: "BRA01", size: "Small, L10 x H9", material: "Sabutan", color: "Stripe Black/White", price: "130€", imagePath: "/img/collection/BRA01.png" },
  { id: "BRM02", name: "Monina 1900", code: "BRM02", size: "L5 x H4.5", material: "Sabutan", color: "Black", price: "130€", imagePath: "/img/collection/BRM02.png" },
  { id: "BRK01-A", name: "Kisses", code: "BRK01", size: "H12 x 3", material: "Buntal Fiber", color: "Black", price: "150€", imagePath: "/img/collection/BRK01-A.png" },
  { id: "BRK01-B", name: "Kisses", code: "BRK01", size: "H12 x 3", material: "Buntal Fiber", color: "Off-white", price: "150€", imagePath: "/img/collection/BRK01-B.png" },
  { id: "BRM03", name: "Med Bior", code: "BRM03", size: "L14 x H10", material: "Sabutan", color: "Black", price: "140€", imagePath: "/img/collection/BRM03.png" },
  { id: "BRJ01", name: "Jenna 2Stone", code: "BRJ01", size: "L11 x H8", material: "Buntal Fiber", color: "Black with White", price: "150€", imagePath: "/img/collection/BRJ01.png" },
  { id: "BRA02", name: "Alona", code: "BRA02", size: "9x12", material: "Sabutan", color: "Pink", price: "140€", imagePath: "/img/collection/BRA02.png" },
  { id: "BASB01", name: "Bayong Arts SB01", code: "BASB01", size: "9.5x14", material: "Sabutan", color: "Red with Dark Brown Handle", price: "130€", imagePath: "/img/collection/BASB01.png" },
  { id: "BAS01-A", name: "Bayong Arts S01", code: "BAS01", size: "8.5x10", material: "Sabutan", color: "Black with Blue", price: "120€", imagePath: "/img/collection/BAS01-A.png" },
  { id: "BAS01-B", name: "Bayong Arts S01", code: "BAS01", size: "8.5x10", material: "Sabutan", color: "Black with Orange", price: "120€", imagePath: "/img/collection/BAS01-B.png" },
  { id: "BAP01", name: "Bayong Arts P01", code: "BAP01", size: "10.5x12", material: "Pandan Leaves with Wood Handle", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAP01.png" },
  { id: "BAP02", name: "Bayong Arts P02", code: "BAP02", size: "11x13.5", material: "Pandan Leaves", color: "Navy Blue", price: "120€", imagePath: "/img/collection/BAP02.png" },
  { id: "BAPS04", name: "Sling", code: "BAPS04", size: "8.5x8.5", material: "Pandan Leaves", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAPS04.png" },
  { id: "BAPHP01", name: "Hablon", code: "BAPHP01", size: "11x15", material: "Handwoven Pandan", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAPHP01.png" },
  { id: "BAPT01", name: "Tote", code: "BAPT01", size: "12x8", material: "Pandan Leaves", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAPT01.png" },
  { id: "BZ001", name: "Longhandle", code: "BZ001", size: "10x11", material: "Sabutan", color: "Cream/Off-white Woven Accents", price: "140€", imagePath: "/img/collection/BZ001.png" },
  { id: "BZ002-A", name: "BZ002-A", code: "BZ002", size: "9x14", material: "Buntal Fiber", color: "Dark Brown / Black Stripes", price: "140€", imagePath: "/img/collection/BZ002-A.png" },
  { id: "BZ002-B", name: "BZ002-B", code: "BZ002", size: "9x14", material: "Sabutan", color: "Cream/Off-white Woven Accents", price: "140€", imagePath: "/img/collection/BZ002-B.png" },
  { id: "FP001", name: "Chicky", code: "FP001", size: "5.5x12", material: "Pandan", color: "Black/White Woven Accents", price: "110€", imagePath: "/img/collection/FP001.png" },
  { id: "MSb001-A", name: "MSb001", code: "MSb001", size: "9x8", material: "Pandan", color: "Black with White Woven Accents", price: "70€", imagePath: "/img/collection/Msb001-A.png" },
  { id: "MSb001-B", name: "MSb001", code: "MSb001", size: "9x8", material: "Pandan", color: "Black with White Woven Accents", price: "70€", imagePath: "/img/collection/Msb001-B.png" },
];

export function ShopByStyle() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -240 : 240,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % products.length
    );
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + products.length) % products.length
    );
  };

  return (
    <section id="collection" className="scroll-mt-22 bg-light py-20">
      <div className="mx-auto max-w-6xl px-6 text-center mb-12">
        <h2 className="font-display font-bold text-3xl text-title mb-4">
          {t.shop.heading}
        </h2>
        <p className="font-body text-sm text-paragraph max-w-xl mx-auto leading-relaxed">
          {t.shop.description}
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute cursor-pointer -left-12 top-1/2 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-light-background border border-title flex items-center justify-center shadow-sm hover:bg-brown-background transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-title" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-12 py-2 [scrollbar-width:none]"
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              viewLabel={t.shop.view}
              onView={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute cursor-pointer -right-12 top-1/2 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-light-background border border-title flex items-center justify-center shadow-sm hover:bg-brown-background transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-title" />
        </button>
      </div>

      <ProductModal
        product={selectedIndex !== null ? products[selectedIndex] : null}
        onClose={() => setSelectedIndex(null)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </section>
  );
}