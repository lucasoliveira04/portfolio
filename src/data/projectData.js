import nossoMarSalveOsPatinhosLogo from "../assets/projects/nossoMarSalveOsPatinhosLogo.jpg";
import deckIfy from "../assets/projects/deckIfy.png";
import estagio from "../assets/projects/estagio.png";
import chatBot from "../assets/projects/chatbot.png";
import capaArtigo from "../assets/projects/CAPA-Artigo-O-que-e-Tecnologia-da-Informacao-TI-768x450.jpg";

import reactIcon from "../assets/langs/programing.png";
import tailwindCss from "../assets/langs/Tailwind CSS.png";
import python from "../assets/langs/python.png";
import excel from "../assets/langs/excel.png";
import powerBi from "../assets/langs/powerBi.png";
import csharp from "../assets/langs/c-sharp.png";
import unity from "../assets/langs/unity.png";
import java from "../assets/langs/java.png";
import sql from "../assets/langs/sql-server.png";


import article from "../assets/pdf/Artigo_Cientifico__O_impacto_da_pandemia_na_economia_da_Airbnb.pdf";

export function getProjects(t) {
    return [
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
            endDate: "",
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
            github: "Github",
            repoUrl: "https://github.com/lucasoliveira04/DeckIfy.git",
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
            visitUrl: "https://chatbot-js-xi.vercel.app/",
            github: "Github",
            repoUrl: "https://github.com/lucasoliveira04/ai-chatbot-js.git",
            visit: t("projectsAndExperiences.visit"),
            startDate: "Jul 2024",
            endDate: "Dez 2024",
            images: [chatBot],
        },
        {
            title: t("projectsAndExperiences.artigoCientifico.title"),
            description: t("projectsAndExperiences.artigoCientifico.description"),
            langs: [
                { name: "Python", icon: python },
                { name: "SQL", icon: sql },
            ],
            side: "right",
            downloadPdf: t("projectsAndExperiences.download"),
            pdfUrl: article,
            startDate: "Jul 2024",
            endDate: "Dez 2024",
            images: [capaArtigo],
        },
    ];
}
