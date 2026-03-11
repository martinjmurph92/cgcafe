import type { MenuBlock as MenuBlockProps } from "@/payload-types";

import { getMenuItemsGroupedByCategory } from "@/actions/menu-items";

import { MenuBlockUI } from "./MenuBlockUI";

export async function MenuBlock({ heading, settings }: MenuBlockProps) {
  const categories = await getMenuItemsGroupedByCategory();

  return (
    <MenuBlockUI
      heading={heading}
      categories={categories}
      settings={settings}
    />
  );
}
