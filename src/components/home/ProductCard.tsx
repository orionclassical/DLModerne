import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  imagePath: string;
  viewLabel: string;
};

export function ProductCard({ name, imagePath, viewLabel }: ProductCardProps) {
  return (
    <div className="flex-shrink-0 w-56 bg-light border border-black/20 rounded-xl p-4 flex flex-col items-center">
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image src={imagePath} alt={name} fill className="object-cover" />
      </div>
      <div>
        <Link
              href={`/collection/${encodeURIComponent(name)}`}
              className="">
          <button
            className="font-button text-xs bg-button cursor-pointer text-button-text px-5 py-2 rounded-sm self-start hover:opacity-90 transition-opacity"
          >
            VIEW
          </button>
        </Link>
      </div>
    </div>
  );
}