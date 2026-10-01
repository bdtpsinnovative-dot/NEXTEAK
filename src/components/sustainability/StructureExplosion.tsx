"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function StructureExplosion() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Trigger on scroll entry/exit
  const isInView = useInView(containerRef, { amount: 0.25 });

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
      {/* Side-by-Side Unified Layout (Both Mobile and Desktop match Image 2) */}
      <div className="w-full grid grid-cols-12 items-stretch min-h-[180px] sm:min-h-[320px] md:min-h-[440px] lg:min-h-[600px] xl:min-h-[700px]">
        {/* Left Side (approx 42%): Superyacht Deck Photo */}
        <div className="col-span-5 relative w-full h-full overflow-hidden bg-[#13262D]">
          <img
            src="/images/sustainability/structure-yacht.jpg"
            alt="NEXTEAK Superyacht Teak Deck"
            className="w-full h-full object-cover object-center select-none"
          />
        </div>

        {/* Right Side (approx 58%): Interactive STRUCTURE Diagram */}
        <div className="col-span-7 relative flex flex-col justify-center items-center p-2 sm:p-5 md:p-8 xl:p-12 bg-white">
          {/* Interactive Diagram Stage */}
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative w-full aspect-[3307/1857] cursor-pointer group"
            title="Click to toggle Open / Close"
          >
            {/* Base Layer: Title STRUCTURE + Wood Plank Base */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                style={{ left: "9.5%", top: "9.5%" }}
                className="absolute font-outfit-medium text-xs sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[0.14em] text-[#13262D] uppercase"
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
            {/* Closed: x: 4.566%, y: 8.508% (flat on wood) */}
            {/* Open: x: 0%, y: 0% (floating above wood like Image 2) */}
            <motion.div
              animate={{
                x: isOpen ? "0%" : "4.566%",
                y: isOpen ? "0%" : "8.508%",
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 17,
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
                alt="Structure annotations"
                className="w-full h-full object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Minimalist Action Controls Below */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mt-2 sm:mt-4 lg:mt-6">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 py-1 sm:px-5 sm:py-2 rounded-full bg-[#13262D] text-white text-[9px] sm:text-xs font-outfit-medium tracking-wider uppercase transition-all duration-300 hover:bg-[#1E3B46] shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <span
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                  isOpen ? "bg-[#2DD4BF] animate-pulse" : "bg-white/40"
                }`}
              />
              <span>{isOpen ? "Close (Assembled View)" : "Open (Exploded View)"}</span>
            </button>

            <span className="font-outfit-extralight text-[9px] sm:text-xs tracking-wider text-[#13262D]/55 uppercase hidden xs:inline">
              Scroll or tap to toggle
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
