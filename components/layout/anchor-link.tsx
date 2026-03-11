"use client";

import * as React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

type AnchorLinkProps = React.ComponentProps<typeof NextLink> & {
  href: string;
};

export function AnchorLink({ href, onClick, className, ...props }: AnchorLinkProps) {
  const pathname = usePathname();
  const hashPart = href.includes("#") ? href.split("#")[1] : null;
  const isSamePageAnchor =
    hashPart &&
    (href.startsWith("#") || pathname + "#" + hashPart === href);

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isSamePageAnchor) {
        const target = document.getElementById(hashPart!);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      onClick?.(e);
    },
    [hashPart, isSamePageAnchor, onClick]
  );

  return (
    <NextLink
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    />
  );
}
