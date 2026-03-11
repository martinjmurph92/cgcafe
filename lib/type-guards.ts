import type { Media, Page, Post } from "@/payload-types";

export function isMedia(value: unknown): value is Media & { url: string } {
  return typeof value === "object" && value !== null && "url" in value;
}

export function isPage(value: unknown): value is Page {
  return typeof value === "object" && value !== null && "title" in value;
}

export function isPost(value: unknown): value is Post {
  return typeof value === "object" && value !== null && "title" in value;
}

export function isDocument(value: unknown): value is Page | Post {
  return isPage(value) || isPost(value);
}
