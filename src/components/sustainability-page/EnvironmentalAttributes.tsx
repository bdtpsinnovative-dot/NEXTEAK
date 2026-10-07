"use client";

import React from "react";
import { motion } from "framer-motion";

interface AttributeCard {
  id: string;
  image: string;
  overlayClass: string;
  gridSpanClass: string;
  titleContent: React.ReactNode;
  description: string;
  descMaxWidth: string;
}

export default function EnvironmentalAttributes() {
  return (
    <section
      id="environmental-attributes"
      className="relative w-full bg-white text-[#13262D] pb-16 sm:pb-24 lg:pb-32 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ============================================================== */}
        {/* SECTION HEADER: ADDITIONAL + ENVIRONMENTAL ATTRIBUTES           */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 sm:mb-14 lg:mb-16"
        >
          {/* Tagline with horizontal line */}
          <div className="flex items-center gap-4 mb-4 sm:mb-5">
            <span className="font-outfit-light text-sm sm:text-base lg:text-[16px] tracking-[0.28em] text-[#13262D]/85 uppercase">
              ADDITIONAL
            </span>
            <div className="h-[1px] w-20 sm:w-28 bg-[#13262D]/30" />
          </div>

          {/* Main Title */}
          <h2 className="font-bodoni text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.15] tracking-[0.06em] text-[#13262D] uppercase">
            ENVIRONMENTAL ATTRIBUTES
          </h2>
        </motion.div>

        {/* ============================================================== */}
        {/* 3 ATTRIBUTE CARDS GRID (RESPONSIVE: 1 COL / 2 COLS / 3 COLS)  */}
        {/* Proportions on desktop: 1.54fr : 1fr : 1fr matching mockup    */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.54fr_1fr_1fr] gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {/* ========================================================== */}
          {/* CARD 1: 99%+ RENEWABLE MATERIALS                           */}
          {/* ========================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="group relative rounded-3xl overflow-hidden md:col-span-2 lg:col-span-1 shadow-[0_15px_40px_rgba(19,38,45,0.08)] flex flex-col justify-center items-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] xl:min-h-[500px] p-6 sm:p-10 lg:p-8 xl:p-12 text-center"
          >
            {/* Background Image */}
            <img
              src="/images/sustainability/page3/attribute-1.webp"
              alt="99%+ Renewable Materials Teak Forest"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark Vignette / Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/45 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              {/* 99%+ & Leaf Icon */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                <span className="font-outfit-bold text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] text-white tracking-tight leading-none drop-shadow-md">
                  99%+
                </span>
                <img
                  src="/images/sustainability/page3/leaf-icon-white.webp"
                  alt="Leaf Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 object-contain drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Subtitle */}
              <h3 className="font-outfit-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.18em] text-white uppercase mb-5 sm:mb-6 drop-shadow-sm">
                RENEWABLE MATERIALS
              </h3>

              {/* Description */}
              <p className="font-outfit-light text-xs sm:text-[13px] lg:text-[13px] xl:text-[14px] leading-[1.85] tracking-[0.06em] text-white/95 uppercase max-w-[540px] mx-auto drop-shadow-sm">
                MADE PRIMARILY FROM RESPONSIBLY SOURCED PLANTATION TEAK, THE
                PRODUCT IS COMPOSED OF MORE THAN 99% RENEWABLE, WOOD-BASED
                MATERIAL WITH MINIMAL SYNTHETIC CONTENT.
              </p>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* CARD 2: EUDR-READY                                         */}
          {/* ========================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="group relative rounded-3xl overflow-hidden md:col-span-1 lg:col-span-1 shadow-[0_15px_40px_rgba(19,38,45,0.08)] flex flex-col justify-center items-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] xl:min-h-[500px] p-6 sm:p-10 lg:p-8 xl:p-10 text-center"
          >
            {/* Background Image */}
            <img
              src="/images/sustainability/page3/attribute-2.webp"
              alt="EUDR-Ready Forest Mountains"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark Vignette / Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#13262D]/55 via-[#13262D]/35 to-[#13262D]/60 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              {/* Title */}
              <h3 className="font-outfit-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] leading-[1.08] text-white tracking-wider uppercase mb-5 sm:mb-6 drop-shadow-md">
                EUDR-
                <br />
                READY
              </h3>

              {/* Description */}
              <p className="font-outfit-light text-xs sm:text-[13px] lg:text-[12.5px] xl:text-[13.5px] leading-[1.85] tracking-[0.06em] text-white/95 uppercase max-w-[340px] mx-auto drop-shadow-sm">
                OUR SOURCING IS BUILT AROUND TRANSPARENCY AND TRACEABILITY,
                SUPPORTING DUE DILIGENCE AND THE VERIFICATION OF LEGALLY
                SOURCED, DEFORESTATION-FREE TIMBER.
              </p>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* CARD 3: MORE VALUE FROM EVERY TREE                         */}
          {/* ========================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="group relative rounded-3xl overflow-hidden md:col-span-1 lg:col-span-1 shadow-[0_15px_40px_rgba(19,38,45,0.08)] flex flex-col justify-center items-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] xl:min-h-[500px] p-6 sm:p-10 lg:p-8 xl:p-10 text-center"
          >
            {/* Background Image */}
            <img
              src="/images/sustainability/page3/attribute-3.webp"
              alt="More Value From Every Tree Teak Wood Grain"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Warm Dark Vignette / Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/45 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              {/* Title: 2 lines */}
              <div className="mb-5 sm:mb-6">
                <h3 className="font-outfit-bold text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.15rem] leading-[1.08] text-white tracking-wider uppercase drop-shadow-md">
                  MORE VALUE
                </h3>
                <span className="block font-outfit-medium text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.14em] text-white uppercase mt-1 sm:mt-1.5 drop-shadow-sm">
                  FROM EVERY TREE
                </span>
              </div>

              {/* Description */}
              <p className="font-outfit-light text-xs sm:text-[13px] lg:text-[12.5px] xl:text-[13.5px] leading-[1.85] tracking-[0.06em] text-white/95 uppercase max-w-[340px] mx-auto drop-shadow-sm">
                OUR ENGINEERED PRODUCTION PROCESS IS DESIGNED TO MAXIMIZE WOOD
                UTILIZATION, REDUCE UNNECESSARY OFFCUTS AND MINIMIZE WASTE
                THROUGHOUT PRODUCTION.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
