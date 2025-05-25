import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";

export function useLanguageToggle() {
    const { i18n } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();

    const toggleLanguage = () => {
        const newLang = lang === "pt" ? "en" : "pt";
        i18n.changeLanguage(newLang);
        navigate(`/${newLang}/home`, { replace: true });
    };

    return {
        lang,
        toggleLanguage,
    };
}
