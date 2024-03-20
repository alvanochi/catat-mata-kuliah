export default function Button({ children, isLoading, variants = "bg-black" }) {
  if (!isLoading) {
    return (
      <button
        className={` hover:bg-black/80 mt-2 text-white font-bold w-full py-2 px-4 rounded ${variants}`}
        type="submit"
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={` bg-slate-300 text-white font-bold w-full py-2 px-4 rounded`}
        disabled
      >
        loading...
      </button>
    );
  }
}
