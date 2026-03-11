import { cookies } from "next/headers";
import { Admin } from "@/payload-types";

import { getServerSideURL } from "@/lib/url";

export async function getCurrentAdmin(): Promise<Admin | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("payload-token")?.value;

  if (!token) return null;

  const SITE_URL = getServerSideURL();

  try {
    const response = await fetch(`${SITE_URL}/api/admins/me`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) return null;

    const data = await response.json();

    return data.user ?? null;
  } catch (error) {
    console.error("Failed to fetch current user:", error);

    return null;
  }
}
