"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BottomBanner() {
  return (
    <section
      id="bottom-banner"
      className="relative w-full overflow-hidden bg-[#071720] select-none"
    >
      {/* Container with scroll-triggered entrance and subtle floating ocean movement */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden"
      >
        {/* Floating Yacht Movement (Gentle ocean swell effect) */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full aspect-[5158/759] min-h-[140px] sm:min-h-[190px] md:min-h-[240px] lg:min-h-0 flex items-center justify-center overflow-hidden"
        >
          <img
            src="/images/sustainability/bottom-banner-clean.webp"
            alt="Engineered for Performance. Designed for Sustainability."
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-[1.015]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="relative z-10 text-center px-4">
            <p className="font-outfit-light text-[7.5px] sm:text-[9.5px] md:text-[11px] lg:text-[13.5px] xl:text-[15px] tracking-[0.2em] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Engineered for Performance. Designed for Sustainability.
            </p>
          </div>
        </motion.div>

        {/* Ambient Sunlight & Water Shimmer Sweep */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 0.15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        />

        {/* Subtle vignette border at top for smooth blend with previous section */}
        <div className="absolute top-0 inset-x-0 h-8 sm:h-12 bg-gradient-to-b from-[#0A181E] to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
}
