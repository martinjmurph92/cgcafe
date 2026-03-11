import {
  BlocksFeature,
  FixedToolbarFeature,
  HorizontalRuleFeature,
  lexicalEditor,
  TextStateFeature,
} from "@payloadcms/richtext-lexical";
import { Block, Config } from "payload";

import { blocks as editorBlocks } from "@/payload/editor/blocks";

export function editor(blocks: Block[] = []): Config["editor"] {
  return lexicalEditor({
    admin: { hideGutter: true },
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({ blocks: [...editorBlocks, ...blocks] }),
      FixedToolbarFeature(),
      HorizontalRuleFeature(),
      TextStateFeature({
        state: {
          color: {
            "text-primary": {
              label: "Primary",
              css: { color: "var(--color-primary)" },
            },
            "text-secondary": {
              label: "Secondary",
              css: { color: "var(--color-secondary)" },
            },
            "text-accent": {
              label: "Accent",
              css: { color: "var(--color-accent)" },
            },
            "text-tertiary": {
              label: "Tertiary",
              css: { color: "var(--color-tertiary)" },
            },
            "text-white": {
              label: "White",
              css: { color: "var(--color-white)" },
            },
          },
          size: {
            "text-sm": {
              label: "Small Font Size",
              css: { "font-size": "var(--text-sm)" },
            },
            "text-base": {
              label: "Normal Font Size",
              css: { "font-size": "var(--text-base)" },
            },
            "text-lg": {
              label: "Large Font Size",
              css: { "font-size": "var(--text-lg)" },
            },
            "text-xl": {
              label: "XL Font Size",
              css: { "font-size": "var(--text-xl)" },
            },
            "text-h1": {
              label: "H1 Font Size",
              css: { "font-size": "var(--text-h1)" },
            },
            "text-h2": {
              label: "H2 Font Size",
              css: { "font-size": "var(--text-h2)" },
            },
            "text-h3": {
              label: "H3 Font Size",
              css: { "font-size": "var(--text-h3)" },
            },
            "text-h4": {
              label: "H4 Font Size",
              css: { "font-size": "var(--text-h4)" },
            },
          },
        },
      }),
    ],
  });
}
