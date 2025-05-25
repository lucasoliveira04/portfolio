import { Routes, Route, Navigate, useParams, HashRouter} from "react-router";
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
    return (
        <HashRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/pt/home" replace />} />

                <Route
                    path="/:lang/home"
                    element={
                        <LanguageWrapper>
                            <UsersPage />
                        </LanguageWrapper>
                    }
                />
            </Routes>
        </HashRouter>

    );
};
