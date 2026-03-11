"use server";

import { cookies } from "next/headers";
import { Admin } from "@/payload-types";
import config from "@payload-config";
import { login, logout } from "@payloadcms/next/auth";
import * as z from "zod";

import {
  forgotPasswordSchema,
  loginSchema,
  resetPasswordSchema,
} from "@/lib/schemas";
import { getServerSideURL } from "@/lib/url";

export async function getInvestorSession(): Promise<Admin | null> {
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

export async function investorLogin(values: z.infer<typeof loginSchema>) {
  try {
    const result = await login({
      collection: "admins",
      config,
      ...values,
    });

    return { success: true, result };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "The email or password provided is incorrect",
    };
  }
}

export async function investorLogout() {
  await logout({ config, allSessions: true });
}

export async function investorForgotPassword(
  values: z.infer<typeof forgotPasswordSchema>
) {
  const SITE_URL = getServerSideURL();

  try {
    const response = await fetch(`${SITE_URL}/api/admins/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Failed to send reset password email.");
    }

    return { success: true };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}

export async function investorResetPassword(
  values: z.infer<typeof resetPasswordSchema>
) {
  const SITE_URL = getServerSideURL();

  try {
    const response = await fetch(`${SITE_URL}/api/admins/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Token is either invalid or has expired.");
    }

    return { success: true };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}
