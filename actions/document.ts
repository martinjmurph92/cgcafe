import { unstable_cache } from "next/cache";
import type { Config } from "@/payload-types";

import { getPayloadClient } from "@/lib/payload";

type CollectionSlug = keyof Config["collections"];

type DocumentOptions = {
  depth?: number;
  draft?: boolean;
};

export async function getDocument<K extends CollectionSlug>(
  collection: K,
  slug: string,
  options: DocumentOptions = {}
): Promise<Config["collections"][K] | null> {
  const payload = await getPayloadClient();

  const { draft = false, depth = 1 } = options;

  const { docs } = await payload.find({
    collection,
    depth,
    draft,
    limit: 1,
    pagination: false,
    where: {
      slug: { equals: slug },
      ...(draft ? {} : { _status: { equals: "published" } }),
    },
  });

  return docs?.[0] ?? null;
}

export function getCachedDocument<K extends CollectionSlug>(
  collection: K,
  slug: string,
  options: Omit<DocumentOptions, "draft"> = {}
): Promise<Config["collections"][K] | null> {
  const { depth = 1 } = options;

  return unstable_cache(
    () => getDocument(collection, slug, options),
    [collection, slug, `depth:${depth}`],
    {
      tags: [`${collection}_${slug}`],
    }
  )();
}
