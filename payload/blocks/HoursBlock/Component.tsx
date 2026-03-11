import type { HoursBlock as HoursBlockProps } from "@/payload-types";

import { cn } from "@/lib/classnames";

function getMapEmbedUrl(address: string): string {
  const query = address.trim().replace(/\s*\n\s*/g, ", ");
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function HoursBlock({
  hoursLabel,
  hoursTitle,
  hours,
  findUsLabel,
  findUsTitle,
  address,
  phone,
  settings,
}: HoursBlockProps) {
  const safeHours = hours ?? [];
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
      className={cn(
        "hours-section bg-gradient-to-br from-charcoal-3 to-gold/5 border-t border-b border-gold/10",
        spacingClasses
      )}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-6 md:gap-12">
          <div className="text-center">
            {hoursLabel && (
              <span className="cgcafe-label block mb-4">{hoursLabel}</span>
            )}
            {hoursTitle && (
              <h3 className="text-cream mb-6 text-xl md:text-2xl">
                {hoursTitle}
              </h3>
            )}
            <ul className="flex flex-col gap-2 list-none">
              {safeHours.map((row, i) => (
                <li
                  key={row.id ?? i}
                  className="flex justify-between gap-8 text-sm text-cream-muted py-2.5 border-b border-gold/5 last:border-b-0"
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
                >
                  <span className="font-bold text-cream">{row.day}</span>
                  <span className="text-gold">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block w-px bg-gold/20 min-h-[120px]" />

          <div className="text-center">
            {findUsLabel && (
              <span className="cgcafe-label block mb-4">{findUsLabel}</span>
            )}
            {findUsTitle && (
              <h3 className="text-cream mb-4 text-xl md:text-2xl">
                {findUsTitle}
              </h3>
            )}
            <p
              className="text-cream-muted text-sm md:text-base leading-relaxed whitespace-pre-line"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              {address}
              {phone && (
                <>
                  {"\n\n"}
                  📞 {phone}
                </>
              )}
            </p>
            {address && (
              <div className="mt-6 rounded-lg overflow-hidden border border-gold/10 h-[220px]">
                <iframe
                  src={getMapEmbedUrl(address)}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
