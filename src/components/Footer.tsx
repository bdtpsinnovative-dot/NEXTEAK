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
      {/* Top Banner with Clean Ocean Background and New Message */}
      <div className="relative w-full overflow-hidden aspect-[5158/759] min-h-[140px] sm:min-h-[190px] md:min-h-[240px] lg:min-h-0 flex items-center justify-center">
        <img
          src="/images/sustainability/bottom-banner-clean.webp"
          alt="Engineered for Performance. Designed for Sustainability."
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="relative z-10 text-center px-4">
          <p className="font-outfit-light text-xs sm:text-base md:text-xl lg:text-2xl xl:text-[26px] tracking-[0.14em] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Engineered for Performance. Designed for Sustainability.
          </p>
        </div>
      </div>

      {/* Corporate Information & Social Media Bar */}
      <div className="border-t border-white/10 bg-[#061219]">
        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start justify-between">
            {/* Left: Brand & Address */}
            <div className="md:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/images/brand/logo-vertek.webp"
                  alt="VERTEK"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </div>

              <h4 className="font-outfit-medium text-base sm:text-lg tracking-wider text-white mb-3">
                Woodden Gallery
              </h4>

              <div className="font-outfit-light text-xs sm:text-sm text-white/70 space-y-1 tracking-wider uppercase leading-relaxed max-w-md">
                <p>332 PRADIT MANUTHAM ROAD, WANG THONGLANG</p>
                <p>BANGKOK 10310, THAILAND</p>
                <p className="pt-2 text-white/90">
                  MOBILE:{" "}
                  <a
                    href="tel:+66636933636"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    +66 63 693 3636
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

                <div className="flex flex-wrap items-center gap-4">
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

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/66636933636"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 text-xs tracking-wider uppercase font-outfit-light"
                  >
                    <svg
                      className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>WHATSAPP +66 63 693 3636</span>
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
