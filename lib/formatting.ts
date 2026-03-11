/**
 * Capitalizes the first letter of a string.
 * Trims the input before capitalizing.
 */
export function capitalize(value: string | undefined | null): string {
  if (!value || typeof value !== "string") return "";

  return value.trim().charAt(0).toUpperCase() + value.trim().slice(1);
}

/**
 * Removes trailing slashes from a string.
 */
export function untrailingslashit(value: string | undefined | null): string {
  if (!value || typeof value !== "string") return "";

  return value.replace(/\/+$/, "");
}

/**
 * Ensures exactly one trailing slash on a string.
 */
export function trailingslashit(value: string | undefined | null): string {
  if (!value || typeof value !== "string") return "/";

  return untrailingslashit(value) + "/";
}

/**
 * Converts a string into a URL-friendly slug.
 *
 * - Converts to lowercase.
 * - Replaces all non-word characters (including spaces and slashes) with hyphens.
 * - Trims leading and trailing hyphens.
 * - Collapses multiple consecutive hyphens into a single hyphen.
 *
 * @param value - The input string to format as a slug.
 * @returns The formatted slug string.
 */
export function formatSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-");
}
