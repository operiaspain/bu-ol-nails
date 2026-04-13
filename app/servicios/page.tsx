import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES, BUSINESS, SITE_URL, OG_IMAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios · Manicura, Pedicura, Uñas de Gel y Acrílicas",
  description:
    "Descubre todos nuestros servicios de uñas en Buñolnails: manicura, pedicura, uñas de gel, uñas acrílicas y tratamientos combinados. Precios, duración y reserva online.",
  keywords: [
    "manicura buñol",
    "pedicura buñol",
    "uñas de gel buñol",
    "uñas acrílicas buñol",
    "servicios uñas buñol",
    "precio manicura buñol",
  ],
  alternates: {
    canonical: `${SITE_URL}/servicios`,
  },
  openGraph: {
    title: "Servicios · Buñolnails",
    description:
      "Manicura, pedicura, uñas de gel y acrílicas en Buñol, Valencia.",
    url: `${SITE_URL}/servicios`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Servicios de Buñolnails" }],
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Hero banner */}
        <section
          aria-labelledby="servicios-page-heading"
          className="relative pt-24 pb-16 bg-gradient-to-br from-[#C9A0DC]/15 via-[#FAF7F5] to-[#F4C2C2]/15"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#C9A0DC]/15 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#F4C2C2]/15 blur-3xl" />
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
              id="servicios-page-heading"
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-4"
            >
              Nuestros{" "}
              <span className="gradient-text">Servicios</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Cada servicio está diseñado para ofrecerte la mejor experiencia.
              Productos premium, técnica impecable y un ambiente que te hará sentir especial.
            </p>
          </div>
        </section>

        {/* Service cards */}
        <section
          aria-label="Lista completa de servicios"
          className="py-16 lg:py-20 bg-white"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                aria-labelledby={`service-title-${service.id}`}
                className="group rounded-3xl border border-[#C9A0DC]/20 bg-white shadow-sm hover:shadow-xl hover:border-[#C9A0DC]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Color accent strip */}
                  <div
                    aria-hidden="true"
                    className="md:w-2 bg-gradient-to-b from-[#C9A0DC] to-[#F4C2C2] shrink-0 md:rounded-l-3xl h-2 md:h-auto rounded-t-3xl"
                  />

                  <div className="flex-1 p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A0DC]/10 text-3xl shrink-0"
                          aria-hidden="true"
                          role="img"
                        >
                          {service.icon}
                        </div>
                        <div>
                          <h2
                            id={`service-title-${service.id}`}
                            className="font-playfair text-2xl font-bold text-[#2D2D2D]"
                          >
                            {service.name}
                          </h2>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                            <span className="text-sm text-gray-400" aria-label={`Duración: ${service.duration}`}>
                              {service.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Badge variant="default" className="self-start sm:self-center">
                        {service.priceRange}
                      </Badge>
                    </div>

                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-[#2D2D2D] mb-3">
                        Incluye:
                      </h3>
                      <ul
                        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                        aria-label={`Qué incluye ${service.name}`}
                      >
                        {(service.features ?? []).map((feat) => (
                          <li
                            key={feat}
                            className="flex items-center gap-2 text-sm text-gray-500"
                          >
                            <Check
                              className="h-4 w-4 text-[#C9A0DC] shrink-0"
                              aria-hidden="true"
                            />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="gap-2"
                      aria-label={`Reservar ${service.name} en Buñolnails`}
                    >
                      <a
                        href={BUSINESS.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar {service.name}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          aria-label="Llamada a la acción para reservar"
          className="py-16 bg-[#FAF7F5] text-center"
        >
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <p className="text-2xl font-playfair font-semibold text-[#2D2D2D] mb-2">
              ¿No encuentras lo que buscas?
            </p>
            <p className="text-gray-500 mb-8">
              Contáctanos y te ayudaremos a encontrar el servicio perfecto para ti.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <a
                  href={BUSINESS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Reservar cita en Booksy (abre en nueva pestaña)"
                >
                  Reservar cita
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
