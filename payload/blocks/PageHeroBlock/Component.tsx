import type { PageHeroBlock as PageHeroBlockProps } from "@/payload-types";

import { cn } from "@/lib/classnames";
import { Media } from "@/components/media";

import { HeroLinks } from "./HeroLinks";

function formatTitle(title: string) {
  const words = title.trim().split(/\s+/);
  return words.length > 1 ? (
    <>{words.slice(0, -1).join(" ")} <em>{words.at(-1)}</em></>
  ) : (
    title
  );
}

export function PageHeroBlock({
  eyebrow,
  title,
  subtitle,
  media,
  links,
  settings,
}: PageHeroBlockProps) {
  return (
    <section
      className={cn(
        "hero flex items-center relative overflow-hidden",
        settings.py === "small" && "py-4 md:py-6",
        settings.py === "medium" && "py-8 md:py-12",
        settings.py === "large" && "py-12 md:py-24"
      )}
    >
      <div
        className="absolute right-[-10vw] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full border border-gold/10 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute right-[-6vw] top-1/2 -translate-y-1/2 w-[47vw] h-[47vw] rounded-full border border-gold/5 pointer-events-none"
        aria-hidden
      />

      <div
        className={cn(
          "w-full",
          settings.width === "full" && "px-4",
          settings.width === "wide" && "container max-w-360",
          settings.width === "container" && "container",
          settings.width === "narrow" && "container max-w-228"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="hero-content text-center md:text-left">
            {(eyebrow?.label || eyebrow?.label2) && (
              <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                {eyebrow?.label && (
                  <span className="cgcafe-label">{eyebrow.label}</span>
                )}
                {eyebrow?.label && eyebrow?.label2 && (
                  <span
                    className="w-1 h-1 rounded-full bg-gold opacity-50"
                    aria-hidden
                  />
                )}
                {eyebrow?.label2 && (
                  <span className="cgcafe-label">{eyebrow.label2}</span>
                )}
              </div>
            )}
            <h1 className="text-cream mb-4 text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] [&_em]:italic [&_em]:text-[#e2c27a]">
              {title ? formatTitle(title) : null}
            </h1>
            {subtitle && (
              <p className="text-cream-muted text-lg max-w-[420px] mb-10 font-light mx-auto md:mx-0">
                {subtitle}
              </p>
            )}
            {links && links.length > 0 && <HeroLinks links={links} />}
          </div>

          <div className="hero-image-wrap flex items-center justify-center order-first md:order-none">
            <div
              className="hero-logo-display w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[400px] lg:h-[400px] rounded-full flex items-center justify-center relative"
              style={{
                background:
                  "radial-gradient(ellipse at 40% 40%, rgba(201,168,76,0.12), rgba(201,168,76,0.03) 60%, transparent)",
              }}
            >
              <div
                className="absolute inset-[-2px] rounded-full opacity-30 animate-[spin_12s_linear_infinite]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, var(--color-gold) 30%, transparent 60%, var(--color-gold-dark) 80%, transparent 100%)",
                }}
                aria-hidden
              />
              <div className="absolute inset-[2px] rounded-full bg-charcoal" aria-hidden />
              <div className="hero-image-inner relative z-10 w-[96%] h-[96%] md:w-[88%] md:h-[88%] rounded-full overflow-hidden flex items-center justify-center [&>img]:!object-cover [&>img]:!object-center [&>img]:!min-w-full [&>img]:!min-h-full">
                <Media
                  resource={media}
                  size="hero"
                  priority
                  fetchPriority="high"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 400px"
                  className="object-cover object-center drop-shadow-[0_0_40px_rgba(201,168,76,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
