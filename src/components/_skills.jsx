import { useEffect, useRef, useState } from "react";
import { getTexts } from "../data/text";
import { ImageStack } from "./_imageStack";
import { motion } from "framer-motion";

import js from "../../public/img/stacks/js.png";
import git from "../../public/img/stacks/git.png";
import html from "../../public/img/stacks/html-5.png";
import java from "../../public/img/stacks/java.png";
import css from "../../public/img/stacks/css-3.png";
import tailwind from "../../public/img/stacks/tailwind.png";
import sql from "../../public/img/stacks/sql-server.png";
import bootstrap from "../../public/img/stacks/bootstrap.png";
import reactjsx from "../../public/img/stacks/science.png";
import python from "../../public/img/stacks/python.png";
import unity from "../../public/img/stacks/unity.png";
import firebase from "../../public/img/stacks/database.png";

export const SkillsMe = ({ language }) => {
  const [isMobile, setIsMobile] = useState(false);
  const text = getTexts(language);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1220);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const skills = [
    {
      src: js,
      title: "JavaScript",
      left: "5%",
      top: "10%",
      initialScale: "scale-[1.3]",
    },
    {
      src: git,
      title: "Git",
      left: "10%",
      top: "70%",
      initialScale: "scale-100",
    },
    {
      src: html,
      title: "HTML",
      left: "20%",
      top: "40%",
      initialScale: "scale-80",
    },
    {
      src: java,
      title: "Java",
      left: "30%",
      top: "70%",
      initialScale: "scale-[1.5]",
    },
    {
      src: css,
      title: "CSS",
      left: "40%",
      top: "20%",
      initialScale: "scale-[1.3]",
    },
    {
      src: tailwind,
      title: "Tailwind",
      left: "45%",
      top: "60%",
      initialScale: "scale-110",
    },
    {
      src: sql,
      title: "SQL",
      left: "65%",
      top: "10%",
      initialScale: "scale-[0.9]",
    },
    {
      src: python,
      title: "Python",
      left: "70%",
      top: "45%",
      initialScale: "scale-160",
    },
    {
      src: bootstrap,
      title: "Bootstrap",
      left: "60%",
      top: "75%",
      initialScale: "scale-80",
    },
    {
      src: reactjsx,
      title: "ReactJSX",
      left: isMobile ? "85%" : "90%",
      top: "20%",
      initialScale: "scale-[1.3]",
    },
    {
      src: unity,
      title: "Unity",
      left: isMobile ? "85%" : "86%",
      top: isMobile ? "65%" : "70%",
      initialScale: "scale-[1.3]",
    },
    {
      src: firebase,
      title: "Unity",
      left: isMobile ? "25%" : "25%",
      top: isMobile ? "5%" : "5%",
      initialScale: "scale-[1.3]",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full h-[70vh] relative bg-[#111316] overflow-hidden flex flex-col items-center"
    >
      <h1 className="text-white text-2xl font-boldonse md:text-3xl mt-4">
        {text.skill}
      </h1>

      <div className="relative w-full h-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
          >
            <ImageStack
              src={skill.src}
              title={skill.title}
              left={skill.left}
              top={skill.top}
              opacity="75%"
              initialScale={skill.initialScale}
              tiltDirection={index % 2 === 0 ? "left" : "right"}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
