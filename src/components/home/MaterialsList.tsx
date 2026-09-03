// src/components/materials/MaterialsList.tsx
import { MaterialRow } from "./MaterialRow";


const materials = [
  {
    name: "Pandan",
    description:
      "Pandan is a natural leaf with a beautiful texture and flexibility. It is dried and dyed to create durable and stylish weave patterns.",
    imagePath: "/img/materials-pandanleaves.png",
    imagePosition: "right" as const,
  },
  {
    name: "Sabutan",
    description:
      "Sabutan is a fine variety of Pandan known for its strength and smooth texture. Handcrafted to create a robust, lightweight, and sustainable structure.",
    imagePath: "/img/materials-sabutan.png",
    imagePosition: "left" as const,
  },
  {
    name: "Rattan",
    description:
      "Rattan is known for its strength and flexibility. It gives our bags shape, stability, and a natural look.",
    imagePath: "/img/materials-rattan.png",
    imagePosition: "right" as const,
  },
  {
    name: "Buntal",
    description:
      "Buntal is a fine, natural fiber with a gentle sheen. It provides elegant details and a particularly refined finish.",
    imagePath: "/img/materials-buntal.png",
    imagePosition: "left" as const,
  },
];

export function MaterialsList() {
  return (
    <section id="materials" className="scroll-mt-15 bg-light py-20">
      <div className="text-center mb-14 px-6">
        <h2 className="font-display font-bold text-3xl text-title mb-4">
          Our Materials — Natural.
          <br />
          Genuine Craftsmanship.
        </h2>
        <p className="font-body text-sm text-paragraph">
          Every fiber tells a story. Discover the natural materials that
          make our bags unique.
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