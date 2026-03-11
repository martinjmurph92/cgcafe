import type { Block } from "payload";

export const Contact: Block = {
  slug: "contact",
  interfaceName: "ContactBlock",
  labels: {
    plural: "Contact Form",
    singular: "Contact Form",
  },
  fields: [
    {
      name: "label",
      label: "Eyebrow label",
      type: "text",
      defaultValue: "Get in Touch",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      defaultValue: "We'd love to hear from you",
    },
    {
      name: "richText",
      label: "Description",
      type: "richText",
    },
    {
      name: "details",
      label: "Contact details",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
          admin: { description: "e.g. Address, Phone, Email, Hours" },
        },
        {
          name: "icon",
          label: "Icon (emoji)",
          type: "text",
          defaultValue: "📍",
        },
        {
          name: "value",
          label: "Value",
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
              defaultValue: "large",
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
