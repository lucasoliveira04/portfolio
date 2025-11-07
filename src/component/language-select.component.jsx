import { useState } from "react";
import { useLanguageToggle } from "../hook/useLanguageToggle.js";
import { Globe } from "lucide-react";

export function LanguageSelect() {
    const [open, setOpen] = useState(false);
    const { lang, toggleLanguage } = useLanguageToggle();

    const handleChange = (code) => {
        toggleLanguage(code);
        setOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-white text-blue-800 px-3 py-1.5 rounded-xl shadow hover:bg-blue-50 transition-all duration-300"
            >
                <Globe size={18} />
                <span className="font-semibold text-sm">
                    {lang === "pt" ? "PT-BR" : "EN-US"}
                </span>
                <svg
                    className={`w-4 h-4 ml-1 transform transition-transform ${open ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 z-20">
                    <button
                        onClick={() => handleChange("pt")}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-blue-100 w-full text-left transition"
                    >
                        🇧🇷 Português
                    </button>
                    <button
                        onClick={() => handleChange("en")}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-blue-100 w-full text-left transition"
                    >
                        🇺🇸 English
                    </button>
                </div>
            )}
        </div>
    );
}
