"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9 }}
      className="w-full overflow-hidden bg-[#0A181E] select-none"
    >
      <img
        src="/images/brand/footer-bg.webp"
        alt="More Than a Deck, A Brighter Tomorrow. NEXTEAK"
        className="w-full h-auto block"
        loading="lazy"
      />
    </motion.footer>
  );
}
