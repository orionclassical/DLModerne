import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Leaf, Palette, Sparkles } from "lucide-react";

const storyHighlights = [
  {
    icon: Sparkles,
    title: "Crafted with intention",
    description:
      "Each DL Moderne piece is designed to celebrate the beauty of natural fibers while feeling modern, elegant, and easy to wear.",
  },
  {
    icon: Leaf,
    title: "Rooted in Filipino tradition",
    description:
      "Inspired by the artistry of sabutan, pandan, banig, and rattan, we bring heritage craftsmanship into contemporary everyday pieces.",
  },
  {
    icon: Palette,
    title: "Thoughtful design language",
    description:
      "Our bags are shaped by clean silhouettes, comforting textures, and a calm palette that lets craftsmanship stand out.",
  },
];

const processSteps = [
  "We source natural materials with care and respect for where they come from.",
  "Every piece is handwoven and refined by skilled artisans with generations of knowledge.",
  "We finish each bag with modern detailing so it feels timeless yet practical.",
];

const stats = [
  { value: "100%", label: "natural-inspired design" },
  { value: "4", label: "signature materials" },
  { value: "1", label: "story behind every piece" },
];

export function AboutMePage() {
  return (
    <div id="aboutme" className="bg-light text-paragraph">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDFB] via-[#FFF4E9] to-[#D8E8D2]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <p className="mb-4 font-button text-xs tracking-[0.24em] text-title/80">
                ABOUT DL MODERNE
              </p>
              <h1 className="font-display text-4xl text-title sm:text-5xl md:text-6xl leading-[0.95]">
                Tradition, craftsmanship,
                <span className="mt-2 block text-[#3E7A4C]">and a modern point of view.</span>
              </h1>
              <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-paragraph/90">
                DL Moderne is a Bayong collection inspired by Filipino weaving traditions and reimagined for modern living. We create pieces that feel warm, authentic, and beautifully useful — made to accompany everyday moments with intention.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-button px-6 py-3 font-button text-xs tracking-[0.18em] text-button-text transition-opacity hover:opacity-90"
                >
                  BACK TO HOME
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#story"
                  className="inline-flex items-center justify-center border border-title/25 bg-white/60 px-6 py-3 font-button text-xs tracking-[0.18em] text-title transition-colors hover:bg-white"
                >
                  OUR STORY
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-x-8 bottom-4 h-16 rounded-full bg-[#1E3A27]/10 blur-2xl" />
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-title/10 bg-white/60 p-3 shadow-[0_25px_60px_rgba(30,58,39,0.12)] backdrop-blur-sm">
                <div className="relative h-[420px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/img/OriginalBayongBags.png"
                    alt="DL Moderne bag collection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl px-4 py-18 sm:px-6 md:py-24">
        <div className="mb-10 text-center">
          <p className="font-button text-xs tracking-[0.26em] text-title/70">WHY WE EXIST</p>
          <h2 className="mt-4 font-display text-3xl text-title sm:text-4xl md:text-5xl">
            A collection shaped by heritage.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {storyHighlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[1.5rem] border border-title/10 bg-white p-6 shadow-[0_18px_36px_rgba(19,46,29,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#132E1D] text-button-text">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 font-display text-2xl text-title">{title}</h3>
              <p className="font-body text-base leading-relaxed text-paragraph/85">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1E3A27] py-18 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#FFFDFB]">
            <Image
              src="/img/logo.jpg"
              alt="DL Moderne logo"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-white">
            <p className="font-button text-xs tracking-[0.24em] text-white/70">OUR APPROACH</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              Beautiful bags, rooted in care and meaning.
            </h2>
            <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-white/85">
              At DL Moderne, every bag is more than a product. It is an expression of craftsmanship, a tribute to handmade tradition, and a reminder that beautiful design can also carry culture, patience, and purpose.
            </p>

            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0D7BE] font-button text-xs font-bold text-[#132E1D]">
                    0{index + 1}
                  </div>
                  <p className="font-body text-base leading-relaxed text-white/85">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-18 sm:px-6 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-title/10 bg-[#FFF4E9] p-8 text-center">
              <p className="font-display text-4xl text-title">{stat.value}</p>
              <p className="mt-2 font-button text-xs tracking-[0.18em] text-title/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-title/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="font-button text-xs tracking-[0.24em] text-title/75">WHAT WE VALUE</p>
              <h2 className="mt-4 font-display text-3xl text-title sm:text-4xl">
                Thoughtful pieces for real life.
              </h2>
            </div>
            <div className="flex items-center gap-3 text-title">
              <HeartHandshake className="h-5 w-5" />
              <span className="font-button text-xs tracking-[0.18em]">
                Made with love from the Philippines
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-18 sm:px-6 md:py-24">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#132E1D] to-[#1E3A27] p-8 text-center text-button-text md:p-14">
          <p className="font-button text-xs tracking-[0.26em] text-white/70">START YOUR JOURNEY</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Discover a collection that speaks with warmth and character.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white px-6 py-3 font-button text-xs tracking-[0.18em] text-title transition-opacity hover:opacity-90"
            >
              EXPLORE COLLECTION
            </Link>
            <a
              href="#top"
              className="inline-flex items-center justify-center border border-white/30 px-6 py-3 font-button text-xs tracking-[0.18em] text-white transition-colors hover:bg-white/5"
            >
              BACK TO TOP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
