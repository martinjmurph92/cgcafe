import { ForgotPassword } from "@/components/auth/forgot-password";
import { SiteLayout } from "@/components/layout/site-layout";

export default function Page() {
  return (
    <SiteLayout>
      <div className="container max-w-md py-8">
        <ForgotPassword />
      </div>
    </SiteLayout>
  );
}
