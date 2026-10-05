"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SustainabilityHero() {
  return (
    <section
      id="sustainability-hero"
      className="relative w-full overflow-hidden bg-[#0A1820] select-none text-white"
    >
      {/* ============================================================== */}
      {/* 1. DESKTOP VIEW (>= 1024px)                                     */}
      {/* Matches the Graphic Team's 5222x1836 Master Design 100% EXACTLY */}
      {/* ============================================================== */}
      <div className="hidden lg:block relative w-full aspect-[5222/1836]">
        {/* Layer 1: High-Res Master WebP Aerial Teak Forest & River */}
        <img
          src="/images/sustainability/page3/sustainability-hero.webp"
          alt="Grown For a Brighter Tomorrow — Sustainability"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Layer 2: Subtle Ambient Sun & Water Shimmer */}
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
          className="pointer-events-none absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
        />

        {/* Layer 3: Interactive Hotspot / Accessible Content Layer */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-[5vw] pointer-events-none">
          {/* Top Left: Navigation anchor indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pointer-events-auto"
          >
            <span className="sr-only">Sustainability</span>
          </motion.div>

          {/* Bottom Right: Corner Callout accessible text */}
          <div className="self-end pointer-events-auto">
            <span className="sr-only">Plant Today For Generations</span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MOBILE & TABLET VIEW (< 1024px)                              */}
      {/* Perfectly scaled & razor-sharp typography for all touch screens */}
      {/* ============================================================== */}
      <div className="lg:hidden relative w-full min-h-[460px] sm:min-h-[540px] flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-14 bg-gradient-to-b from-[#0A1820]/90 via-[#0A1820]/75 to-[#0A1820]/95">
        {/* Background Image with optimized fit */}
        <img
          src="/images/sustainability/page3/sustainability-hero.webp"
          alt="Grown For a Brighter Tomorrow"
          className="absolute inset-0 w-full h-full object-cover opacity-50 select-none pointer-events-none"
        />

        {/* Ambient Top Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1820] via-transparent to-black/40 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col max-w-xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-outfit-thin tracking-[0.25em] text-white/80 uppercase mb-4"
          >
            <span>SUSTAINABILITY</span>
            <svg
              className="w-3.5 h-3.5 text-white/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-mistical text-3xl sm:text-5xl leading-[1.1] tracking-[0.05em] text-white uppercase mb-4"
          >
            GROWN
            <br />
            FOR A BRIGHTER
            <br />
            TOMORROW
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-outfit-thin text-xs sm:text-sm leading-relaxed tracking-[0.08em] text-white/85 uppercase max-w-md"
          >
            REVOTEAK IS MADE FROM RESPONSIBLY SOURCED PLANTATION TEAK,
            SUPPORTING SUSTAINABLE FORESTRY, LOCAL COMMUNITIES, AND A HEALTHIER
            PLANET.
          </motion.p>
        </div>

        {/* Bottom Corner Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative z-10 self-end text-right pt-6"
        >
          <p className="font-outfit-thin text-[11px] sm:text-xs tracking-[0.2em] text-white/75 uppercase leading-snug">
            PLANT TODAY
            <br />
            FOR GENERATIONS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
