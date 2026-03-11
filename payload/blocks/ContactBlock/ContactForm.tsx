"use client";

import { useState } from "react";
import { submitForm } from "@/actions/form-submissions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { contactFormSchema } from "@/lib/schemas";
import { Button, ButtonIcon } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState<boolean>(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      await submitForm(values);

      setSent(true);
    } catch (error) {
      console.error(error);

      setSent(false);
    }
  }

  if (sent) return <Sent />;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 md:space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:content-['_*']">Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:content-['_*']">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:content-['_*']">
                Phone number
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:content-['_*']">
                Please write your message
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="default"
          disabled={form.formState.isSubmitting}
          noIcon
        >
          Submit
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            <ButtonIcon />
          )}
        </Button>
      </form>
    </Form>
  );
}

function Sent() {
  return (
    <div
      role="alert"
      className="rounded-lg border border-gold/20 bg-gold/5 px-6 py-5"
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
    >
      <p className="text-sm uppercase tracking-[0.12em] text-gold font-medium mb-2">
        Message Sent
      </p>
      <p className="text-cream-muted text-sm leading-relaxed">
        Thank you for your message. We will get back to you as soon as possible.
      </p>
    </div>
  );
}
