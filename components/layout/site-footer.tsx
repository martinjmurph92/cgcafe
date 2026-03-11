import Link from "next/link";
import { getMenuItemsGroupedByCategory } from "@/actions/menu-items";
import { getSettings } from "@/actions/global";
import { filterMenuByAccess } from "@/lib/access";

import { isMedia } from "@/lib/type-guards";
import { MediaImage } from "@/components/media-image";

import { FooterMenuCategories } from "./footer-menu-categories";
import { FooterNavLinks } from "./footer-nav-links";

export async function SiteFooter() {
  const [settings, categories] = await Promise.all([
    getSettings(),
    getMenuItemsGroupedByCategory(),
  ]);

  const logo = settings?.general.logo;
  const footer = settings?.footer;
  const established = footer?.established as string | undefined;
  const tagline = footer?.tagline as string | undefined;
  const facebook = footer?.facebook as string | undefined;
  const instagram = footer?.instagram as string | undefined;
  const linkedin = settings?.socials?.linkedin as string | undefined;
  const navMenu = settings?.header?.menu
    ? await filterMenuByAccess(settings.header.menu)
    : [];

  return (
    <footer className="bg-[#111110] pt-16 pb-8 border-t border-gold/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left items-center md:items-start">
          <div className="footer-brand lg:col-span-2 flex flex-col items-center md:items-start">
            {isMedia(logo) ? (
              <Link href="/" className="footer-logo block mb-1">
                <MediaImage
                  resource={logo}
                  className="w-auto max-w-[70px] mb-2"
                />
              </Link>
            ) : (
              <div
                className="footer-logo text-3xl text-gold mb-1"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                CG Café
              </div>
            )}
            {established && (
              <div
                className="text-xs uppercase tracking-[0.2em] text-cream-muted opacity-50 mb-5"
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              >
                {established}
              </div>
            )}
            {tagline && (
              <p
                className="text-sm text-cream-muted opacity-70 leading-relaxed max-w-[260px]"
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              >
                {tagline}
              </p>
            )}
            <div className="flex gap-3 mt-6">
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn w-9 h-9 border border-gold/20 rounded flex items-center justify-center text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal hover:border-gold no-underline hover:no-underline"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  f
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn w-9 h-9 border border-gold/20 rounded flex items-center justify-center text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal hover:border-gold no-underline hover:no-underline"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  in
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn w-9 h-9 border border-gold/20 rounded flex items-center justify-center text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal hover:border-gold no-underline hover:no-underline"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4
              className="text-xs uppercase tracking-[0.2em] text-gold mb-5"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              Menu
            </h4>
            <FooterMenuCategories categories={categories} />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4
              className="text-xs uppercase tracking-[0.2em] text-gold mb-5"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              Site Navigation
            </h4>
            {navMenu.length > 0 ? (
              <FooterNavLinks menu={navMenu} />
            ) : null}
          </div>
        </div>

        <div className="border-t border-gold/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p
            suppressHydrationWarning
            className="text-xs text-cream-muted opacity-40"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            © {new Date().getFullYear()} CG Café. All rights reserved.
          </p>
          <div className="flex items-center gap-2 opacity-30">
            <span className="w-7 h-px bg-gold" aria-hidden />
            <div
              className="w-1 h-1 rounded-full bg-gold shrink-0"
              aria-hidden
            />
            <span className="w-7 h-px bg-gold" aria-hidden />
          </div>
          <p
            className="text-xs text-cream-muted opacity-40"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            Designed &amp; Developed by <a href="https://www.mjmdev.co.uk">MJM Dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
