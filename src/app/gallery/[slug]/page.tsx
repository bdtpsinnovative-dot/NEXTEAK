"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllProjects, getProjectBySlug } from "@/data/projects";

function LongThinArrow({
  className = "w-7 h-3.5",
  reverse = false,
}: {
  className?: string;
  reverse?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 38 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${reverse ? "rotate-180" : ""}`}
    >
      <path
        d="M0 8H36.5M36.5 8L29.5 1M36.5 8L29.5 15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "";
  const project = getProjectBySlug(slug);
  const allProjects = getAllProjects();

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-[#13262D]">
        <Navbar activeItem="GALLERY" />
        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <p
            style={{ letterSpacing: "0.15em" }}
            className="font-outfit-thin text-xs uppercase text-[#13262D]/60 mb-2"
          >
            404 — PROJECT NOT FOUND
          </p>
          <h1 className="font-mistical text-4xl sm:text-5xl uppercase mb-6">
            PROJECT NOT FOUND
          </h1>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 bg-[#13262D] text-white px-6 py-3 rounded text-xs uppercase tracking-widest font-outfit-thin hover:bg-black transition-colors"
          >
            <LongThinArrow reverse className="w-5 h-2.5" />
            <span>RETURN TO SHOWCASE</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate previous and next project for bottom pagination
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0
      ? allProjects[currentIndex - 1]
      : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#13262D] font-outfit selection:bg-[#13262D] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar activeItem="GALLERY" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full">
        {/* Top Breadcrumb & Return to Gallery */}
        <div className="border-b border-[#13262D]/10 bg-[#FAFAFA]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-4 flex items-center justify-between text-xs font-outfit-thin tracking-wider">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2.5 text-[#13262D]/80 hover:text-[#13262D] transition-colors uppercase"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                <LongThinArrow reverse className="w-5 h-2.5" />
              </span>
              <span>BACK TO PROJECT SHOWCASE</span>
            </Link>

            <span className="text-[#13262D]/50 hidden sm:inline-block uppercase">
              PROJECT {project.id} / 03
            </span>
          </div>
        </div>

        {/* Project Header Hero Section */}
        <section className="pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
              <span
                style={{ letterSpacing: "0.18em" }}
                className="font-outfit-regular text-xs sm:text-[13px] uppercase text-[#13262D]"
              >
                NEXTEAK BESPOKE DECKING
              </span>
              <span className="w-16 sm:w-28 h-[1px] bg-[#13262D]" />
              <span
                style={{ letterSpacing: "0.14em" }}
                className="font-outfit-thin text-xs uppercase text-[#13262D]/60 hidden sm:inline-block"
              >
                {project.location} • {project.year}
              </span>
            </div>

            <h1
              style={{ letterSpacing: "0.05em" }}
              className="font-mistical font-normal text-3xl sm:text-5xl lg:text-[62px] xl:text-[68px] uppercase text-[#13262D] leading-[1.08] mb-4"
            >
              {project.title}
            </h1>

            <p
              style={{ letterSpacing: "0.12em" }}
              className="font-outfit-thin text-sm sm:text-base lg:text-lg uppercase text-[#13262D]/80 max-w-3xl mb-8"
            >
              {project.subtitle}
            </p>

            {/* Quick Metadata Pill Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-[#13262D] text-white rounded-lg shadow-sm">
              <div>
                <p className="font-outfit-thin text-[11px] uppercase text-white/60 tracking-widest mb-1">
                  VESSEL
                </p>
                <p className="font-outfit-regular text-xs sm:text-sm text-white">
                  {project.vessel}
                </p>
              </div>
              <div>
                <p className="font-outfit-thin text-[11px] uppercase text-white/60 tracking-widest mb-1">
                  LOCATION
                </p>
                <p className="font-outfit-regular text-xs sm:text-sm text-white">
                  {project.location}
                </p>
              </div>
              <div>
                <p className="font-outfit-thin text-[11px] uppercase text-white/60 tracking-widest mb-1">
                  DECK AREA
                </p>
                <p className="font-outfit-regular text-xs sm:text-sm text-white">
                  {project.deckArea}
                </p>
              </div>
              <div>
                <p className="font-outfit-thin text-[11px] uppercase text-white/60 tracking-widest mb-1">
                  COATING
                </p>
                <p className="font-outfit-regular text-xs sm:text-sm text-white">
                  {project.coating}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Hero Full Banner Image */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden bg-[#13262D] shadow-xl relative"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </section>

        {/* Narrative & Engineering Overview */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Architectural Narrative */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span
                  style={{ letterSpacing: "0.14em" }}
                  className="font-outfit-regular text-xs uppercase text-[#13262D]"
                >
                  PROJECT NARRATIVE
                </span>
                <span className="w-16 h-[1px] bg-[#13262D]" />
              </div>
              <h2
                style={{ letterSpacing: "0.06em" }}
                className="font-mistical text-2xl sm:text-3xl lg:text-4xl uppercase text-[#13262D] mb-6 leading-snug"
              >
                THE ARCHITECTURE OF SUSTAINABLE MARITIME LUXURY
              </h2>
              <p className="font-outfit-extralight text-base sm:text-lg leading-relaxed text-[#13262D]/90 mb-6">
                {project.overview}
              </p>
              <p className="font-outfit-extralight text-sm sm:text-base leading-relaxed text-[#13262D]/80">
                {project.craftsmanshipNotes}
              </p>
            </div>

            {/* Right Column: Key Engineering Highlights */}
            <div className="lg:col-span-5 bg-[#F6F5F2] p-6 sm:p-8 rounded-lg border border-[#13262D]/10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  style={{ letterSpacing: "0.14em" }}
                  className="font-outfit-regular text-xs uppercase text-[#13262D]"
                >
                  ENGINEERING HIGHLIGHTS
                </span>
                <span className="w-12 h-[1px] bg-[#13262D]" />
              </div>
              <ul className="space-y-4">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#13262D] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      ✓
                    </span>
                    <span className="font-outfit-thin text-sm sm:text-base text-[#13262D] leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* High-Resolution Gallery Photo Grid */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 mb-16 sm:mb-24">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  style={{ letterSpacing: "0.14em" }}
                  className="font-outfit-regular text-xs uppercase text-[#13262D]"
                >
                  IMAGE SHOWCASE
                </span>
                <span className="w-16 h-[1px] bg-[#13262D]" />
              </div>
              <h2
                style={{ letterSpacing: "0.06em" }}
                className="font-mistical text-2xl sm:text-4xl uppercase text-[#13262D]"
              >
                CRAFTSMANSHIP PERSPECTIVES
              </h2>
            </div>
            <span className="font-outfit-thin text-xs text-[#13262D]/60 hidden sm:inline-block tracking-wider uppercase">
              CLICK IMAGE TO EXPAND
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {project.galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#13262D] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white border-t border-[#13262D]/10 flex items-center justify-between">
                  <p className="font-outfit-thin text-xs sm:text-sm text-[#13262D]/90 line-clamp-1">
                    {img.caption}
                  </p>
                  <span className="shrink-0 ml-3 text-[#13262D]/50 group-hover:text-[#13262D] transition-colors">
                    🔍
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section className="bg-[#13262D] text-white py-14 sm:py-20 mb-16 sm:mb-24">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span
                  style={{ letterSpacing: "0.14em" }}
                  className="font-outfit-thin text-xs uppercase text-white/70"
                >
                  NAVAL ARCHITECTURE DATA
                </span>
                <span className="w-16 h-[1px] bg-white/40" />
              </div>
              <h2
                style={{ letterSpacing: "0.06em" }}
                className="font-mistical text-3xl sm:text-4xl uppercase text-white"
              >
                TECHNICAL SPECIFICATIONS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 divide-y md:divide-y-0 divide-white/10">
              <div className="divide-y divide-white/10">
                {project.specs.slice(0, 4).map((spec, i) => (
                  <div
                    key={i}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="font-outfit-thin text-xs sm:text-sm uppercase text-white/60 tracking-wider">
                      {spec.label}
                    </span>
                    <span className="font-outfit-regular text-sm sm:text-base text-white text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="divide-y divide-white/10">
                {project.specs.slice(4).map((spec, i) => (
                  <div
                    key={i}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="font-outfit-thin text-xs sm:text-sm uppercase text-white/60 tracking-wider">
                      {spec.label}
                    </span>
                    <span className="font-outfit-regular text-sm sm:text-base text-white text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Navigation Footer (Prev & Next Project) */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 pb-16 sm:pb-24">
          <div className="pt-8 border-t border-[#13262D]/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/gallery/${prevProject.slug}`}
              className="group p-6 rounded-lg border border-[#13262D]/15 hover:border-[#13262D] transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  <LongThinArrow reverse className="w-6 h-3" />
                </span>
                <div>
                  <p className="font-outfit-thin text-[11px] uppercase text-[#13262D]/60 tracking-wider">
                    PREVIOUS PROJECT
                  </p>
                  <p className="font-mistical text-base sm:text-lg uppercase text-[#13262D]">
                    {prevProject.title}
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href={`/gallery/${nextProject.slug}`}
              className="group p-6 rounded-lg border border-[#13262D]/15 hover:border-[#13262D] transition-colors flex items-center justify-between text-right"
            >
              <div>
                <p className="font-outfit-thin text-[11px] uppercase text-[#13262D]/60 tracking-wider">
                  NEXT PROJECT
                </p>
                <p className="font-mistical text-base sm:text-lg uppercase text-[#13262D]">
                  {nextProject.title}
                </p>
              </div>
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                <LongThinArrow className="w-6 h-3" />
              </span>
            </Link>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Fullscreen Image Viewing */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            >
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                aria-label="Close Lightbox"
                className="absolute -top-12 right-0 text-white/80 hover:text-white text-3xl font-light focus:outline-none cursor-pointer"
              >
                ✕
              </button>

              <img
                src={project.galleryImages[activeImageIndex].src}
                alt={project.galleryImages[activeImageIndex].caption}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded shadow-2xl"
              />

              <p className="mt-4 font-outfit-thin text-sm sm:text-base text-white/90 text-center max-w-2xl">
                {project.galleryImages[activeImageIndex].caption}
              </p>

              {/* Prev / Next buttons inside lightbox */}
              <div className="flex items-center gap-6 mt-4">
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null
                        ? (prev - 1 + project.galleryImages.length) %
                          project.galleryImages.length
                        : null
                    )
                  }
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-outfit-thin text-xs uppercase tracking-wider cursor-pointer"
                >
                  PREVIOUS
                </button>
                <span className="font-outfit-thin text-xs text-white/60">
                  {activeImageIndex + 1} / {project.galleryImages.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null
                        ? (prev + 1) % project.galleryImages.length
                        : null
                    )
                  }
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-outfit-thin text-xs uppercase tracking-wider cursor-pointer"
                >
                  NEXT
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
