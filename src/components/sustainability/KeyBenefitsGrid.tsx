"use client";

import React from "react";
import { motion } from "framer-motion";

const BENEFIT_CARDS = [
  { id: "01", src: "/images/sustainability/benefits/benefit-01.png", alt: "01 Regal Teak Appearance" },
  { id: "02", src: "/images/sustainability/benefits/benefit-02.png", alt: "02 2 mm Veneer Engineering" },
  { id: "03", src: "/images/sustainability/benefits/benefit-03.png", alt: "03 High Durability" },
  { id: "04", src: "/images/sustainability/benefits/benefit-04.png", alt: "04 Minimal Maintenance" },
  { id: "05", src: "/images/sustainability/benefits/benefit-05.png", alt: "05 Plantation-Grown & Traceable" },
  { id: "06", src: "/images/sustainability/benefits/benefit-06.png", alt: "06 60 Years of Expertise" },
  { id: "07", src: "/images/sustainability/benefits/benefit-07.png", alt: "07 Precision Manufacturing" },
  { id: "08", src: "/images/sustainability/benefits/benefit-08.png", alt: "08 Research Center Know-How and Material Development" },
];

export default function KeyBenefitsGrid() {
  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden bg-[#0A181E] select-none"
    >
      {/* Desktop view (>= 1024px): Full original master graphic */}
      <div className="hidden lg:block w-full">
        <img
          src="/images/sustainability/keybenefits-banner.jpg"
          alt="Key Benefits of Revoteak"
          className="w-full h-auto block select-none"
        />
      </div>

      {/* Mobile & Tablet view (< 1024px): 2 columns per row with high-res cards */}
      <div
        className="block lg:hidden relative w-full py-12 sm:py-16 px-3.5 sm:px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sustainability/keybenefits-mobile-bg.jpg')",
        }}
      >
        {/* Subtle dark overlay for depth & contrast */}
        <div className="absolute inset-0 bg-[#071720]/40 pointer-events-none" />

        <div className="relative z-10 w-full max-w-2xl mx-auto">
          {/* Header matching original master graphic */}
          <div className="mb-6 px-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-outfit-extralight text-[11px] sm:text-xs tracking-[0.28em] text-white/85 uppercase">
                ADVANTAGES
              </span>
              <span className="h-[1px] w-16 sm:w-24 bg-white/40" />
            </div>
            <h2 className="font-mistical text-2xl sm:text-3xl tracking-wide text-white uppercase leading-snug">
              KEY BENEFITS OF REVOTEAK
            </h2>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {BENEFIT_CARDS.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.35, delay: (index % 2) * 0.06 }}
                className="relative rounded-xl overflow-hidden shadow-md group transition-transform duration-300 active:scale-[0.98]"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-auto block select-none"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
