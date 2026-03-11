"use client";

import React, { useEffect, useState } from "react";
import type { MenuBlock as MenuBlockProps } from "@/payload-types";

import type { MenuCategoryGroup } from "@/actions/menu-items";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function badgeWithEmoji(badge: string): string {
  const lower = badge.toLowerCase();
  if (lower.includes("most popular") || lower === "popular") return `⭐ ${badge}`;
  if (lower.includes("vegetarian")) return `🌿 ${badge}`;
  return badge;
}

type MenuBlockUIProps = {
  heading?: MenuBlockProps["heading"] | null;
  categories: MenuCategoryGroup[];
  settings: MenuBlockProps["settings"];
};

export function MenuBlockUI({
  heading,
  categories,
  settings,
}: MenuBlockUIProps) {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = categories[activeTab];

  useEffect(() => {
    const handler = (e: CustomEvent<{ index: number }>) => {
      const index = e.detail?.index ?? 0;
      if (index >= 0 && index < categories.length) {
        setActiveTab(index);
      }
    };
    window.addEventListener(
      "menu-select-category",
      handler as EventListener
    );
    return () =>
      window.removeEventListener(
        "menu-select-category",
        handler as EventListener
      );
  }, [categories.length]);

  if (!categories.length) return null;

  const paddingClasses =
    settings.py === "none"
      ? "py-0"
      : settings.py === "small"
        ? "py-4 md:py-6"
        : settings.py === "medium"
          ? "py-8 md:py-12"
          : settings.py === "large"
            ? "py-12 md:py-24"
            : "py-8 md:py-12";

  return (
    <section
      id={settings?.anchor ?? undefined}
      className={`menu-section ${paddingClasses}`}
    >
      <div className="container px-4">
        <div className="text-center mb-10">
          {heading?.label && (
            <span className="cgcafe-label block mb-4">{heading.label}</span>
          )}
          {heading?.title && (
            <h2 className="text-cream mb-5 text-[2rem] md:text-[2.5rem]">
              {heading.title}
            </h2>
          )}
          <span className="gold-rule block mb-5" />
          {heading?.description && (
            <p
              className="text-cream-muted max-w-[500px] mx-auto mt-5 text-base"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              {heading.description}
            </p>
          )}
        </div>

        <div className="mb-12 flex justify-center">
          {/* Mobile: dropdown */}
          <div className="w-full max-w-[280px] md:hidden">
            <Select
              value={String(activeTab)}
              onValueChange={(v) => setActiveTab(Number(v))}
            >
              <SelectTrigger
                className="w-full border-gold/30 bg-charcoal-2 text-cream focus:ring-gold data-[placeholder]:text-cream-muted [&_svg]:text-gold"
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              >
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="border-gold/20 bg-charcoal-2">
                {categories.map((cat, i) => (
                  <SelectItem
                    key={cat.id}
                    value={String(i)}
                    className="text-cream focus:bg-charcoal-3 focus:text-cream data-[highlighted]:bg-charcoal-3 [&_span_svg]:text-gold"
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
                  >
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop: tab buttons */}
          <div
            className="hidden md:flex flex-wrap justify-center gap-0 mx-auto w-fit overflow-hidden rounded border border-gold/20"
            role="tablist"
          >
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                className={`menu-tab px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border-r border-gold/20 last:border-r-0 ${
                  activeTab === i
                    ? "bg-gold text-charcoal"
                    : "bg-transparent text-cream-muted hover:bg-gold hover:text-charcoal"
                }`}
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {activeCategory?.items?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 rounded-lg overflow-hidden border border-gold/10">
            {activeCategory.items.map((item, j) => (
              <div
                key={item.id ?? j}
                className="menu-item bg-charcoal-2 p-6 md:p-8 transition-all duration-300 hover:bg-charcoal-3 relative"
              >
                <div className="flex justify-between items-baseline gap-4 mb-1">
                  <span
                    className="text-cream text-base md:text-lg"
                    style={{ fontFamily: "var(--font-display), serif" }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="text-gold text-sm font-bold whitespace-nowrap"
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
                  >
                    {item.price.startsWith("£") ? item.price : `£${item.price}`}
                  </span>
                </div>
                {item.description && (
                  <p
                    className="text-sm text-cream-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
                  >
                    {item.description}
                  </p>
                )}
                {item.badge && (
                  <span
                    className="inline-block mt-2 text-[0.62rem] uppercase tracking-[0.1em] font-bold px-2 py-0.5 bg-gold/15 text-gold rounded-[2px]"
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
                  >
                    {badgeWithEmoji(item.badge)}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
