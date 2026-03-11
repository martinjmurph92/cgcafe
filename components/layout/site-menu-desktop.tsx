import { LinkBlock, SubMenuBlock } from "@/payload-types";
import { LinkFields } from "@/payload/fields/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuLink } from "@/components/layout/menu-link";

export function SiteMenuDesktop({
  menu,
}: {
  menu: (LinkBlock | SubMenuBlock)[];
}) {
  return (
    <NavigationMenu
      aria-label="Main navigation"
      className="max-lg:hidden flex justify-center"
      viewport={false}
    >
      <NavigationMenuList className="nav-links nav-links-desktop gap-10">
        {menu.map((block) => {
          if (block.blockType === "subMenu") {
            return (
              <NavigationMenuItem key={block.id}>
                <NavigationMenuTrigger aria-haspopup="true">
                  {block.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {block.links && (
                    <ul
                      role="menu"
                      aria-label={`${block.label} Menu`}
                      className="nav-links nav-links-desktop grid gap-3"
                    >
                      {block.links.map((link) => (
                        <li key={link.id} role="none">
                          <MenuLink link={link}>{link.label}</MenuLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          if (block.blockType === "link") {
            return (
              <NavigationMenuItem key={block.id}>
                <MenuLink link={block as LinkFields}>{block.label}</MenuLink>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
