import { PayloadRequest } from "payload";

import { env } from "@/config/env";
import { collectionPrefixMap } from "@/lib/routing";

/**
 * Generates a preview path URL for a given collection and slug.
 * Useful for previewing content in Payload CMS.
 *
 * @returns The generated preview path as a string.
 */
export function generatePreviewPath({
  collection,
  slug,
}: {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
  req: PayloadRequest;
}) {
  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path: `${collectionPrefixMap[collection]}/${slug}`,
    previewSecret: env.PREVIEW_SECRET,
  });

  const url = `/next/preview?${encodedParams.toString()}`;

  return url;
}
