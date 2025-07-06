import nossoMarSalveOsPatinhosLogo from "../assets/projects/nossoMarSalveOsPatinhosLogo.jpg";
import deckIfy from "../assets/projects/deckIfy.png";
import estagio from "../assets/projects/estagio.png";
import chatBot from "../assets/projects/chatbot.png";
import capaArtigo from "../assets/projects/CAPA-Artigo-O-que-e-Tecnologia-da-Informacao-TI-768x450.jpg";
import restauranteLogo from "../assets/projects/restauranteLogo.png";

import reactIcon from "../assets/langs/programing.png";
import tailwindCss from "../assets/langs/Tailwind CSS.png";
import python from "../assets/langs/python.png";
import excel from "../assets/langs/excel.png";
import powerBi from "../assets/langs/powerBi.png";
import csharp from "../assets/langs/c-sharp.png";
import unity from "../assets/langs/unity.png";
import java from "../assets/langs/java.png";
import sql from "../assets/langs/sql-server.png";
import firebase from "../assets/langs/firebase.png";
import redis from "../assets/langs/redis.png";
import rabbitmq from "../assets/langs/rabbitmq.png";
import docker from "../assets/langs/docker.png";
import flask from "../assets/langs/flask.png";
import postgresIcon from "../assets/langs/postgres.png";
import springBootIcon from "../assets/langs/spring.png";
import typescript from "../assets/langs/typescript.png";
import javascript from "../assets/langs/javascript.png";
import oracle from "../assets/langs/Oracle.png";

import article from "../assets/pdf/Artigo_Cientifico__O_impacto_da_pandemia_na_economia_da_Airbnb.pdf";

export function getProjects(t) {
  return [
    {
      title: t("projectsAndExperiences.processImageAPI.title"),
      description: t("projectsAndExperiences.processImageAPI.description"),
      langs: [
        { name: "Python", icon: python },
        { name: "Flask", icon: flask },
        { name: "Redis", icon: redis },
        { name: "RabbitMQ", icon: rabbitmq },
        { name: "Docker", icon: docker },
      ],
      startDate: "Jun 2025",
      endDate: "Jun 2025",
      github: "Github",
      repoUrl: "https://github.com/lucasoliveira04/api-process-image.git",
      images: [estagio],
      tags: ["backend"],
    },
    {
      title: t("projectsAndExperiences.estagioPlanetEco.title"),
      description: t("projectsAndExperiences.estagioPlanetEco.description"),
      langs: [
        { name: "Excel", icon: excel },
        { name: "Python", icon: python },
        { name: "Oracle SQL", icon: oracle },
        { name: "Flask", icon: flask },
        { name: "Redis", icon: redis },
        { name: "Tailwind CSS", icon: tailwindCss },
        { name: "TypeScript", icon: typescript },
        { name: "React.js", icon: reactIcon },
        { name: "JavaScript", icon: javascript },
      ],
      startDate: "Maio 2025",
      endDate: "",
      images: [estagio],
      tags: ["frontend", "backend", "fullstack"],
    },
    {
      title: t("projectsAndExperiences.restaurantePs.title"),
      description: t("projectsAndExperiences.restaurantePs.description"),
      langs: [
        { name: "React.js", icon: reactIcon },
        { name: "Firebase", icon: firebase },
      ],
      github: "Github",
      repoUrl: "https://github.com/lucasoliveira04/restaurant_freela",
      visitUrl: "https://restaurant-freela.vercel.app/",
      visit: t("projectsAndExperiences.visit"),
      startDate: "Abril 2025",
      endDate: "Jun 2025",
      images: [restauranteLogo],
      tags: ["frontend"],
    },
    {
      title: t("projectsAndExperiences.ankiConvertAPI.title"),
      description: t("projectsAndExperiences.ankiConvertAPI.description"),
      langs: [
        { name: "Python", icon: python },
        { name: "Flask", icon: flask },
      ],
      github: "Github",
      repoUrl: "https://github.com/lucasoliveira04/anki-convert-api.git",
      startDate: "Mar 2025",
      endDate: "May 2025",
      images: [deckIfy],
    },
    {
      title: t("projectsAndExperiences.deckIfy.title"),
      description: t("projectsAndExperiences.deckIfy.description"),
      langs: [
        { name: "React.js", icon: reactIcon },
        { name: "Tailwind", icon: tailwindCss },
        { name: "Python", icon: python },
      ],
      github: "Github",
      repoUrl: "https://github.com/lucasoliveira04/DeckIfy.git",
      visitUrl: "https://www.deckify.shop/",
      visit: t("projectsAndExperiences.visit"),
      startDate: "Fev 2025",
      images: [deckIfy],
      tags: ["frontend", "backend", "fullstack"],
    },
    {
      title: t("projectsAndExperiences.artigoCientifico.title"),
      description: t("projectsAndExperiences.artigoCientifico.description"),
      langs: [
        { name: "Python", icon: python },
        { name: "SQL", icon: sql },
      ],
      downloadPdf: t("projectsAndExperiences.download"),
      pdfUrl: article,
      startDate: "Jul 2024",
      endDate: "Dez 2024",
      images: [capaArtigo],
      tags: ["backend", "fullstack"],
    },
    {
      title: t("projectsAndExperiences.chatBotAI.title"),
      description: t("projectsAndExperiences.chatBotAI.description"),
      langs: [
        { name: "React.js", icon: reactIcon },
        { name: "Tailwind", icon: tailwindCss },
        { name: "Java", icon: java },
      ],
      visitUrl: "https://chatbot-js-xi.vercel.app/",
      github: "Github",
      repoUrl: "https://github.com/lucasoliveira04/ai-chatbot-js.git",
      visit: t("projectsAndExperiences.visit"),
      startDate: "Jul 2024",
      endDate: "Dez 2024",
      images: [chatBot],
      tags: ["frontend", "backend", "fullstack"],
    },
    {
      title: t("projectsAndExperiences.nossoMarSalveOsPatos.title"),
      description: t("projectsAndExperiences.nossoMarSalveOsPatos.description"),
      langs: [
        { name: "Unity", icon: unity },
        { name: "C#", icon: csharp },
      ],
      repoUrl: "https://github.com/MTGrupo/SOP-SalveOsPatinhos.git",
      github: "Github",
      visitUrl: "https://mtgroup.itch.io/nosso-mar-salve-os-patinhos",
      visit: t("projectsAndExperiences.visit"),
      startDate: "Jul 2024",
      endDate: "Dez 2024",
      images: [nossoMarSalveOsPatinhosLogo],
      tags: ["game"],
    },
    {
      title: t("projectsAndExperiences.authJWTAPI.title"),
      description: t("projectsAndExperiences.authJWTAPI.description"),
      langs: [
        { name: "Java", icon: java },
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "Spring Boot", icon: springBootIcon },
      ],
      startDate: "May 2024",
      endDate: "Aug 2024",
      tags: ["backend", "fullstack"],
      images: [estagio],
      github: "Github",
      repoUrl: "https://github.com/lucasoliveira04/api_login_jwt.git",
    },
  ];
}
