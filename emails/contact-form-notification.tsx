import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const GOLD = "#c9a84c";
const CHARCOAL = "#1a1a17";
const CREAM = "#f5efd8";
const CREAM_MUTED = "#8a8374";

export function ContactFormNotificationEmail({
  name,
  email,
  phone,
  message,
  logoUrl,
  siteName = "CG Café",
}: {
  name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  logoUrl?: string | null;
  siteName?: string;
}) {
  const formattedMessage = message?.replace(/\n/g, "<br>") ?? "";

  return (
    <Html lang="en">
      <Head />
      <Preview>New enquiry from {name} – {siteName}</Preview>
      <Body
        style={{
          backgroundColor: "#ebe6db",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          padding: "32px 16px",
          margin: 0,
        }}
      >
        <Container
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            backgroundColor: CREAM,
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(26, 26, 23, 0.08)",
          }}
        >
          {/* Header with logo */}
          <Section
            style={{
              padding: "36px 40px 32px",
              textAlign: "center",
              borderBottom: `1px solid ${GOLD}40`,
            }}
          >
            {logoUrl ? (
              <Img
                src={logoUrl}
                alt={siteName}
                width={80}
                height={80}
                style={{
                  display: "inline-block",
                  marginBottom: "16px",
                  maxHeight: 80,
                  objectFit: "contain",
                }}
              />
            ) : (
              <Text
                style={{
                  margin: "0 0 8px",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: GOLD,
                  letterSpacing: "0.02em",
                  fontFamily: "Georgia, serif",
                }}
              >
                {siteName}
              </Text>
            )}
            <Text
              style={{
                margin: 0,
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: GOLD,
                fontWeight: 600,
              }}
            >
              New Website Enquiry
            </Text>
          </Section>

          {/* Intro */}
          <Section style={{ padding: "28px 40px 20px" }}>
            <Text
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.65,
                color: CHARCOAL,
              }}
            >
              Someone has submitted the contact form on your website.
            </Text>
          </Section>

          {/* Details card */}
          <Section
            style={{
              margin: "0 40px 24px",
              padding: "24px",
              backgroundColor: "#fffef9",
              borderRadius: "8px",
              border: `1px solid ${GOLD}25`,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "10px 0 8px",
                      fontSize: "11px",
                      color: GOLD,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      width: "90px",
                      verticalAlign: "top",
                    }}
                  >
                    Name
                  </td>
                  <td
                    style={{
                      padding: "10px 0 8px",
                      fontSize: "15px",
                      color: CHARCOAL,
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    {name}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "8px 0",
                      fontSize: "11px",
                      color: GOLD,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      verticalAlign: "top",
                    }}
                  >
                    Email
                  </td>
                  <td
                    style={{
                      padding: "8px 0",
                      fontSize: "15px",
                      color: CHARCOAL,
                    }}
                  >
                    <a
                      href={`mailto:${email}`}
                      style={{
                        color: GOLD,
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      {email}
                    </a>
                  </td>
                </tr>
                {phone ? (
                  <tr>
                    <td
                      style={{
                        padding: "8px 0",
                        fontSize: "11px",
                        color: GOLD,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        verticalAlign: "top",
                      }}
                    >
                      Phone
                    </td>
                    <td
                      style={{
                        padding: "8px 0",
                        fontSize: "15px",
                        color: CHARCOAL,
                      }}
                    >
                      <a
                        href={`tel:${phone}`}
                        style={{
                          color: GOLD,
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        {phone}
                      </a>
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </Section>

          {formattedMessage ? (
            <Section style={{ padding: "0 40px 32px" }}>
              <Text
                style={{
                  margin: "0 0 10px",
                  fontSize: "11px",
                  color: GOLD,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Message
              </Text>
              <div
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: CHARCOAL,
                }}
                dangerouslySetInnerHTML={{ __html: formattedMessage }}
              />
            </Section>
          ) : null}

          <Hr
            style={{
              borderColor: `${GOLD}30`,
              margin: 0,
            }}
          />

          {/* Footer */}
          <Section
            style={{
              padding: "20px 40px",
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: "12px",
                color: CREAM_MUTED,
                lineHeight: 1.5,
              }}
            >
              Sent from the {siteName} website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactFormNotificationEmail;
