import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { getCachedDocument, getDocument } from "@/actions/document";
import { RenderBlocks } from "@/payload/blocks/RenderBlocks";

import { checkPageAccess } from "@/lib/access";
import { buildMetadata } from "@/lib/metadata";
import { getPayloadClient } from "@/lib/payload";
import { getDocumentPath } from "@/lib/routing";
import { SiteLayout } from "@/components/layout/site-layout";
import { LivePreviewListener } from "@/components/live-preview";
import { PayloadRedirects } from "@/components/payload-redirects";

export async function generateStaticParams() {
  if (process.env.NODE_ENV === "development") return [];

  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    where: {
      slug: { not_equals: "home" },
    },
    select: {
      slug: true,
    },
  });

  const params = pages.docs.map((doc) => ({ slug: doc.slug }));

  return params;
}

type Args = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug = "home" } = await paramsPromise;

  const url = getDocumentPath("pages", slug);

  const page = await getPage(slug);

  if (!page) {
    return <PayloadRedirects url={url} />;
  }

  // Check Access
  const hasAccess = await checkPageAccess(page);
  if (!hasAccess) notFound();

  return (
    <>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <SiteLayout doc={page}>
        <RenderBlocks blocks={page.blocks} />
      </SiteLayout>
    </>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = "home" } = await paramsPromise;

  const doc = await getPage(slug);

  if (!doc) notFound();

  return buildMetadata({
    title: doc.meta?.title || doc.title,
    description: doc.meta?.description,
    image: doc.meta?.image,
  });
}

async function getPage(slug: string) {
  const { isEnabled: draft } = await draftMode();

  const doc = draft
    ? await getDocument("pages", slug, { draft })
    : await getCachedDocument("pages", slug);

  return doc;
}
