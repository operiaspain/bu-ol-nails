import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "../styles/globals.css";
import { BUSINESS, SITE_URL, OG_IMAGE } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} · Beauty Studio en Buñol, Valencia`,
    template: `%s · ${BUSINESS.name}`,
  },
  description:
    "Essentia Nails — Beauty studio en Buñol, Valencia. Manicura, pedicura, cejas, pestañas y tratamientos faciales con Paola. Tu mejor versión comienza aquí. Reserva online.",
  keywords: [
    "essentia nails",
    "beauty studio buñol",
    "manicura buñol",
    "pedicura valencia",
    "cejas laminado buñol",
    "lifting pestañas buñol",
    "facial buñol",
    "estética buñol",
    "paola nails",
    "essentianailss",
  ],
  authors: [{ name: "Essentia Nails" }],
  creator: "Essentia Nails",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} · Beauty Studio en Buñol, Valencia`,
    description:
      "Manicura, pedicura, cejas, pestañas y faciales en Buñol, Valencia. Reserva tu cita online con Paola.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} — Beauty Studio en Buñol, Valencia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} · Beauty Studio en Buñol, Valencia`,
    description: "Manicura, pedicura, cejas & pestañas, faciales. Reserva online en Buñol.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: BUSINESS.name,
  description:
    "Beauty studio en Buñol, Valencia. Manicura, pedicura, cejas, pestañas y tratamientos faciales.",
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.4208,
    longitude: -0.7894,
  },
  sameAs: [BUSINESS.instagram],
  image: `${SITE_URL}${OG_IMAGE}`,
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-neutral font-jost text-brand-text antialiased">
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
