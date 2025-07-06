import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "./hamburgerMenu.jsx";
import brazil from "../assets/countrys/square.png";
import eua from "../assets/countrys/united-states.png";
import { useEffect, useState } from "react";
import { useLanguageToggle } from "../hook/useLanguageToggle.js";
import { LanguageSelect } from "./languageSelect.jsx";

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

  const sectionFooter = document.getElementById(navOptions.key);
  const sectionExperience = document.getElementById(navOptions.key);
  const sectionAboutMe = document.getElementById(navOptions.key);

  sectionFooter?.scrollIntoView({ behavior: "smooth" });
  sectionExperience?.scrollIntoView({ behavior: "smooth" });
  sectionAboutMe?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed z-50 flex w-full justify-between items-center p-4 bg-gradient-to-r from-white to-green-100 transition-all duration-300 ${
        showBorder ? "border-b border-gray-300" : "border-b-0"
      }`}
    >
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

      <div className="flex items-center gap-4">
        <nav className="md:hidden">
          <HamburgerMenu
            navOptions={navOptions}
            onNavigate={(id) => {
              const section = document.getElementById(id);
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </nav>

        <LanguageSelect lang={lang} toggleLanguage={toggleLanguage} />
      </div>
    </header>
  );
}
