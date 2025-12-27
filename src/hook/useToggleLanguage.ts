import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import type { LanguageCode } from '../config/languages';

type Language = 'pt' | 'en' | 'es';

export const useToggleLanguage = () => {
    const { i18n } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();

    const toggleLanguage = (newLang: LanguageCode) => {
        if (newLang === lang) return;

        i18n.changeLanguage(newLang);
        navigate(`/${newLang}/home`, { replace: true });
    };

    return {
        lang: lang ?? "en",
        toggleLanguage,
    };
}