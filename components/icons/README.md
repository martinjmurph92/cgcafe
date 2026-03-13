# CG Cafe Icons

Custom illustrated icons used across the site. Source: `flat_html/cg-cafe-icons.html`.

## Usage

```tsx
import { CgIcon } from "@/components/icons";

<CgIcon name="coffee" />
<CgIcon name="location" size={20} />
<CgIcon name="phone" size={40} className="text-cream" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `CgIconName` | — | Icon identifier (see list below) |
| `size` | `16 \| 20 \| 24 \| 40` | `24` | Width and height in pixels |
| `className` | `string` | — | Additional Tailwind classes (e.g. for color) |

## Available Icons

- `coffee` — Coffee / drinks  
- `breakfast` — Full English / breakfast  
- `cake` — Cakes / desserts  
- `sandwich` — Sandwiches / paninis  
- `dine` — Dine in / takeaway  
- `star` — Reviews / ratings  
- `vegetarian` — Vegetarian options  
- `phone` — Phone contact  
- `location` — Address / map marker  
- `clock` — Opening hours  
- `funfact` — Fun facts / team quirks  

Defaults to `text-gold`; override with `className` (e.g. `text-cream`, `text-cream-muted`).
