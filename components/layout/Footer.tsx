import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, HOURS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#0D0A07] text-[#FDFAF6]"
    >
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <span className="flex h-8 w-8 items-center justify-center border border-[#C9A97A]/50 text-[#C9A97A] text-xs font-medium tracking-widest">
                EN
              </span>
              <span className="font-cormorant text-xl font-light text-[#FDFAF6] tracking-wide">
                {BUSINESS.name}
              </span>
            </div>
            <p className="text-xs text-[rgba(253,250,246,0.45)] leading-relaxed mb-6 font-light">
              Beauty studio en Buñol, Valencia. Manicura, cejas, pestañas y faciales con {BUSINESS.person}.
            </p>
            {/* Social */}
            <a
              href={BUSINESS.instagram}
              aria-label="Síguenos en Instagram (abre en nueva pestaña)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center border border-[rgba(201,169,122,0.3)] text-[#C9A97A]/60 hover:border-[#C9A97A] hover:text-[#C9A97A] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A]"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-cormorant text-base font-light text-[#FDFAF6] mb-5 tracking-wide">
              Navegación
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-light text-[rgba(253,250,246,0.5)] hover:text-[#C9A97A] transition-colors duration-200 tracking-widest uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded"
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
                  className="text-xs font-light text-[#C9A97A] hover:text-[#E8DDD0] transition-colors duration-200 tracking-widest uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded"
                >
                  Reservar cita →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-cormorant text-base font-light text-[#FDFAF6] mb-5 tracking-wide">
              Contacto
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-xs font-light text-[rgba(253,250,246,0.5)] hover:text-[#C9A97A] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded"
                  aria-label={`Abrir en Google Maps: ${BUSINESS.address.full}`}
                >
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#C9A97A]/50 group-hover:text-[#C9A97A]" aria-hidden="true" />
                  <span>{BUSINESS.address.full}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-xs font-light text-[rgba(253,250,246,0.5)] hover:text-[#C9A97A] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#C9A97A]/50 group-hover:text-[#C9A97A]" aria-hidden="true" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2.5 text-xs font-light text-[rgba(253,250,246,0.5)] hover:text-[#C9A97A] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#C9A97A]/50 group-hover:text-[#C9A97A]" aria-hidden="true" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-cormorant text-base font-light text-[#FDFAF6] mb-5 flex items-center gap-2 tracking-wide">
              <Clock className="h-3.5 w-3.5 text-[#C9A97A]" aria-hidden="true" />
              Horario
            </h3>
            <ul className="space-y-2" role="list" aria-label="Horario de apertura">
              {HOURS.map((day) => (
                <li
                  key={day.jsDay}
                  className="flex items-center justify-between text-xs gap-4"
                >
                  <span className="text-[rgba(253,250,246,0.45)] font-light">{day.day}</span>
                  {day.isClosed ? (
                    <span className="text-[rgba(253,250,246,0.25)] font-light">Cerrado</span>
                  ) : (
                    <span className="text-[#C9A97A] font-light">
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
      <div className="border-t border-[rgba(201,169,122,0.1)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[rgba(253,250,246,0.25)] font-light">
          <p>
            &copy; {currentYear} {BUSINESS.name}. Todos los derechos reservados.
          </p>
          <p className="tracking-wide">
            Diseñado con cariño en Valencia
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
