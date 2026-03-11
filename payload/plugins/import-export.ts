import { importExportPlugin } from "@payloadcms/plugin-import-export";
import { Plugin } from "payload";

export const importExport: Plugin = importExportPlugin({
  collections: ["pages", "posts"],
  debug: process.env.NODE_ENV === "development",
});
