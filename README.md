# Buñolnails — Sitio Web Oficial

Sitio web profesional para **Buñolnails**, salón de uñas en Buñol, Valencia, España.

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: Tailwind CSS + CSS custom properties
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Iconos**: Lucide React
- **Reservas**: Fresha (enlace externo)
- **Despliegue**: Vercel (recomendado)

---

## Estructura del Proyecto

```
/app
  layout.tsx              ← Layout raíz (metadata, fuentes, JSON-LD)
  page.tsx                ← Página de inicio
  /api/contact/route.ts   ← API route segura para formulario de contacto
  /servicios/page.tsx     ← Página de servicios
  /contacto/page.tsx      ← Página de contacto con mapa
  /galeria/page.tsx       ← Galería de diseños
  sitemap.ts              ← Sitemap automático
  robots.ts               ← robots.txt

/components
  /ui/                    ← Primitivos UI (Button, Card, Badge, Input, etc.)
  /layout/
    Navbar.tsx            ← Navbar sticky con hamburger móvil
    Footer.tsx            ← Footer completo con horarios
  /sections/
    Hero.tsx              ← Sección hero fullscreen
    OpenStatus.tsx        ← Badge en tiempo real abierto/cerrado
    Services.tsx          ← Cards de servicios
    WhyUs.tsx             ← Columnas de ventajas
    Gallery.tsx           ← Grid masonry de galería
    Testimonials.tsx      ← Carrusel de testimonios
    BookingCTA.tsx        ← Banner de llamada a la acción
    Contact.tsx           ← Formulario + mapa + horarios

/lib
  constants.ts            ← Datos del negocio (servicios, horarios, contacto)
  utils.ts                ← cn(), isOpenNow(), sanitizeInput(), checkRateLimit()
  validations.ts          ← Esquemas Zod para el formulario

/styles
  globals.css             ← Tailwind base + variables CSS de marca
```

---

## Puesta en Marcha

### Prerrequisitos

- Node.js 18.17+
- npm 9+

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores reales

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Comandos disponibles

```bash
npm run dev        # Servidor de desarrollo (http://localhost:3000)
npm run build      # Build de producción
npm run start      # Servidor de producción (requiere build previo)
npm run lint       # Linter ESLint
npm run type-check # Verificación de tipos TypeScript
npm audit          # Auditoría de seguridad de dependencias
```

---

## Despliegue en Vercel (Recomendado)

### Pasos

1. **Sube el proyecto a GitHub** (repositorio privado recomendado)

2. **Conecta con Vercel**:
   - Ve a [vercel.com](https://vercel.com) → New Project
   - Importa el repositorio de GitHub
   - Framework: **Next.js** (detectado automáticamente)

3. **Configura las variables de entorno** en Vercel:
   - `NEXT_PUBLIC_SITE_URL` → tu dominio (ej: `https://bunolnails.com`)
   - `CONTACT_EMAIL` → email donde recibir los mensajes
   - `RESEND_API_KEY` → clave de API de Resend (para envío de emails)

4. **Dominio personalizado**:
   - En Vercel: Settings → Domains → Add `bunolnails.com`
   - Configura los DNS según las instrucciones de Vercel

5. **Despliegue automático**: cada push a `main` despliega automáticamente.

### Variables de entorno de producción

```
NEXT_PUBLIC_SITE_URL=https://bunolnails.com
CONTACT_EMAIL=info@bunolnails.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

---

## Configurar envío de emails (Formulario de Contacto)

El formulario de contacto actualmente registra los mensajes en el servidor.
Para enviar emails reales, elige una de estas opciones:

### Opción 1: Resend (recomendado)

```bash
npm install resend
```

Descomenta el bloque de Resend en `/app/api/contact/route.ts`.

### Opción 2: Nodemailer + SMTP

```bash
npm install nodemailer @types/nodemailer
```

Configura `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` en `.env.local`.

---

## Seguridad

El sitio implementa las siguientes medidas de seguridad:

| Medida | Descripción |
|--------|-------------|
| **Security Headers** | CSP, X-Frame-Options, HSTS, nosniff, Referrer-Policy |
| **Rate Limiting** | 3 envíos por IP cada 15 minutos (en-memory; usa Upstash Redis en producción multi-instancia) |
| **Honeypot** | Campo oculto para detectar bots |
| **CSRF** | Patrón double-submit cookie |
| **Sanitización** | Strip de HTML en todos los campos antes de procesarlos |
| **Validación server-side** | Zod schema en el Route Handler, nunca solo client-side |
| **No API keys client-side** | Todo pasa por `/api/contact`, nunca a servicios externos directamente |

### Mantenimiento de seguridad

```bash
# Auditar vulnerabilidades regularmente
npm audit

# Actualizar dependencias con parches de seguridad
npm audit fix

# Ver dependencias desactualizadas
npm outdated
```

**Recomendación**: activa [Dependabot](https://docs.github.com/en/code-security/dependabot) en el repositorio de GitHub para recibir alertas automáticas de seguridad.

---

## Personalización

### Actualizar información del negocio

Todos los datos del negocio están centralizados en `/lib/constants.ts`:

- Nombre, dirección, teléfono, email
- Horarios de apertura
- Servicios y precios
- URL de reservas de Fresha
- Imágenes de galería

### Cambiar la paleta de colores

Edita las variables CSS en `/styles/globals.css`:

```css
:root {
  --primary: #C9A0DC;      /* Lavanda suave */
  --primary-dark: #9B72B0; /* Púrpura oscuro */
  --accent: #F4C2C2;       /* Rosa blush */
  --neutral: #FAF7F5;      /* Blanco cálido */
  --text: #2D2D2D;         /* Casi negro */
  --success: #7DBB8E;      /* Verde suave */
}
```

### Añadir fotos reales

Sustituye los placeholders de gradiente en `/lib/constants.ts` (array `GALLERY_IMAGES`) con URLs de imágenes reales. Se recomienda usar Cloudinary o Vercel Blob para alojar las imágenes.

---

## Accesibilidad (WCAG 2.1 AA)

- Skip-to-content link al inicio del `<body>`
- Todos los elementos interactivos son navegables con teclado
- Contraste de color ≥ 4.5:1 en texto principal
- `aria-label` en todos los botones con solo iconos
- `aria-live` en el badge de estado abierto/cerrado y mensajes de formulario
- HTML5 semántico: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`
- Imágenes con `alt` descriptivo

---

## Rendimiento

- Fuentes con `next/font` (sin layout shift)
- `next/image` con lazy loading y formatos modernos (avif/webp)
- `scroll-behavior: smooth` vía CSS
- Animaciones con Framer Motion (respeta `prefers-reduced-motion` automáticamente)
- Code splitting automático por ruta (Next.js App Router)

---

## Licencia

Uso privado — Buñolnails © 2024. Todos los derechos reservados.
