"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { isOpenNow, type OpenStatus as OpenStatusType } from "@/lib/utils";

export function OpenStatus() {
  const [status, setStatus] = useState<OpenStatusType | null>(null);

  useEffect(() => {
    const update = () => setStatus(isOpenNow());
    update();
    // Refresh every minute
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className="flex justify-center py-4" aria-busy="true" aria-live="polite">
        <div className="h-8 w-48 rounded-full bg-gray-100 shimmer" />
      </div>
    );
  }

  return (
    <section
      aria-label="Estado de apertura del salón"
      aria-live="polite"
      className="py-4 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium border ${
          status.isOpen
            ? "bg-[#7DBB8E]/10 border-[#7DBB8E]/30 text-[#3a7a50]"
            : "bg-gray-100 border-gray-200 text-gray-500"
        }`}
      >
        {/* Pulsing dot */}
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          {status.isOpen && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7DBB8E] opacity-75" />
          )}
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              status.isOpen ? "bg-[#7DBB8E]" : "bg-gray-400"
            }`}
          />
        </span>

        <Clock className="h-3.5 w-3.5" aria-hidden="true" />

        <span>{status.label}</span>

        {/* Today's hours if open */}
        {status.isOpen &&
          !status.currentDaySchedule.isClosed &&
          status.currentDaySchedule.open && (
            <span className="text-xs text-[#5a9a70] ml-1">
              · Hasta las {status.currentDaySchedule.close}h
            </span>
          )}
      </motion.div>
    </section>
  );
}

export default OpenStatus;
