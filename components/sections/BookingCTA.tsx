"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

export function BookingCTA() {
  return (
    <section
      id="reservar"
      aria-labelledby="booking-cta-heading"
      className="relative overflow-hidden py-20 lg:py-28 bg-[#F5EFE8]"
    >
      {/* Decorative circles */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border border-[rgba(201,169,122,0.15)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full border border-[rgba(201,169,122,0.2)]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 70% at 50% 50%, rgba(201,169,122,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="section-label">Reserva online</span>

          <h2
            id="booking-cta-heading"
            className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1410] leading-tight"
          >
            ¿Lista para lucir{" "}
            <em className="italic text-[#C9A97A]">tu mejor versión?</em>
          </h2>

          <div className="gold-line" aria-hidden="true">
            <span className="gold-line-bar" />
            <span className="gold-line-dot" />
            <span className="gold-line-bar" />
          </div>

          <p className="text-sm text-[#1A1410]/55 max-w-md leading-relaxed font-light">
            Reserva tu cita en segundos desde tu móvil. Sin esperas, sin llamadas.
            {BUSINESS.person} te espera en Buñol, Valencia.
          </p>

          <Button
            asChild
            size="xl"
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

          <p className="text-xs text-[#1A1410]/35 tracking-wide font-light">
            Reserva gratuita &nbsp;·&nbsp; Cancela hasta 24h antes &nbsp;·&nbsp; Sin tarjeta requerida
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default BookingCTA;
