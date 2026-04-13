"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonials-heading"
      className="section-padding bg-gradient-to-br from-[#C9A0DC]/10 via-[#FAF7F5] to-[#F4C2C2]/10"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[#9B72B0] uppercase tracking-widest mb-3"
          >
            Opiniones
          </motion.span>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D]"
          >
            Lo que dicen nuestras clientas
          </motion.h2>
        </div>

        {/* Carousel */}
        <div
          aria-roledescription="carrusel"
          aria-label="Testimonios de clientas"
          className="relative"
        >
          <div
            className="relative overflow-hidden rounded-3xl bg-white border border-[#C9A0DC]/20 shadow-xl p-8 sm:p-12"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Decorative quote icon */}
            <Quote
              className="absolute top-8 right-8 h-12 w-12 text-[#C9A0DC]/20"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                aria-label={`Testimonio ${current + 1} de ${TESTIMONIALS.length}`}
              >
                {/* Stars */}
                <div
                  className="flex gap-1 mb-6"
                  aria-label={`Valoración: ${TESTIMONIALS[current].rating} de 5 estrellas`}
                >
                  {Array.from({ length: TESTIMONIALS[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#C9A0DC] text-[#C9A0DC]"
                        aria-hidden="true"
                      />
                    )
                  )}
                </div>

                {/* Review text */}
                <blockquote>
                  <p className="font-playfair text-xl sm:text-2xl text-[#2D2D2D] leading-relaxed mb-8 italic">
                    &ldquo;{TESTIMONIALS[current].text}&rdquo;
                  </p>
                  <footer>
                    <div className="flex items-center gap-4">
                      {/* Avatar placeholder */}
                      <div
                        className="h-12 w-12 rounded-full bg-gradient-to-br from-[#C9A0DC] to-[#F4C2C2] flex items-center justify-center text-white font-semibold text-lg"
                        aria-hidden="true"
                      >
                        {TESTIMONIALS[current].name.charAt(0)}
                      </div>
                      <div>
                        <cite className="not-italic font-semibold text-[#2D2D2D]">
                          {TESTIMONIALS[current].name}
                        </cite>
                        <p className="text-sm text-gray-400">
                          {TESTIMONIALS[current].location} ·{" "}
                          {TESTIMONIALS[current].date}
                        </p>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Testimonio anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A0DC]/30 bg-white text-[#9B72B0] hover:bg-[#C9A0DC] hover:text-white hover:border-[#C9A0DC] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC]"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Seleccionar testimonio"
            >
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] ${
                    i === current
                      ? "bg-[#C9A0DC] w-6"
                      : "bg-[#C9A0DC]/30 w-2 hover:bg-[#C9A0DC]/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Testimonio siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A0DC]/30 bg-white text-[#9B72B0] hover:bg-[#C9A0DC] hover:text-white hover:border-[#C9A0DC] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
