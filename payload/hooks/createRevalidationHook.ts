import { revalidatePath, revalidateTag } from "next/cache";
import { CollectionAfterChangeHook, CollectionSlug, TypeWithID } from "payload";

import { getDocumentPath } from "@/lib/routing";

/**
 * Creates a revalidation hook for any collection.
 */

type CollectionWithSlugAndStatus = TypeWithID & {
  _status: string;
  slug: string;
};

export const createRevalidateOnChangeHook = <
  T extends CollectionWithSlugAndStatus,
>(
  collectionSlug: CollectionSlug
): CollectionAfterChangeHook<T> => {
  return ({ doc, previousDoc, req: { payload, context } }) => {
    // Skip revalidation if disabled
    if (context.disableRevalidate) return doc;

    const isPublished = doc._status === "published";
    const wasPublished = previousDoc._status === "published" && !isPublished;

    // If the document is published, revalidate the document path and collection
    if (isPublished) {
      const path = getDocumentPath(collectionSlug, doc.slug);

      payload.logger.info(`Revalidating document at path: ${path}`);
      payload.logger.info(`Revalidating all ${collectionSlug}`);

      revalidatePath(path);
      revalidateTag(collectionSlug);
    }

    // If the document was previously published, we need to revalidate the old path and collection
    if (wasPublished) {
      const oldPath = getDocumentPath(collectionSlug, previousDoc.slug);

      payload.logger.info(`Revalidating old document at path: ${oldPath}`);
      payload.logger.info(`Revalidating all ${collectionSlug}`);

      revalidatePath(oldPath);
      revalidateTag(collectionSlug);
    }

    return doc;
  };
};
