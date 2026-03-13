"use client";

import * as React from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { SCROLL_TO_ANCHOR_KEY } from "@/components/scroll-to-anchor";

type AnchorLinkProps = React.ComponentProps<typeof NextLink> & {
  href: string;
};

export function AnchorLink({ href, onClick, className, ...props }: AnchorLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const hashPart = href.includes("#") ? href.split("#")[1] : null;
  const isSamePageAnchor =
    hashPart && (href.startsWith("#") || pathname + "#" + hashPart === href);
  const isCrossPageAnchor = hashPart && !isSamePageAnchor && href.startsWith("/");

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isSamePageAnchor) {
        e.preventDefault();
        const target = document.getElementById(hashPart!);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      } else if (isCrossPageAnchor) {
        e.preventDefault();
        const [path, hash] = href.split("#");
        const targetPath = (path || "/").trim();
        if (targetPath.startsWith("/")) {
          sessionStorage.setItem(SCROLL_TO_ANCHOR_KEY, hash);
          router.push(targetPath);
        }
      }
      onClick?.(e);
    },
    [hashPart, isSamePageAnchor, isCrossPageAnchor, href, router, onClick]
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
