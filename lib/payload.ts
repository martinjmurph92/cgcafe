import configPromise from "@payload-config";
import { getPayload } from "payload";

/**
 * Returns an initialized Payload instance.
 */
export async function getPayloadClient() {
  const payload = await getPayload({ config: configPromise });

  return payload;
}
