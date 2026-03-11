import { unstable_cache } from "next/cache";

import {
  MENU_CATEGORIES,
  type MenuCategoryValue,
} from "@/payload/collections/MenuItems";
import type { MenuItem } from "@/payload-types";
import { getPayloadClient } from "@/lib/payload";

export type MenuCategoryGroup = {
  id: string;
  name: string;
  value: MenuCategoryValue;
  items: Array<{
    id: string | number | null;
    name: string;
    price: string;
    description?: string | null;
    badge?: string | null;
  }>;
};

async function fetchMenuItemsGroupedByCategory(): Promise<
  MenuCategoryGroup[]
> {
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "menu-items",
    limit: 500,
    sort: "order",
    depth: 0,
  });

  const items = result.docs as MenuItem[];
  const byCategory = new Map<
    MenuCategoryValue,
    MenuCategoryGroup["items"]
  >();

  for (const item of items) {
    const category = item.category as MenuCategoryValue;
    if (!byCategory.has(category)) {
      byCategory.set(category, []);
    }
    byCategory.get(category)!.push({
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description ?? null,
      badge: item.badge ?? null,
    });
  }

  return MENU_CATEGORIES.map(({ label, value }) => ({
    id: value,
    name: label,
    value,
    items: byCategory.get(value) ?? [],
  })).filter((group) => group.items.length > 0);
}

export async function getMenuItemsGroupedByCategory(): Promise<
  MenuCategoryGroup[]
> {
  return unstable_cache(
    fetchMenuItemsGroupedByCategory,
    ["menu-items-grouped"],
    { tags: ["menu-items"] }
  )();
}
