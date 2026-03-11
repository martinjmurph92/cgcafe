import { revalidateTag } from "next/cache";
import type { CollectionConfig } from "payload";

import { adminOnly } from "@/payload/access/adminOnly";

export const MENU_CATEGORIES = [
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Cakes & Bakes", value: "cakes-bakes" },
  { label: "Drinks", value: "drinks" },
  { label: "Dinner", value: "dinner" },
] as const;

export type MenuCategoryValue = (typeof MENU_CATEGORIES)[number]["value"];

export const MenuItems: CollectionConfig<"menu-items"> = {
  slug: "menu-items",
  labels: {
    singular: "Menu Item",
    plural: "Menu Items",
  },
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: () => true,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ["name", "category", "price", "updatedAt"],
    group: "Content",
    useAsTitle: "name",
    description: "Manage menu items. Used by the Menu block on the site.",
  },
  fields: [
    {
      name: "name",
      label: "Item name",
      type: "text",
      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      required: true,
      options: [...MENU_CATEGORIES],
      admin: {
        description: "e.g. Breakfast, Lunch, Drinks",
      },
    },
    {
      name: "price",
      label: "Price",
      type: "text",
      required: true,
      admin: {
        description: "e.g. £9.50, from £3.00",
      },
    },
    {
      name: "description",
      label: "Description",
      type: "text",
    },
    {
      name: "badge",
      label: "Badge",
      type: "text",
      admin: {
        description: "e.g. Most Popular, Vegetarian, Vegan",
      },
    },
    {
      name: "order",
      label: "Order",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Lower numbers appear first within the category.",
        position: "sidebar",
      },
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      () => {
        revalidateTag("menu-items");
      },
    ],
    afterDelete: [
      () => {
        revalidateTag("menu-items");
      },
    ],
  },
};
