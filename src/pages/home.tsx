import { useTranslation } from "react-i18next";
import { HeaderComponent } from "../components/_header";

export const HomePage = () => {
    const {t} = useTranslation();
    return (
        <>
            <HeaderComponent/>
        </>
    )
}