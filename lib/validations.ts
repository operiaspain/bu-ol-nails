import { z } from "zod";

// ─── Contact Form Schema ─────────────────────────────────────────────
export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(100, "El nombre es demasiado largo.")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "El nombre solo puede contener letras."),

  email: z
    .string()
    .email("Por favor, introduce un email válido.")
    .max(254, "El email es demasiado largo."),

  telefono: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+\d\s\-().]{7,20}$/.test(val),
      "Por favor, introduce un teléfono válido."
    ),

  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(1000, "El mensaje no puede superar los 1000 caracteres."),

  // Honeypot field — must be empty (bots fill it, humans don't)
  website: z
    .string()
    .max(0, "Spam detected.")
    .optional(),

  // CSRF token
  csrfToken: z.string().min(1, "Token de seguridad inválido."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ─── Server-side contact schema (same but explicit) ──────────────────
export const serverContactSchema = contactFormSchema;
export type ServerContactData = z.infer<typeof serverContactSchema>;
