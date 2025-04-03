import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaFile,
} from "react-icons/fa";
import eu from "../../public/img/i.jpg";
import { useEffect, useState } from "react";
import { getTexts } from "../data/text";
import curriculo from "../../public/pdf/Curriculo de Lucas Oliveira.pdf";

function MainFirstPage({ language, scrollToProjects }) {
  const [showArrow, setShowArrow] = useState(true);
  const [fade, setFade] = useState(false);
  const [currentText, setCurrentText] = useState(getTexts(language));

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY <= 77);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setFade(true);
    setTimeout(() => {
      setCurrentText(getTexts(language));
      setFade(false);
    }, 300);
  }, [language]);

  return (
    <div>
      <div className="h-[95vh] bg-[#111316] flex flex-col md:flex-row justify-center text-white pt-[70px] px-4 md:px-0">
        <div className="w-full md:w-[600px] bg-[#111316] p-8 rounded-lg cursor-default">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-500 flex items-center justify-center">
              <span>
                <img
                  src={eu}
                  alt={currentText.alt}
                  title={currentText.titlePhoto}
                  className="object-cover w-32 h-32 md:w-48 md:h-48 rounded-full"
                />
              </span>
            </div>
            <div
              className={`transition-transform duration-500 ${
                fade ? "scale-90 opacity-50" : "scale-100 opacity-100"
              }`}
            >
              <h1 className="text-2xl md:text-3xl font-bold">Lucas Oliveira</h1>
              <div className="line-animation"></div>
              <p className="text-md md:text-lg text-gray-400">
                {currentText.role}
              </p>
              <p className="text-gray-500">
                {currentText.pronouns}, {currentText.age}
              </p>
            </div>
          </div>

          <p
            className={`mt-4 text-gray-300 leading-relaxed text-sm md:text-base transition-opacity duration-500 ${
              fade ? "opacity-50" : "opacity-100"
            }`}
          >
            {currentText.description}
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <a
              href="mailto:camposdlucasoli@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <FaEnvelope className="text-gray-400 hover:text-white text-xl md:text-2xl transition" />
            </a>
            <a
              href="https://github.com/lucasoliveira04"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <FaGithub className="text-gray-400 hover:text-white text-xl md:text-2xl transition" />
            </a>
            <a
              href="https://linkedin.com/in/lucas-oliveira-campos"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedln"
            >
              <FaLinkedin className="text-gray-400 hover:text-white text-xl md:text-2xl transition" />
            </a>
            <a
              href={curriculo}
              target="_blank"
              rel="noopener noreferrer"
              title="Curriculo"
            >
              <FaFile className="text-gray-400 hover:text-white text-xl md:text-2xl transition" />
            </a>
          </div>
        </div>
      </div>

      {showArrow && (
        <div
          className="h-[5vh] bg-[#111316] flex justify-center text-white cursor-pointer"
          onClick={scrollToProjects}
        >
          <FaArrowDown className="animate-bounce text-2xl md:text-3xl" />
        </div>
      )}
    </div>
  );
}

export default MainFirstPage;
