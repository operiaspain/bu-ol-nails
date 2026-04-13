import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../styles/globals.css";
import { BUSINESS, SITE_URL, OG_IMAGE } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} · Salón de Uñas en Buñol, Valencia`,
    template: `%s · ${BUSINESS.name}`,
  },
  description:
    "Salón de uñas profesional en Buñol, Valencia. Manicura, pedicura, uñas de gel y acrílicas. Reserva online en segundos. Higiene garantizada y productos premium.",
  keywords: [
    "salón de uñas buñol",
    "manicura buñol",
    "pedicura valencia",
    "uñas gel buñol",
    "uñas acrílicas valencia",
    "nail salon buñol",
    "bunolnails",
  ],
  authors: [{ name: "Buñolnails" }],
  creator: "Buñolnails",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} · Salón de Uñas en Buñol, Valencia`,
    description:
      "Salón de uñas profesional en Buñol, Valencia. Manicura, pedicura, uñas de gel y acrílicas. Reserva tu cita online.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} - Salón de uñas en Buñol, Valencia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} · Salón de Uñas en Buñol, Valencia`,
    description:
      "Salón de uñas profesional en Buñol, Valencia. Reserva online.",
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
  "@type": "NailSalon",
  name: BUSINESS.name,
  description:
    "Salón de uñas profesional en Buñol, Valencia. Manicura, pedicura, uñas de gel y acrílicas.",
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    postalCode: BUSINESS.address.postalCode,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.4208,
    longitude: -0.7894,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday"],
      opens: "08:30",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "21:00",
    },
  ],
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
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-neutral font-inter text-brand-text antialiased">
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
