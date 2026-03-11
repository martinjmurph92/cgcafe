import { parsePhoneNumber, type CountryCode } from "libphonenumber-js/min";

/**
 * Returns a "tel:" href string for a given phone number, formatted in E.164 if valid.
 *
 * Attempts to parse and validate the input using the specified country code (default "GB").
 * If the number is valid, returns a string like "tel:+441234567890".
 * If parsing or validation fails, returns null.
 *
 * @param input - The raw phone number input string.
 * @param country - Optional ISO country code (e.g. "GB") used for parsing.
 * @returns A "tel:" URI string (e.g., "tel:+441234567890") if valid, or null if invalid.
 */
export function getPhoneHref(
  input: string | undefined,
  country: CountryCode = "GB"
): string | null {
  if (!input) return null;

  try {
    const phone = parsePhoneNumber(input.trim(), country);

    if (phone.isValid()) {
      return phone.getURI();
    }
  } catch {}

  return null;
}

/**
 * Formats a phone number for display purposes
 *
 * @param input - Raw phone number input
 * @param country - Optional ISO country code (e.g. "GB")
 * @returns Formatted phone number string or original input if invalid
 */
export function formatPhoneNumber(
  input: string | undefined,
  country: CountryCode = "GB"
): string {
  if (!input) return "";

  try {
    const phone = parsePhoneNumber(input.trim(), country);

    if (phone.isValid()) {
      return phone.formatNational();
    }
  } catch {}

  return input.trim();
}
