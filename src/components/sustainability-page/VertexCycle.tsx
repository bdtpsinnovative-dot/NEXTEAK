"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VertexCycle() {
  return (
    <section
      id="vertek-cycle"
      className="relative w-full bg-white text-[#13262D] py-16 sm:py-24 lg:py-32 overflow-hidden select-none border-t border-[#13262D]/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ============================================================== */}
        {/* TOP: TITLE & PHILOSOPHY WITH VERTICAL DIVIDER                   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          {/* Left: Section tag + Mistical title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <span className="font-outfit-light text-sm sm:text-base lg:text-[16px] tracking-[0.28em] text-[#13262D]/85 uppercase">
                THE VERTEK CYCLE
              </span>
              <div className="h-[1px] w-20 sm:w-28 bg-[#13262D]/30" />
            </div>

            <h2 className="font-mistical text-4xl sm:text-5xl md:text-6xl lg:text-[3.85rem] xl:text-[4.5rem] leading-[1.1] tracking-[0.08em] text-[#13262D] uppercase">
              A CYCLE OF
              <br />
              LASTING VALUE
            </h2>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
            <div className="h-36 lg:h-44 xl:h-48 w-[1px] bg-[#13262D]/25" />
          </div>

          {/* Right: Circular approach statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex items-center"
          >
            <p className="font-outfit-light text-sm sm:text-base lg:text-[16px] xl:text-[18px] leading-[2.1] lg:leading-[2.2] tracking-[0.08em] text-[#13262D]/90 uppercase">
              SUSTAINABILITY BEGINS AT THE SOURCE. BY CREATING FAIR VALUE FOR
              GROWERS, RESPONSIBLY CULTIVATING THAI TEAK, AND COMBINING ADVANCED
              PRODUCTION TECHNOLOGY WITH RIGOROUS QUALITY CONTROL, WE TRANSFORM
              NATURAL RESOURCES INTO LASTING VALUE — SUPPORTING CONTINUOUS
              REPLANTING FOR GENERATIONS TO COME.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
