import { Plugin } from "payload";

import { importExport } from "./import-export";
import { redirects } from "./redirects";
import { seo } from "./seo";

export const plugins: Plugin[] = [importExport, redirects, seo];
