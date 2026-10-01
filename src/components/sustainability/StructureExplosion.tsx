"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const MOBILE_LAYERS = [
  {
    num: "1",
    title: "TOP LAYER",
    tech: "CARBON QUANTUM DOT POLY URETHANE COATING",
    badge: "SURFACE PROTECTION",
    color: "#2DD4BF",
  },
  {
    num: "2",
    title: "CORE MATERIAL",
    tech: "CERTIFIED THIN VENEER, FINGER-JOINTED LAMINATED PLANTATION TEAK",
    badge: "STRUCTURAL TIMBER",
    color: "#D97706",
  },
  {
    num: "3",
    title: "BINDER",
    tech: "D4 POLY URETHANE GLUE",
    badge: "MARINE BONDING",
    color: "#3B82F6",
  },
];

export default function StructureExplosion() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track viewport entry/exit with amount: 0.3
  const isInView = useInView(containerRef, { amount: 0.3 });

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
      {/* ============================================================== */}
      {/* 1. DESKTOP VIEW (lg: and above) — EXACT 2-COLUMN IMAGE 1 & 2 */}
      {/* ============================================================== */}
      <div className="hidden lg:grid grid-cols-12 items-stretch min-h-[620px] xl:min-h-[720px]">
        {/* Left Side: Superyacht Deck Photo matching Image 1 */}
        <div className="col-span-5 relative w-full h-auto overflow-hidden bg-[#13262D]">
          <img
            src="/images/sustainability/structure-yacht.jpg"
            alt="NEXTEAK Superyacht Teak Deck"
            className="w-full h-full object-cover object-center select-none"
          />
        </div>

        {/* Right Side: Interactive STRUCTURE Diagram */}
        <div className="col-span-7 relative flex flex-col justify-center items-center p-6 lg:p-8 xl:p-12 bg-white">
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
                className="absolute font-outfit-medium text-3xl lg:text-4xl xl:text-5xl tracking-[0.14em] text-[#13262D] uppercase"
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
          <div className="flex items-center justify-center gap-5 mt-5 xl:mt-8">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#13262D] text-white text-xs font-outfit-medium tracking-widest uppercase transition-all duration-300 hover:bg-[#1E3B46] shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isOpen ? "bg-[#2DD4BF] animate-pulse" : "bg-white/40"
                }`}
              />
              <span>{isOpen ? "Close (Assembled View)" : "Open (Exploded View)"}</span>
            </button>

            <span className="font-outfit-extralight text-xs tracking-wider text-[#13262D]/55 uppercase">
              Scroll down to open • Scroll up to close • Click to toggle
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MOBILE & TABLET VIEW (< lg) — FULLY RESPONSIVE & HIGH LEGIBILITY */}
      {/* ============================================================== */}
      <div className="lg:hidden flex flex-col w-full">
        {/* Top Panoramic Yacht Banner */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#13262D] relative">
          <img
            src="/images/sustainability/structure-yacht.jpg"
            alt="NEXTEAK Superyacht Teak Deck"
            className="w-full h-full object-cover object-center select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Structure Content Area */}
        <div className="p-5 sm:p-8 bg-white flex flex-col items-center">
          {/* Header */}
          <div className="w-full flex items-center justify-between mb-4">
            <div>
              <span className="font-outfit-extralight text-[11px] tracking-[0.2em] text-[#13262D]/60 uppercase block">
                COMPOSITE ARCHITECTURE
              </span>
              <h2 className="font-outfit-medium text-2xl sm:text-3xl tracking-[0.14em] text-[#13262D] uppercase">
                STRUCTURE
              </h2>
            </div>

            {/* Compact Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="px-3.5 py-1.5 rounded-full bg-[#13262D] text-white text-[11px] font-outfit-medium tracking-wider uppercase shadow-sm cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-[#2DD4BF] animate-pulse" : "bg-white/40"}`} />
              <span>{isOpen ? "Close" : "Open"}</span>
            </button>
          </div>

          {/* Interactive Stage on Mobile */}
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative w-full max-w-[480px] aspect-[16/11] my-2 cursor-pointer flex items-center justify-center"
          >
            {/* Base Wood Plank */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <img
                src="/images/sustainability/wood-base.png"
                alt="Teak Wood Core Base"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Floating Film Layer */}
            <motion.div
              animate={{
                x: isOpen ? "0%" : "4.566%",
                y: isOpen ? "-6%" : "8.508%",
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 16,
                mass: 0.9,
                delay: isOpen ? 0.12 : 0,
              }}
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
            >
              <img
                src="/images/sustainability/film-layer.png"
                alt="Carbon Quantum Dot Film"
                className={`w-full h-full object-contain transition-all duration-300 ${
                  isOpen ? "drop-shadow-[0_16px_20px_rgba(19,38,45,0.25)]" : ""
                }`}
              />

              {/* Pin 1 on Film */}
              <div
                style={{ left: "45.9%", top: "35%" }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#13262D] text-white text-[11px] font-outfit-bold flex items-center justify-center shadow-md">
                  1
                </span>
              </div>
            </motion.div>

            {/* Pin 2 on Wood */}
            <div
              style={{ left: "35.86%", top: "50.81%" }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-6 h-6 rounded-full bg-[#13262D] text-white text-[11px] font-outfit-bold flex items-center justify-center shadow-md">
                2
              </span>
            </div>

            {/* Pin 3 on Binder */}
            <div
              style={{ left: "41.34%", top: "64.45%" }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-6 h-6 rounded-full bg-[#13262D] text-white text-[11px] font-outfit-bold flex items-center justify-center shadow-md">
                3
              </span>
            </div>
          </div>

          <p className="text-[11px] font-outfit-extralight text-[#13262D]/60 tracking-wider uppercase mb-4 text-center">
            Tap diagram to {isOpen ? "close" : "explode"} • Scrolls to animate
          </p>

          {/* Clean Mobile Layer Cards (100% Legible, No Cutoffs!) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[480px] flex flex-col gap-2.5"
              >
                {MOBILE_LAYERS.map((layer) => (
                  <div
                    key={layer.num}
                    className="p-3.5 rounded-xl bg-[#F8F9FA] border border-black/5 flex items-start gap-3 shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#13262D] text-white text-xs font-outfit-bold flex items-center justify-center shrink-0 mt-0.5">
                      {layer.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h4 className="font-outfit-medium text-xs tracking-wider uppercase text-[#13262D]">
                          {layer.title}
                        </h4>
                        <span className="text-[9px] font-outfit-medium tracking-widest text-[#13262D]/50 uppercase">
                          {layer.badge}
                        </span>
                      </div>
                      <p className="font-outfit-extralight text-[11px] leading-tight text-[#13262D]/75 uppercase">
                        {layer.tech}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
