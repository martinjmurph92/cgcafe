"use client";

import type { LinkFields } from "@/payload/fields/link";

import { Link } from "@/components/ui/link";

function HeroLink({
  link,
  variant,
}: {
  link: LinkFields;
  variant: "primary" | "outline";
}) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-outline";
  return (
    <Link link={link} className={baseClass}>
      {link.label}
      {variant === "primary" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden
        >
          <path d="M8 0l8 8-8 8-1.4-1.4L12.2 9H0V7h12.2L6.6 1.4z" />
        </svg>
      )}
    </Link>
  );
}

export function HeroLinks({
  links,
}: {
  links: Array<LinkFields & { id?: string | null }>;
}) {
  if (!links?.length) return null;
  return (
    <div className="flex gap-4 flex-wrap justify-center md:justify-start">
      {links.map((link, i) => (
        <HeroLink
          key={link.id ?? i}
          link={link}
          variant={i === 0 ? "primary" : "outline"}
        />
      ))}
    </div>
  );
}
