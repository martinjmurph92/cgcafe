import { LogIn } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";

export function LoginButton() {
  return (
    <>
      <ButtonLink href="/login" className="max-lg:hidden">
        Login
      </ButtonLink>

      <ButtonLink
        href="/login"
        size="icon"
        className="text-accent-light lg:hidden"
        shape="square"
        variant="ghost"
        aria-label="Logout"
        noIcon
      >
        <LogIn />
      </ButtonLink>
    </>
  );
}
