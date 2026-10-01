"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function StructureExplosion() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track viewport entry/exit with amount: 0.35 (without once: true so it triggers on scroll down and up)
  const isInView = useInView(containerRef, { amount: 0.35 });

  // Start Closed (film flat on wood) so when scrolling down into view,
  // the user clearly watches it smoothly open!
  const [isOpen, setIsOpen] = useState(false);

  // When scrolling down into the section: Open!
  // When scrolling back up out of the section: Close!
  useEffect(() => {
    if (isInView) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      id="structure"
      className="relative w-full bg-white text-[#13262D] overflow-hidden select-none border-t border-black/5"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px] lg:min-h-[620px] xl:min-h-[720px]">
        {/* Left Side: Superyacht Deck Photo matching Image 1 */}
        <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] lg:h-auto overflow-hidden bg-[#13262D]">
          <img
            src="/images/sustainability/structure-yacht.jpg"
            alt="NEXTEAK Superyacht Teak Deck"
            className="w-full h-full object-cover object-center select-none"
          />
        </div>

        {/* Right Side: Interactive STRUCTURE Diagram with scroll-triggered Open/Close */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 xl:p-12 bg-white">
          {/* Interactive Diagram Stage */}
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative w-full aspect-[3307/1857] cursor-pointer group"
            title={isOpen ? "คลิกเพื่อปิดแผ่นไม้ (Click to Close)" : "คลิกเพื่อเปิดแยกแผ่นไม้ (Click to Open)"}
          >
            {/* Interactive Click Hint Badge (Top-Right) */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 group-hover:bg-[#13262D] text-[#13262D] group-hover:text-white text-[10px] sm:text-xs font-outfit-medium tracking-wider uppercase transition-colors duration-200 shadow-sm backdrop-blur-sm">
                <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-[#2DD4BF] animate-ping" : "bg-[#D97706]"}`} />
                <span>{isOpen ? "Click to Close" : "Click to Open"}</span>
              </span>
            </div>

            {/* Base Layer: Title STRUCTURE + Wood Plank Base */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Title STRUCTURE at top-left matching Image 2 */}
              <div
                style={{ left: "9.5%", top: "9.5%" }}
                className="absolute font-outfit-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-[0.14em] text-[#13262D] uppercase"
              >
                STRUCTURE
              </div>

              {/* Wood Plank Base */}
              <img
                src="/images/sustainability/wood-base.png"
                alt="NEXTEAK Teak Wood Core"
                className="w-full h-full object-contain select-none"
              />
            </div>

            {/* Floating Film Layer */}
            {/* When Closed: shifted by (+4.566%, +8.508%) to lay flat flush on the wood plank */}
            {/* When Open: at (0%, 0%), floating above the wood plank exactly like Image 2 */}
            <motion.div
              animate={{
                x: isOpen ? "0%" : "4.566%",
                y: isOpen ? "0%" : "8.508%",
              }}
              transition={{
                type: "spring",
                stiffness: 75,
                damping: 16,
                mass: 0.9,
                delay: isOpen ? 0.15 : 0,
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <img
                src="/images/sustainability/film-layer.png"
                alt="Carbon Quantum Dot Protective Film"
                className="w-full h-full object-contain select-none"
              />
            </motion.div>

            {/* Annotations Layer (Pins 1, 2, 3, Leader Lines, and Text Labels) */}
            {/* Fades out when closed; fades in smoothly when open */}
            <motion.div
              animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.98,
              }}
              transition={{
                duration: 0.35,
                delay: isOpen ? 0.3 : 0,
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <img
                src="/images/sustainability/structure-annotations-clean.png"
                alt="Structure annotations: Top Layer, Core Material, Binder"
                className="w-full h-full object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Minimalist Action Controls Below */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 lg:mt-6">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#13262D] text-white text-[11px] sm:text-xs font-outfit-medium tracking-widest uppercase transition-all duration-300 hover:bg-[#1E3B46] shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isOpen ? "bg-[#2DD4BF] animate-pulse" : "bg-white/40"
                }`}
              />
              <span>{isOpen ? "Close (Assembled View)" : "Open (Exploded View)"}</span>
            </button>

            <span className="font-outfit-extralight text-[11px] sm:text-xs tracking-wider text-[#13262D]/55 uppercase">
              Scroll down to open • Scroll up to close • Click to toggle
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
