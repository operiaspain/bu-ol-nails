import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { BUSINESS, HOURS, SITE_URL, OG_IMAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto · Buñolnails — Salón de Uñas en Buñol",
  description:
    "Contáctanos o visítanos en C. la Hoya, 46360 Buñol, Valencia. Horario, mapa, teléfono y formulario de contacto. Reserva tu cita en Buñolnails.",
  keywords: [
    "contacto bunolnails",
    "dirección salón uñas buñol",
    "horario bunolnails",
    "como llegar bunolnails",
    "teléfono bunolnails",
  ],
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  openGraph: {
    title: "Contacto · Buñolnails",
    description: "Contáctanos en C. la Hoya, 46360 Buñol, Valencia.",
    url: `${SITE_URL}/contacto`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Contacto Buñolnails" }],
  },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          aria-labelledby="contacto-page-heading"
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
              id="contacto-page-heading"
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-4"
            >
              Visítanos o{" "}
              <span className="gradient-text">escríbenos</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              Estamos en el corazón de Buñol. Encuéntranos, llámanos o
              mándanos un mensaje.
            </p>
          </div>
        </section>

        {/* Full-page map */}
        <section aria-label="Mapa de ubicación del salón" className="w-full h-72 md:h-96">
          <iframe
            title="Ubicación de Buñolnails — C. la Hoya, 46360 Buñol, Valencia"
            src={BUSINESS.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa interactivo mostrando la ubicación de Buñolnails"
          />
        </section>

        {/* Quick info bar */}
        <section
          aria-label="Información rápida de contacto"
          className="bg-white border-y border-[#C9A0DC]/20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A0DC]/10"
                  aria-hidden="true"
                >
                  <MapPin className="h-5 w-5 text-[#9B72B0]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Dirección
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2D2D2D] hover:text-[#9B72B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
                    aria-label={`Abrir ${BUSINESS.address.full} en Google Maps`}
                  >
                    {BUSINESS.address.street}, {BUSINESS.address.city}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A0DC]/10"
                  aria-hidden="true"
                >
                  <Phone className="h-5 w-5 text-[#9B72B0]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Teléfono
                  </p>
                  <a
                    href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                    className="text-sm text-[#2D2D2D] hover:text-[#9B72B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A0DC]/10"
                  aria-hidden="true"
                >
                  <Mail className="h-5 w-5 text-[#9B72B0]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-sm text-[#2D2D2D] hover:text-[#9B72B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded break-all"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A0DC]/10"
                  aria-hidden="true"
                >
                  <Instagram className="h-5 w-5 text-[#9B72B0]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Instagram
                  </p>
                  <a
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2D2D2D] hover:text-[#9B72B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
                    aria-label="Síguenos en Instagram (abre en nueva pestaña)"
                  >
                    @bunolnails
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact form + sidebar section */}
        <Contact />

        {/* Full hours section */}
        <section
          aria-labelledby="full-hours-heading"
          className="py-16 bg-white"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2
              id="full-hours-heading"
              className="font-playfair text-2xl font-bold text-[#2D2D2D] flex items-center gap-2 mb-8 text-center justify-center"
            >
              <Clock className="h-6 w-6 text-[#C9A0DC]" aria-hidden="true" />
              Horario completo
            </h2>
            <div className="rounded-2xl border border-[#C9A0DC]/20 overflow-hidden">
              <table
                className="w-full text-sm"
                aria-label="Horario de apertura completo de Buñolnails"
              >
                <caption className="sr-only">
                  Horario de apertura semanal de Buñolnails
                </caption>
                <thead>
                  <tr className="bg-[#C9A0DC]/10">
                    <th scope="col" className="text-left px-6 py-3 font-semibold text-[#9B72B0]">
                      Día
                    </th>
                    <th scope="col" className="text-right px-6 py-3 font-semibold text-[#9B72B0]">
                      Horario
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {HOURS.map((day, i) => (
                    <tr
                      key={day.jsDay}
                      className={`border-t border-[#C9A0DC]/10 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FAF7F5]"
                      }`}
                    >
                      <td className="px-6 py-4 text-[#2D2D2D] font-medium">
                        {day.day}
                      </td>
                      <td className="px-6 py-4 text-right">
                        {day.isClosed ? (
                          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-500">
                            Cerrado
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#C9A0DC]/10 text-[#9B72B0]">
                            {day.open} – {day.close}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
