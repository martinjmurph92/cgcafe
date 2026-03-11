import * as React from "react";
import Link, { LinkProps } from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { MoveRight } from "lucide-react";

import { cn } from "@/lib/classnames";

const buttonVariants = cva(
  "inline-flex items-center justify-between gap-2 whitespace-nowrap text-base font-medium disabled:pointer-events-none no-underline [&_svg:not([class*='size-'])]:size-6 shrink-0 [&_svg]:shrink-0 no-underline active:scale-98 scale-100 transition-[transform,color,background-color,border-color]",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-secondary focus-visible:outline-accent hover:bg-primary-light",
        outline: "border border-current bg-transparent hover:text-accent",
        link: "text-accent underline-offset-4 hover:underline focus-visible:outline-current",
        ghost: "text-accent hover:bg-accent/20 focus-visible:outline-accent",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-2 py-2",
        lg: "px-4 py-4",
        icon: "size-12 justify-center",
      },
      shape: {
        pill: "rounded-full",
        square: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "pill",
    },
    compoundVariants: [
      {
        variant: "link",
        size: ["default", "sm", "lg"],
        className: "p-0! rounded-none! focus-visible:outline-offset-4",
      },
    ],
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  noIcon?: boolean;
}

function Button({
  className,
  variant,
  size,
  shape,
  asChild = false,
  noIcon = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, shape, className }))}
      {...props}
    >
      {props.children}
      {!noIcon && <ButtonIcon />}
    </Comp>
  );
}

function ButtonLink({
  className,
  variant,
  size,
  shape,
  noIcon = false,
  ...props
}: LinkProps & Omit<ButtonProps, "asChild">) {
  return (
    <Link
      href={props.href}
      className={cn(buttonVariants({ variant, size, shape, className }))}
    >
      {props.children}
      {!noIcon && <ButtonIcon />}
    </Link>
  );
}

function ButtonIcon(props: React.ComponentProps<"svg">) {
  return <MoveRight {...props} />;
}

export { Button, ButtonLink, ButtonIcon, buttonVariants };
