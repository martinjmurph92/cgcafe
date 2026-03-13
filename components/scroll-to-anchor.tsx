"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const SCROLL_TO_ANCHOR_KEY = "scrollToAnchor";

/**
 * After each route change, checks sessionStorage for a scroll target set by
 * cross-page anchor links. Scrolls to the element and clears the stored value
 * so the URL stays hash-free.
 */
export function ScrollToAnchor() {
  const pathname = usePathname();

  useEffect(() => {
    const anchorId = sessionStorage.getItem(SCROLL_TO_ANCHOR_KEY);
    if (!anchorId) return;
    sessionStorage.removeItem(SCROLL_TO_ANCHOR_KEY);

    // Use requestAnimationFrame to ensure DOM is ready after navigation
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(anchorId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
