import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, placeholder, name, onChange, value }, ref) => {
    return (
      <input
        className={`my-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline-black/50 focus:shadow-outline`}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        value={value}
        required
      />
    );
  }
);
export default Input;
