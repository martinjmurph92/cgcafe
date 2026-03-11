import type { CollectionConfig } from "payload";

import { adminOnly } from "@/payload/access/adminOnly";

export const Admins: CollectionConfig<"admins"> = {
  slug: "admins",
  access: {
    admin: adminOnly,
    create: adminOnly,
    delete: adminOnly,
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ["name", "email"],
    useAsTitle: "name",
  },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 30, // 30 days
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Preferences",
      name: "preferences",
      type: "group",
      fields: [
        {
          label: "Receive Email Notifications",
          name: "emails",
          type: "checkbox",
          defaultValue: true,
          admin: {
            description: "Receive email notifications from the system.",
          },
        },
        {
          label: "Show Admin Bar",
          name: "adminBar",
          type: "checkbox",
          defaultValue: true,
          admin: {
            description: "Show the admin bar on the site.",
          },
        },
      ],
    },
  ],
  timestamps: true,
};
