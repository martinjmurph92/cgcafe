import { getPayloadClient } from "./payload";

export async function getAdminEmailRecipients() {
  const payload = await getPayloadClient();

  // Get email recipients
  const admins = await payload.find({
    collection: "admins",
    pagination: false,
    where: { "preferences.emails": { equals: true } },
    select: { email: true },
  });

  // Map to just email addresses
  const recipients = admins.docs.map((a) => a.email).filter(Boolean);

  return recipients;
}
