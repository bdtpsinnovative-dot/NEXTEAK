"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  activeItem?: "PRODUCTS" | "SUSTAINABILITY" | "GALLERY" | "CONTACT US";
}

const NAV_ITEMS = [
  { label: "PRODUCTS", href: "/products" },
  { label: "SUSTAINABILITY", href: "/sustainability" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT US", href: "/contact" },
];

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

export default function Navbar({ activeItem }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full bg-[#13262D] text-white shadow-md select-none"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 h-16 sm:h-20 lg:h-[92px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <img
            src="/images/brand/logo-nexteak.png"
            alt="NEXTEAK"
            className="h-[19px] sm:h-[26px] lg:h-[32px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-16 font-outfit-thin text-xs lg:text-[14px] uppercase text-white/95">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{ letterSpacing: "0.14em" }}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-white after:scale-x-100"
                    : "text-white/85 hover:text-white"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  isActive ? "after:scale-x-100" : "after:scale-x-0"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right User, Language & Mobile Hamburger Button */}
        <div className="flex items-center gap-3.5 sm:gap-4 lg:gap-5 text-white/95">
          <button
            type="button"
            aria-label="User Account"
            className="hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer"
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


          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden ml-1 p-2 -mr-1 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
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
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeItem === item.label;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ letterSpacing: "0.16em" }}
                      className={`py-4 flex items-center justify-between font-outfit-thin text-sm uppercase transition-colors ${
                        isActive ? "text-white font-medium" : "text-white/80 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <LongThinArrow className="w-5 h-2.5 opacity-70" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
