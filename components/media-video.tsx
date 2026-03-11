import { Media } from "@/payload-types";

import { isMedia } from "@/lib/type-guards";

type MediaVideoProps = {
  resource: number | Media | null | undefined;
};

function MediaVideo({ resource, ...props }: MediaVideoProps) {
  if (!resource) return null;

  if (!isMedia(resource)) {
    throw new Error(
      "MediaVideo component expected a full media object, but received a numeric ID. Please ensure your payload query includes the necessary depth to fetch the full media object."
    );
  }

  const src = resource.url;

  return (
    <video controls {...props}>
      <source src={src} type={resource.mimeType || undefined} />
      Your browser does not support the video tag.
    </video>
  );
}

export { MediaVideo, type MediaVideoProps };
