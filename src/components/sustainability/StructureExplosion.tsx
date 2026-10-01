"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function StructureExplosion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // State: true = Open (Exploded with lines & text like Image 2)
  //        false = Closed (Assembled, film flat on wood, no lines, no text)
  const [isOpen, setIsOpen] = useState(true);

  // Automatically open when user scrolls to this section
  useEffect(() => {
    if (isInView) {
      setIsOpen(true);
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      id="structure"
      className="relative w-full bg-white text-[#13262D] py-16 sm:py-24 lg:py-28 overflow-hidden select-none"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Interactive Exploded Diagram Stage */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-full aspect-[3307/1857] cursor-pointer group"
          title="Click to toggle Open / Close"
        >
          {/* Base Layer: Title STRUCTURE + Wood Plank (always visible) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Title STRUCTURE at top-left matching Image 2 */}
            <div
              style={{ left: "9.5%", top: "9.5%" }}
              className="absolute font-outfit-medium text-2xl sm:text-4xl lg:text-5xl tracking-[0.14em] text-[#13262D] uppercase"
            >
              STRUCTURE
            </div>

            {/* Wood Plank Base */}
            <img
              src="/images/sustainability/wood-base.png"
              alt="NEXTEAK Teak Wood Core"
              className="w-full h-full object-contain"
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
              stiffness: 85,
              damping: 18,
              mass: 0.85,
            }}
            className="absolute inset-0 pointer-events-none"
          >
            <img
              src="/images/sustainability/film-layer.png"
              alt="Carbon Quantum Dot Protective Film"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Annotations Layer (Pins 1, 2, 3, Leader Lines, and Text Labels) */}
          {/* Completely hidden when closed; fades in when open */}
          <motion.div
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.35,
              delay: isOpen ? 0.18 : 0,
            }}
            className="absolute inset-0 pointer-events-none"
          >
            <img
              src="/images/sustainability/structure-annotations-clean.png"
              alt="Structure annotations: Top Layer, Core Material, Binder"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        {/* Minimalist Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#13262D] text-white text-xs font-outfit-medium tracking-widest uppercase transition-all duration-300 hover:bg-[#1E3B46] shadow-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <span
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isOpen ? "bg-[#2DD4BF] animate-pulse" : "bg-white/40"
              }`}
            />
            <span>{isOpen ? "Close (Assembled View)" : "Open (Exploded View)"}</span>
          </button>

          <span className="font-outfit-extralight text-xs tracking-wider text-[#13262D]/60 uppercase">
            Click diagram or button to toggle
          </span>
        </div>
      </div>
    </section>
  );
}
