import { Project } from "../base/projectCardBase";

import python from "../../assets/langs/python.png";
import react from "../../assets/langs/programing.png";
import flask from "../../assets/langs/Flask.png";
import typescript from "../../assets/langs/typescript.png";
import redis from "../../assets/langs/redis.png";
import oracle from "../../assets/langs/Oracle.png";

import estagio from "../../assets/projects/estagio.png";

export class EstagioPlanetEco extends Project {
  constructor(t) {
    super(
      true,
      t("projectsAndExperiences.estagioPlanetEco.title"),
      t("projectsAndExperiences.estagioPlanetEco.description"),
      [
        { name: "React", icon: react },
        { name: "Typescript", icon: typescript },
        { name: "Redis", icon: redis },
        { name: "Flask", icon: flask },
        { name: "Python", icon: python },
        { name: "Oracle", icon: oracle }
      ],
      "Github",
      "https://github.com/lucasoliveira04/estagio-planet-eco.git",
      null,
      null,
      "Jun 2025",
      [estagio],
      ["fullstack, xpProfissional, estagio"],
    );
  }
}
