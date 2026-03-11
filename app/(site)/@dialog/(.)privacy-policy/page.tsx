import { getDocument } from "@/actions/document";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import { PageDialog } from "@/components/page-dialog";
import { RichText } from "@/components/rich-text";

export default async function PrivacyPolicyDialog() {
  const page = await getDocument("pages", "privacy-policy");

  if (!page) return null;

  const content = page.blocks?.find((block) => block.blockType === "content");

  if (!content) return null;

  return (
    <PageDialog title={page.title}>
      <RichText data={content.richText as SerializedEditorState} />
    </PageDialog>
  );
}
