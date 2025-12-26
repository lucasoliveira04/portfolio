import { useTranslation } from "react-i18next";
import { HeaderComponent } from "../components/_header";

export const HomePage = () => {
    const {t} = useTranslation();
    return (
        <>
            <h1>{t('header.title')}</h1>

            <HeaderComponent/>
        </>
    )
}