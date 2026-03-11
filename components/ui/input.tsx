import * as React from "react";

import { cn } from "@/lib/classnames";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex w-full rounded-xl border border-primary bg-white p-3 text-base transition-colors placeholder:text-body/70 sm:text-sm",
        "focus-visible:ring focus-visible:ring-primary focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive",
        className
      )}
      {...props}
    />
  );
}

function FileInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="w-full min-w-0">
      <input
        type="file"
        data-slot="file-input"
        className={cn(
          "w-full rounded-xl focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none",
          "file:inline-flex file:cursor-pointer file:rounded-lg file:bg-accent file:px-6 file:py-3 file:text-base file:font-medium file:text-secondary",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input, FileInput };
