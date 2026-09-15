import { ProductDetail } from "@/components/collection/ProductDetail";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((product) => ({ code: product.code }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  return (
    <>
      <Header />
      <main className="pt-[72px] bg-light">
        <ProductDetail code={code} />
      </main>
      <Footer />
    </>
  );
}
