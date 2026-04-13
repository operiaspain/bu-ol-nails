"use client";

import { motion } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Hero() {
  const handleScrollToServices = () => {
    const section = document.getElementById("servicios");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      aria-label="Sección principal de Buñolnails"
      className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#C9A0DC]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-40 h-96 w-96 rounded-full bg-[#F4C2C2]/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#C9A0DC]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-24 pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Pill badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#C9A0DC]/15 border border-[#C9A0DC]/30 px-5 py-2 text-sm font-medium text-[#9B72B0]">
              <span aria-hidden="true">💅</span>
              Salón de uñas en Buñol, Valencia
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2D2D2D] leading-tight max-w-4xl"
          >
            Tu belleza,{" "}
            <span className="gradient-text">nuestro arte</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed"
          >
            Especialistas en manicura, pedicura, uñas de gel y acrílicas. Productos premium,
            higiene garantizada y atención personalizada que mereces.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <Button
              asChild
              size="xl"
              className="gap-2 shadow-xl hover:shadow-2xl"
              aria-label="Reservar cita en Buñolnails (abre en nueva pestaña)"
            >
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Reservar cita
              </a>
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={handleScrollToServices}
              aria-label="Ver nuestros servicios"
            >
              Ver servicios
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-gray-400"
            aria-label="Indicadores de confianza"
          >
            {["✓ Higiene garantizada", "✓ Reserva online 24/7", "✓ Productos premium"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1">
                  {item}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={handleScrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A0DC] hover:text-[#9B72B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded-full p-1"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="h-8 w-8" aria-hidden="true" />
      </motion.button>
    </section>
  );
}

export default Hero;
