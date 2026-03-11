import { Admin } from "@/payload-types";
import type { AccessArgs } from "payload";

type isAdminOnly = (args: AccessArgs<Admin>) => boolean;

// New function - only allows admin users
export const adminOnly: isAdminOnly = ({ req: { user } }) => {
  return Boolean(user && user.collection === "admins");
};
