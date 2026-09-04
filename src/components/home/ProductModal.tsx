// src/components/home/ProductModal.tsx
"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

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

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function ProductModal({ product, onClose, onNext, onPrevious }: ProductModalProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Fade out briefly, swap content, fade back in — on every product change
  useEffect(() => {
    if (!product) return;
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [product?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 "
    >
      {/* Previous arrow — outside the card */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous product"
        className="absolute ml-20 md:left-10 top-1/2 -translate-y-1/2 z-10 w-25 h-25 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 text-title" />
      </button>
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-light rounded-2xl p-10 max-w-5xl w-full h-9/12 grid md:grid-cols-2 overflow-hidden shadow-xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 text-title" />
        </button>

        <div className="relative h-64 md:h-full bg-brown rounded-2xl">
          <Image
            src={product.imagePath}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 flex flex-col justify-center">
          <p className="font-body text-xs text-paragraph/60 mb-1">{product.code}</p>
          <h3 className="font-display font-bold text-2xl text-title mb-4">
            {product.name}
          </h3>

          <div className="flex flex-col gap-2 mb-6">
            <p className="font-body text-sm text-paragraph">
              <span className="font-button text-xs text-title">SIZE: </span>
              {product.size}
            </p>
            <p className="font-body text-sm text-paragraph">
              <span className="font-button text-xs text-title">MATERIAL: </span>
              {product.material}
            </p>
            <p className="font-body text-sm text-paragraph">
              <span className="font-button text-xs text-title">COLOR: </span>
              {product.color}
            </p>
          </div>

          <p className="font-display font-bold text-2xl text-title mb-6">
            {product.price}
          </p>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-block text-center font-button text-sm bg-button text-button-text px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            INQUIRE ABOUT THIS BAG
          </a>
        </div>
      </div>

      {/* Next arrow — outside the card */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next product"
        className="absolute md:right-10 top-1/2 -translate-y-1/2 z-10 w-25 h-25 mr-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 text-title" />
      </button>
    </div>
  );
}