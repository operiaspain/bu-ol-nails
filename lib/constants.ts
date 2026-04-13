// ─── Business Information ────────────────────────────────────────────
//
// ⚠️  PENDIENTE DEL CLIENTE — rellenar antes del lanzamiento:
//
//   phone            → número de teléfono real (ej: "+34 960 000 000")
//   address.street   → dirección real del estudio
//   email            → email de contacto real
//   googleMapsEmbedUrl → ir a maps.google.com, buscar el local, Compartir → Insertar mapa,
//                        copiar el atributo `src` del <iframe>
//
export const BUSINESS = {
  name: "Essentia Nails",
  person: "Paola",
  tagline: "Tu mejor versión comienza aquí",
  subtagline: "Beauty Studio · Buñol, Valencia",
  address: {
    // TODO: reemplazar con la dirección real del estudio
    street: "",
    postalCode: "46360",
    city: "Buñol",
    region: "Valencia",
    country: "España",
    full: "Buñol, 46360 Valencia, España",
  },
  // TODO: reemplazar con el teléfono real del negocio
  phone: "+34 XXX XXX XXX",
  // TODO: reemplazar con el email real de contacto
  email: "info@essentianails.com",
  instagram: "https://www.instagram.com/essentianailss",
  instagramHandle: "@essentianailss",
  bookingUrl: "https://essentianails.booksy.com/c/",
  // TODO: reemplazar con el embed real de Google Maps del estudio
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.0!2d-0.7894!3d39.4208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBu%C3%B1ol%2C+Valencia!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses",
  priceRange: "€€",
} as const;

// ─── Opening Hours ───────────────────────────────────────────────────
// TODO: confirmar horarios reales con Paola
export interface DaySchedule {
  day: string;
  dayEn: string;
  dayShort: string;
  open: string | null;
  close: string | null;
  isClosed: boolean;
  jsDay: number; // 0 = Sunday, 1 = Monday, …, 6 = Saturday
}

export const HOURS: DaySchedule[] = [
  { day: "Lunes",     dayEn: "Monday",    dayShort: "Lun", open: "09:00", close: "20:00", isClosed: false, jsDay: 1 },
  { day: "Martes",    dayEn: "Tuesday",   dayShort: "Mar", open: "09:00", close: "20:00", isClosed: false, jsDay: 2 },
  { day: "Miércoles", dayEn: "Wednesday", dayShort: "Mié", open: "09:00", close: "20:00", isClosed: false, jsDay: 3 },
  { day: "Jueves",    dayEn: "Thursday",  dayShort: "Jue", open: "09:00", close: "20:00", isClosed: false, jsDay: 4 },
  { day: "Viernes",   dayEn: "Friday",    dayShort: "Vie", open: "09:00", close: "20:00", isClosed: false, jsDay: 5 },
  { day: "Sábado",    dayEn: "Saturday",  dayShort: "Sáb", open: null,    close: null,    isClosed: true,  jsDay: 6 },
  { day: "Domingo",   dayEn: "Sunday",    dayShort: "Dom", open: null,    close: null,    isClosed: true,  jsDay: 0 },
];

// ─── Service Categories ───────────────────────────────────────────────
export const SERVICE_CATEGORIES = [
  { id: "nails",    label: "Nails",             icon: "💅" },
  { id: "pedicura", label: "Pedicura",           icon: "🌸" },
  { id: "cejas",    label: "Cejas & Pestañas",   icon: "✨" },
  { id: "facial",   label: "Faciales",           icon: "🌹" },
] as const;

export type ServiceCategoryId = typeof SERVICE_CATEGORIES[number]["id"];

// ─── Services ────────────────────────────────────────────────────────
export interface Service {
  id: string;
  category: ServiceCategoryId;
  icon: string;
  name: string;
  description: string;
  priceRange: string;
  duration?: string;
  features?: string[];
}

export const SERVICES: Service[] = [
  // ── NAILS ─────────────────────────────────────────────────────────
  {
    id: "primera-puesta",
    category: "nails",
    icon: "💅",
    name: "Primera puesta #2",
    description:
      "Construcción completa de uñas de gel o acrílico. Forma personalizada, diseño a elegir y acabado impecable desde cero.",
    priceRange: "30€",
    duration: "90 min",
    features: ["Gel o acrílico a elegir", "Forma personalizada", "Diseño incluido", "Acabado profesional"],
  },
  {
    id: "relleno",
    category: "nails",
    icon: "✨",
    name: "Relleno Acrílico/Gel #2",
    description:
      "Mantenimiento profesional de tu juego de uñas existente. Relleno perfecto para alargar la duración y renovar el diseño.",
    priceRange: "25€",
    duration: "60 min",
    features: ["Relleno de crecimiento", "Renovación del diseño", "Sellado profesional"],
  },
  {
    id: "semipermanente",
    category: "nails",
    icon: "💎",
    name: "Semipermanente",
    description:
      "Esmalte de larga duración con acabado brillante o mate. Hasta 3 semanas de color perfecto sin descascarillado.",
    priceRange: "18€",
    duration: "45 min",
    features: ["Hasta 3 semanas de duración", "Acabado brillante o mate", "Sin descascarillado"],
  },
  {
    id: "refuerzo-porcelana",
    category: "nails",
    icon: "🪄",
    name: "Refuerzo Porcelana",
    description:
      "Tratamiento protector con porcelana para fortalecer y sellar la uña natural. Resultado natural y resistente.",
    priceRange: "23€",
    duration: "50 min",
    features: ["Fortalecimiento natural", "Sellado con porcelana", "Aspecto natural"],
  },

  // ── PEDICURA ──────────────────────────────────────────────────────
  {
    id: "pedicura-normal",
    category: "pedicura",
    icon: "🌸",
    name: "Pedicura Normal",
    description:
      "Tratamiento completo para tus pies: limado, cutículas, exfoliación e hidratación con esmalte final a elegir.",
    priceRange: "24€",
    duration: "50 min",
    features: ["Limado y forma", "Cuidado de cutículas", "Exfoliación", "Esmalte incluido"],
  },
  {
    id: "pedicura-spa",
    category: "pedicura",
    icon: "🛁",
    name: "Pedicura Spa",
    description:
      "Experiencia de lujo para tus pies. Baño relajante, exfoliación intensiva, masaje e hidratación profunda premium.",
    priceRange: "27€",
    duration: "70 min",
    features: ["Baño relajante", "Exfoliación intensiva", "Masaje de pies", "Hidratación premium"],
  },
  {
    id: "pedicura-sin-esmalte",
    category: "pedicura",
    icon: "🌿",
    name: "Pedicura sin esmaltado",
    description:
      "Cuidado esencial de los pies: limado, cutículas y tratamiento hidratante sin color. Perfecto para el día a día.",
    priceRange: "15€",
    duration: "35 min",
    features: ["Limado y forma", "Tratamiento cutículas", "Hidratación"],
  },

  // ── CEJAS & PESTAÑAS ──────────────────────────────────────────────
  {
    id: "depilacion-cejas",
    category: "cejas",
    icon: "🌙",
    name: "Depilación Cejas",
    description:
      "Diseño y depilación precisa de cejas con hilo o cera. Forma perfecta adaptada a tu rostro y estilo.",
    priceRange: "6€",
    duration: "15 min",
    features: ["Hilo o cera a elegir", "Diseño personalizado", "Adaptado a tu rostro"],
  },
  {
    id: "laminado-depilacion",
    category: "cejas",
    icon: "✨",
    name: "Laminado + Depilación",
    description:
      "Laminado profesional más depilación para unos arcos perfectamente definidos con aspecto de pelo a pelo durante semanas.",
    priceRange: "28€",
    duration: "50 min",
    features: ["Laminado profesional", "Depilación incluida", "Efecto pelo a pelo", "Duración semanas"],
  },
  {
    id: "pack-henna",
    category: "cejas",
    icon: "🌟",
    name: "Pack diseño + depilación + Henna",
    description:
      "Tratamiento completo de cejas: diseño personalizado, depilación precisa y pigmentación con henna para color natural y duradero.",
    priceRange: "15€",
    duration: "40 min",
    features: ["Diseño personalizado", "Depilación precisa", "Henna natural", "Color duradero"],
  },
  {
    id: "lifting-pestanas",
    category: "cejas",
    icon: "👁",
    name: "Lifting pestañas + tinte y botox",
    description:
      "Lifting con tinte definitivo y tratamiento botox para un resultado curvado, oscuro y brillante que dura hasta 8 semanas.",
    priceRange: "35€",
    duration: "60 min",
    features: ["Lifting permanente", "Tinte definitivo", "Tratamiento botox", "Hasta 8 semanas"],
  },

  // ── FACIALES ──────────────────────────────────────────────────────
  {
    id: "higiene-facial",
    category: "facial",
    icon: "🌹",
    name: "Higiene Facial profunda",
    description:
      "Limpieza facial profesional completa: vapor, extracción, exfoliación y mascarilla. Piel renovada, luminosa y libre de impurezas.",
    priceRange: "35€",
    duration: "60 min",
    features: ["Vapor facial", "Extracción profesional", "Exfoliación", "Mascarilla final"],
  },
  {
    id: "limpieza-express",
    category: "facial",
    icon: "💫",
    name: "Limpieza Express",
    description:
      "Tratamiento facial rápido y efectivo para cuando el tiempo es limitado. Limpieza, tónico y sérum en una sola sesión revitalizante.",
    priceRange: "15€",
    duration: "30 min",
    features: ["Limpieza profunda", "Tónico y sérum", "Piel lista en 30 min"],
  },
  {
    id: "hydralips",
    category: "facial",
    icon: "💋",
    name: "Hydralips",
    description:
      "Tratamiento hidratante intensivo para labios. Exfoliación, mascarilla nutritiva y sérum para labios suaves, voluminosos y definidos.",
    priceRange: "40€",
    duration: "45 min",
    features: ["Exfoliación de labios", "Mascarilla nutritiva", "Sérum intensivo", "Efecto voluminizador"],
  },
];

// ─── About / Values ──────────────────────────────────────────────────
export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export const WHY_US: WhyUsItem[] = [
  {
    icon: "⭐",
    title: "Profesionalidad",
    description: "Formación continua y técnicas actualizadas para ofrecerte siempre el mejor resultado posible.",
  },
  {
    icon: "🤍",
    title: "Cuidado genuino",
    description: "Atención personalizada en cada cita, escuchando lo que realmente quieres y adaptándome a ti.",
  },
  {
    icon: "✅",
    title: "Confianza total",
    description: "Higiene impecable y productos premium para que te sientas segura y bien cuidada en todo momento.",
  },
  {
    icon: "📅",
    title: "Reserva fácil",
    description: "Cita online en Booksy en segundos, sin llamadas, sin esperas, desde tu móvil cuando quieras.",
  },
];

// ─── Testimonials (reseñas reales verificadas en Booksy) ─────────────
export interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sabiaurganda",
    location: "Buñol, Valencia",
    service: "Relleno Acrílico / Gel",
    rating: 5,
    text: "Es mi segunda vez y cada vez más contenta con el trabajo de Paola, es increíble su habilidad y rapidez para reproducir lo que le pidas. Sigo súper encantada y recomiendo 100%.",
    date: "2024",
  },
  {
    name: "Diana",
    location: "Valencia",
    service: "Laminado cejas + depilación + Henna",
    rating: 5,
    text: "Paola es muy profesional y trabaja con mucho cuidado para que todo quede perfecto. Es la segunda vez que me hago laminado de cejas y tinte con ella. Su trato es muy amable y además te consulta para estar segura de hacerlo a tu gusto. ¡Repetiré sin duda!",
    date: "2024",
  },
  {
    name: "Ana Pérez",
    location: "Buñol, Valencia",
    service: "Pack diseño cejas con henna + depilación",
    rating: 5,
    text: "He salido feliz del centro. Nunca me habían hecho las cejas tan bonitas: forma perfecta, naturales y justo lo que yo quería. Trato increíble y mucha atención al detalle. Ya tengo mi sitio de confianza.",
    date: "2024",
  },
];

// ─── Gallery Images ──────────────────────────────────────────────────
// Fotos temporales de Unsplash (nail art, licencia gratuita).
// Cuando tengas fotos reales del cliente:
//   1) Cópialas a /public/gallery/ (ej: /gallery/nail-01.jpg)
//   2) Reemplaza src por la ruta local (ej: "/gallery/nail-01.jpg")
//   3) Actualiza width, height y alt con los valores reales
//   4) Elimina "images.unsplash.com" de next.config.js remotePatterns
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/tXwBDZS2JxQ?auto=format&fit=crop&w=800&q=80",
    alt: "Nail art con acabado oscuro y detalle en anillo dorado",
    width: 800,
    height: 1067,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/gb6gtiTZKB8?auto=format&fit=crop&w=800&q=80",
    alt: "Servicio de manicura profesional en salón de uñas",
    width: 800,
    height: 533,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?auto=format&fit=crop&w=800&q=80",
    alt: "Manicura de gel con diseño artístico en tonos nude",
    width: 800,
    height: 1000,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80",
    alt: "Uñas de gel con acabado brillante y forma almendra",
    width: 800,
    height: 600,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1612887390768-fb02affea7a6?auto=format&fit=crop&w=800&q=80",
    alt: "Nail art con diseño floral y esmalte semipermanente",
    width: 800,
    height: 1067,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    alt: "Manicura francesa con puntas perfectas y acabado natural",
    width: 800,
    height: 533,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1736434518489-0eb84070017f?auto=format&fit=crop&w=800&q=80",
    alt: "Uñas con degradado y detalles decorativos artísticos",
    width: 800,
    height: 1067,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1696342003838-4a8f9f36588c?auto=format&fit=crop&w=800&q=80",
    alt: "Pedicura con esmalte en tono rosa y acabado glossy",
    width: 800,
    height: 1067,
  },
];

// ─── Navigation Links ────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Sobre mí",   href: "/#about" },
  { label: "Servicios",  href: "/#servicios" },
  { label: "Galería",    href: "/galeria" },
  { label: "Reseñas",    href: "/#testimonios" },
  { label: "Contacto",   href: "/contacto" },
];

// ─── Site Metadata ───────────────────────────────────────────────────
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://essentianails.com";
export const OG_IMAGE = "/og-image.svg";
