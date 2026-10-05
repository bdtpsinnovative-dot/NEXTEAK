"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const COMPARISON_ROWS = [
  {
    feature: "TREE AGE",
    traditional: "80 YEARS +",
    revoteak: "30 YEARS +",
    highlight: true,
  },
  {
    feature: "TREE QUALITY",
    traditional: "High quality is required, but it is very scarce in natural forests.",
    revoteak: "It is possible to use readily available, medium-quality plantation timber.",
  },
  {
    feature: "SKILL LABOUR",
    traditional: "It requires highly experienced sawyers.",
    revoteak:
      "It uses a manufacturing process designed to produce high-standard products without the limitations of raw materials and human expertise.",
  },
  {
    feature: "STABILITY AND DURABILITY",
    traditional: "Structural stability due to a straight-grain wood structure.",
    revoteak:
      "It offers superior stability due to a specially designed product structure where the wood fibers are precisely oriented in a cross-grain configuration, resulting in significantly lower expansion/contraction and greater strength.",
  },
  {
    feature: "UV RESISTANCE",
    traditional: "It is not UV-resistant; the color will fade very quickly, often within one month.",
    revoteak:
      "Surface coating with Carbon Quantum Dots Technology helps reduce the wood's UV light absorption, significantly slowing down color fading.",
  },
  {
    feature: "SCRATCH RESISTANCE",
    traditional: "The wood surface has low durability.",
    revoteak:
      "The surface durability is increased by more than 30%, resulting from the product's structure and the scratch-resistant properties provided by the Carbon Quantum Dots Technology coating.",
  },
  {
    feature: "MOLD & FUNGI RESISTANCE",
    traditional: "It is possible.",
    revoteak: "The coating helps reduce the risk of mold and fungi formation.",
  },
  {
    feature: "EASY CLEANING SURFACE",
    traditional:
      "The wood surface has a grain structure that collects dirt, requiring time and specialized equipment for cleaning.",
    revoteak:
      "The surface coating seals the wood grain grooves, which reduces the embedding of dirt and makes cleaning easier.",
  },
  {
    feature: "GREEN & SUSTAINABILITY",
    traditional: "Green material but not from the sustainable source.",
    revoteak:
      "Green material and from sustainable source with less than 0.1% of chemical component which is Poly Urethane glue.",
  },
];

export default function ComparisonTable() {
  const [mobileTab, setMobileTab] = useState<"revoteak" | "traditional">("revoteak");

  return (
    <section id="comparison" className="relative w-full overflow-hidden select-none">
      {/* ============================================================== */}
      {/* PART A: VS COMPARISON TABLE                                    */}
      {/* ============================================================== */}
      <div className="relative w-full bg-[#0A1820]">
        {/* Desktop View (>= 1024px): 1:1 High-Res Master WebP */}
        <div className="hidden lg:block relative w-full aspect-[2560/1499]">
          <img
            src="/images/sustainability/page3/vs-table.webp"
            alt="Traditional Decking VS REVOTEAK Redefined Marine Decking Comparison Table"
            className="w-full h-full object-cover select-none pointer-events-none"
            loading="lazy"
          />
        </div>

        {/* Mobile & Tablet View (< 1024px): Interactive Glassmorphism Table */}
        <div className="lg:hidden relative px-4 sm:px-8 py-14 sm:py-20 text-white">
          {/* Background Forest Image */}
          <img
            src="/images/sustainability/page3/vs-table.webp"
            alt="Forest Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
          <div className="absolute inset-0 bg-[#0A1820]/90 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="font-mistical text-3xl sm:text-4xl tracking-wider text-white">
                VS
              </span>
              <h2 className="font-outfit-regular text-sm sm:text-base tracking-[0.2em] text-white/90 uppercase mt-2">
                TRADITIONAL DECKING vs REVOTEAK
              </h2>
            </div>

            {/* Mobile Tab Switcher */}
            <div className="flex rounded-full bg-white/10 p-1 mb-8 border border-white/15 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setMobileTab("revoteak")}
                className={`flex-1 py-2.5 rounded-full text-xs font-outfit-regular tracking-wider uppercase transition-all duration-300 ${
                  mobileTab === "revoteak"
                    ? "bg-[#2DD4BF] text-[#0A1820] font-semibold shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                REVOTEAK
              </button>
              <button
                type="button"
                onClick={() => setMobileTab("traditional")}
                className={`flex-1 py-2.5 rounded-full text-xs font-outfit-regular tracking-wider uppercase transition-all duration-300 ${
                  mobileTab === "traditional"
                    ? "bg-white/20 text-white font-semibold shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                TRADITIONAL
              </button>
            </div>

            {/* Comparison Cards */}
            <div className="space-y-4">
              {COMPARISON_ROWS.map((row, idx) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <span className="text-[11px] sm:text-xs font-outfit-regular tracking-[0.15em] text-[#2DD4BF] uppercase">
                      {row.feature}
                    </span>
                    <span className="text-[10px] text-white/50 tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="font-outfit text-xs sm:text-sm leading-relaxed text-white/90">
                    {mobileTab === "revoteak" ? (
                      <span className="font-medium text-white">{row.revoteak}</span>
                    ) : (
                      <span className="text-white/75">{row.traditional}</span>
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PART B: MARINE PERFORMANCE & RESPONSIBLE TEAK                  */}
      {/* ============================================================== */}
      <div className="relative w-full bg-[#F6F5F2] text-[#13262D]">
        {/* Desktop View (>= 1024px): 1:1 High-Res Master WebP */}
        <div className="hidden lg:block relative w-full aspect-[2560/739]">
          <img
            src="/images/sustainability/page3/marine-performance.webp"
            alt="Marine Performance and Responsible Teak"
            className="w-full h-full object-cover select-none pointer-events-none"
            loading="lazy"
          />
        </div>

        {/* Mobile & Tablet View (< 1024px) */}
        <div className="lg:hidden max-w-2xl mx-auto px-6 sm:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            {/* Marine Performance */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-[#13262D]"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 40L6 48h52l-6-8H12z" />
                  <path d="M22 40V24h20v16" />
                  <path d="M32 14v10" />
                  <path d="M4 56c4 0 6-2 10-2s6 2 10 2 6-2 10-2 6 2 10 2 6-2 10-2 6 2 6 2" />
                </svg>
              </div>
              <h3 className="font-mistical text-xl sm:text-2xl tracking-[0.1em] text-[#13262D] uppercase mb-3">
                MARINE PERFORMANCE
              </h3>
              <p className="font-outfit-extralight text-xs sm:text-sm leading-relaxed tracking-[0.06em] text-[#13262D]/80 uppercase">
                EXCEPTIONAL DURABILITY. NATURAL RESISTANCE. TRUSTED IN THE WORLD&apos;S
                MOST DEMANDING ENVIRONMENTS.
              </p>
            </div>

            {/* Responsible Teak */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-[#13262D]"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="32" cy="32" r="22" />
                  <path d="M32 10c6 8 8 16 0 22s-6 14 0 22" />
                  <path d="M14 24c8 4 16 2 20-4" />
                  <path d="M48 38c-6 4-14 2-18-2" />
                </svg>
              </div>
              <h3 className="font-mistical text-xl sm:text-2xl tracking-[0.1em] text-[#13262D] uppercase mb-3">
                RESPONSIBLE TEAK
              </h3>
              <p className="font-outfit-extralight text-xs sm:text-sm leading-relaxed tracking-[0.06em] text-[#13262D]/80 uppercase">
                SUSTAINABLY SOURCED. A BRIGHTER FUTURE. TEAK THAT RESPECTS PEOPLE AND
                OUR PLANET.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
