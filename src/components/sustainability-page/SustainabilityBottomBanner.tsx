"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SustainabilityBottomBanner() {
  return (
    <section
      id="sustainability-bottom"
      className="relative w-full overflow-hidden bg-[#0A1820] select-none text-white"
    >
      {/* Container with entrance fade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden"
      >
        <div className="relative w-full min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-0 lg:aspect-[2560/631] group flex flex-col justify-between">
          {/* Clean Background Image (River & Tropical Rainforest) */}
          <img
            src="/images/sustainability/page3/sustainability-bottom-clean.webp"
            alt="VERTEX Sustainability Banner"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
            loading="lazy"
          />

          {/* Contrast gradient overlay for legibility across all screen sizes */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/50" />

          {/* Ambient Sunlight & Water Shimmer Sweep */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
              opacity: [0, 0.12, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          />

          {/* ========================================================== */}
          {/* CONTENT OVERLAY LAYER                                       */}
          {/* ========================================================== */}
          <div className="relative z-10 w-full h-full min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-0 flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:px-20 xl:py-14">
            {/* Top Row: Empty on left, Logo + Subtitle on right */}
            <div className="flex justify-end items-start w-full">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col items-end text-right"
              >
                {/* Brand Logo (VERTEX) */}
                <img
                  src="/images/brand/logo-vertex.webp"
                  alt="VERTEX"
                  className="h-5 sm:h-7 md:h-8 lg:h-9 xl:h-10 w-auto object-contain drop-shadow-md"
                />
                {/* Subtitle */}
                <span className="font-outfit-light text-[9px] sm:text-[11px] md:text-xs lg:text-[12px] xl:text-[13.5px] tracking-[0.26em] text-white/90 uppercase mt-2 sm:mt-2.5 drop-shadow-sm">
                  REDEFINED MARINE DECKING
                </span>
              </motion.div>
            </div>

            {/* Bottom Row: Headline on left, Pillars on right */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 w-full mt-auto pt-8">
              {/* Left Headline + Horizontal Underline */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-start"
              >
                <h3 className="font-outfit-light text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-[1.65rem] leading-[1.35] tracking-[0.18em] text-white uppercase drop-shadow-md">
                  MORE THAN A DECK,
                  <br />
                  A BRIGHTER TOMORROW.
                </h3>
                {/* Thin underline */}
                <div className="h-[1.5px] w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 bg-white/70 mt-3 sm:mt-4" />
              </motion.div>

              {/* Right Words: PEOPLE CULTURE OCEANS NATURE TOGETHER */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center justify-start md:justify-end gap-x-4 sm:gap-x-6 md:gap-x-5 lg:gap-x-8 gap-y-1 font-outfit-light text-[10px] sm:text-xs md:text-[11.5px] lg:text-[13px] xl:text-[14px] tracking-[0.24em] text-white/90 uppercase drop-shadow-sm"
              >
                <span>PEOPLE</span>
                <span>CULTURE</span>
                <span>OCEANS</span>
                <span>NATURE</span>
                <span>TOGETHER</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
