import type { MediaTextBlock as MediaTextBlockProps } from "@/payload-types";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import { cn } from "@/lib/classnames";
import { Media } from "@/components/media";
import { RichText } from "@/components/rich-text";

import { MediaTextCta } from "./MediaTextCta";

function formatTitle(title: string) {
  const words = title.trim().split(/\s+/);
  return words.length > 1 ? (
    <>{words.slice(0, -1).join(" ")} <em className="italic text-[#e2c27a]">{words.at(-1)}</em></>
  ) : (
    title
  );
}

export function MediaTextBlock({
  media,
  label,
  title,
  richText,
  link,
  stats,
  settings,
}: MediaTextBlockProps) {
  const reverse = settings?.reverse as boolean | undefined;
  const safeStats = stats ?? [];
  const paddingClasses =
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
      className={cn("bg-charcoal-2", paddingClasses)}
    >
      <div
        className={cn(
          "container px-4 grid gap-12 md:gap-16 lg:gap-24 items-center md:grid-cols-2",
          reverse && "md:[&>:first-child]:order-last"
        )}
      >
        <div className="relative rounded-[var(--radius-lg)] overflow-hidden media-frame group">
        <div
          className="absolute inset-[-1px] rounded-[var(--radius-lg)] border border-gold/25 z-[2] pointer-events-none"
          aria-hidden
        />
        <div className="corner-ornament tl absolute top-3 left-3 w-[30px] h-[30px] border-t-2 border-l-2 border-gold opacity-50 z-[3]" aria-hidden />
        <div className="corner-ornament br absolute bottom-3 right-3 w-[30px] h-[30px] border-b-2 border-r-2 border-gold opacity-50 z-[3]" aria-hidden />
        <Media resource={media} size="card" className="rounded-[var(--radius-lg)]" />
      </div>

      <div className={cn("media-text-content", reverse && "md:order-first")}>
        {label && (
          <span className="block mb-4 text-[0.72rem] font-bold tracking-[0.2em] uppercase text-gold [font-family:var(--font-sans),sans-serif]">
            {label}
          </span>
        )}
        {title && (
          <h2 className="text-cream mb-5 text-[2rem] md:text-[2.5rem]">
            {formatTitle(title)}
          </h2>
        )}
        {richText && (
          <RichText
            data={richText as SerializedEditorState}
            className="min-w-0 [&_.cgcafe-label]:block [&_.cgcafe-label]:mb-4 [&_h2]:mb-5 [&_h2]:text-cream [&_p]:text-cream-muted [&_p]:font-[family-name:var(--font-sans)] [&_p]:leading-relaxed [&_p]:mb-4 [&_p:last-of-type]:mb-0"
          />
        )}
        {link?.label && (
          <div className="mt-6">
            <MediaTextCta link={link as any} />
          </div>
        )}
        {safeStats.length > 0 && (
          <div
            className="flex flex-wrap gap-10 pt-6 mt-8 border-t border-gold/15"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            {safeStats.map((stat, i) => (
              <div key={stat.id ?? i}>
                <div className="text-[2.2rem] text-gold leading-none">
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-[0.1em] text-cream-muted mt-1"
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
