import type { TestimonialsBlock as TestimonialsBlockProps } from "@/payload-types";

import { cn } from "@/lib/classnames";

export function TestimonialsBlock({
  label,
  title,
  items,
  settings,
}: TestimonialsBlockProps) {
  const safeItems = items ?? [];
  if (!safeItems.length) return null;

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
      className={cn(spacingClasses, "bg-charcoal")}
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

        <div
          className="cgcafe-slider flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-scroll md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0 min-w-0"
          style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >
          {safeItems.map((item, i) => (
            <div
              key={item.id ?? i}
              className="testimonial-card flex-shrink-0 w-[85vw] max-w-[340px] md:w-auto md:max-w-none snap-start bg-charcoal-2 rounded-lg p-8 border border-gold/10 relative"
            >
              <span
                className="absolute top-4 right-6 text-[5rem] leading-none text-gold/12"
                style={{ fontFamily: "var(--font-display)" }}
                aria-hidden
              >
                {"\u201C"}
              </span>
              <div className="text-gold text-sm tracking-[2px] mb-4">
                {"★".repeat(item.stars ?? 5)}
              </div>
              <p
                className="text-cream-muted text-base italic leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body), serif" }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center text-gold text-lg flex-shrink-0"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  {item.authorInitial}
                </div>
                <div>
                  <div
                    className="font-bold text-sm text-cream"
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
                  >
                    {item.authorName}
                  </div>
                  {item.authorSub && (
                    <div
                      className="text-xs text-cream-muted opacity-60"
                      style={{ fontFamily: "var(--font-sans), sans-serif" }}
                    >
                      {item.authorSub}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
