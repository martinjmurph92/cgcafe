"use client";

import { useRouter } from "next/navigation";
import { PayloadAdminBar, PayloadAdminBarProps } from "@payloadcms/admin-bar";

import { getServerSideURL } from "@/lib/url";

export function AdminBar(props: PayloadAdminBarProps) {
  const SITE_URL = getServerSideURL();

  const router = useRouter();

  return (
    <PayloadAdminBar
      {...props}
      cmsURL={SITE_URL}
      authCollectionSlug="admins"
      collectionSlug="pages"
      onPreviewExit={() => {
        fetch("/next/exit-preview").then(() => {
          router.refresh();
        });
      }}
      unstyled
      className="relative w-full gap-4 bg-black px-4 py-2 text-sm font-medium text-white sm:flex sm:items-center"
      classNames={{
        logo: "hidden",
        user: "max-sm:inline-block max-sm:align-middle max-sm:w-[calc(100%-3rem)]",
        controls:
          "max-sm:inline-flex max-sm:mt-1 max-sm:max-w-[calc(100%-4rem)] max-sm:items-center gap-4 sm:flex sm:ml-auto",
        logout: "max-sm:inline-block max-sm:w-12 max-sm:ml-4",
      }}
    />
  );
}
