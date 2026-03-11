import { Media } from "@/payload-types";

import { getClientSideURL } from "@/lib/url";

export async function uploadMediaViaSignedURL(
  file: File,
  data: { alt: string; private: boolean }
): Promise<Media> {
  if (!file) throw new Error("No file provided");

  // 1) Ask Payload for a presigned URL
  const base = getClientSideURL();
  const signedRes = await fetch(`${base}/api/storage-s3-generate-signed-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      collectionSlug: "media",
      filename: file.name,
      mimeType: file.type || "application/octet-stream",
    }),
  });
  if (!signedRes.ok) throw new Error(`Signed URL failed: ${signedRes.status}`);
  const signed: {
    url: string;
    key?: string;
    headers?: Record<string, string>;
  } = await signedRes.json();

  // 2) Upload file bytes directly to S3 (bypasses Vercel body limit)
  const putRes = await fetch(signed.url, {
    method: "PUT",
    headers: {
      "Content-Type": file.type || "application/octet-stream",
      ...(signed.headers || {}),
    },
    body: file,
  });
  if (!putRes.ok) throw new Error(`S3 upload failed: ${putRes.status}`);

  // 3) Create the media doc with a tiny POST
  const fd = new FormData();

  fd.append("_payload", JSON.stringify(data));

  fd.append(
    "file",
    JSON.stringify({
      clientUploadContext: {},
      collectionSlug: "media",
      filename: file.name,
      mimeType: file.type || "application/octet-stream",
      size: file.size,
      ...(signed.key ? { key: signed.key } : {}),
    })
  );

  const createRes = await fetch(`${base}/api/media`, {
    method: "POST",
    body: fd,
    credentials: "include",
  });
  if (!createRes.ok)
    throw new Error(`Create media failed: ${createRes.status}`);

  const media = await createRes.json();

  return (media.doc ?? media) as Media;
}
