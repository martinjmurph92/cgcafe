import type { ContentBlock as ContentBlockProps } from "@/payload-types";
import { Container } from "@/payload/blocks/container";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import { RichText } from "@/components/rich-text";

export function ContentBlock({ richText, settings }: ContentBlockProps) {
  return (
    <Container settings={settings}>
      <RichText data={richText as SerializedEditorState} />
    </Container>
  );
}
