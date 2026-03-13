"use client";

import type { LinkFields } from "@/payload/fields/link";

import { Link } from "@/components/ui/link";

export function MediaTextCta({ link }: { link: LinkFields }) {
  if (!link.label) return null;
  return (
    <Link
      link={link}
      className="btn-primary no-underline hover:no-underline inline-flex items-center gap-2.5"
    >
      {link.label}
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
  );
}
