import Link from "next/link";
import { getSettings } from "@/actions/global";

import { isMedia } from "@/lib/type-guards";
import { SiteMenu } from "@/components/layout/site-menu";
import { MediaImage } from "@/components/media-image";

import { HeaderCta } from "./header-cta";

export async function SiteHeader() {
  const settings = await getSettings();

  const logo = settings?.general.logo;
  const ctaLink = settings?.header?.ctaLink;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between px-4 md:px-8 lg:px-16 border-b border-gold/15 backdrop-blur-[12px] transition-all duration-300"
      style={{
        background:
          "linear-gradient(to bottom, rgba(26,26,23,0.97) 0%, rgba(26,26,23,0.85) 100%)",
      }}
    >
      <Link
        href="/"
        className="nav-logo flex items-center gap-2.5 text-gold text-2xl tracking-[0.05em] shrink-0"
        style={{ fontFamily: "var(--font-display), serif" }}
      >
        {isMedia(logo) ? (
          <MediaImage
            resource={logo}
            priority
            className="w-auto max-w-[60px]"
          />
        ) : (
          <>
            <svg
              className="cup-icon h-7 w-7 opacity-90 shrink-0"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M8 16h20l-2.5 14H10.5L8 16z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M28 19h4a3 3 0 0 1 0 6h-4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M6 32h24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            CG Café
          </>
        )}
      </Link>

      <SiteMenu />

      <div className="flex items-center shrink-0">
        {ctaLink?.label && <HeaderCta link={ctaLink as any} />}
      </div>
    </nav>
  );
}
