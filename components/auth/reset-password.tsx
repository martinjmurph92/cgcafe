"use client";

import { useState, useTransition } from "react";
import { investorResetPassword } from "@/actions/investors";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { resetPasswordSchema } from "@/lib/schemas";
import { Alert } from "@/components/ui/alert";
import { Button, ButtonIcon, ButtonLink } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function ResetPassword({ token }: { token: string }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      token,
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    startTransition(async () => {
      const { success, message } = await investorResetPassword(values);

      setSuccess(success);
      setError(message);
    });
  }

  const isSubmitting = form.formState.isSubmitting || isPending;

  return (
    <div className="grid gap-4">
      <h1 className="text-center text-4xl text-primary">Reset Password</h1>

      {success ? (
        <>
          <Alert variant="success" className="text-sm">
            <p className="mb-1 font-medium">Password Reset</p>
            <p>Your password has been reset successfully. You can now login.</p>
          </Alert>

          <ButtonLink href="/login">Login</ButtonLink>
        </>
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="required">New Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
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
                Reset Password
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
