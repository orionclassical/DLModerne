// src/components/home/Hero.tsx
export function Hero() {
  return (
    <section id="hero" className="scroll-mt-50 relative bg-gradient-to-br from-hero-mint to-cream overflow-hidden">
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
          <button className="font-button text-sm bg-button font-medium text-button-text cursor-pointer px-6 py-3 rounded-sm hover:opacity-90 transition-opacity">
            DISCOVER MORE
          </button>
        </div>

        {/* Right: hero image with placeholder */}
        <div className="relative h-[420px] flex items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full bg-[#5C9468]/40" />
          
          {/* PLACEHOLDER — replace with your hero bag image */}
          <div className="relative w-64 h-80 border-2 border-dashed border-title/40 rounded-lg flex items-center justify-center bg-white/60 z-10">
            <p className="font-body text-xs text-title/60 text-center px-4">
              Insert: /public/images/hero-bag.png
            </p>
          </div>

          {/* Badge logo overlapping bottom-right */}
          <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white border border-title/20 flex items-center justify-center z-20 shadow-sm">
            <span className="font-display text-[10px] text-title text-center leading-tight">
              DL<br />Moderne
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}