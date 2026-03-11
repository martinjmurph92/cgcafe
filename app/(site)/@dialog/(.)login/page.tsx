import { AuthDialog } from "@/components/auth-dialog";
import { Login } from "@/components/auth/login";

export default function Page() {
  return (
    <AuthDialog title="Login">
      <Login />
    </AuthDialog>
  );
}
