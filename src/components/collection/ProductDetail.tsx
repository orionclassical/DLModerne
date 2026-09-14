"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, X } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";

type ProductDetailProps = {
  code: string;
};

export function ProductDetail({ code }: ProductDetailProps) {
  const variants = useMemo(
    () => products.filter((product) => product.code === code),
    [code]
  );

  const recipientEmail = "orionclassical@gmail.com";

  const [selectedVariantName, setSelectedVariantName] = useState<string>(
    variants[0]?.name ?? ""
  );
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const selectedVariant =
    variants.find((product) => product.name === selectedVariantName) ?? variants[0];

  const handleInputChange = (
    field: "name" | "email" | "message",
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendEmail = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const subject = encodeURIComponent(
      `Inquiry about the bag (${selectedVariant.code})`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProduct: ${selectedVariant.name} (${selectedVariant.code})\nColor: ${selectedVariant.color}\nMaterial: ${selectedVariant.material}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setFormData((prev) => ({ ...prev, message: "" }));
    setIsContactOpen(false);
    setIsSuccessOpen(true);

    window.setTimeout(() => {
      setIsSuccessOpen(false);
    }, 1800);
  };

  if (!selectedVariant) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Link
          href="/collection"
          className="inline-flex items-center gap-2 rounded-full border border-title/15 bg-light px-3 py-2 font-button text-[10px] tracking-[0.18em] uppercase text-title transition-colors hover:bg-brown"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to collection
        </Link>

        <p className="font-button text-[10px] tracking-[0.2em] uppercase text-title/70">
          {variants.length} styles available
        </p>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-title/10 bg-light shadow-[0_24px_60px_rgba(18,38,28,0.06)]">
        <div className="grid gap-6 bg-brown/40 p-4 sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
          <div className="rounded-[1.5rem] bg-[#f4f4f4] p-3 sm:p-5">
            <div className="relative h-[360px] w-full overflow-hidden rounded-[1.25rem] bg-[#f7f7f7] sm:h-[420px] lg:h-[520px]">
              <Image
                src={selectedVariant.imagePath}
                alt={selectedVariant.name}
                fill
                className="object-contain p-6"
              />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
              {variants.map((variant) => (
                <button
                  key={variant.name}
                  type="button"
                  onClick={() => setSelectedVariantName(variant.name)}
                  className={`overflow-hidden rounded-xl border transition-all ${
                    selectedVariant.name === variant.name
                      ? "border-title bg-light shadow-md"
                      : "border-title/15 bg-white/70 hover:border-title/50"
                  }`}
                >
                  <div className="relative h-20 w-full bg-brown">
                    <Image
                      src={variant.imagePath}
                      alt={variant.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[1.5rem] bg-light p-4 sm:p-5">
            <div className="mb-4 border-b border-title/10 pb-4">
              <p className="font-button text-[10px] tracking-[0.25em] uppercase text-title/65">
                {selectedVariant.code}
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold text-title leading-none sm:text-5xl">
                {selectedVariant.name}
              </h1>
            </div>

            <div className="flex items-center justify-between gap-3 pb-4">
              <div>
                <p className="font-button text-[10px] tracking-[0.18em] uppercase text-title/65">
                  Price
                </p>
                <div className="mt-1 flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-title">
                    {selectedVariant.price}
                  </span>
                  {/* <span className="font-body text-sm text-paragraph/60 line-through">
                    €49.99
                  </span> */}
                </div>
              </div>

              {/* <span className="rounded-full bg-[#e85d5d] px-3 py-1.5 font-button text-[10px] tracking-[0.18em] uppercase text-white">
                Save 30%
              </span> */}
            </div>

            <div className="space-y-3 border-b border-title/10 pb-5 font-body text-base text-paragraph">
              <p>
                <span className="font-button text-[10px] tracking-[0.18em] uppercase text-title/70 mr-2">
                  Material
                </span>
                {selectedVariant.material}
              </p>
              <p>
                <span className="font-button text-[10px] tracking-[0.18em] uppercase text-title/70 mr-2">
                  Size
                </span>
                {selectedVariant.size}
              </p>
              <p>
                <span className="font-button text-[10px] tracking-[0.18em] uppercase text-title/70 mr-2">
                  Color
                </span>
                {selectedVariant.color}
              </p>
            </div>

            <div className="mt-5">
              <p className="mb-3 font-button text-[10px] tracking-[0.2em] uppercase text-title/70">
                Available styles
              </p>

              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <button
                    key={`${variant.name}-style`}
                    type="button"
                    onClick={() => setSelectedVariantName(variant.name)}
                    className={`rounded-full border px-3 py-2 text-xs transition-all ${
                      selectedVariant.name === variant.name
                        ? "border-title bg-title text-white"
                        : "border-title/15 bg-brown/40 text-title hover:border-title/50"
                    }`}
                  >
                    {variant.color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[1.25rem] bg-[#0d1e18] p-4 text-white">
              <p className="font-button text-[10px] tracking-[0.24em] uppercase text-white/70">
                Contact us
              </p>
              <div className="mt-3 space-y-3">
                <a
                  href={`mailto:${recipientEmail}`}
                  className="flex items-center gap-2 font-body text-sm text-white/90 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {recipientEmail}
                </a>
                <a
                  href="tel:+4915510305340"
                  className="flex items-center gap-2 font-body text-sm text-white/90 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  +49 155 10305340
                </a>
              </div>
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="mt-4 inline-flex w-full items-center cursor-pointer justify-center rounded-sm bg-white px-4 py-3 font-button text-[10px] tracking-[0.2em] uppercase text-title transition-opacity hover:opacity-90"
              >
                Secure your bag now
              </button>
            </div>
          </div>
        </div>
      </div>

      {isSuccessOpen && (
        <div className="fixed inset-x-0 top-5 z-[60] flex justify-center px-4">
          <div className="animate-[fadeIn_0.2s_ease-out,fadeOut_0.8s_ease-in_1s_forwards] rounded-full border border-green-200 bg-green-100 px-5 py-3 shadow-lg">
            <p className="font-button text-xs tracking-[0.18em] uppercase text-green-800">
              Message sent
            </p>
          </div>
        </div>
      )}

      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-3 sm:p-4"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="relative w-full max-w-xl rounded-[1.5rem] border border-black/10 bg-[#f3f3f3] p-4 shadow-2xl sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              aria-label="Close contact form"
              className="cursor-pointer absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-title/15 bg-light text-title transition-colors hover:bg-brown"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-4 pt-2">
              <p className="font-display text-3xl font-bold leading-none text-title sm:text-4xl">
                Write me.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="mb-2 block font-body text-base text-title sm:text-lg">
                  Name <span className="text-[#d66969]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => handleInputChange("name", event.target.value)}
                  className="w-full rounded-none border border-title/30 bg-transparent px-3 py-2.5 text-base text-paragraph outline-none transition focus:border-title sm:py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-body text-base text-title sm:text-lg">
                  E-mail <span className="text-[#d66969]">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => handleInputChange("email", event.target.value)}
                  className="w-full rounded-none border border-title/30 bg-transparent px-3 py-2.5 text-base text-paragraph outline-none transition focus:border-title sm:py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-body text-base text-title sm:text-lg">
                  Your message for me <span className="text-[#d66969]">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(event) => handleInputChange("message", event.target.value)}
                  rows={6}
                  className="w-full rounded-none border border-title/30 bg-transparent px-3 py-2.5 text-base text-paragraph outline-none transition focus:border-title sm:py-3"
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-5">
              <button
                type="button"
                onClick={handleSendEmail}
                className="w-full rounded-[0.9rem] bg-[#171717] cursor-pointer px-4 py-3 font-button text-l uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90 sm:py-4 sm:text-l"
              >
                send
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
