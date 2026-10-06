"use client";

import React from "react";
import { motion } from "framer-motion";

const INNOVATION_CARDS = [
  {
    id: 1,
    image: "/images/sustainability/inno-1.webp",
    alt: "Thin Veneer Engineering Teak Sheet",
    title: "THIN VENEER ENGINEERING",
    desc: "TEAK IS SLICED INTO THIN VENEERS (ABOUT 2 MM) AND LAMINATED WITH PRECISION, CREATING A STRAIGHT-GRAIN APPEARANCE WITH ENHANCED STABILITY AND EFFICIENT USE OF NATURAL RESOURCES.",
  },
  {
    id: 2,
    image: "/images/sustainability/inno-2.webp",
    alt: "Carbon Quantum Dot Coating Hydrophobic Droplets",
    title: "CARBON QUANTUM DOT COATING",
    desc: "IMPROVES SURFACE HARDNESS, UV RESISTANCE AND EASY-CLEAN PERFORMANCE, WHILE PRESERVING THE NATURAL LOOK AND FEEL OF REAL TEAK.",
  },
  {
    id: 3,
    image: "/images/sustainability/inno-3.webp",
    alt: "Engineered For The Sea Luxury Marine Deck Cleat",
    title: "ENGINEERED FOR THE SEA",
    desc: "A HIGH-PERFORMANCE STRUCTURE DESIGNED FOR MARINE ENVIRONMENTS BEAUTIFUL, STABLE AND BUILT TO LAST.",
  },
];

export default function InnovationResearch() {
  return (
    <section className="relative w-full bg-white text-[#13262D] py-20 sm:py-28 lg:py-36 overflow-hidden select-none">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & MTEC Accreditation */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Header Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-outfit-extralight text-xs sm:text-sm tracking-[0.25em] text-[#13262D]/60 uppercase">
                  INNOVATION & RESEARCH
                </span>
                <span className="h-[1px] w-12 sm:w-20 bg-[#13262D]/25" />
              </div>

              {/* Serif Title */}
              <h2 className="font-mistical text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-wide text-[#13262D] uppercase mb-8">
                NATURE MEETS
                <br />
                ADVANCED
                <br />
                TECHNOLOGY
              </h2>

              {/* Body Text */}
              <p className="font-outfit-extralight text-xs sm:text-sm leading-relaxed tracking-wider text-[#13262D]/80 uppercase mb-10 max-w-md">
                WITH OVER 5 YEARS OF DEDICATED RESEARCH AND DEVELOPMENT, VERTEX IS
                ENGINEERED WITH ADVANCED TECHNOLOGY SUCH AS CARBON QUANTUM DOT SURFACE
                TREATMENT, CREATING A DECKING MATERIAL THAT IS MORE DURABLE, STABLE AND
                EASIER TO MAINTAIN — WHILE PRESERVING THE NATURAL BEAUTY OF TEAK.
              </p>
            </div>

            {/* MTEC Footer */}
            <div className="pt-6 border-t border-[#13262D]/20">
              <span className="font-outfit-regular text-xs sm:text-sm tracking-wider uppercase text-[#13262D]">
                DEVELOPED WITH RESEARCH SUPPORT FROM MTEC.
              </span>
            </div>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {INNOVATION_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col group"
              >
                {/* Rounded Square Image */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5 bg-[#F4F6F8] shadow-sm">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Card Title */}
                <h3 className="font-outfit-medium text-sm sm:text-base tracking-wider uppercase text-[#13262D] mb-2 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="font-outfit-extralight text-xs leading-relaxed tracking-wider text-[#13262D]/75 uppercase">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
