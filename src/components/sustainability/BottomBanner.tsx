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
          className="relative w-full"
        >
          <img
            src="/images/sustainability/bottom-banner.jpg"
            alt="NEXTEAK — Redefined Marine Decking"
            className="w-full h-auto block select-none transition-transform duration-700 hover:scale-[1.015]"
          />
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
