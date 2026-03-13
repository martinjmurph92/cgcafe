import type { Block } from "payload";

export const TextHero: Block = {
  slug: "textHero",
  interfaceName: "TextHeroBlock",
  labels: {
    plural: "Text Hero",
    singular: "Text Hero",
  },
  fields: [
    {
      name: "label",
      label: "Eyebrow label",
      type: "text",
      admin: {
        description: "Small label above the title, e.g. 'The People Behind the Cup'",
      },
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      admin: {
        description: "The last word will be styled in italic/gold",
      },
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "textarea",
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
