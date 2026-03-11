import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/classnames";

const alertVariants = cva("w-full rounded-lg px-3 py-3", {
  variants: {
    variant: {
      default: "bg-primary/10 text-primary",
      destructive: "bg-red-100 text-red-600",
      success: "bg-green-100 text-green-600",
      info: "bg-blue-100 text-blue-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Alert };
