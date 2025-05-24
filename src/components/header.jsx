import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "./hamburgerMenu.jsx";

export function HeaderComponent() {
    const { t } = useTranslation();

    const navOptions = [
        { key: "aboutMe", label: t("header.navigation.aboutMe") },
        { key: "projects", label: t("header.navigation.projects") },
        { key: "experience", label: t("header.navigation.experience") },
        { key: "contact", label: t("header.navigation.contact") },
    ];

    return (
        <header className="flex w-full justify-between items-center p-4 bg-primary">
            <div>
                <h5 className="mobile:text-[32px] font-inter font-bold text-textPrimary">Lucas Oliveira</h5>
            </div>

            <nav className="block md:hidden">
                <HamburgerMenu navOptions={navOptions} />
            </nav>
        </header>
    );
}
