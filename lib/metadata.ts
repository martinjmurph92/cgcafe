import type { Metadata } from "next";
import type { Media } from "@/payload-types";

import { getServerSideURL } from "@/lib/url";

type BaseMetaInput = {
  title?: string | null;
  description?: string | null;
  image?: number | Media | null;
};

export function buildMetadata({
  title,
  description,
  image,
}: BaseMetaInput): Metadata {
  const SITE_URL = getServerSideURL();

  const metadata: Metadata = {
    title: title || undefined,
    description: description || undefined,
  };

  if (image && typeof image === "object" && image.url) {
    metadata.openGraph = {
      type: "website",
      url: SITE_URL,
      title: title || "",
      siteName: title || "",
      description: description || "",
      images: [{ url: `${SITE_URL}${image.url}` }],
    };
  }

  return metadata;
}
