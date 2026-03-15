import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "./hamburgerMenu.jsx";
import { useEffect, useState } from "react";
import { useLanguageToggle } from "../hook/useLanguageToggle.js";
import { LanguageSelect } from "./languageSelect.jsx";

const versions = [
  { label: "ReactJS", url: "https://lucasoliveira04.com", current: true },
  {
    label: "Angular",
    url: "https://angular.lucasoliveira04.com",
    current: false,
  },
  { label: "Thymeleaf", url: "", current: false },
];

export function HeaderComponent() {
  const { t } = useTranslation();
  const { lang, toggleLanguage } = useLanguageToggle();

  const [showBorder, setShowBorder] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const navOptions = [
    { key: "aboutMe", label: t("header.navigation.aboutMe") },
    { key: "experience", label: t("header.navigation.experience") },
    { key: "contact", label: t("header.navigation.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBorder(scrollY > 100);
      setShowScrollTopButton(scrollY > 110);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeVersion = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <header
      className={`fixed z-50 flex w-full justify-between items-center p-4 bg-gradient-to-r from-white to-green-100 transition-all duration-300 ${
        showBorder ? "border-b border-gray-300" : "border-b-0"
      }`}
    >
      {/* Scroll to top */}
      <div className="flex items-center">
        {showScrollTopButton && (
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="p-1 rounded hover:bg-green-200 transition"
            title="Voltar ao topo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-5 w-full justify-center">
        {navOptions.map((navOption) => (
          <li key={navOption.key}>
            <button
              className="text-gray-800 hover:text-green-600 transition font-fredoka text-[19px]"
              onClick={() => {
                const section = document.getElementById(navOption.key);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {navOption.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Version select */}
        <div className="relative">
          <select
            onChange={(e) => changeVersion(e.target.value)}
            value=""
            className="appearance-none bg-green-50 border border-green-300 rounded-md pl-2 pr-6 py-1 text-xs font-medium text-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition-colors duration-200 cursor-pointer"
          >
            {versions.map((v) => (
              <option
                key={v.label}
                value={v.current ? "" : v.url}
                disabled={v.current}
              >
                {v.current ? `${v.label}` : v.label}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Mobile hamburger */}
        <nav className="md:hidden">
          <HamburgerMenu
            navOptions={navOptions}
            onNavigate={(id) => {
              const section = document.getElementById(id);
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </nav>

        {/* Language select */}
        <LanguageSelect lang={lang} toggleLanguage={toggleLanguage} />
      </div>
    </header>
  );
}
