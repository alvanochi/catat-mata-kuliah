import { Link } from "react-router-dom";

export default function DataLayout({ title, children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 px-12 py-6 bg-white border rounded-lg"
      >
        <h1 className="mb-8 text-3xl font-bold text-center text-black">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
