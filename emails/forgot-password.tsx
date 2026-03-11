import { Button, Heading, Text } from "@react-email/components";

import { EmailTemplate } from "./template";

export function ForgotPasswordEmail({
  firstName,
  url,
}: {
  firstName: string;
  url: string;
}) {
  return (
    <EmailTemplate
      title="Reset Password"
      preview="Request to reset your password"
    >
      <Heading as="h1" style={{ fontSize: 26, marginTop: 0 }}>
        Reset Password
      </Heading>
      <Text>Hello {firstName},</Text>
      <Text>
        A request to reset the password for your account has been made. Please
        click the button below to reset your password:
      </Text>

      <Text>Please click the button below to reset your password:</Text>

      <Button
        href={url}
        style={{
          backgroundColor: "#0ea5e9",
          color: "#ffffff",
          padding: "16px 24px",
          fontSize: 16,
          fontWeight: 500,
          borderRadius: 999,
        }}
      >
        Reset Password
      </Button>

      <Text>
        If you did not request a password reset, please ignore this email.
      </Text>

      <Text style={{ margin: 0 }}>Thanks,</Text>
      <Text style={{ margin: 0 }}>The Aqua Team</Text>
    </EmailTemplate>
  );
}

export default ForgotPasswordEmail;
