import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router";
import { UsersPage } from "../page/user-page.jsx";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const LanguageWrapper = ({ children }) => {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (lang && lang !== i18n.language) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return children;
};

const RedirectToUserLang = () => {
    const { i18n } = useTranslation();
    const [userLang, setUserLang] = useState(null);

    useEffect(() => {
        const langFromI18n = i18n.language;
        const langFromNavigator = navigator.language ? navigator.language.split("-")[0] : null;

        const chosenLang = langFromI18n || langFromNavigator || "en";
        setUserLang(chosenLang);
    }, [i18n]);

    if (!userLang) {
        return null;
    }

    return <Navigate to={`/${userLang}/home`} replace />;
};

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RedirectToUserLang />} />

                <Route
                    path="/:lang/home"
                    element={
                        <LanguageWrapper>
                            <UsersPage />
                        </LanguageWrapper>
                    }
                />

                <Route path="*" element={<Navigate to="/en/home" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
