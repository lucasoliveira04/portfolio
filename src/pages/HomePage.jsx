import { useState, useRef } from "react";
import HeaderComponent from "../components/_header";
import MainFirstPage from "../components/_mainFirstPage";
import "../../public/css/animation.css";
import "../../public/css/scrool.css";

import { Projects } from "../components/_projects";
import FeedBackComponent from "../components/_feedback";
import FooterComponent from "../components/_footer";
import AboutMe from "../components/_aboutMe";

export const HomePage = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "pt");

  const projectsRef = useRef(null);
  const contactsMeRef = useRef(null)
  const aboutMeRef = useRef(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToContactsMe = () => {
    contactsMeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="App">

      <HeaderComponent setLanguage={setLanguage} scrollToProjects={scrollToProjects} scrollToContactsMe={scrollToContactsMe} scrollToAboutMe={scrollToAboutMe} />

      <MainFirstPage language={language} scrollToProjects={scrollToProjects} />

      <div className="secao" ref={projectsRef}></div>

      <div>
        <Projects language={language}/>
      </div>

      <div className="secao-1" ref={aboutMeRef}></div>

      <div>
        <AboutMe language={language}/>
      </div>

      <div className="secao"></div>

      <div ref={contactsMeRef}>
        <FeedBackComponent language={language}/>
      </div>

      <FooterComponent language={language} />

    </div>
  );
};
