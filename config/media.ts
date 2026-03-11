import type { ImageSize } from "payload";

/**
 * An array of predefined image size configurations for Payload CMS.
 *
 * Adjust or extend this array to support new image use cases in your application.
 *
 * @see {@link https://payloadcms.com/docs/upload/overview#image-sizes}
 */
export const imageSizes: ImageSize[] = [
  {
    name: "thumbnail",
    width: 600,
    height: 600,
    generateImageName: ({ originalName, extension }) => {
      return `${originalName}-thumbnail.${extension}`;
    },
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
  {
    name: "card",
    width: 900,
    height: 600,
    generateImageName: ({ originalName, extension }) => {
      return `${originalName}-card.${extension}`;
    },
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
  {
    name: "hero",
    width: 900,
    height: 750,
    generateImageName: ({ originalName, extension }) => {
      return `${originalName}-hero.${extension}`;
    },
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
  {
    name: "landscape",
    width: 1200,
    height: 600,
    generateImageName: ({ originalName, extension }) => {
      return `${originalName}-landscape.${extension}`;
    },
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
  {
    name: "large",
    width: 1920,
    generateImageName: ({ originalName, extension }) => {
      return `${originalName}-large.${extension}`;
    },
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
  },
];
