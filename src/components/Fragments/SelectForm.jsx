import Label from "../Elements/Label";
import Select from "../Elements/Select";

export default function SelectForm({ name, label, onChange, value, options }) {
  return (
    <div className="mb-3">
      <Label For={name}>{label}</Label>
      <div className="">
        <Select value={value} onChange={onChange} name={name}>
          {options.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}
