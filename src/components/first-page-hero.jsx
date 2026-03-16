import { FaFile } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Typewriter } from "../util/Typewriter.jsx";
import { ScrollArrow } from "./scroll-arrow.jsx";
import { SOCIAL_LINKS, CURRICULO } from "../constants/social.js";
import { PROFILE } from "../constants/profile.js";

export const HomePage = () => {
  const { t } = useTranslation();

  const currentLang = i18next.language;
  const curriculoUrl = currentLang.startsWith("pt")
    ? CURRICULO.pt
    : CURRICULO.en;

  const socialLinks = [
    ...SOCIAL_LINKS,
    {
      name: "Currículo",
      url: curriculoUrl,
      icon: FaFile,
    },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-white to-green-100 flex items-start pt-20 md:pt-32 px-10 overflow-hidden">
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start">
        {/* Foto */}
        <div className="flex justify-center w-full md:w-[40%] order-1 md:order-2 mt-0 md:mt-0">
          <div className="w-56 h-56 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-green-500 mt-10">
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex-1 h-[50vh] pt-10 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900 leading-tight font-comic">
            {PROFILE.name}
          </h1>
          <Typewriter text={t("home.subtitle")} />

          <div className="flex gap-3 mt-10 text-3xl text-green-600 justify-center md:justify-start">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition duration-200"
                aria-label={name}
                title={name}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <ScrollArrow />
    </div>
  );
};
