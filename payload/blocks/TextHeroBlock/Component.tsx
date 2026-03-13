import type { TextHeroBlock as TextHeroBlockProps } from "@/payload-types";
import { CgIcon } from "@/components/icons";

import { cn } from "@/lib/classnames";

function formatTitle(title: string) {
  const words = title.trim().split(/\s+/);
  return words.length > 1 ? (
    <>
      {words.slice(0, -1).join(" ")} <em>{words.at(-1)}</em>
    </>
  ) : (
    title
  );
}

export function TextHeroBlock({
  label,
  title,
  subtitle,
  settings,
}: TextHeroBlockProps) {
  return (
    <section
      id={settings?.anchor ?? undefined}
      className={cn(
        "relative overflow-hidden bg-charcoal",
        "bg-[radial-gradient(ellipse_70%_80%_at_50%_100%,rgba(201,168,76,0.07)_0%,transparent_70%)]",
        "flex items-center",
        settings?.py === "small" && "py-4 md:py-6",
        settings?.py === "medium" && "py-8 md:py-12",
        settings?.py === "large" && "py-12 md:py-24"
      )}
    >
      {/* Decorative vertical line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent -translate-x-1/2 pointer-events-none"
        aria-hidden
      />

      <div className="container relative z-10 w-full">
        <div className="text-center">
          {label && (
            <span className="cgcafe-label block mb-5">{label}</span>
          )}
          {title && (
            <h1 className="text-cream mb-4 text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] [&_em]:italic [&_em]:text-[#e2c27a]">
              {formatTitle(title)}
            </h1>
          )}
          {/* Gold rule with cup */}
          <div className="flex items-center justify-center gap-4 my-8">
            <span className="w-15 h-px bg-gold/30" aria-hidden />
            <CgIcon name="coffee" />
            <span className="w-15 h-px bg-gold/30" aria-hidden />
          </div>
          {subtitle && (
            <p
              className="font-sans text-base text-cream-muted max-w-[520px] mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
