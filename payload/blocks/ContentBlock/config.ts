import type { Block } from "payload";

import { configField } from "@/payload/blocks/container";

export const Content: Block = {
  slug: "content",
  interfaceName: "ContentBlock",
  labels: {
    plural: "Content",
    singular: "Content",
  },
  fields: [
    {
      name: "richText",
      label: false,
      type: "richText",
    },
    configField(),
  ],
};
