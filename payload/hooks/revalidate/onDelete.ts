import { revalidatePath, revalidateTag } from "next/cache";
import { CollectionAfterDeleteHook, CollectionSlug } from "payload";

import { getDocumentPath } from "@/lib/routing";

/**
 * Revalidate after deletion
 */
export const createRevalidateOnDeleteHook = (
  collectionSlug: CollectionSlug
): CollectionAfterDeleteHook => {
  return ({ doc, req: { payload, context } }) => {
    // Skip revalidation if disabled
    if (context.disableRevalidate) return doc;

    const path = getDocumentPath(collectionSlug, doc.slug);

    payload.logger.info(
      `Revalidating deleted ${collectionSlug} at path: ${path}`
    );

    revalidatePath(path);
    revalidateTag(collectionSlug);

    return doc;
  };
};
