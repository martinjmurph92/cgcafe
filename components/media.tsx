import { isMedia } from "@/lib/type-guards";
import { MediaImage, MediaImageProps } from "@/components/media-image";
import { MediaVideo, MediaVideoProps } from "@/components/media-video";

type MediaProps = MediaImageProps | MediaVideoProps;

function Media({ resource, ...props }: MediaProps) {
  if (!resource) return null;

  if (!isMedia(resource)) {
    throw new Error(
      "Media component expected a full media object, but received a numeric ID. Please ensure your payload query includes the necessary depth to fetch the full media object."
    );
  }

  const isVideo = resource?.mimeType?.includes("video");

  if (isVideo) {
    return <MediaVideo resource={resource} {...props} />;
  }

  return <MediaImage resource={resource} {...props} />;
}

export { Media };
