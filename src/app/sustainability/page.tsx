"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructureExplosion from "@/components/sustainability/StructureExplosion";
import KeyBenefitsGrid from "@/components/sustainability/KeyBenefitsGrid";
import InnovationResearch from "@/components/sustainability/InnovationResearch";
import { motion } from "framer-motion";

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#13262D] selection:bg-[#13262D] selection:text-white">
      {/* Top Navigation */}
      <Navbar activeItem="SUSTAINABILITY" />

      {/* SECTION 1: HERO / WHAT IS NEXTEAK? */}
      <section className="relative w-full overflow-hidden bg-[#13262D]">
        <div className="w-full">
          <img
            src="/images/sustainability/feature-banner.jpg"
            alt="Features — What is NEXTEAK? Responsibly Sourced Plantation Teak"
            className="w-full h-auto block select-none"
          />
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE STRUCTURE (EXPLODED WOOD & FILM SEPARATION) */}
      <StructureExplosion />

      {/* SECTION 3: KEY BENEFITS OF REVOTEAK (8 CARDS ON OCEAN) */}
      <KeyBenefitsGrid />

      {/* SECTION 4: INNOVATION & RESEARCH (MTEC SUPPORT) */}
      <InnovationResearch />

      {/* SECTION 5: HERITAGE SUPERYACHT CIRCULAR DECK BANNER */}
      <section className="relative w-full overflow-hidden bg-[#0A181E]">
        <img
          src="/images/sustainability/heritage-banner.jpg"
          alt="Inspired By Heritage. Built For Generations. Over 60 Years of Timber Expertise."
          className="w-full h-auto block select-none"
        />
      </section>

      {/* SECTION 6: BOTTOM OCEAN TEASER BANNER */}
      <section className="relative w-full overflow-hidden bg-[#0A181E]">
        <img
          src="/images/sustainability/bottom-banner.jpg"
          alt="NEXTEAK — Redefined Marine Decking"
          className="w-full h-auto block select-none"
        />
      </section>

      {/* SECTION 7: GLOBAL FOOTER */}
      <Footer />
    </main>
  );
}
