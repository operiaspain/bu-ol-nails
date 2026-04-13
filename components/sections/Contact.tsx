"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BUSINESS, HOURS } from "@/lib/constants";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { generateCsrfToken } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [csrfToken, setCsrfToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Generate CSRF token on mount
  useEffect(() => {
    const token = generateCsrfToken();
    setCsrfToken(token);
    // Set CSRF cookie via API
    document.cookie = `csrf-token=${token}; SameSite=Strict; Secure; Path=/`;
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      csrfToken: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const payload = { ...data, csrfToken };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = (await response.json()) as { message?: string };
        setErrorMessage(
          errorData.message || "Ha ocurrido un error. Inténtalo de nuevo."
        );
        setFormStatus("error");
        return;
      }

      setFormStatus("success");
      reset();
    } catch {
      setErrorMessage(
        "No se pudo enviar el mensaje. Comprueba tu conexión e inténtalo de nuevo."
      );
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="section-padding bg-[#FAF7F5]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[#9B72B0] uppercase tracking-widest mb-3"
          >
            Contáctanos
          </motion.span>
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D]"
          >
            Escríbenos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-xl mx-auto"
          >
            ¿Tienes alguna pregunta o quieres conocer más sobre nuestros servicios?
            Estaremos encantadas de ayudarte.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 p-12 rounded-2xl bg-white border border-[#7DBB8E]/30 text-center">
                <CheckCircle className="h-16 w-16 text-[#7DBB8E]" aria-hidden="true" />
                <h3 className="font-playfair text-2xl font-bold text-[#2D2D2D]">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-500">
                  Gracias por contactarnos. Te responderemos en el menor tiempo posible.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setFormStatus("idle")}
                  className="mt-4"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                aria-label="Formulario de contacto"
                noValidate
                className="space-y-6 bg-white rounded-2xl p-8 border border-[#C9A0DC]/20 shadow-sm"
              >
                {/* Honeypot field — hidden from real users */}
                <input
                  type="text"
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                  className="absolute left-[-9999px] opacity-0 h-0 w-0 overflow-hidden"
                  {...register("website")}
                />

                {/* Hidden CSRF */}
                <input
                  type="hidden"
                  value={csrfToken}
                  {...register("csrfToken")}
                />

                {/* Nombre */}
                <div className="space-y-2">
                  <Label htmlFor="contact-nombre">
                    Nombre <span aria-label="campo obligatorio" className="text-[#C9A0DC]">*</span>
                  </Label>
                  <Input
                    id="contact-nombre"
                    type="text"
                    placeholder="Tu nombre completo"
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.nombre ? "error-nombre" : undefined}
                    aria-invalid={!!errors.nombre}
                    {...register("nombre")}
                  />
                  {errors.nombre && (
                    <p id="error-nombre" role="alert" className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="contact-email">
                    Email <span aria-label="campo obligatorio" className="text-[#C9A0DC]">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? "error-email" : undefined}
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p id="error-email" role="alert" className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <Label htmlFor="contact-telefono">Teléfono</Label>
                  <Input
                    id="contact-telefono"
                    type="tel"
                    placeholder="+34 600 000 000"
                    autoComplete="tel"
                    aria-describedby={errors.telefono ? "error-telefono" : undefined}
                    aria-invalid={!!errors.telefono}
                    {...register("telefono")}
                  />
                  {errors.telefono && (
                    <p id="error-telefono" role="alert" className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.telefono.message}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <Label htmlFor="contact-mensaje">
                    Mensaje <span aria-label="campo obligatorio" className="text-[#C9A0DC]">*</span>
                  </Label>
                  <Textarea
                    id="contact-mensaje"
                    placeholder="¿En qué podemos ayudarte?"
                    aria-required="true"
                    aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
                    aria-invalid={!!errors.mensaje}
                    {...register("mensaje")}
                  />
                  {errors.mensaje && (
                    <p id="error-mensaje" role="alert" className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                {/* Error banner */}
                {formStatus === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm"
                  >
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={formStatus === "submitting"}
                  className="w-full"
                  aria-label="Enviar mensaje de contacto"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Enviar mensaje
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  Al enviar este formulario aceptas nuestra política de privacidad.
                  Nunca compartiremos tus datos con terceros.
                </p>
              </form>
            )}
          </motion.div>

          {/* Business info sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
            aria-label="Información del salón"
          >
            {/* Contact details */}
            <div className="bg-white rounded-2xl p-6 border border-[#C9A0DC]/20 shadow-sm space-y-4">
              <h3 className="font-playfair text-lg font-semibold text-[#2D2D2D]">
                Información
              </h3>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-gray-600 hover:text-[#9B72B0] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
                aria-label={`Dirección: ${BUSINESS.address.full}. Abrir en Google Maps`}
              >
                <MapPin className="h-4 w-4 mt-0.5 text-[#C9A0DC] shrink-0" aria-hidden="true" />
                <span>{BUSINESS.address.full}</span>
              </a>

              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#9B72B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
              >
                <Phone className="h-4 w-4 text-[#C9A0DC] shrink-0" aria-hidden="true" />
                <span>{BUSINESS.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#9B72B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A0DC] rounded"
              >
                <Mail className="h-4 w-4 text-[#C9A0DC] shrink-0" aria-hidden="true" />
                <span>{BUSINESS.email}</span>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border border-[#C9A0DC]/20 shadow-sm">
              <h3 className="font-playfair text-lg font-semibold text-[#2D2D2D] flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-[#C9A0DC]" aria-hidden="true" />
                Horario
              </h3>
              <table className="w-full text-sm" aria-label="Horario de apertura">
                <tbody>
                  {HOURS.map((day) => (
                    <tr key={day.jsDay} className="border-b border-gray-50 last:border-0">
                      <td className="py-2 text-gray-600">{day.day}</td>
                      <td className="py-2 text-right font-medium">
                        {day.isClosed ? (
                          <span className="text-gray-400 text-xs">Cerrado</span>
                        ) : (
                          <span className="text-[#9B72B0]">
                            {day.open} – {day.close}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-[#C9A0DC]/20 shadow-sm aspect-video">
              <iframe
                title="Mapa de ubicación de Buñolnails en C. la Hoya, Buñol, Valencia"
                src={BUSINESS.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Mapa interactivo de la ubicación del salón"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
