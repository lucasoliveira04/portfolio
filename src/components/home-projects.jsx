import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { CardProjects } from "./card-projects.jsx";
import { useTranslation } from "react-i18next";

import nossoMarSalveOsPatinhosLogo from "/public/img/projects/nossoMarSalveOsPatinhosLogo.jpg";
import deckIfy from "/public/img/projects/deckIfy.png";
import estagio from "/public/img/projects/estagio.png";

import reactIcon from "/public/img/langs/programing.png";
import tailwindCss from "/public/img/langs/Tailwind CSS.png";
import python from "/public/img/langs/python.png";
import excel from "/public/img/langs/excel.png";
import powerBi from "/public/img/langs/powerBi.png";
import csharp from "/public/img/langs/c-sharp.png";
import unity from "/public/img/langs/unity.png";
import java from "/public/img/langs/java.png";

export function HomeProjects() {
    const { t } = useTranslation();

    useEffect(() => {
        ScrollReveal().reveal(".reveal-card", {
            distance: "50px",
            duration: 800,
            easing: "ease-out",
            origin: "bottom",
            interval: 100,
            reset: false,
        });

        const scrollLine = document.getElementById("scroll-line");

        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = Math.min(scrolled / totalHeight, 1);
            scrollLine.style.transform = `scaleY(${progress})`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const projects = [
        {
            title: t("projectsAndExperiences.estagioPlanetEco.title"),
            description: t("projectsAndExperiences.estagioPlanetEco.description"),
            langs: [
                { name: "Excel", icon: excel },
                { name: "Python", icon: python },
                { name: "Power BI", icon: powerBi },
            ],
            side: "right",
            startDate: "Maio 2025",
            endDate: "Atual",
            images: [estagio],
        },
        {
            title: t("projectsAndExperiences.deckIfy.title"),
            description: t("projectsAndExperiences.deckIfy.description"),
            langs: [
                { name: "React.js", icon: reactIcon },
                { name: "Tailwind", icon: tailwindCss },
                { name: "Python", icon: python },
            ],
            side: "left",
            visitUrl: "https://www.deckify.shop/",
            visit: t("projectsAndExperiences.visit"),
            startDate: "Fev 2025",
            images: [deckIfy],
        },
        {
            title: t("projectsAndExperiences.nossoMarSalveOsPatos.title"),
            description: t("projectsAndExperiences.nossoMarSalveOsPatos.description"),
            langs: [
                { name: "Unity", icon: unity },
                { name: "C#", icon: csharp },
            ],
            side: "right",
            visitUrl: "https://mtgroup.itch.io/nosso-mar-salve-os-patinhos",
            visit: t("projectsAndExperiences.visit"),
            startDate: "Jul 2024",
            endDate: "Dez 2024",
            images: [nossoMarSalveOsPatinhosLogo],
        },
        {
            title: t("projectsAndExperiences.chatBotAI.title"),
            description: t("projectsAndExperiences.chatBotAI.description"),
            langs: [
                { name: "React.js", icon: reactIcon },
                { name: "Tailwind", icon: tailwindCss },
                { name: "Java", icon: java },
            ],
            side: "left",
            visitUrl: "https://mtgroup.itch.io/nosso-mar-salve-os-patinhos",
            visit: t("projectsAndExperiences.visit"),
            startDate: "Jul 2024",
            endDate: "Dez 2024",
            images: [nossoMarSalveOsPatinhosLogo],
        },
    ];

    return (
        <div className="min-h-screen max-w-6xl mx-auto px-4 py-10 flex flex-col justify-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full z-0 bg-white">
                <div
                    id="scroll-line"
                    className="w-full bg-green-600 origin-top scale-y-0 transition-transform duration-500 ease-linear"
                    style={{ height: "100%" }}
                />
            </div>

            <div className="flex flex-col items-center relative z-10 w-full space-y-32">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex items-center w-full relative"
                        style={{ minHeight: "120px" }}
                    >
                        {/* Lado esquerdo */}
                        <div className="flex-1 flex justify-end pr-6">
                            {project.side === "left" ? (
                                <div className="reveal-card">
                                    <CardProjects {...project} />
                                </div>
                            ) : (
                                <div className="text-sm text-gray-500 text-left pl-4">
                                    <p>
                                        {project.startDate} - {project.endDate}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Bolinha no centro */}
                        <div className="w-[4px] relative flex justify-center">
                            <div className="w-5 h-5 bg-green-600 rounded-full border-2 border-white absolute top-1/2 -translate-y-1/2" />
                        </div>

                        {/* Lado direito */}
                        <div className="flex-1 flex justify-start pl-6">
                            {project.side === "right" ? (
                                <div className="reveal-card">
                                    <CardProjects {...project} />
                                </div>
                            ) : (
                                <div className="text-sm text-gray-500 text-right pr-4">
                                    <p>
                                        {project.startDate} - {project.endDate}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
