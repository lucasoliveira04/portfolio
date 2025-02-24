import { useState, useRef } from "react";
import HeaderComponent from "../components/_header";
import MainFirstPage from "../components/_mainFirstPage";
import "../../public/css/animation.css";
import "../../public/css/scrool.css";

import { Projects } from "../components/_projects";
import FeedBackComponent from "../components/_feedback";
import FooterComponent from "../components/_footer";

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
      <HeaderComponent setLanguage={setLanguage} scrollToProjects={scrollToProjects} />

      <MainFirstPage language={language} scrollToProjects={scrollToProjects} />

      <div className="secao" ref={projectsRef}></div>

      <div>
        <Projects language={language}/>
      </div>

      <div className="secao-1"></div>

      <FeedBackComponent language={language}/>

      <FooterComponent language={language}/>

    </div>
  );
};
