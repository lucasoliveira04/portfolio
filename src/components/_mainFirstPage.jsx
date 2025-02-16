import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import eu from "../../public/img/i.jpg";
import { useEffect, useState } from "react";
import { getTexts } from "../data/text";

function MainFirstPage({ language, scrollToProjects }) {
    const [showArrow, setShowArrow] = useState(true);
    const [fade, setFade] = useState(false);
    const [currentText, setCurrentText] = useState(getTexts(language));

    useEffect(() => {
        const handleScroll = () => {
            setShowArrow(window.scrollY <= 77);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setFade(true);
        setTimeout(() => {
            setCurrentText(getTexts(language));
            setFade(false);
        }, 300); 
    }, [language]);

    return (
        <div>
            <div className="h-[95vh] bg-[#111316] flex justify-center text-white pt-[70px]">
                <div className="w-[600px] bg-[#111316] p-8 rounded-lg cursor-default">
                    <div className="flex items-center gap-6">
                        <div className="w-48 h-48 rounded-full bg-gray-500 flex items-center justify-center">
                            <span>
                                <img
                                    src={eu}
                                    alt={currentText.alt}
                                    title={currentText.titlePhoto}
                                    className="object-cover w-48 h-48 rounded-full"
                                />
                            </span>
                        </div>
                        <div className={`transition-transform duration-500 ${fade ? "scale-90 opacity-50" : "scale-100 opacity-100"}`}>
                            <h1 className="text-3xl font-bold">Lucas Oliveira</h1>
                            <div className="line-animation"></div>
                            <p className="text-lg text-gray-400">{currentText.role}</p>
                            <p className="text-gray-500">{currentText.pronouns}, {currentText.age}</p>
                        </div>
                    </div>

                    <p className={`mt-4 text-gray-300 leading-relaxed transition-opacity duration-500 ${fade ? "opacity-50" : "opacity-100"}`}>
                        {currentText.description}
                    </p>

                    <div className="mt-6 flex gap-4 justify-center">
                        <a href="mailto:camposdlucasoli@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="text-gray-400 hover:text-white text-2xl transition" />
                        </a>
                        <a href="https://github.com/lucasoliveira04" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-gray-400 hover:text-white text-2xl transition" />
                        </a>
                        <a href="https://linkedin.com/in/lucas-oliveira-campos" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-gray-400 hover:text-white text-2xl transition" />
                        </a>
                    </div>
                </div>
            </div>

            {showArrow && (
                <div className="h-[5vh] bg-[#111316] flex justify-center text-white cursor-pointer" onClick={scrollToProjects}>
                    <FaArrowDown className="animate-bounce text-3xl" />
                </div>
            )}
        </div>
    );
}

export default MainFirstPage;
