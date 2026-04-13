"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES, BUSINESS } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="section-padding bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[#9B72B0] uppercase tracking-widest mb-3"
          >
            Nuestros servicios
          </motion.span>
          <motion.h2
            id="servicios-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D]"
          >
            Todo para tus manos y pies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed"
          >
            Servicios profesionales adaptados a ti, con productos de primera calidad
            y técnicas actualizadas.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Lista de servicios"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              role="listitem"
            >
              <Card className="h-full card-hover group cursor-default">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="text-4xl leading-none"
                      aria-hidden="true"
                      role="img"
                    >
                      {service.icon}
                    </div>
                    <Badge variant="default" className="mt-1">
                      {service.priceRange}
                    </Badge>
                  </div>
                  <CardTitle className="mt-3">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  {/* Duration */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span aria-label={`Duración: ${service.duration}`}>
                      {service.duration}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5" aria-label={`Incluye en ${service.name}`}>
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-xs text-gray-500"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-[#C9A0DC] shrink-0"
                          aria-hidden="true"
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-2 w-full group-hover:bg-[#C9A0DC] group-hover:text-white group-hover:border-[#C9A0DC] transition-all"
                    aria-label={`Reservar ${service.name}`}
                  >
                    <a
                      href={BUSINESS.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reservar
                      <ArrowRight className="h-3.5 w-3.5 ml-1" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
