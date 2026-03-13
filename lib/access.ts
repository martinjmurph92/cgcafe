import { LinkBlock, Page, SubMenuBlock } from "@/payload-types";

/**
 * In CG Cafe, all pages are public by default.
 * This function now always returns true.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function checkPageAccess(_: Page): Promise<boolean> {
  return true;
}

/**
 * In CG Cafe, the menu is not filtered by auth.
 * This simply returns the original menu.
 */
export async function filterMenuByAccess(
  menu: (LinkBlock | SubMenuBlock)[]
): Promise<(LinkBlock | SubMenuBlock)[]> {
  return menu;
}
