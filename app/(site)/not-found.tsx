import { ButtonLink } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/site-layout";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="container space-y-4 py-4 sm:space-y-8 sm:py-8 md:space-y-12 md:py-12">
        <header>
          <h1 className="text-primary">Page Not Found</h1>
        </header>

        <p>The page you're looking for doesn't exist.</p>

        <ButtonLink href="/">Go Home</ButtonLink>
      </div>
    </SiteLayout>
  );
}
