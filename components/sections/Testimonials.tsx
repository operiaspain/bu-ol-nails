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
      className="section-padding bg-[#1A1410]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Reseñas
          </motion.span>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#FDFAF6]"
          >
            Lo que dicen{" "}
            <em className="italic text-[#C9A97A]">nuestras clientas</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="gold-line mt-4"
            aria-hidden="true"
          >
            <span className="gold-line-bar" />
            <span className="gold-line-dot" />
            <span className="gold-line-bar" />
          </motion.div>
        </div>

        {/* Carousel */}
        <div
          aria-roledescription="carrusel"
          aria-label="Testimonios de clientas"
          className="relative"
        >
          <div
            className="relative overflow-hidden border border-[rgba(201,169,122,0.2)] bg-[rgba(201,169,122,0.04)] p-8 sm:p-12"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Decorative quote icon */}
            <Quote
              className="absolute top-8 right-8 h-10 w-10 text-[#C9A97A]/15"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                aria-label={`Testimonio ${current + 1} de ${TESTIMONIALS.length}`}
              >
                {/* Stars */}
                <div
                  className="flex gap-1 mb-5"
                  aria-label={`Valoración: ${TESTIMONIALS[current].rating} de 5 estrellas`}
                >
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#C9A97A] text-[#C9A97A]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Service badge */}
                <p className="text-xs font-light tracking-widest uppercase text-[#C9A97A]/70 mb-4">
                  {TESTIMONIALS[current].service}
                </p>

                {/* Review text */}
                <blockquote>
                  <p className="font-cormorant text-xl sm:text-2xl text-[#FDFAF6] leading-relaxed mb-8 font-light italic">
                    &ldquo;{TESTIMONIALS[current].text}&rdquo;
                  </p>
                  <footer>
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div
                        className="flex h-10 w-10 items-center justify-center border border-[#C9A97A]/40 text-[#C9A97A] font-cormorant text-lg font-light"
                        aria-hidden="true"
                      >
                        {TESTIMONIALS[current].name.charAt(0)}
                      </div>
                      <div>
                        <cite className="not-italic text-sm font-medium text-[#FDFAF6]">
                          {TESTIMONIALS[current].name}
                        </cite>
                        <p className="text-xs text-[rgba(253,250,246,0.4)] font-light mt-0.5">
                          {TESTIMONIALS[current].location} · {TESTIMONIALS[current].date}
                        </p>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Testimonio anterior"
              className="flex h-9 w-9 items-center justify-center border border-[rgba(201,169,122,0.3)] text-[#C9A97A]/60 hover:border-[#C9A97A] hover:text-[#C9A97A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A]"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
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
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] ${
                    i === current
                      ? "bg-[#C9A97A] w-6"
                      : "bg-[rgba(201,169,122,0.3)] w-1.5 hover:bg-[#C9A97A]/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Testimonio siguiente"
              className="flex h-9 w-9 items-center justify-center border border-[rgba(201,169,122,0.3)] text-[#C9A97A]/60 hover:border-[#C9A97A] hover:text-[#C9A97A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A]"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
