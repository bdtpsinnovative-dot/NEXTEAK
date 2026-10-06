import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import FeatureBanner from "@/components/sustainability/FeatureBanner";
import StructureExplosion from "@/components/sustainability/StructureExplosion";
import KeyBenefitsGrid from "@/components/sustainability/KeyBenefitsGrid";
import InnovationResearch from "@/components/sustainability/InnovationResearch";
import HeritageBanner from "@/components/sustainability/HeritageBanner";
import BottomBanner from "@/components/sustainability/BottomBanner";

export const metadata: Metadata = {
  title: "Products & Innovation",
  description:
    "Discover VERTEX luxury marine decking solutions, precision thin-veneer structure engineering, plantation-grown traceable teak, and advanced materials.",
  openGraph: {
    title: "VERTEX Products & Marine Decking Innovation",
    description:
      "Discover VERTEX luxury marine decking solutions, precision thin-veneer structure engineering, plantation-grown traceable teak, and advanced materials.",
    images: [
      {
        url: "/images/sustainability/feature-banner-bg.webp",
        width: 2560,
        height: 909,
        alt: "VERTEX Luxury Marine Teak Deck",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#13262D] selection:bg-[#13262D] selection:text-white">
      {/* Top Navigation */}
      <Navbar activeItem="PRODUCTS" />

      {/* SECTION 1: HERO / WHAT IS VERTEX? (LAYER-SEPARATED & ANIMATED) */}
      <FeatureBanner />

      {/* SECTION 2: INTERACTIVE STRUCTURE (EXPLODED WOOD & FILM SEPARATION) */}
      <StructureExplosion />

      {/* SECTION 3: KEY BENEFITS OF VERTEX (8 INTERACTIVE CARDS ON OCEAN) */}
      <KeyBenefitsGrid />

      {/* SECTION 4: INNOVATION & RESEARCH (MTEC SUPPORT) */}
      <InnovationResearch />

      {/* SECTION 5: HERITAGE SUPERYACHT CIRCULAR DECK BANNER (LIVE TYPOGRAPHY) */}
      <HeritageBanner />

      {/* SECTION 6: BOTTOM OCEAN TEASER BANNER (5.แถบล่างสุด) */}
      <BottomBanner />
    </main>
  );
}
