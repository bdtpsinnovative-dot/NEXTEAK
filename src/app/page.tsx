"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const HERO_SLIDES = [
  {
    src: "/images/hero/1.jpg",
    alt: "NEXTEAK Luxury Superyacht Decking Aerial View",
  },
  {
    src: "/images/hero/2.jpg",
    alt: "NEXTEAK Precision Marine Teak Foredeck",
  },
  {
    src: "/images/hero/3.jpg",
    alt: "NEXTEAK Sunset Yacht Terrace Decking",
  },
];

const STORY_CARDS = [
  {
    image: "/images/story/artboard-5.jpg",
    title: "A FAMILY HERITAGE",
  },
  {
    image: "/images/story/artboard-6.jpg",
    title: "CRAFTED WITH EXPERTISE",
  },
  {
    image: "/images/story/artboard-7.jpg",
    title: "FROM SOURCE TO SOLUTION",
  },
];

const INNOVATION_CARDS = [
  {
    image: "/images/innovation/thin-veneer-engineering.jpg",
    title: "THIN VENEER ENGINEERING",
  },
  {
    image: "/images/innovation/carbon-quantum-dot-coating.jpg",
    title: "CARBON QUANTUM DOT COATING",
  },
  {
    image: "/images/innovation/engineered-for-the-sea.jpg",
    title: "ENGINEERED FOR THE SEA",
  },
];

const SLIDE_DURATION_MS = 4000;

function LongThinArrow({ className = "w-9 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 38 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 8H36.5M36.5 8L29.5 1M36.5 8L29.5 15"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function NexteakHomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#13262D] font-outfit selection:bg-[#13262D] selection:text-white overflow-x-hidden">
      {/* =========================================================
          1. HEADER / NAVBAR
      ========================================================= */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 w-full bg-[#13262D] text-white shadow-md"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 h-20 lg:h-[92px] flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center shrink-0 group">
            <img
              src="/images/brand/logo-nexteak.png"
              alt="NEXTEAK"
              className="h-7 sm:h-9 lg:h-[40px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-16 font-outfit-thin text-xs lg:text-[14px] uppercase text-white/95">
            {[
              { label: "PRODUCTS", href: "#innovation" },
              { label: "SUSTAINABILITY", href: "#sustainability" },
              { label: "GALLERY", href: "#our-story" },
              { label: "CONTACT US", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ letterSpacing: "0.14em" }}
                className="relative py-1 hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right User & Language Selector */}
          <div className="flex items-center gap-4 lg:gap-5 text-white/95">
            <button
              type="button"
              aria-label="User Account"
              className="hover:text-white hover:scale-110 transition-all duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="w-5 h-5 lg:w-[23px] lg:h-[23px]"
              >
                <circle cx="12" cy="7.5" r="3.5" />
                <path
                  d="M5.5 19.5C5.5 16.4624 7.96243 14 11 14H13C16.0376 14 18.5 16.4624 18.5 19.5C18.5 20.0523 18.0523 20.5 17.5 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <span className="h-6 w-[1px] bg-white/60" />

            <button
              type="button"
              style={{ letterSpacing: "0.12em" }}
              className="inline-flex items-center gap-1.5 font-outfit-thin text-xs lg:text-[14px] uppercase hover:text-white transition-colors"
            >
              <span>EN</span>
              <svg
                viewBox="0 0 12 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                className="w-2.5 h-2.5"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* =========================================================
            2. HERO SECTION (Smooth Horizontal Sliding Carousel)
        ========================================================= */}
        <section
          className="relative w-full min-h-[600px] lg:aspect-[5196/2568] overflow-hidden bg-[#0A181E] group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Horizontal Sliding Track */}
          <div
            className="absolute inset-0 flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            style={{
              transform: `translate3d(-${activeSlide * 100}%, 0, 0)`,
            }}
          >
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = activeSlide === idx;
              return (
                <div
                  key={slide.src}
                  className="relative w-full h-full shrink-0 overflow-hidden"
                >
                  <img
                    src={`${slide.src}?v=2`}
                    alt={slide.alt}
                    className={`w-full h-full object-cover transition-transform duration-[4500ms] ease-out ${
                      isActive ? "scale-[1.05]" : "scale-100"
                    }`}
                  />
                  {/* Subtle left gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#08161C]/75 via-[#08161C]/30 to-transparent" />
                </div>
              );
            })}
          </div>

          {/* Left / Right Slide Arrows (visible on hover) */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-black/25 hover:bg-black/50 border border-white/25 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-black/25 hover:bg-black/50 border border-white/25 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Hero Text Content — Exact Proportions from ตำแหน่งฟอนต์ 1.png */}
          <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[9.2%] py-16 sm:py-24 lg:py-0 flex flex-col justify-center pointer-events-none">
            <div className="max-w-[680px] pointer-events-auto">
              {/* 1. THE FUTURE OF TEAK (Outfit ExtraLight, wide tracking, extends past REFINED) */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{ letterSpacing: "0.26em" }}
                className="font-outfit-thin text-white text-base sm:text-xl lg:text-[24px] xl:text-[26px] uppercase mb-2 lg:mb-2.5 pl-0.5"
              >
                THE FUTURE OF TEAK
              </motion.p>

              {/* 2. REFINED / FORMARINE / DECKING. (Mistical Spring Regular, VA=100 -> 0.11em) */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25 }}
                style={{ letterSpacing: "0.11em" }}
                className="font-mistical font-normal text-white text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] leading-[1.1] uppercase mb-8 lg:mb-11"
              >
                REFINED
                <br />
                FORMARINE
                <br />
                DECKING.
              </motion.h1>

              {/* 3. Description (Outfit ExtraLight, hairline crisp, 4 lines wider than FORMARINE) */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.4 }}
                style={{ letterSpacing: "0.17em" }}
                className="font-outfit-thin text-white/95 text-[10px] sm:text-[12px] lg:text-[13px] xl:text-[14px] leading-[2.05] uppercase mb-9 lg:mb-12"
              >
                NEXTEAK COMBINES THE BEAUTY OF NATURAL TEAK WITH
                <br className="hidden sm:inline" /> ADVANCED TECHNOLOGY AND A
                COMMITMENT TO A MORE
                <br className="hidden sm:inline" /> SUSTAINABLE FUTURE,
                DELIVERING HIGH-PERFORMANCE
                <br className="hidden sm:inline" /> MARINE DECKING FOR A BETTER
                TOMORROW.
              </motion.p>

              {/* 4. Button: EXPLORE NEXTEAK -> (Outfit ExtraLight, #E7E2DA bg, long thin arrow) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
              >
                <a
                  href="#our-story"
                  style={{ letterSpacing: "0.16em" }}
                  className="group/btn inline-flex items-center gap-6 bg-[#E7E2DA] hover:bg-white text-[#1B1A17] font-outfit-thin text-sm sm:text-[15px] lg:text-[17px] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-[10px] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>EXPLORE NEXTEAK</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
                    <LongThinArrow className="w-8 sm:w-9 h-4" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  activeSlide === idx
                    ? "w-3 h-3 bg-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            3. OUR STORY & WOODDEN GROUP & NATURAL RESEARCH CENTER
        ========================================================= */}
        <section
          id="our-story"
          className="bg-white text-[#13262D] pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-20"
        >
          <div className="max-w-[1320px] mx-auto px-6 sm:px-12 lg:px-16">
            {/* --- OUR STORY --- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="flex items-center gap-5 mb-4 lg:mb-5"
              >
                <span
                  style={{ letterSpacing: "0.12em" }}
                  className="font-outfit-thin text-sm sm:text-[15px] lg:text-[16.5px] uppercase text-[#13262D]"
                >
                  OUR STORY
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                  className="w-36 sm:w-52 lg:w-64 h-[1px] bg-[#13262D]/70 origin-left"
                />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                custom={0.12}
                style={{ letterSpacing: "0.1em" }}
                className="font-mistical font-normal text-3xl sm:text-5xl lg:text-[54px] leading-[1.14] uppercase text-[#13262D] mb-6 lg:mb-8"
              >
                A LEGACY
                <br />
                IN EVERY GRAIN
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={0.24}
                style={{ letterSpacing: "0.07em" }}
                className="font-outfit-thin text-xs sm:text-[13.5px] lg:text-[14.5px] leading-[1.95] uppercase text-[#13262D] max-w-[1220px]"
              >
                OUR JOURNEY BEGAN OVER 60 YEARS AGO. WHAT STARTED AS A FAMILY
                BUSINESS CRAFTING TEAK AND TIMBER HAS GROWN INTO WOODDEN — A
                TRUSTED NAME IN WOOD SOLUTIONS, AND THE FOUNDATION OF REVOTEAK.
                WITH DEEP EXPERTISE FROM SOURCE TO FINISH, WE BRING THE BEAUTY
                OF TEAK TO THE WORLD WITH INTEGRITY, INNOVATION AND A COMMITMENT
                TO A BETTER TOMORROW.
              </motion.p>
            </motion.div>

            {/* --- WOODDEN GROUP --- */}
            <div className="mt-14 sm:mt-16 lg:mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="flex items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-10"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="w-20 sm:w-44 lg:w-52 h-[1px] bg-[#13262D]/70 origin-right"
                />
                <h3
                  style={{ letterSpacing: "0.1em" }}
                  className="font-outfit-medium text-base sm:text-lg lg:text-[21px] uppercase text-[#13262D] whitespace-nowrap"
                >
                  WOODDEN GROUP
                </h3>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="w-20 sm:w-44 lg:w-52 h-[1px] bg-[#13262D]/70 origin-left"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-11">
                {STORY_CARDS.map((card, idx) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex flex-col items-center"
                  >
                    <div className="w-full aspect-[1364/1183] overflow-hidden bg-[#F5F5F4] shadow-xs group-hover:shadow-lg transition-shadow duration-500">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <p
                      style={{ letterSpacing: "0.08em" }}
                      className="mt-4 sm:mt-5 font-outfit-medium text-xs sm:text-[13.5px] lg:text-[14.5px] uppercase text-[#13262D] text-center"
                    >
                      {card.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* --- NATURAL RESEARCH CENTER --- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-16 sm:mt-20 lg:mt-24"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="flex items-center justify-center gap-5 sm:gap-7 mb-4 sm:mb-5"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="w-16 sm:w-32 lg:w-36 h-[1px] bg-[#13262D]/60 origin-right"
                />
                <span
                  style={{ letterSpacing: "0.12em" }}
                  className="font-outfit-thin text-xs sm:text-[14px] lg:text-[15px] uppercase text-[#13262D] whitespace-nowrap"
                >
                  NATURAL RESEARCH CENTER
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="w-16 sm:w-32 lg:w-36 h-[1px] bg-[#13262D]/60 origin-left"
                />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                custom={0.1}
                style={{ letterSpacing: "0.1em" }}
                className="font-mistical font-normal text-xl sm:text-3xl lg:text-[35px] leading-[1.2] uppercase text-[#13262D] text-center mb-4 sm:mb-5"
              >
                FROM MATERIAL KNOWLEDGE TO BETTER PERFORMANCE
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={0.2}
                style={{ letterSpacing: "0.06em" }}
                className="font-outfit-thin text-[10px] sm:text-[11.5px] lg:text-[12px] leading-[1.85] uppercase text-[#13262D] text-center max-w-[1140px] mx-auto"
              >
                OUR NATURAL RESEARCH CENTER BRINGS TOGETHER DECADES OF WOOD
                EXPERTISE AND MODERN MATERIAL SCIENCE. THROUGH CONTINUOUS
                RESEARCH, TESTING, AND DEVELOPMENT, WE EXPLORE HOW NATURAL TEAK
                CAN BE USED MORE EFFICIENTLY AND ENGINEERED TO PERFORM BEYOND
                CONVENTIONAL LIMITATIONS — WHILE PRESERVING THE BEAUTY,
                CHARACTER, AND AUTHENTICITY THAT MAKE TEAK UNIQUE.
              </motion.p>

              {/* 3 Metrics Row */}
              <div className="mt-10 sm:mt-14 mb-10 sm:mb-14 grid grid-cols-1 md:grid-cols-3 items-center max-w-[1100px] mx-auto">
                {/* Stat 1 */}
                <motion.div
                  variants={fadeUp}
                  custom={0.25}
                  className="flex flex-col items-center text-center py-4 md:py-2"
                >
                  <span
                    style={{ letterSpacing: "0.06em" }}
                    className="font-outfit-bold text-2xl sm:text-3xl lg:text-[33px] uppercase text-[#13262D]"
                  >
                    60+ YEARS
                  </span>
                  <span
                    style={{ letterSpacing: "0.08em" }}
                    className="mt-1 font-outfit-thin text-xs sm:text-[13.5px] lg:text-[14.5px] uppercase text-[#13262D]"
                  >
                    OF WOOD EXPERTISE
                  </span>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  variants={fadeUp}
                  custom={0.38}
                  className="flex flex-col items-center text-center py-4 md:py-2 md:border-x-[1.5px] md:border-[#13262D]"
                >
                  <span
                    style={{ letterSpacing: "0.06em" }}
                    className="font-outfit-bold text-2xl sm:text-3xl lg:text-[33px] uppercase text-[#13262D]"
                  >
                    5+ YEARS
                  </span>
                  <span
                    style={{ letterSpacing: "0.08em" }}
                    className="mt-1 font-outfit-thin text-xs sm:text-[13.5px] lg:text-[14.5px] uppercase text-[#13262D]"
                  >
                    OF PRODUCT DEVELOPMENT
                  </span>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  variants={fadeUp}
                  custom={0.5}
                  className="flex flex-col items-center text-center py-4 md:py-2"
                >
                  <span
                    style={{ letterSpacing: "0.06em" }}
                    className="font-outfit-bold text-2xl sm:text-3xl lg:text-[33px] uppercase text-[#13262D]"
                  >
                    ONE CONTINUOUS
                  </span>
                  <span
                    style={{ letterSpacing: "0.08em" }}
                    className="mt-1 font-outfit-thin text-xs sm:text-[13.5px] lg:text-[14.5px] uppercase text-[#13262D]"
                  >
                    PURSUIT OF BETTER PERFORMANCE
                  </span>
                </motion.div>
              </div>

              {/* Bottom-left MTEC Note */}
              <motion.div variants={fadeUp} custom={0.6} className="mt-6">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-40 sm:w-56 h-[1.5px] bg-[#13262D] mb-2.5 origin-left"
                />
                <p
                  style={{ letterSpacing: "0.08em" }}
                  className="font-outfit-thin text-[10.5px] sm:text-xs uppercase text-[#13262D]"
                >
                  DEVELOPED WITH RESEARCH SUPPORT FROM MTEC.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            4. SUSTAINABILITY SECTION
        ========================================================= */}
        <motion.section
          id="sustainability"
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden"
        >
          <img
            src="/images/sustainability/artboard-8.jpg"
            alt="Sustainability — Grown for a Brighter Tomorrow"
            className="w-full h-auto block"
          />
          <a
            href="#innovation"
            style={{ letterSpacing: "0.14em" }}
            className="group/sbtn absolute bottom-[8%] right-[4.2%] inline-flex items-center gap-2.5 sm:gap-3.5 border border-white/85 hover:bg-white hover:text-[#13262D] text-white font-outfit-thin text-[9px] sm:text-xs lg:text-[13px] uppercase px-3 sm:px-5 lg:px-6 py-1.5 sm:py-2.5 rounded-[5px] transition-all duration-300"
          >
            <span>LEARN MORE</span>
            <span className="transition-transform duration-300 group-hover/sbtn:translate-x-1">
              <LongThinArrow className="w-5 sm:w-6 h-3" />
            </span>
          </a>
        </motion.section>

        {/* =========================================================
            5. INNOVATION & RESEARCH SECTION
        ========================================================= */}
        <section
          id="innovation"
          className="bg-white text-[#13262D] py-16 sm:py-20 lg:py-24"
        >
          <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Text & Button Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-3 flex flex-col items-start"
              >
                <div className="w-full flex items-center gap-3 mb-4">
                  <span
                    style={{ letterSpacing: "0.08em" }}
                    className="font-outfit-thin text-[10.5px] sm:text-[11.5px] uppercase text-[#13262D] whitespace-nowrap"
                  >
                    INNOVATION &amp; RESEARCH
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="flex-1 h-[1px] bg-[#13262D]/70 min-w-[32px] origin-left"
                  />
                </div>

                <h2
                  style={{ letterSpacing: "0.1em" }}
                  className="font-mistical font-normal text-2xl sm:text-3xl xl:text-[32px] leading-[1.24] uppercase text-[#13262D] mb-6 sm:mb-7"
                >
                  NATURE MEETS
                  <br />
                  ADVANCED
                  <br />
                  TECHNOLOGY
                </h2>

                <a
                  href="#contact"
                  style={{ letterSpacing: "0.14em" }}
                  className="group/ibtn inline-flex items-center gap-3 border border-[#13262D] hover:bg-[#13262D] hover:text-white text-[#13262D] font-outfit-thin text-xs uppercase px-5 py-2.5 rounded-[6px] transition-all duration-300"
                >
                  <span>LEARN MORE</span>
                  <span className="transition-transform duration-300 group-hover/ibtn:translate-x-1">
                    <LongThinArrow className="w-6 h-3" />
                  </span>
                </a>
              </motion.div>

              {/* Right 3 Feature Cards */}
              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                {INNOVATION_CARDS.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex flex-col items-center"
                  >
                    <div className="w-full aspect-[999/806] rounded-[14px] overflow-hidden shadow-xs group-hover:shadow-md transition-shadow duration-500">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <p
                      style={{ letterSpacing: "0.08em" }}
                      className="mt-4 font-outfit-regular text-[11.5px] lg:text-[12.5px] uppercase text-[#13262D] text-center"
                    >
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          6. FOOTER / FINAL SECTION
      ========================================================= */}
      <motion.footer
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9 }}
        className="w-full overflow-hidden bg-[#0A181E]"
      >
        <img
          src="/images/brand/footer-bg.jpg"
          alt="More Than a Deck, A Brighter Tomorrow."
          className="w-full h-auto block"
        />
      </motion.footer>
    </div>
  );
}
