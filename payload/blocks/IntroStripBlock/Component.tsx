import React from "react";
import type { IntroStripBlock as IntroStripBlockProps } from "@/payload-types";

import { cn } from "@/lib/classnames";

const lgCols: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

export function IntroStripBlock({ items, settings }: IntroStripBlockProps) {
  if (!items?.length) return null;

  const n = items.length;

  return (
    <section
      id={settings?.anchor || undefined}
      className={cn(
        settings.py === "none" && "my-0",
        settings.py === "small" && "my-4 md:my-6",
        settings.py === "medium" && "my-8 md:my-12",
        settings.py === "large" && "my-12 md:my-24",
        "bg-charcoal-2 border-t border-b border-gold/15 py-8 md:py-12"
      )}
    >
      <div className="container px-4">
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8",
            lgCols[n] ?? "lg:grid-cols-4"
          )}
        >
          {items.map((item, i) => (
            <div
              key={item.id ?? i}
              className={cn(
                "flex flex-col items-center gap-1.5 text-center",
                "max-sm:[&:not(:first-child)]:border-t max-sm:[&:not(:first-child)]:border-gold/20 max-sm:[&:not(:first-child)]:pt-6",
                "sm:max-lg:[&:nth-child(2n)]:border-l sm:max-lg:[&:nth-child(2n)]:border-gold/20 sm:max-lg:[&:nth-child(2n)]:pl-6",
                "lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-gold/20 lg:[&:not(:first-child)]:pl-8"
              )}
            >
              <span className="text-2xl leading-none">{item.icon}</span>
              <span className="cgcafe-label">{item.label}</span>
              <p
                className="text-sm text-cream-muted"
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
