"use client";

import { useState, useTransition } from "react";
import { investorForgotPassword } from "@/actions/investors";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { forgotPasswordSchema } from "@/lib/schemas";
import { Alert } from "@/components/ui/alert";
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

export function ForgotPassword() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    startTransition(async () => {
      const { success, message } = await investorForgotPassword(values);

      setSuccess(success);
      setError(message);

      if (success) {
        setSuccess(true);
      } else {
        form.setError("root", { message });
      }
    });
  }

  const isSubmitting = form.formState.isSubmitting || isPending;

  return (
    <div className="grid gap-4">
      <h1 className="text-center text-4xl text-primary">Forgot Password</h1>

      {success ? (
        <Alert variant="success" className="text-sm">
          <p className="mb-1 font-medium">Email Sent</p>
          <p>
            If an account with this email address exists, a link to reset your
            password has been sent to that address.
          </p>
        </Alert>
      ) : (
        <>
          {error && (
            <Alert variant="destructive" className="text-sm">
              <p>{error}</p>
            </Alert>
          )}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 rounded-lg border border-primary p-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="required">Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                noIcon
              >
                Forgot Password
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <ButtonIcon />
                )}
              </Button>
            </form>
          </Form>
        </>
      )}
    </div>
  );
}
