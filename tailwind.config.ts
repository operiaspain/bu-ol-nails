import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Essentia Nails palette ───────────────────────────────
        primary: {
          DEFAULT: "#C9A97A",   // gold
          dark:    "#8B7355",   // earth
          light:   "#E8DDD0",   // cream
          foreground: "#1A1410",
        },
        accent: {
          DEFAULT: "#F5EFE8",   // beige
          foreground: "#1A1410",
        },
        neutral: {
          DEFAULT: "#FDFAF6",   // bone (background)
          foreground: "#1A1410",
        },
        brand: {
          text:    "#1A1410",   // dark brown/black
          mid:     "#3D2E1E",   // mid brown
          earth:   "#8B7355",   // earth
          bg:      "#FDFAF6",   // bone
          dark:    "#1A1410",
          footer:  "#0D0A07",   // deep footer dark
          success: "#7DBB8E",
        },
        // shadcn-compatible tokens (kept for Radix UI components)
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        jost:      ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        shimmer:      "shimmer 2s infinite linear",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(160deg, #1A1410 0%, #3D2E1E 60%, #1A1410 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
