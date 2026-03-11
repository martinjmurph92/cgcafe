import type { CollectionConfig } from "payload";

import { imageSizes } from "@/config/media";
import { adminOnly } from "@/payload/access/adminOnly";
import { formSubmission } from "@/payload/access/formSubmission";
import { mediaAccess } from "@/payload/access/mediaAccess";

import { formatFilename } from "./hooks/formatFilename";

export const Media: CollectionConfig<"media"> = {
  slug: "media",
  access: {
    create: (args) => adminOnly(args) || formSubmission(args),
    delete: adminOnly,
    read: mediaAccess,
    update: adminOnly,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "private",
      type: "checkbox",
      defaultValue: false,
      admin: {
        hidden: true,
      },
    },
  ],
  upload: {
    adminThumbnail: "thumbnail",
    displayPreview: true,
    focalPoint: true,
    imageSizes,
    mimeTypes: ["image/*", "video/*", "application/pdf"],
    resizeOptions: {
      withoutEnlargement: true,
    },
  },
  hooks: {
    beforeOperation: [formatFilename],
  },
  enableQueryPresets: true,
};
