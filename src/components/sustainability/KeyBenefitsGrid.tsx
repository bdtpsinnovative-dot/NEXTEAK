"use client";

import React from "react";
import { motion } from "framer-motion";

interface BenefitCard {
  id: string;
  icon: string;
  alt: string;
  title: string;
  desc: string;
  delay: number;
}

const BENEFIT_CARDS: BenefitCard[] = [
  {
    id: "01",
    icon: "/images/sustainability/benefits/icons/icon-01.png",
    alt: "Regal Teak Appearance",
    title: "REGAL TEAK APPEARANCE",
    desc: "A REFINED STRAIGHT-GRAIN LOOK WITH TIMELESS NATURAL ELEGANCE.",
    delay: 0,
  },
  {
    id: "02",
    icon: "/images/sustainability/benefits/icons/icon-02.png",
    alt: "2 mm Veneer Engineering",
    title: "2 MM VENEER ENGINEERING",
    desc: "TEAK IS SLICED INTO THIN VENEERS AND LAMINATED WITH PRECISION FOR CONSISTENCY AND BEAUTY.",
    delay: 0.06,
  },
  {
    id: "03",
    icon: "/images/sustainability/benefits/icons/icon-03.png",
    alt: "High Durability",
    title: "HIGH DURABILITY",
    desc: "ENGINEERED FOR LONG-TERM PERFORMANCE AND STABILITY IN DEMANDING MARINE CONDITIONS.",
    delay: 0.12,
  },
  {
    id: "04",
    icon: "/images/sustainability/benefits/icons/icon-04.png",
    alt: "Minimal Maintenance",
    title: "MINIMAL MAINTENANCE",
    desc: "BUILT FOR PRACTICAL CARE WITH A DURABLE, EASY-TO-MAINTAIN SURFACE.",
    delay: 0.18,
  },
  {
    id: "05",
    icon: "/images/sustainability/benefits/icons/icon-05.png",
    alt: "Plantation-Grown & Traceable",
    title: "PLANTATION-GROWN & TRACEABLE",
    desc: "SOURCE NATIVE THAI TEAK FROM OUR OWN PLANTATIONS, PROMOTING FAIR VALUE AND CONTINUOUS REPLANTING.",
    delay: 0.08,
  },
  {
    id: "06",
    icon: "/images/sustainability/benefits/icons/icon-06.png",
    alt: "60 Years of Expertise",
    title: "60 YEARS OF EXPERTISE",
    desc: "BACKED BY WOODDEN'S DEEP KNOWLEDGE FROM UPSTREAM TO DOWNSTREAM.",
    delay: 0.14,
  },
  {
    id: "07",
    icon: "/images/sustainability/benefits/icons/icon-07.png",
    alt: "Precision Manufacturing",
    title: "PRECISION MANUFACTURING",
    desc: "PRODUCED WITH ADVANCED MACHINERY, STRICT STANDARDS, AND METICULOUS ATTENTION TO DETAIL.",
    delay: 0.2,
  },
  {
    id: "08",
    icon: "/images/sustainability/benefits/icons/icon-08.png",
    alt: "Research Center Know-How",
    title: "RESEARCH CENTER KNOW-HOW AND MATERIAL DEVELOPMENT.",
    desc: "ENHANCED BY KNOW-HOW AND MATERIAL DEVELOPMENT FROM THAILAND NATIONAL RESEARCH CENTER.",
    delay: 0.26,
  },
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
          backgroundImage:
            "url('/images/sustainability/keybenefits-ocean-bg.webp')",
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
            KEY BENEFITS OF VERTEK
          </h2>
        </motion.div>

        {/* 8 Interactive Cards Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
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
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 380, damping: 22 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_10px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_45px_rgba(0,0,0,0.55)] transition-all duration-300 border border-white/30 hover:border-white/70 bg-[#FBFBFB]"
              >
                {/* Subtle Ambient Ocean Float */}
                <motion.div
                  animate={{
                    y: isOdd ? [0, -3, 0] : [0, 3, 0],
                  }}
                  transition={{
                    duration: isOdd ? 4.6 : 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full p-6 sm:p-7 xl:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] xl:min-h-[260px]"
                >
                  {/* Top: Number + Line */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-outfit-light text-2xl sm:text-3xl tracking-tight text-[#13262D]">
                        {card.id}
                      </span>
                      <span className="flex-1 h-[1px] bg-[#13262D]/20" />
                    </div>

                    {/* Middle: Icon + Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
                        <img
                          src={card.icon}
                          alt={card.alt}
                          className="max-w-full max-h-full object-contain filter drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-outfit-bold text-xs sm:text-[13px] xl:text-[14px] tracking-[0.08em] text-[#13262D] uppercase leading-tight pt-1">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom: Description */}
                  <p className="font-outfit-light text-[10.5px] sm:text-[11.5px] leading-[1.65] tracking-[0.05em] text-[#13262D]/75 uppercase mt-2">
                    {card.desc}
                  </p>

                  {/* Diagonal Shimmer Reflection on Hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                    <motion.div
                      initial={{ x: "-120%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-full h-full bg-gradient-to-r from-transparent via-sky-100/25 to-transparent -skew-x-20"
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
