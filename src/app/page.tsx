// src/app/page.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ShopByStyle } from "@/components/home/ShopByStyle";
import { SabutanIntro } from "@/components/home/SabutanIntro";
import { MaterialsList } from "@/components/home/MaterialsList";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureHighlights />
      <ShopByStyle />
      <SabutanIntro />
      <MaterialsList />
      <ContactSection />
      <Footer />
    </>
  );
}