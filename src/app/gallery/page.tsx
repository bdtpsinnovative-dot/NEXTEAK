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
            {/* Header: VERTEX ─── + PROJECT SHOWCASE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 sm:mb-14 lg:mb-16"
            >
              {/* VERTEX with horizontal line */}
              <div className="flex items-center gap-5 sm:gap-6 mb-2 sm:mb-3">
                <span
                  style={{ letterSpacing: "0.18em" }}
                  className="font-outfit-regular text-xs sm:text-[13px] uppercase text-[#13262D]"
                >
                  VERTEX
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

            {/* 3 Showcase Solid Blocks matching ภาพรวม.png exactly (NO TEXT, NO IMAGES) */}
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
                    className="block w-full aspect-[14/19] bg-[#14252C] rounded-[2px] transition-all duration-300 hover:opacity-90 hover:shadow-2xl cursor-pointer"
                    aria-label={`Project ${idx + 1}`}
                  />
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
