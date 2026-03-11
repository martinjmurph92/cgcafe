import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";

import { adminOnly } from "@/payload/access/adminOnly";
import { publishedRecord } from "@/payload/access/publishedRecord";
import { blocks } from "@/payload/blocks";
import { slugField } from "@/payload/fields/slug";
import { populatePublishedAt } from "@/payload/hooks/populatePublishedAt";
import { generatePreviewPath } from "@/lib/preview";

import { revalidatePageOnChange, revalidatePageOnDelete } from "./hooks";

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: (args) => adminOnly(args) || publishedRecord(args),
    update: adminOnly,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    useAsTitle: "title",
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "pages",
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "pages",
        req,
      });

      return path;
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "blocks",
              label: false,
              labels: {
                singular: "Block",
                plural: "Blocks",
              },
              type: "blocks",
              blocks: blocks,
            },
          ],
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
    slugField(),
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
  ],
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePageOnChange],
    afterDelete: [revalidatePageOnDelete],
  },
  timestamps: true,
  trash: true,
  versions: {
    drafts: {
      autosave: {
        interval: 500,
        showSaveDraftButton: true,
      },
      validate: false,
    },
    maxPerDoc: 50,
  },
  enableQueryPresets: true,
};
