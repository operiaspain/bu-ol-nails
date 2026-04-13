"use client";

import { motion } from "framer-motion";
import { WHY_US, BUSINESS } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function WhyUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-[#F5EFE8]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Sobre {BUSINESS.person}
          </motion.span>
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1410]"
          >
            Por qué elegir{" "}
            <em className="italic text-[#C9A97A]">Essentia</em>
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
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-sm text-[#1A1410]/55 max-w-lg mx-auto leading-relaxed font-light"
          >
            En Essentia Nails cada cita es una experiencia. {BUSINESS.person} cuida cada detalle
            para que te vayas sintiéndote exactamente como mereces.
          </motion.p>
        </div>

        {/* Value columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Por qué elegirnos"
        >
          {WHY_US.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              role="listitem"
              className="flex flex-col items-center text-center gap-4 p-7 bg-white border border-[rgba(201,169,122,0.15)] hover:border-[#C9A97A]/40 hover:shadow-[0_4px_24px_rgba(201,169,122,0.1)] transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="flex h-14 w-14 items-center justify-center border border-[rgba(201,169,122,0.3)] text-2xl group-hover:border-[#C9A97A] transition-colors duration-300"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <h3 className="font-cormorant text-lg font-light text-[#1A1410]">
                {item.title}
              </h3>
              <p className="text-xs text-[#1A1410]/55 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;
