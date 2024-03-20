import { forwardRef } from "react";
import Label from "../Elements/Label";
import Input from "../Elements/Input";

const InputForm = forwardRef(
  ({ name, type, placeholder, label, onChange, value }, ref) => {
    return (
      <div className="mb-3">
        <Label For={name}>{label}</Label>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          ref={ref}
        />
      </div>
    );
  }
);
export default InputForm;
