"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isHeroMode = !isScrolled && !isMobileOpen;

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        isScrolled
          ? "bg-[#FDFAF6]/95 backdrop-blur-md shadow-sm border-b border-[rgba(201,169,122,0.15)]"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded"
            aria-label={`${BUSINESS.name} — Ir a inicio`}
          >
            {/* Monogram */}
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-sm border text-xs font-medium tracking-widest transition-colors duration-300",
                isHeroMode
                  ? "border-[#C9A97A]/60 text-[#C9A97A]"
                  : "border-[#C9A97A] text-[#C9A97A]"
              )}
              aria-hidden="true"
            >
              EN
            </span>
            <span
              className={cn(
                "font-cormorant text-xl font-light tracking-wide transition-colors duration-300",
                isHeroMode ? "text-[#FDFAF6]" : "text-[#1A1410]"
              )}
            >
              {BUSINESS.name}
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-xs font-light tracking-widest uppercase transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded",
                      isHeroMode
                        ? isActive
                          ? "text-[#C9A97A]"
                          : "text-[rgba(253,250,246,0.75)] hover:text-[#C9A97A]"
                        : isActive
                        ? "text-[#C9A97A]"
                        : "text-[#1A1410]/70 hover:text-[#C9A97A]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-px w-4 bg-[#C9A97A]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              size="sm"
              variant={isHeroMode ? "outline-dark" : "default"}
            >
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reservar cita en Essentia Nails (abre en nueva pestaña)"
              >
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                Reservar cita
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={cn(
              "md:hidden p-2 rounded transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A]",
              isHeroMode
                ? "text-[#FDFAF6]/80 hover:text-[#C9A97A]"
                : "text-[#1A1410]/70 hover:text-[#C9A97A]"
            )}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-[#1A1410]/95 backdrop-blur-md border-t border-[rgba(201,169,122,0.15)] overflow-hidden"
          >
            <ul
              className="px-4 py-4 space-y-1"
              role="list"
              aria-label="Menú móvil"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 text-xs font-light tracking-widest uppercase transition-colors rounded",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A]",
                      pathname === link.href
                        ? "text-[#C9A97A]"
                        : "text-[rgba(253,250,246,0.7)] hover:text-[#C9A97A]"
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="pt-3 pb-1"
              >
                <Button asChild className="w-full" size="default">
                  <a
                    href={BUSINESS.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    Reservar cita
                  </a>
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
