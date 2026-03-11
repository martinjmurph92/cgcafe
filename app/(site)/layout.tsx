import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Dancing_Script,
  Lato,
  Playfair_Display,
} from "next/font/google";

import { cn } from "@/lib/classnames";
import { buildMetadata } from "@/lib/metadata";

import "./globals.css";

import { getSettings } from "@/actions/global";

import { isMedia } from "@/lib/type-guards";
import * as Integrations from "@/components/integrations";
import Providers from "@/components/providers";

const fontDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const fontBody = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const fontSans = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const fontScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  if (!settings) return {};

  const faviconURL = isMedia(settings.general.favicon)
    ? settings.general.favicon.url
    : undefined;

  const metadata = buildMetadata({
    title: settings.seo.title,
    description: settings.seo.description,
    image: settings.seo.image,
  });

  metadata.title = {
    default: settings.seo.title,
    template: `%s ${settings.seo.titleSeparator} ${settings.seo.title}`,
  };

  if (faviconURL) {
    metadata.icons = [
      {
        url: faviconURL,
        sizes: "any",
        type: "image/png",
      },
    ];
  }

  return metadata;
}

export default function RootLayout({
  children,
  dialog,
}: Readonly<{
  children: React.ReactNode;
  dialog: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <Integrations.Head />
      </head>

      <body
        suppressHydrationWarning
        className={cn(
          fontDisplay.variable,
          fontBody.variable,
          fontSans.variable,
          fontScript.variable,
          "cgcafe-body cgcafe-grain cgcafe-scrollbar flex min-h-dvh flex-col bg-charcoal text-cream antialiased"
        )}
      >
        <Integrations.BodyOpen />
        <Providers>
          {children}
          {dialog}
        </Providers>
        <Integrations.BodyClose />
      </body>
    </html>
  );
}
