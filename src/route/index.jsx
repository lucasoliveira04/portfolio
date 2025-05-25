import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router";
import { UsersPage } from "../page/user-page.jsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

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

export const AppRoutes = () => {
    const { i18n } = useTranslation();

    const userLang = i18n.language || navigator.language.split("-")[0] || "pt";

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={`/${userLang}/home`} replace />} />

                <Route
                    path="/:lang/home"
                    element={
                        <LanguageWrapper>
                            <UsersPage />
                        </LanguageWrapper>
                    }
                />

                <Route path="*" element={<Navigate to={`/${userLang}/home`} replace />} />
            </Routes>
        </BrowserRouter>
    );
};
