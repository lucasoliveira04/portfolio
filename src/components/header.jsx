import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "./hamburgerMenu.jsx";
import brazil from "../../public/img/countrys/square.png";
import eua from "../../public/img/countrys/united-states.png";
import {useEffect, useState} from "react";
import {useLanguageToggle} from "../hook/useLanguageToggle.js";

export function HeaderComponent() {
    const { t } = useTranslation();
    const { lang, toggleLanguage } = useLanguageToggle();
    const [showBorder, setShowBorder] = useState(false);

    const navOptions = [
        { key: "aboutMe", label: t("header.navigation.aboutMe") },
        { key: "projects", label: t("header.navigation.projects") },
        { key: "experience", label: t("header.navigation.experience") },
        { key: "contact", label: t("header.navigation.contact") },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowBorder(true);
            } else {
                setShowBorder(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed z-50 flex w-full justify-between items-center p-4 bg-gradient-to-r from-white to-green-100 transition-all duration-300 ${
                showBorder ? "border-b border-gray-300" : "border-b-0"
            }`}
        >
            <div className="flex items-center w-full gap-6">

                <ul className="flex gap-5 w-full justify-center">
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

                <nav className="block md:hidden">
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

