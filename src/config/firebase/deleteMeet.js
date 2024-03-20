import db from "./database";
import { ref, remove } from "firebase/database";

const uid = JSON.parse(localStorage.getItem("uid"));
const deleteHandler = (matkulID, id) => {
  try {
    const matkulRef = ref(db, `users/${uid}/matkul/${matkulID}/${id}`);
    confirm("Kamu yakin pengen apus mata kuliah ini?")
      ? remove(matkulRef)
      : alert("Tidak jadi di hapus");
    window.location.href = `/matkul/${matkulID}`;
  } catch (error) {
    alert(error);
  }
};

export default deleteHandler;
