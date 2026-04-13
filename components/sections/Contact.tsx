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

  useEffect(() => {
    const token = generateCsrfToken();
    setCsrfToken(token);
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
      className="section-padding bg-[#FDFAF6]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Contacto
          </motion.span>
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1410]"
          >
            Escríbenos
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="gold-line mt-4"
            aria-hidden="true"
          >
            <span className="gold-line-bar" />
            <span className="gold-line-dot" />
            <span className="gold-line-bar" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-sm text-[#1A1410]/55 max-w-xl mx-auto font-light leading-relaxed"
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
              <div className="flex flex-col items-center justify-center gap-4 p-12 bg-white border border-[#7DBB8E]/30 text-center">
                <CheckCircle className="h-14 w-14 text-[#7DBB8E]" aria-hidden="true" />
                <h3 className="font-cormorant text-2xl font-light text-[#1A1410]">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-sm text-[#1A1410]/55 font-light">
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
                className="space-y-6 bg-white p-8 border border-[rgba(201,169,122,0.2)] shadow-sm"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                  className="absolute left-[-9999px] opacity-0 h-0 w-0 overflow-hidden"
                  {...register("website")}
                />
                <input
                  type="hidden"
                  value={csrfToken}
                  {...register("csrfToken")}
                />

                {/* Nombre */}
                <div className="space-y-2">
                  <Label htmlFor="contact-nombre">
                    Nombre <span aria-label="campo obligatorio" className="text-[#C9A97A]">*</span>
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
                    Email <span aria-label="campo obligatorio" className="text-[#C9A97A]">*</span>
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
                    Mensaje <span aria-label="campo obligatorio" className="text-[#C9A97A]">*</span>
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
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-600 text-sm"
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

                <p className="text-xs text-[#1A1410]/35 text-center font-light">
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
            className="lg:col-span-2 space-y-6"
            aria-label="Información del estudio"
          >
            {/* Contact details */}
            <div className="bg-white p-6 border border-[rgba(201,169,122,0.15)] shadow-sm space-y-4">
              <h3 className="font-cormorant text-lg font-light text-[#1A1410]">
                Información
              </h3>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-[#1A1410]/60 hover:text-[#C9A97A] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded"
                aria-label={`Dirección: ${BUSINESS.address.full}. Abrir en Google Maps`}
              >
                <MapPin className="h-4 w-4 mt-0.5 text-[#C9A97A] shrink-0" aria-hidden="true" />
                <span>{BUSINESS.address.full}</span>
              </a>

              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-[#1A1410]/60 hover:text-[#C9A97A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded"
              >
                <Phone className="h-4 w-4 text-[#C9A97A] shrink-0" aria-hidden="true" />
                <span>{BUSINESS.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-sm text-[#1A1410]/60 hover:text-[#C9A97A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] rounded"
              >
                <Mail className="h-4 w-4 text-[#C9A97A] shrink-0" aria-hidden="true" />
                <span>{BUSINESS.email}</span>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 border border-[rgba(201,169,122,0.15)] shadow-sm">
              <h3 className="font-cormorant text-lg font-light text-[#1A1410] flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-[#C9A97A]" aria-hidden="true" />
                Horario
              </h3>
              <table className="w-full text-sm" aria-label="Horario de apertura">
                <tbody>
                  {HOURS.map((day) => (
                    <tr key={day.jsDay} className="border-b border-[rgba(201,169,122,0.08)] last:border-0">
                      <td className="py-2 text-[#1A1410]/55 font-light">{day.day}</td>
                      <td className="py-2 text-right">
                        {day.isClosed ? (
                          <span className="text-[#1A1410]/30 text-xs font-light">Cerrado</span>
                        ) : (
                          <span className="text-[#C9A97A] text-xs font-light">
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
            <div className="overflow-hidden border border-[rgba(201,169,122,0.15)] shadow-sm aspect-video">
              <iframe
                title={`Mapa de ubicación de ${BUSINESS.name} en Buñol, Valencia`}
                src={BUSINESS.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Mapa interactivo de la ubicación del estudio"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
