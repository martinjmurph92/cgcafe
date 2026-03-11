import { unstable_cache } from "next/cache";
import { getServerSideSitemap, type ISitemapField } from "next-sitemap";

import { getPayloadClient } from "@/lib/payload";
import { getServerSideURL } from "@/lib/url";

const getPagesSitemap = unstable_cache(
  async (): Promise<ISitemapField[]> => {
    const payload = await getPayloadClient();

    const SITE_URL = getServerSideURL();

    const results = await payload.find({
      collection: "pages",
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        and: [
          { _status: { equals: "published" } },
          { protected: { equals: false } },
        ],
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    });

    const dateFallback = new Date().toISOString();

    const sitemap = results.docs
      ? results.docs
          .filter((page) => Boolean(page?.slug))
          .map((page) => {
            return {
              loc:
                page?.slug === "home"
                  ? `${SITE_URL}/`
                  : `${SITE_URL}/${page?.slug}`,
              lastmod: page.updatedAt || dateFallback,
            };
          })
      : [];

    return sitemap;
  },
  ["pages-sitemap"],
  {
    tags: ["site", "pages-sitemap"],
  }
);

export async function GET() {
  const sitemap = await getPagesSitemap();

  return getServerSideSitemap(sitemap);
}
