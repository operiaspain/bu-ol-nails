import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Instagram } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BUSINESS, GALLERY_IMAGES, SITE_URL, OG_IMAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Galería · Diseños de Uñas — Buñolnails",
  description:
    "Galería de diseños de uñas de Buñolnails: manicuras, pedicuras, uñas de gel, nail art y mucho más. Inspírate con nuestros trabajos en Buñol, Valencia.",
  keywords: [
    "galería uñas buñol",
    "nail art buñol",
    "diseños uñas gel buñol",
    "fotos manicura buñol",
    "bunolnails instagram",
  ],
  alternates: {
    canonical: `${SITE_URL}/galeria`,
  },
  openGraph: {
    title: "Galería de diseños · Buñolnails",
    description: "Inspírate con nuestros diseños de uñas en Buñol, Valencia.",
    url: `${SITE_URL}/galeria`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Galería Buñolnails" }],
  },
};

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          aria-labelledby="galeria-page-heading"
          className="relative pt-24 pb-12 bg-gradient-to-br from-[#C9A0DC]/15 via-[#FAF7F5] to-[#F4C2C2]/15"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#C9A0DC]/15 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-[#9B72B0] hover:underline mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
              aria-label="Volver a inicio"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Inicio
            </Link>
            <h1
              id="galeria-page-heading"
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-4"
            >
              Nuestra <span className="gradient-text">Galería</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              Cada creación refleja nuestra pasión por el arte y la belleza.
              Inspírate y reserva tu diseño favorito.
            </p>
          </div>
        </section>

        {/* Gallery grid */}
        <section
          aria-label="Galería de fotos de diseños de uñas"
          className="py-16 bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className="masonry-grid"
              role="list"
              aria-label="Imágenes de diseños de uñas"
            >
              {GALLERY_IMAGES.map((img) => (
                <div
                  key={img.id}
                  role="listitem"
                  className="masonry-item group relative overflow-hidden rounded-2xl cursor-default bg-[#C9A0DC]/10"
                >
                  <div
                    className="relative w-full overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: `${img.width} / ${img.height}` }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#9B72B0]/0 group-hover:bg-[#9B72B0]/15 transition-colors duration-300 rounded-2xl" />
                </div>
              ))}
            </div>

            {/* Instagram CTA */}
            <div className="mt-16 text-center">
              <p className="text-gray-500 mb-6 text-lg">
                ¿Quieres ver más diseños?
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram para ver más diseños (abre en nueva pestaña)"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                  Síguenos en Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section
          aria-label="Reservar diseño favorito"
          className="py-16 bg-[#FAF7F5] text-center"
        >
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <h2 className="font-playfair text-2xl font-semibold text-[#2D2D2D] mb-2">
              ¿Te gusta algún diseño?
            </h2>
            <p className="text-gray-500 mb-8">
              Reserva tu cita y cuéntanos qué diseño te ha inspirado.
              Nuestro equipo lo recreará para ti.
            </p>
            <Button asChild size="lg">
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reservar cita en Booksy (abre en nueva pestaña)"
              >
                Reservar mi cita
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
