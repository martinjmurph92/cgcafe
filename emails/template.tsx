import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { getServerSideURL } from "@/lib/url";

export function EmailTemplate({
  title,
  preview,
  children,
}: {
  title: string;
  preview: string;
  children: React.ReactNode;
}) {
  const SITE_URL = getServerSideURL();

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>{title}</title>

        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body style={{ backgroundColor: "#f8fafc", padding: 16 }}>
        <Preview>{preview}</Preview>
        <Container
          style={{
            maxWidth: 600,
            width: "100%",
            color: "#1e293b",
            backgroundColor: "#ffffff",
          }}
        >
          <Section
            style={{
              padding: 16,
              backgroundColor: "#2563eb",
              color: "#ffffff",
            }}
          >
            <Img
              src={`${SITE_URL}/site-logo.png`}
              alt="CG Cafe"
              width={150}
              height={80}
              style={{ display: "block", margin: "0 auto" }}
            />
          </Section>

          <Section style={{ padding: 32 }}>{children}</Section>

          <Section
            style={{
              padding: 8,
              backgroundColor: "#2563eb",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            <Text style={{ fontSize: "16px" }}>© CG Cafe</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
