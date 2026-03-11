import type { Block } from "payload";

export const Menu: Block = {
  slug: "menu",
  interfaceName: "MenuBlock",
  labels: {
    plural: "Menu",
    singular: "Menu",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "group",
      fields: [
        {
          name: "label",
          label: "Eyebrow label",
          type: "text",
          defaultValue: "Our Menu",
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
          defaultValue: "Something for everyone",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
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
