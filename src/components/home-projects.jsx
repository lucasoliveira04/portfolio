import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { CardProjects } from "./card-projects.jsx";
import { useTranslation } from "react-i18next";
import { getProjects } from "../data/projectData.js";
import { FloatingBubbles } from "./floating-bubbles.jsx";

export function HomeProjects() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

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

  const buttonsFilterObject = {
    all: t("filters.all"),
    frontend: t("filters.frontend"),
    backend: t("filters.backend"),
    fullstack: t("filters.fullstack"),
    data: t("filters.data"),
    game: t("filters.game"),
  };

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.tags?.includes(selectedFilter));

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <>
      {/* Botões de filtro */}
      <div className="bg-gradient-to-r from-white to-green-100 flex flex-wrap justify-center py-4">
        {Object.keys(buttonsFilterObject).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 m-2 rounded-full shadow-md transition duration-200 ease-in-out
              ${
                selectedFilter === key
                  ? "bg-green-800 text-white ring-2 ring-green-900"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            onClick={() => setSelectedFilter(key)}
          >
            {buttonsFilterObject[key]}
          </button>
        ))}
      </div>

      {/* Conteúdo principal */}
      <div
        className="min-h-screen relative px-4 flex flex-col justify-center bg-gradient-to-r from-white to-green-100 overflow-hidden py-20"
        id="experience"
      >
        <FloatingBubbles />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full z-10 bg-white">
          <div
            id="scroll-line"
            className="w-full bg-green-600 origin-top scale-y-0 transition-transform duration-200 ease-linear"
            style={{ height: "120%" }}
          />
        </div>

        <div className="flex flex-col space-y-32 w-full max-w-6xl mx-auto relative z-10">
          {visibleProjects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center w-full relative space-y-4 md:space-y-0"
                style={{ minHeight: "120px" }}
              >
                {/* Lado esquerdo */}
                <div className="flex-1 flex justify-center md:justify-end pr-0 md:pr-6">
                  {isLeft ? (
                    <div className="reveal-card w-full max-w-md">
                      <CardProjects {...project} />
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 font-sigmarOne text-center md:text-right pr-0 md:pr-4">
                      <p className={project.endDate ? "" : "pl-12 pr-2"}>
                        {project.startDate} -{" "}
                        {project.endDate
                          ? project.endDate
                          : t("progressProjects")}
                      </p>
                    </div>
                  )}
                </div>

                {/* Linha central */}
                <div className="w-[4px] relative flex justify-center my-2 md:my-0">
                  <div className="w-5 h-5 bg-green-600 rounded-full border-2 border-white absolute top-1/2 -translate-y-1/2" />
                </div>

                {/* Lado direito */}
                <div className="flex-1 flex justify-center md:justify-start pl-0 md:pl-6">
                  {!isLeft ? (
                    <div className="reveal-card w-full max-w-md">
                      <CardProjects {...project} />
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 font-sigmarOne text-center md:text-right pr-0 md:pr-4">
                      <p className={project.endDate ? "" : "pl-14 pr-1"}>
                        {project.startDate} -{" "}
                        {project.endDate
                          ? project.endDate
                          : t("progressProjects")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Botão Ver Mais / Ver Menos */}
          {filteredProjects.length > 3 && (
            <div className="flex justify-center mt-8">
              <button
                className="px-6 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? t("showLess") : t("showMore")}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
