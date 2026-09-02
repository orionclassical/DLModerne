// src/components/home/ProductCard.tsx
type ProductCardProps = {
  name: string;
  imagePath: string; // e.g. "/images/products/product-1.png"
};

export function ProductCard({ name, imagePath }: ProductCardProps) {
  return (
    <div className="flex-shrink-0 w-56 bg-brown rounded-xl p-4 flex flex-col items-center">
      <div className="w-full h-48 border-2 border-dashed border-title/30 rounded-lg flex items-center justify-center bg-white/50 mb-4">
        <p className="font-body text-xs text-title/50 text-center px-3">
          Insert: {imagePath}
        </p>
      </div>
      <button className="font-button text-xs bg-button text-button-text px-5 py-2 rounded-sm self-start hover:opacity-90 transition-opacity">
        View
      </button>
    </div>
  );
}