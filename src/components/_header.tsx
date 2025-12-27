import { useTranslation } from "react-i18next";
import { ToggleChangeLanguage } from "./toggle-change-language"
import { useToggleLanguage } from "../hook/useToggleLanguage";
import { useRef } from "react";

export const HeaderComponent = () => {
    const {t} = useTranslation();
    const {lang, toggleLanguage} = useToggleLanguage();


    const navigationMap = [
        { label: t('header.navigation.home'), link: `/${lang}/home` },
        { label: t('header.navigation.about'), link: `/${lang}/about` },
        { label: t('header.navigation.projects'), link: `/${lang}/projects` },
        { label: t('header.navigation.contact'), link: `/${lang}/contact` },
    ]

    return (
        <>
            <div className="w-full flex items-center justify-between px-6 py-4">

                <nav>
                    <ul className="flex gap-6">
                        {navigationMap.map((item) => (
                            <li key={item.link}>
                                <a
                                    href={item.link}
                                    className="text-black hover:underline"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>


                <ToggleChangeLanguage
                    lang={lang!}
                    toggleLanguage={toggleLanguage}
                />



            </div>
            
        </>
    ) }