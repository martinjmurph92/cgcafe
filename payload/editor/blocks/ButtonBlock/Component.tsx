import type { ButtonBlock as ButtonBlockProps } from "@/payload-types";

import { cn } from "@/lib/classnames";
import { ButtonIcon, buttonVariants } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export function ButtonBlock({ variant, align, ...link }: ButtonBlockProps) {
  const className = buttonVariants({ variant });

  return (
    <div
      className={cn(
        "not-last:mb-4 md:not-last:mb-6",
        align === "left" && "text-left",
        align === "center" && "text-center",
        align === "right" && "text-right"
      )}
    >
      <Link link={link} className={className}>
        {link.label}
        <ButtonIcon />
      </Link>
    </div>
  );
}
