import { useState, useRef } from "react";
import HeaderComponent from "../components/_header";
import MainFirstPage from "../components/_mainFirstPage";
import "../../public/css/animation.css";
import "../../public/css/scrool.css";

import { Projects } from "../components/_projects";

export const HomePage = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "pt");

  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="App">
      <HeaderComponent setLanguage={setLanguage} />
      <MainFirstPage language={language} scrollToProjects={scrollToProjects} />

      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
};
