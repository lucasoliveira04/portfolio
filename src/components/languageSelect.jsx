import { useState } from "react";
import brazil from "../assets/countrys/square.png";
import usa from "../assets/countrys/united-states.png";

export function LanguageSelect({ lang, toggleLanguage }) {
  const [open, setOpen] = useState(false);

  const handleChange = (code) => {
    toggleLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded shadow-md hover:bg-green-700 transition"
      >
        <img
          src={lang === "pt" ? brazil : usa}
          alt="flag"
          className="w-5 h-5"
        />
        <span className="font-semibold">
          {lang === "pt" ? "Português" : "English"}
        </span>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded shadow-lg z-20">
          <button
            onClick={() => handleChange("pt")}
            className="flex items-center gap-2 px-3 py-2 hover:bg-green-100 w-full text-left"
          >
            <img src={brazil} alt="pt" className="w-5 h-5" />
            Português
          </button>
          <button
            onClick={() => handleChange("en")}
            className="flex items-center gap-2 px-3 py-2 hover:bg-green-100 w-full text-left"
          >
            <img src={usa} alt="en" className="w-5 h-5" />
            English
          </button>
        </div>
      )}
    </div>
  );
}
