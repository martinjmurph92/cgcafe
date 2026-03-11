import type { Block } from "payload";

export const Hours: Block = {
  slug: "hours",
  interfaceName: "HoursBlock",
  labels: {
    plural: "Opening Hours",
    singular: "Opening Hours",
  },
  fields: [
    {
      name: "hoursLabel",
      label: "Hours section label",
      type: "text",
      defaultValue: "Opening Hours",
    },
    {
      name: "hoursTitle",
      label: "Hours section title",
      type: "text",
      defaultValue: "When we're open",
    },
    {
      name: "hours",
      label: "Opening hours",
      type: "array",
      required: true,
      fields: [
        {
          name: "day",
          label: "Day(s)",
          type: "text",
          required: true,
          admin: { description: "e.g. Monday – Friday, Saturday" },
        },
        {
          name: "time",
          label: "Hours",
          type: "text",
          required: true,
          admin: { description: "e.g. 7:30am – 4:00pm" },
        },
      ],
    },
    {
      name: "findUsLabel",
      label: "Find us label",
      type: "text",
      defaultValue: "Find Us",
    },
    {
      name: "findUsTitle",
      label: "Find us title",
      type: "text",
      defaultValue: "Come say hello",
    },
    {
      name: "address",
      label: "Address",
      type: "textarea",
      required: true,
      admin: { description: "Full address (newlines for formatting)" },
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
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
