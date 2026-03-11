import { Block } from "payload";

import { Contact } from "./ContactBlock/config";
import { Content } from "./ContentBlock/config";
import { Gallery } from "./GalleryBlock/config";
import { Hours } from "./HoursBlock/config";
import { IntroStrip } from "./IntroStripBlock/config";
import { Menu } from "./MenuBlock/config";
import { MediaText } from "./MediaTextBlock/config";
import { PageHero } from "./PageHeroBlock/config";
import { Testimonials } from "./TestimonialsBlock/config";

export const blocks: Block[] = [
  Contact,
  Content,
  Gallery,
  Hours,
  IntroStrip,
  Menu,
  MediaText,
  PageHero,
  Testimonials,
];
