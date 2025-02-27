import { useState, useEffect } from "react";
import { getTexts } from "../data/text";
import { useScreenSize } from "../context/ScreenSizeProvider";

function HeaderComponent({ setLanguage, scrollToProjects, scrollToContactsMe, scrollToAboutMe }) {
    const [fade, setFade] = useState(false);
    const [language, setLangState] = useState(() => localStorage.getItem("language") || "pt");
    const text = getTexts(language);
    const { screenWidth } = useScreenSize();

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

    const isSmallMobile = screenWidth < 400;
    const textSize = isSmallMobile ? "text-[12px] gap-2" : "text-base";
    
    return (
        <div className="w-full p-[23px] bg-[#111316] flex justify-between items-center fixed z-10">
            <div className={`flex gap-6 ${textSize} duration-500 ${fade ? "opacity-50" : "opacity-100"} font-sans`}>
                <div className="relative group">
                    <p
                        className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300"
                        onClick={scrollToProjects}
                    >
                        {text.header.projects}
                    </p>
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
                </div>

                <div className="relative group">
                    <p className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300" onClick={scrollToAboutMe}>
                        {text.header.aboutMe}
                    </p>
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
                </div>

                <div className="relative group">
                    <p 
                        className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300" 
                        onClick={scrollToContactsMe}
                    >
                        {text.header.contactsMe}
                    </p>
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
                </div>
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
