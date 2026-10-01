"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllProjects } from "@/data/projects";

function LongThinArrow({ className = "w-7 h-3.5" }: { className?: string }) {
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
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: 0.2 + i * 0.15,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function GalleryPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#13262D] font-outfit selection:bg-[#13262D] selection:text-white">
      {/* 1. Standard Dark Header / Navbar */}
      <Navbar activeItem="GALLERY" />

      {/* 2. Main Showcase Section */}
      <main className="flex-1 w-full">
        <section className="pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-24 lg:pb-32">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            {/* Header: NEXTEAK ─── + PROJECT SHOWCASE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 sm:mb-12 lg:mb-14"
            >
              {/* NEXTEAK with horizontal divider line */}
              <div className="flex items-center gap-4 sm:gap-6 mb-2 sm:mb-3">
                <span
                  style={{ letterSpacing: "0.18em" }}
                  className="font-outfit-regular text-xs sm:text-[13px] uppercase text-[#13262D]"
                >
                  NEXTEAK
                </span>
                <span className="w-24 sm:w-36 lg:w-44 h-[1px] bg-[#13262D]" />
              </div>

              {/* Title in Mistical Spring serif */}
              <h1
                style={{ letterSpacing: "0.06em" }}
                className="font-mistical font-normal text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] uppercase text-[#13262D] leading-[1.08]"
              >
                PROJECT SHOWCASE
              </h1>
            </motion.div>

            {/* 3 Showcase Portrait Cards matching the 3-column mockup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                >
                  <Link
                    href={`/gallery/${project.slug}`}
                    className="group block relative w-full aspect-[3/4.2] sm:aspect-[3/4.1] lg:aspect-[10/14] rounded-sm overflow-hidden bg-[#13262D] shadow-sm hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#13262D] focus:ring-offset-2"
                  >
                    {/* Background Project Image */}
                    <img
                      src={project.cardImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark gradient overlay for rich contrast & readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E24]/95 via-[#0E1E24]/40 to-transparent transition-opacity duration-500 group-hover:from-[#0E1E24]/98 group-hover:via-[#0E1E24]/50" />

                    {/* Top Tag: Project Number & Category */}
                    <div className="absolute top-5 sm:top-6 left-5 sm:left-6 right-5 sm:right-6 flex items-center justify-between z-10">
                      <span
                        style={{ letterSpacing: "0.16em" }}
                        className="font-outfit-thin text-[11px] sm:text-xs uppercase text-white/80 tracking-widest bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10"
                      >
                        PROJECT {project.id}
                      </span>
                      <span
                        style={{ letterSpacing: "0.12em" }}
                        className="font-outfit-thin text-[11px] uppercase text-white/70 hidden sm:inline-block"
                      >
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom Card Content: Title, Vessel Info, and View Project CTA */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8 z-10 flex flex-col justify-end">
                      <p
                        style={{ letterSpacing: "0.14em" }}
                        className="font-outfit-thin text-[11px] sm:text-[12px] uppercase text-white/75 mb-1.5"
                      >
                        {project.category}
                      </p>

                      <h2
                        style={{ letterSpacing: "0.06em" }}
                        className="font-mistical font-normal text-2xl sm:text-2xl lg:text-[28px] uppercase text-white leading-tight mb-2 group-hover:text-white transition-colors"
                      >
                        {project.title}
                      </h2>

                      <p className="font-outfit-thin text-xs sm:text-[13px] text-white/70 line-clamp-2 leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>

                      {/* Interactive View Project Link Button */}
                      <div className="pt-3 border-t border-white/15 flex items-center justify-between text-white/90 group-hover:text-white">
                        <span
                          style={{ letterSpacing: "0.14em" }}
                          className="font-outfit-thin text-xs sm:text-[13px] uppercase transition-colors"
                        >
                          EXPLORE PROJECT
                        </span>
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                          <LongThinArrow className="w-6 h-3 text-white" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Luxury Philosophy Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 sm:mt-24 pt-12 border-t border-[#13262D]/15 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <p
                  style={{ letterSpacing: "0.12em" }}
                  className="font-outfit-regular text-xs uppercase text-[#13262D]/70 mb-1"
                >
                  BESPOKE MARINE CRAFTSMANSHIP
                </p>
                <p className="font-outfit-extralight text-sm sm:text-base text-[#13262D] max-w-2xl leading-relaxed">
                  Every vessel we outfit is a testament to sustainable teak innovation and zero-compromise naval engineering. Custom marine decking engineered for superyachts, explorers, and modern multihulls worldwide.
                </p>
              </div>

              <a
                href="/#contact"
                style={{ letterSpacing: "0.14em" }}
                className="group/cta shrink-0 inline-flex items-center gap-3 bg-[#13262D] hover:bg-[#0c181d] text-white font-outfit-thin text-xs sm:text-sm uppercase px-6 py-3.5 rounded-[4px] transition-all duration-300 shadow-sm"
              >
                <span>COMMISSION YOUR BUILD</span>
                <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                  <LongThinArrow className="w-5 h-2.5 text-white" />
                </span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
