import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HistorySection } from "@/components/HistorySection";
import { ProductsSection } from "@/components/ProductsSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Header />
    <main>
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <ProductsSection />
  <DifferentialsSection />
        <GallerySection />
        <ContactSection />
    </main>
      <Footer />
      <WhatsAppButton />
   </>
  );
}
