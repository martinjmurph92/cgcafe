import type { Block } from "payload";

import { linkFields } from "@/payload/fields/link";

export const Button: Block = {
  slug: "button",
  interfaceName: "ButtonBlock",
  labels: {
    plural: "Buttons",
    singular: "Button",
  },
  fields: [
    {
      name: "variant",
      type: "select",
      required: true,
      defaultValue: "default",
      options: [
        { label: "Default", value: "default" },
        { label: "Outline", value: "outline" },
        { label: "Link", value: "link" },
        { label: "Ghost", value: "ghost" },
      ],
    },
    ...linkFields,
    {
      name: "align",
      type: "select",
      required: true,
      defaultValue: "left",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
  ],
};
