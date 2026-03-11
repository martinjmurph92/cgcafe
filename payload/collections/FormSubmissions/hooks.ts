import type { FormSubmission } from "@/payload-types";
import type { CollectionAfterChangeHook } from "payload";
import { render } from "@react-email/render";

import { ContactFormNotificationEmail } from "@/emails/contact-form-notification";
import { getAdminEmailRecipients } from "@/lib/emails";
import { getSettings } from "@/actions/global";
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
  if (operation !== "create") return doc;

  const settings = await getSettings();
  const logo = settings?.general?.logo;
  const logoUrl = getLogoUrl(logo);
  const siteName =
    (settings?.seo?.title as string)?.replace(/\s*[-|–].*$/, "") || "CG Café";

  const html = await render(
    ContactFormNotificationEmail({
      name: doc.name,
      email: doc.email,
      phone: doc.phone ?? null,
      message: doc.message ?? null,
      logoUrl,
      siteName,
    })
  );

  const recipients = await getAdminEmailRecipients();

  if (!recipients.length) return doc;

  await Promise.allSettled(
    recipients.map((recipient) =>
      payload.sendEmail({
        to: recipient,
        subject: "Website Contact Form Submission",
        html,
      })
    )
  );

  return doc;
};
