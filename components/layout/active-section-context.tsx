"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

const ActiveSectionContext = React.createContext<string | null>(null);

export function useActiveSection() {
  return React.useContext(ActiveSectionContext);
}

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeSectionId, setActiveSectionId] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    const HEADER_BOTTOM = 72;
    const TOLERANCE = 20;

    const updateActiveSection = () => {
      const sections = document.querySelectorAll("main [id]");
      let best: { id: string; top: number } | null = null;
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (
          rect.top <= HEADER_BOTTOM + TOLERANCE &&
          rect.bottom > HEADER_BOTTOM - TOLERANCE
        ) {
          if (!best || rect.top > best.top) {
            best = { id: el.id, top: rect.top };
          }
        }
      }
      setActiveSectionId(best?.id ?? null);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  return (
    <ActiveSectionContext.Provider value={activeSectionId}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
