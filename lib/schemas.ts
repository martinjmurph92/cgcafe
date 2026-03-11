import * as z from "zod";

// Auth Schemas

export const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const forgotPasswordSchema = z.object({
  email: z.email({ message: "Please enter a valid email address" }),
});

export const resetPasswordSchema = z.object({
  token: z.string(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// Form Schemas

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.email({ message: "Please enter a valid email address" }),
  phone: z.string().min(1, { message: "Please enter your phone number" }),
  message: z.string().min(1, { message: "Please enter your message" }),
});
