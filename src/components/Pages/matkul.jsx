import { logout } from "../../config/firebase/logout";
import TableMatkul from "../Fragments/Table/TableMatkul";

export default function Matkul() {
  const email = JSON.parse(localStorage.getItem("email"));
  const name = JSON.parse(localStorage.getItem("name"));
  if (email) {
    return (
      <div className="container px-4 py-4 mx-auto">
        <h1 className="font-bold lg:text-lg">Hai {name || email}</h1>
        <button
          className="float-right px-4 py-1 font-semibold text-white bg-red-500 rounded-lg "
          onClick={() => logout()}
        >
          Keluar
        </button>
        <h1 className="mb-4 text-lg font-bold lg:text-2xl">
          Ini daftar Mata Kuliah yang kamu ambil
        </h1>
        <TableMatkul />
      </div>
    );
  } else {
    window.location.href = "/masuk";
  }
}
