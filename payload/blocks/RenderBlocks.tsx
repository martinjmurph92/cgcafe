import React from "react";
import { Page } from "@/payload-types";

import { ContactBlock } from "./ContactBlock/Component";
import { CtaBannerBlock } from "./CtaBannerBlock/Component";
import { ContentBlock } from "./ContentBlock/Component";
import { GalleryBlock } from "./GalleryBlock/Component";
import { HoursBlock } from "./HoursBlock/Component";
import { IntroStripBlock } from "./IntroStripBlock/Component";
import { MenuBlock } from "./MenuBlock/Component";
import { MediaTextBlock } from "./MediaTextBlock/Component";
import { PageHeroBlock } from "./PageHeroBlock/Component";
import { TeamBlock } from "./TeamBlock/Component";
import { TestimonialsBlock } from "./TestimonialsBlock/Component";
import { TextHeroBlock } from "./TextHeroBlock/Component";

type BlockType = NonNullable<Page["blocks"]>[number]["blockType"];

const BLOCKS: Record<string, React.ComponentType<any>> = {
  contact: ContactBlock,
  ctaBanner: CtaBannerBlock,
  content: ContentBlock,
  gallery: GalleryBlock,
  hours: HoursBlock,
  introStrip: IntroStripBlock,
  menu: MenuBlock,
  mediaText: MediaTextBlock,
  pageHero: PageHeroBlock,
  team: TeamBlock,
  testimonials: TestimonialsBlock,
  textHero: TextHeroBlock,
};

export function RenderBlocks({ blocks }: { blocks: Page["blocks"] }) {
  if (!blocks || !blocks.length) {
    return null;
  }

  return blocks.map((block, index) => {
    const { blockType } = block;

    if (blockType && blockType in BLOCKS) {
      const Block = BLOCKS[blockType as BlockType];

      return (
        <React.Fragment key={`block-${index}`}>
          <Block {...block} />
        </React.Fragment>
      );
    }

    return null;
  });
}
