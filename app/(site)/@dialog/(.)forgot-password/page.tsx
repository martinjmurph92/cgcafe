import { AuthDialog } from "@/components/auth-dialog";
import { ForgotPassword } from "@/components/auth/forgot-password";

export default function Page() {
  return (
    <AuthDialog title="Forgot Password">
      <ForgotPassword />
    </AuthDialog>
  );
}
