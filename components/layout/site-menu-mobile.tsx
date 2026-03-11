"use client";

import { useEffect, useRef, useState } from "react";
import { LinkBlock, SubMenuBlock } from "@/payload-types";
import { ChevronDownIcon, Menu, X } from "lucide-react";
import { useCollapse } from "react-collapsed";
import { RemoveScroll } from "react-remove-scroll";

import { LinkFields } from "@/payload/fields/link";
import { useActiveSection } from "@/components/layout/active-section-context";
import { Button } from "@/components/ui/button";
import { Link, useLinkField } from "@/components/ui/link";
import { cn } from "@/lib/classnames";

function getAnchorFromHref(href: string): string | null {
  if (typeof href !== "string" || !href.includes("#")) return null;
  return href.split("#")[1] ?? null;
}

export function SiteMenuMobile({
  menu,
}: {
  menu: (LinkBlock | SubMenuBlock)[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    isExpanded: isOpen,
  });

  const toggleProps = getToggleProps({
    onClick: () => setIsOpen((prev) => !prev),
  });
  const menuListRef = useRef<HTMLUListElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("100dvh");

  // Calculate the max height when expanded
  useEffect(() => {
    if (isExpanded && menuListRef.current) {
      const top = menuListRef.current.getBoundingClientRect().top;
      setMaxHeight(`calc(100dvh - ${top}px)`);
    }
  }, [isExpanded]);

  return (
    <nav className="ml-auto lg:hidden mr-2">
      <Button
        size="icon"
        shape="square"
        variant="ghost"
        aria-label="Site Menu"
        noIcon
        className="text-accent-light"
        {...toggleProps}
      >
        {isExpanded ? <X /> : <Menu />}
      </Button>

      <div
        {...getCollapseProps({
          style: {
            background:
              "linear-gradient(to bottom, rgba(26,26,23,0.97) 0%, rgba(26,26,23,0.85) 100%)",
          },
        })}
        className="absolute top-full left-0 right-0 w-full border-b border-gold/15 backdrop-blur-[12px] overflow-hidden"
      >
        <RemoveScroll enabled={isExpanded}>
          <ul
            ref={menuListRef}
            className="nav-links nav-links-mobile space-y-4 overflow-y-auto p-4"
            style={{
              maxHeight,
            }}
            suppressHydrationWarning
          >
            {menu.map((block) => {
              if (block.blockType === "subMenu") {
                return (
                  <li key={block.id}>
                    <MobileSubMenu label={block.label} links={block.links} />
                  </li>
                );
              }

              if (block.blockType === "link") {
                return (
                  <li key={block.id}>
                    <MobileNavLink link={block as LinkFields}>
                      {block.label}
                    </MobileNavLink>
                  </li>
                );
              }
            })}
          </ul>
        </RemoveScroll>
      </div>
    </nav>
  );
}

function MobileNavLink({
  link,
  children,
}: {
  link: LinkFields;
  children: React.ReactNode;
}) {
  const { linkProps } = useLinkField(link);
  const activeSectionId = useActiveSection();
  const anchor = linkProps
    ? getAnchorFromHref(linkProps.href as string)
    : null;
  const isSectionActive =
    anchor && activeSectionId && activeSectionId === anchor;

  if (!linkProps) return null;

  return (
    <Link
      link={link}
      className={cn(
        "block no-underline focus-visible:outline-accent-light aria-[current=page]:text-gold",
        isSectionActive && "nav-link-active"
      )}
    >
      {children}
    </Link>
  );
}

function MobileSubMenu({
  label,
  links,
}: Pick<SubMenuBlock, "label" | "links">) {
  const { getCollapseProps, getToggleProps } = useCollapse();

  return (
    <>
      <button
        type="button"
        className="flex w-full items-center justify-start gap-1 no-underline focus-visible:outline-accent-light data-[state=open]:text-gold"
        {...getToggleProps()}
      >
        {label}
        <ChevronDownIcon className="mt-px size-5" aria-hidden="true" />
      </button>

      {links && (
        <div {...getCollapseProps()}>
          <ul
            role="menu"
            aria-label={`${label} Menu`}
            className="nav-links nav-links-mobile grid gap-3 p-4 pb-0"
          >
            {links.map((link) => (
              <li key={link.id} role="none">
                <MobileNavLink link={link}>{link.label}</MobileNavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
