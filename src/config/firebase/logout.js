import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export const logout = () =>
  signOut(auth)
    .then(() => {
      localStorage.clear();
      window.location.href = "/masuk";
      alert("berhasil keluar!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode || errorMessage);
    });
