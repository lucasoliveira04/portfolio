import {
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaFile, FaEnvelope,
} from "react-icons/fa";
import photoIam from "../assets/iam/iAm.png";
import curriculo from "../assets/pdf/Curriculo_Lucas_Oliveira.pdf"

import {useTranslation} from "react-i18next";
import {Typewriter} from "../util/Typewriter.jsx";
import {ScrollArrow} from "./scroll-arrow.jsx";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/lucasoliveira04",
        icon: <FaGithub />,
    },
    {
        name: "Twitter",
        url: "https://twitter.com/lucasoli04",
        icon: <FaTwitter />,
    },
    {
        name: "Instagram",
        url: "https://instagram.com/lucasoliveira.04_",
        icon: <FaInstagram />,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/lucas-oliveira-campos",
        icon: <FaLinkedin />,
    },
    {
        name: "Gmail",
        url: "mailto:lucasolisocialmedia@gmail.com",
        icon: <FaEnvelope />,
    },
    {
        name: "Currículo",
        url: curriculo,
        icon: <FaFile />,
    },
];

export const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full h-screen bg-gradient-to-r from-white to-green-100 flex items-start pt-20 md:pt-32 px-10">
            <div className="w-full flex flex-col md:flex-row justify-between items-start">
                {/* Foto em cima no mobile, à direita no desktop */}
                <div className="flex justify-center w-full md:w-[40%] order-1 md:order-2 mt-0 md:mt-0">
                    <div className="w-56 h-56 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-green-500 mt-10">
                        <img
                            src={photoIam}
                            alt="Lucas Oliveira"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Texto abaixo no mobile, à esquerda no desktop */}
                <div className="flex-1 h-[50vh] pt-10 order-2 md:order-1 text-center md:text-left">
                    <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900 leading-tight font-comic">
                        Lucas Oliveira
                    </h1>
                    <Typewriter text={t("home.subtitle")} />

                    <div className="flex gap-3 mt-10 text-3xl text-green-600 justify-center md:justify-start">
                        {socialLinks.map(({ name, url, icon }) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-400 transition duration-200"
                                aria-label={name}
                                title={name}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <ScrollArrow />
        </div>
    );
};
