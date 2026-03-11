import { unstable_cache } from "next/cache";

import { getPayloadClient } from "@/lib/payload";

export async function getRedirects(depth = 1) {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "redirects",
    depth,
    limit: 0,
    pagination: false,
  });

  return docs;
}

export const getCachedRedirects = unstable_cache(
  () => getRedirects(),
  ["redirects"],
  {
    tags: ["redirects"],
  }
);
