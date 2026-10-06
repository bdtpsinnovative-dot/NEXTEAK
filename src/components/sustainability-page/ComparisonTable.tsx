"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ComparisonRow {
  feature: string;
  traditional: string;
  vertex: string;
  isHeroRow?: boolean;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "TREE AGE",
    traditional: "80 YEARS +",
    vertex: "30 YEARS +",
    isHeroRow: true,
  },
  {
    feature: "TREE QUALITY",
    traditional:
      "High quality is required, but it is very scarce in natural forests.",
    vertex:
      "It is possible to use readily available, medium-quality plantation timber.",
  },
  {
    feature: "SKILL LABOUR",
    traditional: "It requires highly experienced sawyers.",
    vertex:
      "It uses a manufacturing process designed to produce high-standard products without the limitations of raw materials and human expertise.",
  },
  {
    feature: "STABILITY AND DURABILITY",
    traditional: "Structural stability due to a straight-grain wood structure.",
    vertex:
      "It offers superior stability due to a specially designed product structure where the wood fibers are precisely oriented in a cross-grain configuration, resulting in significantly lower expansion/contraction and greater strength.",
  },
  {
    feature: "UV RESISTANCE",
    traditional:
      "It is not UV-resistant; the color will fade very quickly, often within one month.",
    vertex:
      "Surface coating with Carbon Quantum Dots Technology helps reduce the wood's UV light absorption, significantly slowing down color fading.",
  },
  {
    feature: "SCRATCH RESISTANCE",
    traditional: "The wood surface has low durability.",
    vertex:
      "The surface durability is increased by more than 30%, resulting from the product's structure and the scratch-resistant properties provided by the Carbon Quantum Dots Technology coating.",
  },
  {
    feature: "MOLD & FUNGI RESISTANCE",
    traditional: "It is possible.",
    vertex: "The coating helps reduce the risk of mold and fungi formation.",
  },
  {
    feature: "EASY CLEANING SURFACE",
    traditional:
      "The wood surface has a grain structure that collects dirt, requiring time and specialized equipment for cleaning.",
    vertex:
      "The surface coating seals the wood grain grooves, which reduces the embedding of dirt and makes cleaning easier.",
  },
  {
    feature: "GREEN & SUSTAINABILITY",
    traditional: "Green material but not from the sustainable source.",
    vertex:
      "Green material and from sustainable source with less than 0.1% of chemical component which is Poly Urethane glue.",
  },
];

export default function ComparisonTable() {
  const [mobileTab, setMobileTab] = useState<"vertex" | "traditional">(
    "vertex"
  );

  return (
    <section
      id="comparison"
      className="relative w-full overflow-hidden select-none bg-[#0A1820]"
    >
      {/* ============================================================== */}
      {/* PART A: VS COMPARISON TABLE (LIVE HTML ON CLEAN BACKGROUND)    */}
      {/* ============================================================== */}
      <div className="relative w-full py-16 sm:py-24 lg:py-32">
        {/* Background Teak Tree Trunk Image (100% Clean Image, No Lines) */}
        <img
          src="/images/sustainability/page3/vs-table-clean.webp"
          alt="Plantation Teak Forest"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          loading="lazy"
        />
        {/* Ambient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1820]/50 via-[#0A1820]/30 to-[#0A1820]/60 pointer-events-none" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* ========================================================== */}
          {/* DESKTOP TABLE VIEW (>= 1024px)                             */}
          {/* ========================================================== */}
          <div className="hidden lg:block">
            {/* Header Columns above table */}
            <div className="grid grid-cols-[36%_26%_38%] items-end mb-6 text-white px-8">
              {/* Left Column: Traditional Decking */}
              <div className="text-center flex flex-col items-center">
                <span className="font-outfit font-light text-xl tracking-[0.2em] text-white/90 uppercase">
                  TRADITIONAL
                </span>
                <span className="font-outfit font-bold text-3xl tracking-[0.16em] text-white uppercase">
                  DECKING
                </span>
              </div>

              {/* Center Column: VS */}
              <div className="text-center">
                <span className="font-mistical text-6xl text-white tracking-widest">
                  VS
                </span>
              </div>

              {/* Right Column: VERTEX */}
              <div className="text-center flex flex-col items-center justify-end">
                <span className="font-mistical text-4xl xl:text-5xl tracking-[0.08em] text-white uppercase">
                  VERTEX
                </span>
              </div>
            </div>

            {/* Glassmorphism Table Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl border border-white/60 bg-black/30 backdrop-blur-sm overflow-hidden shadow-2xl"
            >
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[36%_26%_38%] items-stretch text-white text-center transition-colors duration-200 hover:bg-white/[0.04] ${
                    idx < COMPARISON_ROWS.length - 1
                      ? "border-b border-white/40"
                      : ""
                  }`}
                >
                  {/* Left Cell: Traditional Decking */}
                  <div className="flex items-center justify-center p-4 sm:p-5 lg:py-6 lg:px-8 border-r border-white/40 text-white">
                    {row.isHeroRow ? (
                      <span className="font-bodoni text-3xl lg:text-4xl xl:text-5xl text-white font-bold tracking-[0.06em]">
                        {row.traditional}
                      </span>
                    ) : (
                      <p className="font-outfit text-xs sm:text-[13px] lg:text-[14px] xl:text-[15px] leading-relaxed max-w-[420px] text-white font-normal">
                        {row.traditional}
                      </p>
                    )}
                  </div>

                  {/* Center Cell: Feature Badge */}
                  <div className="flex items-center justify-center p-3 sm:p-4 lg:py-6 lg:px-6 bg-white/[0.04] border-r border-white/40">
                    <span className="font-outfit font-semibold text-xs sm:text-[13px] lg:text-[14px] tracking-[0.06em] text-white uppercase leading-snug">
                      {row.feature}
                    </span>
                  </div>

                  {/* Right Cell: VERTEX */}
                  <div className="flex items-center justify-center p-4 sm:p-5 lg:py-6 lg:px-8 text-white">
                    {row.isHeroRow ? (
                      <span className="font-bodoni text-3xl lg:text-4xl xl:text-5xl text-white font-bold tracking-[0.06em]">
                        {row.vertex}
                      </span>
                    ) : (
                      <p className="font-outfit text-xs sm:text-[13px] lg:text-[14px] xl:text-[15px] leading-relaxed max-w-[460px] text-white font-normal">
                        {row.vertex}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ========================================================== */}
          {/* MOBILE & TABLET VIEW (< 1024px)                            */}
          {/* ========================================================== */}
          <div className="lg:hidden max-w-2xl mx-auto text-white">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="font-mistical text-4xl tracking-wider text-white">
                VS
              </span>
              <h2 className="font-outfit-regular text-xs sm:text-sm tracking-[0.2em] text-white/90 uppercase mt-2">
                TRADITIONAL DECKING vs VERTEX
              </h2>
            </div>

            {/* Mobile Tab Switcher */}
            <div className="flex rounded-full bg-white/10 p-1 mb-8 border border-white/20 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setMobileTab("vertex")}
                className={`flex-1 py-2.5 rounded-full text-xs font-outfit font-semibold tracking-wider uppercase transition-all duration-300 ${
                  mobileTab === "vertex"
                    ? "bg-white text-[#13262D] shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                VERTEX
              </button>
              <button
                type="button"
                onClick={() => setMobileTab("traditional")}
                className={`flex-1 py-2.5 rounded-full text-xs font-outfit font-semibold tracking-wider uppercase transition-all duration-300 ${
                  mobileTab === "traditional"
                    ? "bg-white text-[#13262D] shadow-md"
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
                  className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <span className="text-[11px] sm:text-xs font-outfit font-semibold tracking-[0.12em] text-white uppercase">
                      {row.feature}
                    </span>
                    <span className="text-[10px] text-white/50 tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="font-outfit text-xs sm:text-sm leading-relaxed text-white/90">
                    {mobileTab === "vertex" ? (
                      <span
                        className={
                          row.isHeroRow
                            ? "font-bodoni text-2xl sm:text-3xl font-bold text-white tracking-[0.06em]"
                            : "font-normal text-white"
                        }
                      >
                        {row.vertex}
                      </span>
                    ) : (
                      <span
                        className={
                          row.isHeroRow
                            ? "font-bodoni text-2xl sm:text-3xl font-bold text-white tracking-[0.06em]"
                            : "text-white/75"
                        }
                      >
                        {row.traditional}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PART B: MARINE PERFORMANCE & RESPONSIBLE TEAK                  */}
      {/* ============================================================== */}
      <div className="relative w-full bg-[#F6F5F2] text-[#13262D] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Marine Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center px-4 md:border-r md:border-[#13262D]/15"
            >
              {/* Boat with Shield Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-5 sm:mb-6 flex items-center justify-center">
                <img
                  src="/images/sustainability/page3/icon-marine-performance.webp"
                  alt="Marine Performance"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-mistical text-2xl sm:text-3xl tracking-[0.1em] text-[#13262D] uppercase mb-4">
                MARINE PERFORMANCE
              </h3>
              <p className="font-outfit-extralight text-xs sm:text-sm leading-relaxed tracking-[0.07em] text-[#13262D]/85 uppercase max-w-md">
                EXCEPTIONAL DURABILITY. NATURAL RESISTANCE. TRUSTED IN THE
                WORLD&apos;S MOST DEMANDING ENVIRONMENTS.
              </p>
            </motion.div>

            {/* Responsible Teak */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Earth with Leaves Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-5 sm:mb-6 flex items-center justify-center">
                <img
                  src="/images/sustainability/page3/icon-responsible-teak.webp"
                  alt="Responsible Teak"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-mistical text-2xl sm:text-3xl tracking-[0.1em] text-[#13262D] uppercase mb-4">
                RESPONSIBLE TEAK
              </h3>
              <p className="font-outfit-extralight text-xs sm:text-sm leading-relaxed tracking-[0.07em] text-[#13262D]/85 uppercase max-w-md">
                SUSTAINABLY SOURCED. A BRIGHTER FUTURE. TEAK THAT RESPECTS
                PEOPLE AND OUR PLANET.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
