import type { CtaBannerBlock as CtaBannerBlockProps } from "@/payload-types";

import { Link } from "@/components/ui/link";

function formatTitle(title: string) {
  const words = title.trim().split(/\s+/);
  return words.length > 1 ? (
    <>{words.slice(0, -1).join(" ")} <em>{words.at(-1)}</em></>
  ) : (
    title
  );
}

const SPACING = {
  none: "py-0",
  small: "py-4 md:py-6",
  medium: "py-8 md:py-12",
  large: "py-12 md:py-24",
};

export function CtaBannerBlock({ label, title, description, button, settings }: CtaBannerBlockProps) {
  const py = settings?.py ?? "medium";
  const spacingClasses = SPACING[py as keyof typeof SPACING] ?? SPACING.medium;

  return (
    <section
      id={settings?.anchor ?? undefined}
      className={`${spacingClasses} bg-charcoal-2 border-t border-gold/10`}
    >
      <div className="max-w-[600px] mx-auto text-center">
        {label && <span className="cgcafe-label block mb-4">{label}</span>}
        {title && (
          <h2 className="text-cream mb-5 text-[2rem] md:text-[2.5rem] [&_em]:italic [&_em]:text-gold-light">
            {formatTitle(title)}
          </h2>
        )}
        {description && (
          <p className="font-sans text-base text-cream-muted leading-relaxed mb-10">
            {description}
          </p>
        )}
        {button && (
          <Link
            link={button as React.ComponentProps<typeof Link>["link"]}
            className="btn-primary inline-flex items-center gap-2.5"
          >
            {(button as { label?: string }).label ?? "Get in touch"}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 0l8 8-8 8-1.4-1.4L12.2 9H0V7h12.2L6.6 1.4z" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
}
