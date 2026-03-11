"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function AuthDialog({
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
      <DialogContent className="max-w-md">{children}</DialogContent>
    </Dialog>
  );
}
