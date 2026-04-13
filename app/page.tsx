import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OpenStatus } from "@/components/sections/OpenStatus";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Contact } from "@/components/sections/Contact";
import { BUSINESS, SITE_URL, OG_IMAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BUSINESS.name} · Salón de Uñas Profesional en Buñol, Valencia`,
  description:
    "Salón de uñas profesional en Buñol, Valencia. Manicura, pedicura, uñas de gel y acrílicas. Reserva online en Booksy. Higiene garantizada, productos premium y 10+ años de experiencia.",
  keywords: [
    "salón de uñas buñol",
    "manicura buñol",
    "pedicura buñol",
    "uñas gel buñol",
    "uñas acrílicas buñol",
    "bunolnails",
    "nail salon valencia",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${BUSINESS.name} · Salón de Uñas en Buñol, Valencia`,
    description:
      "Manicura, pedicura, uñas de gel y acrílicas. Reserva tu cita online en Booksy.",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Buñolnails salón de uñas" }],
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <OpenStatus />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
