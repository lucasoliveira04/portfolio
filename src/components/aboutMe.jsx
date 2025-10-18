import { useTranslation } from "react-i18next";
import { useState } from "react";

import eu from "../assets/iam/Eu.png";
import python from "../assets/langs/python.png";
import sql from "../assets/langs/sql-server.png";
import java from "../assets/langs/java.png";
import spring from "../assets/langs/Spring.png"
import junit from "../assets/langs/JUnit.png"
import docker from "../assets/langs/docker.png"
import grafana from "../assets/langs/Grafana.png"
import typescript from "../assets/langs/typescript.png"
import { WaterButton } from "./watter-button.jsx";
import { color } from "framer-motion";
import { icons } from "lucide-react";


const highlightWords = [
  "20 anos",
  "5º",
  "Ciência da Computação",
  "Dezembro de 2026",
  "estagiando",
  "desenvolvimento de software",
  "back-end",
  "Spring Boot",
  "Flask",
  "front-end",
  "JavaScript",
  "React",
  "Native",
  "Docker",
  "Spring Security",
  "TypeORM",
  "RabbitMQ",
  "JPA",
  "Domain-Driven Design",
  "TypeScript",
  "Web",
  "Node.js",
  "microsserviços",
  "aplicações monolíticas",
  "SQL",
  "Firebase",
  "aprendizado contínuo",
  "20 years old",
  "Computer Science",
  "December 2026",
  "interning",
  "software development",
  "back-end development",
  "front-end skills",
  "microservices architecture",
  "monolithic applications",
  "continuous learning",
];

function highlightText(text, wordsToHighlight) {
  const regex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");

  const parts = text.split(regex);

  return parts.map((part, index) =>
    wordsToHighlight.some(
      (word) => word.toLowerCase() === part.toLowerCase()
    ) ? (
      <span key={index} className="text-green-600 font-bold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function getCurrentAge(birthYear = 2004, birthMonth = 6, birthDay = 29) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  let age = year - birthYear;
  if (month < birthMonth || (month === birthMonth && day < birthDay)) {
    age -= 1;
  }

  return age;
}

function getCurrentSemester(startYear = 2023, startMonth = 1) {
  const today = new Date();
  const startDate = new Date(startYear, startMonth - 1);
  const diffInMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  return Math.floor(diffInMonths / 6) + 1;
}

export function AboutMeHome() {
  const { t } = useTranslation();
  const age = getCurrentAge();
  const semester = getCurrentSemester();

  const aboutMeText = [
    t("aboutMe.intro", { age: age, semester: semester + "º" }),
    t("aboutMe.graduation"),
    t("aboutMe.work"),
    t("aboutMe.focus"),
    t("aboutMe.skills"),
    t("aboutMe.moreSkills"),
    t("aboutMe.learning"),
  ];

  const [shadowPos, setShadowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = (x / rect.width) * 2 - 1;
    const offsetY = (y / rect.height) * 2 - 1;

    setShadowPos({ x: offsetX, y: offsetY });
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setShadowPos({ x: 0, y: 0 });
    setIsHovered(false);
  }

  const boxShadow = `${-shadowPos.x * 20}px ${
    -shadowPos.y * 20
  }px 30px rgba(0, 0, 0, 0.4)`;

  const translateX = shadowPos.x * 10;
  const translateY = shadowPos.y * 10;
  const scale = isHovered ? 1.05 : 1;

  const imgStyle = {
    boxShadow,
    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
  };

  const languages = [
  { name: "Java", color: "#b07219", icon: java },        
  { name: "Spring", color: "#6DB33F", icon: spring },    
  { name: "Python", color: "#3776AB", icon: python }, 
  { name: "TypeScript", color: "#0284e7ff", icon: typescript},  
  { name: "SQL", color: "#CC2927", icon: sql },          
  { name: "JUnit", color: "#25A162", icon: junit },      
  { name: "Docker", color: "#2496ED", icon: docker },    
  { name: "Grafana", color: "#F46800", icon: grafana }   
];

  return (
    <div
      className="flex flex-col md:flex-row gap-6 min-h-screen relative px-4 py-16 md:py-24 justify-center
            bg-gradient-to-l from-green-100 via-green-50 to-white overflow-hidden"
      id="aboutMe"
    >
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="p-4 bg-white bg-opacity-15 rounded-xl shadow-xl">
          <img
            src={eu}
            alt="Minha foto acenando"
            className="w-40 md:w-full max-w-[456px] rounded-xl border-4 border-green-400"
            style={imgStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 space-y-6 md:space-y-4 text-justify justify-center items-center px-4 md:px-0">
        <p className="font-comic font-semibold text-base md:text-2xl">
          {aboutMeText.map((text, i) => (
            <span key={i}>{highlightText(text, highlightWords)} </span>
          ))}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mt-6">
          {languages.map(({ name, color, icon }) => (
            <WaterButton key={name} name={name} color={color} icon={icon} />
          ))}
        </div>

      </div>
    </div>
  );
}
