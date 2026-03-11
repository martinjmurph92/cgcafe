import Image, { ImageProps } from "next/image";
import { Media } from "@/payload-types";

import { cssVariables } from "@/lib/breakpoints";
import { isMedia } from "@/lib/type-guards";

type MediaImageProps = Omit<ImageProps, "resource" | "src" | "alt"> & {
  resource: number | Media | null | undefined;
  size?: keyof NonNullable<Media["sizes"]>;
  alt?: string;
};

function MediaImage({
  resource,
  size,
  alt: altProp,
  fill,
  priority,
  ...props
}: MediaImageProps) {
  if (!resource) return null;

  if (!isMedia(resource)) {
    throw new Error(
      "MediaImage component expected a full media object, but received a numeric ID. Please ensure your payload query includes the necessary depth to fetch the full media object."
    );
  }

  const resourceSize = size ? resource.sizes?.[size] : undefined;

  const src = resourceSize?.url || resource.url;

  if (!src) {
    throw new Error("Expected a valid image URL.");
  }

  const width = resourceSize?.width || resource.width || undefined;
  const height = resourceSize?.height || resource.height || undefined;
  const alt = altProp || resource.alt || "";

  const sizes = props.sizes
    ? props.sizes
    : Object.entries(cssVariables.breakpoints || {})
        .map(([, px]) => `(max-width: ${px}px) ${px * 2}w`)
        .join(", ");

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  );
}

export { MediaImage, type MediaImageProps };
