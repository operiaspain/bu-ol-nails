// ─── Business Information ────────────────────────────────────────────
//
// ⚠️  PENDIENTE DEL CLIENTE — rellenar antes del lanzamiento:
//
//   phone            → número de teléfono real (ej: "+34 960 000 000")
//   instagram        → URL completa del perfil (ej: "https://instagram.com/bunolnails")
//   googleMapsEmbedUrl → ir a maps.google.com, buscar el local, Compartir → Insertar mapa,
//                        copiar el atributo `src` del <iframe>
//
export const BUSINESS = {
  name: "Buñolnails",
  tagline: "Tu belleza, nuestro arte",
  subtagline: "Salón de uñas en Buñol, Valencia",
  address: {
    street: "C. la Hoya",
    postalCode: "46360",
    city: "Buñol",
    region: "Valencia",
    country: "España",
    full: "C. la Hoya, 46360 Buñol, Valencia, España",
  },
  // TODO: reemplazar con el teléfono real del negocio
  phone: "+34 XXX XXX XXX",
  email: "info@bunolnails.com",
  // TODO: reemplazar con la URL real del perfil de Instagram
  instagram: "#",
  bookingUrl:
    "https://booksy.com/es-es/3727_bunolnails_salon-de-unas_57351_bunol#ba_s=seo",
  // TODO: reemplazar con el embed real de Google Maps del local
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.0!2d-0.7894!3d39.4208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+la+Hoya%2C+46360+Bu%C3%B1ol%2C+Valencia!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses",
  priceRange: "€€",
} as const;

// ─── Opening Hours ───────────────────────────────────────────────────
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
  { day: "Lunes", dayEn: "Monday", dayShort: "Lun", open: "08:30", close: "21:00", isClosed: false, jsDay: 1 },
  { day: "Martes", dayEn: "Tuesday", dayShort: "Mar", open: null, close: null, isClosed: true, jsDay: 2 },
  { day: "Miércoles", dayEn: "Wednesday", dayShort: "Mié", open: "08:30", close: "21:00", isClosed: false, jsDay: 3 },
  { day: "Jueves", dayEn: "Thursday", dayShort: "Jue", open: "08:30", close: "21:00", isClosed: false, jsDay: 4 },
  { day: "Viernes", dayEn: "Friday", dayShort: "Vie", open: "08:30", close: "21:00", isClosed: false, jsDay: 5 },
  { day: "Sábado", dayEn: "Saturday", dayShort: "Sáb", open: null, close: null, isClosed: true, jsDay: 6 },
  { day: "Domingo", dayEn: "Sunday", dayShort: "Dom", open: null, close: null, isClosed: true, jsDay: 0 },
];

// ─── Services ────────────────────────────────────────────────────────
export interface Service {
  id: string;
  icon: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  duration: string;
  priceRange: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "manicura",
    icon: "💅",
    name: "Manicura",
    nameEn: "Manicure",
    description:
      "Cuida y embellece tus manos con nuestra manicura profesional. Incluye limado, cutículas, hidratación y esmalte de tu elección.",
    descriptionEn:
      "Care and beautify your hands with our professional manicure. Includes filing, cuticle care, moisturizing, and polish of your choice.",
    duration: "45 min",
    priceRange: "Desde 15€",
    features: ["Limado y forma", "Tratamiento de cutículas", "Hidratación", "Esmalte incluido"],
  },
  {
    id: "pedicura",
    icon: "🦶",
    name: "Pedicura",
    nameEn: "Pedicure",
    description:
      "Mima tus pies con un tratamiento completo de pedicura. Exfoliación, hidratación profunda y acabado impecable para pies suaves y bellos.",
    descriptionEn:
      "Pamper your feet with a complete pedicure treatment. Exfoliation, deep moisturizing, and impeccable finish for soft, beautiful feet.",
    duration: "60 min",
    priceRange: "Desde 20€",
    features: ["Baño relajante", "Exfoliación", "Hidratación profunda", "Esmalte incluido"],
  },
  {
    id: "unas-gel",
    icon: "✨",
    name: "Uñas de Gel",
    nameEn: "Gel Nails",
    description:
      "Luce uñas perfectas durante semanas con nuestro servicio de gel. Mayor durabilidad, brillo intenso y acabado profesional que cuida tu uña natural.",
    descriptionEn:
      "Enjoy perfect nails for weeks with our gel service. Greater durability, intense shine and professional finish that cares for your natural nail.",
    duration: "75 min",
    priceRange: "Desde 30€",
    features: ["Gel de larga duración", "Alta resistencia", "Brillo intenso", "Diseños personalizados"],
  },
  {
    id: "unas-acrilicas",
    icon: "💎",
    name: "Uñas Acrílicas",
    nameEn: "Acrylic Nails",
    description:
      "Transforma tus uñas con extensiones acrílicas de alta calidad. Perfectas para quienes buscan mayor longitud y resistencia con un acabado espectacular.",
    descriptionEn:
      "Transform your nails with high-quality acrylic extensions. Perfect for those seeking greater length and strength with a spectacular finish.",
    duration: "90 min",
    priceRange: "Desde 40€",
    features: ["Extensiones personalizadas", "Alta resistencia", "Forma a medida", "Diseños artísticos"],
  },
  {
    id: "manicura-pedicura",
    icon: "🌸",
    name: "Manicura + Pedicura",
    nameEn: "Manicure + Pedicure",
    description:
      "El tratamiento completo para manos y pies. Aprovecha nuestro pack combinado con precio especial y sal del salón con un look impecable de arriba a abajo.",
    descriptionEn:
      "The complete treatment for hands and feet. Take advantage of our combined pack with a special price and leave the salon looking impeccable from head to toe.",
    duration: "90 min",
    priceRange: "Desde 32€",
    features: ["Manicura completa", "Pedicura completa", "Precio especial pack", "Hidratación total"],
  },
];

// ─── Why Choose Us ───────────────────────────────────────────────────
export interface WhyUsItem {
  icon: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export const WHY_US: WhyUsItem[] = [
  {
    icon: "🧼",
    title: "Higiene garantizada",
    titleEn: "Guaranteed hygiene",
    description: "Todos nuestros materiales son esterilizados entre cada cliente. Tu salud es nuestra prioridad.",
    descriptionEn: "All our materials are sterilized between each client. Your health is our priority.",
  },
  {
    icon: "🌟",
    title: "Productos premium",
    titleEn: "Premium products",
    description: "Trabajamos exclusivamente con marcas reconocidas de la industria para garantizar el mejor resultado.",
    descriptionEn: "We work exclusively with recognized industry brands to guarantee the best result.",
  },
  {
    icon: "🏅",
    title: "10+ años de experiencia",
    titleEn: "10+ years of experience",
    description: "Nuestro equipo acumula más de una década de experiencia transformando manos y pies.",
    descriptionEn: "Our team has more than a decade of experience transforming hands and feet.",
  },
  {
    icon: "📱",
    title: "Reserva fácil online",
    titleEn: "Easy online booking",
    description: "Reserva tu cita en segundos desde tu móvil, sin llamadas, sin esperas, sin complicaciones.",
    descriptionEn: "Book your appointment in seconds from your phone, no calls, no waiting, no hassle.",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

// TODO: reemplazar con reseñas reales del negocio (Google, Booksy o capturas de clientes).
//       Si no hay reseñas disponibles aún, eliminar la sección <Testimonials /> del homepage
//       en app/page.tsx para no mostrar datos ficticios.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "María García",
    location: "Buñol, Valencia",
    rating: 5,
    text: "¡Increíble experiencia! Llevaba años buscando un salón de confianza cerca de casa y Buñolnails ha superado todas mis expectativas. Las uñas de gel duran perfectamente y el trato es exquisito. ¡Ya soy clienta fija!",
    date: "Marzo 2024",
  },
  {
    name: "Laura Martínez",
    location: "Chiva, Valencia",
    rating: 5,
    text: "Me hice la pedicura de spa y fue una experiencia de relax total. El local es precioso, muy limpio y ordenado. La atención personalizada que te dan te hace sentir como una reina. Totalmente recomendado.",
    date: "Febrero 2024",
  },
  {
    name: "Ana Sánchez",
    location: "Buñol, Valencia",
    rating: 5,
    text: "Las uñas acrílicas que me hicieron son absolutamente perfectas. La forma, el diseño... todo al detalle. Recibí muchos cumplidos en mi boda. Mil gracias al equipo de Buñolnails, ¡son maravillosas!",
    date: "Enero 2024",
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
    alt: "Uñas con degradado lavanda y detalles decorativos",
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
  labelEn: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", labelEn: "Home", href: "/" },
  { label: "Servicios", labelEn: "Services", href: "/servicios" },
  { label: "Galería", labelEn: "Gallery", href: "/galeria" },
  { label: "Contacto", labelEn: "Contact", href: "/contacto" },
];

// ─── Site Metadata ───────────────────────────────────────────────────
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bunolnails.com";
export const OG_IMAGE = "/og-image.svg";
