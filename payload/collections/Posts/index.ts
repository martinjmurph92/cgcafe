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
import { slugField } from "@/payload/fields/slug";
import { populatePublishedAt } from "@/payload/hooks/populatePublishedAt";
import { generatePreviewPath } from "@/lib/preview";

import { revalidatePostOnChange, revalidatePostOnDelete } from "./hooks";

export const Posts: CollectionConfig<"posts"> = {
  slug: "posts",
  labels: {
    singular: "News",
    plural: "News",
  },
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: (args) => adminOnly(args) || publishedRecord(args),
    update: adminOnly,
  },
  defaultPopulate: {
    title: true,
    summary: true,
    slug: true,
    image: true,
    publishedAt: true,
  },
  admin: {
    defaultColumns: ["title", "summary", "image", "publishedAt", "updatedAt"],
    useAsTitle: "title",
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "posts",
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "posts",
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
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "summary",
      type: "textarea",
      admin: {
        description: "A short summary of the article.",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "content",
              type: "richText",
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
    afterChange: [revalidatePostOnChange],
    afterDelete: [revalidatePostOnDelete],
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
