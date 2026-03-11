import { unstable_cache } from "next/cache";
import { draftMode } from "next/headers";
import { Config } from "@/payload-types";

import { getPayloadClient } from "@/lib/payload";

type GlobalSlug = keyof Config["globals"];

type GlobalOptions = {
  depth?: number;
  draft?: boolean;
};

export async function getGlobal<K extends GlobalSlug>(
  slug: K,
  options: GlobalOptions = {}
): Promise<Config["globals"][K] | null> {
  const payload = await getPayloadClient();

  const { draft = false, depth = 1 } = options;

  const result = await payload.findGlobal({
    slug,
    depth,
    draft,
  });

  if (
    !draft &&
    result &&
    "_status" in result &&
    (result as { _status?: string })._status !== "published"
  ) {
    return null;
  }

  return result;
}

export function getCachedGlobal<K extends GlobalSlug>(
  slug: K,
  options: Omit<GlobalOptions, "draft"> = {}
): Promise<Config["globals"][K] | null> {
  const { depth = 1 } = options;

  return unstable_cache(
    () => getGlobal(slug, options),
    ["global", slug, `depth:${depth}`],
    {
      tags: [slug],
    }
  )();
}

export async function getSettings() {
  const { isEnabled: draft } = await draftMode();

  const settings = draft
    ? await getGlobal("settings", { draft })
    : await getCachedGlobal("settings");

  return settings;
}
