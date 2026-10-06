"use client";

import React from "react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    id: 1,
    icon: "/images/sustainability/page3/approach-icon-1.webp",
    title: "PLANTATION TEAK",
    description:
      "SOURCED FROM WELL-MANAGED PLANTATIONS, A RENEWABLE RESOURCE FOR THE FUTURE.",
  },
  {
    id: 2,
    icon: "/images/sustainability/page3/approach-icon-2.webp",
    title: "CARBON ABSORPTION",
    description:
      "TREES IN PLANTATION FORESTS HELP ABSORB CO2 AND SUPPORT A HEALTHIER ENVIRONMENT.",
  },
  {
    id: 3,
    icon: "/images/sustainability/page3/approach-icon-3.webp",
    title: "TRACEABLE SOURCING",
    description:
      "VERIFIED SUPPLY CHAIN FROM TRUSTED SOURCES, WITH FULL TRANSPARENCY AND COMPLIANCE.",
  },
  {
    id: 4,
    icon: "/images/sustainability/page3/approach-icon-4.webp",
    title: "COMMUNITY SUPPORT",
    description:
      "CREATING VALUE FOR LOCAL COMMUNITIES AND SUSTAINABLE ECONOMIC GROWTH.",
  },
];

export default function OurApproach() {
  return (
    <section
      id="our-approach"
      className="relative w-full bg-white text-[#13262D] py-16 sm:py-24 lg:py-32 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ============================================================== */}
        {/* TOP: 2-COLUMN STORY & CANOPY PHOTO                             */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 sm:mb-28 lg:mb-32">
          {/* Left Column: Heading & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Tagline with horizontal line */}
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <span className="font-outfit-light text-sm sm:text-base lg:text-[16px] tracking-[0.28em] text-[#13262D]/85 uppercase">
                OUR APPROACH
              </span>
              <div className="h-[1px] w-20 sm:w-28 bg-[#13262D]/30" />
            </div>

            {/* Headline */}
            <h2 className="font-mistical text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.12] tracking-[0.08em] text-[#13262D] uppercase mb-6 sm:mb-8">
              RESPONSIBLE TODAY.
              <br />
              LASTING TOMORROW.
            </h2>

            {/* Description */}
            <p className="font-outfit-light text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-[2.1] tracking-[0.08em] text-[#13262D]/90 uppercase max-w-xl">
              WE TAKE A HOLISTIC APPROACH TO SUSTAINABILITY, FROM RESPONSIBLY
              SOURCED TEAK AND EFFICIENT PRODUCTION, TO LONG PRODUCT LIFE AND
              RESOURCE RECOVERY — ENSURING TEAK REMAINS A VALUABLE NATURAL
              RESOURCE FOR GENERATIONS TO COME.
            </p>
          </motion.div>

          {/* Right Column: Teak Canopy Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(19,38,45,0.08)] group"
          >
            <div className="relative aspect-[2462/1978] w-full overflow-hidden bg-[#E7E2DA]/30">
              <img
                src="/images/sustainability/page3/approach-photo.webp"
                alt="Plantation Teak Tree Canopy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* CENTER DIVIDER: RESPONSIBLE SOURCING. LASTING IMPACT.          */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 sm:gap-8 mb-16 sm:mb-20"
        >
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#13262D]/20 to-[#13262D]/25" />
          <h3 className="font-outfit-regular text-xs sm:text-sm md:text-base tracking-[0.2em] text-[#13262D] uppercase whitespace-nowrap px-2">
            RESPONSIBLE SOURCING. LASTING IMPACT.
          </h3>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#13262D]/20 to-[#13262D]/25" />
        </motion.div>

        {/* ============================================================== */}
        {/* BOTTOM: 4 PILLARS GRID WITH THIN VERTICAL DIVIDERS             */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 transition-all duration-300 group ${
                idx < PILLARS.length - 1
                  ? "lg:border-r lg:border-[#13262D]/15"
                  : ""
              }`}
            >
              {/* Icon Container with subtle lift */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={pillar.icon}
                  alt={pillar.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h4 className="font-outfit-regular text-xs sm:text-sm tracking-[0.16em] text-[#13262D] uppercase mb-3">
                {pillar.title}
              </h4>

              {/* Description */}
              <p className="font-outfit-extralight text-[11px] sm:text-xs leading-relaxed tracking-[0.06em] text-[#13262D]/75 uppercase max-w-[240px]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
