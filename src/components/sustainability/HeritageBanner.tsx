"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeritageBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A181E] select-none text-white">
      {/* Container matching master banner aspect ratio */}
      <div className="relative w-full aspect-[2560/808] min-h-[320px] sm:min-h-[420px] lg:min-h-0">
        {/* Clean Background Image (Ocean & Superyacht Deck, text removed) */}
        <img
          src="/images/sustainability/heritage-banner-clean.webp"
          alt="Inspired By Heritage. Built For Generations."
          className="w-full h-full object-cover select-none pointer-events-none"
          loading="lazy"
        />

        {/* Ambient Subtle Sun Shimmer on Ocean */}
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

        {/* Live Vector Typography Overlay on Left Ocean Side */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-[6vw] py-8 lg:py-[4vw] pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-md sm:max-w-lg lg:max-w-[48vw] pointer-events-auto"
          >
            {/* Main Headline */}
            <h2 className="font-mistical text-2xl sm:text-4xl lg:text-[2.6vw] leading-[1.12] tracking-[0.06em] text-white uppercase mb-3 sm:mb-4 lg:mb-[1.8vw]">
              INSPIRED BY HERITAGE.
              <br />
              BUILT FOR GENERATIONS.
            </h2>

            {/* Subtitle with NATIONAL RESEARCH CENTER */}
            <p className="font-outfit-light text-xs sm:text-sm lg:text-[0.85vw] leading-[1.8] lg:leading-[1.9] tracking-[0.14em] lg:tracking-[0.16em] text-white/90 uppercase max-w-sm sm:max-w-md lg:max-w-[42vw]">
              OVER 60 YEARS OF TIMBER EXPERTISE, NATIONAL RESEARCH CENTER
              <br className="hidden sm:inline" />
              {" "}KNOW-HOW, END-TO-END QUALITY CONTROL.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
