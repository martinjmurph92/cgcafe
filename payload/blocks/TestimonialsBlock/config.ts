import type { Block } from "payload";

export const Testimonials: Block = {
  slug: "testimonials",
  interfaceName: "TestimonialsBlock",
  labels: {
    plural: "Testimonials",
    singular: "Testimonials",
  },
  fields: [
    {
      name: "label",
      label: "Eyebrow label",
      type: "text",
      defaultValue: "Reviews",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      defaultValue: "What our guests say",
    },
    {
      name: "items",
      label: "Testimonials",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "stars",
          label: "Star rating (1–5)",
          type: "number",
          required: true,
          min: 1,
          max: 5,
          defaultValue: 5,
        },
        {
          name: "quote",
          label: "Quote",
          type: "textarea",
          required: true,
        },
        {
          name: "authorInitial",
          label: "Author initial",
          type: "text",
          required: true,
          admin: { description: "Single letter for avatar, e.g. S" },
        },
        {
          name: "authorName",
          label: "Author name",
          type: "text",
          required: true,
        },
        {
          name: "authorSub",
          label: "Author subtitle",
          type: "text",
          admin: { description: "e.g. Regular visitor, Via Google Reviews" },
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
