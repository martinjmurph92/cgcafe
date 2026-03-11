import { Media, Page, Post } from "@/payload-types";
import { Field } from "payload";

export type LinkFields = {
  id?: string | null;
  linkType: "internal" | "custom";
  label: string;
  internalLink?:
    | ({
        relationTo: "posts";
        value: number | Post;
      } | null)
    | ({
        relationTo: "pages";
        value: number | Page;
      } | null)
    | ({
        relationTo: "media";
        value: number | Media;
      } | null);
  customLink?: string | null;
  newTab?: boolean | null;
};

export const linkFields: Field[] = [
  {
    type: "row",
    fields: [
      {
        name: "linkType",
        type: "radio",
        required: true,
        defaultValue: "internal",
        options: [
          {
            label: "Internal Link",
            value: "internal",
          },
          {
            label: "Custom URL",
            value: "custom",
          },
        ],
        admin: {
          width: "50%",
        },
      },
      {
        name: "newTab",
        type: "checkbox",
        label: "Open in new tab",
        admin: {
          width: "50%",
          style: {
            alignSelf: "flex-end",
          },
        },
      },
    ],
  },
  {
    type: "row",
    fields: [
      {
        name: "internalLink",
        type: "relationship",
        relationTo: ["posts", "pages", "media"],
        required: true,
        admin: {
          condition: (_, siblingData) => siblingData.linkType === "internal",
          width: "50%",
        },
      },
      {
        name: "customLink",
        type: "text",
        required: true,
        admin: {
          condition: (_, siblingData) => siblingData.linkType === "custom",
          width: "50%",
        },
      },
      {
        name: "label",
        type: "text",
        required: true,
        admin: {
          width: "50%",
        },
      },
    ],
  },
];
