import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddMatkul from "../../Pages/addMatkul";
import { useItem } from "../../../context/ItemContext";

const TableMatkul = () => {
  const { item, idDb } = useItem();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="text-gray-500 border border-1">
            <th className="px-6 py-3 text-left">Semester</th>
            <th className="px-6 py-3 text-left">Nama Matkul</th>
            <th className="px-6 py-3 text-left">SKS</th>
            <th className="px-6 py-3 text-left">Dosen Pengampu</th>
          </tr>
        </thead>
        <tbody className="border divide-y border-1">
          {item.length > 0 ? (
            item
              .map((data, index) => (
                <tr
                  key={index}
                  onClick={() => navigate(`/matkul/${idDb[index]}`)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="px-6 py-4">{data.semester}</td>
                  <td className="px-6 py-4">{data.namaMatkul}</td>
                  <td className="px-6 py-4">{data.sks}</td>
                  <td className="px-6 py-4">{data.dosen}</td>
                </tr>
              ))
              .reverse()
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center">
                Belum ada mata kuliah yang di ambil nih...
              </td>
            </tr>
          )}
          <tr>
            <td
              colSpan={4}
              onClick={() => setSelected(true)}
              className="py-4 font-semibold text-center cursor-pointer"
            >
              Tambah Mata kuliah baru
            </td>
          </tr>
        </tbody>
      </table>
      {selected && <AddMatkul onClick={() => setSelected(false)} />}
    </div>
  );
};

export default TableMatkul;
