"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, productColors, productMaterials, type Product } from "@/lib/products";

export function ProductCollection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");

  const uniqueProducts = useMemo(() => {
    const unique = new Map<string, Product>();

    products.forEach((product) => {
      if (!unique.has(product.code)) {
        unique.set(product.code, product);
      }
    });

    return Array.from(unique.values());
  }, []);

  const sizeOptions = ["All", ...Array.from(new Set(products.map((product) => product.size)))];

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return uniqueProducts.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [product.name, product.code, product.material, product.color, product.size]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesMaterial =
        selectedMaterial === "All" || product.material === selectedMaterial;
      const matchesColor = selectedColor === "All" || product.color === selectedColor;
      const matchesSize = selectedSize === "All" || product.size === selectedSize;

      return matchesSearch && matchesMaterial && matchesColor && matchesSize;
    });
  }, [searchTerm, selectedColor, selectedMaterial, selectedSize, uniqueProducts]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedMaterial("All");
    setSelectedColor("All");
    setSelectedSize("All");
  };

  const hasActiveFilters =
    searchTerm || selectedMaterial !== "All" || selectedColor !== "All" || selectedSize !== "All";

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-button text-xs tracking-[0.3em] text-title/70 uppercase mb-2">
            Collection
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-title font-bold leading-none">
            Discover our full range
          </h1>
        </div>

        <p className="font-button text-[10px] tracking-[0.2em] text-title/70 uppercase">
          {filteredProducts.length} items
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
        <aside className="lg:sticky lg:top-[88px]">
          <div className="rounded-[1.75rem] border border-title/10 bg-light p-4 shadow-[0_20px_45px_rgba(18,38,28,0.06)] sm:p-5">
            <div className="flex items-center gap-3 rounded-2xl border border-title/15 bg-brown/60 px-3 py-3">
              <Search className="h-4 w-4 text-title/60" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products, material, color..."
                className="w-full bg-transparent border-none outline-none font-body text-sm text-paragraph placeholder:text-paragraph/50"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-title/10 bg-brown/30 p-3 sm:p-4">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-title" />
                  <p className="font-button text-xs tracking-[0.2em] uppercase text-title">
                    Filters
                  </p>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 rounded-full border border-title/20 px-2.5 py-1 font-button text-[9px] tracking-[0.15em] uppercase text-title transition-colors hover:bg-light"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-5">
                <FilterSelect
                  label="Material"
                  value={selectedMaterial}
                  options={["All", ...productMaterials]}
                  onChange={setSelectedMaterial}
                />

                <FilterSelect
                  label="Color"
                  value={selectedColor}
                  options={["All", ...productColors]}
                  onChange={setSelectedColor}
                />

                <FilterSelect
                  label="Size"
                  value={selectedSize}
                  options={sizeOptions}
                  onChange={setSelectedSize}
                />
              </div>
            </div>
          </div>
        </aside>

        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
              {filteredProducts.map((product) => {
                const variantCount = products.filter((item) => item.code === product.code).length;

                return (
                  <article
                    key={product.code}
                    className="group overflow-hidden rounded-[1.5rem] border border-title/10 bg-light shadow-[0_16px_32px_rgba(18,38,28,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(18,38,28,0.12)]"
                  >
                    <div className="relative h-32 overflow-hidden bg-brown sm:h-44 lg:h-60">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <Image
                        src={product.imagePath}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03] sm:p-5"
                      />
                    </div>

                    <div className="space-y-3 p-3 sm:p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-button text-[9px] tracking-[0.18em] uppercase text-title/60">
                            {product.code}
                          </p>
                          <h2 className="mt-1 font-display text-xl font-bold text-title sm:text-2xl">
                            {product.name}
                          </h2>
                        </div>
                        <p className="font-display text-lg font-bold text-title sm:text-xl">
                          {product.price}
                        </p>
                      </div>

                      <div className="space-y-1.5 font-body text-xs text-paragraph sm:text-sm">
                        <p>
                          <span className="font-button text-[9px] tracking-[0.18em] uppercase text-title/70 mr-2">
                            Material
                          </span>
                          {product.material}
                        </p>
                        <p>
                          <span className="font-button text-[9px] tracking-[0.18em] uppercase text-title/70 mr-2">
                            Color
                          </span>
                          {product.color}
                        </p>
                        <p>
                          <span className="font-button text-[9px] tracking-[0.18em] uppercase text-title/70 mr-2">
                            Styles
                          </span>
                          {variantCount}
                        </p>
                      </div>

                      <div className="pt-1">
                        <Link
                          href={`/collection/${encodeURIComponent(product.code)}`}
                          className="inline-flex items-center justify-center rounded-sm bg-button px-4 py-2.5 font-button text-[10px] tracking-[0.18em] uppercase text-button-text transition-opacity hover:opacity-90 sm:px-5 sm:py-3"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-title/20 bg-brown/40 px-6 py-16 text-center">
              <p className="font-display text-3xl text-title font-bold mb-2">No matches found</p>
              <p className="font-body text-base text-paragraph/70">
                Try adjusting your search or clearing one of the filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-button text-[10px] tracking-[0.18em] uppercase text-title/70">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-title/15 bg-brown px-3 py-3 font-body text-sm text-paragraph outline-none transition focus:border-title"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
