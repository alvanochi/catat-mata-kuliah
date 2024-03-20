import { useParams } from "react-router-dom";
import ErrorPage from "./404";
import TableMeet from "../Fragments/Table/TableMeet";
import { useItem } from "../../context/ItemContext";
import deleteHandler from "../../config/firebase/deleteDb";

const DetailMatkul = () => {
  const { matkulID } = useParams();
  const { rawData } = useItem();

  // Cari data berdasarkan data mentah yang belum di mapping dengan key id
  const data = rawData[matkulID];

  if (!data) {
    return <ErrorPage />;
  }

  return (
    <div className="container px-4 py-4 mx-auto">
      <h1 className="my-4 text-3xl font-bold">{data.namaMatkul}</h1>
      <button
        className="float-right px-4 py-1 font-semibold text-white bg-red-500 rounded-lg "
        onClick={() => deleteHandler(matkulID)}
      >
        Hapus Matkul
      </button>
      <div className="mb-4">
        <div className="flex w-1/2 cursor-pointer">
          <p className="w-full px-2 py-2 rounded-md lg:w-1/3 hover:bg-slate-200">
            Dosen Pengampu
          </p>
          <p className="w-1/2 px-2 py-2 font-semibold rounded-md hover:bg-slate-200">
            {data.dosen}
          </p>
        </div>
        <div className="flex w-1/2 cursor-pointer">
          <p className="w-full px-2 py-2 rounded-md lg:w-1/3 hover:bg-slate-200">
            SKS
          </p>
          <p className="w-1/2 px-2 py-2 font-semibold rounded-md hover:bg-slate-200">
            {data.sks}
          </p>
        </div>
        <div className="flex w-1/2 cursor-pointer">
          <p className="w-full px-2 py-2 rounded-md lg:w-1/3 hover:bg-slate-200">
            Semester
          </p>
          <p className="w-1/2 px-2 py-2 font-semibold rounded-md hover:bg-slate-200">
            {data.semester}
          </p>
        </div>
      </div>
      <TableMeet />
    </div>
  );
};

export default DetailMatkul;
