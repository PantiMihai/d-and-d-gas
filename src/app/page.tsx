import { Button } from "@/components/ui/button";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LocationSection from "@/components/sections/LocationSection";
import FuelPricesSection from "@/components/sections/FuelPricesSection";
import ConvenienceStoreSection from "@/components/sections/ConvenienceStoreSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <Suspense fallback={<div className="h-screen w-full bg-background flex items-center justify-center">Loading...</div>}>
        <HeroSection />
      </Suspense>

      <div className="container mx-auto px-4">
        <AboutSection />
        <ServicesSection />
        <LocationSection />
        <FuelPricesSection />
        <ConvenienceStoreSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
