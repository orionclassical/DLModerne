"use client";

import { Leaf, HandHeart, Palmtree, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function FeatureHighlights() {
  const { t } = useLanguage();

  const features = [
    { icon: Leaf, label: t.features.natural },
    { icon: HandHeart, label: t.features.crafted },
    { icon: Palmtree, label: t.features.authentic },
    { icon: Star, label: t.features.unique },
  ];

  return (
    <section className="bg-brown py-14">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-3">
            <Icon className="w-6 h-6 font-bold text-title" strokeWidth={1.5} />
            <p className="font-body text-title text-sm max-w-[160px]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}