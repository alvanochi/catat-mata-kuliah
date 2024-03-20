import { useParams } from "react-router-dom";
import ErrorPage from "./404";
import TableMeet from "../Fragments/Table/TableMeet";
import { useItem } from "../../context/ItemContext";
import deleteHandler from "../../config/firebase/deleteMeet";

const Meet = () => {
  const { matkulID, meetID } = useParams();
  const { rawData } = useItem();

  // Cari data berdasarkan data mentah yang belum di mapping dengan key id
  const item = rawData[matkulID]?.matkul[meetID] || [];

  if (!item) {
    return <ErrorPage />;
  }

  return (
    <div className="container px-4 py-4 mx-auto">
      <h1 className="my-4 text-3xl font-bold">{item.namaMatkul}</h1>
      <button
        className="float-right px-4 py-1 font-semibold text-white bg-red-500 rounded-lg "
        onClick={() => deleteHandler(matkulID, meetID)}
      >
        Hapus Pertemuan
      </button>
      <div className="mb-4">
        <div className="flex w-1/2 cursor-pointer">
          <p className="w-1/3 px-2 py-2 rounded-md hover:bg-slate-200">
            Pertemuan
          </p>
          <p className="w-full px-2 py-2 font-semibold rounded-md hover:bg-slate-200 ">
            {item.pertemuan}
          </p>
        </div>
        <div className="flex w-1/2 cursor-pointer">
          <p className="w-1/3 px-2 py-2 rounded-md hover:bg-slate-200">
            Menerangkan Tentang
          </p>
          <p className="w-full px-2 py-2 font-semibold rounded-md hover:bg-slate-200 ">
            {item.keterangan}
          </p>
        </div>
        <div className="flex w-1/2 cursor-pointer">
          <p className="w-1/3 px-2 py-2 rounded-md hover:bg-slate-200">
            Presensi
          </p>
          <p className="w-full px-2 py-2 font-semibold rounded-md hover:bg-slate-200 ">
            {item.presensi}
          </p>
        </div>
      </div>
      <h1 className="mb-4 text-5xl font-bold">Daftar Meet</h1>
    </div>
  );
};

export default Meet;
