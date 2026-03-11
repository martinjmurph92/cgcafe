import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { getCachedDocument, getDocument } from "@/actions/document";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import { buildMetadata } from "@/lib/metadata";
import { getPayloadClient } from "@/lib/payload";
import { getDocumentPath } from "@/lib/routing";
import { isMedia } from "@/lib/type-guards";
import { SiteLayout } from "@/components/layout/site-layout";
import { LivePreviewListener } from "@/components/live-preview";
import { MediaImage } from "@/components/media-image";
import { PayloadRedirects } from "@/components/payload-redirects";
import { RichText } from "@/components/rich-text";

export async function generateStaticParams() {
  if (process.env.NODE_ENV === "development") return [];

  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = posts.docs.map((doc) => ({ slug: doc.slug }));

  return params;
}

type Args = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug } = await paramsPromise;

  const url = getDocumentPath("posts", slug);

  const post = await getPost(slug);

  if (!post) {
    return <PayloadRedirects url={url} />;
  }

  return (
    <>
      {/* Allows redirects for valid posts too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <SiteLayout doc={post} className="bg-light px-4 py-5 md:py-15">
        <article className="mx-auto max-w-5xl overflow-clip rounded-xl bg-white">
          {isMedia(post.image) && (
            <MediaImage
              resource={post.image}
              size="landscape"
              priority
              className="w-full"
            />
          )}

          <h1 className="rounded-b-xl bg-primary p-4 text-xl leading-tight font-semibold text-white xs:p-6 xs:text-2xl md:text-3xl">
            {post.title}
          </h1>

          <div className="px-4 py-6 md:p-8 lg:p-12">
            <p className="mb-6 text-xl text-primary sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-4xl">
              {post.summary}
            </p>

            <RichText data={post.content as SerializedEditorState} />
          </div>
        </article>
      </SiteLayout>
    </>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug } = await paramsPromise;

  const doc = await getPost(slug);

  if (!doc) notFound();

  return buildMetadata({
    title: doc.meta?.title || doc.title,
    description: doc.meta?.description,
    image: doc.meta?.image,
  });
}

async function getPost(slug: string) {
  const { isEnabled: draft } = await draftMode();

  const doc = draft
    ? await getDocument("posts", slug, { draft })
    : await getCachedDocument("posts", slug);

  return doc;
}
