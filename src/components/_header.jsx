import { useState, useEffect } from "react";
import { getTexts } from "../data/text";

function HeaderComponent({ setLanguage }) {
    const [fade, setFade] = useState(false);
    const [language, setLangState] = useState(() => localStorage.getItem("language") || "pt");
    const text = getTexts(language);

    useEffect(() => {
        setFade(true);
        const timeout = setTimeout(() => setFade(false), 300);

        localStorage.setItem("language", language);
        setLanguage(language);

        return () => clearTimeout(timeout);
    }, [language, setLanguage]);

    const toggleLanguage = () => {
        setLangState((prevLang) => (prevLang === "en" ? "pt" : "en"));
    };

    return (
        <div className="w-full p-[23px] bg-[#111316] flex justify-between items-center fixed">
            <div className={`flex gap-3 transition-opacity duration-500 ${fade ? "opacity-50" : "opacity-100"}`}>
                <p className="font-sans cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">
                    {text.header.projects}
                </p>
                <p className="font-sans cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">
                    {text.header.aboutMe}
                </p>
                <p className="font-sans cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">
                    {text.header.contactsMe}
                </p>
            </div>
            <button
                onClick={toggleLanguage}
                className="text-white text-2xl transform transition-transform duration-200 ease-in-out hover:scale-110"
            >
                <img
                    src={language === "en" ? "/img/eua.png" : "/img/brasil.png"}
                    alt="Bandeira"
                    width={36}
                    height={24}
                    className="rounded shadow-lg"
                />
            </button>
        </div>
    );
}

export default HeaderComponent;
