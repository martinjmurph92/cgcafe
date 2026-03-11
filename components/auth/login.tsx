"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { investorLogin } from "@/actions/investors";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { loginSchema } from "@/lib/schemas";
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

export function Login() {
  const router = useRouter();

  const [error, setError] = useState<string | undefined>(undefined);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      const { success, message } = await investorLogin(values);

      if (success) {
        router.push("/");
      } else {
        setError(message);
      }
    });
  }

  const isSubmitting = form.formState.isSubmitting || isPending;

  return (
    <div className="grid gap-4">
      <h1 className="text-center text-4xl text-primary">Login</h1>

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
                  <Input type="email" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="required">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    {...field}
                  />
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
            Login
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <ButtonIcon />
            )}
          </Button>
        </form>
      </Form>

      <div className="flex flex-col gap-2 text-center">
        <p className="text-primary">
          Don't have an account?{" "}
          <Link
            href="/"
            className="font-medium text-accent"
          >
            Sign up
          </Link>
        </p>

        <p className="text-primary">
          Forgot your password?{" "}
          <Link href="/forgot-password" className="font-medium text-accent">
            Reset your password
          </Link>
        </p>
      </div>
    </div>
  );
}
