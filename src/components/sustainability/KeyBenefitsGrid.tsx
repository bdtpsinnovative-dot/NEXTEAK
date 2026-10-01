"use client";

import React from "react";
import { motion } from "framer-motion";

interface BenefitItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const BENEFITS: BenefitItem[] = [
  {
    id: "01",
    title: "REGAL TEAK APPEARANCE",
    desc: "A REFINED STRAIGHT-GRAIN LOOK WITH TIMELESS NATURAL ELEGANCE.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#13262D]">
        <path
          d="M38 10C38 10 24 10 16 18C8 26 8 40 8 40C8 40 22 40 30 32C38 24 38 10 38 10Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 34L28 20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "2 MM VENEER ENGINEERING",
    desc: "TEAK IS SLICED INTO THIN VENEERS AND LAMINATED WITH PRECISION FOR CONSISTENCY AND BEAUTY.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#13262D]">
        <path
          d="M24 6L6 16L24 26L42 16L24 6Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 23L24 33L42 23"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 30L24 40L42 30"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "HIGH DURABILITY",
    desc: "ENGINEERED FOR LONG-TERM PERFORMANCE AND STABILITY IN DEMANDING MARINE CONDITIONS.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#13262D]">
        <path
          d="M24 6L38 12V22C38 31 32 39 24 42C16 39 10 31 10 22V12L24 6Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 24L24 18L30 24M18 30L24 24L30 30"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "MINIMAL MAINTENANCE",
    desc: "BUILT FOR PRACTICAL CARE WITH A DURABLE, EASY-TO-MAINTAIN SURFACE.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#13262D]">
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M24 6V10M24 38V42M6 24H10M38 24H42M11.27 11.27L14.1 14.1M33.9 33.9L36.73 36.73M11.27 36.73L14.1 33.9M33.9 14.1L36.73 11.27"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M21 24L23.5 26.5L27.5 21.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "05",
    title: "PLANTATION-GROWN & TRACEABLE",
    desc: "SOURCED FROM WELL-MANAGED PLANTATION TEAK WITH VERIFIED ORIGIN.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#13262D]">
        <path
          d="M24 42V26M24 26C24 16 12 16 12 16C12 26 24 26 24 26ZM24 26C24 18 36 18 36 18C36 28 24 26 24 26Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 42H38"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "06",
    title: "60 YEARS OF EXPERTISE",
    desc: "BACKED BY WOODDEN'S DEEP KNOWLEDGE FROM UPSTREAM TO DOWNSTREAM.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#13262D]">
        <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="12" cy="18" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="36" cy="18" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M17 38C17 32 20 28 24 28C28 28 31 32 31 38"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M6 38C6 34 8 31 11 31"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M42 38C42 34 40 31 37 31"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "07",
    title: "PRECISION MANUFACTURING",
    desc: "PRODUCED WITH ADVANCED MACHINERY, STRICT STANDARDS, AND RIGOROUS QUALITY CONTROL.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#13262D]">
        <path
          d="M8 40V20L18 26V20L28 26V12L40 20V40H8Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 34H20M28 34H32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "08",
    title: "RESEARCH CENTER KNOW-HOW AND MATERIAL DEVELOPMENT.",
    desc: "ENHANCED BY KNOW-HOW AND MATERIAL DEVELOPMENT FROM THE NATURAL RESEARCH CENTER.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#13262D]">
        <path
          d="M20 8L28 8M24 8V18M14 40H34M16 32C16 26 20 22 24 22C28 22 32 26 32 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="28" r="2" fill="currentColor" />
        <path
          d="M10 40H38"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function KeyBenefitsGrid() {
  return (
    <section
      id="benefits"
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden select-none bg-[#091D26]"
    >
      {/* Background Water Texture with subtle depth */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/images/sustainability/ocean-header.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#091D26]/90 via-[#0A222C]/70 to-[#091D26]/95 pointer-events-none" />

      {/* Subtle Background Watermark 'REVOTEAK' matching Image */}
      <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-8 pointer-events-none select-none opacity-[0.035] overflow-hidden">
        <span className="font-mistical text-[140px] sm:text-[220px] lg:text-[280px] text-white leading-none">
          R
        </span>
        <span className="font-mistical text-[140px] sm:text-[220px] lg:text-[280px] text-white leading-none">
          K
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-8 sm:w-16 bg-white/40" />
            <span className="font-outfit-extralight text-[11px] sm:text-sm tracking-[0.28em] text-white/85 uppercase">
              ADVANTAGES
            </span>
            <span className="h-[1px] w-8 sm:w-16 bg-white/40" />
          </div>

          <h2 className="font-mistical text-2xl sm:text-4xl lg:text-5xl tracking-wide text-white uppercase leading-tight">
            KEY BENEFITS OF REVOTEAK
          </h2>
          <p className="font-outfit-extralight text-[11px] sm:text-sm tracking-wider uppercase text-white/70 mt-2">
            ENGINEERED EXCELLENCE TESTED AND PROVEN FOR SUPERYACHT MARITIME STANDARDS
          </p>
        </div>

        {/* 8-Card Grid: Exactly 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-7">
          {BENEFITS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -5, boxShadow: "0 18px 30px -10px rgba(0, 0, 0, 0.4)" }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[210px] sm:min-h-[270px] shadow-md transition-all duration-300 border border-white/20 group relative overflow-hidden"
            >
              {/* Top number + line */}
              <div>
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="font-outfit-bold text-xs sm:text-sm tracking-widest text-[#13262D]">
                    {item.id}
                  </span>
                  <span className="h-[1px] w-6 sm:w-10 bg-[#13262D]/30 group-hover:w-12 transition-all duration-300" />
                </div>

                {/* Icon */}
                <div className="mb-3 sm:mb-4 text-[#13262D] group-hover:scale-105 transition-transform duration-300 origin-left">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-outfit-medium text-[11px] sm:text-sm lg:text-base tracking-wider uppercase text-[#13262D] mb-1.5 leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-outfit-extralight text-[9px] sm:text-xs leading-relaxed tracking-wide text-[#13262D]/75 uppercase mt-2">
                {item.desc}
              </p>

              {/* Bottom Subtle Accent Glow on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#13262D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
