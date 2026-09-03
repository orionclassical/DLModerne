// src/components/home/ShopByStyle.tsx
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";

const products = [
  { name: "Round Handle Weave", imagePath: "/images/products/product-1.png" },
  { name: "Wood Top Handle", imagePath: "/images/products/product-2.png" },
  { name: "Classic Basket Weave", imagePath: "/images/products/product-3.png" },
  { name: "Lemon Print Tote", imagePath: "/images/products/product-4.png" },
  { name: "Round Ring Weave", imagePath: "/images/products/product-5.png" },
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
    <section id="shop-by-style" className="scroll-mt-22 bg-light py-20">
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