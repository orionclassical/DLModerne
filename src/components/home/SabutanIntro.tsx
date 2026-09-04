"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function SabutanIntro() {
  const { t } = useLanguage();

  return (
    <section className="bg-brown">
      <div className="grid md:grid-cols-2 md:h-150">
        <div className="flex flex-col justify-center items-center md:items-start px-6 sm:px-8 md:px-16 py-12 md:py-16 text-center md:text-left md:ml-auto">
          <h1 className="font-display font-bold text-2xl md:text-4xl text-title leading-snug mb-6">
            {t.sabutanIntro.heading1}
            <br />
            {t.sabutanIntro.heading2}
          </h1>
          <p className="font-body text-sm text-paragraph max-w-sm leading-relaxed mb-8">
            {t.sabutanIntro.description}
          </p>
          <button className="font-button text-xs cursor-pointer bg-button text-button-text px-6 py-3 rounded-sm w-fit hover:opacity-90 transition-opacity">
            {t.sabutanIntro.cta}
          </button>
        </div>

        <div className="relative h-72 sm:h-96 md:h-full bg-peach/40">
          <Image
            src="/img/promotebag(1).png"
            alt="Sabutan bayong bag"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}