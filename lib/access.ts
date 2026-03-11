import { LinkBlock, Page, SubMenuBlock } from "@/payload-types";

/**
 * In Aqua, all pages are public by default.
 * This function now always returns true.
 */
export async function checkPageAccess(_page: Page): Promise<boolean> {
  return true;
}

/**
 * In Aqua, the menu is not filtered by auth.
 * This simply returns the original menu.
 */
export async function filterMenuByAccess(
  menu: (LinkBlock | SubMenuBlock)[]
): Promise<(LinkBlock | SubMenuBlock)[]> {
  return menu;
}
