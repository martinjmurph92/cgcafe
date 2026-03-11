import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

import { env } from "@/config/env";

const transportOptions: {
  host: string;
  port: number;
  auth?: { user: string; pass: string };
} = {
  host: env.SMTP_HOST,
  port: parseInt(env.SMTP_PORT, 10),
};

// Mailpit and similar local SMTP servers don't require auth
if (env.SMTP_USER && env.SMTP_PASS) {
  transportOptions.auth = { user: env.SMTP_USER, pass: env.SMTP_PASS };
}

export const email = nodemailerAdapter({
  defaultFromName: env.EMAIL_FROM_NAME,
  defaultFromAddress: env.EMAIL_FROM_ADDRESS,
  transportOptions,
  // Skip SMTP verification at startup so build succeeds when SMTP is unavailable (e.g. Mailpit not running)
  skipVerify: true,
});
