"use client";

import React from "react";
import { motion } from "framer-motion";

const BENEFIT_CARDS = [
  { id: "01", src: "/images/sustainability/benefits/benefit-01.png", alt: "01 Regal Teak Appearance", delay: 0 },
  { id: "02", src: "/images/sustainability/benefits/benefit-02.png", alt: "02 2 mm Veneer Engineering", delay: 0.06 },
  { id: "03", src: "/images/sustainability/benefits/benefit-03.png", alt: "03 High Durability", delay: 0.12 },
  { id: "04", src: "/images/sustainability/benefits/benefit-04.png", alt: "04 Minimal Maintenance", delay: 0.18 },
  { id: "05", src: "/images/sustainability/benefits/benefit-05.png", alt: "05 Plantation-Grown & Traceable", delay: 0.08 },
  { id: "06", src: "/images/sustainability/benefits/benefit-06.png", alt: "06 60 Years of Expertise", delay: 0.14 },
  { id: "07", src: "/images/sustainability/benefits/benefit-07.png", alt: "07 Precision Manufacturing", delay: 0.20 },
  { id: "08", src: "/images/sustainability/benefits/benefit-08.png", alt: "08 Research Center Know-How and Material Development", delay: 0.26 },
];

export default function KeyBenefitsGrid() {
  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden bg-[#071720] select-none py-14 sm:py-20 lg:py-28"
    >
      {/* Dynamic Ocean Water Background with subtle parallax depth */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none transition-transform duration-1000"
        style={{
          backgroundImage: "url('/images/sustainability/keybenefits-ocean-bg.jpg')",
        }}
      />
      {/* Dark luxury ocean overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071720]/60 via-[#071720]/30 to-[#071720]/70 pointer-events-none" />

      {/* Floating Ambient Light Refraction Sweep */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 0.12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-sky-200/20 to-transparent -skew-x-12"
      />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header matching original master graphic with luxury reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-12 lg:mb-14"
        >
          {/* Top Label + Expanding Line */}
          <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
            <span className="font-outfit-extralight text-xs sm:text-sm lg:text-[15px] tracking-[0.28em] text-white/90 uppercase">
              ADVANTAGES
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[1px] w-20 sm:w-36 lg:w-48 bg-white/50 origin-left"
            />
          </div>

          {/* Main Title */}
          <h2 className="font-mistical text-2xl sm:text-4xl lg:text-5xl xl:text-[56px] tracking-wide text-white uppercase leading-tight">
            KEY BENEFITS OF REVOTEAK
          </h2>
        </motion.div>

        {/* 8 Interactive Cards Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 xl:gap-8">
          {BENEFIT_CARDS.map((card, index) => {
            const isOdd = index % 2 === 1;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: card.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                  transition: { type: "spring", stiffness: 380, damping: 22 },
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-[0_10px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_45px_rgba(0,0,0,0.55)] transition-shadow duration-300 border border-white/20 hover:border-white/60 bg-white"
              >
                {/* Subtle Ambient Ocean Float (Living Card Animation) */}
                <motion.div
                  animate={{
                    y: isOdd ? [0, -3.5, 0] : [0, 3.5, 0],
                  }}
                  transition={{
                    duration: isOdd ? 4.6 : 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full relative"
                >
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-auto block select-none group-hover:contrast-[1.02] transition-all duration-300"
                    loading="lazy"
                  />

                  {/* Diagonal Shimmer Reflection on Hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                    <motion.div
                      initial={{ x: "-120%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-20"
                    />
                  </div>
                </motion.div>

                {/* Bottom subtle accent line on hover */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-[#13262D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
