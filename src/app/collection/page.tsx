import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCollection } from "@/components/collection/ProductCollection";

export default function CollectionPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px] bg-light">
        <ProductCollection />
      </main>
      <Footer />
    </>
  );
}
