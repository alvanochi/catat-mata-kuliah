import InputForm from "../InputForm";
import Button from "../../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../../config/firebase/login";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);

  const LoginHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login({ email, password }, setIsLoading);
    }, 1000);
  };

  useEffect(() => {
    emailRef.current.focus();
  }, [emailRef]);

  return (
    <form onSubmit={LoginHandler}>
      <InputForm
        label="Email"
        type="email"
        placeholder="alpanganteng@gmail.com"
        ref={emailRef}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      ></InputForm>
      <InputForm
        name="password"
        type="password"
        placeholder="Masukan Password baru"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></InputForm>
      <Button isLoading={isLoading}>Masuk</Button>
    </form>
  );
};

export default FormLogin;
