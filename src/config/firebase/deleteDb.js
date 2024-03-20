import db from "./database";
import { ref, remove } from "firebase/database";

const uid = JSON.parse(localStorage.getItem("uid"));
const deleteHandler = (id) => {
  try {
    const matkulRef = ref(db, `users/${uid}/${id}`);
    confirm("Kamu yakin pengen apus mata kuliah ini?")
      ? remove(matkulRef)
      : alert("Tidak jadi di hapus");
    window.location.href = "/matkul";
  } catch (error) {
    alert(error);
  }
};

export default deleteHandler;
