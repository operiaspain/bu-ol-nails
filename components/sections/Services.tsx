"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, SERVICE_CATEGORIES, BUSINESS, type ServiceCategoryId } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function Services() {
  const [activeTab, setActiveTab] = useState<ServiceCategoryId>("nails");

  const filtered = SERVICES.filter((s) => s.category === activeTab);

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="section-padding bg-[#FDFAF6]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Servicios
          </motion.span>
          <motion.h2
            id="servicios-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1410]"
          >
            Tratamientos <em className="italic text-[#C9A97A]">para ti</em>
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

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Categorías de servicios"
        >
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeTab === cat.id}
              aria-controls={`panel-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-2 text-xs font-medium tracking-widest uppercase rounded-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] ${
                activeTab === cat.id
                  ? "bg-[#C9A97A] text-[#1A1410] border-[#C9A97A]"
                  : "bg-transparent text-[#1A1410]/60 border-[rgba(201,169,122,0.3)] hover:border-[#C9A97A] hover:text-[#C9A97A]"
              }`}
            >
              <span aria-hidden="true">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Service cards */}
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-label={`Servicios de ${SERVICE_CATEGORIES.find((c) => c.id === activeTab)?.label}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              role="list"
              aria-label="Lista de servicios"
            >
              {filtered.map((service) => (
                <motion.article
                  key={service.id}
                  variants={cardVariants}
                  role="listitem"
                  className="group flex flex-col bg-white border border-[rgba(201,169,122,0.15)] rounded-sm hover:border-[#C9A97A]/50 hover:shadow-[0_4px_24px_rgba(201,169,122,0.1)] transition-all duration-300 card-hover"
                >
                  <div className="p-6 flex-1 flex flex-col gap-4">
                    {/* Icon + price row */}
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-3xl leading-none" aria-hidden="true">
                        {service.icon}
                      </span>
                      <span className="text-xs font-medium tracking-widest text-[#C9A97A] bg-[#C9A97A]/10 px-3 py-1 rounded-sm border border-[#C9A97A]/20">
                        {service.priceRange}
                      </span>
                    </div>

                    {/* Name + description */}
                    <div>
                      <h3 className="font-cormorant text-xl font-light text-[#1A1410] mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-[#1A1410]/55 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>

                    {/* Duration */}
                    {service.duration && (
                      <div className="flex items-center gap-1.5 text-xs text-[#1A1410]/40 font-light">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        <span aria-label={`Duración: ${service.duration}`}>{service.duration}</span>
                      </div>
                    )}

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <ul
                        className="space-y-1.5 mt-auto"
                        aria-label={`Incluido en ${service.name}`}
                      >
                        {service.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-center gap-2 text-xs text-[#1A1410]/50 font-light"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-[#C9A97A] shrink-0"
                              aria-hidden="true"
                            />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-5">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-[#C9A97A] group-hover:text-[#1A1410] group-hover:border-[#C9A97A] transition-all"
                      aria-label={`Reservar ${service.name}`}
                    >
                      <a
                        href={BUSINESS.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Services;
