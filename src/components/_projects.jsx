import { useState } from "react";
import "../../public/css/project.css";

import js from "../../public/img/js.png";
import reactjsx from "../../public/img/reactjsx.png";
import tailwind from "../../public/img/tailwind.png";
import unity from "../../public/img/unity.png";
import csharp from "../../public/img/csharp.png";
import python from "../../public/img/python.png";

import github_dektop_viewer from "../../public/img/projects/github-dektop-viewer.png"

import { FaCog, FaRobot } from "react-icons/fa";
import { getTexts } from "../data/text";
import { highlightWords } from "../data/highlightWords";

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
            imageUrl: github_dektop_viewer,
            videoUrl: null,
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
            imageUrl: null,
            videoUrl: "https://www.youtube.com/embed/t2eYsNFGEQE?start=2",
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
            imageUrl: null,
            videoUrl: "https://www.youtube.com/embed/zkRL5I0OamY?si=c54NDbq8hLkLA5ws",
            siteUrl: "https://example.com/project3",
            isInteractive: true,
            technologies: [
                { src: csharp, alt: "C#" },
                { src: unity, alt: "Unity" },
            ],
            visitSite: false,
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center justify-items-center gap-6">
                {sortedProjects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card p-4 rounded-lg border h-[89vh] shadow-lg hover:shadow-xl transition duration-300 ease-in-out w-full max-w-xs 
                        sm:max-w-md h-[110vh] 
                        lg:max-w-lg xl:max-w-xl 
                        flex flex-col"
                    >
                        <div className="project-content flex-grow mt-4">
                            {project.imageUrl && (
                                <div className="project-image">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            {project.videoUrl && !project.isInteractive && (
                                <div className="project-video">
                                    <iframe
                                        width="100%"
                                        height="200"
                                        src={project.videoUrl}
                                        title="Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                            {project.isInteractive && (
                                <div className="project-video">
                                    {!showInteractive ? (
                                        <iframe
                                            width="100%"
                                            height="200"
                                            src={project.videoUrl}
                                            title="Interactive Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <div className="interactive-screen bg-gray-800 w-full h-[200px] flex items-center justify-center rounded-lg">
                                            <p className="text-white text-lg">Tela Interativa aqui!</p>
                                        </div>
                                    )}
                                </div>
                            )}
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
