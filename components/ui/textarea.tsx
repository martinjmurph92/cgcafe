import * as React from "react";

import { cn } from "@/lib/classnames";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-[86px] w-full rounded-xl border border-primary bg-white px-3 py-3 text-base transition-colors placeholder:text-body/70 sm:text-sm",
        "focus:ring focus:ring-primary focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
