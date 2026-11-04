"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StructureExplosion() {
  const diagramRef = useRef<HTMLDivElement>(null);

  // Trigger open/close automatically when scrolling in/out of view
  const isInView = useInView(diagramRef, {
    amount: 0.35,
  });

  const [userToggled, setUserToggled] = useState<boolean | null>(null);
  const [prevIsInView, setPrevIsInView] = useState(isInView);

  // Reset manual toggle when scrolled out of view so it replays smoothly on scroll
  if (prevIsInView !== isInView) {
    setPrevIsInView(isInView);
    if (!isInView) {
      setUserToggled(null);
    }
  }

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
        {/* Left Side: Superyacht Deck Photo */}
        <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[320px] lg:h-auto overflow-hidden bg-[#13262D]">
          <img
            src="/images/sustainability/structure-yacht.webp"
            alt="VERTEK Superyacht Teak Deck"
            className="w-full h-full object-cover object-center select-none"
            loading="lazy"
          />
          <div className="block lg:hidden absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Right Side: Interactive STRUCTURE Diagram */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center px-4 py-8 sm:px-8 sm:py-12 lg:p-10 xl:p-14 bg-white">
          <div className="w-full max-w-[800px] flex flex-col items-center">
            {/* Interactive Diagram Stage (Exact 3080x1836 Proportional Canvas) */}
            <div
              ref={diagramRef}
              onClick={handleToggle}
              className="relative w-full aspect-[3080/1836] cursor-pointer group"
              title="Click or tap to toggle Exploded View"
            >
              {/* Title STRUCTURE */}
              <div
                style={{ left: "8%", top: "7%" }}
                className="absolute font-outfit-medium text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[0.14em] text-[#13262D] uppercase pointer-events-none z-30"
              >
                STRUCTURE
              </div>

              {/* Clean Wood Planks Base (State 1: Clean Wood, State 2: Floating/Active) */}
              <motion.div
                animate={{
                  scale: isOpen ? 1 : 0.95,
                  y: isOpen ? 0 : 12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 16,
                  mass: 1.0,
                }}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              >
                {/* Floating swell when opened (Plays 3 full rounds) */}
                <motion.div
                  animate={
                    isOpen
                      ? {
                          y: [0, -8, 0],
                        }
                      : { y: 0 }
                  }
                  transition={{
                    duration: 2.8,
                    repeat: 2, // เล่นครบ 3 รอบพอดี (1 รอบแรก + 2 รอบซ้ำ)
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  <img
                    src="/images/sustainability/structure-wood-canvas.webp"
                    alt="VERTEK Marine Teak Wood Structure"
                    className="w-full h-full object-contain select-none"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>

              {/* SVG Vector Annotations Layer (viewBox 3080 x 1836: Exact Pixel-Locked Placement) */}
              <svg
                viewBox="0 0 3080 1836"
                className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
              >
                {/* Line 1: to CORE MATERIAL */}
                <motion.path
                  d="M 720 480 L 1318 480 L 1318 753"
                  fill="none"
                  stroke="#13262D"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: isOpen ? 1 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: isOpen ? 0.2 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Line 2: to BINDER */}
                <motion.path
                  d="M 2180 1068 L 2385 1068 L 2385 1285"
                  fill="none"
                  stroke="#13262D"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: isOpen ? 1 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: isOpen ? 0.2 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Pin 1: (1318, 798) */}
                <motion.circle
                  cx="1318"
                  cy="798"
                  r="45"
                  fill="#13262D"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: isOpen ? 0.15 : 0 }}
                />
                <motion.text
                  x="1318"
                  y="814"
                  fontFamily="Outfit, sans-serif"
                  fontWeight="600"
                  fontSize="44"
                  fill="#FFFFFF"
                  textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: isOpen ? 0.15 : 0 }}
                >
                  1
                </motion.text>

                {/* Pin 2: (2135, 1068) */}
                <motion.circle
                  cx="2135"
                  cy="1068"
                  r="45"
                  fill="#13262D"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: isOpen ? 0.15 : 0 }}
                />
                <motion.text
                  x="2135"
                  y="1084"
                  fontFamily="Outfit, sans-serif"
                  fontWeight="600"
                  fontSize="44"
                  fill="#FFFFFF"
                  textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: isOpen ? 0.15 : 0 }}
                >
                  2
                </motion.text>

                {/* Label 1: CORE MATERIAL */}
                <motion.text
                  x="690"
                  y="470"
                  fontFamily="Outfit, sans-serif"
                  fontWeight="600"
                  fontSize="52"
                  letterSpacing="4"
                  fill="#13262D"
                  textAnchor="end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, delay: isOpen ? 0.35 : 0 }}
                >
                  CORE MATERIAL
                </motion.text>
                <motion.text
                  x="690"
                  y="514"
                  fontFamily="Outfit, sans-serif"
                  fontWeight="300"
                  fontSize="28"
                  letterSpacing="3"
                  fill="#13262D"
                  opacity="0.8"
                  textAnchor="end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, delay: isOpen ? 0.35 : 0 }}
                >
                  THIN-VENEER LAMINATED PLANTATION TEAK
                </motion.text>

                {/* Label 2: BINDER */}
                <motion.text
                  x="2385"
                  y="1340"
                  fontFamily="Outfit, sans-serif"
                  fontWeight="600"
                  fontSize="52"
                  letterSpacing="4"
                  fill="#13262D"
                  textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, delay: isOpen ? 0.35 : 0 }}
                >
                  BINDER
                </motion.text>
                <motion.text
                  x="2385"
                  y="1384"
                  fontFamily="Outfit, sans-serif"
                  fontWeight="300"
                  fontSize="28"
                  letterSpacing="3"
                  fill="#13262D"
                  opacity="0.8"
                  textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, delay: isOpen ? 0.35 : 0 }}
                >
                  FORMALDEHYDE FREE D4 ADHESIVE
                </motion.text>
              </svg>
            </div>

            {/* Interactive Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
              <button
                type="button"
                onClick={handleToggle}
                className="inline-flex items-center gap-2.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#13262D] text-white text-[11px] sm:text-xs font-outfit-medium tracking-wider uppercase transition-all duration-300 hover:bg-[#1E3B46] shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    isOpen
                      ? "bg-[#2DD4BF] animate-pulse shadow-[0_0_8px_#2DD4BF]"
                      : "bg-white/40"
                  }`}
                />
                <span>
                  {isOpen ? "Close (Assembled View)" : "Open (Exploded View)"}
                </span>
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
