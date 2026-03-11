"use client";

import type { MenuCategoryGroup } from "@/actions/menu-items";

import { AnchorLink } from "./anchor-link";

export function FooterMenuCategories({
  categories,
}: {
  categories: MenuCategoryGroup[];
}) {
  const handleClick = (index: number) => {
    window.dispatchEvent(
      new CustomEvent("menu-select-category", { detail: { index } })
    );
  };

  return (
    <ul className="list-none flex flex-col gap-2">
      {categories.map((cat, i) => (
        <li key={cat.id}>
          <AnchorLink
            href="/#menu"
            onClick={() => handleClick(i)}
            className="text-sm text-cream-muted opacity-65 transition-opacity hover:opacity-100 hover:text-gold no-underline"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            {cat.name}
          </AnchorLink>
        </li>
      ))}
    </ul>
  );
}
