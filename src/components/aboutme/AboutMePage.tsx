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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <h1 className="font-display text-4xl text-title sm:text-5xl md:text-6xl leading-[0.95]">
                {t.about.titleLine1}
                <span className="mt-2 block text-[#3E7A4C]">{t.about.titleLine2}</span>
              </h1>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-button px-6 py-3 font-button text-xs tracking-[0.18em] text-button-text transition-opacity hover:opacity-90"
                >
                  {t.about.backHome}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#story"
                  className="inline-flex items-center justify-center border border-title/25 bg-white/60 px-6 py-3 font-button text-xs tracking-[0.18em] text-title transition-colors hover:bg-white"
                >
                  {t.about.storyLink}
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-x-8 bottom-4 h-16 rounded-full bg-[#1E3A27]/10 blur-2xl" />
              <div className="relative w-full max-w-xl overflow-hidden rounded-[50rem] border border-title/10 bg-white/60 p-3 shadow-[0_25px_60px_rgba(30,58,39,0.12)] backdrop-blur-sm">
                <div className="relative h-[455px] overflow-hidden rounded-[50rem]">
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

      <section id="story" className="mx-auto max-w-6xl px-4 pt-18 sm:px-6 md:pt-18">
        <div className="mb-10 text-center">

          <h2 className="font-bold font-title mt-4 font-display text-2xl text-title sm:text-xl md:text-2xl">
            {t.about.heading}
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[1.5rem] mx-55">
            {t.about.story.map((paragraph) => (
            <div
              key={paragraph}
            >
              <p className="font-body text-xl leading-relaxed text-paragraph/85 text-center">
                <br />
                {paragraph}
              </p>
            </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 pb-18 sm:px-6 md:pb-24">
        <div className="rounded-[2rem] bg-brown p-8 text-center text-button-text md:p-14">
          <p className="font-button text-xs tracking-[0.26em] text-title">{t.about.journeyLabel}</p>
          <h2 className="mt-4 text-title font-display text-3xl sm:text-4xl md:text-5xl">
            {t.about.journeyHeading}
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/collection"
              className="inline-flex items-center bg-button justify-center border border-white/30 px-6 py-3 font-button text-xs tracking-[0.18em] transition-colors"
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
