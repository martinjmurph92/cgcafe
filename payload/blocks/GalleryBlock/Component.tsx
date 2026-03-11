import type { GalleryBlock as GalleryBlockProps } from "@/payload-types";

import { cn } from "@/lib/classnames";

import { GalleryBlockUI } from "./GalleryBlockUI";

export function GalleryBlock({
  label,
  title,
  images,
  settings,
}: GalleryBlockProps) {
  const safeImages = images ?? [];
  if (!safeImages.length) return null;

  const spacingClasses =
    settings?.py === "none"
      ? "py-0"
      : settings?.py === "small"
        ? "py-4 md:py-6"
        : settings?.py === "medium"
          ? "py-8 md:py-12"
          : settings?.py === "large"
            ? "py-12 md:py-24"
            : "py-8 md:py-12";

  return (
    <section
      id={settings?.anchor ?? undefined}
      className={cn(spacingClasses, "bg-charcoal-2")}
    >
      <div className="container">
        <div className="text-center mb-12">
          {label && (
            <span className="cgcafe-label block mb-4">{label}</span>
          )}
          {title && (
            <h2 className="text-cream mb-5 text-[2rem] md:text-[2.5rem]">
              {title}
            </h2>
          )}
          <span className="gold-rule block mt-4" />
        </div>

        <GalleryBlockUI images={safeImages.slice(0, 10)} />
      </div>
    </section>
  );
}
