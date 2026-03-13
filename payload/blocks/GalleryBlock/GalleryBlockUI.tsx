"use client";

import { useState, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/classnames";
import { Media } from "@/components/media";
import { isMedia } from "@/lib/type-guards";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Media as MediaType } from "@/payload-types";

type GalleryImage = {
  id?: string | null;
  image: number | MediaType;
};

function getFullSizeUrl(img: MediaType): string {
  return img.sizes?.large?.url || img.url || "";
}

export function GalleryBlockUI({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = openIndex !== null;
  const currentImg =
    openIndex !== null ? images[openIndex]?.image : undefined;
  const mediaImg = currentImg && isMedia(currentImg) ? currentImg : null;

  const goTo = useCallback(
    (dir: number) => {
      if (openIndex === null) return;
      const next = (openIndex + dir + images.length) % images.length;
      setOpenIndex(next);
    },
    [openIndex, images.length]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowLeft") goTo(-1);
      if (e.key === "ArrowRight") goTo(1);
    },
    [open, goTo]
  );

  return (
    <>
      <div
        className="cgcafe-slider flex lg:grid lg:grid-cols-4 gap-3 mt-12 overflow-x-scroll lg:overflow-visible snap-x snap-mandatory lg:snap-none lg:mx-0 lg:px-0 pb-2 lg:pb-0 min-w-0 min-h-[180px] lg:min-h-0 lg:auto-rows-[180px] [&>*:nth-child(1)]:lg:col-span-2 [&>*:nth-child(5)]:lg:col-span-2"
        style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      >
        {images.map((item, i) => {
          const img = item.image;
          if (!isMedia(img)) return null;

          const spanTwo = i === 0 || i === 4 ? "lg:col-span-2" : "";

          return (
            <button
              key={item.id ?? i}
              type="button"
              onClick={() => setOpenIndex(i)}
              className={cn(
                "gallery-item flex-shrink-0 w-[70vw] min-w-[200px] lg:w-auto lg:min-w-0 snap-start h-[180px] group relative flex items-center justify-center overflow-hidden rounded border border-gold/10 bg-gradient-to-br from-charcoal-3 to-gold/5 text-4xl text-gold/20 transition-all duration-300 hover:border-gold/30",
                spanTwo
              )}
            >
              <Media
                resource={img}
                size="card"
                fill
                sizes="(max-width: 1024px) 70vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gold/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center text-gold">
                  +
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent
          showCloseButton={true}
          className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 gap-0 overflow-hidden bg-transparent border-0 shadow-none [&_[data-slot=dialog-close]]:text-white [&_[data-slot=dialog-close]]:bg-black/50 [&_[data-slot=dialog-close]]:hover:bg-black/70 [&_[data-slot=dialog-close]]:top-2 [&_[data-slot=dialog-close]]:right-2"
          onKeyDown={handleKeyDown}
        >
          <DialogTitle className="sr-only">
            View image {openIndex !== null ? openIndex + 1 : 0} of {images.length}
          </DialogTitle>
          {mediaImg && (
            <div className="relative flex items-center justify-center">
              {/* Prev button */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() => goTo(-1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="size-6" />
                </button>
              )}

              <img
                src={getFullSizeUrl(mediaImg)}
                alt={mediaImg.alt || ""}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              />

              {/* Next button */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="size-6" />
                </button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
