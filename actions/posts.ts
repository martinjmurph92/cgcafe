import { unstable_cache } from "next/cache";

import { getPayloadClient } from "@/lib/payload";

type GetPostsOptions = {
  page?: number;
  limit?: number;
};

export async function getPosts(options: GetPostsOptions) {
  const payload = await getPayloadClient();

  const { page = 1, limit = 2 } = options;

  const results = await payload.find({
    collection: "posts",
    limit,
    page,
    sort: "-publishedAt",
    where: {
      _status: {
        equals: "published",
      },
    },
  });

  return results;
}

export function getCachedPosts(options: GetPostsOptions) {
  const { page = 1, limit = 2 } = options;

  return unstable_cache(
    () => getPosts(options),
    ["posts", `page:${page}`, `limit:${limit}`],
    {
      tags: ["posts"],
    }
  )();
}
