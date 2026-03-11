import { createRevalidateOnChangeHook } from "@/payload/hooks/revalidate/onChange";
import { createRevalidateOnDeleteHook } from "@/payload/hooks/revalidate/onDelete";

export const revalidatePageOnChange = createRevalidateOnChangeHook("pages");

export const revalidatePageOnDelete = createRevalidateOnDeleteHook("pages");
