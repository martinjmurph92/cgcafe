import { getSettings } from "@/actions/global";

import { filterMenuByAccess } from "@/lib/access";

import { SiteMenuDesktop } from "./site-menu-desktop";
import { SiteMenuMobile } from "./site-menu-mobile";

export async function SiteMenu() {
  const settings = await getSettings();

  const menu = settings?.header?.menu;

  if (!menu || !menu.length) return null;

  const filteredMenu = await filterMenuByAccess(menu);

  return (
    <>
      <SiteMenuMobile menu={filteredMenu} />
      <div className="absolute left-1/2 -translate-x-1/2 max-lg:hidden">
        <SiteMenuDesktop menu={filteredMenu} />
      </div>
    </>
  );
}
