import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

/**
 * Defines type-safe environment variables for the application.
 *
 * @example
 * ```ts
 * import { env } from "@/config/env";
 * // Type-safe environment variable
 * const databaseUrl = env.DATABASE_URL;
 * ```
 *
 * @see {@link https://env.t3.gg/docs/nextjs}
 */
export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1, "DATABASE_URL must be set"),
    PAYLOAD_SECRET: z.string(),
    PREVIEW_SECRET: z.string(),
    EMAIL_FROM_NAME: z.string(),
    EMAIL_FROM_ADDRESS: z.string(),
    SMTP_HOST: z.string(),
    SMTP_PORT: z.string(),
    SMTP_USER: z.string().optional(),
    SMTP_PASS: z.string().optional(),
    UPLOAD_FILE_SIZE_LIMIT: z.string(),
  },
  client: {
    NEXT_PUBLIC_SERVER_URL: z.url().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
});
