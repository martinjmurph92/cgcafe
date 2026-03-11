import type { Block } from "payload";

export const Gallery: Block = {
  slug: "gallery",
  interfaceName: "GalleryBlock",
  labels: {
    plural: "Gallery",
    singular: "Gallery",
  },
  fields: [
    {
      name: "label",
      label: "Eyebrow label",
      type: "text",
      defaultValue: "Gallery",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      defaultValue: "A taste of the atmosphere",
    },
    {
      name: "images",
      label: "Images",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
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
          ],
        },
      ],
    },
  ],
};
