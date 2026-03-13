"use client";

import { cn } from "@/lib/classnames";

const iconProps = {
  stroke: "currentColor",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const CG_ICONS = {
  coffee: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path strokeWidth={1.4} d="M8 4 C8 2.5 9.5 2.5 9.5 1" opacity="0.5" />
      <path strokeWidth={1.4} d="M12 4.5 C12 3 13.5 3 13.5 1.5" opacity="0.5" />
      <path strokeWidth={1.5} d="M5 7 H19 L17.2 18 H6.8 Z" />
      <path strokeWidth={1.5} d="M19 9.5 C21.5 9.5 21.5 14.5 19 14.5" />
      <path strokeWidth={1.5} d="M3 20 Q12 21.5 21 20" />
    </svg>
  ),
  breakfast: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <circle strokeWidth={1.5} cx="12" cy="13" r="9" />
      <ellipse strokeWidth={1.3} cx="9" cy="11.5" rx="2.8" ry="2" />
      <circle cx="9" cy="11.5" r="1" fill="currentColor" opacity="0.7" />
      <path strokeWidth={1.5} d="M13.5 10 Q15.5 8.5 16.5 10.5 Q17.5 12.5 15.5 13.5" />
      <path strokeWidth={1.3} d="M11 15 Q13 14 14.5 15.5 Q16 17 14 17.5" />
      <circle cx="9.5" cy="15.5" r="0.7" fill="currentColor" opacity="0.6" />
      <circle cx="11" cy="16.5" r="0.7" fill="currentColor" opacity="0.6" />
      <circle cx="8.2" cy="16.8" r="0.7" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  cake: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <line strokeWidth={1.4} x1="12" y1="3" x2="12" y2="6" />
      <path d="M12 2 C11.2 2.8 11 3.5 12 4 C13 3.5 12.8 2.8 12 2Z" fill="currentColor" opacity="0.8" />
      <rect strokeWidth={1.5} x="7" y="7" width="10" height="5" rx="0.5" />
      <rect strokeWidth={1.5} x="4" y="12" width="16" height="6" rx="0.5" />
      <path strokeWidth={1.5} d="M2 18 H22" />
    </svg>
  ),
  sandwich: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path strokeWidth={1.5} d="M3 9 Q3 4 12 4 Q21 4 21 9 L21 10 H3 Z" />
      <path strokeWidth={1.3} d="M3 10 Q6 12 9 10 Q12 8 15 10 Q18 12 21 10" opacity="0.6" />
      <path strokeWidth={1.3} d="M3 13 Q7 11.5 12 13 Q17 14.5 21 13" opacity="0.6" />
      <path strokeWidth={1.5} d="M3 13 H21 L21 15 Q21 17 12 17 Q3 17 3 15 Z" />
      <circle cx="10" cy="6.5" r="0.5" fill="currentColor" opacity="0.5" />
      <circle cx="13" cy="5.8" r="0.5" fill="currentColor" opacity="0.5" />
      <circle cx="16" cy="6.8" r="0.5" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  dine: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <line strokeWidth={1.4} x1="5" y1="3" x2="5" y2="10" />
      <path strokeWidth={1.4} d="M3 3 Q3 6 5 7 Q7 6 7 3" />
      <line strokeWidth={1.4} x1="5" y1="10" x2="5" y2="21" />
      <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.5" />
      <path strokeWidth={1.5} d="M15 7 H21 L20 20 Q20 21 17.5 21 Q15 21 15 20 Z" />
      <path strokeWidth={1.5} d="M14 7 Q17.5 5.5 22 7" />
      <line strokeWidth={1.3} x1="19" y1="5" x2="17.5" y2="14" opacity="0.6" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path strokeWidth={1.5} d="M12 2 L14.5 8.5 L21.5 9 L16.5 13.5 L18 21 L12 17.5 L6 21 L7.5 13.5 L2.5 9 L9.5 8.5 Z" />
    </svg>
  ),
  vegetarian: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path strokeWidth={1.5} d="M12 21 C12 21 4 16 4 9 C4 5 7.5 2 12 2 C16.5 2 20 5 20 9 C20 16 12 21 12 21 Z" />
      <line strokeWidth={1.3} x1="12" y1="20" x2="12" y2="5" opacity="0.5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path strokeWidth={1.5} d="M6.5 2 H10 L11.5 6.5 L9 8 C9.5 10.5 13.5 14.5 16 15 L17.5 12.5 L22 14 V17.5 C22 19 20 21 17.5 21 C10 21 3 14 3 6.5 C3 4 5 2 6.5 2 Z" />
      <path strokeWidth={1.2} d="M15 3 Q19 3 21 7" opacity="0.5" />
      <path strokeWidth={1.2} d="M15 6 Q17.5 6 19 8.5" opacity="0.4" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path strokeWidth={1.5} d="M12 2 C8.1 2 5 5.1 5 9 C5 14.25 12 22 12 22 C12 22 19 14.25 19 9 C19 5.1 15.9 2 12 2 Z" />
      <circle strokeWidth={1.3} cx="12" cy="9" r="2.8" />
      <circle cx="12" cy="9" r="1" fill="currentColor" opacity="0.7" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <circle strokeWidth={1.5} cx="12" cy="12" r="9.5" />
      <line strokeWidth={1.5} x1="12" y1="3.5" x2="12" y2="5.5" />
      <line strokeWidth={1.5} x1="12" y1="18.5" x2="12" y2="20.5" />
      <line strokeWidth={1.5} x1="2.5" y1="12" x2="4.5" y2="12" />
      <line strokeWidth={1.5} x1="19.5" y1="12" x2="21.5" y2="12" />
      <line strokeWidth={1.8} x1="12" y1="12" x2="8.5" y2="7.5" strokeLinecap="round" />
      <line strokeWidth={1.4} x1="12" y1="12" x2="16" y2="9" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  ),
  funfact: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path strokeWidth={1.5} d="M9 18 H15 M9.5 21 H14.5" />
      <path strokeWidth={1.5} d="M8 13 C5.5 11.5 5 8.5 6.5 6 C8 3.5 11 2.5 13.5 3.5 C16 4.5 17.5 7 17 9.5 C16.5 11.5 15 12.5 14 13.5 C13.5 14 13 14.5 13 15 H11 C11 14.5 10.5 14 10 13.5 C9.5 13 8.5 13 8 13 Z" />
      <path strokeWidth={1} d="M10.5 15 L10.5 11 Q12 9.5 13.5 11 L13.5 15" opacity="0.4" />
      <line strokeWidth={1.2} x1="18.5" y1="4" x2="20" y2="3" opacity="0.4" />
      <line strokeWidth={1.2} x1="19.5" y1="7" x2="21.5" y2="7" opacity="0.4" />
      <line strokeWidth={1.2} x1="4.5" y1="5" x2="3" y2="4" opacity="0.4" />
      <line strokeWidth={1.2} x1="3.5" y1="9" x2="1.5" y2="9" opacity="0.4" />
    </svg>
  ),
} as const;

export type CgIconName = keyof typeof CG_ICONS;

type CgIconProps = {
  name: CgIconName;
  size?: 12 | 16 | 20 | 24 | 40;
  className?: string;
};

export function CgIcon({ name, size = 24, className }: CgIconProps) {
  const icon = CG_ICONS[name];
  if (!icon) return null;

  return (
    <span
      aria-hidden
      className={cn("inline-flex shrink-0 text-gold", className)}
      style={{ width: size, height: size }}
    >
      {icon}
    </span>
  );
}
