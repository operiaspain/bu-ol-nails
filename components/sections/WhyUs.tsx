"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";

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
      id="por-que-nosotras"
      aria-labelledby="whyus-heading"
      className="section-padding bg-gradient-to-br from-[#FAF7F5] via-[#F4C2C2]/10 to-[#C9A0DC]/10"
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
            ¿Por qué elegirnos?
          </motion.span>
          <motion.h2
            id="whyus-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D]"
          >
            Tu confianza, nuestra prioridad
          </motion.h2>
        </div>

        {/* Feature columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Razones para elegirnos"
        >
          {WHY_US.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              role="listitem"
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#C9A0DC]/15 hover:border-[#C9A0DC]/40 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon bubble */}
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A0DC]/10 text-3xl group-hover:bg-[#C9A0DC]/20 transition-colors duration-300"
                aria-hidden="true"
                role="img"
              >
                {item.icon}
              </div>

              <h3 className="font-playfair text-lg font-semibold text-[#2D2D2D]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
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
