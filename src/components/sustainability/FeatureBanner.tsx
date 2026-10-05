"use client";

import React from "react";
import { motion } from "framer-motion";

const ICONS_DATA = [
  {
    id: 1,
    src: "/images/sustainability/feature-icon-1.webp",
    alt: "Responsibly Sourced Plantation Teak",
    lines: ["RESPONSIBLY SOURCED", "PLANTATION TEAK"],
  },
  {
    id: 2,
    src: "/images/sustainability/feature-icon-2.webp",
    alt: "30+ Year Mature Teak Resources",
    lines: ["30+ YEAR", "MATURE TEAK", "RESOURCES"],
  },
  {
    id: 3,
    src: "/images/sustainability/feature-icon-3.webp",
    alt: "Traceable Material Selection",
    lines: ["TRACEABLE MATERIAL", "SELECTION"],
  },
  {
    id: 4,
    src: "/images/sustainability/feature-icon-4.webp",
    alt: "Research Center Know-How and Material Development",
    lines: ["RESEARCH CENTER KNOW-HOW", "AND MATERIAL DEVELOPMENT."],
  },
];

export default function FeatureBanner() {
  return (
    <section
      id="features-banner"
      className="relative w-full overflow-hidden bg-[#0A1820] select-none text-white"
    >
      {/* ============================================================== */}
      {/* 1. DESKTOP VIEW (>= 1024px)                                     */}
      {/* Matches the Graphic Team's 5196x1846 Master Design 100% EXACTLY */}
      {/* ============================================================== */}
      <div className="hidden lg:block relative w-full aspect-[5196/1846]">
        {/* Layer 1: 100% Original High-Res Yacht Photo (Cleaned of text) */}
        <img
          src="/images/sustainability/feature-banner-bg.webp"
          alt="VERTEX Luxury Marine Teak Deck"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Ambient Subtle Ocean Shimmer Sweep */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 0.12, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        />

        {/* Layer 2: Master Text Overlay (Exact Percentages from Graphic Design) */}
        <div
          style={{ left: "6.0%", top: "13.9%" }}
          className="absolute z-10 max-w-[48%]"
        >
          {/* FEATURES Tag + Horizontal Line */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 xl:gap-4 mb-[2.2%]"
          >
            <span className="font-outfit-light text-xs lg:text-sm xl:text-[17px] tracking-[0.26em] text-white/95 uppercase">
              FEATURES
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="h-[1px] w-24 xl:w-36 bg-white/70 origin-left"
            />
          </motion.div>

          {/* Luxury Serif Title: WHAT IS VERTEX? */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-mistical text-4xl lg:text-[46px] xl:text-[62px] 2xl:text-[76px] leading-[1.04] text-white tracking-wide uppercase mb-[3.2%]"
          >
            WHAT IS
            <br />
            VERTEX?
          </motion.h1>

          {/* Master Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-outfit-light text-[11px] lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[16px] leading-[1.65] tracking-[0.14em] text-white/90 uppercase max-w-[95%]"
          >
            VERTEX IS A NEW GENERATION OF MARINE DECKING MATERIAL BUILT
            ON MORE THAN 60 YEARS OF WOODDEN EXPERTISE IN THE TIMBER INDUSTRY
            COMBINED WITH RESEARCH-BASED KNOW-HOW FROM THE NATIONAL RESEARCH
            CENTER.
          </motion.p>
        </div>

        {/* Layer 3: The 4 Original Icons & Labels (Exact Percentages on Deck) */}
        <div
          style={{ left: "6.0%", bottom: "8.5%" }}
          className="absolute z-10 flex items-start gap-8 xl:gap-14 2xl:gap-20"
        >
          {ICONS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.35 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Original Graphic Team Icon Image */}
              <div className="h-12 xl:h-16 2xl:h-20 mb-3 xl:mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Exact Original Typography Label */}
              <div className="space-y-0.5">
                {item.lines.map((line, lIdx) => (
                  <p
                    key={lIdx}
                    className="font-outfit-light text-[9.5px] xl:text-[11px] 2xl:text-[12px] tracking-[0.14em] text-white/95 uppercase leading-tight whitespace-nowrap"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MOBILE & TABLET VIEW (< 1024px)                              */}
      {/* Responsive layout: Clear, readable, animated, matching original */}
      {/* ============================================================== */}
      <div className="block lg:hidden relative w-full min-h-[580px] sm:min-h-[640px] px-5 sm:px-8 py-14 sm:py-20 flex flex-col justify-between">
        {/* Layer 1: Original Yacht Photo Background with Subtle Responsive Contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sustainability/feature-banner-bg.webp"
            alt="VERTEX Luxury Marine Teak Deck"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[70%_center] filter brightness-[0.92]"
          />
          {/* Subtle natural dark gradient for perfect readability without boxes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071720]/85 via-[#071720]/50 to-[#071720]/85 pointer-events-none" />
        </div>

        {/* Layer 2: Mobile Text Content */}
        <div className="relative z-10 max-w-xl">
          {/* FEATURES Tag */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-3 sm:mb-4"
          >
            <span className="font-outfit-light text-xs tracking-[0.26em] text-white/95 uppercase">
              FEATURES
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="h-[1px] w-20 bg-white/70 origin-left"
            />
          </motion.div>

          {/* Luxury Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-mistical text-3xl sm:text-5xl leading-[1.08] text-white tracking-wide uppercase mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            WHAT IS
            <br />
            VERTEX?
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="font-outfit-light text-xs sm:text-sm leading-relaxed tracking-[0.12em] text-white/90 uppercase drop-shadow-sm"
          >
            VERTEX IS A NEW GENERATION OF MARINE DECKING MATERIAL BUILT ON MORE
            THAN 60 YEARS OF WOODDEN EXPERTISE IN THE TIMBER INDUSTRY COMBINED
            WITH RESEARCH-BASED KNOW-HOW FROM THE NATIONAL RESEARCH CENTER.
          </motion.p>
        </div>

        {/* Layer 3: Mobile 4 Icons (Organized 2x2 grid, original icons & text, crisp & readable) */}
        <div className="relative z-10 mt-10 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            {ICONS_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.25 + index * 0.08,
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Original Icon */}
                <div className="h-10 sm:h-12 mb-2 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                  />
                </div>

                {/* Typography Labels */}
                <div className="space-y-0.5">
                  {item.lines.map((line, lIdx) => (
                    <p
                      key={lIdx}
                      className="font-outfit-light text-[10px] sm:text-xs tracking-[0.12em] text-white/95 uppercase leading-tight"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
