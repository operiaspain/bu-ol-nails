import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { serverContactSchema } from "@/lib/validations";
import { checkRateLimit, sanitizeInput } from "@/lib/utils";

// Generic error to never leak server internals
const GENERIC_ERROR = "Ha ocurrido un error al procesar tu solicitud. Inténtalo más tarde.";
const RATE_LIMIT_ERROR = "Has enviado demasiados mensajes. Por favor, espera unos minutos.";

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  if (forwarded) return forwarded.split(",")[0].trim();
  if (realIp) return realIp;
  return "unknown";
}

export async function POST(request: NextRequest) {
  try {
    // ── 1. Rate limiting ────────────────────────────────────────────
    const clientIp = getClientIp(request);
    const rateCheck = checkRateLimit(clientIp);

    if (!rateCheck.allowed) {
      return NextResponse.json(
        { message: RATE_LIMIT_ERROR },
        {
          status: 429,
          headers: {
            "Retry-After": "900",
            "X-RateLimit-Limit": "3",
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    // ── 2. CSRF validation (double-submit cookie pattern) ───────────
    const csrfHeader = request.headers.get("X-CSRF-Token");
    const csrfCookie = request.cookies.get("csrf-token")?.value;

    if (!csrfHeader || !csrfCookie || csrfHeader !== csrfCookie) {
      return NextResponse.json({ message: GENERIC_ERROR }, { status: 403 });
    }

    // ── 3. Parse and validate body ──────────────────────────────────
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { message: "Formato de solicitud inválido." },
        { status: 400 }
      );
    }

    const parseResult = serverContactSchema.safeParse(body);

    if (!parseResult.success) {
      const firstError = parseResult.error.errors[0];
      return NextResponse.json(
        { message: firstError?.message ?? GENERIC_ERROR },
        { status: 422 }
      );
    }

    const { nombre, email, telefono, mensaje, website } = parseResult.data;

    // ── 4. Honeypot check ───────────────────────────────────────────
    if (website && website.length > 0) {
      // Silently accept but discard bot submissions
      return NextResponse.json({ message: "Mensaje enviado correctamente." });
    }

    // ── 5. Sanitize inputs ──────────────────────────────────────────
    const sanitized = {
      nombre: sanitizeInput(nombre),
      email: sanitizeInput(email),
      telefono: telefono ? sanitizeInput(telefono) : null,
      mensaje: sanitizeInput(mensaje),
    };

    // ── 6. Send email via Resend ────────────────────────────────────
    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!process.env.RESEND_API_KEY || !contactEmail) {
      // Fail loudly in development so the missing config is obvious
      console.error("[Contact API] Missing RESEND_API_KEY or CONTACT_EMAIL env vars.");
      return NextResponse.json({ message: GENERIC_ERROR }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      // Use Resend's shared domain until a custom domain is verified.
      // Replace with: 'Buñolnails <noreply@bunolnails.com>' after domain verification.
      from: "Buñolnails Web <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: sanitized.email,
      subject: `Nuevo mensaje de ${sanitized.nombre} — bunolnails.com`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2D2D2D;">
          <div style="background: linear-gradient(135deg, #C9A0DC, #F4C2C2); padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; color: white; font-size: 20px;">Nuevo mensaje de contacto</h1>
            <p style="margin: 4px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">bunolnails.com</p>
          </div>
          <div style="background: #FAF7F5; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e8e0f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 110px; vertical-align: top; color: #9B72B0;">Nombre</td>
                <td style="padding: 8px 0;">${sanitized.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; vertical-align: top; color: #9B72B0;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${sanitized.email}" style="color: #C9A0DC;">${sanitized.email}</a></td>
              </tr>
              ${
                sanitized.telefono
                  ? `<tr>
                      <td style="padding: 8px 0; font-weight: 600; vertical-align: top; color: #9B72B0;">Teléfono</td>
                      <td style="padding: 8px 0;"><a href="tel:${sanitized.telefono}" style="color: #C9A0DC;">${sanitized.telefono}</a></td>
                    </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; font-weight: 600; vertical-align: top; color: #9B72B0;">Mensaje</td>
                <td style="padding: 8px 0; white-space: pre-wrap;">${sanitized.mensaje}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e8e0f0; margin: 24px 0;">
            <p style="margin: 0; font-size: 12px; color: #999;">
              Enviado el ${new Date().toLocaleString("es-ES", { dateStyle: "long", timeStyle: "short" })}
              · Responde directamente a este email para contactar con ${sanitized.nombre}.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact API] Resend error:", error.message);
      return NextResponse.json({ message: GENERIC_ERROR }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json({ message: GENERIC_ERROR }, { status: 500 });
  }
}

// Disallow GET on this endpoint
export async function GET() {
  return NextResponse.json({ message: "Método no permitido." }, { status: 405 });
}
