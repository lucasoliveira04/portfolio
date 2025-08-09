import { Project } from "../base/projectCardBase";

import typescript from "../../assets/langs/typescript.png";
import excel from "../../assets/langs/excel.png";
import python from "../../assets/langs/python.png";
import oracleSql from "../../assets/langs/Oracle.png";
import tailwindcss from "../../assets/langs/Tailwind CSS.png";
import docker from "../../assets/langs/docker.png";
import flask from "../../assets/langs/Flask.png";

export class EstagioPlanetEco extends Project {
  constructor(t) {
    super(
      true,
      t("projectsAndExperiences.estagioPlanetEco.title"),
      t("projectsAndExperiences.estagioPlanetEco.description"),
      [
        { name: "React", icon: react },
        { name: "Node.js", icon: node },
        { name: "MongoDB", icon: mongodb },
      ],
      "Github",
      "https://github.com/lucasoliveira04/estagio-planet-eco.git",
      null,
      null,
      "Jun 2025",
      [estagio],
      ["fullstack"]
    );
  }
}
