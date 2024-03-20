import { Link } from "react-router-dom";

export default function AuthLayout({ title, children, type }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="min-w-[300px] w-4/12">
        <h1 className="mb-4 text-3xl font-bold text-center text-black">
          {title}
        </h1>
        {children}
        <p className="mt-2 text-center">
          {type == "masuk" ? "Belum punya akun ?" : "Sudah punya akun ?"}
          <Link
            to={type == "masuk" ? "/daftar" : "/masuk"}
            className="text-blue-500"
          >
            {type == "masuk" ? " Daftar" : " Masuk"}
          </Link>
        </p>
      </div>
    </div>
  );
}
