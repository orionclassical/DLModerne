// src/components/home/Hero.tsx
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 relative bg-gradient-to-r from-[#F1FFE8] from-35% to-[#AAD3AB] to-100% overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text content */}
        <div>
          <p className="font-body text-sm text-paragraph mb-4">
            DL Modern Bayong Bag Collection
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
            <span className="text-title block">Tradition Meets</span>
            <span className="text-[#3E7A4C] block">Modern Style</span>
          </h1>
          <p className="font-body text-base text-paragraph max-w-md mb-8 leading-relaxed">
            Our modern Bayong bags combine Filipino craftsmanship with
            contemporary design. Made from natural materials such as
            sabutan, pandan, and banig — with love from the Philippines.
          </p>
          <a
            href="#collection"
            className="inline-block font-button text-sm bg-button font-medium text-button-text cursor-pointer px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            DISCOVER MORE
          </a>
        </div>

        {/* Right: hero image */}
        <div className="relative h-[420px] flex items-center justify-center">
          <div className="absolute w-140 h-120 rounded-t-full bg-gradient-to-b from-10% from-[#9FCCA1] to-[#155F19] to-100%" />

          {/* Main bag — top-right, larger */}
          <div className="relative -bottom-15 left-20 w-150 h-130 z-10">
            <Image
              src="/img/OriginalBayongBags.png"
              alt="Bayong bag with round handle"
              fill
              className="object-contain"
            />
          </div>

          {/* Smaller round bag — overlapping bottom-left */}
          <div className="absolute -bottom-50 -left-30 w-130 h-120 z-20">
            <Image
              src="/img/BZ002-WHTE.png"
              alt="Round Bayong bag"
              fill
              className="object-contain"
            />
          </div>

          {/* Badge logo overlapping bottom-right */}
          <div className="absolute -bottom-15 -right-15 w-31.5 h-30.5 rounded-full border border-title/20 overflow-hidden z-30 shadow-sm">
            <Image
              src="/img/logo.jpg"
              alt="DL Moderne logo"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}