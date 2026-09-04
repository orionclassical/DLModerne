// src/components/home/Hero.tsx
"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="scroll-mt-24 relative bg-gradient-to-r from-[#F1FFE8] from-35% to-[#AAD3AB] to-100% overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left: text content */}
        <div className="text-center md:text-left">
          <p className="font-body text-sm text-paragraph mb-4">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight mb-6">
            <span className="text-title block">{t.hero.titleLine1}</span>
            <span className="text-[#3E7A4C] block">{t.hero.titleLine2}</span>
          </h1>
          <p className="font-body text-base text-paragraph max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            {t.hero.description}
          </p>
          <a
            href="#collection"
            className="inline-block font-button text-sm bg-button font-medium text-button-text cursor-pointer px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            {t.hero.cta}
          </a>
        </div>

        {/* Right: hero image */}
        <div className="relative h-[280px] sm:h-[340px] md:h-[420px] flex items-center justify-center">
          <div className="absolute w-100 h-95 -bottom-25 sm:-bottom-25 sm:w-134 sm:h-115 md:w-95 md:h-130 rounded-t-full bg-gradient-to-b from-10% from-[#9FCCA1] to-[#155F19] to-100%" />

          <div className="relative -bottom-16 left-6 sm:-bottom-16 sm:left-10 md:-bottom-25 lg:-bottom-20 w-90 h-90 sm:w-100 sm:h-120 md:w-130 md:h-140 lg:h-120 lg:w-150 z-10">
            <Image
              src="/img/OriginalBayongBags.png"
              alt="Bayong bag with round handle"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute -bottom-36 -left-8 sm:-bottom-55 sm:-left-8 md:-bottom-50 md:-left-30 w-80 h-80 sm:w-100 sm:h-120 md:w-130 md:h-120 z-20">
            <Image
              src="/img/BZ002-WHTE.png"
              alt="Round Bayong bag"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute -bottom-15 right-5 sm:-bottom-16 sm:right-10 md:-bottom-15 md:-right-5 w-30 h-30 sm:w-30 sm:h-30 md:w-31.5 md:h-30.5 rounded-full border border-title/20 overflow-hidden z-30 shadow-sm">
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