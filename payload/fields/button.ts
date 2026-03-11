import { LinkFields, linkFields } from "@/payload/fields/link";
import { Field } from "payload";

import { ButtonProps } from "@/components/ui/button";

export type ButtonFields = {
  variant: ButtonProps["variant"];
  icon?: "none" | "arrow-right" | "mail" | "phone" | null;
  iconPosition?: "before" | "after" | null;
} & LinkFields;

export const buttonFields: Field[] = [
  {
    name: "variant",
    type: "select",
    required: true,
    defaultValue: "default",
    options: [
      { label: "Primary", value: "default" },
      { label: "Outline", value: "outline" },
      { label: "Secondary", value: "secondary" },
      { label: "Ghost", value: "ghost" },
      { label: "Link", value: "link" },
    ],
  },
  {
    name: "icon",
    type: "select",
    defaultValue: "none",
    options: [
      { label: "None", value: "none" },
      { label: "Arrow Right", value: "arrow-right" },
      { label: "Mail", value: "mail" },
      { label: "Phone", value: "phone" },
    ],
  },
  {
    name: "iconPosition",
    type: "select",
    defaultValue: "after",
    options: [
      { label: "Before", value: "before" },
      { label: "After", value: "after" },
    ],
  },
  ...linkFields,
];

export const buttons: Field[] = [
  {
    name: "buttons",
    label: false,
    labels: {
      singular: "Button",
      plural: "Buttons",
    },
    type: "array",
    fields: buttonFields,
  },
];
