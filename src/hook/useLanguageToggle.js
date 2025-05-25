import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";

export function useLanguageToggle() {
    const { i18n } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();

    const toggleLanguage = () => {
        const newLang = lang === "pt" ? "en" : "pt";
        i18n.changeLanguage(newLang);

        const currentPath = window.location.pathname;
        const updatedPath = currentPath.replace(`/${lang}`, `/${newLang}`);
        navigate(updatedPath);
    };

    return {
        lang,
        toggleLanguage,
    };
}
