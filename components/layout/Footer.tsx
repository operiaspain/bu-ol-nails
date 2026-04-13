import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";
import { BUSINESS, HOURS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#2D2D2D] text-white"
    >
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-[#C9A0DC]" aria-hidden="true" />
              <span className="font-playfair text-xl font-bold text-white">
                {BUSINESS.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Salón de uñas profesional en Buñol, Valencia. Tu belleza es nuestro arte.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.instagram}
                aria-label="Síguenos en Instagram (abre en nueva pestaña)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#C9A0DC] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC]"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-playfair text-base font-semibold text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#C9A0DC] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#C9A0DC] hover:text-[#F4C2C2] transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
                >
                  Reservar cita →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-playfair text-base font-semibold text-white mb-4">
              Contacto
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-[#C9A0DC] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
                  aria-label={`Abrir en Google Maps: ${BUSINESS.address.full}`}
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#C9A0DC]/60 group-hover:text-[#C9A0DC]" aria-hidden="true" />
                  <span>{BUSINESS.address.full}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-[#C9A0DC] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#C9A0DC]/60 group-hover:text-[#C9A0DC]" aria-hidden="true" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-[#C9A0DC] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#C9A0DC]/60 group-hover:text-[#C9A0DC]" aria-hidden="true" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-playfair text-base font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#C9A0DC]" aria-hidden="true" />
              Horario
            </h3>
            <ul className="space-y-2" role="list" aria-label="Horario de apertura">
              {HOURS.map((day) => (
                <li
                  key={day.jsDay}
                  className="flex items-center justify-between text-sm gap-4"
                >
                  <span className="text-gray-400">{day.day}</span>
                  {day.isClosed ? (
                    <span className="text-gray-600 text-xs font-medium">Cerrado</span>
                  ) : (
                    <span className="text-[#C9A0DC] font-medium text-xs">
                      {day.open} – {day.close}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            &copy; {currentYear} {BUSINESS.name}. Todos los derechos reservados.
          </p>
          <p>
            Diseñado con <span aria-label="amor" role="img">💅</span> en Valencia
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
