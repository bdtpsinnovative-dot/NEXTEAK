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
        {/* ============================================================== */}
        {/* DESKTOP VIEW (>= 1024px): 1:1 High-Res Master WebP             */}
        {/* ============================================================== */}
        <div className="hidden lg:block relative w-full aspect-[2560/631] group">
          <img
            src="/images/sustainability/page3/sustainability-bottom.webp"
            alt="More Than A Deck, A Brighter Tomorrow — REVOTEAK Redefined Marine Decking"
            className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
            loading="lazy"
          />

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
        </div>

        {/* ============================================================== */}
        {/* MOBILE & TABLET VIEW (< 1024px)                                */}
        {/* ============================================================== */}
        <div className="lg:hidden relative w-full min-h-[360px] flex flex-col justify-between p-6 sm:p-10">
          <img
            src="/images/sustainability/page3/sustainability-bottom.webp"
            alt="More Than A Deck"
            className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
          />
          <div className="absolute inset-0 bg-[#0A1820]/80 pointer-events-none" />

          {/* Left / Top Message */}
          <div className="relative z-10 max-w-sm">
            <h2 className="font-outfit-thin text-base sm:text-xl tracking-[0.2em] text-white uppercase leading-relaxed mb-3">
              MORE THAN A DECK,
              <br />
              A BRIGHTER TOMORROW.
            </h2>
            <div className="w-24 h-[1px] bg-white/40" />
          </div>

          {/* Right / Bottom Brand */}
          <div className="relative z-10 self-end text-right pt-8">
            <h3 className="font-mistical text-2xl sm:text-3xl tracking-[0.08em] text-white uppercase">
              REVOTEAK
            </h3>
            <p className="font-outfit-thin text-[10px] sm:text-xs tracking-[0.25em] text-white/70 uppercase mb-4">
              REDEFINED MARINE DECKING
            </p>
            <div className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-[9px] sm:text-[10px] tracking-[0.2em] text-white/60 uppercase">
              <span>PEOPLE</span>
              <span>•</span>
              <span>CULTURE</span>
              <span>•</span>
              <span>OCEANS</span>
              <span>•</span>
              <span>NATURE</span>
              <span>•</span>
              <span>TOGETHER</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
