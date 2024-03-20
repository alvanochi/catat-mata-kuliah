export default function Select({ name, children, onChange, value }) {
  return (
    <select
      onChange={onChange}
      value={value}
      name={name}
      className={` w-full px-4 py-2 leading-tight bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline`}
    >
      {children}
    </select>
  );
}
