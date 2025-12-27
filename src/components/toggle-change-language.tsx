import { useState, useMemo } from "react";
import brazil from "../assets/countrys/square.png";
import usa from "../assets/countrys/united-states.png";
import spanish from "../assets/countrys/spain.png";
import { useTranslation } from "react-i18next";
import { getLanguages } from "../utils/getLanguages";
import type { LanguageCode } from "../config/languages";

type Props = {
  lang: LanguageCode | string;
  toggleLanguage: (lang: LanguageCode) => void;
};

export const ToggleChangeLanguage = ({ lang, toggleLanguage }: Props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = useMemo(
    () =>
      getLanguages({
        pt: brazil,
        en: usa,
        es: spanish,
      }),
    []
  );

  const currentLanguage =
    languages.find((l) => l.code === lang) ?? languages[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-2 text-white px-3 py-1 rounded shadow-md
          bg-linear-to-r ${currentLanguage.gradient}
          transition-all duration-300 ease-in-out
        `}

      >

        <img
          src={currentLanguage.flag}
          alt={currentLanguage.code}
          className="w-5 h-5"
        />
        <span className="font-semibold">
          {t(currentLanguage.labelKey)}
        </span>

        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded shadow-lg z-20">
          {languages.map(({ code, flag, labelKey }) => (
            <button
              key={code}
              onClick={() => {
                toggleLanguage(code);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-green-100 w-full text-left"
            >
              <img src={flag} alt={code} className="w-5 h-5" />
              {t(labelKey)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
