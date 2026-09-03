// src/components/materials/MaterialRow.tsx
import Image from "next/image";

type MaterialRowProps = {
  name: string;
  description: string;
  imagePath: string;
  imagePosition: "left" | "right";
};

export function MaterialRow({
  name,
  description,
  imagePath,
  imagePosition,
}: MaterialRowProps) {
  const textBlock = (
    <div className="bg-brown flex flex-col justify-center items-center text-center px-8 py-16 min-h-[220px]">
      <h3 className="font-display text-2xl font-bold text-title mb-4">{name}</h3>
      <p className="font-body text-sm text-paragraph max-w-xs leading-relaxed">
        {description}
      </p>
    </div>
  );

  const imageBlock = (
    <div className="relative min-h-[220px] w-full overflow-hidden">
      <Image
        src={imagePath}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  return (
    <div className="grid md:grid-cols-2">
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}