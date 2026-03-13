import path from "path";
import { fileURLToPath } from "url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import sharp from "sharp";

import { env } from "@/config/env";

import { Admins, collections } from "./payload/collections";
import { editor } from "./payload/editor";
import { email } from "./payload/email";
import { globals } from "./payload/globals";
import { plugins } from "./payload/plugins";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Admins.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      collections: ["pages", "posts"],
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections,
  globals,
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
    },
    push: true,
  }),
  editor: editor(),
  email,
  i18n: {
    fallbackLanguage: "en",
  },
  plugins: plugins,
  secret: env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  upload: {
    limits: {
      fileSize: parseInt(env.UPLOAD_FILE_SIZE_LIMIT),
    },
  },
});
