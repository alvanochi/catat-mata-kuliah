import { useEffect, useRef, useState } from "react";
import InputForm from "../InputForm";
import Button from "../../Elements/Button";
import { push, ref } from "firebase/database";
import db from "../../../config/firebase/database";
import SelectForm from "../SelectForm";
import { useItem } from "../../../context/ItemContext";

const FormAddMatkul = () => {
  const [filter, setFilter] = useState({
    namaMatkul: "",
    semester: 1,
    sks: 1,
    dosen: "",
    matkul: [
      {
        id: 1,
        pertemuan: 1,
        keterangan: "Perkenalan",
        presensi: "Hadir",
        hari: "Senin",
      },
    ],
  });
  const { namaMatkul, sks, dosen, semester } = filter;

  const [isLoading, setIsLoading] = useState(false);
  const uid = JSON.parse(localStorage.getItem("uid"));
  const { rawData } = useItem();

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
      if (rawData) {
        const matkulExists = Object.values(rawData).some(
          (item) => item.namaMatkul === namaMatkul
        );
        if (matkulExists) {
          alert("Mata kuliah sudah ada gan!");
          setIsLoading(false);
          return;
        }
      }

      const matkulRef = ref(db, `users/${uid}`);
      await push(matkulRef, filter);
      alert("Yeay, berhasil tambah matkul!");
      setFilter({
        ...filter,
        namaMatkul: "",
        semester: 1,
        sks: 1,
        dosen: "",
      });
    } catch {
      alert("Gagal menambah Matkul");
    } finally {
      setIsLoading(false);
    }
  };

  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <form onSubmit={AddHandler}>
      <InputForm
        name="namaMatkul"
        label="Nama Matkul"
        type="text"
        placeholder="Kalkulus"
        ref={nameRef}
        onChange={handleChange}
        value={namaMatkul}
      />
      <SelectForm
        options={[1, 2, 3, 4, 5, 6, 7, 8]}
        name="semester"
        label="Semester"
        onChange={handleChange}
        value={semester}
      />
      <InputForm
        name="dosen"
        label="Dosen Pengampu"
        type="text"
        placeholder="Fitrah Fajar"
        onChange={handleChange}
        value={dosen}
      />
      <SelectForm
        options={[1, 2, 3, 4]}
        name="sks"
        label="SKS Mata Kuliah"
        onChange={handleChange}
        value={sks}
      />
      <Button isLoading={isLoading}>Tambah Mata Kuliah</Button>
    </form>
  );
};

export default FormAddMatkul;
