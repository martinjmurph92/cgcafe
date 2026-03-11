import type { Block } from "payload";

import { linkFields } from "@/payload/fields/link";

export const MediaText: Block = {
  slug: "mediaText",
  interfaceName: "MediaTextBlock",
  labels: {
    plural: "Media & Text",
    singular: "Media & Text",
  },
  fields: [
    {
      label: "Media",
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "label",
      label: "Eyebrow / Label",
      type: "text",
      admin: { description: "e.g. Our Story" },
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      admin: { description: "Last word will be styled in gold" },
    },
    {
      label: "Body",
      name: "richText",
      type: "richText",
    },
        {
          name: "link",
          label: "CTA Link",
          type: "group",
          admin: { description: "Optional button below the body" },
          fields: linkFields,
        },
    {
      name: "stats",
      label: "Stats",
      type: "array",
      admin: { description: "e.g. 100% Fresh daily, Local Sourcing" },
      fields: [
        { name: "value", label: "Value", type: "text", required: true },
        { name: "label", label: "Label", type: "text", required: true },
      ],
    },
    {
      label: "Settings",
      type: "collapsible",
      admin: { initCollapsed: true },
      fields: [
        {
          label: false,
          type: "group",
          name: "settings",
          fields: [
            {
              label: "Padding Top & Bottom",
              name: "py",
              type: "select",
              required: true,
              defaultValue: "medium",
              options: [
                { label: "None", value: "none" },
                { label: "Small (24px)", value: "small" },
                { label: "Medium (48px)", value: "medium" },
                { label: "Large (96px)", value: "large" },
              ],
            },
            {
              label: "Anchor",
              name: "anchor",
              type: "text",
              required: false,
              admin: {
                description: "The anchor for the block. Used for in-page links.",
              },
            },
            {
              label: "Reverse",
              name: "reverse",
              type: "checkbox",
              defaultValue: false,
              admin: {
                description: "Reverse the stacking order on desktop",
              },
            },
          ],
        },
      ],
    },
  ],
};
