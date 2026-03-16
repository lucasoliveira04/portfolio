import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { CardProjects } from "./card-projects.jsx";
import { useTranslation } from "react-i18next";
import { getProjects } from "../data/projectData.js";
import { FloatingBubbles } from "./floating-bubbles.jsx";
import {
  SCROLL_REVEAL_CONFIG,
  INITIAL_VISIBLE_COUNT,
  MONTH_MAP,
  FILTER_KEYS,
} from "../constants/projects.js";

export function HomeProjects() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedFilterDate, setSelectedFilterDate] = useState("recent");

  useEffect(() => {
    ScrollReveal().reveal(".reveal-card", SCROLL_REVEAL_CONFIG);

    const scrollLine = document.getElementById("scroll-line");
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / totalHeight, 1);
      scrollLine.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = getProjects(t);
  const visibleOnly = projects.filter((p) => p.viewProject !== false);

  const buttonsFilterObject = Object.fromEntries(
    FILTER_KEYS.map((key) => [key, t(`filters.${key}`)]),
  );

  function parseDateString(dateStr) {
    if (!dateStr) return new Date(0);
    const [month, year] = dateStr.split(" ");
    return new Date(parseInt(year), MONTH_MAP[month] ?? 0);
  }

  const filteredByCategory =
    selectedFilter === "all"
      ? visibleOnly
      : visibleOnly.filter((p) => p.tags?.includes(selectedFilter));

  const sortedProjects = [...filteredByCategory]
    .sort((a, b) => {
      const dateA = parseDateString(a.startDate);
      const dateB = parseDateString(b.startDate);
      return selectedFilterDate === "old" ? dateA - dateB : dateB - dateA;
    })
    .sort((a, b) => a.positionProject - b.positionProject);

  const visibleProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <>
      {/* Filtros */}
      <div className="bg-gradient-to-r from-white to-green-100 flex flex-wrap justify-center gap-4 py-4" />

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
                        {project.startDate} —{" "}
                        {project.endDate || t("progressProjects")}
                      </p>
                    </div>
                  )}
                </div>

                {/* Ponto central */}
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
                        {project.startDate} —{" "}
                        {project.endDate || t("progressProjects")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {sortedProjects.length > INITIAL_VISIBLE_COUNT && (
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
