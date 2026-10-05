import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import SustainabilityHero from "@/components/sustainability-page/SustainabilityHero";
import OurApproach from "@/components/sustainability-page/OurApproach";
import VertexCycle from "@/components/sustainability-page/VertexCycle";
import ComparisonTable from "@/components/sustainability-page/ComparisonTable";
import SustainabilityBottomBanner from "@/components/sustainability-page/SustainabilityBottomBanner";

export const metadata: Metadata = {
  title: "Sustainability — Grown For a Brighter Tomorrow",
  description:
    "VERTEX is made from responsibly sourced plantation teak, supporting sustainable forestry, local communities, carbon absorption, and circular lifecycle engineering.",
  keywords: [
    "VERTEX Sustainability",
    "Sustainable Teak Decking",
    "Plantation Teak",
    "Circular Marine Decking",
    "Carbon Absorption Teak",
    "Traceable Sourcing Teak",
    "Eco Friendly Yacht Decking",
  ],
  openGraph: {
    title: "Sustainability — Grown For a Brighter Tomorrow | VERTEX",
    description:
      "VERTEX is made from responsibly sourced plantation teak, supporting sustainable forestry, local communities, and a healthier planet.",
    images: [
      {
        url: "/images/sustainability/page3/sustainability-hero.webp",
        width: 2560,
        height: 900,
        alt: "VERTEX Sustainability — Grown For a Brighter Tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability — Grown For a Brighter Tomorrow | VERTEX",
    description:
      "Responsibly sourced plantation teak, carbon absorption, and circular marine decking engineering.",
    images: ["/images/sustainability/page3/sustainability-hero.webp"],
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

      {/* SECTION 3: THE VERTEX CYCLE / 5-STEP CIRCULAR LIFECYCLE */}
      <VertexCycle />

      {/* SECTION 4: TRADITIONAL DECKING VS VERTEX & MARINE PERFORMANCE */}
      <ComparisonTable />

      {/* SECTION 5: BOTTOM RIVER TEASER BANNER */}
      <SustainabilityBottomBanner />
    </main>
  );
}
