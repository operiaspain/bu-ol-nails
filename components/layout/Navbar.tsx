"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#C9A0DC]/20"
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
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded-lg"
            aria-label={`${BUSINESS.name} — Ir a inicio`}
          >
            <span className="text-2xl" aria-hidden="true">
              <Sparkles className="h-6 w-6 text-[#C9A0DC]" />
            </span>
            <span className="font-playfair text-xl font-bold text-[#9B72B0]">
              {BUSINESS.name}
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                    "hover:text-[#9B72B0] hover:bg-[#C9A0DC]/10",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC]",
                    pathname === link.href
                      ? "text-[#9B72B0] bg-[#C9A0DC]/10"
                      : "text-[#2D2D2D]"
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-[#C9A0DC] rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="rounded-full"
            >
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reservar cita en Buñolnails (abre en nueva pestaña)"
              >
                Reservar cita
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={cn(
              "md:hidden p-2 rounded-xl transition-colors",
              "hover:bg-[#C9A0DC]/10 text-[#9B72B0]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC]"
            )}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#C9A0DC]/20 overflow-hidden"
          >
            <ul
              className="px-4 py-4 space-y-1"
              role="list"
              aria-label="Menú móvil"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      "hover:bg-[#C9A0DC]/10 hover:text-[#9B72B0]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC]",
                      pathname === link.href
                        ? "bg-[#C9A0DC]/10 text-[#9B72B0]"
                        : "text-[#2D2D2D]"
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="pt-2"
              >
                <Button asChild className="w-full rounded-xl" size="default">
                  <a
                    href={BUSINESS.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
