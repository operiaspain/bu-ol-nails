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
  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      aria-label="Sección principal de Essentia Nails"
      className="relative min-h-screen flex items-center justify-center bg-[#1A1410] overflow-hidden texture"
    >
      {/* Decorative circles */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full border border-[rgba(201,169,122,0.08)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full border border-[rgba(201,169,122,0.12)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[280px] rounded-full border border-[rgba(201,169,122,0.18)]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,169,122,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 30% 40% at 20% 80%, rgba(139,115,85,0.08) 0%, transparent 50%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-24 pt-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-7"
        >
          {/* Eyebrow label */}
          <motion.div variants={itemVariants}>
            <span className="section-label">
              Beauty Studio · Buñol, Valencia
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-[#FDFAF6] leading-tight max-w-3xl"
          >
            Tu mejor versión
            <br />
            <em className="italic text-[#C9A97A]">comienza aquí</em>
          </motion.h1>

          {/* Gold divider */}
          <motion.div variants={itemVariants} className="gold-line" aria-hidden="true">
            <span className="gold-line-bar" />
            <span className="gold-line-dot" />
            <span className="gold-line-bar" />
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-base text-[rgba(253,250,246,0.6)] max-w-md leading-relaxed font-light tracking-wide"
          >
            con {BUSINESS.person} · Manicura &nbsp;·&nbsp; Estética &nbsp;·&nbsp; Belleza Integral
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <Button
              asChild
              size="lg"
              aria-label="Reservar cita en Essentia Nails (abre en nueva pestaña)"
            >
              <a href={BUSINESS.bookingUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Reservar mi cita
              </a>
            </Button>

            <Button
              variant="outline-dark"
              size="lg"
              onClick={handleScrollToAbout}
              aria-label="Ver servicios disponibles"
            >
              Ver servicios
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mt-2 text-xs text-[rgba(253,250,246,0.4)] font-light tracking-widest uppercase"
            aria-label="Indicadores de confianza"
          >
            {["Reseñas 5★ en Booksy", "Reserva online 24/7", "Productos premium"].map(
              (item) => (
                <span key={item}>{item}</span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={handleScrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C9A97A]/60 hover:text-[#C9A97A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded p-1"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-[0.6rem] tracking-[0.25em] uppercase font-light">Descubrir</span>
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </motion.button>
    </section>
  );
}

export default Hero;
