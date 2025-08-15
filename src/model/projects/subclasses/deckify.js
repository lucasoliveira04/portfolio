import { Project } from "../base/projectCardBase";

import python from "../../../assets/langs/python.png";
import react from "../../../assets/langs/programing.png";
import flask from "../../../assets/langs/Flask.png";
import javascript from "../../../assets/langs/js.png";
import docker from "../../../assets/langs/docker.png";
import tailwindcss from "../../../assets/langs/Tailwind CSS.png";

import deckify from "../../../assets/projects/deckIfy.png"

export class Deckify extends Project {
  constructor(t, position) {
    super(
      position,
      true,
      t("projectsAndExperiences.deckIfy.title"),
      t("projectsAndExperiences.deckIfy.description"),
      [
        { name: "Python", icon: python },
        { name: "React", icon: react },
        { name: "Flask", icon: flask },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "Javascript", icon: javascript },
        { name: "Docker", icon: docker }
      ],
      "Github",
      "https://github.com/lucasoliveira04/DeckIfy.git",
      "https://www.deckify.shop/",
      t("projectsAndExperiences.visit"),
      "Jul 2025",
      false,
      [deckify],
      ["backend", "frontend", "fullstack"],
    );
  }
}
