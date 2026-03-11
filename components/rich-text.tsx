import React from "react";
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  SerializedTextNode,
  SerializedUploadNode,
} from "@payloadcms/richtext-lexical";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
  RichText as ConvertRichText,
  JSXConverters,
  JSXConvertersFunction,
  LinkJSXConverter,
} from "@payloadcms/richtext-lexical/react";
import { CollectionSlug } from "payload";

import { ButtonBlock } from "@/payload/editor/blocks/ButtonBlock/Component";
import { cn } from "@/lib/classnames";
import { getDocumentPath } from "@/lib/routing";
import { isMedia } from "@/lib/type-guards";
import { Media } from "@/components/media";

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<any>;

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const collection = linkNode.fields.doc?.relationTo;
  const value = linkNode.fields.doc?.value;

  if (!collection || typeof value !== "object") {
    throw new Error("Expected value to be an object");
  }

  if (isMedia(value)) {
    return value.url;
  }

  return getDocumentPath(collection as CollectionSlug, value.slug as string);
};

const IS_BOLD = 1;
const IS_ITALIC = 2;
const IS_STRIKETHROUGH = 4;
const IS_UNDERLINE = 8;
const IS_CODE = 16;
const IS_SUBSCRIPT = 32;
const IS_SUPERSCRIPT = 64;

const textConverter: JSXConverters<SerializedTextNode> = {
  text: ({ node }) => {
    let text: React.ReactNode = node.text;

    if (node.format & IS_BOLD) {
      text = <strong>{text}</strong>;
    }
    if (node.format & IS_ITALIC) {
      text = <em>{text}</em>;
    }
    if (node.format & IS_STRIKETHROUGH) {
      text = <span style={{ textDecoration: "line-through" }}>{text}</span>;
    }
    if (node.format & IS_UNDERLINE) {
      text = <span style={{ textDecoration: "underline" }}>{text}</span>;
    }
    if (node.format & IS_CODE) {
      text = <code>{text}</code>;
    }
    if (node.format & IS_SUBSCRIPT) {
      text = <sub>{text}</sub>;
    }
    if (node.format & IS_SUPERSCRIPT) {
      text = <sup>{text}</sup>;
    }
    if (node.$) {
      text = <span className={cn(Object.values(node.$))}>{text}</span>;
    }
    return text;
  },
};

const uploadConverter: JSXConverters<SerializedUploadNode> = {
  upload: ({ node }) => {
    const uploadNode = node as SerializedUploadNode;

    if (!isMedia(uploadNode.value)) return null;

    return <Media resource={uploadNode.value} size="large" />;
  },
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...uploadConverter,
  ...textConverter,
  blocks: {
    button: ({ node }) => <ButtonBlock {...node.fields} />,
  },
});

export function RichText({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  data: SerializedEditorState;
}) {
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn("rich-text", className)}
      {...props}
    />
  );
}
