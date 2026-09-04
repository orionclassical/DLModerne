// src/components/home/ProductModal.tsx
"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
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

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function ProductModal({ product, onClose, onNext, onPrevious }: ProductModalProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2 sm:px-4"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        aria-label={t.modal.previous}
        className="md:left-10 lg:left-40 z-10 w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-18 lg:h-18 rounded-full bg-light flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-title" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-light rounded-2xl p-4 sm:p-5 md:p-10 max-w-5xl w-full max-h-[85vh] overflow-y-auto md:h-9/12 grid md:grid-cols-2 gap-4 md:gap-0 shadow-xl mx-3"
      >
        <button
          onClick={onClose}
          aria-label={t.modal.close}
          className="absolute top-1 right-1 md:top-4 md:right-4 z-10 w-8 h-8 rounded-full bg-light flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 text-title" />
        </button>

        <div className="relative h-56 sm:h-56 md:h-full lg:h-full bg-brown rounded-2xl">
          <Image
            src={product.imagePath}
            alt={product.name}
            fill
            className="object-scale-down"
          />
        </div>

        <div className="p-2 md:p-8 flex flex-col justify-center">
          <p className="font-body text-xs text-paragraph/60 mb-1">{product.code}</p>
          <h3 className="font-display font-bold text-xl md:text-2xl text-title mb-4">
            {product.name}
          </h3>

          <div className="flex flex-col gap-2 mb-6">
            <p className="font-body text-sm text-paragraph">
              <span className="font-button text-xs text-title">{t.modal.size} </span>
              {product.size}
            </p>
            <p className="font-body text-sm text-paragraph">
              <span className="font-button text-xs text-title">{t.modal.material} </span>
              {product.material}
            </p>
            <p className="font-body text-sm text-paragraph">
              <span className="font-button text-xs text-title">{t.modal.color} </span>
              {product.color}
            </p>
          </div>

          <p className="font-display font-bold text-xl md:text-2xl text-title mb-6">
            {product.price}
          </p>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-block text-center font-button text-sm bg-button text-button-text px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            {t.modal.inquire}
          </a>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label={t.modal.next}
        className="sm:right-4 md:right-10 lg:right-40 z-10 w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-18 lg:h-18 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-title" />
      </button>
    </div>
  );
}