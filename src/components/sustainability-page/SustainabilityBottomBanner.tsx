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
        <div className="relative w-full aspect-[2560/631] min-h-[220px] sm:min-h-[280px] lg:min-h-0 group">
          {/* Clean Background Image (River & Tropical Rainforest) */}
          <img
            src="/images/sustainability/page3/sustainability-bottom-clean.webp"
            alt="VERTEX Sustainability Banner"
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
      </motion.div>
    </section>
  );
}
