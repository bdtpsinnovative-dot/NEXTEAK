"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/sustainability/page3/sustainability-hero-clean.webp",
    alt: "Responsibly Sourced Plantation Teak Canopy",
    label: "SUSTAINABLE FORESTRY",
  },
  {
    id: 2,
    image: "/images/sustainability/page3/sustainability-banner-1.webp",
    alt: "Community Forestry & Sustainable Planning Meeting",
    label: "COMMUNITY & SOURCING",
  },
  {
    id: 3,
    image: "/images/sustainability/page3/sustainability-banner-2.webp",
    alt: "Traceable Plantation Timber & Forest Survey",
    label: "RESPONSIBLE HARVESTING",
  },
  {
    id: 4,
    image: "/images/sustainability/page3/sustainability-banner-3.webp",
    alt: "Precision Teak Craftsmanship & Quality Verification",
    label: "PRECISION CRAFTSMANSHIP",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

export default function SustainabilityHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setSlideKey((prev) => prev + 1);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setSlideKey((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setSlideKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide, slideKey]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="sustainability-hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden bg-[#0A1820] select-none text-white group"
    >
      {/* ============================================================== */}
      {/* 1. DESKTOP VIEW (>= 1024px)                                     */}
      {/* ============================================================== */}
      <div className="hidden lg:block relative w-full aspect-[5222/1836] overflow-hidden">
        {/* Sliding Images Track */}
        <motion.div
          className="absolute inset-0 flex w-full h-full"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        >
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className="relative w-full h-full shrink-0 overflow-hidden"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                fetchPriority={idx === 0 ? "high" : "low"}
                decoding="async"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              {/* Luxury Gradient Overlay for typography contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#08161C]/85 via-[#08161C]/50 to-[#08161C]/25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1820]/70 via-transparent to-black/30 pointer-events-none" />
            </div>
          ))}
        </motion.div>

        {/* Ambient Subtle Sun & Water Shimmer */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 0.12, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 z-10"
        />

        {/* Live Typography Overlay Layer */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-[5.5vw] pointer-events-none">
          {/* Top Left: Category Tag + Headline + Subtitle */}
          <div className="max-w-[42vw] flex flex-col pointer-events-auto">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-1.5 text-[0.9vw] font-outfit-thin tracking-[0.25em] text-white/90 uppercase mb-[1.8vw]"
            >
              <span>SUSTAINABILITY</span>
              <svg
                className="w-[0.9vw] h-[0.9vw] text-white/80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-mistical text-[3.8vw] leading-[1.08] tracking-[0.06em] text-white uppercase mb-[1.8vw]"
            >
              GROWN
              <br />
              FOR A BRIGHTER
              <br />
              TOMORROW
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-outfit-thin text-[0.88vw] leading-[1.75] tracking-[0.08em] text-white/85 uppercase max-w-[34vw]"
            >
              VERTEX IS MADE FROM RESPONSIBLY SOURCED PLANTATION TEAK,
              SUPPORTING SUSTAINABLE FORESTRY, LOCAL COMMUNITIES, AND A HEALTHIER
              PLANET.
            </motion.p>
          </div>

          {/* Bottom Row: Slide Indicators (Left) & Corner Callout (Right) */}
          <div className="flex items-end justify-between w-full pointer-events-auto">
            {/* Left: Dots / Pills Navigation with Animated Energy Bar */}
            <div className="flex items-center gap-2.5">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className="group/dot flex items-center cursor-pointer focus:outline-none py-2"
                  >
                    {isActive ? (
                      <span className="relative w-12 sm:w-16 h-[3px] bg-white/20 rounded-full overflow-hidden block">
                        <motion.span
                          key={`desktop-progress-${currentIndex}-${slideKey}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: AUTO_SLIDE_INTERVAL / 1000,
                            ease: "linear",
                          }}
                          className="absolute inset-y-0 left-0 bg-white rounded-full block shadow-[0_0_8px_rgba(255,255,255,0.95)]"
                        />
                      </span>
                    ) : (
                      <span className="w-3.5 h-[3px] bg-white/35 group-hover/dot:bg-white/70 rounded-full block transition-all duration-300" />
                    )}
                  </button>
                );
              })}
              <span className="font-outfit-thin text-[0.8vw] tracking-[0.2em] text-white/70 uppercase ml-2 tabular-nums">
                0{currentIndex + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>

            {/* Right: Corner Callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-right"
            >
              <p className="font-outfit-thin text-[0.9vw] tracking-[0.22em] text-white/85 uppercase leading-relaxed">
                PLANT TODAY
                <br />
                FOR GENERATIONS
              </p>
            </motion.div>
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/35 hover:bg-black/70 border border-white/25 text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 backdrop-blur-sm cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/35 hover:bg-black/70 border border-white/25 text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 backdrop-blur-sm cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ============================================================== */}
      {/* 2. MOBILE & TABLET VIEW (< 1024px)                              */}
      {/* ============================================================== */}
      <div className="lg:hidden relative w-full min-h-[500px] sm:min-h-[560px] flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-14 overflow-hidden">
        {/* Sliding Background Track */}
        <motion.div
          className="absolute inset-0 flex w-full h-full"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className="relative w-full h-full shrink-0 overflow-hidden"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                fetchPriority={idx === 0 ? "high" : "low"}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A1820]/90 via-[#0A1820]/70 to-[#0A1820]/95 pointer-events-none" />
            </div>
          ))}
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col max-w-xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-outfit-thin tracking-[0.25em] text-white/80 uppercase mb-4">
            <span>SUSTAINABILITY</span>
            <svg
              className="w-3.5 h-3.5 text-white/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="font-mistical text-3xl sm:text-5xl leading-[1.1] tracking-[0.05em] text-white uppercase mb-4">
            GROWN
            <br />
            FOR A BRIGHTER
            <br />
            TOMORROW
          </h1>

          {/* Subtitle */}
          <p className="font-outfit-thin text-xs sm:text-sm leading-relaxed tracking-[0.08em] text-white/85 uppercase max-w-md">
            VERTEX IS MADE FROM RESPONSIBLY SOURCED PLANTATION TEAK,
            SUPPORTING SUSTAINABLE FORESTRY, LOCAL COMMUNITIES, AND A HEALTHIER
            PLANET.
          </p>
        </div>

        {/* Bottom Bar: Indicators & Callout */}
        <div className="relative z-10 flex items-center justify-between pt-8">
          {/* Mobile Dots with Animated Energy Bar */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className="cursor-pointer focus:outline-none py-1"
                >
                  {isActive ? (
                    <span className="relative w-10 h-1.5 bg-white/25 rounded-full overflow-hidden block">
                      <motion.span
                        key={`mobile-progress-${currentIndex}-${slideKey}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: AUTO_SLIDE_INTERVAL / 1000,
                          ease: "linear",
                        }}
                        className="absolute inset-y-0 left-0 bg-white rounded-full block shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                      />
                    </span>
                  ) : (
                    <span className="w-2.5 h-1.5 bg-white/35 rounded-full block transition-all duration-300" />
                  )}
                </button>
              );
            })}
            <span className="font-outfit-thin text-[11px] tracking-[0.2em] text-white/70 uppercase ml-1 tabular-nums">
              0{currentIndex + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Bottom Corner Tag */}
          <div className="text-right">
            <p className="font-outfit-thin text-[11px] sm:text-xs tracking-[0.2em] text-white/75 uppercase leading-snug">
              PLANT TODAY
              <br />
              FOR GENERATIONS
            </p>
          </div>
        </div>

        {/* Mobile Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
