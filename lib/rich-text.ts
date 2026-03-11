import type {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";

/**
 * Recursively extracts plain text from a serialized Lexical editor state.
 *
 * @param data - The SerializedEditorState object
 */
export function extractPlainTextFromLexical(
  data: SerializedEditorState | undefined | null
): string {
  if (!data || !data.root || !Array.isArray(data.root.children)) return "";

  const texts: string[] = [];

  const traverse = (nodes: SerializedLexicalNode[]) => {
    for (const node of nodes) {
      if ("text" in node && typeof node.text === "string") {
        texts.push(node.text);
      }
      if ("children" in node && Array.isArray(node.children)) {
        traverse(node.children);
      }
    }
  };

  traverse(data.root.children);

  return texts.join(" ").trim();
}
