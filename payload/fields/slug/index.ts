import type { TextField } from "payload";

import { formatSlugHook } from "./format";

type Overrides = {
  slugOverrides?: Partial<TextField>;
};

type Slug = (fieldToUse?: string, overrides?: Overrides) => TextField;

export const slugField: Slug = (fieldToUse = "title", overrides = {}) => {
  const { slugOverrides } = overrides;

  // @ts-expect-error - Type mismatch due to custom field configuration
  const slugField: TextField = {
    name: "slug",
    type: "text",
    index: true,
    label: "Slug",
    required: true,
    ...(slugOverrides || {}),
    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlugHook(fieldToUse)],
    },
    admin: {
      position: "sidebar",
      ...(slugOverrides?.admin || {}),
      components: {
        Field: {
          path: "@/payload/fields/slug/SlugComponent#SlugComponent",
          clientProps: {
            fieldToUse,
          },
        },
      },
    },
  };

  return slugField;
};
