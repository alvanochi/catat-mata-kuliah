import { useState } from "react";
import InputForm from "../InputForm";
import Button from "../../Elements/Button";
import { ref, get, set } from "firebase/database";
import db from "../../../config/firebase/database";
import SelectForm from "../SelectForm";
import { useParams } from "react-router-dom";

const FormAddMeet = () => {
  const [filter, setFilter] = useState({
    id: Date.now(),
    pertemuan: 1,
    keterangan: "",
    presensi: "Hadir",
    hari: "Senin",
  });

  const [isLoading, setIsLoading] = useState(false);
  const uid = JSON.parse(localStorage.getItem("uid"));
  const { matkulID } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const AddHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const matkulRef = ref(db, `users/${uid}/${matkulID}/matkul`);
      const snapshot = await get(matkulRef);
      if (snapshot.exists()) {
        const existingMatkul = snapshot.val();
        const updatedMatkul = [...existingMatkul, filter];
        await set(matkulRef, updatedMatkul);
        alert("Yeay, berhasil tambah pertemuan!");
      } else {
        // Jika tidak ada data matkul sebelumnya, buat array baru dengan filter sebagai satu-satunya item
        await set(matkulRef, [filter]);
        alert("Yeay, berhasil tambah pertemuan!");
      }
    } catch {
      alert("Terjadi kesalahan saat menambahkan pertemuan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={AddHandler}>
      <SelectForm
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
        name="pertemuan"
        label="Pertemuan"
        onChange={handleChange}
        value={filter.pertemuan}
      />
      <SelectForm
        options={["Hadir", "Alfa", "Sakit", "Izin"]}
        name="presensi"
        label="Presensi"
        onChange={handleChange}
        value={filter.presensi}
      />
      <InputForm
        name="keterangan"
        label="Menerangkan Tentang"
        type="text"
        placeholder="Kontrak Perkuliahan..."
        onChange={handleChange}
        value={filter.keterangan}
      />
      <SelectForm
        options={["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]}
        name="hari"
        label="Hari"
        onChange={handleChange}
        value={filter.hari}
      />
      <Button isLoading={isLoading}>Tambah Pertemuan</Button>
    </form>
  );
};

export default FormAddMeet;
