import { seoPlugin } from "@payloadcms/plugin-seo";
import {
  GenerateDescription,
  GenerateTitle,
  GenerateURL,
} from "@payloadcms/plugin-seo/types";
import { Plugin } from "payload";

import { getServerSideURL } from "@/lib/url";

const generateTitle: GenerateTitle<any> = ({ doc }) => {
  return doc?.title ? `${doc.title}` : "";
};

const generateDescription: GenerateDescription<any> = ({ doc }) => {
  return doc?.summary ? `${doc.summary}` : "";
};

const generateURL: GenerateURL<any> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const seo: Plugin = seoPlugin({
  uploadsCollection: "media",
  generateTitle,
  generateURL,
  generateDescription,
});
