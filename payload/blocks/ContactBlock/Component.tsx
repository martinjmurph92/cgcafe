import type { ContactBlock as ContactBlockProps } from "@/payload-types";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import { cn } from "@/lib/classnames";
import { RichText } from "@/components/rich-text";

import { ContactForm } from "./ContactForm";

export function ContactBlock({
  label,
  title,
  richText,
  details,
  settings,
}: ContactBlockProps) {
  const safeDetails = details ?? [];

  const spacingClasses =
    settings?.py === "none"
      ? "py-0"
      : settings?.py === "small"
        ? "py-4 md:py-6"
        : settings?.py === "medium"
          ? "py-8 md:py-12"
          : settings?.py === "large"
            ? "py-12 md:py-24"
            : "py-12 md:py-24";

  return (
    <section
      id={settings?.anchor ?? "contact"}
      className={cn(spacingClasses, "bg-charcoal-2")}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="contact-info">
            {label && (
              <span className="cgcafe-label block mb-4">{label}</span>
            )}
            {title && (
              <h2 className="text-cream text-2xl md:text-3xl mb-6 [&_br]:block">
                {title}
              </h2>
            )}
            {richText && (
              <RichText
                data={richText as SerializedEditorState}
                className="min-w-0 [&_.cgcafe-label]:block [&_.cgcafe-label]:mb-4 [&_h2]:mb-5 [&_h2]:text-cream [&_p]:text-cream-muted [&_p]:font-[family-name:var(--font-sans)] [&_p]:leading-relaxed [&_p]:mb-4 [&_p:last-of-type]:mb-0"
              />
            )}
            {safeDetails.length > 0 && (
              <div className="flex flex-col gap-5 mt-10">
                {safeDetails.map((d, i) => (
                  <div key={d.id ?? i} className="flex gap-4">
                    <div
                      className="w-10 h-10 border border-gold/25 rounded flex items-center justify-center text-base flex-shrink-0 bg-gold/5"
                      aria-hidden
                    >
                      {d.icon ?? "📍"}
                    </div>
                    <div>
                      <strong
                        className="block text-xs uppercase tracking-[0.1em] text-gold font-bold mb-1"
                        style={{ fontFamily: "var(--font-sans), sans-serif" }}
                      >
                        {d.label}
                      </strong>
                      <span
                        className="text-sm text-cream-muted"
                        style={{ fontFamily: "var(--font-sans), sans-serif" }}
                      >
                        {d.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="contact-form-wrap bg-charcoal border border-gold/10 rounded-[var(--radius-lg)] p-8 md:p-10">
            <div
              className="text-cream text-xl md:text-2xl mb-7"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Send a message
            </div>
            <div className="cgcafe-contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
