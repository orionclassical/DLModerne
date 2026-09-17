"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, productColors, productMaterials, type Product } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";

export function ProductCollection() {
  const { t } = useLanguage();
  const materialLabel = (value: string) =>
    t.collection.materials[value as keyof typeof t.collection.materials] ?? value;
  const colorLabel = (value: string) =>
    t.collection.colors[value as keyof typeof t.collection.colors] ?? value;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
    setIsFilterOpen(false);
  };

  const hasActiveFilters =
    searchTerm || selectedMaterial !== "All" || selectedColor !== "All" || selectedSize !== "All";

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-button text-xs tracking-[0.3em] text-title/70 uppercase mb-2">
            {t.collection.label}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-title font-bold leading-none">
            {t.collection.heading}
          </h1>
        </div>

        <p className="font-button text-[10px] tracking-[0.2em] text-title/70 uppercase">
          {filteredProducts.length} {t.collection.itemCount}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
        <aside className="lg:sticky lg:top-[88px]">
          <div className="rounded-[1.75rem] border border-title/10 bg-light p-4 shadow-[0_20px_45px_rgba(18,38,28,0.06)] sm:p-5">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 lg:block">
              <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-title/15 bg-brown/60 px-3 py-3">
                <Search className="h-4 w-4 text-title/60" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={t.collection.searchPlaceholder}
                  className="w-full bg-transparent border-none outline-none font-body text-sm text-paragraph placeholder:text-paragraph/50"
                />
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsFilterOpen((isOpen) => !isOpen)}
                  aria-expanded={isFilterOpen}
                  aria-label={t.collection.filters}
                  className="inline-flex items-center gap-2 rounded-2xl border border-title/15 bg-brown/60 px-3 py-3 font-button text-[10px] tracking-[0.15em] uppercase text-title lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </button>

                <div className="mt-5 hidden rounded-2xl border border-title/10 bg-brown/30 p-3 sm:p-4 lg:block">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4 text-title" />
                      <p className="font-button text-xs tracking-[0.2em] uppercase text-title">
                        {t.collection.filters}
                      </p>
                    </div>

                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="inline-flex items-center gap-2 rounded-full border border-title/20 px-2.5 py-1 font-button text-[9px] tracking-[0.15em] uppercase text-title transition-colors hover:bg-light"
                      >
                        <X className="h-3 w-3" />
                        {t.collection.clear}
                      </button>
                    )}
                  </div>

                  <div className="space-y-5">
                    <FilterSelect
                      label={t.collection.material}
                      value={selectedMaterial}
                      options={["All", ...productMaterials]}
                      allLabel={t.collection.all}
                      optionLabel={materialLabel}
                      onChange={setSelectedMaterial}
                    />
                    <FilterSelect
                      label={t.collection.color}
                      value={selectedColor}
                      options={["All", ...productColors]}
                      allLabel={t.collection.all}
                      optionLabel={colorLabel}
                      onChange={setSelectedColor}
                    />
                    <FilterSelect
                      label={t.collection.size}
                      value={selectedSize}
                      options={sizeOptions}
                      allLabel={t.collection.all}
                      onChange={setSelectedSize}
                    />
                  </div>
                </div>

                <div
                  className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
                    isFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={!isFilterOpen}
                >
                    <div
                      className="absolute inset-0 bg-title/10"
                      onClick={() => setIsFilterOpen(false)}
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute inset-x-0 bottom-0 top-12 flex min-h-0 flex-col overflow-hidden rounded-t-[1.75rem] bg-light shadow-[0_-20px_45px_rgba(18,38,28,0.12)] transition-transform duration-300 ease-out ${
                        isFilterOpen ? "translate-y-0" : "translate-y-full"
                      }`}
                    >
                      <div className="flex items-center justify-between border-b border-title/10 px-5 py-5">
                        <h2 className="font-display text-2xl font-bold text-title">
                          {t.collection.filters}
                        </h2>
                        <button
                          type="button"
                          onClick={() => setIsFilterOpen(false)}
                          aria-label="Close filters"
                          className="p-1 text-title/70 transition-colors hover:text-title"
                        >
                          <X className="h-8 w-8" strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="min-h-0 flex-1 space-y-7 overflow-y-auto px-5 py-6">
                        <FilterSelect
                          label={t.collection.material}
                          value={selectedMaterial}
                          options={["All", ...productMaterials]}
                          allLabel={t.collection.all}
                          optionLabel={materialLabel}
                          onChange={setSelectedMaterial}
                        />
                        <FilterSelect
                          label={t.collection.color}
                          value={selectedColor}
                          options={["All", ...productColors]}
                          allLabel={t.collection.all}
                          optionLabel={colorLabel}
                          onChange={setSelectedColor}
                        />
                        <FilterSelect
                          label={t.collection.size}
                          value={selectedSize}
                          options={sizeOptions}
                          allLabel={t.collection.all}
                          onChange={setSelectedSize}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 border-t border-title/10 bg-light px-5 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
                        <button
                          type="button"
                          onClick={clearFilters}
                          className="rounded-xl border border-title px-4 py-3 font-button text-xs tracking-[0.12em] uppercase text-title"
                        >
                          {t.collection.clear}
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsFilterOpen(false)}
                          className="rounded-xl bg-title px-4 py-3 font-button text-xs tracking-[0.12em] uppercase text-light"
                        >
                          {t.collection.filters}
                        </button>
                      </div>
                    </div>
                    </div>
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
                  <Link
                    key={product.code}
                    href={`/collection/${encodeURIComponent(product.code)}.html`}
                    className=""
                  >
                  <article
                    className="group overflow-hidden rounded-[1.5rem] border border-title/10 bg-light shadow-[0_16px_32px_rgba(18,38,28,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(18,38,28,0.12)]"
                  >
                    <div className="relative h-32 overflow-hidden bg-light sm:h-44 lg:h-60">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <Image
                        src={product.imagePath}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03] sm:p-5"
                      />
                    </div>

                    <div className="space-y-3 p-3 sm:p-4 border-t-1 border-button/10">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          {/* <p className="font-button text-[9px] tracking-[0.18em] uppercase text-title/60">
                            {product.code}
                          </p> */}
                          <h2 className="mt-1 font-display text-xl font-bold text-title sm:text-2xl">
                            {product.code}
                          </h2>
                        </div>
                        <p className="font-display text-lg font-bold text-title sm:text-xl">
                          {product.price}
                        </p>
                      </div>

                      <div className="space-y-1.5 font-body text-xs text-paragraph sm:text-sm">
                        <p>
                          <span className="font-button text-[9px] tracking-[0.18em] uppercase text-title/70 mr-2">
                            {t.collection.material}
                          </span>
                          {materialLabel(product.material)}
                        </p>
                        <p>
                          <span className="font-button text-[9px] tracking-[0.18em] uppercase text-title/70 mr-2">
                            {t.collection.color}
                          </span>
                          {colorLabel(product.color)}
                        </p>
                        <p>
                          <span className="font-button text-[9px] tracking-[0.18em] uppercase text-title/70 mr-2">
                            {t.collection.variants}
                          </span>
                          {variantCount}
                        </p>
                      </div>

                      <div className="pt-1">
                        {/* <Link
                          href={`/collection/${encodeURIComponent(product.code)}.html`}
                          className="flex justify-center rounded-sm bg-button px-4 py-2.5 font-button text-[10px] tracking-[0.18em] uppercase text-button-text transition-opacity hover:opacity-90 sm:px-5 sm:py-3"
                        >
                          View details
                        </Link> */}
                      </div>
                    </div>
                  </article>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-title/20 bg-brown/40 px-6 py-16 text-center">
              <p className="font-display text-3xl text-title font-bold mb-2">{t.collection.noMatches}</p>
              <p className="font-body text-base text-paragraph/70">
                {t.collection.noMatchesDescription}
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
  allLabel,
  optionLabel,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  allLabel: string;
  optionLabel?: (value: string) => string;
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
            {option === "All" ? allLabel : optionLabel?.(option) ?? option}
          </option>
        ))}
      </select>
    </label>
  );
}
