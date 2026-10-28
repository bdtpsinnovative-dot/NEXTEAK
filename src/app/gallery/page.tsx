"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllProjects } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function GalleryPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#13262D] font-outfit selection:bg-[#13262D] selection:text-white">
      {/* 1. Dark Navbar */}
      <Navbar activeItem="GALLERY" />

      {/* 2. Main Showcase Section matching ภาพรวม.png exactly */}
      <main className="flex-1 w-full">
        <section className="pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-32">
          <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            {/* Header: VERTEK ─── + PROJECT SHOWCASE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 sm:mb-14 lg:mb-16"
            >
              {/* VERTEK with horizontal line */}
              <div className="flex items-center gap-5 sm:gap-6 mb-2 sm:mb-3">
                <span
                  style={{ letterSpacing: "0.18em" }}
                  className="font-outfit-regular text-xs sm:text-[13px] uppercase text-[#13262D]"
                >
                  VERTEK
                </span>
                <span className="w-24 sm:w-36 lg:w-44 h-[1px] bg-[#13262D]" />
              </div>

              {/* Title: PROJECT SHOWCASE in Mistical Spring serif */}
              <h1
                style={{ letterSpacing: "0.06em" }}
                className="font-mistical font-normal text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] uppercase text-[#13262D] leading-[1.08]"
              >
                PROJECT SHOWCASE
              </h1>
            </motion.div>

            {/* 3 Showcase Project Cards with Real Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
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
                    className="group block w-full aspect-[14/19] bg-[#14252C] rounded-[3px] overflow-hidden relative shadow-md transition-all duration-500 hover:shadow-2xl cursor-pointer"
                    aria-label={project.title}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
                    <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 z-10">
                      <p className="font-outfit-thin text-[11px] tracking-[0.2em] uppercase text-white/75 mb-1.5">
                        {project.category}
                      </p>
                      <h2 className="font-mistical text-xl sm:text-2xl uppercase text-white tracking-wide leading-tight">
                        {project.title}
                      </h2>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
