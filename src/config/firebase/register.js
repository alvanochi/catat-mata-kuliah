import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const register = ({ email, password }, setIsLoading, name) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user.email;
      alert(`${user} berhasil di buat!`);
      window.location.href = "/masuk";
      localStorage.setItem("Name", JSON.stringify(name));
    })
    .catch((error) => {
      setIsLoading(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode || errorMessage);
    });
