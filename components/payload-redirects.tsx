import { notFound, redirect } from "next/navigation";
import { getCachedDocument } from "@/actions/document";
import { getCachedRedirects } from "@/actions/redirects";

import { trailingslashit } from "@/lib/formatting";
import { getDocumentPath } from "@/lib/routing";
import { isDocument } from "@/lib/type-guards";

export async function PayloadRedirects({
  url,
  disableNotFound,
}: {
  url: string;
  disableNotFound?: boolean;
}) {
  const redirects = await getCachedRedirects();

  const normalisedUrl = trailingslashit(url);

  const redirectItem = redirects.find(
    (redirect) => trailingslashit(redirect.from) === normalisedUrl
  );

  if (!redirectItem) {
    if (!disableNotFound) notFound();
    return null;
  }

  const to = redirectItem.to;

  // Direct URL redirect
  if (to?.url) {
    redirect(to.url);
  }

  const ref = to?.reference?.value;
  const collection = to?.reference?.relationTo;

  // Redirect to a document ID
  if (typeof ref === "string" && collection) {
    const doc = await getCachedDocument(collection, ref);
    if (doc) {
      const path = getDocumentPath(collection, doc.slug);
      redirect(path);
    }
  }

  // Redirect to a document object
  if (isDocument(ref) && collection) {
    const path = getDocumentPath(collection, ref.slug);
    redirect(path);
  }

  if (!disableNotFound) notFound();
  return null;
}
