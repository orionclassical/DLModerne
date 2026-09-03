// src/components/home/FeatureHighlights.tsx
import { Leaf, HandHeart, Palmtree, Star } from "lucide-react";

const features = [
  { icon: Leaf, label: "Natural materials from nature" },
  { icon: HandHeart, label: "Carefully crafted by experienced artisans" },
  { icon: Palmtree, label: "Authentic craftsmanship with cultural heritage" },
  { icon: Star, label: "Unique pieces for everyday life and special occasions" },
];

export function FeatureHighlights() {
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