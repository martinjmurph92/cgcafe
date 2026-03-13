"use client";

import type { LinkFields } from "@/payload/fields/link";

import { Link } from "@/components/ui/link";

export function HeaderCta({ link }: { link: LinkFields }) {
  return (
    <Link
      link={link}
      className="nav-cta inline-flex bg-transparent border border-gold text-gold py-2.5 px-6 text-xs uppercase tracking-[0.15em] font-normal rounded transition-all duration-300 hover:bg-gold hover:text-charcoal no-underline hover:no-underline"
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
    >
      {link.label}
    </Link>
  );
}
