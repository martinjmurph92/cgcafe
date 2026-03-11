"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { investorLogout } from "@/actions/investors";
import { Loader2, LogOut } from "lucide-react";

import { Button, ButtonIcon } from "@/components/ui/button";

export function Logout() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      await investorLogout();

      router.push("/");
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <Button
        type="submit"
        size="icon"
        disabled={isPending}
        className="text-accent-light lg:hidden"
        shape="square"
        variant="ghost"
        aria-label="Logout"
        noIcon
      >
        {isPending ? <Loader2 className="animate-spin" /> : <LogOut />}
      </Button>

      <Button
        type="submit"
        disabled={isPending}
        noIcon
        className="max-lg:hidden"
      >
        Logout{" "}
        {isPending ? <Loader2 className="animate-spin" /> : <ButtonIcon />}
      </Button>
    </form>
  );
}
