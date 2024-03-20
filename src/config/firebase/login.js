import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export const login = ({ email, password }, setIsLoading) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      localStorage.setItem("uid", JSON.stringify(res.user.uid));
      localStorage.setItem("email", JSON.stringify(res.user.email));
      alert("berhasil masuk!");
      window.location.href = "/matkul";
    })
    .catch((error) => {
      setIsLoading(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode || errorMessage);
      // alert("email atau password yang anda masukan salah");
    });
