"use server";

import * as z from "zod";

import { getPayloadClient } from "@/lib/payload";
import { contactFormSchema } from "@/lib/schemas";

export async function submitForm(values: z.infer<typeof contactFormSchema>) {
  console.log("[contact-form] submitForm called");
  const payload = await getPayloadClient();

  const submission = await payload.create({
    collection: "form-submissions",
    data: {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    },
  });

  console.log("[contact-form] Form submission created, id:", submission.id);
  return submission;
}
