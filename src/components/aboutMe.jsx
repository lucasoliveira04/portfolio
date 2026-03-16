import { useTranslation } from "react-i18next";
import { useState } from "react";
import { WaterButton } from "./watter-button.jsx";
import {
  ABOUT_PHOTO,
  BIRTH_DATE,
  COLLEGE_START,
  LANGUAGES,
  HIGHLIGHT_WORDS,
} from "../constants/about.js";

function highlightText(text, wordsToHighlight) {
  const regex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    wordsToHighlight.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    ) ? (
      <span key={index} className="text-green-600 font-bold">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function getCurrentAge({ year, month, day } = BIRTH_DATE) {
  const today = new Date();
  let age = today.getFullYear() - year;
  if (
    today.getMonth() + 1 < month ||
    (today.getMonth() + 1 === month && today.getDate() < day)
  )
    age -= 1;
  return age;
}

function getCurrentSemester({ year, month } = COLLEGE_START) {
  const today = new Date();
  const startDate = new Date(year, month - 1);
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
    t("aboutMe.intro", { age, semester: semester + "º" }),
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
    const offsetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const offsetY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setShadowPos({ x: offsetX, y: offsetY });
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setShadowPos({ x: 0, y: 0 });
    setIsHovered(false);
  }

  const imgStyle = {
    boxShadow: `${-shadowPos.x * 20}px ${-shadowPos.y * 20}px 30px rgba(0,0,0,0.4)`,
    transform: `translate(${shadowPos.x * 10}px, ${shadowPos.y * 10}px) scale(${isHovered ? 1.05 : 1})`,
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
  };

  return (
    <div
      className="flex flex-col md:flex-row gap-6 min-h-screen relative px-4 py-16 md:py-24 justify-center bg-gradient-to-l from-green-100 via-green-50 to-white overflow-hidden"
      id="aboutMe"
    >
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="p-4 bg-white bg-opacity-15 rounded-xl shadow-xl">
          <img
            src={ABOUT_PHOTO}
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
            <span key={i}>{highlightText(text, HIGHLIGHT_WORDS)} </span>
          ))}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mt-6">
          {LANGUAGES.map(({ name, color, icon }) => (
            <WaterButton key={name} name={name} color={color} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
