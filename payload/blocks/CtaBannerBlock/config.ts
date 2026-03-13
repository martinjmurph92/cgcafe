import type { Block } from "payload";

import { linkFields } from "@/payload/fields/link";

export const CtaBanner: Block = {
  slug: "ctaBanner",
  interfaceName: "CtaBannerBlock",
  labels: {
    plural: "CTA Banner",
    singular: "CTA Banner",
  },
  fields: [
    {
      name: "label",
      label: "Eyebrow label",
      type: "text",
      admin: {
        description: "Small label above the title, e.g. 'Join the Team'",
      },
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "button",
      label: "Button",
      type: "group",
      fields: linkFields,
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
