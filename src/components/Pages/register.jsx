import AuthLayout from "../Layout/AuthLayout";
import FormRegister from "../Fragments/Form/FormRegister";

export default function Register() {
  return (
    <AuthLayout type="register" title="Daftar akun">
      <FormRegister />
    </AuthLayout>
  );
}
