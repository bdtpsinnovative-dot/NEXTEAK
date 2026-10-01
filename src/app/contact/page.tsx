"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function LongThinArrow({ className = "w-6 h-3" }: { className?: string }) {
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

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setModalOpen(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#13262D] font-outfit selection:bg-[#13262D] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar activeItem="CONTACT US" />

      {/* 2. Main Contact Section matching ภาพรวม.png exactly */}
      <main className="flex-1 w-full relative">
        <section className="pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-32">
          <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            {/* Header: NEXTEAK ─── + CONTACT US */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 sm:mb-16 lg:mb-20"
            >
              <div className="flex items-center gap-5 sm:gap-6 mb-2 sm:mb-3">
                <span
                  style={{ letterSpacing: "0.18em" }}
                  className="font-outfit-regular text-xs sm:text-[13px] uppercase text-[#13262D]"
                >
                  NEXTEAK
                </span>
                <span className="w-24 sm:w-36 lg:w-44 h-[1px] bg-[#13262D]" />
              </div>

              <h1
                style={{ letterSpacing: "0.06em" }}
                className="font-mistical font-normal text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] uppercase text-[#13262D] leading-[1.08]"
              >
                CONTACT US
              </h1>
            </motion.div>

            {/* Single Showroom Detail: WOODDEN GALLERY */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Title */}
                <h2
                  style={{ letterSpacing: "0.05em" }}
                  className="font-mistical font-normal text-2xl sm:text-3xl lg:text-4xl text-[#13262D] uppercase tracking-wide leading-snug"
                >
                  WOODDEN GALLERY
                </h2>

                {/* Underline beneath title */}
                <span className="block w-28 sm:w-40 h-[1.5px] bg-[#13262D]/60 mt-3 mb-6 sm:mb-8" />

                {/* Address Lines */}
                <div className="space-y-2 mb-6 sm:mb-8">
                  <p
                    style={{ letterSpacing: "0.06em" }}
                    className="font-outfit-extralight text-sm sm:text-base text-[#13262D]/90 uppercase leading-relaxed"
                  >
                    332 PRADIT MANUTHAM ROAD
                  </p>
                  <p
                    style={{ letterSpacing: "0.06em" }}
                    className="font-outfit-extralight text-sm sm:text-base text-[#13262D]/90 uppercase leading-relaxed"
                  >
                    WANG THONGLANG, WANG THONGLANG
                  </p>
                  <p
                    style={{ letterSpacing: "0.06em" }}
                    className="font-outfit-extralight text-sm sm:text-base text-[#13262D]/90 uppercase leading-relaxed"
                  >
                    BANGKOK 10310, THAILAND
                  </p>
                </div>

                {/* Phone Number */}
                <p
                  style={{ letterSpacing: "0.08em" }}
                  className="font-outfit-medium text-sm sm:text-base uppercase text-[#13262D] mb-8 sm:mb-10"
                >
                  MOBILE:{" "}
                  <a
                    href="tel:0948881072"
                    className="hover:underline transition-all text-[#13262D]"
                  >
                    094-888-1072
                  </a>
                </p>

                {/* Location Button */}
                <a
                  href="https://maps.google.com/?q=332+Pradit+Manutham+Road+Woodden+Gallery+Bangkok"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ letterSpacing: "0.14em" }}
                  className="group/btn inline-flex items-center gap-3.5 border border-[#13262D] hover:bg-[#13262D] hover:text-white text-[#13262D] font-outfit-extralight text-xs sm:text-sm uppercase px-7 py-3 rounded-[4px] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
                >
                  <span>LOCATION</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
                    <LongThinArrow className="w-5 h-2.5" />
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Bottom Right Floating Contact Bar matching ภาพรวม.png */}
            <div className="mt-16 sm:mt-24 flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                style={{ letterSpacing: "0.14em" }}
                className="group/git inline-flex items-center gap-3 border border-[#13262D] hover:bg-[#13262D] hover:text-white text-[#13262D] font-outfit-thin text-xs sm:text-[13px] uppercase px-5 sm:px-6 py-2.5 rounded-[4px] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <span className="transition-transform duration-300 group-hover/git:translate-x-1">
                  <LongThinArrow className="w-5 h-2.5" />
                </span>
              </button>

              {/* LINE Official Account Icon Button */}
              <a
                href="https://line.me/ti/p/~@woodden"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on LINE"
                className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer block"
              >
                <img
                  src="/images/contact/line.png"
                  alt="LINE Official Account"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Modal for "GET IN TOUCH" */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 16, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-[#13262D] rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#13262D]/10"
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-2xl text-[#13262D]/60 hover:text-[#13262D] cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span
                  style={{ letterSpacing: "0.14em" }}
                  className="font-outfit-regular text-xs uppercase text-[#13262D]"
                >
                  NEXTEAK INQUIRY
                </span>
                <span className="w-12 h-[1px] bg-[#13262D]" />
              </div>

              <h3
                style={{ letterSpacing: "0.06em" }}
                className="font-mistical text-2xl sm:text-3xl uppercase mb-4"
              >
                GET IN TOUCH
              </h3>

              {formSubmitted ? (
                <div className="py-8 text-center">
                  <p className="font-mistical text-xl text-[#13262D] mb-2">
                    THANK YOU FOR REACHING OUT.
                  </p>
                  <p className="font-outfit-extralight text-sm text-[#13262D]/80">
                    Our marine teak specialists will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-outfit-thin text-xs uppercase text-[#13262D]/70 mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Captain / Owner Name"
                      className="w-full px-3.5 py-2.5 rounded border border-[#13262D]/20 focus:border-[#13262D] focus:outline-none text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-outfit-thin text-xs uppercase text-[#13262D]/70 mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@yacht.com"
                        className="w-full px-3.5 py-2.5 rounded border border-[#13262D]/20 focus:border-[#13262D] focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-outfit-thin text-xs uppercase text-[#13262D]/70 mb-1">
                        Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        placeholder="+66 8X XXX XXXX"
                        className="w-full px-3.5 py-2.5 rounded border border-[#13262D]/20 focus:border-[#13262D] focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-outfit-thin text-xs uppercase text-[#13262D]/70 mb-1">
                      Vessel / Project Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your yacht or decking project..."
                      className="w-full px-3.5 py-2.5 rounded border border-[#13262D]/20 focus:border-[#13262D] focus:outline-none text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ letterSpacing: "0.14em" }}
                    className="w-full bg-[#13262D] hover:bg-black text-white font-outfit-thin text-xs uppercase py-3 rounded transition-colors cursor-pointer"
                  >
                    SEND INQUIRY
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
