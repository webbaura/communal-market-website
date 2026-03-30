/**
 * Pure utility functions — no side effects, no imports from lib/*
 * Safe to import anywhere.
 */

/** Clamp a number between min and max */
export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

/** Format a phone number for display: 0412345678 → 0412 345 678 */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10 && digits.startsWith('04')) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)} ${digits.slice(6)}`;
  }
  return phone;
}

/** Truncate a string to maxLen chars with ellipsis */
export function truncate(s: string, maxLen: number): string {
  if (!s || s.length <= maxLen) return s;
  return s.slice(0, maxLen - 1) + '…';
}

/** Slugify a string for URL use */
export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** Get initials from a name: "John Smith" → "JS" */
export function initials(name: string): string {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

/** Star rating string: 4.7 → "★★★★★" with half-star awareness */
export function starRating(rating: number): string {
  const full  = Math.floor(rating);
  const empty = 5 - Math.ceil(rating);
  return '★'.repeat(full) + '☆'.repeat(empty);
}

/** CSS class merge — join truthy class strings */
export function cx(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
