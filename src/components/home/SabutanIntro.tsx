"use client";

import { useLanguage } from "@/context/LanguageContext";

export function SabutanIntro() {
  const { t } = useLanguage();

  return (
    <section className="bg-brown">
      <div className="grid md:grid-cols-2 min-h-[420px]">
        <div className="flex flex-col justify-center px-8 ml-auto md:px-16 py-16">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-title leading-snug mb-6">
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

        <div className="relative min-h-[320px] md:min-h-full flex items-center justify-center bg-peach/40">
          <p className="font-body text-xs text-title/50">
            <img src="img/promotebag(1).png" alt="" />
          </p>
        </div>
      </div>
    </section>
  );
}