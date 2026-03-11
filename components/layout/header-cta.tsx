"use client";

import type { LinkFields } from "@/payload/fields/link";

import { useLinkField } from "@/components/ui/link";

export function HeaderCta({ link }: { link: LinkFields }) {
  const { linkProps } = useLinkField(link);

  if (!linkProps) return null;

  const { Comp, href, ...rest } = linkProps;

  return (
    <Comp
      href={href}
      className="nav-cta inline-flex bg-transparent border border-gold text-gold py-2.5 px-6 text-xs uppercase tracking-[0.15em] font-normal rounded transition-all duration-300 hover:bg-gold hover:text-charcoal no-underline hover:no-underline"
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
      {...rest}
    >
      {link.label}
    </Comp>
  );
}
