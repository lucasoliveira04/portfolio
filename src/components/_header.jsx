import { useState } from "react";

function HeaderComponent({ setLanguage }) {
    const texts = {
        pt: {
            projects: "Projetos",
            aboutMe: "Sobre Mim",
            contactsMe: "Entre em contato",
        },
        en: {
            projects: "Projects",
            aboutMe: "About Me",
            contactsMe: "Contact Me"
        },
    };

    const [isEnglish, setIsEnglish] = useState(() => {
        return localStorage.getItem("language") === "en";
    });

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "pt" : "en";
        localStorage.setItem("language", newLanguage);
        setIsEnglish(!isEnglish);
        setLanguage(newLanguage);
    };

    return (
        <div className="w-full p-[23px] bg-[#111316] flex justify-between items-center fixed">
            <div className="flex gap-3 ">
                <p className="font-sans cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">{texts[isEnglish ? "en" : "pt"].projects}</p>
                <p className="font-sans cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">{texts[isEnglish ? "en" : "pt"].aboutMe}</p>
                <p className="font-sans cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">{texts[isEnglish ? "en" : "pt"].contactsMe}</p>
            </div>
            <button
                onClick={toggleLanguage}
                className="text-white text-2xl transform transition-transform duration-200 ease-in-out hover:scale-110"
            >
                <img
                    src={isEnglish ? "/img/eua.png" : "/img/brasil.png"}
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
