import { useTranslation } from "react-i18next";
import { ToggleChangeLanguage } from "./toggle-change-language"
import { useToggleLanguage } from "../hook/useToggleLanguage";

export const HeaderComponent = () => {
    const {t} = useTranslation();
    const {lang, toggleLanguage} = useToggleLanguage();

    return (
        <>
        
            <ToggleChangeLanguage
                lang={lang!}
                toggleLanguage={toggleLanguage}
            />
        </>
    ) }