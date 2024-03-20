import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-14 font-inter">
      <h1 className="text-3xl font-bold text-center lg:text-6xl">
        Rekam, Catat, Bagikan.
      </h1>
      <p className="my-4 text-lg font-semibold text-center lg:my-6 lg:text-2xl">
        Catat Mata Kuliah atau Hasil Pertemuan Mata Kuliah kamu di sini !
      </p>
      <div className="flex justify-center">
        <Link
          to={"/daftar"}
          className="px-4 py-2 font-bold text-white bg-black rounded-lg hover:bg-black/70"
        >
          Mulai {"->"}
        </Link>
        <Link
          to={"/masuk"}
          className="py-2 ml-4 font-semibold rounded-lg text-sky-500 hover:underline"
        >
          Sudah punya akun {"->"}
        </Link>
      </div>
      <div className="flex justify-center my-12">
        <img
          srcSet="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/4qPZTqxXRCDQiimE4c9xXc/eb57558f50ee6fac68dc04e3b5099c8a/home-hero.png"
          alt="Productivity Ilustration"
          width={650}
        />
      </div>
    </section>
  );
}
