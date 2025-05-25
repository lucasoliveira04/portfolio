import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { CardProjects } from "./card-projects.jsx";
import { useTranslation } from "react-i18next";
import {getProjects} from "../data/projectData.js";
import {FloatingBubbles} from "./floating-bubbles.jsx";

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

    const projects = getProjects(t);

    return (
        <div className="min-h-screen relative px-4 py-10 flex flex-col justify-center bg-gradient-to-r from-white to-green-100 overflow-hidden">

            <FloatingBubbles/>

            {/* Linha de progresso */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full z-10 bg-white">
                <div
                    id="scroll-line"
                    className="w-full bg-green-600 origin-top scale-y-0 transition-transform duration-500 ease-linear"
                    style={{ height: "100%" }}
                />
            </div>

            <div className="flex flex-col items-center relative z-10 w-full space-y-32 max-w-6xl mx-auto">
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
                                <div className="text-sm text-gray-500 font-sigmarOne text-left pl-4">
                                    <p>{project.startDate} - {project.endDate}</p>
                                </div>
                            )}
                        </div>

                        <div className="w-[4px] relative flex justify-center">
                            <div className="w-5 h-5 bg-green-600 rounded-full border-2 border-white absolute top-1/2 -translate-y-1/2" />
                        </div>

                        <div className="flex-1 flex justify-start pl-6">
                            {project.side === "right" ? (
                                <div className="reveal-card">
                                    <CardProjects {...project} />
                                </div>
                            ) : (
                                <div className="text-sm text-gray-500 font-sigmarOne text-right pr-4">
                                    <p>{project.startDate} - {project.endDate}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

