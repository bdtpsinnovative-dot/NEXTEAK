"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Infinite loop: [Slide 3 (clone), Slide 1, Slide 2, Slide 3, Slide 1 (clone)]
const EXTENDED_SLIDES = [
  HERO_SLIDES[HERO_SLIDES.length - 1],
  ...HERO_SLIDES,
  HERO_SLIDES[0],
];

const NAV_ITEMS = [
  { label: "PRODUCTS", href: "#innovation" },
  { label: "SUSTAINABILITY", href: "#sustainability" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT US", href: "#contact" },
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
  // Infinite loop slider: starts at index 1 (the real first slide)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    // Small delay so the browser paints scale-100 first,
    // then transitions to scale-[1.05] on the initial slide
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // When reaching the cloned edges, after the slide finishes animating,
  // instantaneously jump back to the original index without animation.
  const handleTransitionEnd = () => {
    if (currentIndex === EXTENDED_SLIDES.length - 1) {
      // At cloned Slide 1 -> Jump back to real Slide 1 (index 1)
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // At cloned Slide 3 -> Jump back to real Slide 3 (index HERO_SLIDES.length)
      setIsTransitioning(false);
      setCurrentIndex(HERO_SLIDES.length);
    }
  };

  // Re-enable transition smoothly after the instant jump has taken place
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= EXTENDED_SLIDES.length - 1) return prev;
      setIsTransitioning(true);
      return prev + 1;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return prev;
      setIsTransitioning(true);
      return prev - 1;
    });
  }, []);

  // Continuously slide forward every 4 seconds without stopping or rewinding
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [nextSlide, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  // Real active dot index (0, 1, 2)
  const activeDot =
    currentIndex === 0
      ? HERO_SLIDES.length - 1
      : currentIndex === EXTENDED_SLIDES.length - 1
      ? 0
      : currentIndex - 1;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#13262D] font-outfit selection:bg-[#13262D] selection:text-white overflow-x-hidden">
      {/* =========================================================
          1. HEADER / NAVBAR (Desktop + Mobile Hamburger Menu)
      ========================================================= */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 w-full bg-[#13262D] text-white shadow-md"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 h-16 sm:h-20 lg:h-[92px] flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center shrink-0 group">
            <img
              src="/images/brand/logo-nexteak.png"
              alt="NEXTEAK"
              className="h-6 sm:h-8 lg:h-[40px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-16 font-outfit-thin text-xs lg:text-[14px] uppercase text-white/95">
            {NAV_ITEMS.map((item) => (
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

          {/* Right User, Language & Mobile Hamburger Button */}
          <div className="flex items-center gap-3.5 sm:gap-4 lg:gap-5 text-white/95">
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

            <span className="h-5 sm:h-6 w-[1px] bg-white/60" />

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

            {/* Mobile Hamburger Button (Visible on < md) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden ml-1 p-2 -mr-1 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${
                    mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-[#0E1E24] border-t border-white/10"
            >
              <nav className="px-6 py-5 flex flex-col divide-y divide-white/10">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    style={{ letterSpacing: "0.16em" }}
                    className="py-4 flex items-center justify-between font-outfit-thin text-sm uppercase text-white/90 hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <LongThinArrow className="w-5 h-2.5 opacity-70" />
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="flex-1">
        {/* =========================================================
            2. HERO SECTION (Smooth Horizontal Sliding Carousel + Touch Swipe)
        ========================================================= */}
        <section
          className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-0 lg:aspect-[5196/2568] overflow-hidden bg-[#0A181E] group flex items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Horizontal Sliding Track (Seamless Infinite Loop) */}
          <div
            onTransitionEnd={handleTransitionEnd}
            className="absolute inset-0 flex w-full h-full will-change-transform"
            style={{
              transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              transition: isTransitioning
                ? "transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
            }}
          >
            {EXTENDED_SLIDES.map((slide, idx) => {
              const isActive = currentIndex === idx;
              return (
                <div
                  key={`${slide.src}-${idx}`}
                  className="relative w-full h-full shrink-0 overflow-hidden"
                >
                  <img
                    src={`${slide.src}?v=2`}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-[65%_center] sm:object-center"
                    style={{
                      transform: isActive && mounted ? "scale(1.05)" : "scale(1)",
                      transition: "transform 4500ms ease-out",
                    }}
                  />
                  {/* Gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#08161C]/85 via-[#08161C]/50 sm:via-[#08161C]/35 to-[#08161C]/20 sm:to-transparent" />
                </div>
              );
            })}
          </div>

          {/* Left / Right Slide Arrows (visible on desktop hover) */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="hidden sm:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-black/25 hover:bg-black/50 border border-white/25 text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs"
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
            className="hidden sm:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-black/25 hover:bg-black/50 border border-white/25 text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs"
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

          {/* Hero Text Content */}
          <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[9.2%] py-14 sm:py-20 lg:py-0 flex flex-col justify-center pointer-events-none">
            <div className="max-w-[680px] pointer-events-auto">
              {/* 1. THE FUTURE OF TEAK */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{ letterSpacing: "0.26em" }}
                className="font-outfit-thin text-white text-sm sm:text-xl lg:text-[24px] xl:text-[26px] uppercase mb-2 lg:mb-2.5 pl-0.5"
              >
                THE FUTURE OF TEAK
              </motion.p>

              {/* 2. REFINED / FORMARINE / DECKING. */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25 }}
                style={{ letterSpacing: "0.11em" }}
                className="font-mistical font-normal text-white text-[34px] sm:text-5xl lg:text-[62px] xl:text-[68px] leading-[1.1] uppercase mb-6 sm:mb-8 lg:mb-11"
              >
                REFINED
                <br />
                FORMARINE
                <br />
                DECKING.
              </motion.h1>

              {/* 3. Description */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.4 }}
                style={{ letterSpacing: "0.16em" }}
                className="font-outfit-thin text-white/95 text-[10.5px] sm:text-[12px] lg:text-[13px] xl:text-[14px] leading-[1.95] sm:leading-[2.05] uppercase mb-7 sm:mb-9 lg:mb-12 max-w-[540px] sm:max-w-none"
              >
                NEXTEAK COMBINES THE BEAUTY OF NATURAL TEAK WITH
                <br className="hidden sm:inline" /> ADVANCED TECHNOLOGY AND A
                COMMITMENT TO A MORE
                <br className="hidden sm:inline" /> SUSTAINABLE FUTURE,
                DELIVERING HIGH-PERFORMANCE
                <br className="hidden sm:inline" /> MARINE DECKING FOR A BETTER
                TOMORROW.
              </motion.p>

              {/* 4. Button: EXPLORE NEXTEAK -> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
              >
                <a
                  href="#our-story"
                  style={{ letterSpacing: "0.16em" }}
                  className="group/btn inline-flex items-center gap-4 sm:gap-6 bg-[#E7E2DA] hover:bg-white text-[#1B1A17] font-outfit-thin text-xs sm:text-[15px] lg:text-[17px] uppercase px-6 sm:px-9 py-3 sm:py-4 rounded-[8px] sm:rounded-[10px] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>EXPLORE NEXTEAK</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
                    <LongThinArrow className="w-7 sm:w-9 h-3.5 sm:h-4" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-5 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3.5 sm:gap-4">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(idx + 1);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  activeDot === idx
                    ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/50 hover:bg-white/80"
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
          className="bg-white text-[#13262D] pt-12 sm:pt-20 lg:pt-24 pb-12 sm:pb-20"
        >
          <div className="max-w-[1320px] mx-auto px-5 sm:px-12 lg:px-16">
            {/* --- OUR STORY --- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-5"
              >
                <span
                  style={{ letterSpacing: "0.1em" }}
                  className="font-outfit-extralight text-sm sm:text-[16px] lg:text-[18px] uppercase text-[#13262D] shrink-0"
                >
                  OUR STORY
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                  className="w-28 sm:w-56 lg:w-72 h-[1px] bg-[#13262D] origin-left"
                />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                custom={0.12}
                style={{ letterSpacing: "0.11em" }}
                className="font-mistical font-normal text-3xl sm:text-5xl lg:text-[58px] leading-[1.12] uppercase text-[#13262D] mb-5 sm:mb-7"
              >
                A LEGACY
                <br />
                IN EVERY GRAIN
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={0.24}
                style={{ letterSpacing: "0.06em" }}
                className="font-outfit-extralight text-xs sm:text-[14px] lg:text-[15.5px] xl:text-[16px] leading-[1.85] sm:leading-[1.9] uppercase text-[#13262D]"
              >
                OUR JOURNEY BEGAN OVER 60 YEARS AGO. WHAT STARTED AS A FAMILY
                BUSINESS CRAFTING TEAK AND TIMBER HAS GROWN{" "}
                <br className="hidden xl:inline" />
                INTO WOODDEN — A TRUSTED NAME IN WOOD SOLUTIONS, AND THE
                FOUNDATION OF REVOTEAK. WITH DEEP EXPERTISE{" "}
                <br className="hidden xl:inline" />
                FROM SOURCE TO FINISH, WE BRING THE BEAUTY OF TEAK TO THE WORLD
                WITH INTEGRITY, INNOVATION AND A COMMITMENT{" "}
                <br className="hidden xl:inline" />
                TO A BETTER TOMORROW.
              </motion.p>
            </motion.div>

            {/* --- WOODDEN GROUP --- */}
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="flex items-center justify-center gap-4 sm:gap-8 mb-7 sm:mb-10"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="flex-1 max-w-[64px] sm:max-w-[190px] lg:max-w-[230px] h-[1px] bg-[#13262D] origin-right"
                />
                <h3
                  style={{ letterSpacing: "0.08em" }}
                  className="font-outfit-medium text-sm sm:text-xl lg:text-[23px] uppercase text-[#13262D] whitespace-nowrap"
                >
                  WOODDEN GROUP
                </h3>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="flex-1 max-w-[64px] sm:max-w-[190px] lg:max-w-[230px] h-[1px] bg-[#13262D] origin-left"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-11">
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
                      style={{ letterSpacing: "0.06em" }}
                      className="mt-4 sm:mt-5 font-outfit-medium text-xs sm:text-[14px] lg:text-[15.5px] uppercase text-[#13262D] text-center"
                    >
                      {card.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* --- NATURAL RESEARCH CENTER (Exact Match to ตำแหน่งฟอนต์ 2.png) --- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-16 sm:mt-22 lg:mt-28"
            >
              {/* Top Label with Horizontal Lines */}
              <motion.div
                variants={fadeUp}
                custom={0}
                className="flex items-center justify-center gap-4 sm:gap-7 mb-4 sm:mb-6"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="flex-1 max-w-[50px] sm:max-w-[140px] lg:max-w-[160px] h-[1px] bg-[#13262D] origin-right"
                />
                <span
                  style={{ letterSpacing: "0.08em" }}
                  className="font-outfit-extralight text-xs sm:text-[15px] lg:text-[17px] uppercase text-[#13262D] whitespace-nowrap"
                >
                  NATURAL RESEARCH CENTER
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="flex-1 max-w-[50px] sm:max-w-[140px] lg:max-w-[160px] h-[1px] bg-[#13262D] origin-left"
                />
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                style={{ letterSpacing: "0.11em" }}
                className="font-mistical font-normal text-xl sm:text-3xl lg:text-[36px] xl:text-[40px] leading-[1.2] uppercase text-[#13262D] text-center mb-4 sm:mb-5"
              >
                FROM MATERIAL KNOWLEDGE TO BETTER PERFORMANCE
              </motion.h2>

              {/* 3-Line Centered Description matching exact line breaks in ตำแหน่งฟอนต์ 2.png */}
              <motion.p
                variants={fadeUp}
                custom={0.2}
                style={{ letterSpacing: "0.055em" }}
                className="font-outfit-extralight text-[11px] sm:text-[12.5px] lg:text-[13.5px] leading-[1.85] uppercase text-[#13262D] text-center max-w-[1220px] mx-auto"
              >
                OUR NATURAL RESEARCH CENTER BRINGS TOGETHER DECADES OF WOOD
                EXPERTISE AND MODERN MATERIAL SCIENCE. THROUGH CONTINUOUS
                RESEARCH, TESTING, AND{" "}
                <br className="hidden lg:inline" />
                DEVELOPMENT, WE EXPLORE HOW NATURAL TEAK CAN BE USED MORE
                EFFICIENTLY AND ENGINEERED TO PERFORM BEYOND CONVENTIONAL
                LIMITATIONS — WHILE{" "}
                <br className="hidden lg:inline" />
                PRESERVING THE BEAUTY, CHARACTER, AND AUTHENTICITY THAT MAKE
                TEAK UNIQUE.
              </motion.p>

              {/* 3 Metrics Row with Balanced Spacing & Vertical Bars */}
              <div className="mt-10 sm:mt-14 lg:mt-16 mb-10 sm:mb-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 xl:gap-22 divide-y divide-[#13262D]/20 md:divide-y-0">
                {/* Stat 1 */}
                <motion.div
                  variants={fadeUp}
                  custom={0.25}
                  className="w-full md:w-auto flex flex-col items-center text-center pt-4 first:pt-0 md:pt-0"
                >
                  <span
                    style={{ letterSpacing: "0.04em" }}
                    className="font-outfit-bold text-2xl sm:text-3xl lg:text-[36px] xl:text-[39px] leading-tight uppercase text-[#13262D]"
                  >
                    60+ YEARS
                  </span>
                  <span
                    style={{ letterSpacing: "0.06em" }}
                    className="mt-1 font-outfit-extralight text-xs sm:text-[15px] lg:text-[16.5px] xl:text-[17.5px] uppercase text-[#13262D] whitespace-nowrap"
                  >
                    OF WOOD EXPERTISE
                  </span>
                </motion.div>

                {/* Vertical Divider 1 */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="hidden md:block w-[2px] h-[86px] bg-[#13262D] shrink-0 origin-center"
                />

                {/* Stat 2 */}
                <motion.div
                  variants={fadeUp}
                  custom={0.38}
                  className="w-full md:w-auto flex flex-col items-center text-center pt-5 md:pt-0"
                >
                  <span
                    style={{ letterSpacing: "0.04em" }}
                    className="font-outfit-bold text-2xl sm:text-3xl lg:text-[36px] xl:text-[39px] leading-tight uppercase text-[#13262D]"
                  >
                    5+ YEARS
                  </span>
                  <span
                    style={{ letterSpacing: "0.06em" }}
                    className="mt-1 font-outfit-extralight text-xs sm:text-[15px] lg:text-[16.5px] xl:text-[17.5px] uppercase text-[#13262D] whitespace-nowrap"
                  >
                    OF PRODUCT DEVELOPMENT
                  </span>
                </motion.div>

                {/* Vertical Divider 2 */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="hidden md:block w-[2px] h-[86px] bg-[#13262D] shrink-0 origin-center"
                />

                {/* Stat 3 */}
                <motion.div
                  variants={fadeUp}
                  custom={0.5}
                  className="w-full md:w-auto flex flex-col items-center text-center pt-5 md:pt-0"
                >
                  <span
                    style={{ letterSpacing: "0.04em" }}
                    className="font-outfit-bold text-2xl sm:text-3xl lg:text-[36px] xl:text-[39px] leading-tight uppercase text-[#13262D] whitespace-nowrap"
                  >
                    ONE CONTINUOUS
                  </span>
                  <span
                    style={{ letterSpacing: "0.06em" }}
                    className="mt-1 font-outfit-extralight text-xs sm:text-[15px] lg:text-[16.5px] xl:text-[17.5px] uppercase text-[#13262D] whitespace-nowrap"
                  >
                    PURSUIT OF BETTER PERFORMANCE
                  </span>
                </motion.div>
              </div>

              {/* Bottom-left MTEC Note */}
              <motion.div
                variants={fadeUp}
                custom={0.6}
                className="mt-6 sm:mt-8 lg:-ml-4"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-44 sm:w-60 lg:w-64 h-[2px] bg-[#13262D] mb-3 origin-left"
                />
                <p
                  style={{ letterSpacing: "0.06em" }}
                  className="font-outfit-extralight text-[11px] sm:text-[13px] lg:text-[14px] uppercase text-[#13262D]"
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
          className="relative w-full overflow-hidden bg-[#13262D]"
        >
          <img
            src="/images/sustainability/artboard-8.jpg"
            alt="Sustainability — Grown for a Brighter Tomorrow"
            className="w-full h-auto block"
          />
          <a
            href="#innovation"
            style={{ letterSpacing: "0.14em" }}
            className="group/sbtn absolute bottom-[6%] sm:bottom-[8%] right-[3.5%] sm:right-[4.2%] inline-flex items-center gap-1.5 sm:gap-3.5 border border-white/85 hover:bg-white hover:text-[#13262D] text-white font-outfit-thin text-[8px] sm:text-xs lg:text-[13px] uppercase px-2.5 sm:px-5 lg:px-6 py-1 sm:py-2.5 rounded-[4px] sm:rounded-[5px] transition-all duration-300"
          >
            <span>LEARN MORE</span>
            <span className="transition-transform duration-300 group-hover/sbtn:translate-x-1">
              <LongThinArrow className="w-3.5 sm:w-6 h-2 sm:h-3" />
            </span>
          </a>
        </motion.section>

        {/* =========================================================
            5. INNOVATION & RESEARCH SECTION
        ========================================================= */}
        <section
          id="innovation"
          className="bg-white text-[#13262D] py-12 sm:py-20 lg:py-24"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
              {/* Left Text & Button Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-3 flex flex-col items-start"
              >
                <div className="w-full flex items-center gap-3 mb-3 sm:mb-4">
                  <span
                    style={{ letterSpacing: "0.08em" }}
                    className="font-outfit-extralight text-[11px] sm:text-[12px] uppercase text-[#13262D] whitespace-nowrap"
                  >
                    INNOVATION &amp; RESEARCH
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="flex-1 h-[1px] bg-[#13262D] min-w-[32px] origin-left"
                  />
                </div>

                <h2
                  style={{ letterSpacing: "0.1em" }}
                  className="font-mistical font-normal text-2xl sm:text-3xl xl:text-[32px] leading-[1.24] uppercase text-[#13262D] mb-5 sm:mb-7"
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
                  className="group/ibtn inline-flex items-center gap-3 border border-[#13262D] hover:bg-[#13262D] hover:text-white text-[#13262D] font-outfit-extralight text-xs uppercase px-5 py-2.5 rounded-[6px] transition-all duration-300"
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
                      className="mt-3.5 sm:mt-4 font-outfit-regular text-xs lg:text-[13.5px] uppercase text-[#13262D] text-center"
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
