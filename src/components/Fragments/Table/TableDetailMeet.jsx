import { useParams } from "react-router-dom";
import { useState } from "react";
import AddMeet from "../../Pages/addMeet";
import { useItem } from "../../../context/ItemContext";

const TableMeet = () => {
  const { matkulID } = useParams();
  const { rawData } = useItem();

  // Cari data berdasarkan data mentah yang belum di mapping dengan key matkulID
  const item = rawData[matkulID]?.matkul || [];
  const [selected, setSelected] = useState(false);

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="text-gray-500 border border-1">
            <th className="px-6 py-3 text-left">Pertemuan</th>
            <th className="px-6 py-3 text-left">Menerangkan tentang</th>
            <th className="px-6 py-3 text-left">Presensi</th>
            <th className="px-6 py-3 text-left">Hari</th>
          </tr>
        </thead>
        <tbody className="border divide-y border-1">
          {item.length > 0 ? (
            item.map((data, index) => (
              <tr
                key={index}
                onClick={() => console.log(data)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="px-6 py-4">{data.pertemuan}</td>
                <td className="px-6 py-4">{data.keterangan}</td>
                <td className="px-6 py-4">{data.presensi}</td>
                <td className="px-6 py-4">{data.hari}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center">
                Belum ada pertemuan nih...
              </td>
            </tr>
          )}
          <tr>
            <td
              colSpan={4}
              onClick={() => setSelected(true)}
              className="py-4 font-semibold text-center cursor-pointer"
            >
              Tambah Pertemuan baru
            </td>
          </tr>
        </tbody>
      </table>
      {selected && <AddMeet onClick={() => setSelected(false)} />}
    </div>
  );
};

export default TableMeet;
