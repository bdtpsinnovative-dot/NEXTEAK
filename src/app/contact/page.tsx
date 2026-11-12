"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/supabase/client";

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

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      if (!formData.name.trim()) {
        setErrorMsg("Please enter your name.");
        setSubmitting(false);
        return;
      }
      if (!formData.email.trim() && !formData.phone.trim()) {
        setErrorMsg("Please provide an email or phone number.");
        setSubmitting(false);
        return;
      }

      const nameParts = formData.name.trim().split(/\s+/);
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ") || "-";

      const supabase = createClient();
      const { error: insertError } = await supabase
        .from("contact_inquiries")
        .insert({
          first_name: firstName,
          last_name: lastName,
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          source: "vertek",
          status: "new",
        });

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        setErrorMsg("Unable to submit inquiry. Please try again.");
      } else {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setFormSubmitted(false);
          setModalOpen(false);
        }, 2500);
      }
    } catch (err: any) {
      console.error("Error submitting inquiry:", err);
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#13262D] font-outfit selection:bg-[#13262D] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar activeItem="CONTACT US" />

      {/* 2. Main Contact Section matching ภาพรวม.png exactly */}
      <main className="flex-1 w-full relative">
        <section className="pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-32">
          <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            {/* Header: VERTEK ─── + CONTACT US (Centered) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 sm:mb-16 lg:mb-20 text-center flex flex-col items-center"
            >
              <div className="flex items-center justify-center gap-4 sm:gap-6 mb-2 sm:mb-3">
                <span className="w-12 sm:w-20 lg:w-28 h-[1px] bg-[#13262D]" />
                <span
                  style={{ letterSpacing: "0.18em" }}
                  className="font-outfit-regular text-xs sm:text-[13px] uppercase text-[#13262D]"
                >
                  VERTEK
                </span>
                <span className="w-12 sm:w-20 lg:w-28 h-[1px] bg-[#13262D]" />
              </div>

              <h1
                style={{ letterSpacing: "0.06em" }}
                className="font-mistical font-normal text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] uppercase text-[#13262D] leading-[1.08]"
              >
                CONTACT US
              </h1>
            </motion.div>

            {/* Single Showroom Detail: WOODDEN GALLERY (Centered) */}
            <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center"
              >
                {/* Title */}
                <h2
                  style={{ letterSpacing: "0.05em" }}
                  className="font-mistical font-normal text-2xl sm:text-3xl lg:text-4xl text-[#13262D] uppercase tracking-wide leading-snug"
                >
                  WOODDEN GALLERY
                </h2>

                {/* Underline beneath title */}
                <span className="block w-28 sm:w-40 h-[1.5px] bg-[#13262D]/60 mt-3 mb-6 sm:mb-8 mx-auto" />

                {/* Address Lines */}
                <div className="space-y-2 mb-6 sm:mb-8 text-center">
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
                  className="font-outfit-medium text-sm sm:text-base uppercase text-[#13262D] mb-5 text-center"
                >
                  MOBILE:{" "}
                  <a
                    href="tel:+66636933636"
                    className="hover:underline transition-all text-[#13262D]"
                  >
                    +66 63 693 3636
                  </a>
                </p>

                {/* Direct Contact Channels: WhatsApp & Instagram */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-8 sm:mb-10">
                  <a
                    href="https://wa.me/66636933636"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp +66 63 693 3636"
                    style={{ letterSpacing: "0.1em" }}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#13262D]/25 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white text-[#13262D] transition-all duration-300 text-xs uppercase font-outfit-light shadow-2xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>WHATSAPP +66 63 693 3636</span>
                  </a>

                  <a
                    href="https://www.instagram.com/vertek_thailand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="VERTEK Instagram @vertek_thailand"
                    style={{ letterSpacing: "0.1em" }}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#13262D]/25 hover:bg-[#13262D] hover:border-[#13262D] hover:text-white text-[#13262D] transition-all duration-300 text-xs uppercase font-outfit-light shadow-2xs"
                  >
                    <InstagramIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>@VERTEK_THAILAND</span>
                  </a>
                </div>

                {/* Location Button */}
                <a
                  href="https://maps.google.com/?q=332+Pradit+Manutham+Road+Woodden+Gallery+Bangkok"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ letterSpacing: "0.14em" }}
                  className="group/btn inline-flex items-center gap-3.5 border border-[#13262D] hover:bg-[#13262D] hover:text-white text-[#13262D] font-outfit-extralight text-xs sm:text-sm uppercase px-8 py-3.5 rounded-[4px] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
                >
                  <span>LOCATION</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
                    <LongThinArrow className="w-5 h-2.5" />
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Bottom Right Floating Contact Bar */}
            <div className="mt-16 sm:mt-24 flex flex-wrap items-center justify-end gap-3 sm:gap-4">
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

              {/* WhatsApp Icon Button */}
              <a
                href="https://wa.me/66636933636"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              {/* Instagram Icon Button */}
              <a
                href="https://www.instagram.com/vertek_thailand/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VERTEK Instagram"
                className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#13262D] text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  VERTEK INQUIRY
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
                  {errorMsg && (
                    <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block font-outfit-thin text-xs uppercase text-[#13262D]/70 mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Captain / Owner Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#13262D]/20 focus:border-[#13262D] focus:outline-none text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{ letterSpacing: "0.14em" }}
                    className="w-full bg-[#13262D] hover:bg-black text-white font-outfit-thin text-xs uppercase py-3 rounded transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? "SENDING INQUIRY..." : "SEND INQUIRY"}
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
