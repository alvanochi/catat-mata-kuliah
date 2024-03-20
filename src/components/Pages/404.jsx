import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="mt-3 mb-5 text-xl font-medium">
        Halaman ga ketemu nih...🙁
      </p>
      <Link to="/">
        <Button classname="bg-black rounded-full">KEMBALI</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
