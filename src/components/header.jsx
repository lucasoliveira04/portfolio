import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "./hamburgerMenu.jsx";
import brazil from "../../public/img/countrys/square.png";
import eua from "../../public/img/countrys/united-states.png";
import { useEffect, useState } from "react";
import { useLanguageToggle } from "../hook/useLanguageToggle.js";

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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
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
                    <HamburgerMenu navOptions={navOptions} />
                </nav>

                <img
                    src={lang === "pt" ? brazil : eua}
                    alt="language"
                    onClick={toggleLanguage}
                    className="w-7 h-7 cursor-pointer hover:brightness-90 transition"
                    title="Trocar idioma"
                />
            </div>
        </header>
    );
}
