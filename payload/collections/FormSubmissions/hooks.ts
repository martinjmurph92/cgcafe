import type { FormSubmission } from "@/payload-types";
import type { CollectionAfterChangeHook } from "payload";
import { render } from "@react-email/render";

import { ContactFormNotificationEmail } from "@/emails/contact-form-notification";
import { getServerSideURL } from "@/lib/url";
import { isMedia } from "@/lib/type-guards";

function getLogoUrl(logo: unknown): string | null {
  if (!isMedia(logo) || !logo.url) return null;
  const url = logo.url;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = getServerSideURL();
  return base ? `${base.replace(/\/$/, "")}${url.startsWith("/") ? "" : "/"}${url}` : null;
}

export const sendEmail: CollectionAfterChangeHook<FormSubmission> = async ({
  doc,
  operation,
  req: { payload },
}) => {
  try {
  console.log("[contact-form] sendEmail hook called, operation:", operation);

  if (operation !== "create") return doc;

  const settings = await payload.findGlobal({
    slug: "settings",
    depth: 2,
    draft: false,
  });
  const logo = settings?.general?.logo;
  const logoUrl = getLogoUrl(logo);
  const siteName =
    (settings?.seo?.title as string)?.replace(/\s*[-|–].*$/, "") || "CG Café";

  const html = await render(
    ContactFormNotificationEmail({
      name: doc.name ?? "",
      email: doc.email ?? "",
      phone: doc.phone ?? null,
      message: doc.message ?? null,
      logoUrl,
      siteName,
    })
  );

  const config = await payload.findGlobal({ slug: "config", depth: 0 });
  const emailTo = (config as { email?: { emailTo?: string; subject?: string } })
    ?.email?.emailTo;
  const recipients = emailTo
    ? emailTo
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean)
    : [];

  console.log("[contact-form] config.email.emailTo:", emailTo, "→ recipients:", recipients);

  if (!recipients.length) {
    console.warn("[contact-form] No recipients configured in Config → Emails. Skipping email.");
    return doc;
  }

  const subject =
    (config as { email?: { subject?: string } })?.email?.subject ||
    "Website Contact Form Submission";

  const results = await Promise.allSettled(
    recipients.map((recipient) =>
      payload.sendEmail({
        to: recipient,
        subject,
        html,
      })
    )
  );

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`[contact-form] Email sent to ${recipients[i]}:`, result.value);
    } else {
      console.error(`[contact-form] Email failed for ${recipients[i]}:`, result.reason);
    }
  });

  return doc;
  } catch (err) {
    console.error("[contact-form] sendEmail hook error:", err);
    throw err;
  }
};
