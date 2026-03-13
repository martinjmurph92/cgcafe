"use client";

import { ThemeProvider } from "next-themes";

import { ScrollToAnchor } from "@/components/scroll-to-anchor";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} forcedTheme="light">
      <ScrollToAnchor />
      {children}
    </ThemeProvider>
  );
}
