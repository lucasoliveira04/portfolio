import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "./hamburgerMenu.jsx";
import brazil from "../../public/img/countrys/square.png";
import eua from "../../public/img/countrys/united-states.png";
import { useNavigate, useParams } from "react-router";

export function HeaderComponent() {
    const { t, i18n } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();

    const toggleLanguage = () => {
        const newLang = lang === "pt" ? "en" : "pt";

        i18n.changeLanguage(newLang);

        const currentPath = window.location.pathname;
        const updatePath = currentPath.replace(`/${lang}`, `/${newLang}`);
        navigate(updatePath);
    };

    const navOptions = [
        { key: "aboutMe", label: t("header.navigation.aboutMe") },
        { key: "projects", label: t("header.navigation.projects") },
        { key: "experience", label: t("header.navigation.experience") },
        { key: "contact", label: t("header.navigation.contact") },
    ];

    return (
        <header className="fixed flex w-full justify-between items-center p-4 bg-gradient-to-r from-white to-green-100 shadow-md">
            <div>
                <h5 className="text-3xl font-extrabold font-inter text-gray-900">
                    Lucas Oliveira
                </h5>
            </div>

            <div className="flex items-center gap-6">
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
