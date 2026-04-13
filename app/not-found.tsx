import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página no encontrada · Buñolnails",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral px-4 text-center">
      <Sparkles
        className="h-12 w-12 text-[#C9A0DC] mb-6"
        aria-hidden="true"
      />
      <h1 className="font-playfair text-7xl font-bold text-[#9B72B0] mb-4">
        404
      </h1>
      <h2 className="font-playfair text-2xl font-semibold text-brand-text mb-3">
        Página no encontrada
      </h2>
      <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
        Lo sentimos, esta página no existe o ha sido movida. Vuelve al inicio
        para seguir navegando.
      </p>
      <Button asChild className="rounded-full">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
