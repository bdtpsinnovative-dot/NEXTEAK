import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import FeatureBanner from "@/components/sustainability/FeatureBanner";
import StructureExplosion from "@/components/sustainability/StructureExplosion";
import KeyBenefitsGrid from "@/components/sustainability/KeyBenefitsGrid";
import InnovationResearch from "@/components/sustainability/InnovationResearch";
import BottomBanner from "@/components/sustainability/BottomBanner";

export const metadata: Metadata = {
  title: "Products & Innovation",
  description:
    "Discover NEXTEAK luxury marine decking solutions, precision thin-veneer structure engineering, plantation-grown traceable teak, and advanced materials.",
  openGraph: {
    title: "NEXTEAK Products & Marine Decking Innovation",
    description:
      "Discover NEXTEAK luxury marine decking solutions, precision thin-veneer structure engineering, plantation-grown traceable teak, and advanced materials.",
    images: [
      {
        url: "/images/sustainability/feature-banner-bg.webp",
        width: 2560,
        height: 909,
        alt: "NEXTEAK Luxury Marine Teak Deck",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#13262D] selection:bg-[#13262D] selection:text-white">
      {/* Top Navigation */}
      <Navbar activeItem="PRODUCTS" />

      {/* SECTION 1: HERO / WHAT IS NEXTEAK? (LAYER-SEPARATED & ANIMATED) */}
      <FeatureBanner />

      {/* SECTION 2: INTERACTIVE STRUCTURE (EXPLODED WOOD & FILM SEPARATION) */}
      <StructureExplosion />

      {/* SECTION 3: KEY BENEFITS OF REVOTEAK (8 INTERACTIVE CARDS ON OCEAN) */}
      <KeyBenefitsGrid />

      {/* SECTION 4: INNOVATION & RESEARCH (MTEC SUPPORT) */}
      <InnovationResearch />

      {/* SECTION 5: HERITAGE SUPERYACHT CIRCULAR DECK BANNER */}
      <section className="relative w-full overflow-hidden bg-[#0A181E]">
        <img
          src="/images/sustainability/heritage-banner.webp"
          alt="Inspired By Heritage. Built For Generations. Over 60 Years of Timber Expertise."
          className="w-full h-auto block select-none"
          loading="lazy"
        />
      </section>

      {/* SECTION 6: BOTTOM OCEAN TEASER BANNER (5.แถบล่างสุด) */}
      <BottomBanner />
    </main>
  );
}
