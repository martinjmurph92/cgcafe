import type { CollectionConfig } from "payload";

import { adminOnly } from "@/payload/access/adminOnly";
import { anyone } from "@/payload/access/anyone";

import { sendEmail } from "./hooks";

export const FormSubmissions: CollectionConfig<"form-submissions"> = {
  slug: "form-submissions",
  access: {
    create: anyone,
    delete: adminOnly,
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ["name", "email", "phone", "message", "createdAt"],
    group: "Forms",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      type: "text",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "text",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [sendEmail],
  },
  enableQueryPresets: true,
};
