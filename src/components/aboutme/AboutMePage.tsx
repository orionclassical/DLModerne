"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Leaf, Palette, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutMePage() {
  const { t } = useLanguage();

  return (
    <div id="aboutme" className="bg-light text-paragraph">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#F1FFE8] from-35% to-[#AAD3AB] to-100%">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="grid items-center gap-8 md:gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <h1 className="font-display text-3xl leading-tight text-title sm:text-5xl sm:leading-[0.95] md:text-6xl">
                {t.about.titleLine1}
                <span className="mt-2 block text-[#3E7A4C]">{t.about.titleLine2}</span>
              </h1>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center gap-2 bg-button px-4 py-3 text-center font-button text-[10px] tracking-[0.12em] text-button-text transition-opacity hover:opacity-90 sm:w-auto sm:px-6 sm:text-xs sm:tracking-[0.18em]"
                >
                  {t.about.backHome}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#story"
                  className="inline-flex w-full items-center justify-center border border-title/25 bg-white/60 px-4 py-3 text-center font-button text-[10px] tracking-[0.12em] text-title transition-colors hover:bg-white sm:w-auto sm:px-6 sm:text-xs sm:tracking-[0.18em]"
                >
                  {t.about.storyLink}
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-x-8 bottom-4 h-16 rounded-full bg-[#1E3A27]/10 blur-2xl" />
              <div className="relative w-full max-w-xl overflow-hidden rounded-[50rem] border border-title/10 bg-white/60 p-2 shadow-[0_25px_60px_rgba(30,58,39,0.12)] backdrop-blur-sm sm:p-3">
                <div className="relative h-[280px] overflow-hidden rounded-[50rem] sm:h-[360px] md:h-[455px]">
                  <Image
                    src="/img/logo.jpg"
                    alt={t.about.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-18 md:pt-18">
        <div className="mb-6 text-center sm:mb-10">

          <h2 className="mt-4 font-title font-display text-2xl font-bold text-title sm:text-xl md:text-2xl">
            {t.about.heading}
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="mx-0 rounded-[1.5rem] sm:mx-8 md:mx-55">
            {t.about.story.map((paragraph) => (
            <div
              key={paragraph}
            >
              <p className="text-center font-body text-base leading-relaxed text-paragraph/85 sm:text-lg md:text-xl">
                <span className="block h-3 sm:h-4" aria-hidden="true" />
                {paragraph}
              </p>
            </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-18 md:pb-24">
        <div className="rounded-[2rem] bg-brown p-5 text-center text-button-text sm:p-8 md:p-14">
          <p className="font-button text-[10px] tracking-[0.16em] text-title sm:text-xs sm:tracking-[0.26em]">{t.about.journeyLabel}</p>
          <h2 className="mt-4 text-2xl leading-tight text-title font-display sm:text-4xl md:text-5xl">
            {t.about.journeyHeading}
          </h2>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Link
              href="/collection"
              className="inline-flex w-full items-center justify-center border border-white/30 bg-button px-4 py-3 text-center font-button text-[10px] tracking-[0.12em] transition-colors sm:w-auto sm:px-6 sm:text-xs sm:tracking-[0.18em]"
            >
              {t.about.exploreCollection}
            </Link>
            {/* <a
              href="#top"
              className="inline-flex items-center bg-button justify-center border border-white/30 px-6 py-3 font-button text-xs tracking-[0.18em] transition-colors"
            >
              BACK TO TOP
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
