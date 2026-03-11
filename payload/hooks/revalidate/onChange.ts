import { revalidatePath, revalidateTag } from "next/cache";
import { CollectionAfterChangeHook, CollectionSlug } from "payload";

import { getDocumentPath } from "@/lib/routing";

/**
 * Revalidate after create/update (publish/unpublish)
 */
export const createRevalidateOnChangeHook = (
  collectionSlug: CollectionSlug
): CollectionAfterChangeHook => {
  return ({ doc, previousDoc, req: { payload, context } }) => {
    // Skip revalidation if disabled
    if (context.disableRevalidate) return doc;

    const isPublished = doc._status === "published";
    const wasPublished = previousDoc._status === "published" && !isPublished;

    // If the doc is published, revalidate the doc path and all docs in the collection
    if (isPublished) {
      const path = getDocumentPath(collectionSlug, doc.slug);

      payload.logger.info(`Revalidating ${collectionSlug} at path: ${path}`);
      payload.logger.info(`Revalidating all ${collectionSlug}`);

      revalidatePath(path);
      revalidateTag(collectionSlug);
    }

    // If the doc was previously published, we need to revalidate the old path and all docs in the collection
    if (wasPublished) {
      const oldPath = getDocumentPath(collectionSlug, previousDoc.slug);

      payload.logger.info(
        `Revalidating old ${collectionSlug} at path: ${oldPath}`
      );
      payload.logger.info(`Revalidating all ${collectionSlug}`);

      revalidatePath(oldPath);
      revalidateTag(collectionSlug);
    }

    return doc;
  };
};
