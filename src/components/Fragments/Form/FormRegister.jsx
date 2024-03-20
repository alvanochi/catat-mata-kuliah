import InputForm from "../InputForm";
import Button from "../../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { register } from "../../../config/firebase/register";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setName(e.target.value);
    }
  };

  const RegistHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      register({ email, password }, setIsLoading, name);
    }, 1000);
  };

  const nameRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, [nameRef]);
  return (
    <form onSubmit={RegistHandler}>
      <InputForm
        name="name"
        label="Nama Lengkap"
        type="text"
        placeholder="Alpan ganteng"
        ref={nameRef}
        onChange={handleChange}
        value={name}
      ></InputForm>
      <InputForm
        name="email"
        label="Email"
        type="email"
        placeholder="alpanganteng@gmail.com"
        onChange={handleChange}
        value={email}
      ></InputForm>
      <InputForm
        name="password"
        type="password"
        placeholder="Masukan Password baru"
        label="Password"
        onChange={handleChange}
        value={password}
      ></InputForm>
      <Button isLoading={isLoading}>Daftar</Button>
    </form>
  );
};

export default FormRegister;
