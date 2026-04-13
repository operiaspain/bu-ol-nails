"use client";

import { useEffect } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral px-4 text-center">
      <Sparkles
        className="h-12 w-12 text-[#C9A0DC] mb-6"
        aria-hidden="true"
      />
      <h1 className="font-playfair text-3xl font-bold text-brand-text mb-3">
        Algo ha salido mal
      </h1>
      <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
        Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
      </p>
      <Button onClick={reset} className="rounded-full">
        Intentar de nuevo
      </Button>
    </div>
  );
}
