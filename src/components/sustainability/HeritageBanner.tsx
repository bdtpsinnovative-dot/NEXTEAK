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
          alt="VERTEK Marine Teak Decking"
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
      </div>
    </section>
  );
}
