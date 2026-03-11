import type { Block } from "payload";

export const IntroStrip: Block = {
  slug: "introStrip",
  interfaceName: "IntroStripBlock",
  labels: {
    plural: "Intro Strip",
    singular: "Intro Strip",
  },
  fields: [
    {
      name: "items",
      label: "Items",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "icon",
          label: "Icon (emoji)",
          type: "text",
          required: true,
          admin: { description: "e.g. ☕ 🍳 🎂" },
        },
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "text",
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
              defaultValue: "small",
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
