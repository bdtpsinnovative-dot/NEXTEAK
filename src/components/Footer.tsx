"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full overflow-hidden bg-[#071720] text-white select-none"
    >
      {/* Top Banner Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/images/brand/footer-bg.webp"
          alt="More Than a Deck, A Brighter Tomorrow. VERTEK"
          className="w-full h-auto block select-none pointer-events-none"
          loading="lazy"
        />
      </div>

      {/* Corporate Information & Social Media Bar */}
      <div className="border-t border-white/10 bg-[#061219]">
        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start justify-between">
            {/* Left: Brand & Address */}
            <div className="md:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/brand/logo-vertek.webp"
                  alt="VERTEK"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </div>

              <h4 className="font-mistical text-lg sm:text-xl uppercase tracking-wider text-white mb-3">
                WOODDEN GALLERY
              </h4>

              <div className="font-outfit-light text-xs sm:text-sm text-white/70 space-y-1 tracking-wider uppercase leading-relaxed max-w-md">
                <p>332 PRADIT MANUTHAM ROAD, WANG THONGLANG</p>
                <p>BANGKOK 10310, THAILAND</p>
                <p className="pt-2 text-white/90">
                  MOBILE:{" "}
                  <a
                    href="tel:0948881072"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    094-888-1072
                  </a>
                </p>
              </div>
            </div>

            {/* Right: Social Media & Quick Links */}
            <div className="md:col-span-5 flex flex-col md:items-end justify-between h-full pt-2">
              <div className="flex flex-col md:items-end mb-6">
                <span className="font-outfit-light text-xs tracking-[0.2em] text-white/60 uppercase mb-3">
                  CONNECT WITH US
                </span>

                <div className="flex items-center gap-4">
                  {/* Instagram Button */}
                  <a
                    href="https://www.instagram.com/vertek_thailand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="VERTEK Instagram"
                    className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-[#071720] transition-all duration-300 text-xs tracking-wider uppercase font-outfit-light"
                  >
                    <svg
                      className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>@vertek_thailand</span>
                  </a>

                  {/* LINE Button */}
                  <a
                    href="https://line.me/ti/p/~@woodden"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on LINE"
                    className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-[#06C755] hover:border-[#06C755] hover:text-white transition-all duration-300 text-xs tracking-wider uppercase font-outfit-light"
                  >
                    <span>LINE @WOODDEN</span>
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <p className="font-outfit-extralight text-[11px] tracking-[0.16em] text-white/50 uppercase md:text-right">
                © {new Date().getFullYear()} VERTEK. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
