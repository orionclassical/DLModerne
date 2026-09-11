import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutMePage } from "@/components/aboutme/AboutMePage";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <AboutMePage />
      </main>
      <Footer />
    </>
  );
}
