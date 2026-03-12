import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { resendAdapter } from "@payloadcms/email-resend";

import { env } from "@/config/env";

const isProduction = process.env.NODE_ENV === "production";

console.log(
  `[email] NODE_ENV=${process.env.NODE_ENV} → using ${isProduction ? "Resend" : "Nodemailer (Mailpit)"}`
);

if (isProduction && !env.RESEND_API_KEY) {
  throw new Error(
    "RESEND_API_KEY must be set in production. Add it to your environment variables.",
  );
}

/**
 * Mailpit (local): uses SMTP to catch emails at http://localhost:8025
 * Production: uses Resend API to deliver emails
 */
export const email = isProduction
  ? resendAdapter({
      apiKey: env.RESEND_API_KEY!,
      defaultFromAddress: env.EMAIL_FROM_ADDRESS,
      defaultFromName: env.EMAIL_FROM_NAME,
    })
  : nodemailerAdapter({
      defaultFromName: env.EMAIL_FROM_NAME,
      defaultFromAddress: env.EMAIL_FROM_ADDRESS,
      transportOptions: {
        host: env.SMTP_HOST,
        port: parseInt(env.SMTP_PORT, 10),
        ...(env.SMTP_USER && env.SMTP_PASS && {
          auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
        }),
      },
      // Skip SMTP verification at startup so build succeeds when SMTP is unavailable (e.g. Mailpit not running)
      skipVerify: true,
    });
