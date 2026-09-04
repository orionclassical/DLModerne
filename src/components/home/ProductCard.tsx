// src/components/home/ProductCard.tsx
import Image from "next/image";

type ProductCardProps = {
  name: string;
  imagePath: string;
  onView: () => void;
};

export function ProductCard({ name, imagePath, onView }: ProductCardProps) {
  return (
    <div className="flex-shrink-0 w-56 bg-brown rounded-xl p-4 flex flex-col items-center">
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image src={imagePath} alt={name} fill className="object-cover" />
      </div>
      <div>
        <button
          onClick={onView}
          className="font-button text-xs bg-button cursor-pointer text-button-text px-5 py-2 rounded-sm self-start hover:opacity-90 transition-opacity"
        >
          VIEW
        </button>
      </div>
    </div>
  );
}