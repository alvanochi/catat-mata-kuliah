export default function Label({ children, For }) {
  return (
    <label className="font-semibold" htmlFor={For}>
      {children}
    </label>
  );
}
