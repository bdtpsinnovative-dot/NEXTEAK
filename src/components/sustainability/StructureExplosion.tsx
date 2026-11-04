"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function StructureExplosion() {
  const diagramRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="structure"
      className="relative w-full bg-white text-[#13262D] overflow-hidden select-none border-t border-black/5"
    >
      {/* Responsive Layout: Stacked on Mobile/Tablet (< 1024px), Side-by-Side on Desktop (>= 1024px) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Side (Desktop: 42% / Mobile: Top 240-340px): Superyacht Deck Photo */}
        <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[320px] lg:h-auto overflow-hidden bg-[#13262D]">
          <img
            src="/images/sustainability/structure-yacht.webp"
            alt="VERTEK Superyacht Teak Deck"
            className="w-full h-full object-cover object-center select-none"
            loading="lazy"
          />
          {/* Subtle bottom gradient on mobile to blend smoothly */}
          <div className="block lg:hidden absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Right Side (Desktop: 58% / Mobile: Full Width Bottom): STRUCTURE Diagram (2-Layer) */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center px-4 py-8 sm:px-8 sm:py-12 lg:p-10 xl:p-14 bg-white">
          <div className="w-full max-w-[800px] flex flex-col items-center">
            {/* Diagram Stage */}
            <motion.div
              ref={diagramRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[3080/1836]"
            >
              {/* Title STRUCTURE */}
              <div
                style={{ left: "8%", top: "7%" }}
                className="absolute font-outfit-medium text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[0.14em] text-[#13262D] uppercase pointer-events-none z-10"
              >
                STRUCTURE
              </div>

              {/* 2-Layer Wood Structure Diagram */}
              <img
                src="/images/sustainability/structure-2-layer.webp"
                alt="VERTEK 2-Layer Structure Diagram"
                className="w-full h-full object-contain select-none"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
