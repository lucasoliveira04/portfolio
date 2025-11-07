import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export function useLanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = (newLang) => {
        i18n.changeLanguage(newLang);
    };

    return {
        lang: i18n.language,
        toggleLanguage,
    };
}
