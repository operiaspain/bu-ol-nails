import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { HOURS, type DaySchedule } from "./constants";

// ─── Tailwind class merger ───────────────────────────────────────────
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ─── Open/Closed Status ──────────────────────────────────────────────
export interface OpenStatus {
  isOpen: boolean;
  currentDaySchedule: DaySchedule;
  nextOpenDay: DaySchedule | null;
  label: string;
  labelEn: string;
}

export function isOpenNow(): OpenStatus {
  const now = new Date();
  const jsDay = now.getDay(); // 0 = Sunday
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeMinutes = currentHour * 60 + currentMinute;

  const todaySchedule = HOURS.find((h) => h.jsDay === jsDay);

  if (!todaySchedule) {
    return {
      isOpen: false,
      currentDaySchedule: HOURS[0],
      nextOpenDay: getNextOpenDay(jsDay),
      label: "Cerrado",
      labelEn: "Closed",
    };
  }

  let isOpen = false;

  if (!todaySchedule.isClosed && todaySchedule.open && todaySchedule.close) {
    const [openH, openM] = todaySchedule.open.split(":").map(Number);
    const [closeH, closeM] = todaySchedule.close.split(":").map(Number);
    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;
    isOpen = currentTimeMinutes >= openMinutes && currentTimeMinutes < closeMinutes;
  }

  const nextOpenDay = isOpen ? null : getNextOpenDay(jsDay);

  return {
    isOpen,
    currentDaySchedule: todaySchedule,
    nextOpenDay,
    label: isOpen
      ? "Abierto ahora"
      : nextOpenDay
      ? `Cerrado · Abre el ${nextOpenDay.day}`
      : "Cerrado hoy",
    labelEn: isOpen
      ? "Open now"
      : nextOpenDay
      ? `Closed · Opens ${nextOpenDay.dayEn}`
      : "Closed today",
  };
}

function getNextOpenDay(fromJsDay: number): DaySchedule | null {
  // Look through the next 7 days
  for (let i = 1; i <= 7; i++) {
    const nextJsDay = (fromJsDay + i) % 7;
    const schedule = HOURS.find((h) => h.jsDay === nextJsDay);
    if (schedule && !schedule.isClosed) {
      return schedule;
    }
  }
  return null;
}

// ─── Phone formatter ─────────────────────────────────────────────────
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("34") && digits.length === 11) {
    return `+34 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  return phone;
}

// ─── Input sanitizer (strip HTML tags) ──────────────────────────────
export function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

// ─── Rate limit store (in-memory, per-IP) ───────────────────────────
// NOTE: In production, replace with Upstash Redis for multi-instance deployments.
interface RateLimitEntry {
  count: number;
  firstRequestAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now - entry.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, firstRequestAt: now });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count };
}

// Periodically clean old entries to prevent memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    rateLimitStore.forEach((entry, ip) => {
      if (now - entry.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
        rateLimitStore.delete(ip);
      }
    });
  }, RATE_LIMIT_WINDOW_MS);
}

// ─── CSRF Token helpers ──────────────────────────────────────────────
export function generateCsrfToken(): string {
  const array = new Uint8Array(32);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(array);
  } else {
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
