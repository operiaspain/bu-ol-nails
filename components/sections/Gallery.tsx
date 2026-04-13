"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/lib/constants";

// Show only first 8 images on homepage
const PREVIEW_COUNT = 8;

export function Gallery() {
  const images = GALLERY_IMAGES.slice(0, PREVIEW_COUNT);

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-heading"
      className="section-padding bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[#9B72B0] uppercase tracking-widest mb-3"
          >
            Nuestro trabajo
          </motion.span>
          <motion.h2
            id="galeria-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D]"
          >
            Galería de creaciones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-xl mx-auto"
          >
            Cada uña es una obra de arte. Inspírate con nuestros diseños más recientes.
          </motion.p>
        </div>

        {/* Masonry grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="masonry-grid"
          aria-label="Galería de fotos de uñas"
        >
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#C9A0DC]/10">
                <div className="relative w-full transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: `${img.width} / ${img.height}` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#9B72B0]/0 group-hover:bg-[#9B72B0]/20 transition-colors duration-300 rounded-2xl flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-xs font-medium drop-shadow-sm line-clamp-2">
                    {img.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/galeria" aria-label="Ver toda la galería de Buñolnails">
              Ver galería completa
              <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
