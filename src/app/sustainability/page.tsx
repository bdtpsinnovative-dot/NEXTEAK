import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import SustainabilityHero from "@/components/sustainability-page/SustainabilityHero";
import OurApproach from "@/components/sustainability-page/OurApproach";
import EnvironmentalAttributes from "@/components/sustainability-page/EnvironmentalAttributes";
import VertexCycle from "@/components/sustainability-page/VertexCycle";
import SustainabilityBottomBanner from "@/components/sustainability-page/SustainabilityBottomBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sustainability — Sustainable Teak. A Better Future",
  description:
    "VERTEK is made from responsibly sourced plantation teak, promoting sustainable forestry, supporting local communities, and protecting our planet for future generations.",
  keywords: [
    "VERTEK Sustainability",
    "Sustainable Teak Decking",
    "Plantation Teak",
    "Circular Marine Decking",
    "Carbon Absorption Teak",
    "Traceable Sourcing Teak",
    "Eco Friendly Yacht Decking",
  ],
  openGraph: {
    title: "Sustainability — Sustainable Teak. A Better Future | VERTEK",
    description:
      "VERTEK is made from responsibly sourced plantation teak, promoting sustainable forestry, supporting local communities, and protecting our planet for future generations.",
    url: "https://vertekteak.com/sustainability",
    images: [
      {
        url: "https://vertekteak.com/images/brand/og-vertek.jpg",
        width: 1200,
        height: 630,
        alt: "VERTEK Sustainability — Sustainable Teak. A Better Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability — Sustainable Teak. A Better Future | VERTEK",
    description:
      "VERTEK is made from responsibly sourced plantation teak, promoting sustainable forestry, supporting local communities, and protecting our planet for future generations.",
    images: ["https://vertekteak.com/images/brand/og-vertek.jpg"],
  },
};

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#13262D] selection:bg-[#13262D] selection:text-white">
      {/* Top Navigation */}
      <Navbar activeItem="SUSTAINABILITY" />

      {/* SECTION 1: HERO / GROWN FOR A BRIGHTER TOMORROW */}
      <SustainabilityHero />

      {/* SECTION 2: OUR APPROACH / 4 PILLARS OF RESPONSIBLE SOURCING */}
      <OurApproach />

      {/* SECTION 3: ADDITIONAL ENVIRONMENTAL ATTRIBUTES */}
      <EnvironmentalAttributes />

      {/* SECTION 4: THE VERTEK CYCLE / 5-STEP CIRCULAR LIFECYCLE */}
      <VertexCycle />

      {/* SECTION 5: BOTTOM RIVER TEASER BANNER */}
      <SustainabilityBottomBanner />

      {/* Corporate Footer */}
      <Footer />
    </main>
  );
}
