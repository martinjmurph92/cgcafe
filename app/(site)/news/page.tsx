import type { Metadata } from "next";
import { getCachedPosts } from "@/actions/posts";

import { SiteLayout } from "@/components/layout/site-layout";
import { Paginate } from "@/components/paginate";
import { PostCard } from "@/components/post-card";

export const metadata: Metadata = {
  title: "News",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page = "1" } = await searchParams;

  const { docs, ...paginate } = await getCachedPosts({
    page: Number(page),
    limit: 6,
  });

  return (
    <SiteLayout>
      <div className="container space-y-4 py-4 sm:space-y-8 sm:py-8 md:space-y-12 md:py-12">
        <header>
          <h1 className="text-primary">News</h1>
        </header>

        {docs.length > 0 ? (
          <>
            <ol
              className="grid gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3"
              aria-label="News articles"
            >
              {docs.map((post) => (
                <li key={post.id}>
                  <PostCard post={post} />
                </li>
              ))}
            </ol>

            <Paginate {...paginate} />
          </>
        ) : (
          <p>No news articles found</p>
        )}
      </div>
    </SiteLayout>
  );
}
