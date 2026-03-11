import { ContentBlock } from "@/payload-types";
import { Field } from "payload";

import { cn } from "@/lib/classnames";

export function configField(
  defaults?: {
    backgroundColor?: "none" | "white" | "light" | "primary" | "secondary";
    py?: "none" | "small" | "medium" | "large";
    width?: "full" | "wide" | "container" | "narrow";
  },
  extraFields: Field[] = []
): Field {
  return {
    label: "Settings",
    type: "collapsible",
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        label: false,
        type: "group",
        name: "settings",
        fields: [
          {
            label: "Width",
            name: "width",
            type: "select",
            required: true,
            defaultValue: defaults?.width || "container",
            options: [
              { label: "Container", value: "container" },
              { label: "Full Width", value: "full" },
              { label: "Wide", value: "wide" },
              { label: "Narrow", value: "narrow" },
            ],
          },
          {
            label: "Background Color",
            name: "backgroundColor",
            type: "select",
            required: true,
            defaultValue: defaults?.backgroundColor || "none",
            options: [
              { label: "None", value: "none" },
              { label: "White", value: "white" },
              { label: "Light / Cream", value: "light" },
              { label: "Gold (Primary)", value: "primary" },
              { label: "Charcoal", value: "secondary" },
              { label: "Charcoal 2", value: "charcoal2" },
              { label: "Charcoal 3", value: "charcoal3" },
            ],
          },
          {
            label: "Padding Top & Bottom",
            name: "py",
            type: "select",
            required: true,
            defaultValue: defaults?.py || "medium",
            options: [
              { label: "None", value: "none" },
              { label: "Small (24px)", value: "small" },
              { label: "Medium (48px)", value: "medium" },
              { label: "Large (96px)", value: "large" },
            ],
          },
          {
            label: "Anchor",
            name: "anchor",
            type: "text",
            required: false,
            admin: {
              description:
                "The anchor for the container. This will be used to link to the container.",
            },
          },
          ...extraFields,
        ],
      },
    ],
  };
}

export function Container({
  settings,
  children,
  className,
  containerClassName,
  ...props
}: React.ComponentProps<"div"> & {
  settings: ContentBlock["settings"];
  containerClassName?: string;
}) {
  return (
    <div
      id={settings.anchor || undefined}
      data-slot="container"
      data-width={settings.width}
      data-padding={settings.py}
      data-background-color={settings.backgroundColor}
      className={cn(
        containerClassName,
        settings.py === "small" && "py-4 md:py-6",
        settings.py === "medium" && "py-8 md:py-12",
        settings.py === "large" && "py-12 md:py-24",
        settings.backgroundColor === "primary" && "bg-gold text-charcoal",
        settings.backgroundColor === "secondary" && "bg-charcoal text-cream",
        settings.backgroundColor === "charcoal2" && "bg-charcoal-2 text-cream",
        settings.backgroundColor === "charcoal3" && "bg-charcoal-3 text-cream",
        settings.backgroundColor === "light" && "bg-cream text-charcoal",
        settings.backgroundColor === "white" && "bg-white text-charcoal"
      )}
      {...props}
    >
      <div
        className={cn(
          settings.width === "full" && "w-full px-4",
          settings.width === "wide" && "container max-w-360",
          settings.width === "container" && "container",
          settings.width === "narrow" && "container max-w-228",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
