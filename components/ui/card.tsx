import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/classnames";

function Card({
  asChild,
  className,
  ...props
}: React.ComponentProps<"article"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "article";

  return (
    <Comp
      data-slot="card"
      className={cn("group relative space-y-4", className)}
      {...props}
    />
  );
}

function CardImage({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-image"
      className={cn(
        "relative overflow-hidden rounded-lg bg-[#fafafa]",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <header
      data-slot="card-header"
      className={cn("space-y-1", className)}
      {...props}
    />
  );
}

function CardDateTime({
  dateString,
  className,
  ...props
}: React.ComponentProps<"time"> & {
  dateString: string;
}) {
  const date = new Date(dateString);

  return (
    <time
      data-slot="card-datetime"
      dateTime={date.toISOString()}
      className={cn("text-sm", className)}
      {...props}
    >
      {date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </time>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h2
      data-slot="card-title"
      className={cn(
        "text-xl leading-tight font-semibold text-primary md:text-2xl xl:text-3xl",
        // Styles based on the container
        "[[data-slot=container][data-background-color=primary]_&]:text-white",
        "[[data-slot=container][data-background-color=secondary]_&]:text-white",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("text-base", className)}
      {...props}
    />
  );
}

function CardLinkOverlay({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot="card-link-overlay"
      className={cn(
        "absolute inset-0 z-10 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardImage,
  CardHeader,
  CardDateTime,
  CardTitle,
  CardContent,
  CardLinkOverlay,
};
