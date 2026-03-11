"use client";

import type { LinkBlock, SubMenuBlock } from "@/payload-types";

import { Link } from "@/components/ui/link";

export function FooterNavLinks({
  menu,
}: {
  menu: (LinkBlock | SubMenuBlock)[];
}) {
  const links: { label: string; link: LinkBlock }[] = [];

  for (const block of menu) {
    if (block.blockType === "link") {
      links.push({ label: block.label, link: block as LinkBlock });
    } else if (block.blockType === "subMenu" && (block as SubMenuBlock).links) {
      for (const sub of (block as SubMenuBlock).links ?? []) {
        links.push({ label: sub.label, link: sub });
      }
    }
  }

  const linkClass =
    "text-sm text-cream-muted opacity-65 transition-opacity hover:opacity-100 hover:text-gold no-underline";
  const linkStyle = { fontFamily: "var(--font-sans), sans-serif" };

  return (
    <ul className="list-none flex flex-col gap-2">
      {links.map((item) => (
        <li key={item.link.id}>
          <Link
            link={item.link}
            className={linkClass}
            style={linkStyle}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
