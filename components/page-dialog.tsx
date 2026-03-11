"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function PageDialog({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogTitle className="sr-only">{title}</DialogTitle>
      <DialogContent className="max-w-7xl px-4 py-8 max-xs:text-sm xs:p-8 md:p-12 max-xs:[&_h1]:mr-6">
        {children}
      </DialogContent>
    </Dialog>
  );
}
