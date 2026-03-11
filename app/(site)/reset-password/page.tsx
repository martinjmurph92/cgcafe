import { redirect } from "next/navigation";
import { getInvestorSession } from "@/actions/investors";

import { ResetPassword } from "@/components/auth/reset-password";
import { SiteLayout } from "@/components/layout/site-layout";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  const user = await getInvestorSession();

  if (user) {
    redirect("/");
  }

  if (!token) {
    redirect("/forgot-password");
  }

  return (
    <SiteLayout>
      <div className="container max-w-md py-8">
        <ResetPassword token={token} />
      </div>
    </SiteLayout>
  );
}
