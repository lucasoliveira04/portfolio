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
  const [selectedFilterDate, setSelectedFilterDate] = useState("recent");

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

  // Filtra apenas projetos visíveis
  const visibleOnly = projects.filter(
    (project) => project.viewProject !== false
  );

  const buttonsFilterObject = {
    all: t("filters.all"),
    frontend: t("filters.frontend"),
    backend: t("filters.backend"),
    fullstack: t("filters.fullstack"),
    game: t("filters.game"),
  };

  function parseDateString(dateStr) {
    const months = {
      Jan: 0,
      Fev: 1,
      Mar: 2,
      Abr: 3,
      Abril: 3,
      Maio: 4,
      May: 4,
      Jun: 5,
      Jul: 6,
      Ago: 7,
      Set: 8,
      Out: 9,
      Nov: 10,
      Dez: 11,
    };

    if (!dateStr) return new Date(0);
    const [month, year] = dateStr.split(" ");
    return new Date(parseInt(year), months[month] ?? 0);
  }

  // Filtro por categoria
  const filteredByCategory =
    selectedFilter === "all"
      ? visibleOnly
      : visibleOnly.filter((project) => project.tags?.includes(selectedFilter));

  // Ordenação por data
  const filteredProjects = [...filteredByCategory].sort((a, b) => {
    const dateA = parseDateString(a.startDate);
    const dateB = parseDateString(b.startDate);
    return selectedFilterDate === "old" ? dateA - dateB : dateB - dateA;
  });

  // Ordenar por posição
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    return a.positionProject - b.positionProject;
  });

  // Limite inicial (mostrar mais/menos)
  const visibleProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 3);

  return (
    <>
      {/* Filtros */}
      <div className="bg-gradient-to-r from-white to-green-100 flex flex-wrap justify-center gap-4 py-4">
        {/* Filtro por categoria */}
        <div className="relative inline-block w-48">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="block appearance-none w-full bg-green-600 text-white font-semibold py-2 px-4 pr-8 rounded-none shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-200 ease-in-out cursor-pointer"
          >
            {Object.entries(buttonsFilterObject).map(([key, label]) => (
              <option key={key} value={key} className="text-white font-bold">
                {label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Filtro por data */}
        <div className="relative inline-block w-48">
          <select
            value={selectedFilterDate}
            onChange={(e) => setSelectedFilterDate(e.target.value)}
            className="block appearance-none w-full bg-green-600 text-white font-semibold py-2 px-4 pr-8 rounded-none shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-200 ease-in-out cursor-pointer"
          >
            <option value="recent">
              {t("filters.recent")}
            </option>
            <option value="old">{t("filters.old")}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
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
                        {project.endDate || t("progressProjects")}
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
                        {project.endDate || t("progressProjects")}
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
