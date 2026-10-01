"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface LayerInfo {
  id: number;
  number: string;
  name: string;
  techTitle: string;
  spec: string;
  descTh: string;
  descEn: string;
  badge: string;
}

const LAYERS: LayerInfo[] = [
  {
    id: 1,
    number: "01",
    name: "TOP LAYER",
    techTitle: "CARBON QUANTUM DOT POLY URETHANE COATING",
    spec: "Nano CQD Treatment • Hydrophobic • UV & Scratch Shield",
    descTh:
      "ชั้นเคลือบผิวเทคโนโลยีระดับนาโน Carbon Quantum Dot ปกป้องผิวไม้จากรังสี UV และน้ำเค็มได้อย่างดีเยี่ยม ทนต่อรอยขีดข่วน ทำความสะอาดง่าย แต่ยังคงสัมผัสและลวดลายอบอุ่นของไม้สักธรรมชาติแท้",
    descEn:
      "Advanced nano-engineered carbon quantum dot coating. Delivers superior UV resistance, hydrophobic water repellent performance, and scratch hardness while preserving the authentic warm tactile touch of natural teak.",
    badge: "SURFACE PROTECTION",
  },
  {
    id: 2,
    number: "02",
    name: "CORE MATERIAL",
    techTitle: "CERTIFIED THIN VENEER, FINGER-JOINTED LAMINATED PLANTATION TEAK",
    spec: "2 mm Precision Veneers • 30+ Year Mature Teak • Zero Warping",
    descTh:
      "แกนไม้สักแท้คัดเกรดจากป่าปลูกอายุ 30+ ปี ฝานเป็นแผ่นบาง (ประมาณ 2 มม.) ต่อประสานแบบ Finger-joint เพื่อความเสถียรสูงสุด ไม่โก่ง ไม่งอ ให้ลวดลายเกรนตรงสม่ำเสมอสวยงามตลอดแนวเรือ",
    descEn:
      "Certified 30+ year mature plantation teak sliced into 2 mm precision veneers. Finger-jointed and laminated for maximum dimensional stability and uniform straight-grain aesthetics across yacht decks.",
    badge: "STRUCTURAL TIMBER",
  },
  {
    id: 3,
    number: "03",
    name: "BINDER",
    techTitle: "D4 POLY URETHANE GLUE",
    spec: "EN 204 Class D4 • Boiling Water Proof • High Humidity Proof",
    descTh:
      "กาวโพลียูรีเทนเกรดมารีนระดับ D4 ตามมาตรฐานสากล EN 204 ทนทานต่อน้ำเดือด ความร้อน และความชื้นในสภาวะทะเลลึก ไม่หลุดร่อนตลอดอายุการใช้งาน",
    descEn:
      "Marine-grade D4 polyurethane structural adhesive meeting stringent EN 204 standards. Built for extreme marine exposure, continuous saltwater contact, and high heat without delamination.",
    badge: "MARINE BONDING",
  },
];

export default function StructureExplosion() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  // State: exploded (separated) or stacked (assembled)
  const [isExploded, setIsExploded] = useState(true);

  // Selected layer for focused inspection (1, 2, or 3, or null for general view)
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);

  // Auto trigger explosion when scrolled into view
  React.useEffect(() => {
    if (isInView) {
      setIsExploded(true);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="structure"
      className="relative w-full bg-white text-[#13262D] py-16 sm:py-24 lg:py-32 overflow-hidden select-none border-t border-black/5"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-outfit-extralight text-xs sm:text-sm tracking-[0.25em] text-[#13262D]/60 uppercase">
              ENGINEERED COMPOSITE ARCHITECTURE
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-[#13262D]/25" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-outfit-medium text-3xl sm:text-4xl lg:text-5xl tracking-[0.14em] text-[#13262D] uppercase">
                STRUCTURE
              </h2>
              <p className="font-outfit-extralight text-xs sm:text-sm text-[#13262D]/70 mt-1 max-w-xl uppercase tracking-wider">
                EXPLODED MULTI-TIER REVOLUTIONARY DECKING ARCHITECTURE
              </p>
            </div>

            {/* Quick Toggle Button on Top Right */}
            <button
              type="button"
              onClick={() => {
                setIsExploded((prev) => !prev);
                setSelectedLayer(null);
              }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#13262D] text-white text-xs font-outfit-medium tracking-widest uppercase transition-all duration-300 hover:bg-[#1C3640] shadow-sm cursor-pointer self-start sm:self-auto"
            >
              <span className={`w-2 h-2 rounded-full ${isExploded ? "bg-[#2DD4BF] animate-pulse" : "bg-[#D97706]"}`} />
              <span>{isExploded ? "Stack Layers" : "Explore Layers"}</span>
            </button>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Yacht Deck Photography */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md group min-h-[360px] lg:min-h-full">
            <img
              src="/images/sustainability/structure-yacht.jpg"
              alt="NEXTEAK Superyacht Deck Installation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13262D]/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="font-outfit-thin text-xs uppercase tracking-[0.2em] text-white/80 block mb-1">
                MARITIME PROVEN PERFORMANCE
              </span>
              <p className="font-outfit-regular text-sm sm:text-base leading-snug text-white/95">
                Over 60 years of timber mastery engineered for superyachts navigating open ocean waters.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Layer Separation Studio */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 lg:p-10 border border-black/5 shadow-sm relative overflow-hidden">
            {/* Visual Canvas Area */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center my-auto">
              {/* Diagram Sub-container with exact 3307/1857 ratio */}
              <div className="relative w-full max-w-[620px] aspect-[3307/1857] flex items-center justify-center">
                {/* 1. Base Layer: Wood Plank (Stays anchored) */}
                <div
                  onClick={() => setSelectedLayer(2)}
                  className={`absolute inset-0 cursor-pointer transition-all duration-300 ${
                    selectedLayer === 2
                      ? "drop-shadow-[0_0_20px_rgba(217,119,6,0.6)] brightness-110"
                      : selectedLayer === 3
                      ? "drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                      : ""
                  }`}
                  title="Click to inspect Core Material"
                >
                  <img
                    src="/images/sustainability/wood-base.png"
                    alt="Core Material Plantation Teak"
                    className="w-full h-full object-contain pointer-events-none select-none"
                  />
                </div>

                {/* 2. Top Layer: Floating Film Layer */}
                {/* When assembled: x: 4.566%, y: 8.508% (flush on wood) */}
                {/* When exploded: x: -2%, y: -16% (lifted high in the air!) */}
                <motion.div
                  onClick={() => setSelectedLayer(1)}
                  animate={{
                    x: isExploded ? "-2%" : "4.566%",
                    y: isExploded ? "-16%" : "8.508%",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                    mass: 0.9,
                  }}
                  className={`absolute inset-0 cursor-pointer ${
                    selectedLayer === 1
                      ? "drop-shadow-[0_0_25px_rgba(45,212,191,0.7)] brightness-125"
                      : isExploded
                      ? "drop-shadow-[0_22px_28px_rgba(19,38,45,0.22)]"
                      : ""
                  }`}
                  title="Click to inspect Carbon Quantum Dot Film"
                >
                  <img
                    src="/images/sustainability/film-layer.png"
                    alt="Carbon Quantum Dot Coating Film"
                    className="w-full h-full object-contain pointer-events-none select-none"
                  />

                  {/* Pin 1: Attached directly onto the floating film */}
                  <div
                    style={{ left: "45.9%", top: "35%" }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                    <motion.div
                      animate={{
                        scale: selectedLayer === 1 ? [1, 1.25, 1] : 1,
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-outfit-bold text-xs shadow-md transition-all duration-300 ${
                        selectedLayer === 1
                          ? "bg-[#2DD4BF] text-[#13262D] ring-4 ring-[#2DD4BF]/40"
                          : "bg-[#13262D] text-white hover:scale-110"
                      }`}
                    >
                      1
                    </motion.div>
                  </div>
                </motion.div>

                {/* Pin 2: Anchored to Core Material */}
                <div
                  style={{ left: "35.86%", top: "50.81%" }}
                  onClick={() => setSelectedLayer(2)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                  title="Pin 2: Core Material"
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-outfit-bold text-xs shadow-md transition-all duration-300 ${
                      selectedLayer === 2
                        ? "bg-[#D97706] text-white ring-4 ring-[#D97706]/40 scale-110"
                        : "bg-[#13262D] text-white hover:scale-110"
                    }`}
                  >
                    2
                  </div>
                </div>

                {/* Pin 3: Anchored to Binder Seam */}
                <div
                  style={{ left: "41.34%", top: "64.45%" }}
                  onClick={() => setSelectedLayer(3)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                  title="Pin 3: Binder"
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-outfit-bold text-xs shadow-md transition-all duration-300 ${
                      selectedLayer === 3
                        ? "bg-[#3B82F6] text-white ring-4 ring-[#3B82F6]/40 scale-110"
                        : "bg-[#13262D] text-white hover:scale-110"
                    }`}
                  >
                    3
                  </div>
                </div>

                {/* SVG Pointer Lines for Exploded View */}
                <AnimatePresence>
                  {isExploded && (
                    <motion.svg
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      viewBox="0 0 1000 562"
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    >
                      {/* Line 1: Film to Right Label */}
                      <path
                        d="M 459 110 L 750 110 L 750 150 L 800 150"
                        fill="none"
                        stroke="#13262D"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                        opacity={selectedLayer === 1 ? 1 : 0.45}
                      />
                      {/* Line 2: Core to Left Label */}
                      <path
                        d="M 358 285 L 200 285 L 200 370 L 150 370"
                        fill="none"
                        stroke="#13262D"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                        opacity={selectedLayer === 2 ? 1 : 0.45}
                      />
                      {/* Line 3: Binder to Bottom Label */}
                      <path
                        d="M 413 362 L 530 362 L 530 430 L 560 430"
                        fill="none"
                        stroke="#13262D"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                        opacity={selectedLayer === 3 ? 1 : 0.45}
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Layer Selector & Detail Card (Matches User Example Images!) */}
            <div className="mt-6 pt-5 border-t border-black/10">
              {/* Layer Tabs */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                {LAYERS.map((layer) => {
                  const isSelected = selectedLayer === layer.id;
                  return (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => setSelectedLayer(isSelected ? null : layer.id)}
                      className={`p-2.5 sm:p-3 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? "bg-[#13262D] text-white border-[#13262D] shadow-md"
                          : "bg-white text-[#13262D] border-black/10 hover:border-black/25"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-outfit-bold ${
                            isSelected ? "bg-white text-[#13262D]" : "bg-[#13262D] text-white"
                          }`}
                        >
                          {layer.id}
                        </span>
                        <span className="font-outfit-medium text-xs sm:text-sm tracking-wider uppercase truncate">
                          {layer.name}
                        </span>
                      </div>
                      <p
                        className={`text-[10px] tracking-wide uppercase truncate ${
                          isSelected ? "text-white/70" : "text-[#13262D]/60"
                        }`}
                      >
                        {layer.badge}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Detail Card with Gold Vertical Accent Bar (Like user's reference!) */}
              <AnimatePresence mode="wait">
                {selectedLayer !== null ? (
                  <motion.div
                    key={selectedLayer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-xl p-5 border border-black/10 shadow-sm"
                  >
                    {(() => {
                      const l = LAYERS.find((x) => x.id === selectedLayer)!;
                      return (
                        <div className="border-l-3 border-[#D97706] pl-4">
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="font-outfit-bold text-sm sm:text-base tracking-wider uppercase text-[#D97706]">
                              {l.name} — {l.techTitle}
                            </h4>
                            <span className="text-[11px] font-outfit-medium text-[#13262D]/50 uppercase tracking-widest">
                              {l.spec}
                            </span>
                          </div>
                          <p className="font-outfit-regular text-xs sm:text-sm text-[#13262D]/90 leading-relaxed mb-2">
                            {l.descTh}
                          </p>
                          <p className="font-outfit-extralight text-xs text-[#13262D]/70 leading-relaxed uppercase tracking-wider">
                            {l.descEn}
                          </p>
                        </div>
                      );
                    })()}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 bg-white/70 rounded-xl border border-black/5 text-xs text-[#13262D]/70 font-outfit-extralight"
                  >
                    <span>Click on layers 1, 2, or 3 above to inspect technical composite details.</span>
                    <button
                      type="button"
                      onClick={() => setIsExploded((prev) => !prev)}
                      className="px-4 py-1.5 rounded-lg border border-[#13262D] text-[#13262D] hover:bg-[#13262D] hover:text-white font-outfit-medium tracking-widest text-[11px] uppercase transition-colors cursor-pointer shrink-0"
                    >
                      {isExploded ? "Stack Layers" : "Explore Layers"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
