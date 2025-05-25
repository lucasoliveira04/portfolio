import { useTranslation } from "react-i18next";
import { useState } from "react";

import eu from "../../public/img/iam/Eu.png";
import java from "../../public/img/langs/java.png";
import python from "../../public/img/langs/python.png"
import react from "../../public/img/langs/programing.png"
import tailwind from "../../public/img/langs/Tailwind CSS.png"
import sql from "../../public/img/langs/sql-server.png"
import {WaterButton} from "./watter-button.jsx";

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
        wordsToHighlight.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
            <span key={index} className="text-green-600 font-bold">
                {part}
            </span>
        ) : (
            part
        )
    );
}

function getCurrentAge(birthYear = 2004, birthMonth = 6) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    let age = year - birthYear;
    if (month < birthMonth) {
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

    const boxShadow = `${-shadowPos.x * 20}px ${-shadowPos.y * 20}px 30px rgba(0, 0, 0, 0.4)`;

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
        { name: "Python", color: "#306998", icon: python },
        { name: "React", color: "#0c1a1e", icon: react },
        { name: "Tailwind CSS", color: "#38b2ac", icon: tailwind },
        { name: "SQL", color: "#cc2927", icon: sql },
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
                        <span key={i}>
                        {highlightText(text, highlightWords)}{" "}
                    </span>
                    ))}
                </p>

                <div className="flex flex-wrap gap-4 justify-center mt-6">
                    {languages.map(({ name, color, icon }) => (
                        <WaterButton key={name} name={name} color={color} icon={icon} />
                    ))}
                </div>
            </div>
        </div>
    );

}
