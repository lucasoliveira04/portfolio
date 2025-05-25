import {
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaFile,
} from "react-icons/fa";
import photoIam from "../../public/img/iam/iAm.png";
import {useTranslation} from "react-i18next";
import {Typewriter} from "../util/Typewriter.jsx";

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
        name: "Currículo",
        url: "/path/para/seu-curriculo.pdf",
        icon: <FaFile />,
    },
];

export const HomePage = () => {
    const {t} = useTranslation()

    return (
        <div className="w-full h-screen bg-gradient-to-r from-white to-green-100 flex items-start pt-20 md:pt-32 px-10">
            <div className="w-full flex flex-col md:flex-row justify-between items-start">
                {/* Texto à esquerda */}
                <div className="flex-1 h-[50vh] pt-10">
                    <h1 className="text-7xl md:text-8xl font-extrabold text-gray-900 leading-tight font-comic">
                        Lucas Oliveira
                    </h1>
                    <h2 className="text-4xl md:text-5xl text-gray-700 mt-6 font-comic">
                        <Typewriter text={t("home.subtitle")}/>
                    </h2>

                    <div className="flex gap-3 mt-10 text-3xl text-green-600">
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

                {/* Foto à direita */}
                <div className="flex justify-center w-full md:w-[40%] mt-10 md:mt-0">
                    <div className="w-[450px] h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-green-500">
                    <img
                            src={photoIam}
                            alt="Lucas Oliveira"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
