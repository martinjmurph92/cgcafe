import { Login } from "@/components/auth/login";
import { SiteLayout } from "@/components/layout/site-layout";

export default function Page() {
  return (
    <SiteLayout>
      <div className="container max-w-md py-8">
        <Login />
      </div>
    </SiteLayout>
  );
}
