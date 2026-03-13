"use client";

import * as React from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { LinkFields } from "@/payload/fields/link";
import { SCROLL_TO_ANCHOR_KEY } from "@/components/scroll-to-anchor";
import { getDocumentPath } from "@/lib/routing";
import { isDocument, isMedia } from "@/lib/type-guards";

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "href"> & {
  link: LinkFields;
};

function Link({ link, onClick, ...props }: LinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { linkProps } = useLinkField(link);

  const hashPart =
    linkProps && typeof linkProps.href === "string" && linkProps.href.includes("#")
      ? linkProps.href.split("#")[1]
      : null;
  const hrefStr = linkProps && typeof linkProps.href === "string" ? linkProps.href : null;
  const isSamePageAnchor =
    hrefStr &&
    hashPart &&
    (hrefStr.startsWith("#") || pathname + "#" + hashPart === hrefStr);
  const isCrossPageAnchor =
    hrefStr &&
    hashPart &&
    linkProps &&
    linkProps.Comp === NextLink &&
    !isSamePageAnchor &&
    (hrefStr.startsWith("/") || hrefStr.startsWith("#"));

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isSamePageAnchor && linkProps) {
        e.preventDefault();
        const href = linkProps.href as string;
        const hash = href.split("#")[1];
        const target = hash ? document.getElementById(hash) : null;
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      } else if (isCrossPageAnchor && linkProps) {
        const href = linkProps.href as string;
        const [path, hash] = href.split("#");
        const targetPath = (path || "/").trim();
        if (targetPath.startsWith("/")) {
          e.preventDefault();
          sessionStorage.setItem(SCROLL_TO_ANCHOR_KEY, hash);
          router.push(targetPath);
        }
      }
      onClick?.(e as React.MouseEvent<HTMLAnchorElement>);
    },
    [linkProps, isSamePageAnchor, isCrossPageAnchor, router, onClick]
  );

  if (!linkProps) return null;

  const { Comp, href, ...rest } = linkProps;

  return <Comp {...rest} href={href} onClick={handleClick} {...props} />;
}

function useLinkField(link: LinkFields) {
  const pathname = usePathname();
  const { linkType, label, customLink, internalLink, newTab } = link;

  // Check if link is active
  const isActive = React.useCallback(
    (href: string) => {
      if (href === "/" && pathname === "/") return true;
      if (href !== "/" && pathname.startsWith(href)) return true;
      return false;
    },
    [pathname]
  );

  // Generate link props
  const linkProps = React.useMemo(() => {
    if (linkType === "custom") {
      if (!customLink) return null;

      const isInternal = customLink.startsWith("/");
      const href = customLink;

      return {
        Comp: isInternal ? NextLink : "a",
        href,
        target: newTab ? "_blank" : undefined,
        rel: newTab ? "noopener noreferrer" : undefined,
        "aria-label": newTab ? `${label} (opens in new tab)` : undefined,
        "aria-current": isActive(href) ? ("page" as const) : undefined,
      };
    }

    if (isMedia(internalLink?.value)) {
      const href = internalLink.value.url;

      return {
        Comp: NextLink,
        href,
        target: newTab ? "_blank" : undefined,
        rel: newTab ? "noopener noreferrer" : undefined,
        "aria-label": newTab ? `${label} (opens in new tab)` : undefined,
      };
    }

    if (!isDocument(internalLink?.value)) return null;

    const collection = internalLink.relationTo;
    const slug = internalLink.value.slug;
    const href = getDocumentPath(collection, slug);

    return {
      Comp: NextLink,
      href,
      target: newTab ? "_blank" : undefined,
      rel: newTab ? "noopener noreferrer" : undefined,
      "aria-label": newTab ? `${label} (opens in new tab)` : undefined,
      "aria-current": isActive(href) ? ("page" as const) : undefined,
    };
  }, [linkType, label, customLink, internalLink, newTab, isActive]);

  return {
    linkProps,
    isActive,
  };
}

export { type LinkProps, Link, useLinkField };
