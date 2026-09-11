import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Leaf, Palette, Sparkles } from "lucide-react";

const storyHighlights = [
  {
    description_1:
      "I love discovering and collecting unique, beautiful, and traditionally handcrafted woven bags from the Philippines. Each piece is carefully handmade by skilled Filipino artisans using natural materials such as Sabutan, Buntal fiber, Pandan leaves, and Rattan.",
    description_2:
      "My collection brings together traditional Filipino craftsmanship and modern, stylish designs. Every bag has its own character and tells a story of Filipino artistry, culture, and tradition.",
    description_3:
      "I created this shop to share these beautiful handmade treasures with you and to celebrate the timeless craftsmanship of the Philippines. Handmade in the Philippines. Collected with love.",
  }
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
              <h1 className="font-display text-4xl text-title sm:text-5xl md:text-6xl leading-[0.95]">
                Tradition, craftsmanship,
                <span className="mt-2 block text-[#3E7A4C]">and a modern point of view.</span>
              </h1>
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

      <section id="story" className="mx-auto max-w-6xl px-4 pt-18 sm:px-6 md:pt-18">
        <div className="mb-10 text-center">

          <h2 className="font-bold font-title mt-4 font-display text-2xl text-title sm:text-xl md:text-2xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-6">
          {storyHighlights.map(({description_1, description_2, description_3 }) => (
            <article
            //   key={title}
              className="rounded-[1.5rem] mx-55"
            >
              {/* <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#132E1D] text-button-text">
                <Icon className="h-5 w-5" />
              </div> */}
              <h3 className="mb-3 font-display text-xl text-center text-title">
                {/* {title} */}
              </h3>
              <p className="font-body text-xl leading-relaxed text-paragraph/85 text-center">
                {description_1}
              </p>
              <p className="font-body text-xl leading-relaxed text-paragraph/85 text-center">
                <br />
                {description_2}
              </p>
              <p className="font-body text-xl leading-relaxed text-paragraph/85 text-center">
                <br />
                {description_3}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 pb-18 sm:px-6 md:pb-24">
        <div className="rounded-[2rem] bg-brown p-8 text-center text-button-text md:p-14">
          <p className="font-button text-xs tracking-[0.26em] text-title">START YOUR JOURNEY</p>
          <h2 className="mt-4 text-title font-display text-3xl sm:text-4xl md:text-5xl">
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
              className="inline-flex items-center bg-button justify-center border border-white/30 px-6 py-3 font-button text-xs tracking-[0.18em] transition-colors"
            >
              BACK TO TOP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
