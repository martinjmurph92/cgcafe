import { revalidateTag } from "next/cache";
import type { CollectionConfig } from "payload";

import { adminOnly } from "@/payload/access/adminOnly";

export const TEAM_ROLES = [
  { label: "Owner", value: "owner" },
  { label: "Manager", value: "manager" },
  { label: "Supervisor", value: "supervisor" },
  { label: "Crew", value: "crew" },
] as const;

export const TeamMembers: CollectionConfig<"team-members"> = {
  slug: "team-members",
  labels: {
    singular: "Team Member",
    plural: "Team Members",
  },
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: () => true,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ["name", "role", "jobTitle", "order"],
    group: "Content",
    useAsTitle: "name",
    description: "Team members shown on the Team page.",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "photo",
      label: "Photo",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Optional. If empty, initials are shown.",
      },
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      required: true,
      options: [...TEAM_ROLES],
      admin: {
        description: "Determines card layout: owners (2-col), manager, supervisor, crew grid.",
      },
    },
    {
      name: "jobTitle",
      label: "Job title",
      type: "text",
      required: true,
      admin: {
        description: 'e.g. "Co-Owner & Head of Operations"',
      },
    },
    {
      name: "bio",
      label: "Bio",
      type: "textarea",
      required: true,
    },
    {
      name: "favouriteOrder",
      label: "Favourite order",
      type: "textarea",
      admin: {
        description: 'e.g. "Double espresso, no sugar"',
      },
    },
    {
      name: "funFact",
      label: "Fun fact",
      type: "textarea",
      admin: {
        description: 'e.g. "Trained as a chef before switching to front of house"',
      },
    },
    {
      name: "order",
      label: "Order",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Sort order within role. Lower numbers appear first.",
        position: "sidebar",
      },
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      () => {
        revalidateTag("team-members");
      },
    ],
    afterDelete: [
      () => {
        revalidateTag("team-members");
      },
    ],
  },
};
