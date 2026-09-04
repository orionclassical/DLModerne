// src/components/materials/MaterialsList.tsx
"use client";

import { MaterialRow } from "./MaterialRow";
import { useLanguage } from "@/context/LanguageContext";

export function MaterialsList() {
  const { t } = useLanguage();

  const materials = [
    {
      name: t.materialsSection.pandanName,
      description: t.materialsSection.pandanDesc,
      imagePath: "/img/materials-pandanleaves.png",
      imagePosition: "right" as const,
    },
    {
      name: t.materialsSection.sabutanName,
      description: t.materialsSection.sabutanDesc,
      imagePath: "/img/materials-sabutan.png",
      imagePosition: "left" as const,
    },
    {
      name: t.materialsSection.rattanName,
      description: t.materialsSection.rattanDesc,
      imagePath: "/img/materials-rattan.png",
      imagePosition: "right" as const,
    },
    {
      name: t.materialsSection.buntalName,
      description: t.materialsSection.buntalDesc,
      imagePath: "/img/materials-buntal.png",
      imagePosition: "left" as const,
    },
  ];

  return (
    <section id="materials" className="scroll-mt-15 px-15 bg-light py-20">
      <div className="text-center mb-14 px-6">
        <h2 className="font-display font-bold text-3xl text-title mb-4">
          {t.materialsSection.heading1}
          <br />
          {t.materialsSection.heading2}
        </h2>
        <p className="font-body text-sm text-paragraph">
          {t.materialsSection.description}
        </p>
      </div>

      <div className="mx-auto max-w-4xl flex flex-col gap-10">
        {materials.map((material) => (
          <MaterialRow key={material.name} {...material} />
        ))}
      </div>
    </section>
  );
}