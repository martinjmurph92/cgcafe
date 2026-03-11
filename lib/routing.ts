import { CollectionSlug } from "payload";

/**
 * Maps each collection slug to its corresponding URL prefix.
 *
 * This mapping is used to construct the base path for documents belonging to different collections.
 * For example, the "posts" collection will have URLs prefixed with "/posts",
 * while the "pages" collection will have no prefix (i.e., pages are at the root level).
 *
 * Extend or modify this map to add custom URL structures for additional collections as needed.
 */
export const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  pages: "",
  posts: "/news",
};

/**
 * Returns the URL path for a document based on its collection and slug.
 *
 * @example
 * ```ts
 * getDocumentPath("pages", "about") → "/about"
 * getDocumentPath("posts", "my-post") → "/posts/my-post"
 * ```
 *
 * @returns The constructed URL path for the document, including any collection-specific prefix.
 */
export function getDocumentPath(
  collectionSlug: CollectionSlug,
  slug: string
): string {
  const prefix = collectionPrefixMap[collectionSlug] || "";

  // If the slug is "home", we want to return the root URL ("/")
  slug = slug === "home" ? "/" : slug;

  return `${prefix}/${slug}`;
}
