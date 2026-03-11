import { revalidatePath, revalidateTag } from "next/cache";
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from "payload";

export function revalidateSite(
  args: Parameters<CollectionAfterChangeHook>[0]
): ReturnType<CollectionAfterChangeHook>;

export function revalidateSite(
  args: Parameters<CollectionAfterDeleteHook>[0]
): ReturnType<CollectionAfterDeleteHook>;

export function revalidateSite(
  args: Parameters<GlobalAfterChangeHook>[0]
): ReturnType<GlobalAfterChangeHook>;

// Implementation
export function revalidateSite({ doc, req: { payload } }: any) {
  payload.logger.info(`Revalidating entire site`);

  revalidateTag("site");
  revalidatePath("/", "layout");

  return doc;
}
