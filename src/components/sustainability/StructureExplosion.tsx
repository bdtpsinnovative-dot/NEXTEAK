"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function StructureExplosion() {
  const diagramRef = useRef<HTMLDivElement>(null);

  // Trigger strictly when at least 50% of the actual DIAGRAM is right in front of user's eyes
  const isInView = useInView(diagramRef, {
    amount: 0.5,
  });

  const [userToggled, setUserToggled] = useState<boolean | null>(null);

  // Whenever the diagram leaves view, reset manual toggle so scrolling back in replays the opening!
  useEffect(() => {
    if (!isInView) {
      setUserToggled(null);
    }
  }, [isInView]);

  const isOpen = userToggled !== null ? userToggled : isInView;

  const handleToggle = () => {
    setUserToggled((prev) => (prev !== null ? !prev : !isOpen));
  };

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
            alt="VERTEX Superyacht Teak Deck"
            className="w-full h-full object-cover object-center select-none"
            loading="lazy"
          />
          {/* Subtle bottom gradient on mobile to blend smoothly */}
          <div className="block lg:hidden absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Right Side (Desktop: 58% / Mobile: Full Width Bottom): Interactive STRUCTURE Diagram */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center px-4 py-8 sm:px-8 sm:py-12 lg:p-10 xl:p-14 bg-white">
          <div className="w-full max-w-[800px] flex flex-col items-center">
            {/* Interactive Diagram Stage */}
            <div
              ref={diagramRef}
              onClick={handleToggle}
              className="relative w-full aspect-[3307/1857] cursor-pointer group"
              title="Click or tap to toggle Open / Close"
            >
              {/* Base Layer: Title STRUCTURE + Wood Plank Base */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  style={{ left: "9.5%", top: "9.5%" }}
                  className="absolute font-outfit-medium text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[0.14em] text-[#13262D] uppercase"
                >
                  STRUCTURE
                </div>

                {/* Wood Plank Base */}
                <img
                  src="/images/sustainability/wood-base.webp"
                  alt="VERTEX Teak Wood Core"
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                />
              </div>

              {/* Floating Film Layer */}
              {/* Closed: x: 4.566%, y: 8.508% (flat on wood) */}
              {/* Open: x: 0%, y: 0% (floating above wood like Master Graphic) */}
              <motion.div
                animate={{
                  x: isOpen ? "0%" : "4.566%",
                  y: isOpen ? "0%" : "8.508%",
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 14,
                  mass: 1.0,
                  delay: isOpen ? 0.25 : 0,
                }}
                className="absolute inset-0 pointer-events-none"
              >
                {/* Subtle continuous floating swing when exploded */}
                <motion.div
                  animate={
                    isOpen
                      ? {
                          y: [0, -7, 0],
                        }
                      : { y: 0 }
                  }
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  <img
                    src="/images/sustainability/film-layer.webp"
                    alt="Carbon Quantum Dot Protective Film"
                    className="w-full h-full object-contain select-none"
                  />
                </motion.div>
              </motion.div>

              {/* Annotations Layer (Pins 1, 2, 3, Leader Lines, and Text Labels) */}
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  scale: isOpen ? 1 : 0.97,
                }}
                transition={{
                  duration: 0.5,
                  delay: isOpen ? 0.45 : 0,
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <img
                  src="/images/sustainability/structure-annotations-clean.webp"
                  alt="Structure annotations"
                  className="w-full h-full object-contain select-none"
                />
              </motion.div>
            </div>

            {/* Minimalist Action Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
              <button
                type="button"
                onClick={handleToggle}
                className="inline-flex items-center gap-2.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#13262D] text-white text-[11px] sm:text-xs font-outfit-medium tracking-wider uppercase transition-all duration-300 hover:bg-[#1E3B46] shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-[#2DD4BF] animate-pulse shadow-[0_0_8px_#2DD4BF]" : "bg-white/40"
                  }`}
                />
                <span>{isOpen ? "Close (Assembled View)" : "Open (Exploded View)"}</span>
              </button>

              <span className="font-outfit-extralight text-[11px] sm:text-xs tracking-wider text-[#13262D]/60 uppercase flex items-center gap-1.5">
                <span className="text-[#2DD4BF]">✦</span>
                <span>Scroll or tap wood to toggle</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
