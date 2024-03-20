import FormLogin from "../Fragments/Form/FormLogin";
import AuthLayout from "../Layout/AuthLayout";

export default function Login() {
  return (
    <AuthLayout type="masuk" title="Masuk">
      <FormLogin />
    </AuthLayout>
  );
}
