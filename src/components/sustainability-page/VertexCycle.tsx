"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CycleStep {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  // Position percentage for desktop radial placement
  desktopPos: string;
}

const CYCLE_STEPS: CycleStep[] = [
  {
    id: 1,
    icon: "/images/sustainability/page3/cycle-icon-1.webp",
    title: "GREEN PRODUCTS",
    subtitle: "TOXIN-FREE, LONG-LIFE, RECYCLABLE",
    desktopPos: "top-[5%] left-[5%] text-center",
  },
  {
    id: 2,
    icon: "/images/sustainability/page3/cycle-icon-2.webp",
    title: "CLEANER PRODUCTION",
    subtitle: "USING FEWER RESOURCES",
    desktopPos: "top-[5%] right-[5%] text-center",
  },
  {
    id: 3,
    icon: "/images/sustainability/page3/cycle-icon-3.webp",
    title: "BETTER SERVICE",
    subtitle: "TO EXTEND LIFESPAN",
    desktopPos: "bottom-[18%] right-[4%] text-center",
  },
  {
    id: 4,
    icon: "/images/sustainability/page3/cycle-icon-5.webp",
    title: "COLLECT AT",
    subtitle: "END-OF-LIFE",
    desktopPos: "bottom-[0%] left-1/2 -translate-x-1/2 text-center",
  },
  {
    id: 5,
    icon: "/images/sustainability/page3/cycle-icon-4.webp",
    title: "SEPARATE WASTE",
    subtitle: "RE-USE RESOURCES",
    desktopPos: "bottom-[18%] left-[4%] text-center",
  },
];

export default function VertexCycle() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="vertex-cycle"
      className="relative w-full bg-white text-[#13262D] py-16 sm:py-24 lg:py-32 overflow-hidden select-none border-t border-[#13262D]/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ============================================================== */}
        {/* TOP: TITLE & PHILOSOPHY WITH VERTICAL DIVIDER                   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          {/* Left: Section tag + Mistical title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="font-outfit-extralight text-xs sm:text-sm tracking-[0.25em] text-[#13262D]/80 uppercase">
                THE VERTEX CYCLE
              </span>
              <div className="h-[1px] w-16 sm:w-24 bg-[#13262D]/25" />
            </div>

            <h2 className="font-mistical text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-[0.08em] text-[#13262D] uppercase">
              A CYCLE OF
              <br />
              LASTING VALUE
            </h2>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="h-28 w-[1px] bg-[#13262D]/20" />
          </div>

          {/* Right: Circular approach statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex items-center"
          >
            <p className="font-outfit-extralight text-xs sm:text-sm lg:text-[13px] leading-[2.0] tracking-[0.08em] text-[#13262D]/85 uppercase">
              WE BELIEVE TEAK IS A RENEWABLE RESOURCE WHEN MANAGED RESPONSIBLY.
              OUR CIRCULAR APPROACH FOCUSES ON REDUCING ENVIRONMENTAL IMPACT,
              MAXIMIZING MATERIAL VALUE AND CREATING A CLEANER, MORE SUSTAINABLE
              FUTURE.
            </p>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP INFOGRAPHIC: CIRCULAR RADIAL DIAGRAM                    */}
        {/* ============================================================== */}
        <div className="hidden lg:block relative w-full max-w-[1180px] mx-auto aspect-[1180/880] my-8">
          {/* Center: The Earth Globe with Cycle Arrows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] flex items-center justify-center"
          >
            {/* Ambient soft pulse */}
            <div className="absolute inset-0 rounded-full bg-[#2DD4BF]/5 blur-2xl animate-pulse" />

            <img
              src="/images/sustainability/page3/cycle-center.webp"
              alt="Vertex Circular Economy Cycle"
              className="w-full h-full object-contain relative z-10 transition-transform duration-700 hover:rotate-12"
              loading="lazy"
            />
          </motion.div>

          {/* 5 Circular Nodes */}
          {CYCLE_STEPS.map((step) => {
            const isHovered = activeStep === step.id;
            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className={`absolute ${step.desktopPos} z-20 flex flex-col items-center cursor-pointer transition-all duration-300`}
                animate={{
                  scale: isHovered ? 1.08 : 1,
                  y: isHovered ? -4 : 0,
                }}
              >
                {/* Node Icon */}
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 flex items-center justify-center transition-all duration-300 ${
                    isHovered ? "drop-shadow-md scale-105" : ""
                  }`}
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h4 className="font-outfit-medium text-base sm:text-lg lg:text-xl tracking-[0.16em] text-[#13262D] uppercase mb-1.5 font-bold">
                  {step.title}
                </h4>

                {/* Subtitle */}
                <p className="font-outfit-light text-xs sm:text-sm lg:text-[13px] tracking-[0.08em] text-[#13262D]/80 uppercase max-w-[280px] leading-relaxed">
                  {step.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* MOBILE & TABLET INFOGRAPHIC (< 1024px)                          */}
        {/* ============================================================== */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Central graphic */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 mb-12 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#2DD4BF]/5 blur-xl animate-pulse" />
            <img
              src="/images/sustainability/page3/cycle-center.webp"
              alt="Vertex Cycle"
              className="w-full h-full object-contain relative z-10"
              loading="lazy"
            />
          </div>

          {/* Sequential 5 steps grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {CYCLE_STEPS.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#F8F9FA] border border-black/5 hover:border-black/15 transition-all"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-outfit-regular text-xs text-[#2DD4BF] font-semibold tracking-wider mb-0.5">
                    STEP 0{idx + 1}
                  </span>
                  <h4 className="font-outfit-medium text-sm sm:text-base tracking-[0.12em] text-[#13262D] uppercase mb-1 font-bold">
                    {step.title}
                  </h4>
                  <p className="font-outfit-light text-xs sm:text-sm leading-relaxed tracking-[0.05em] text-[#13262D]/80 uppercase">
                    {step.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
