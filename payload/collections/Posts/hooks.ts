import { createRevalidateOnChangeHook } from "@/payload/hooks/revalidate/onChange";
import { createRevalidateOnDeleteHook } from "@/payload/hooks/revalidate/onDelete";

export const revalidatePostOnChange = createRevalidateOnChangeHook("posts");

export const revalidatePostOnDelete = createRevalidateOnDeleteHook("posts");
