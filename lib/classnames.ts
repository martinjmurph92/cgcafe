import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Extend tailwind-merge to recognize custom typography classes
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
});

/**
 * Merges class names conditionally using `clsx` and then combines them with `tailwind-merge` to resolve Tailwind CSS class conflicts.
 *
 * Useful for dynamically constructing className strings in React components, especially when using Tailwind CSS.
 *
 * @see {@link https://ui.shadcn.com/docs/installation/manual#add-a-cn-helper}
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
