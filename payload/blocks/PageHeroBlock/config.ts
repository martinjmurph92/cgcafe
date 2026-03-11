import type { Block } from "payload";

import { configField } from "@/payload/blocks/container";
import { linkFields } from "@/payload/fields/link";

export const PageHero: Block = {
  slug: "pageHero",
  interfaceName: "PageHeroBlock",
  labels: {
    plural: "Page Hero",
    singular: "Page Hero",
  },
  fields: [
    {
      name: "eyebrow",
      label: "Eyebrow",
      type: "group",
      admin: { description: "Small labels above the title" },
      fields: [
        { name: "label", label: "Label 1", type: "text" },
        { name: "label2", label: "Label 2", type: "text" },
      ],
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "textarea",
    },
    {
      label: "Media",
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      label: "Links",
      labels: {
        singular: "Link",
        plural: "Links",
      },
      name: "links",
      type: "array",
      fields: linkFields,
    },
    configField({ backgroundColor: "primary", width: "wide" }),
  ],
};
