"use client";

import { Link, useLinkField, type LinkProps } from "@/components/ui/link";
import { useActiveSection } from "@/components/layout/active-section-context";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/classnames";

function getAnchorFromHref(href: string): string | null {
  if (typeof href !== "string" || !href.includes("#")) return null;
  return href.split("#")[1] ?? null;
}

export function MenuLink({ link, className, ...props }: LinkProps) {
  const { linkProps, isActive } = useLinkField(link);
  const activeSectionId = useActiveSection();

  if (!linkProps) return null;

  const anchor = getAnchorFromHref(linkProps.href as string);
  const isSectionActive =
    anchor && activeSectionId && activeSectionId === anchor;

  return (
    <NavigationMenuLink asChild active={isActive(linkProps.href)}>
      <Link
        link={link}
        className={cn(className, isSectionActive && "nav-link-active")}
        {...props}
      />
    </NavigationMenuLink>
  );
}
