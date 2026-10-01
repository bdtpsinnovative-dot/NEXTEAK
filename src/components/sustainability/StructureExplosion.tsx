"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

interface LayerData {
  id: number;
  pinNumber: string;
  name: string;
  subtitle: string;
  badge: string;
  techSpec: string;
  description: string;
  color: string;
}

const LAYERS: LayerData[] = [
  {
    id: 1,
    pinNumber: "1",
    name: "TOP LAYER",
    subtitle: "CARBON QUANTUM DOT POLY URETHANE COATING",
    badge: "SURFACE PROTECTION",
    techSpec: "Advanced CQD Surface Shield • Hydrophobic • UV-Proof",
    description:
      "A proprietary nano-engineered carbon quantum dot coating delivering exceptional scratch hardness, extreme saltwater UV resistance, and self-cleaning hydrophobic performance while preserving the authentic warm feel and natural grain of real teak.",
    color: "#2DD4BF",
  },
  {
    id: 2,
    pinNumber: "2",
    name: "CORE MATERIAL",
    subtitle: "CERTIFIED THIN VENEER, FINGER-JOINTED LAMINATED PLANTATION TEAK",
    badge: "STRUCTURAL TIMBER",
    techSpec: "2 mm Precision Veneers • 30+ Year Mature Teak • Straight-Grain",
    description:
      "Sourced exclusively from certified 30+ year mature plantation teak forests. Sliced into 2 mm precision veneers and finger-jointed laminated to achieve maximum dimensional stability, zero warping, and uniform golden-grain aesthetics across massive deck areas.",
    color: "#D97706",
  },
  {
    id: 3,
    pinNumber: "3",
    name: "BINDER",
    subtitle: "D4 POLY URETHANE GLUE",
    badge: "MARINE BONDING",
    techSpec: "EN 204 Class D4 • Waterproof • High Heat & Boiling Resistant",
    description:
      "High-performance marine-grade D4 polyurethane structural adhesive meeting stringent EN 204 standards. Provides complete resistance against prolonged tropical heat, humidity, boiling water, and intense marine vibrations without delamination.",
    color: "#3B82F6",
  },
];

export default function StructureExplosion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [manualSeparation, setManualSeparation] = useState<number | null>(null);
  const [autoPlaying, setAutoPlaying] = useState<boolean>(false);

  // Link scroll progress to explosion separation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // Smooth scroll mapping: 0 -> 1 separation
  const scrollSeparation = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);
  const smoothScroll = useSpring(scrollSeparation, { stiffness: 90, damping: 25, mass: 0.8 });

  // Current separation ratio: manual slider / toggle overrides or smooth scroll
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (manualSeparation !== null) {
      setCurrentProgress(manualSeparation);
      return;
    }

    const unsubscribe = smoothScroll.on("change", (latest) => {
      if (manualSeparation === null) {
        setCurrentProgress(Math.max(0, Math.min(1, latest)));
      }
    });

    return () => unsubscribe();
  }, [smoothScroll, manualSeparation]);

  // Handle auto-demo play
  useEffect(() => {
    if (!autoPlaying) return;
    let step = 0;
    const interval = setInterval(() => {
      step += 0.02;
      const val = (Math.sin(step) + 1) / 2; // oscillates between 0 and 1
      setCurrentProgress(val);
      setManualSeparation(val);
    }, 30);
    return () => clearInterval(interval);
  }, [autoPlaying]);

  // Isometric translation offsets
  // When progress = 0 (assembled): film is shifted (+4.566% x, +8.508% y) flush onto wood surface
  // When progress = 1 (exploded): film floats up to (0% x, 0% y) or slightly higher (-1.5% x, -2.5% y)
  const filmShiftX = (1 - currentProgress) * 4.566 - currentProgress * 1.5;
  const filmShiftY = (1 - currentProgress) * 8.508 - currentProgress * 2.5;

  // Pin 1 follows the film
  const pin1X = 45.91 + filmShiftX;
  const pin1Y = 34.98 + filmShiftY;

  return (
    <section
      ref={containerRef}
      id="structure"
      className="relative w-full bg-white text-[#13262D] py-16 sm:py-24 lg:py-32 overflow-hidden select-none"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-outfit-extralight text-xs sm:text-sm tracking-[0.25em] text-[#13262D]/60 uppercase">
              ENGINEERED COMPOSITE ARCHITECTURE
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-[#13262D]/25" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-outfit-medium text-3xl sm:text-4xl lg:text-5xl tracking-[0.14em] text-[#13262D] uppercase">
                STRUCTURE
              </h2>
              <p className="font-outfit-extralight text-sm sm:text-base text-[#13262D]/75 mt-2 max-w-xl">
                Scroll down to witness the protective nano-layer separate from the structural teak core,
                revealing NEXTEAK’s revolutionary multi-tier maritime composite.
              </p>
            </div>

            {/* Interactive Mode Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-[#F4F6F8] p-1.5 sm:p-2 rounded-xl border border-black/5 self-start md:self-auto">
              <button
                type="button"
                onClick={() => {
                  setAutoPlaying(false);
                  setManualSeparation(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-outfit-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  manualSeparation === 0
                    ? "bg-[#13262D] text-white shadow-sm"
                    : "text-[#13262D]/70 hover:text-[#13262D]"
                }`}
              >
                Assembled
              </button>
              <button
                type="button"
                onClick={() => {
                  setAutoPlaying(false);
                  setManualSeparation(1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-outfit-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  manualSeparation === 1
                    ? "bg-[#13262D] text-white shadow-sm"
                    : "text-[#13262D]/70 hover:text-[#13262D]"
                }`}
              >
                Exploded View
              </button>
              <button
                type="button"
                onClick={() => {
                  setAutoPlaying(false);
                  setManualSeparation(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-outfit-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  manualSeparation === null && !autoPlaying
                    ? "bg-[#13262D] text-white shadow-sm"
                    : "text-[#13262D]/70 hover:text-[#13262D]"
                }`}
              >
                Scroll-Linked
              </button>
              <button
                type="button"
                onClick={() => setAutoPlaying((prev) => !prev)}
                className={`px-3 py-1.5 rounded-lg text-xs font-outfit-medium tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  autoPlaying
                    ? "bg-[#D97706] text-white shadow-sm"
                    : "text-[#13262D]/70 hover:text-[#13262D]"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${autoPlaying ? "bg-white animate-ping" : "bg-[#D97706]"}`} />
                {autoPlaying ? "Pause Demo" : "Auto Play"}
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Luxury Yacht Photography */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg group min-h-[380px] lg:min-h-full">
            <img
              src="/images/sustainability/structure-yacht.jpg"
              alt="NEXTEAK Luxury Marine Superyacht Deck"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13262D]/70 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="font-outfit-thin text-xs uppercase tracking-[0.2em] text-white/80 block mb-1">
                TESTED IN OPEN SEAS
              </span>
              <p className="font-outfit-regular text-sm sm:text-base leading-snug text-white/95">
                Precision-engineered yacht deck surfaces, crafted to endure direct tropical sunlight, salt spray, and heavy foot traffic.
              </p>
            </div>
          </div>

          {/* Right Column: Exploded Wood Structure Canvas */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#F8F9FA] rounded-2xl p-4 sm:p-6 lg:p-8 border border-black/5 shadow-sm relative overflow-hidden">
            {/* Top Interactive Separation Slider */}
            <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-black/5">
              <div className="flex items-center gap-2">
                <span className="font-outfit-medium text-xs tracking-wider uppercase text-[#13262D]">
                  Separation Level:
                </span>
                <span className="font-outfit-bold text-xs text-[#13262D] px-2 py-0.5 rounded bg-black/5">
                  {Math.round(currentProgress * 100)}%
                </span>
              </div>
              <div className="flex-1 max-w-xs">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={currentProgress}
                  onChange={(e) => {
                    setAutoPlaying(false);
                    setManualSeparation(parseFloat(e.target.value));
                  }}
                  className="w-full accent-[#13262D] cursor-pointer h-1.5 bg-black/10 rounded-lg appearance-none"
                  aria-label="Adjust layer separation"
                />
              </div>
            </div>

            {/* Stage: Exploded Diagram */}
            <div className="relative w-full aspect-[3307/1857] my-auto flex items-center justify-center">
              {/* Layer 1: Base Wood Plank (Teak Core) */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src="/images/sustainability/wood-base.png"
                  alt="Certified Thin Veneer Plantation Teak Base"
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    activeLayer === 2 || activeLayer === 3 ? "brightness-105 contrast-105" : ""
                  }`}
                />
              </div>

              {/* Layer 2: Floating Film Layer (Carbon Quantum Dot Coating) */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  transform: `translate(${filmShiftX}%, ${filmShiftY}%)`,
                  filter:
                    currentProgress > 0.1
                      ? `drop-shadow(0 ${Math.round(currentProgress * 28)}px ${Math.round(
                          currentProgress * 32
                        )}px rgba(19, 38, 45, ${0.15 + currentProgress * 0.2}))`
                      : "none",
                }}
                animate={
                  currentProgress > 0.4 && !autoPlaying
                    ? {
                        y: [0, -4, 0],
                        transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                      }
                    : {}
                }
              >
                <img
                  src="/images/sustainability/film-layer.png"
                  alt="Carbon Quantum Dot Polyurethane Coating Film"
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    activeLayer === 1 ? "brightness-125" : ""
                  }`}
                />
              </motion.div>

              {/* SVG Leader Lines & Callout Anchors */}
              <svg
                viewBox="0 0 1000 562"
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
              >
                {/* Line 1: Pin 1 -> Right Callout */}
                <motion.path
                  d={`M ${pin1X * 10} ${pin1Y * 5.62} L ${Math.max(pin1X * 10 + 120, 680)} ${pin1Y * 5.62} L 740 270 L 780 270`}
                  fill="none"
                  stroke="#13262D"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: currentProgress > 0.15 ? 1 : 0,
                    opacity: currentProgress > 0.15 ? 0.7 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Line 2: Pin 2 -> Left Callout */}
                <motion.path
                  d="M 358.6 285.5 L 240 285.5 L 240 370 L 200 370"
                  fill="none"
                  stroke="#13262D"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: currentProgress > 0.1 ? 1 : 0,
                    opacity: currentProgress > 0.1 ? 0.7 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Line 3: Pin 3 -> Bottom Callout */}
                <motion.path
                  d="M 413.4 362.2 L 525 362.2 L 525 440 L 550 440"
                  fill="none"
                  stroke="#13262D"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: currentProgress > 0.1 ? 1 : 0,
                    opacity: currentProgress > 0.1 ? 0.7 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </svg>

              {/* Pin 1: Connected to Floating Film */}
              <div
                style={{
                  left: `${pin1X}%`,
                  top: `${pin1Y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setActiveLayer(1)}
                className={`absolute z-30 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#13262D] text-white text-xs sm:text-sm font-outfit-bold shadow-lg cursor-pointer transition-transform duration-300 hover:scale-125 ${
                  activeLayer === 1 ? "ring-4 ring-[#2DD4BF] scale-125" : ""
                }`}
                title="Top Layer: Carbon Quantum Dot Coating"
              >
                1
                <span className="absolute inset-0 rounded-full bg-white/30 animate-ping pointer-events-none opacity-40" />
              </div>

              {/* Pin 2: Anchored to Core Material */}
              <div
                style={{
                  left: "35.86%",
                  top: "50.81%",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setActiveLayer(2)}
                className={`absolute z-30 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#13262D] text-white text-xs sm:text-sm font-outfit-bold shadow-lg cursor-pointer transition-transform duration-300 hover:scale-125 ${
                  activeLayer === 2 ? "ring-4 ring-[#D97706] scale-125" : ""
                }`}
                title="Core Material: Certified Plantation Teak"
              >
                2
              </div>

              {/* Pin 3: Anchored to Binder Seam */}
              <div
                style={{
                  left: "41.34%",
                  top: "64.45%",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setActiveLayer(3)}
                className={`absolute z-30 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#13262D] text-white text-xs sm:text-sm font-outfit-bold shadow-lg cursor-pointer transition-transform duration-300 hover:scale-125 ${
                  activeLayer === 3 ? "ring-4 ring-[#3B82F6] scale-125" : ""
                }`}
                title="Binder: D4 Polyurethane Glue"
              >
                3
              </div>

              {/* On-Diagram Callout Labels (Desktop View) */}
              {/* Callout 1 (Top Layer) */}
              <div
                className={`hidden xl:block absolute right-2 top-[38%] text-left max-w-[210px] transition-all duration-300 ${
                  activeLayer === 1 ? "scale-105 opacity-100" : "opacity-90"
                }`}
              >
                <div
                  onClick={() => setActiveLayer(1)}
                  className="cursor-pointer group p-2 rounded-lg hover:bg-black/5 transition-colors"
                >
                  <span className="font-outfit-medium text-xs sm:text-sm tracking-widest text-[#13262D] block group-hover:text-[#2DD4BF] transition-colors uppercase">
                    TOP LAYER
                  </span>
                  <p className="font-outfit-extralight text-[11px] leading-tight text-[#13262D]/80 uppercase mt-0.5">
                    CARBON QUANTUM DOT POLY URETHANE COATING
                  </p>
                </div>
              </div>

              {/* Callout 2 (Core Material) */}
              <div
                className={`hidden xl:block absolute left-2 bottom-[26%] text-right max-w-[210px] transition-all duration-300 ${
                  activeLayer === 2 ? "scale-105 opacity-100" : "opacity-90"
                }`}
              >
                <div
                  onClick={() => setActiveLayer(2)}
                  className="cursor-pointer group p-2 rounded-lg hover:bg-black/5 transition-colors"
                >
                  <span className="font-outfit-medium text-xs sm:text-sm tracking-widest text-[#13262D] block group-hover:text-[#D97706] transition-colors uppercase">
                    CORE MATERIAL
                  </span>
                  <p className="font-outfit-extralight text-[11px] leading-tight text-[#13262D]/80 uppercase mt-0.5">
                    CERTIFIED THIN VENEER, FINGER-JOINTED LAMINATED PLANTATION TEAK
                  </p>
                </div>
              </div>

              {/* Callout 3 (Binder) */}
              <div
                className={`hidden xl:block absolute left-[52%] bottom-[3%] text-left max-w-[190px] transition-all duration-300 ${
                  activeLayer === 3 ? "scale-105 opacity-100" : "opacity-90"
                }`}
              >
                <div
                  onClick={() => setActiveLayer(3)}
                  className="cursor-pointer group p-2 rounded-lg hover:bg-black/5 transition-colors"
                >
                  <span className="font-outfit-medium text-xs sm:text-sm tracking-widest text-[#13262D] block group-hover:text-[#3B82F6] transition-colors uppercase">
                    BINDER
                  </span>
                  <p className="font-outfit-extralight text-[11px] leading-tight text-[#13262D]/80 uppercase mt-0.5">
                    D4 POLY URETHANE GLUE
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status Indicator */}
            <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-outfit-extralight text-[#13262D]/60">
              <span>Click on pins 1, 2, or 3 or use the slider to inspect layer composition.</span>
              <span className="hidden sm:inline">Engineered with MTEC Research Support</span>
            </div>
          </div>
        </div>

        {/* 3 Interactive Layer Detail Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {LAYERS.map((layer) => {
            const isSelected = activeLayer === layer.id;
            return (
              <motion.div
                key={layer.id}
                onClick={() => setActiveLayer(isSelected ? null : layer.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 border ${
                  isSelected
                    ? "bg-[#13262D] text-white border-[#13262D] shadow-xl"
                    : "bg-white text-[#13262D] border-black/10 hover:border-black/25 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-outfit-bold ${
                        isSelected ? "bg-white text-[#13262D]" : "bg-[#13262D] text-white"
                      }`}
                    >
                      {layer.pinNumber}
                    </span>
                    <span
                      className={`text-[10px] tracking-widest font-outfit-medium uppercase px-2.5 py-1 rounded-full ${
                        isSelected ? "bg-white/15 text-white" : "bg-black/5 text-[#13262D]/80"
                      }`}
                    >
                      {layer.badge}
                    </span>
                  </div>
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: layer.color }}
                  />
                </div>

                <h3
                  className={`font-outfit-medium text-lg tracking-wider uppercase mb-1.5 ${
                    isSelected ? "text-white" : "text-[#13262D]"
                  }`}
                >
                  {layer.name}
                </h3>
                <h4
                  className={`font-outfit-extralight text-xs tracking-wider uppercase mb-3 ${
                    isSelected ? "text-white/80" : "text-[#13262D]/70"
                  }`}
                >
                  {layer.subtitle}
                </h4>

                <p
                  className={`font-outfit-extralight text-xs sm:text-sm leading-relaxed ${
                    isSelected ? "text-white/90" : "text-[#13262D]/80"
                  }`}
                >
                  {layer.description}
                </p>

                <div
                  className={`mt-4 pt-3 border-t text-[11px] font-outfit-medium tracking-wide ${
                    isSelected
                      ? "border-white/20 text-[#2DD4BF]"
                      : "border-black/5 text-[#13262D]/60"
                  }`}
                >
                  {layer.techSpec}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
