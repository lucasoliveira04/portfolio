import { HashRouter, Navigate, Route, Routes, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { HomePage } from "../pages/home";

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
    return (
        <HashRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/pt/home" replace />} />

                <Route
                    path="/:lang/home"
                    element={
                        <LanguageWrapper>
                            <HomePage />
                        </LanguageWrapper>
                    }
                />
            </Routes>
        </HashRouter>

    );
};