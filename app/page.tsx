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
  title: `${BUSINESS.name} · Beauty Studio en Buñol, Valencia`,
  description:
    "Essentia Nails — Beauty studio en Buñol, Valencia. Manicura, pedicura, cejas, pestañas y faciales con Paola. Reserva tu cita online en Booksy.",
  keywords: [
    "essentia nails",
    "beauty studio buñol",
    "manicura buñol",
    "pedicura buñol",
    "cejas buñol",
    "lifting pestañas buñol",
    "facial buñol",
    "essentianailss",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${BUSINESS.name} · Beauty Studio en Buñol, Valencia`,
    description:
      "Manicura, pedicura, cejas, pestañas y faciales. Reserva tu cita online con Paola en Buñol.",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS.name} — Beauty Studio en Buñol, Valencia` }],
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
