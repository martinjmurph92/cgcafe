import { draftMode } from "next/headers";
import { getCurrentAdmin } from "@/actions/admin";
import { Config } from "@/payload-types";

import { cn } from "@/lib/classnames";
import { AdminBar } from "@/components/admin-bar";
import { ActiveSectionProvider } from "@/components/layout/active-section-context";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type Collection = Config["collections"][keyof Config["collections"]];

export async function SiteLayout({
  children,
  doc,
  className,
}: {
  children: React.ReactNode;
  doc?: Collection;
  className?: string;
}) {
  const { isEnabled: draft } = await draftMode();

  const admin = await getCurrentAdmin();

  return (
    <ActiveSectionProvider>
      {doc && admin?.preferences?.adminBar && (
        <AdminBar preview={draft} id={String(doc.id)} />
      )}

      <SiteHeader />

      <main className={cn("flex-1 pt-[72px]", className)}>{children}</main>

      <SiteFooter />
    </ActiveSectionProvider>
  );
}
