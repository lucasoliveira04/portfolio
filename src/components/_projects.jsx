import { useState } from "react";
import "../../public/css/project.css";

import js from "../../public/img/js.png";
import reactjsx from "../../public/img/reactjsx.png";
import tailwind from "../../public/img/tailwind.png";
import unity from "../../public/img/unity.png";
import csharp from "../../public/img/csharp.png";
import python from "../../public/img/python.png";

import github_dektop_viewer from "../../public/img/projects/github-dektop-viewer.png";
import github_dektop_viewer_1 from "../../public/img/projects/github-desktop-viewer-1.png";

import { FaCog, FaRobot } from "react-icons/fa";
import { getTexts } from "../data/text";
import { highlightWords } from "../data/highlightWords";
import CarrouselComponet from "./carrousel";

export function Projects({ language }) {
    const [showInteractive, setShowInteractive] = useState(false);
    const text = getTexts(language);

    const handleStartGame = () => {
        setShowInteractive(true);
    };

    const highlightDescription = (text, language) => {
        let updatedText = text;

        const wordsToHighlight = highlightWords[language];

        Object.entries(wordsToHighlight).forEach(([word, className]) => {
            if (word !== "C#") {
                const regex = new RegExp(`\\b${word}\\b`, "gi");
                updatedText = updatedText.replace(
                    regex,
                    (match) => `<span class="${className}">${match}</span>`
                );
            }
        });

        // Aplicando a estilização para "C#" separadamente
        updatedText = updatedText.replace(
            /C#/g,
            `<span class="${wordsToHighlight["C#"]}">C#</span>`
        );

        return <span dangerouslySetInnerHTML={{ __html: updatedText }} />;
    };

    const projects = [
        {
            id: 1,
            title: text.projects[0].title,
            description: text.projects[0].description,
            media: [{ type: "video", src: "https://www.youtube.com/embed/IhRlrBPqkrU?wjPNe9Pp61O9AV" },{ type: "image", src: github_dektop_viewer },{ type: "image", src: github_dektop_viewer_1 } ],
            siteUrl: "https://example.com/project1",
            isInteractive: false,
            technologies: [{ src: python, alt: "Python" }],
            visitSite: false,
            textVisitSite: text.projects[0].visit
        },
        {
            id: 2,
            title: (
                <div className="flex items-center">
                    <span>{text.projects[1].title}</span>
                    <FaRobot className="ml-2" size={20} />
                </div>
            ),
            description: text.projects[1].description,
            media: [{ type: "video", src: "https://www.youtube.com/embed/t2eYsNFGEQE?start=2" }],
            siteUrl: "https://chatbot-js-xi.vercel.app/",
            isInteractive: false,
            technologies: [
                { src: reactjsx, alt: "ReactJSX" },
                { src: tailwind, alt: "Tailwind" },
            ],
            visitSite: true,
            textVisitSite: text.projects[1].visit
        },
        {
            id: 3,
            title: text.projects[2].title,
            description: text.projects[2].description,
            media: [{ type: "video", src: "https://www.youtube.com/embed/fDyu3GRaqsY?si=nnYgyDPGdCm1uYZR" }],
            siteUrl: "https://example.com/project3",
            isInteractive: false,
            technologies: [
                { src: csharp, alt: "C#" },
                { src: unity, alt: "Unity" },
            ],
            visitSite: true,
            textVisitSite: text.projects[2].visit
        },
    ];

    const sortedProjects = projects.sort((a, b) => {
        if (a.imageUrl && !b.imageUrl) return 1;
        if (!a.imageUrl && b.imageUrl) return -1;
        return 0;
    });

    return (
        <div className="h-auto bg-[#23272b] p-10">
            <div className="mb-6 flex items-center">
                <FaCog className="mr-2 text-white transition-transform duration-500 ease-in-out hover:rotate-[360deg]" size={24} />
                <h2 className="text-white text-3xl font-semibold">{text.header.projects}</h2>
            </div>

            <div className="grid grid-cols-1 justify-center items-center justify-items-center gap-6 
            sm:grid-cols-1 
            md:grid-cols-1 
            lg:grid-cols-2 
            xl:grid-cols-3
            ">
                {sortedProjects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card p-4 rounded-lg shadow-lg hover:shadow-xl hover:translate-y-1 transition duration-300 ease-in-out w-full max-w-xs flex flex-col min-h-[400px] 
                        sm:max-w-md sm:h-[650px]
                        lg:max-w-lg 
                        xl:max-w-xl 
                        "
                    >
                        <div className="project-content flex-grow mt-4">
                            <CarrouselComponet media={project.media}/>
                            <div className="flex items-center justify-between gap-10 mt-4">
                                <h3 className="project-title text-xl font-semibold">{project.title}</h3>
                                {project.isInteractive && (
                                    <p
                                        onClick={handleStartGame}
                                        className="text-white font-bold cursor-pointer hover:font-normal"
                                    >
                                        {showInteractive ? text.projects[2].using : text.projects[2].use}
                                    </p>
                                )}
                                {project.visitSite && project.siteUrl && (
                                    <a
                                        href={project.siteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white font-bold cursor-pointer hover:font-normal"
                                    >
                                        {text.projects[0].visit}
                                    </a>
                                )}
                            </div>
                            <p className="project-description text-gray-500 mt-2">
                                {highlightDescription(project.description, language)}
                            </p>
                        </div>

                        <div className="technologies mt-4 flex justify-center gap-4">
                            {project.technologies.map((tech, index) => (
                                <img
                                    key={index}
                                    src={tech.src}
                                    alt={tech.alt}
                                    className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-200"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
