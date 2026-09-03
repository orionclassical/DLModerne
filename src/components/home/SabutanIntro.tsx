// src/components/materials/SabutanIntro.tsx
export function SabutanIntro() {
  return (
    <section className="bg-brown">
      <div className="grid md:grid-cols-2 min-h-[420px]">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-title leading-snug mb-6">
            Handwoven from Sabutan.
            <br />
            Modern in design.
          </h1>
          <p className="font-body text-sm text-paragraph max-w-sm leading-relaxed mb-8">
            Our Sabutan bag combines traditional Philippine craftsmanship
            with modern design. Lightweight, durable, and stylish — for
            every day and every occasion.
          </p>
          <button className="font-button text-xs cursor-pointer bg-button text-button-text px-6 py-3 rounded-sm w-fit hover:opacity-90 transition-opacity">
            CHECK IT OUT
          </button>
        </div>

        {/* Right: image placeholder */}
        <div className="relative min-h-[320px] md:min-h-full flex items-center justify-center bg-peach/40">
          <p className="font-body text-xs text-title/50">
            <img src="img/promotebag(1).png" alt=""/>
          </p>
        </div>
      </div>
    </section>
  );
}