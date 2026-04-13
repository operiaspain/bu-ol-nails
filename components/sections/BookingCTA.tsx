"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

export function BookingCTA() {
  return (
    <section
      id="reservar"
      aria-labelledby="booking-cta-heading"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#9B72B0] via-[#C9A0DC] to-[#e8a0c4]"
      />

      {/* Decorative elements */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Icon */}
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
            aria-hidden="true"
          >
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          <h2
            id="booking-cta-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            ¿Lista para lucir unas <br className="hidden sm:block" />
            uñas perfectas?
          </h2>

          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            Reserva tu cita en segundos desde tu móvil. Sin esperas, sin llamadas.
            Te esperamos en Buñol.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Button
              asChild
              size="xl"
              variant="dark"
              className="bg-white text-[#9B72B0] hover:bg-white/90 shadow-2xl border-0"
              aria-label="Reservar cita ahora en Booksy (abre en nueva pestaña)"
            >
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Reservar mi cita ahora
              </a>
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-white/60 text-sm mt-2">
            Reserva gratuita · Cancela hasta 24h antes · Sin tarjeta requerida
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default BookingCTA;
